"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var local_atob = typeof atob === 'undefined' ? function (str) { return Buffer.from(str, 'base64').toString('binary'); } : atob;
var local_btoa = typeof btoa === 'undefined' ? function (str) { return Buffer.from(str, 'binary').toString('base64'); } : btoa;
function string_to_bytes(str, utf8) {
    if (utf8 === void 0) { utf8 = false; }
    var len = str.length, bytes = new Uint8Array(utf8 ? 4 * len : len);
    for (var i = 0, j = 0; i < len; i++) {
        var c = str.charCodeAt(i);
        if (utf8 && 0xd800 <= c && c <= 0xdbff) {
            if (++i >= len)
                throw new Error('Malformed string, low surrogate expected at position ' + i);
            c = ((c ^ 0xd800) << 10) | 0x10000 | (str.charCodeAt(i) ^ 0xdc00);
        }
        else if (!utf8 && c >>> 8) {
            throw new Error('Wide characters are not allowed.');
        }
        if (!utf8 || c <= 0x7f) {
            bytes[j++] = c;
        }
        else if (c <= 0x7ff) {
            bytes[j++] = 0xc0 | (c >> 6);
            bytes[j++] = 0x80 | (c & 0x3f);
        }
        else if (c <= 0xffff) {
            bytes[j++] = 0xe0 | (c >> 12);
            bytes[j++] = 0x80 | ((c >> 6) & 0x3f);
            bytes[j++] = 0x80 | (c & 0x3f);
        }
        else {
            bytes[j++] = 0xf0 | (c >> 18);
            bytes[j++] = 0x80 | ((c >> 12) & 0x3f);
            bytes[j++] = 0x80 | ((c >> 6) & 0x3f);
            bytes[j++] = 0x80 | (c & 0x3f);
        }
    }
    return bytes.subarray(0, j);
}
exports.string_to_bytes = string_to_bytes;
function hex_to_bytes(str) {
    var len = str.length;
    if (len & 1) {
        str = '0' + str;
        len++;
    }
    var bytes = new Uint8Array(len >> 1);
    for (var i = 0; i < len; i += 2) {
        bytes[i >> 1] = parseInt(str.substr(i, 2), 16);
    }
    return bytes;
}
exports.hex_to_bytes = hex_to_bytes;
function base64_to_bytes(str) {
    return string_to_bytes(local_atob(str));
}
exports.base64_to_bytes = base64_to_bytes;
function bytes_to_string(bytes, utf8) {
    if (utf8 === void 0) { utf8 = false; }
    var len = bytes.length, chars = new Array(len);
    for (var i = 0, j = 0; i < len; i++) {
        var b = bytes[i];
        if (!utf8 || b < 128) {
            chars[j++] = b;
        }
        else if (b >= 192 && b < 224 && i + 1 < len) {
            chars[j++] = ((b & 0x1f) << 6) | (bytes[++i] & 0x3f);
        }
        else if (b >= 224 && b < 240 && i + 2 < len) {
            chars[j++] = ((b & 0xf) << 12) | ((bytes[++i] & 0x3f) << 6) | (bytes[++i] & 0x3f);
        }
        else if (b >= 240 && b < 248 && i + 3 < len) {
            var c = ((b & 7) << 18) | ((bytes[++i] & 0x3f) << 12) | ((bytes[++i] & 0x3f) << 6) | (bytes[++i] & 0x3f);
            if (c <= 0xffff) {
                chars[j++] = c;
            }
            else {
                c ^= 0x10000;
                chars[j++] = 0xd800 | (c >> 10);
                chars[j++] = 0xdc00 | (c & 0x3ff);
            }
        }
        else {
            throw new Error('Malformed UTF8 character at byte offset ' + i);
        }
    }
    var str = '', bs = 16384;
    for (var i = 0; i < j; i += bs) {
        str += String.fromCharCode.apply(String, chars.slice(i, i + bs <= j ? i + bs : j));
    }
    return str;
}
exports.bytes_to_string = bytes_to_string;
function bytes_to_hex(arr) {
    var str = '';
    for (var i = 0; i < arr.length; i++) {
        var h = (arr[i] & 0xff).toString(16);
        if (h.length < 2)
            str += '0';
        str += h;
    }
    return str;
}
exports.bytes_to_hex = bytes_to_hex;
function bytes_to_base64(arr) {
    return local_btoa(bytes_to_string(arr));
}
exports.bytes_to_base64 = bytes_to_base64;
function pow2_ceil(a) {
    a -= 1;
    a |= a >>> 1;
    a |= a >>> 2;
    a |= a >>> 4;
    a |= a >>> 8;
    a |= a >>> 16;
    a += 1;
    return a;
}
exports.pow2_ceil = pow2_ceil;
function is_number(a) {
    return typeof a === 'number';
}
exports.is_number = is_number;
function is_string(a) {
    return typeof a === 'string';
}
exports.is_string = is_string;
function is_buffer(a) {
    return a instanceof ArrayBuffer;
}
exports.is_buffer = is_buffer;
function is_bytes(a) {
    return a instanceof Uint8Array;
}
exports.is_bytes = is_bytes;
function is_typed_array(a) {
    return (a instanceof Int8Array ||
        a instanceof Uint8Array ||
        a instanceof Int16Array ||
        a instanceof Uint16Array ||
        a instanceof Int32Array ||
        a instanceof Uint32Array ||
        a instanceof Float32Array ||
        a instanceof Float64Array);
}
exports.is_typed_array = is_typed_array;
function _heap_init(heap, heapSize) {
    var size = heap ? heap.byteLength : heapSize || 65536;
    if (size & 0xfff || size <= 0)
        throw new Error('heap size must be a positive integer and a multiple of 4096');
    heap = heap || new Uint8Array(new ArrayBuffer(size));
    return heap;
}
exports._heap_init = _heap_init;
function _heap_write(heap, hpos, data, dpos, dlen) {
    var hlen = heap.length - hpos;
    var wlen = hlen < dlen ? hlen : dlen;
    heap.set(data.subarray(dpos, dpos + wlen), hpos);
    return wlen;
}
exports._heap_write = _heap_write;
function joinBytes() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    var totalLenght = arg.reduce(function (sum, curr) { return sum + curr.length; }, 0);
    var ret = new Uint8Array(totalLenght);
    var cursor = 0;
    for (var i = 0; i < arg.length; i++) {
        ret.set(arg[i], cursor);
        cursor += arg[i].length;
    }
    return ret;
}
exports.joinBytes = joinBytes;
//# sourceMappingURL=utils.js.map
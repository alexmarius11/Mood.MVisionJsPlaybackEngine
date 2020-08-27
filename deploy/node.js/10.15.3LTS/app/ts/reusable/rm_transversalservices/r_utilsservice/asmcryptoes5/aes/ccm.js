"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aes_asm_1 = require("./aes.asm");
var aes_1 = require("./aes");
var utils_1 = require("../other/utils");
var errors_1 = require("../other/errors");
var _AES_CCM_adata_maxLength = 65279;
var _AES_CCM_data_maxLength = 4503599627370480;
var AES_CCM = (function () {
    function AES_CCM(key, nonce, adata, tagSize, dataLength, aes) {
        if (tagSize === void 0) { tagSize = 16; }
        this.counter = 1;
        this.dataLength = -1;
        this.aes = aes ? aes : new aes_1.AES(key, undefined, undefined, 'CCM');
        if (tagSize < 4 || tagSize > 16 || tagSize & 1)
            throw new errors_1.IllegalArgumentError('illegal tagSize value');
        this.tagSize = tagSize;
        this.nonce = nonce;
        if (nonce.length < 8 || nonce.length > 13)
            throw new errors_1.IllegalArgumentError('illegal nonce length');
        this.lengthSize = 15 - nonce.length;
        nonce = new Uint8Array(nonce.length + 1);
        nonce[0] = this.lengthSize - 1;
        nonce.set(this.nonce, 1);
        if (dataLength < 0 || dataLength > _AES_CCM_data_maxLength || dataLength > Math.pow(2, 8 * this.lengthSize) - 16)
            throw new errors_1.IllegalArgumentError('illegal dataLength value');
        if (adata !== undefined) {
            if (adata.length > _AES_CCM_adata_maxLength)
                throw new errors_1.IllegalArgumentError('illegal adata length');
            this.adata = adata.length ? adata : undefined;
        }
        this.dataLength = dataLength;
        this.counter = 1;
        this.AES_CCM_calculate_iv();
        this.AES_CTR_set_options(nonce, this.counter, 8 * this.lengthSize);
    }
    AES_CCM.encrypt = function (clear, key, nonce, adata, tagsize) {
        if (tagsize === void 0) { tagsize = 16; }
        return new AES_CCM(key, nonce, adata, tagsize, clear.length).encrypt(clear);
    };
    AES_CCM.decrypt = function (cipher, key, nonce, adata, tagsize) {
        if (tagsize === void 0) { tagsize = 16; }
        return new AES_CCM(key, nonce, adata, tagsize, cipher.length - tagsize).decrypt(cipher);
    };
    AES_CCM.prototype.encrypt = function (data) {
        this.dataLength = data.length || 0;
        var result1 = this.AES_CCM_Encrypt_process(data);
        var result2 = this.AES_CCM_Encrypt_finish();
        var result = new Uint8Array(result1.length + result2.length);
        if (result1.length)
            result.set(result1);
        if (result2.length)
            result.set(result2, result1.length);
        return result;
    };
    AES_CCM.prototype.decrypt = function (data) {
        this.dataLength = data.length || 0;
        var result1 = this.AES_CCM_Decrypt_process(data);
        var result2 = this.AES_CCM_Decrypt_finish();
        var result = new Uint8Array(result1.length + result2.length);
        if (result1.length)
            result.set(result1);
        if (result2.length)
            result.set(result2, result1.length);
        return result;
    };
    AES_CCM.prototype.AES_CCM_calculate_iv = function () {
        var nonce = this.nonce;
        var adata = this.adata;
        var tagSize = this.tagSize;
        var lengthSize = this.lengthSize;
        var dataLength = this.dataLength;
        var data = new Uint8Array(16 + (adata ? 2 + adata.length : 0));
        data[0] = (adata ? 64 : 0) | ((tagSize - 2) << 2) | (lengthSize - 1);
        data.set(nonce, 1);
        if (lengthSize > 6)
            data[9] = ((dataLength / 0x100000000) >>> 16) & 15;
        if (lengthSize > 5)
            data[10] = ((dataLength / 0x100000000) >>> 8) & 255;
        if (lengthSize > 4)
            data[11] = (dataLength / 0x100000000) & 255;
        if (lengthSize > 3)
            data[12] = dataLength >>> 24;
        if (lengthSize > 2)
            data[13] = (dataLength >>> 16) & 255;
        data[14] = (dataLength >>> 8) & 255;
        data[15] = dataLength & 255;
        if (adata) {
            data[16] = (adata.length >>> 8) & 255;
            data[17] = adata.length & 255;
            data.set(adata, 18);
        }
        this._cbc_mac_process(data);
        this.aes.asm.get_state(aes_asm_1.AES_asm.HEAP_DATA);
        var iv = new Uint8Array(this.aes.heap.subarray(0, 16));
        var ivview = new DataView(iv.buffer, iv.byteOffset, iv.byteLength);
        this.aes.asm.set_iv(ivview.getUint32(0), ivview.getUint32(4), ivview.getUint32(8), ivview.getUint32(12));
    };
    AES_CCM.prototype._cbc_mac_process = function (data) {
        var heap = this.aes.heap;
        var asm = this.aes.asm;
        var dpos = 0;
        var dlen = data.length || 0;
        var wlen = 0;
        while (dlen > 0) {
            wlen = utils_1._heap_write(heap, 0, data, dpos, dlen);
            while (wlen & 15)
                heap[wlen++] = 0;
            dpos += wlen;
            dlen -= wlen;
            asm.mac(aes_asm_1.AES_asm.MAC.CBC, aes_asm_1.AES_asm.HEAP_DATA, wlen);
        }
    };
    AES_CCM.prototype.AES_CCM_Encrypt_process = function (data) {
        var asm = this.aes.asm;
        var heap = this.aes.heap;
        var dpos = 0;
        var dlen = data.length || 0;
        var counter = this.counter;
        var pos = this.aes.pos;
        var len = this.aes.len;
        var rlen = (len + dlen) & -16;
        var rpos = 0;
        var wlen = 0;
        if (((counter - 1) << 4) + len + dlen > _AES_CCM_data_maxLength)
            throw new RangeError('counter overflow');
        var result = new Uint8Array(rlen);
        while (dlen > 0) {
            wlen = utils_1._heap_write(heap, pos + len, data, dpos, dlen);
            len += wlen;
            dpos += wlen;
            dlen -= wlen;
            wlen = asm.mac(aes_asm_1.AES_asm.MAC.CBC, aes_asm_1.AES_asm.HEAP_DATA + pos, len);
            wlen = asm.cipher(aes_asm_1.AES_asm.ENC.CTR, aes_asm_1.AES_asm.HEAP_DATA + pos, wlen);
            if (wlen)
                result.set(heap.subarray(pos, pos + wlen), rpos);
            counter += wlen >>> 4;
            rpos += wlen;
            if (wlen < len) {
                pos += wlen;
                len -= wlen;
            }
            else {
                pos = 0;
                len = 0;
            }
        }
        this.counter = counter;
        this.aes.pos = pos;
        this.aes.len = len;
        return result;
    };
    AES_CCM.prototype.AES_CCM_Encrypt_finish = function () {
        var asm = this.aes.asm;
        var heap = this.aes.heap;
        var tagSize = this.tagSize;
        var pos = this.aes.pos;
        var len = this.aes.len;
        var result = new Uint8Array(len + tagSize);
        var i = len;
        for (; i & 15; i++)
            heap[pos + i] = 0;
        asm.mac(aes_asm_1.AES_asm.MAC.CBC, aes_asm_1.AES_asm.HEAP_DATA + pos, i);
        asm.cipher(aes_asm_1.AES_asm.ENC.CTR, aes_asm_1.AES_asm.HEAP_DATA + pos, i);
        if (len)
            result.set(heap.subarray(pos, pos + len));
        asm.set_counter(0, 0, 0, 0);
        asm.get_iv(aes_asm_1.AES_asm.HEAP_DATA);
        asm.cipher(aes_asm_1.AES_asm.ENC.CTR, aes_asm_1.AES_asm.HEAP_DATA, 16);
        result.set(heap.subarray(0, tagSize), len);
        this.counter = 1;
        this.aes.pos = 0;
        this.aes.len = 0;
        return result;
    };
    AES_CCM.prototype.AES_CCM_Decrypt_process = function (data) {
        var dpos = 0;
        var dlen = data.length || 0;
        var asm = this.aes.asm;
        var heap = this.aes.heap;
        var counter = this.counter;
        var tagSize = this.tagSize;
        var pos = this.aes.pos;
        var len = this.aes.len;
        var rpos = 0;
        var rlen = len + dlen > tagSize ? (len + dlen - tagSize) & -16 : 0;
        var tlen = len + dlen - rlen;
        var wlen = 0;
        if (((counter - 1) << 4) + len + dlen > _AES_CCM_data_maxLength)
            throw new RangeError('counter overflow');
        var result = new Uint8Array(rlen);
        while (dlen > tlen) {
            wlen = utils_1._heap_write(heap, pos + len, data, dpos, dlen - tlen);
            len += wlen;
            dpos += wlen;
            dlen -= wlen;
            wlen = asm.cipher(aes_asm_1.AES_asm.DEC.CTR, aes_asm_1.AES_asm.HEAP_DATA + pos, wlen);
            wlen = asm.mac(aes_asm_1.AES_asm.MAC.CBC, aes_asm_1.AES_asm.HEAP_DATA + pos, wlen);
            if (wlen)
                result.set(heap.subarray(pos, pos + wlen), rpos);
            counter += wlen >>> 4;
            rpos += wlen;
            pos = 0;
            len = 0;
        }
        if (dlen > 0) {
            len += utils_1._heap_write(heap, 0, data, dpos, dlen);
        }
        this.counter = counter;
        this.aes.pos = pos;
        this.aes.len = len;
        return result;
    };
    AES_CCM.prototype.AES_CCM_Decrypt_finish = function () {
        var asm = this.aes.asm;
        var heap = this.aes.heap;
        var tagSize = this.tagSize;
        var pos = this.aes.pos;
        var len = this.aes.len;
        var rlen = len - tagSize;
        if (len < tagSize)
            throw new errors_1.IllegalStateError('authentication tag not found');
        var result = new Uint8Array(rlen);
        var atag = new Uint8Array(heap.subarray(pos + rlen, pos + len));
        asm.cipher(aes_asm_1.AES_asm.DEC.CTR, aes_asm_1.AES_asm.HEAP_DATA + pos, (rlen + 15) & -16);
        result.set(heap.subarray(pos, pos + rlen));
        var i = rlen;
        for (; i & 15; i++)
            heap[pos + i] = 0;
        asm.mac(aes_asm_1.AES_asm.MAC.CBC, aes_asm_1.AES_asm.HEAP_DATA + pos, i);
        asm.set_counter(0, 0, 0, 0);
        asm.get_iv(aes_asm_1.AES_asm.HEAP_DATA);
        asm.cipher(aes_asm_1.AES_asm.ENC.CTR, aes_asm_1.AES_asm.HEAP_DATA, 16);
        var acheck = 0;
        for (var j = 0; j < tagSize; ++j)
            acheck |= atag[j] ^ heap[j];
        if (acheck)
            throw new errors_1.SecurityError('data integrity check failed');
        this.counter = 1;
        this.aes.pos = 0;
        this.aes.len = 0;
        return result;
    };
    AES_CCM.prototype.AES_CTR_set_options = function (nonce, counter, size) {
        if (size < 8 || size > 48)
            throw new errors_1.IllegalArgumentError('illegal counter size');
        var mask = Math.pow(2, size) - 1;
        this.aes.asm.set_mask(0, 0, (mask / 0x100000000) | 0, mask | 0);
        var len = nonce.length;
        if (!len || len > 16)
            throw new errors_1.IllegalArgumentError('illegal nonce size');
        this.nonce = nonce;
        var view = new DataView(new ArrayBuffer(16));
        new Uint8Array(view.buffer).set(nonce);
        this.aes.asm.set_nonce(view.getUint32(0), view.getUint32(4), view.getUint32(8), view.getUint32(12));
        if (counter < 0 || counter >= Math.pow(2, size))
            throw new errors_1.IllegalArgumentError('illegal counter value');
        this.counter = counter;
        this.aes.asm.set_counter(0, 0, (counter / 0x100000000) | 0, counter | 0);
    };
    return AES_CCM;
}());
exports.AES_CCM = AES_CCM;
//# sourceMappingURL=ccm.js.map
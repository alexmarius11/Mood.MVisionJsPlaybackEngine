"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = require("../other/errors");
var utils_1 = require("../other/utils");
var aes_1 = require("./aes");
var aes_asm_1 = require("./aes.asm");
var _AES_GCM_data_maxLength = 68719476704;
var AES_GCM = (function () {
    function AES_GCM(key, nonce, adata, tagSize, aes) {
        if (tagSize === void 0) { tagSize = 16; }
        this.tagSize = tagSize;
        this.gamma0 = 0;
        this.counter = 1;
        this.aes = aes ? aes : new aes_1.AES(key, undefined, false, 'CTR');
        this.aes.asm.gcm_init();
        if (this.tagSize < 4 || this.tagSize > 16)
            throw new errors_1.IllegalArgumentError('illegal tagSize value');
        var noncelen = nonce.length || 0;
        var noncebuf = new Uint8Array(16);
        if (noncelen !== 12) {
            this._gcm_mac_process(nonce);
            this.aes.heap[0] = 0;
            this.aes.heap[1] = 0;
            this.aes.heap[2] = 0;
            this.aes.heap[3] = 0;
            this.aes.heap[4] = 0;
            this.aes.heap[5] = 0;
            this.aes.heap[6] = 0;
            this.aes.heap[7] = 0;
            this.aes.heap[8] = 0;
            this.aes.heap[9] = 0;
            this.aes.heap[10] = 0;
            this.aes.heap[11] = noncelen >>> 29;
            this.aes.heap[12] = (noncelen >>> 21) & 255;
            this.aes.heap[13] = (noncelen >>> 13) & 255;
            this.aes.heap[14] = (noncelen >>> 5) & 255;
            this.aes.heap[15] = (noncelen << 3) & 255;
            this.aes.asm.mac(aes_asm_1.AES_asm.MAC.GCM, aes_asm_1.AES_asm.HEAP_DATA, 16);
            this.aes.asm.get_iv(aes_asm_1.AES_asm.HEAP_DATA);
            this.aes.asm.set_iv(0, 0, 0, 0);
            noncebuf.set(this.aes.heap.subarray(0, 16));
        }
        else {
            noncebuf.set(nonce);
            noncebuf[15] = 1;
        }
        var nonceview = new DataView(noncebuf.buffer);
        this.gamma0 = nonceview.getUint32(12);
        this.aes.asm.set_nonce(nonceview.getUint32(0), nonceview.getUint32(4), nonceview.getUint32(8), 0);
        this.aes.asm.set_mask(0, 0, 0, 0xffffffff);
        if (adata !== undefined) {
            if (adata.length > _AES_GCM_data_maxLength)
                throw new errors_1.IllegalArgumentError('illegal adata length');
            if (adata.length) {
                this.adata = adata;
                this._gcm_mac_process(adata);
            }
            else {
                this.adata = undefined;
            }
        }
        else {
            this.adata = undefined;
        }
        if (this.counter < 1 || this.counter > 0xffffffff)
            throw new RangeError('counter must be a positive 32-bit integer');
        this.aes.asm.set_counter(0, 0, 0, (this.gamma0 + this.counter) | 0);
    }
    AES_GCM.encrypt = function (cleartext, key, nonce, adata, tagsize) {
        return new AES_GCM(key, nonce, adata, tagsize).encrypt(cleartext);
    };
    AES_GCM.decrypt = function (ciphertext, key, nonce, adata, tagsize) {
        return new AES_GCM(key, nonce, adata, tagsize).decrypt(ciphertext);
    };
    AES_GCM.prototype.encrypt = function (data) {
        return this.AES_GCM_encrypt(data);
    };
    AES_GCM.prototype.decrypt = function (data) {
        return this.AES_GCM_decrypt(data);
    };
    AES_GCM.prototype.AES_GCM_Encrypt_process = function (data) {
        var dpos = 0;
        var dlen = data.length || 0;
        var asm = this.aes.asm;
        var heap = this.aes.heap;
        var counter = this.counter;
        var pos = this.aes.pos;
        var len = this.aes.len;
        var rpos = 0;
        var rlen = (len + dlen) & -16;
        var wlen = 0;
        if (((counter - 1) << 4) + len + dlen > _AES_GCM_data_maxLength)
            throw new RangeError('counter overflow');
        var result = new Uint8Array(rlen);
        while (dlen > 0) {
            wlen = utils_1._heap_write(heap, pos + len, data, dpos, dlen);
            len += wlen;
            dpos += wlen;
            dlen -= wlen;
            wlen = asm.cipher(aes_asm_1.AES_asm.ENC.CTR, aes_asm_1.AES_asm.HEAP_DATA + pos, len);
            wlen = asm.mac(aes_asm_1.AES_asm.MAC.GCM, aes_asm_1.AES_asm.HEAP_DATA + pos, wlen);
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
    AES_GCM.prototype.AES_GCM_Encrypt_finish = function () {
        var asm = this.aes.asm;
        var heap = this.aes.heap;
        var counter = this.counter;
        var tagSize = this.tagSize;
        var adata = this.adata;
        var pos = this.aes.pos;
        var len = this.aes.len;
        var result = new Uint8Array(len + tagSize);
        asm.cipher(aes_asm_1.AES_asm.ENC.CTR, aes_asm_1.AES_asm.HEAP_DATA + pos, (len + 15) & -16);
        if (len)
            result.set(heap.subarray(pos, pos + len));
        var i = len;
        for (; i & 15; i++)
            heap[pos + i] = 0;
        asm.mac(aes_asm_1.AES_asm.MAC.GCM, aes_asm_1.AES_asm.HEAP_DATA + pos, i);
        var alen = adata !== undefined ? adata.length : 0;
        var clen = ((counter - 1) << 4) + len;
        heap[0] = 0;
        heap[1] = 0;
        heap[2] = 0;
        heap[3] = alen >>> 29;
        heap[4] = alen >>> 21;
        heap[5] = (alen >>> 13) & 255;
        heap[6] = (alen >>> 5) & 255;
        heap[7] = (alen << 3) & 255;
        heap[8] = heap[9] = heap[10] = 0;
        heap[11] = clen >>> 29;
        heap[12] = (clen >>> 21) & 255;
        heap[13] = (clen >>> 13) & 255;
        heap[14] = (clen >>> 5) & 255;
        heap[15] = (clen << 3) & 255;
        asm.mac(aes_asm_1.AES_asm.MAC.GCM, aes_asm_1.AES_asm.HEAP_DATA, 16);
        asm.get_iv(aes_asm_1.AES_asm.HEAP_DATA);
        asm.set_counter(0, 0, 0, this.gamma0);
        asm.cipher(aes_asm_1.AES_asm.ENC.CTR, aes_asm_1.AES_asm.HEAP_DATA, 16);
        result.set(heap.subarray(0, tagSize), len);
        this.counter = 1;
        this.aes.pos = 0;
        this.aes.len = 0;
        return result;
    };
    AES_GCM.prototype.AES_GCM_Decrypt_process = function (data) {
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
        if (((counter - 1) << 4) + len + dlen > _AES_GCM_data_maxLength)
            throw new RangeError('counter overflow');
        var result = new Uint8Array(rlen);
        while (dlen > tlen) {
            wlen = utils_1._heap_write(heap, pos + len, data, dpos, dlen - tlen);
            len += wlen;
            dpos += wlen;
            dlen -= wlen;
            wlen = asm.mac(aes_asm_1.AES_asm.MAC.GCM, aes_asm_1.AES_asm.HEAP_DATA + pos, wlen);
            wlen = asm.cipher(aes_asm_1.AES_asm.DEC.CTR, aes_asm_1.AES_asm.HEAP_DATA + pos, wlen);
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
    AES_GCM.prototype.AES_GCM_Decrypt_finish = function () {
        var asm = this.aes.asm;
        var heap = this.aes.heap;
        var tagSize = this.tagSize;
        var adata = this.adata;
        var counter = this.counter;
        var pos = this.aes.pos;
        var len = this.aes.len;
        var rlen = len - tagSize;
        if (len < tagSize)
            throw new errors_1.IllegalStateError('authentication tag not found');
        var result = new Uint8Array(rlen);
        var atag = new Uint8Array(heap.subarray(pos + rlen, pos + len));
        var i = rlen;
        for (; i & 15; i++)
            heap[pos + i] = 0;
        asm.mac(aes_asm_1.AES_asm.MAC.GCM, aes_asm_1.AES_asm.HEAP_DATA + pos, i);
        asm.cipher(aes_asm_1.AES_asm.DEC.CTR, aes_asm_1.AES_asm.HEAP_DATA + pos, i);
        if (rlen)
            result.set(heap.subarray(pos, pos + rlen));
        var alen = adata !== undefined ? adata.length : 0;
        var clen = ((counter - 1) << 4) + len - tagSize;
        heap[0] = 0;
        heap[1] = 0;
        heap[2] = 0;
        heap[3] = alen >>> 29;
        heap[4] = alen >>> 21;
        heap[5] = (alen >>> 13) & 255;
        heap[6] = (alen >>> 5) & 255;
        heap[7] = (alen << 3) & 255;
        heap[8] = heap[9] = heap[10] = 0;
        heap[11] = clen >>> 29;
        heap[12] = (clen >>> 21) & 255;
        heap[13] = (clen >>> 13) & 255;
        heap[14] = (clen >>> 5) & 255;
        heap[15] = (clen << 3) & 255;
        asm.mac(aes_asm_1.AES_asm.MAC.GCM, aes_asm_1.AES_asm.HEAP_DATA, 16);
        asm.get_iv(aes_asm_1.AES_asm.HEAP_DATA);
        asm.set_counter(0, 0, 0, this.gamma0);
        asm.cipher(aes_asm_1.AES_asm.ENC.CTR, aes_asm_1.AES_asm.HEAP_DATA, 16);
        var acheck = 0;
        for (var i_1 = 0; i_1 < tagSize; ++i_1)
            acheck |= atag[i_1] ^ heap[i_1];
        if (acheck)
            throw new errors_1.SecurityError('data integrity check failed');
        this.counter = 1;
        this.aes.pos = 0;
        this.aes.len = 0;
        return result;
    };
    AES_GCM.prototype.AES_GCM_decrypt = function (data) {
        var result1 = this.AES_GCM_Decrypt_process(data);
        var result2 = this.AES_GCM_Decrypt_finish();
        var result = new Uint8Array(result1.length + result2.length);
        if (result1.length)
            result.set(result1);
        if (result2.length)
            result.set(result2, result1.length);
        return result;
    };
    AES_GCM.prototype.AES_GCM_encrypt = function (data) {
        var result1 = this.AES_GCM_Encrypt_process(data);
        var result2 = this.AES_GCM_Encrypt_finish();
        var result = new Uint8Array(result1.length + result2.length);
        if (result1.length)
            result.set(result1);
        if (result2.length)
            result.set(result2, result1.length);
        return result;
    };
    AES_GCM.prototype._gcm_mac_process = function (data) {
        var heap = this.aes.heap;
        var asm = this.aes.asm;
        var dpos = 0;
        var dlen = data.length || 0;
        var wlen = 0;
        while (dlen > 0) {
            wlen = utils_1._heap_write(heap, 0, data, dpos, dlen);
            dpos += wlen;
            dlen -= wlen;
            while (wlen & 15)
                heap[wlen++] = 0;
            asm.mac(aes_asm_1.AES_asm.MAC.GCM, aes_asm_1.AES_asm.HEAP_DATA, wlen);
        }
    };
    return AES_GCM;
}());
exports.AES_GCM = AES_GCM;
//# sourceMappingURL=gcm.js.map
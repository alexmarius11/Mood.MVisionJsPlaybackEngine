"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ecb_1 = require("./ecb");
var cbc_1 = require("./cbc");
function mul2(data) {
    var t = data[0] & 0x80;
    for (var i = 0; i < 15; i++) {
        data[i] = (data[i] << 1) ^ (data[i + 1] & 0x80 ? 1 : 0);
    }
    data[15] = (data[15] << 1) ^ (t ? 0x87 : 0);
}
var AES_CMAC = (function () {
    function AES_CMAC(key) {
        this.bufferLength = 0;
        this.k = new ecb_1.AES_ECB(key).encrypt(new Uint8Array(16));
        mul2(this.k);
        this.cbc = new cbc_1.AES_CBC(key, new Uint8Array(16), false);
        this.buffer = new Uint8Array(16);
        this.result = null;
    }
    AES_CMAC.bytes = function (data, key) {
        return new AES_CMAC(key).process(data).finish().result;
    };
    AES_CMAC.prototype.process = function (data) {
        if (this.bufferLength + data.length > 16) {
            this.cbc.encrypt(this.buffer.subarray(0, this.bufferLength));
            var offset = ((this.bufferLength + data.length - 1) & ~15) - this.bufferLength;
            this.cbc.encrypt(data.subarray(0, offset));
            this.buffer.set(data.subarray(offset));
            this.bufferLength = data.length - offset;
        }
        else {
            this.buffer.set(data, this.bufferLength);
            this.bufferLength += data.length;
        }
        return this;
    };
    AES_CMAC.prototype.finish = function () {
        if (this.bufferLength !== 16) {
            this.buffer[this.bufferLength] = 0x80;
            for (var i = this.bufferLength + 1; i < 16; i++) {
                this.buffer[i] = 0;
            }
            mul2(this.k);
        }
        for (var i = 0; i < 16; i++) {
            this.buffer[i] ^= this.k[i];
        }
        this.result = this.cbc.encrypt(this.buffer);
        return this;
    };
    return AES_CMAC;
}());
exports.AES_CMAC = AES_CMAC;
//# sourceMappingURL=cmac.js.map
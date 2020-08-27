define(["require", "exports", "./aes", "../other/errors", "../other/utils"], function (require, exports, aes_1, errors_1, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AES_CTR = /** @class */ (function () {
        function AES_CTR(key, nonce, aes) {
            this.aes = aes ? aes : new aes_1.AES(key, undefined, false, 'CTR');
            delete this.aes.padding;
            this.AES_CTR_set_options(nonce);
        }
        AES_CTR.encrypt = function (data, key, nonce) {
            return new AES_CTR(key, nonce).encrypt(data);
        };
        AES_CTR.decrypt = function (data, key, nonce) {
            return new AES_CTR(key, nonce).encrypt(data);
        };
        AES_CTR.prototype.encrypt = function (data) {
            var r1 = this.aes.AES_Encrypt_process(data);
            var r2 = this.aes.AES_Encrypt_finish();
            return utils_1.joinBytes(r1, r2);
        };
        AES_CTR.prototype.decrypt = function (data) {
            var r1 = this.aes.AES_Encrypt_process(data);
            var r2 = this.aes.AES_Encrypt_finish();
            return utils_1.joinBytes(r1, r2);
        };
        AES_CTR.prototype.AES_CTR_set_options = function (nonce, counter, size) {
            if (size !== undefined) {
                if (size < 8 || size > 48)
                    throw new errors_1.IllegalArgumentError('illegal counter size');
                var mask = Math.pow(2, size) - 1;
                this.aes.asm.set_mask(0, 0, (mask / 0x100000000) | 0, mask | 0);
            }
            else {
                size = 48;
                this.aes.asm.set_mask(0, 0, 0xffff, 0xffffffff);
            }
            if (nonce !== undefined) {
                var len = nonce.length;
                if (!len || len > 16)
                    throw new errors_1.IllegalArgumentError('illegal nonce size');
                var view = new DataView(new ArrayBuffer(16));
                new Uint8Array(view.buffer).set(nonce);
                this.aes.asm.set_nonce(view.getUint32(0), view.getUint32(4), view.getUint32(8), view.getUint32(12));
            }
            else {
                throw new Error('nonce is required');
            }
            if (counter !== undefined) {
                if (counter < 0 || counter >= Math.pow(2, size))
                    throw new errors_1.IllegalArgumentError('illegal counter value');
                this.aes.asm.set_counter(0, 0, (counter / 0x100000000) | 0, counter | 0);
            }
        };
        return AES_CTR;
    }());
    exports.AES_CTR = AES_CTR;
});
//# sourceMappingURL=ctr.js.map
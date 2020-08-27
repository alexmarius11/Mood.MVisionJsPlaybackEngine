define(["require", "exports", "./aes", "../other/utils"], function (require, exports, aes_1, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AES_CFB = /** @class */ (function () {
        function AES_CFB(key, iv, aes) {
            this.aes = aes ? aes : new aes_1.AES(key, iv, true, 'CFB');
            delete this.aes.padding;
        }
        AES_CFB.encrypt = function (data, key, iv) {
            return new AES_CFB(key, iv).encrypt(data);
        };
        AES_CFB.decrypt = function (data, key, iv) {
            return new AES_CFB(key, iv).decrypt(data);
        };
        AES_CFB.prototype.encrypt = function (data) {
            var r1 = this.aes.AES_Encrypt_process(data);
            var r2 = this.aes.AES_Encrypt_finish();
            return utils_1.joinBytes(r1, r2);
        };
        AES_CFB.prototype.decrypt = function (data) {
            var r1 = this.aes.AES_Decrypt_process(data);
            var r2 = this.aes.AES_Decrypt_finish();
            return utils_1.joinBytes(r1, r2);
        };
        return AES_CFB;
    }());
    exports.AES_CFB = AES_CFB;
});
//# sourceMappingURL=cfb.js.map
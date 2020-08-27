define(["require", "exports", "./aes", "../other/utils"], function (require, exports, aes_1, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AES_OFB = /** @class */ (function () {
        function AES_OFB(key, iv, aes) {
            this.aes = aes ? aes : new aes_1.AES(key, iv, false, 'OFB');
        }
        AES_OFB.encrypt = function (data, key, iv) {
            return new AES_OFB(key, iv).encrypt(data);
        };
        AES_OFB.decrypt = function (data, key, iv) {
            return new AES_OFB(key, iv).decrypt(data);
        };
        AES_OFB.prototype.encrypt = function (data) {
            var r1 = this.aes.AES_Encrypt_process(data);
            var r2 = this.aes.AES_Encrypt_finish();
            return utils_1.joinBytes(r1, r2);
        };
        AES_OFB.prototype.decrypt = function (data) {
            var r1 = this.aes.AES_Decrypt_process(data);
            var r2 = this.aes.AES_Decrypt_finish();
            return utils_1.joinBytes(r1, r2);
        };
        return AES_OFB;
    }());
    exports.AES_OFB = AES_OFB;
});
//# sourceMappingURL=ofb.js.map
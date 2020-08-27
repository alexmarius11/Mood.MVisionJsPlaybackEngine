"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aes_1 = require("./aes");
var utils_1 = require("../other/utils");
var AES_ECB = (function () {
    function AES_ECB(key, padding, aes) {
        if (padding === void 0) { padding = false; }
        this.aes = aes ? aes : new aes_1.AES(key, undefined, padding, 'ECB');
    }
    AES_ECB.encrypt = function (data, key, padding) {
        if (padding === void 0) { padding = false; }
        return new AES_ECB(key, padding).encrypt(data);
    };
    AES_ECB.decrypt = function (data, key, padding) {
        if (padding === void 0) { padding = false; }
        return new AES_ECB(key, padding).decrypt(data);
    };
    AES_ECB.prototype.encrypt = function (data) {
        var r1 = this.aes.AES_Encrypt_process(data);
        var r2 = this.aes.AES_Encrypt_finish();
        return utils_1.joinBytes(r1, r2);
    };
    AES_ECB.prototype.decrypt = function (data) {
        var r1 = this.aes.AES_Decrypt_process(data);
        var r2 = this.aes.AES_Decrypt_finish();
        return utils_1.joinBytes(r1, r2);
    };
    return AES_ECB;
}());
exports.AES_ECB = AES_ECB;
//# sourceMappingURL=ecb.js.map
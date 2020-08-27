"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aes_1 = require("./aes");
var utils_1 = require("../other/utils");
var AES_CBC = (function () {
    function AES_CBC(key, iv, padding, aes) {
        if (padding === void 0) { padding = true; }
        this.aes = aes ? aes : new aes_1.AES(key, iv, padding, 'CBC');
    }
    AES_CBC.encrypt = function (data, key, padding, iv) {
        if (padding === void 0) { padding = true; }
        return new AES_CBC(key, iv, padding).encrypt(data);
    };
    AES_CBC.decrypt = function (data, key, padding, iv) {
        if (padding === void 0) { padding = true; }
        return new AES_CBC(key, iv, padding).decrypt(data);
    };
    AES_CBC.prototype.encrypt = function (data) {
        var r1 = this.aes.AES_Encrypt_process(data);
        var r2 = this.aes.AES_Encrypt_finish();
        return utils_1.joinBytes(r1, r2);
    };
    AES_CBC.prototype.decrypt = function (data) {
        var r1 = this.aes.AES_Decrypt_process(data);
        var r2 = this.aes.AES_Decrypt_finish();
        return utils_1.joinBytes(r1, r2);
    };
    return AES_CBC;
}());
exports.AES_CBC = AES_CBC;
//# sourceMappingURL=cbc.js.map
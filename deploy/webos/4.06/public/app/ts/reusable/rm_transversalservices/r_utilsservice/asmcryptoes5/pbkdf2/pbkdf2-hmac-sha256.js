define(["require", "exports", "../hmac/hmac-sha256", "./pbkdf2-core"], function (require, exports, hmac_sha256_1, pbkdf2_core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function Pbkdf2HmacSha256(password, salt, count, length) {
        var hmac = new hmac_sha256_1.HmacSha256(password);
        return pbkdf2_core_1.pbkdf2core(hmac, salt, length, count);
    }
    exports.Pbkdf2HmacSha256 = Pbkdf2HmacSha256;
});
//# sourceMappingURL=pbkdf2-hmac-sha256.js.map
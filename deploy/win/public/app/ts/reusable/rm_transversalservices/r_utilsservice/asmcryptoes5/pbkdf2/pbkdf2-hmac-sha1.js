define(["require", "exports", "../hmac/hmac-sha1", "./pbkdf2-core"], function (require, exports, hmac_sha1_1, pbkdf2_core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function Pbkdf2HmacSha1(password, salt, count, length) {
        var hmac = new hmac_sha1_1.HmacSha1(password);
        return pbkdf2_core_1.pbkdf2core(hmac, salt, length, count);
    }
    exports.Pbkdf2HmacSha1 = Pbkdf2HmacSha1;
});
//# sourceMappingURL=pbkdf2-hmac-sha1.js.map
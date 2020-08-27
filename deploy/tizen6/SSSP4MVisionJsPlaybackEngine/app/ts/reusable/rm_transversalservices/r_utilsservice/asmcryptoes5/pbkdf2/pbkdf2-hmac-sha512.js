define(["require", "exports", "../hmac/hmac-sha512", "./pbkdf2-core"], function (require, exports, hmac_sha512_1, pbkdf2_core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function Pbkdf2HmacSha512(password, salt, count, length) {
        var hmac = new hmac_sha512_1.HmacSha512(password);
        return pbkdf2_core_1.pbkdf2core(hmac, salt, length, count);
    }
    exports.Pbkdf2HmacSha512 = Pbkdf2HmacSha512;
});
//# sourceMappingURL=pbkdf2-hmac-sha512.js.map
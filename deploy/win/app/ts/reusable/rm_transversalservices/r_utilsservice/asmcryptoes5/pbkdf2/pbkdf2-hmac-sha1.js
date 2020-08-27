"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hmac_sha1_1 = require("../hmac/hmac-sha1");
var pbkdf2_core_1 = require("./pbkdf2-core");
function Pbkdf2HmacSha1(password, salt, count, length) {
    var hmac = new hmac_sha1_1.HmacSha1(password);
    return pbkdf2_core_1.pbkdf2core(hmac, salt, length, count);
}
exports.Pbkdf2HmacSha1 = Pbkdf2HmacSha1;
//# sourceMappingURL=pbkdf2-hmac-sha1.js.map
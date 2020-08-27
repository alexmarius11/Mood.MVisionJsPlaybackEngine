"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRandomValues(buf) {
    if (typeof process !== 'undefined') {
        var nodeCrypto = require('crypto');
        var bytes = nodeCrypto.randomBytes(buf.length);
        buf.set(bytes);
        return;
    }
    if (window.crypto && window.crypto.getRandomValues) {
        window.crypto.getRandomValues(buf);
        return;
    }
    if (self.crypto && self.crypto.getRandomValues) {
        self.crypto.getRandomValues(buf);
        return;
    }
    if (window.msCrypto && window.msCrypto.getRandomValues) {
        window.msCrypto.getRandomValues(buf);
        return;
    }
    throw new Error('No secure random number generator available.');
}
exports.getRandomValues = getRandomValues;
//# sourceMappingURL=get-random-values.js.map
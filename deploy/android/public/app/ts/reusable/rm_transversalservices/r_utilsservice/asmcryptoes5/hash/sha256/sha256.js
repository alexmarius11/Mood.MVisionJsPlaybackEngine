var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./sha256.asm", "../hash", "../../other/utils"], function (require, exports, sha256_asm_1, hash_1, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports._sha256_block_size = 64;
    exports._sha256_hash_size = 32;
    var Sha256 = /** @class */ (function (_super) {
        __extends(Sha256, _super);
        function Sha256() {
            var _this = _super.call(this) || this;
            _this.NAME = 'sha256';
            _this.BLOCK_SIZE = exports._sha256_block_size;
            _this.HASH_SIZE = exports._sha256_hash_size;
            _this.heap = utils_1._heap_init();
            _this.asm = sha256_asm_1.sha256_asm({ Uint8Array: Uint8Array }, null, _this.heap.buffer);
            _this.reset();
            return _this;
        }
        Sha256.NAME = 'sha256';
        return Sha256;
    }(hash_1.Hash));
    exports.Sha256 = Sha256;
});
//# sourceMappingURL=sha256.js.map
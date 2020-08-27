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
define(["require", "exports", "./sha1.asm", "../hash", "../../other/utils"], function (require, exports, sha1_asm_1, hash_1, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports._sha1_block_size = 64;
    exports._sha1_hash_size = 20;
    var Sha1 = /** @class */ (function (_super) {
        __extends(Sha1, _super);
        function Sha1() {
            var _this = _super.call(this) || this;
            _this.NAME = 'sha1';
            _this.BLOCK_SIZE = exports._sha1_block_size;
            _this.HASH_SIZE = exports._sha1_hash_size;
            _this.heap = utils_1._heap_init();
            _this.asm = sha1_asm_1.sha1_asm({ Uint8Array: Uint8Array }, null, _this.heap.buffer);
            _this.reset();
            return _this;
        }
        Sha1.NAME = 'sha1';
        return Sha1;
    }(hash_1.Hash));
    exports.Sha1 = Sha1;
});
//# sourceMappingURL=sha1.js.map
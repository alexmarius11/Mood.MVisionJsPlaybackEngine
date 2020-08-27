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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/re_queue/RE_Queue", "../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity"], function (require, exports, rmGeneralQueue, rmGeneralEntityFactory) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_general;
    (function (rm_general) {
        var RFactory_Queue = /** @class */ (function (_super) {
            __extends(RFactory_Queue, _super);
            function RFactory_Queue() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RFactory_Queue.prototype.createEntity = function (entityName, error) {
                return new rmGeneralQueue.rm_general.RE_Queue();
            };
            return RFactory_Queue;
        }(rmGeneralEntityFactory.rm_general.RFactory_Entity));
        rm_general.RFactory_Queue = RFactory_Queue;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=REFactory_Queue.js.map
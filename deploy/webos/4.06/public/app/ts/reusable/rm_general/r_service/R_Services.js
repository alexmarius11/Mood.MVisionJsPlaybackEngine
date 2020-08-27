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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_entity/R_Entity"], function (require, exports, rmGeneralEntity) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_general;
    (function (rm_general) {
        var R_Services = /** @class */ (function (_super) {
            __extends(R_Services, _super);
            //----------- constructor 
            function R_Services() {
                var _this = _super.call(this) || this;
                _this._list = new Array();
                return _this;
            }
            //----------------------------
            R_Services.prototype.getServices = function (error) {
                return this._list;
            };
            //-------------------------------
            R_Services.prototype.getServiceByInstanceName = function (instanceName, error) {
                for (var _i = 0, _a = this._list; _i < _a.length; _i++) {
                    var crtService = _a[_i];
                    if (crtService._iService.getInstanceName() == instanceName)
                        return crtService;
                }
                return null;
                /*
                this._list.forEach( (crtService, index) => {
                  if(crtService._iService.getInstanceName() == instanceName)
                    return crtService;
                  });
                  return null;
                */
            };
            //-------------------------------
            R_Services.prototype.getServiceByServiceName = function (serviceName, error) {
                for (var _i = 0, _a = this._list; _i < _a.length; _i++) {
                    var crtService = _a[_i];
                    if (crtService._iService.getServiceName() == serviceName)
                        return crtService;
                }
                return null;
                /*
                this._list.forEach( (crtService, index) => {
                  if(crtService._iService.getServiceName() == serviceName)
                    return crtService;
                  });
                  return null;
                */
            };
            //---------------------------------
            R_Services.prototype.getServiceByAbstractName = function (abstractName, properties, error) {
                for (var _i = 0, _a = this._list; _i < _a.length; _i++) {
                    var crtService = _a[_i];
                    if (crtService._iService.getAbstractName() == abstractName)
                        return crtService;
                }
                return null;
                /*
                this._list.forEach( (crtService, index) => {
                  if(crtService._iService.getAbstractName() == abstractName)
                    return crtService;
                  });
                  return null;
                */
            };
            //--------------------------
            R_Services.prototype.addService = function (service, error) {
                this._list.push(service);
            };
            //--------------------------
            R_Services.prototype.removeServiceByInstanceName = function (instanceName, error) {
                var index = -1;
                for (var _i = 0, _a = this._list; _i < _a.length; _i++) {
                    var crtService = _a[_i];
                    index++;
                    if (crtService._iService.getInstanceName() == instanceName) {
                        this._list.splice(index, 1);
                        return index;
                    }
                }
                return -1;
                /*
                this._list.forEach( (crtService, index) => {
                if(crtService._iService.getInstanceName() == serviceName)
                  this._list.splice(index,1);
                  return index;
                });
                return -1;
                */
            };
            return R_Services;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_general.R_Services = R_Services;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=R_Services.js.map
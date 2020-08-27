define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /* INFO
    Other than the day parameter, which begins from 1, all parameters of the TZDate constructor begin from 0.
    This implies that, for the months of a year, the value for January is 0, for February, it is 1, and for December, it is 11.
    Therefore it may be convenient to add 1 to the returned value of tizen.time.TZDate.getMonth() method.
    */
    var nm_transversalservices;
    (function (nm_transversalservices) {
        var IImpl_SDK_TimeSetup_Tizen = /** @class */ (function () {
            //----------- constructor 
            function IImpl_SDK_TimeSetup_Tizen(owner) {
                this._owner = owner;
            }
            //---------------------------------------
            //             CrtTime set/get
            //---------------------------------------
            //--------------------
            IImpl_SDK_TimeSetup_Tizen.prototype.setCrtDateTime = function (crtDateTime, error, context, callback) {
                var year = crtDateTime.getYear();
                var month = crtDateTime.getMonth();
                var day = crtDateTime.getDay();
                var hour = crtDateTime.getHour();
                var minute = crtDateTime.getMinutes();
                var sec = crtDateTime.getSeconds();
                try {
                    var newDate = new tizen.TZDate(year, month, day, hour, minute, sec);
                    context.setBoolResult(true);
                    if (callback != null)
                        callback(context);
                }
                catch (error) {
                    error.setError(error.name, error.message);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                }
            };
            //--------------------
            IImpl_SDK_TimeSetup_Tizen.prototype.promise_setCrtDateTime = function (crtDateTime, error, context, callback) {
            };
            //--------------------
            IImpl_SDK_TimeSetup_Tizen.prototype.getCrtDateTime = function (error, context, callback) {
                try {
                    var currentTime = tizen.time.getCurrentDateTime();
                    context.setResult(currentTime.toLocaleString());
                    if (callback != null)
                        callback(context);
                }
                catch (error) {
                    error.setError(error.name, error.message);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                }
            };
            //---------------------
            IImpl_SDK_TimeSetup_Tizen.prototype.promise_getCrtDateTime = function (error, context, callback) {
            };
            //---------------------------------------
            //             TimeZone set/get
            //---------------------------------------
            //---------------------
            IImpl_SDK_TimeSetup_Tizen.prototype.setTimeZone = function (crtTimeZone, error, context, callback) {
                var continent = crtTimeZone.getContinent();
                var city = crtTimeZone.getCity();
                var country = crtTimeZone.getCountry();
                var resDateTime;
                var getTimeZoneCallback = function (ctx) {
                    resDateTime = ctx.getObjectResult();
                };
                try {
                    this.getCrtDateTime(error, context, getTimeZoneCallback);
                    var newDate = new tizen.TZDate(resDateTime.getYear(), resDateTime.getMonth(), resDateTime.getDay(), resDateTime.getHour(), resDateTime.getMinutes(), resDateTime.getSeconds(), null, continent + "/" + country + "/" + city);
                }
                catch (error) {
                    error.setError(error.name, error.message);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                }
            };
            //----------------------------
            IImpl_SDK_TimeSetup_Tizen.prototype.promise_setTimeZone = function (crtTimeZone, error, context, callback) {
            };
            //-----------------------------
            IImpl_SDK_TimeSetup_Tizen.prototype.getTimeZone = function (error, context, callback) {
                try {
                    var zone = tizen.time.getLocalTimezone();
                    context.setResult(zone);
                    if (callback != null)
                        callback(context);
                }
                catch (error) {
                    error.setError(error.name, error.message);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                }
            };
            //-----------------------------
            IImpl_SDK_TimeSetup_Tizen.prototype.promise_getTimeZone = function (error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_TimeSetup_Tizen.prototype.getTimeZoneList = function (error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_TimeSetup_Tizen.prototype.promise_getTimeZoneList = function (error, context, callback) {
            };
            return IImpl_SDK_TimeSetup_Tizen;
        }());
        nm_transversalservices.IImpl_SDK_TimeSetup_Tizen = IImpl_SDK_TimeSetup_Tizen;
    })(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_TimeSetup_Tizen.js.map
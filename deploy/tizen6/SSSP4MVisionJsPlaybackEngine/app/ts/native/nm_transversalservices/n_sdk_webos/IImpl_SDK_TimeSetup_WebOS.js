define(["require", "exports", "./cordova/cordova.webos", "./cordova/configuration", "./cordova/time"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var nm_transversalservices;
    (function (nm_transversalservices) {
        var IImpl_SDK_TimeSetup_WebOS = /** @class */ (function () {
            //----------- constructor 
            function IImpl_SDK_TimeSetup_WebOS(owner) {
                this._owner = owner;
            }
            //---------------------------------------
            //             CrtTime set/get
            //---------------------------------------
            //--------------------
            IImpl_SDK_TimeSetup_WebOS.prototype.setCrtDateTime = function (crtDateTime, error, context, callback) {
                var options = {
                    year: crtDateTime.getYear(),
                    month: crtDateTime.getMonth(),
                    day: crtDateTime.getDay(),
                    hour: crtDateTime.getHour(),
                    minute: crtDateTime.getMinutes(),
                    sec: crtDateTime.getSeconds()
                };
                function successCb() {
                    callback("setCurrentTime success");
                    context.setError(error);
                    callback.setBoolResult(true);
                    if (callback != null)
                        callback(context);
                }
                function failureCb(cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    if (error != null)
                        error.setError(errorCode, errorText);
                    context.setError(error);
                    console.log("Error Code [" + errorCode + "]: " + errorText);
                    if (callback != null)
                        callback(context);
                }
                var conf = new Configuration();
                conf.setCurrentTime(successCb, failureCb, options);
            };
            //--------------------
            IImpl_SDK_TimeSetup_WebOS.prototype.promise_setCrtDateTime = function (crtDateTime, error, context, callback) {
            };
            //--------------------
            IImpl_SDK_TimeSetup_WebOS.prototype.getCrtDateTime = function (error, context, callback) {
                var owner = this;
                var successCb = function (cbObject) {
                    //var data_text = cbObject.data;
                    //context.setResult(data_text);
                    context.setError(error);
                    var resDateTime = context.getObjectResult();
                    resDateTime.setYear(cbObject.year);
                    resDateTime.setMonth(cbObject.month);
                    resDateTime.setDay(cbObject.day);
                    resDateTime.setHour(cbObject.hour);
                    resDateTime.setMinutes(cbObject.minute);
                    resDateTime.setSeconds(cbObject.sec);
                    resDateTime.setMilliseconds(0);
                    console.log("cbObject : " + JSON.stringify(cbObject));
                    //document.getElementById("testreadfile").innerHTML += "<h3>Current Time is : " + JSON.stringify(cbObject) + "</h3>";
                    //console.log(context.getObjectResult()); 
                    if (callback != null)
                        callback(context);
                };
                var failureCb = function (cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    console.log(" Error Code [" + errorCode + "]: " + errorText);
                    if (error != null)
                        error.setError(errorCode, errorText);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                };
                var conf = new Configuration();
                conf.getCurrentTime(successCb, failureCb);
            };
            //---------------------
            IImpl_SDK_TimeSetup_WebOS.prototype.promise_getCrtDateTime = function (error, context, callback) {
            };
            //---------------------------------------
            //             TimeZone set/get
            //---------------------------------------
            //---------------------
            IImpl_SDK_TimeSetup_WebOS.prototype.setTimeZone = function (crtTimeZone, error, context, callback) {
                var timeZone = {
                    continent: crtTimeZone.getContinent(),
                    country: crtTimeZone.getCountry(),
                    city: crtTimeZone.getCity() //"Seoul"
                };
                var options = {
                    timeZone: timeZone
                };
                function successCb() {
                    console.log("Ccurrent TimeZone successfully set");
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                }
                function failureCb(cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    console.log(" Error Code [" + errorCode + "]: " + errorText);
                    if (error != null)
                        error.setError(errorCode, errorText);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                }
                var conf = new Configuration();
                conf.setTimeZone(successCb, failureCb, options);
            };
            //----------------------------
            IImpl_SDK_TimeSetup_WebOS.prototype.promise_setTimeZone = function (crtTimeZone, error, context, callback) {
            };
            //-----------------------------
            IImpl_SDK_TimeSetup_WebOS.prototype.getTimeZone = function (error, context, callback) {
                var owner = this;
                var successCb = function (cbObject) {
                    context.setError(error);
                    var resTimeZone = context.getObjectResult();
                    //document.getElementById("testreadfile").innerHTML += JSON.stringify(cbObject);
                    resTimeZone.setContinent(cbObject.timeZone.continent);
                    resTimeZone.setCountry(cbObject.timeZone.country);
                    resTimeZone.setCity(cbObject.timeZone.city);
                    console.log("cbObject : " + JSON.stringify(cbObject));
                    if (callback != null)
                        callback(context);
                };
                var failureCb = function (cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    console.log(" Error Code [" + errorCode + "]: " + errorText);
                    if (error != null)
                        error.setError(errorCode, errorText);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                };
                var conf = new Configuration();
                conf.getTimeZone(successCb, failureCb);
            };
            //-----------------------------
            IImpl_SDK_TimeSetup_WebOS.prototype.promise_getTimeZone = function (error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_TimeSetup_WebOS.prototype.getTimeZoneList = function (error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_TimeSetup_WebOS.prototype.promise_getTimeZoneList = function (error, context, callback) {
            };
            return IImpl_SDK_TimeSetup_WebOS;
        }()); //--- end class
        nm_transversalservices.IImpl_SDK_TimeSetup_WebOS = IImpl_SDK_TimeSetup_WebOS;
    })(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_TimeSetup_WebOS.js.map
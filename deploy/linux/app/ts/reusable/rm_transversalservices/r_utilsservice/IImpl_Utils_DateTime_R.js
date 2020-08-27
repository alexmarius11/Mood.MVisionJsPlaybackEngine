"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_transversalservices;
(function (rm_transversalservices) {
    var IImpl_Utils_DateTime_R = (function () {
        function IImpl_Utils_DateTime_R(owner) {
            this._owner = owner;
        }
        IImpl_Utils_DateTime_R.prototype.formatDateTime = function (aDateTime, format, locale) {
            var options = {
                year: 'numeric', month: 'numeric', day: 'numeric',
                hour: 'numeric', minute: 'numeric', second: 'numeric',
                hour12: false,
            };
            var crtDate = new Date(aDateTime.getYear(), aDateTime.getMonth() - 1, aDateTime.getDay(), aDateTime.getHour(), aDateTime.getMinutes(), aDateTime.getSeconds(), aDateTime.getMilliseconds());
            var strDate = new Intl.DateTimeFormat('en-US', options).format(crtDate);
            return strDate;
        };
        IImpl_Utils_DateTime_R.prototype.formatDateTime2 = function (aDateTime, format, locale) {
            var dt = rmLuxon.DateTime.fromISO(aDateTime.getAsISOString());
            var strDate = "";
            strDate = dt.setLocale(locale).toFormat(format);
            return strDate;
        };
        IImpl_Utils_DateTime_R.prototype.getCrtDateTimeAsString = function (formatDate, formatTime) {
            var strDate = "";
            var strTime = "";
            try {
                var crtDate = new Date();
            }
            catch (e) {
                strDate = "undefined";
                return;
            }
            var strMinutes = "" + crtDate.getMinutes();
            if (crtDate.getMinutes() < 10)
                strMinutes = "0" + strMinutes;
            var strHours = "" + crtDate.getHours();
            if (crtDate.getHours() < 10)
                strHours = "0" + strHours;
            var strSeconds = "" + crtDate.getSeconds();
            if (crtDate.getSeconds() < 10)
                strSeconds = "0" + strSeconds;
            var strYear = "" + "" + crtDate.getFullYear();
            if (crtDate.getFullYear() < 10)
                strYear = "0" + strYear;
            var strMonth = "" + crtDate.getMonth();
            if (crtDate.getMonth() < 10)
                strMonth = "0" + strMonth;
            var strDay = "" + crtDate.getDate();
            if (crtDate.getDate() < 10)
                strDay = "0" + strDay;
            var strMs = "" + crtDate.getMilliseconds();
            if ((crtDate.getMilliseconds() >= 100) && (crtDate.getMilliseconds() < 1000))
                strMs = "0" + strMs;
            else if ((crtDate.getMilliseconds() >= 0) && (crtDate.getMilliseconds() < 100))
                strMs = "00" + strMs;
            if (formatDate == "dd/mm/yyyy")
                strDate = strDay + "/" + strMonth + "/" + strYear;
            else if (formatDate == "mm/dd/yyyy")
                strDate = strMonth + "/" + strDay + "/" + strYear;
            else if (formatDate == "yyyy/mm/dd")
                strDate = strYear + "/" + strMonth + "/" + strDay;
            if (formatTime == "hh:mm:ss")
                strTime = strHours + ":" + strMinutes + ":" + strSeconds;
            else if (formatTime == "hh:mm")
                strTime = strHours + ":" + strMinutes;
            return strDate + " " + strTime;
        };
        IImpl_Utils_DateTime_R.prototype.formatDateTimeFromISO = function (strISODateTime, format, locale) {
            if (strISODateTime === null)
                return strISODateTime;
            var dateOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
            var timeOptions = { hour12: false, hour: '2-digit', minute: '2-digit', second: 'numeric' };
            var strDate = "";
            var strTime = "";
            try {
                var crtDate = new Date(strISODateTime);
                strDate = new Intl.DateTimeFormat(locale, dateOptions).format(crtDate);
                strTime = new Intl.DateTimeFormat(locale, timeOptions).format(crtDate);
            }
            catch (e) {
                strDate = "undefined";
                return;
            }
            return strDate + " " + strTime;
        };
        IImpl_Utils_DateTime_R.prototype.formatDateTimeFromISO2 = function (strISODateTime, format, locale) {
            var dt = rmLuxon.DateTime.fromISO(strISODateTime);
            var strDate = "";
            strDate = dt.setLocale(locale).toFormat(format);
            return strDate;
        };
        IImpl_Utils_DateTime_R.prototype.setDateTimeFromISO = function (aDateTime, strISODateTime) {
            var dt = rmLuxon.DateTime.fromISO(strISODateTime);
            aDateTime.setDateTime(dt.year, dt.month, dt.day, dt.hour, dt.minute, dt.second, dt.millisecond);
        };
        IImpl_Utils_DateTime_R.prototype.getCrtDateTime = function (aDateTime) {
            var now = new Date();
            aDateTime.setDateTime(now.getFullYear(), now.getMonth() + 1, now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());
        };
        IImpl_Utils_DateTime_R.prototype.getCrtDateTimeAsISOString = function () {
            var now = new Date();
            return now.toISOString();
        };
        IImpl_Utils_DateTime_R.prototype.getCrtUTCDateTime = function (aDateTime) {
            var now = new Date();
            aDateTime.setDateTime(now.getUTCFullYear(), now.getUTCMonth() + 1, now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
        };
        IImpl_Utils_DateTime_R.prototype.addYears = function (aDateTime, nbYears) {
            var dt = rmLuxon.DateTime.fromISO(aDateTime.getAsISOString());
            var dt2 = dt.plus({ year: nbYears });
            aDateTime.setDateTime(dt2.year, dt2.month, dt2.day, dt2.hour, dt2.minute, dt2.second, dt2.millisecond);
        };
        IImpl_Utils_DateTime_R.prototype.addMonths = function (aDateTime, nbMonths) {
            var dt = rmLuxon.DateTime.fromISO(aDateTime.getAsISOString());
            var dt2 = dt.plus({ month: nbMonths });
            aDateTime.setDateTime(dt2.year, dt2.month, dt2.day, dt2.hour, dt2.minute, dt2.second, dt2.millisecond);
        };
        IImpl_Utils_DateTime_R.prototype.addDays = function (aDateTime, nbDays) {
            var dt = rmLuxon.DateTime.fromISO(aDateTime.getAsISOString());
            var dt2 = dt.plus({ day: nbDays });
            aDateTime.setDateTime(dt2.year, dt2.month, dt2.day, dt2.hour, dt2.minute, dt2.second, dt2.millisecond);
        };
        IImpl_Utils_DateTime_R.prototype.addHours = function (aDateTime, nbHours) {
            var dt = rmLuxon.DateTime.fromISO(aDateTime.getAsISOString());
            var dt2 = dt.plus({ hour: nbHours });
            aDateTime.setDateTime(dt2.year, dt2.month, dt2.day, dt2.hour, dt2.minute, dt2.second, dt2.millisecond);
        };
        IImpl_Utils_DateTime_R.prototype.addMinutes = function (aDateTime, nbMinutes) {
            var dt = rmLuxon.DateTime.fromISO(aDateTime.getAsISOString());
            var dt2 = dt.plus({ minute: nbMinutes });
            aDateTime.setDateTime(dt2.year, dt2.month, dt2.day, dt2.hour, dt2.minute, dt2.second, dt2.millisecond);
        };
        IImpl_Utils_DateTime_R.prototype.addSeconds = function (aDateTime, nbSeconds) {
            var dt = rmLuxon.DateTime.fromISO(aDateTime.getAsISOString());
            var dt2 = dt.plus({ second: nbSeconds });
            aDateTime.setDateTime(dt2.year, dt2.month, dt2.day, dt2.hour, dt2.minute, dt2.second, dt2.millisecond);
        };
        IImpl_Utils_DateTime_R.prototype.addMillisecond = function (aDateTime, nbMilliseconds) {
            var dt = rmLuxon.DateTime.fromISO(aDateTime.getAsISOString());
            var dt2 = dt.plus({ millisecond: nbMilliseconds });
            aDateTime.setDateTime(dt2.year, dt2.month, dt2.day, dt2.hour, dt2.minute, dt2.second, dt2.millisecond);
        };
        IImpl_Utils_DateTime_R.prototype.addYearsMonthsDays = function (aDateTime, nbYears, nbMonths, nbDays) {
            var dt = rmLuxon.DateTime.fromISO(aDateTime.getAsISOString());
            var dt2 = dt.plus({ year: nbYears, month: nbMonths, day: nbDays });
            aDateTime.setDateTime(dt2.year, dt2.month, dt2.day, dt2.hour, dt2.minute, dt2.second, dt2.millisecond);
        };
        IImpl_Utils_DateTime_R.prototype.addHoursMinutesSecondsMilliseconds = function (aDateTime, nbHours, nbMinutes, nbSeconds, nbMilliseconds) {
            var dt = rmLuxon.DateTime.fromISO(aDateTime.getAsISOString());
            var dt2 = dt.plus({ hour: nbHours, minute: nbMinutes, second: nbSeconds, millisecond: nbMilliseconds });
            aDateTime.setDateTime(dt2.year, dt2.month, dt2.day, dt2.hour, dt2.minute, dt2.second, dt2.millisecond);
        };
        IImpl_Utils_DateTime_R.prototype.add_yyyMMdd_hhmmss_ms = function (aDateTime, nbYears, nbMonths, nbDays, nbHours, nbMinutes, nbSeconds, nbMilliseconds) {
            var dt = rmLuxon.DateTime.fromISO(aDateTime.getAsISOString());
            var dt2 = dt.plus({ year: nbYears, month: nbMonths, day: nbDays, hour: nbHours, minute: nbMinutes, second: nbSeconds, millisecond: nbMilliseconds });
            aDateTime.setDateTime(dt2.year, dt2.month, dt2.day, dt2.hour, dt2.minute, dt2.second, dt2.millisecond);
        };
        return IImpl_Utils_DateTime_R;
    }());
    rm_transversalservices.IImpl_Utils_DateTime_R = IImpl_Utils_DateTime_R;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=IImpl_Utils_DateTime_R.js.map
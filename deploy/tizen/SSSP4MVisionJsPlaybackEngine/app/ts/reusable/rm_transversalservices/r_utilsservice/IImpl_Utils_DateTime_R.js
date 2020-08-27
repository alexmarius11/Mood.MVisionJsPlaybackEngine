define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //https://moment.github.io/luxon/docs/manual/install.html
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var IImpl_Utils_DateTime_R = /** @class */ (function () {
            //----------- constructor 
            function IImpl_Utils_DateTime_R(owner) {
                this._owner = owner;
            }
            //--------------------------------------------
            IImpl_Utils_DateTime_R.prototype.formatDateTime = function (aDateTime, format, locale) {
                /*
                var dt = rmMoment.moment(aDateTime.getAsISOString());  //'2014-08-06T13:07:04.054'
                var strDate = "";
                strDate = rmMoment.moment.format(format); // 'ro' , 'yyyy LLL dd'//=> '2014 ao�t 06'
                // console.log(JSON.stringify(dt));
                return strDate;
                */
                // sometimes even the US needs 24-hour time
                var options = {
                    year: 'numeric', month: 'numeric', day: 'numeric',
                    hour: 'numeric', minute: 'numeric', second: 'numeric',
                    hour12: false,
                };
                var crtDate = new Date(aDateTime.getYear(), aDateTime.getMonth() - 1, aDateTime.getDay(), aDateTime.getHour(), aDateTime.getMinutes(), aDateTime.getSeconds(), aDateTime.getMilliseconds());
                var strDate = new Intl.DateTimeFormat('en-US', options).format(crtDate); // → "12/19/2012, 19:00:00"
                return strDate;
            };
            //--------------------------------------------
            IImpl_Utils_DateTime_R.prototype.formatDateTime2 = function (aDateTime, format, locale) {
                var dt = rmLuxon.DateTime.fromISO(aDateTime.getAsISOString()); //'2014-08-06T13:07:04.054'
                var strDate = "";
                strDate = dt.setLocale(locale).toFormat(format); // 'ro' , 'yyyy LLL dd'//=> '2014 ao�t 06'
                // console.log(JSON.stringify(dt));
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
            //----------------------------------------------------
            IImpl_Utils_DateTime_R.prototype.formatDateTimeFromISO = function (strISODateTime, format, locale) {
                if (strISODateTime === null)
                    return strISODateTime;
                /*
                var options = {
                  year: 'numeric', month: 'numeric', day: 'numeric',
                  hour: 'numeric', minute: 'numeric', //second: 'numeric',
                  hour12: false,
                }  ;
                */
                var dateOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
                var timeOptions = { hour12: false, hour: '2-digit', minute: '2-digit', second: 'numeric' };
                var strDate = "";
                var strTime = "";
                try {
                    var crtDate = new Date(strISODateTime);
                    strDate = new Intl.DateTimeFormat(locale, dateOptions).format(crtDate); // → "12/19/2012, 19:00:00"
                    strTime = new Intl.DateTimeFormat(locale, timeOptions).format(crtDate); // → "12/19/2012, 19:00:00"
                }
                catch (e) {
                    strDate = "undefined";
                    return;
                }
                return strDate + " " + strTime;
            };
            //----------------------------------------------------
            IImpl_Utils_DateTime_R.prototype.formatDateTimeFromISO2 = function (strISODateTime, format, locale) {
                var dt = rmLuxon.DateTime.fromISO(strISODateTime); //'2014-08-06T13:07:04.054'
                //console.log(JSON.stringify(dt));
                var strDate = "";
                strDate = dt.setLocale(locale).toFormat(format); // 'ro' , 'yyyy LLL dd'//=> '2014 aout 06'
                return strDate;
            };
            //----------------------------------------------------
            IImpl_Utils_DateTime_R.prototype.setDateTimeFromISO = function (aDateTime, strISODateTime) {
                var dt = rmLuxon.DateTime.fromISO(strISODateTime); //'2014-08-06T13:07:04.054'
                //console.log(JSON.stringify(dt));
                aDateTime.setDateTime(dt.year, dt.month, dt.day, dt.hour, dt.minute, dt.second, dt.millisecond);
                //console.log(JSON.stringify(dt2));
            };
            //----------------------------------------------------------------------
            IImpl_Utils_DateTime_R.prototype.getCrtDateTime = function (aDateTime) {
                var now = new Date();
                aDateTime.setDateTime(now.getFullYear(), now.getMonth() + 1, now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());
            };
            //------------------------------------
            IImpl_Utils_DateTime_R.prototype.getCrtDateTimeAsISOString = function () {
                var now = new Date();
                return now.toISOString();
            };
            //----------------------------------------------------------------------
            IImpl_Utils_DateTime_R.prototype.getCrtUTCDateTime = function (aDateTime) {
                var now = new Date();
                aDateTime.setDateTime(now.getUTCFullYear(), now.getUTCMonth() + 1, now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
            };
            //----------------------------------------------------------------------
            IImpl_Utils_DateTime_R.prototype.addYears = function (aDateTime, nbYears) {
                var dt = rmLuxon.DateTime.fromISO(aDateTime.getAsISOString()); //'2014-08-06T13:07:04.054'
                //console.log(JSON.stringify(dt));
                var dt2 = dt.plus({ year: nbYears });
                aDateTime.setDateTime(dt2.year, dt2.month, dt2.day, dt2.hour, dt2.minute, dt2.second, dt2.millisecond);
                //console.log(JSON.stringify(dt2));
            };
            //----------------------------------------------------------------------
            IImpl_Utils_DateTime_R.prototype.addMonths = function (aDateTime, nbMonths) {
                var dt = rmLuxon.DateTime.fromISO(aDateTime.getAsISOString()); //'2014-08-06T13:07:04.054'
                //console.log(JSON.stringify(dt));
                var dt2 = dt.plus({ month: nbMonths });
                aDateTime.setDateTime(dt2.year, dt2.month, dt2.day, dt2.hour, dt2.minute, dt2.second, dt2.millisecond);
                //console.log(JSON.stringify(dt2));
            };
            //----------------------------------------------------------------------
            IImpl_Utils_DateTime_R.prototype.addDays = function (aDateTime, nbDays) {
                var dt = rmLuxon.DateTime.fromISO(aDateTime.getAsISOString()); //'2014-08-06T13:07:04.054'
                //console.log(JSON.stringify(dt));
                var dt2 = dt.plus({ day: nbDays });
                aDateTime.setDateTime(dt2.year, dt2.month, dt2.day, dt2.hour, dt2.minute, dt2.second, dt2.millisecond);
                //console.log(JSON.stringify(dt2));
            };
            //----------------------------------------------------------------------
            IImpl_Utils_DateTime_R.prototype.addHours = function (aDateTime, nbHours) {
                var dt = rmLuxon.DateTime.fromISO(aDateTime.getAsISOString()); //'2014-08-06T13:07:04.054'
                //console.log(JSON.stringify(dt));
                var dt2 = dt.plus({ hour: nbHours });
                aDateTime.setDateTime(dt2.year, dt2.month, dt2.day, dt2.hour, dt2.minute, dt2.second, dt2.millisecond);
                //console.log(JSON.stringify(dt2));
            };
            //----------------------------------------------------------------------
            IImpl_Utils_DateTime_R.prototype.addMinutes = function (aDateTime, nbMinutes) {
                var dt = rmLuxon.DateTime.fromISO(aDateTime.getAsISOString()); //'2014-08-06T13:07:04.054'
                //console.log(JSON.stringify(dt));
                var dt2 = dt.plus({ minute: nbMinutes });
                aDateTime.setDateTime(dt2.year, dt2.month, dt2.day, dt2.hour, dt2.minute, dt2.second, dt2.millisecond);
                //console.log(JSON.stringify(dt2));
            };
            //----------------------------------------------------------------------
            IImpl_Utils_DateTime_R.prototype.addSeconds = function (aDateTime, nbSeconds) {
                var dt = rmLuxon.DateTime.fromISO(aDateTime.getAsISOString()); //'2014-08-06T13:07:04.054'
                //console.log(JSON.stringify(dt));
                var dt2 = dt.plus({ second: nbSeconds });
                aDateTime.setDateTime(dt2.year, dt2.month, dt2.day, dt2.hour, dt2.minute, dt2.second, dt2.millisecond);
                //console.log(JSON.stringify(dt2));
            };
            //----------------------------------------------------------------------
            IImpl_Utils_DateTime_R.prototype.addMillisecond = function (aDateTime, nbMilliseconds) {
                var dt = rmLuxon.DateTime.fromISO(aDateTime.getAsISOString()); //'2014-08-06T13:07:04.054'
                //console.log(JSON.stringify(dt));
                var dt2 = dt.plus({ millisecond: nbMilliseconds });
                aDateTime.setDateTime(dt2.year, dt2.month, dt2.day, dt2.hour, dt2.minute, dt2.second, dt2.millisecond);
                //console.log(JSON.stringify(dt2));
            };
            //----------------------------------------
            IImpl_Utils_DateTime_R.prototype.addYearsMonthsDays = function (aDateTime, nbYears, nbMonths, nbDays) {
                var dt = rmLuxon.DateTime.fromISO(aDateTime.getAsISOString()); //'2014-08-06T13:07:04.054'
                //console.log(JSON.stringify(dt));
                var dt2 = dt.plus({ year: nbYears, month: nbMonths, day: nbDays });
                aDateTime.setDateTime(dt2.year, dt2.month, dt2.day, dt2.hour, dt2.minute, dt2.second, dt2.millisecond);
                //console.log(JSON.stringify(dt2));
            };
            //----------------------------------------
            IImpl_Utils_DateTime_R.prototype.addHoursMinutesSecondsMilliseconds = function (aDateTime, nbHours, nbMinutes, nbSeconds, nbMilliseconds) {
                var dt = rmLuxon.DateTime.fromISO(aDateTime.getAsISOString()); //'2014-08-06T13:07:04.054'
                //console.log(JSON.stringify(dt));
                var dt2 = dt.plus({ hour: nbHours, minute: nbMinutes, second: nbSeconds, millisecond: nbMilliseconds });
                aDateTime.setDateTime(dt2.year, dt2.month, dt2.day, dt2.hour, dt2.minute, dt2.second, dt2.millisecond);
                //console.log(JSON.stringify(dt2));
            };
            //----------------------------------------
            IImpl_Utils_DateTime_R.prototype.add_yyyMMdd_hhmmss_ms = function (aDateTime, nbYears, nbMonths, nbDays, nbHours, nbMinutes, nbSeconds, nbMilliseconds) {
                var dt = rmLuxon.DateTime.fromISO(aDateTime.getAsISOString()); //'2014-08-06T13:07:04.054'
                //console.log(JSON.stringify(dt));
                var dt2 = dt.plus({ year: nbYears, month: nbMonths, day: nbDays, hour: nbHours, minute: nbMinutes, second: nbSeconds, millisecond: nbMilliseconds });
                aDateTime.setDateTime(dt2.year, dt2.month, dt2.day, dt2.hour, dt2.minute, dt2.second, dt2.millisecond);
                //console.log(JSON.stringify(dt2));
            };
            return IImpl_Utils_DateTime_R;
        }());
        rm_transversalservices.IImpl_Utils_DateTime_R = IImpl_Utils_DateTime_R;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
/*
Years vary because of leap years.
Months vary because they're just different lengths.
Days vary because DST transitions mean some days are 23 or 25 hours long.
Quarters are always three months, but months vary in length so quarters do too.
Weeks are always the same number of days, but days vary so weeks do too.
These units use time math:

Hours are always 60 minutes
Minutes are always 60 seconds
Seconds are always 1000
      //console.log(rmMoment.moment('2014-08-20 15:30:00').format('MM/DD/YYYY h:mm a'));
      //rmMoment.moment(""+aDateTime.getYear()+)
      
      //const luxon = rmLuxon.DateTime.local;
      ///console.log(JSON.stringify(luxon));
      //var dt = rmLuxon.DateTime.fromISO('2014-08-06T13:07:04.054');
      //console.log(JSON.stringify(dt));
      //var dt = rmLuxon.DateTime.fromObject({day: 22, hour: 12, zone: 'America/Los_Angeles', numberingSystem: 'beng'})
      
     // var mom = moment('2014-08-20 15:30:00');
     // mom.format('MM/DD/YYYY h:mm a');
    //  console.log(JSON.stringify(mom));
     // rmLuxon.DateTime.toFormat()
      //dt.toFormat('yyyy LLL dd'); //=> '2014 ao�t 06'

      //rmLuxon.DateTime.fromISO('2014-08-06T13:07:04.054')
      //.setLocale('fr')
      //.toFormat('yyyy LLL dd'); //=> '2014 ao�t 06'
*/
//# sourceMappingURL=IImpl_Utils_DateTime_R.js.map
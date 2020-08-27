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
define(["require", "exports", "../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemStatusType", "../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemEventType", "../../../../../app/ts/reusable/rm_general/r_entity/R_Entity"], function (require, exports, amPlaylistItemStatusType, amPlaylistItemEventType, rmGeneralEntity) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_coreservices;
    (function (rm_coreservices) {
        var RE_PlaylistItem_Logic = /** @class */ (function (_super) {
            __extends(RE_PlaylistItem_Logic, _super);
            //===================
            function RE_PlaylistItem_Logic() {
                var _this = _super.call(this) || this;
                _this._owner = null;
                _this._ownerIdxAsChild = -1;
                _this._ownerIdxAsLevel = -1;
                _this._hasARenderingRepresentation = false;
                _this._hasARenderingZone = false;
                _this._mustCreateARenderingZone = false;
                _this._diff_duration = null;
                _this._diff_startDate = null;
                _this._diff_endDate = null;
                _this._diff_startTime = null;
                _this._diff_endTime = null;
                _this._diff_weekdays = null;
                _this._diff_dtStartDate = null;
                _this._diff_dtEndDate = null;
                _this._diff_dtStartTime = null;
                _this._diff_dtEndTime = null;
                _this._diff_iWeekdays = null;
                //--- dynamics
                _this._status = amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_End;
                _this._idDurationTimer = null;
                _this._iDuration = null;
                _this._idNaturalDurationTimer = null;
                _this._iNaturalDuration = null;
                _this._idStartTimer = null;
                _this._startTime = null;
                _this._startDateTime = null;
                _this._iPriority = 0;
                _this._hasARenderingRepresentation = false;
                _this._hasARenderingZone = false;
                _this._mustCreateARenderingZone = false;
                _this._targetRenderingZoneId = -1;
                return _this;
            }
            //==================================
            RE_PlaylistItem_Logic.prototype.reset = function () {
                //--- dynamics
                this._status = amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_End;
                this._idDurationTimer = null;
                this._idNaturalDurationTimer = null;
                this._idStartTimer = null;
                //this._iPriority = 0;
            };
            //======================================
            // get / set  target rendering zone id
            //=======================================
            //-------------------
            RE_PlaylistItem_Logic.prototype.getTargetRenderingZoneId = function () {
                return this._targetRenderingZoneId;
            };
            //-------------------
            RE_PlaylistItem_Logic.prototype.setTargetRenderingZoneId = function (targetRenderingZoneId) {
                this._targetRenderingZoneId = targetRenderingZoneId;
            };
            //======================
            // get / set  Priority
            //======================
            //---------------------------
            RE_PlaylistItem_Logic.prototype.getPriority = function () {
                return this._iPriority;
            };
            //---------------------------
            RE_PlaylistItem_Logic.prototype.setPriority = function (iPriority) {
                this._iPriority = iPriority;
            };
            //======================
            // get / set  StatusCode
            //======================
            //---------------------------
            RE_PlaylistItem_Logic.prototype.getStatusCode = function () {
                return this._status;
            };
            //---------------------------
            RE_PlaylistItem_Logic.prototype.setStatusCode = function (status) {
                this._status = status;
            };
            //============================================
            //  set / get has a rendering representation
            //============================================
            //-------- if yes - means that the playlist item (the owner) has a graphic representation (that plays on the screen)
            RE_PlaylistItem_Logic.prototype.hasARenderingRepresentation = function () {
                return this._hasARenderingRepresentation;
            };
            //----------------------------------
            RE_PlaylistItem_Logic.prototype.setHasARenderingRepresentation = function (hasARenderingRepresentation) {
                this._hasARenderingRepresentation = hasARenderingRepresentation;
            };
            //============================================
            //  set / get has a rendering zone
            //============================================
            //------- if yes - means that the playlist item (the owner) will determnine the creation of a rendering zone (where it or its children will play)
            RE_PlaylistItem_Logic.prototype.hasARenderingZone = function () {
                return this._hasARenderingZone;
            };
            //----------------------------------
            RE_PlaylistItem_Logic.prototype.setHasARenderingZone = function (hasARenderingZone) {
                this._hasARenderingZone = hasARenderingZone;
            };
            //============================================
            //  set / get must create a rendering zone
            //============================================
            //==============================
            RE_PlaylistItem_Logic.prototype.mustCreateARenderingZone = function () {
                return this._mustCreateARenderingZone;
            };
            //----------------------------------
            RE_PlaylistItem_Logic.prototype.setMustCreateARenderingZone = function (mustCreateARenderingZone) {
                this._mustCreateARenderingZone = mustCreateARenderingZone;
            };
            //=============================
            //
            //========================
            //------------------------
            RE_PlaylistItem_Logic.prototype.getFirstParentWithARenderingZone = function () {
                var crtParent = this.getOwner().getParent();
                if (crtParent == null)
                    return null;
                if (crtParent.getLogic().hasARenderingZone())
                    return crtParent;
                return crtParent.getLogic().getFirstParentWithARenderingZone();
            };
            //======================
            RE_PlaylistItem_Logic.prototype.setAncestorThatMustCreateARenderingZone = function (error, context, callback) {
                var pAncestorWithRenderingZone = null;
                if (this._hasARenderingRepresentation) {
                    pAncestorWithRenderingZone = this.getFirstParentWithARenderingZone();
                    if (pAncestorWithRenderingZone != null)
                        pAncestorWithRenderingZone.getLogic().setMustCreateARenderingZone(true);
                }
            };
            //====================================
            // parse diffusion dates -- to do: move these functions to Utils.datetime
            //====================================
            //============================
            //"/Date(1542377112427+0000)/"
            RE_PlaylistItem_Logic.prototype.parseJsonDateMillis = function (strDate) {
                if (strDate == null)
                    return null;
                try {
                    var datestr = strDate.substring(strDate.indexOf("(") + 1, strDate.indexOf(")"));
                    var dtDate = new Date(parseInt(datestr, 10));
                    return dtDate;
                }
                catch (e) {
                    return null;
                }
            };
            //=========================
            //"PT23H59M59S"
            RE_PlaylistItem_Logic.prototype.parseJsonDuration = function (strDuration) {
                if (strDuration == null)
                    return null;
                try {
                    var n = strDuration.replace(/D|H|M/g, ":").replace(/P|T|S/g, "").split(":");
                    if (1 == n.length)
                        2 != n[0].length && (n[0] = "0" + n[0]), n[0] = "0:" + n[0];
                    else
                        for (var r = 1, l = n.length - 1; l >= r; r++)
                            2 != n[r].length && (n[r] = "0" + n[r]);
                    var str = n.join(":");
                    var dtDate = new Date(); // creates a Date Object using the clients current time
                    var _a = str.split(':'), hours = _a[0], minutes = _a[1], seconds = _a[2]; // using ES6 destructuring
                    // var time = "18:19:02".split(':'); // "old" ES5 version
                    if (seconds == null)
                        seconds = 0;
                    dtDate.setHours(+hours); // set the hours, using implicit type coercion
                    dtDate.setMinutes(minutes); // you can pass Number or String, it doesn't really matter
                    dtDate.setSeconds(seconds);
                    // if needed, adjust date and time zone
                    return dtDate;
                }
                catch (e) {
                    return null;
                }
            };
            //===========================
            //The getDay() method returns the day of the week (from 0 to 6) for the specified date.
            //Note: Sunday is 0, Monday is 1, and so on.
            RE_PlaylistItem_Logic.prototype.getDayOfWeekBinaryMask = function (weekDayNo) {
                switch (weekDayNo) {
                    case 1: // Monday
                        return 64;
                    case 2: // Tuesday
                        return 32;
                    case 3: // Wednesday
                        return 16;
                    case 4: // Thursday
                        return 8;
                    case 5: // Friday
                        return 4;
                    case 6: // Saturday 
                        return 2;
                    case 0: // Sunday
                        return 1;
                }
                return 0;
            };
            //-----------------------------
            RE_PlaylistItem_Logic.prototype.convertDiffusionStringsToDates = function () {
                this._diff_dtStartDate = this.parseJsonDateMillis(this._diff_startDate);
                this._diff_dtEndDate = this.parseJsonDateMillis(this._diff_endDate);
                this._diff_dtStartTime = this.parseJsonDuration(this._diff_startTime);
                this._diff_dtEndTime = this.parseJsonDuration(this._diff_endTime);
                this._diff_iWeekdays = null;
                if (this._diff_weekdays != null)
                    this._diff_iWeekdays = Number.parseInt(this._diff_weekdays.Value);
                //var dt = parseJsonDuration('PT23H59M59S');
                //var hours = dt.getHours();	
                //var dt2 = parseJsonDateMillis("/Date(1542377112427+0000)/");
                //var hours2 = dt2.getHours();
            };
            //----------------------
            RE_PlaylistItem_Logic.prototype.setDiffusionInfos = function (diff_duration, diff_startDate, diff_endDate, diff_startTime, diff_endTime, diff_weekdays) {
                this._diff_duration = diff_duration;
                this._diff_startDate = diff_startDate;
                this._diff_endDate = diff_endDate;
                this._diff_startTime = diff_startTime;
                this._diff_endTime = diff_endTime;
                this._diff_weekdays = diff_weekdays;
                this.convertDiffusionStringsToDates();
            };
            //==================================
            //  set / get Owner of the Logic
            //==================================
            //======================
            RE_PlaylistItem_Logic.prototype.hasChildren = function () {
                return false;
            };
            //==================================
            //   set / get Owner of the Logic
            //==================================
            //===================
            RE_PlaylistItem_Logic.prototype.setOwner = function (owner) {
                this._owner = owner;
            };
            //-------------
            RE_PlaylistItem_Logic.prototype.getOwner = function () {
                return this._owner;
            };
            //==================================
            //   set / get Owner Address
            //==================================
            //===================
            RE_PlaylistItem_Logic.prototype.createAndGenerateOwnerAddress = function () {
                var ownerAddress = new Array();
                this.generateOwnerAddress(ownerAddress);
                return ownerAddress;
            };
            //---------------------
            RE_PlaylistItem_Logic.prototype.generateOwnerAddress = function (ownerAddress) {
                ownerAddress.unshift(this._ownerIdxAsChild);
                if (this.getOwner().getParent() != null)
                    return this.getOwner().getParent().getLogic().generateOwnerAddress(ownerAddress);
            };
            //==================
            RE_PlaylistItem_Logic.prototype.getOwnerIdxAsChild = function () {
                return this._ownerIdxAsChild;
            };
            //------
            RE_PlaylistItem_Logic.prototype.setOwnerIdxAsChild = function (ownerIdxAsChild) {
                this._ownerIdxAsChild = ownerIdxAsChild;
            };
            //==================
            RE_PlaylistItem_Logic.prototype.getOwnerIdxAsLevel = function () {
                return this._ownerIdxAsLevel;
            };
            //------
            RE_PlaylistItem_Logic.prototype.setOwnerIdxAsLevel = function (ownerIdxAsLevel) {
                this._ownerIdxAsLevel = ownerIdxAsLevel;
            };
            //==================================
            //   set / get duration
            //==================================
            //===================
            RE_PlaylistItem_Logic.prototype.setDuration = function (iDuration) {
                this._iDuration = iDuration;
            };
            //-------------
            RE_PlaylistItem_Logic.prototype.getDuration = function () {
                return this._iDuration;
            };
            //------------
            RE_PlaylistItem_Logic.prototype.setDurationAsString = function (duration) {
                this._iDuration = parseInt(duration);
            };
            //------------
            RE_PlaylistItem_Logic.prototype.getDurationAsString = function () {
                return "" + this._iDuration;
            };
            //-------------
            RE_PlaylistItem_Logic.prototype.hasZeroDuration = function () {
                if (this._iDuration == null)
                    return false;
                if (isNaN(this._iDuration))
                    return false;
                if (this._iDuration == 0)
                    return true;
                return false;
            };
            //==================================
            //   set / get startTime 
            //==================================
            //===================
            RE_PlaylistItem_Logic.prototype.setStartTime = function (dtStartTime) {
                this._dtStartTime = dtStartTime;
            };
            //===================
            RE_PlaylistItem_Logic.prototype.getStartTime = function () {
                return this._dtStartTime;
            };
            //====================
            RE_PlaylistItem_Logic.prototype.setStartTimeAsString = function (startTime) {
                try {
                    this._dtStartTime = new Date(startTime);
                }
                catch (ex) {
                    this._dtStartTime = null;
                }
            };
            //------------
            RE_PlaylistItem_Logic.prototype.getStartTimeAsString = function () {
                return this._dtStartTime.toDateString();
            };
            //==================================
            //   set / get startDateTime 
            //==================================
            //===================
            RE_PlaylistItem_Logic.prototype.setStartDateTime = function (dtStartDateTime) {
                this._dtStartDateTime = dtStartDateTime;
            };
            //===================
            RE_PlaylistItem_Logic.prototype.getStartDateTime = function () {
                return this._dtStartDateTime;
            };
            //====================
            RE_PlaylistItem_Logic.prototype.setStartDateTimeAsString = function (startTime) {
                try {
                    this._dtStartDateTime = new Date(startTime);
                }
                catch (ex) {
                    this._dtStartDateTime = null;
                }
            };
            //===================
            RE_PlaylistItem_Logic.prototype.getStartDateTimeAsString = function () {
                return this._dtStartDateTime.toDateString();
            };
            //==================================
            //   set / get natural duration
            //==================================
            //===================
            RE_PlaylistItem_Logic.prototype.setNaturalDuration = function (naturalDuration, epsilonTimeBeforeNaturalEnd) {
                if (naturalDuration == null) {
                    this._iNaturalDuration = null;
                    return;
                }
                this._iNaturalDuration = naturalDuration;
                if (isNaN(this._iNaturalDuration)) {
                    this._iNaturalDuration = null;
                    return;
                }
                if (epsilonTimeBeforeNaturalEnd == null)
                    return;
                if (isNaN(epsilonTimeBeforeNaturalEnd))
                    return;
                if (this._iNaturalDuration - epsilonTimeBeforeNaturalEnd < 1)
                    return;
                this._iNaturalDuration = this._iNaturalDuration - epsilonTimeBeforeNaturalEnd;
            };
            //-------------
            RE_PlaylistItem_Logic.prototype.getNaturalDuration = function () {
                return this._iNaturalDuration;
            };
            //------------
            RE_PlaylistItem_Logic.prototype.setNaturalDurationAsString = function (naturalDuration, epsilonTimeBeforeNaturalEnd) {
                if (naturalDuration == null) {
                    this._iNaturalDuration = null;
                    return;
                }
                this._iNaturalDuration = parseInt(naturalDuration);
                if (isNaN(this._iNaturalDuration)) {
                    this._iNaturalDuration = null;
                    return;
                }
                if (epsilonTimeBeforeNaturalEnd == null)
                    return;
                if (isNaN(epsilonTimeBeforeNaturalEnd))
                    return;
                if (this._iNaturalDuration - epsilonTimeBeforeNaturalEnd < 1)
                    return;
                this._iNaturalDuration = this._iNaturalDuration - epsilonTimeBeforeNaturalEnd;
            };
            //------------
            RE_PlaylistItem_Logic.prototype.getNaturalDurationAsString = function () {
                return "" + this._iNaturalDuration;
            };
            //==================================
            //   generate duration event
            //==================================
            //====================
            RE_PlaylistItem_Logic.prototype.startDurationTimerIfAny = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                if (this._iDuration == null)
                    return 1;
                if (isNaN(this._iDuration))
                    return 1;
                if (this._iDuration <= 0)
                    return 1;
                var self = this;
                /*
                var a =1 ;
                if (this._owner.getPlaylistItemId() == 68565)
                {
                  a =2 ;
                }*/
                this._idDurationTimer = setTimeout(function () {
                    self.generateEndDurationEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                }, self._iDuration);
                return 0;
            };
            //=================
            RE_PlaylistItem_Logic.prototype.clearDurationTimerIfAny = function () {
                if ((this._idDurationTimer != null) && (this._idDurationTimer != 0)) {
                    clearTimeout(this._idDurationTimer);
                    this._idDurationTimer = null;
                }
                return 0;
            };
            //======================
            RE_PlaylistItem_Logic.prototype.generateEndDurationEvent = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                /*
                var a =1;
                if (this._owner.getPlaylistItemId() == 68565)
                {
                  a =2 ;
                }*/
                var event = this.createEvent(amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToAbort, this, null, -1, error, context, callback);
                aPlaylistController._iPlaylistControllerRun.receiveEvent(event, null, error, context, callback);
                //this.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToAbort, 
                //              this, null, -1, eventQueue, error, context, callback);
                //to do: get address
            };
            //==================================
            //   generate natural duration event
            //==================================
            //====================
            RE_PlaylistItem_Logic.prototype.startNaturalDurationTimerIfAny = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                if (this._iNaturalDuration == null)
                    return 1;
                if (isNaN(this._iNaturalDuration))
                    return 1;
                if (this._iNaturalDuration <= 0)
                    return 1;
                var self = this;
                this._idNaturalDurationTimer = setTimeout(function () {
                    self.generateEndNaturalDurationEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                }, self._iNaturalDuration);
                return 0;
            };
            //=================
            RE_PlaylistItem_Logic.prototype.clearNaturalDurationTimerIfAny = function () {
                if ((this._idNaturalDurationTimer != null) && (this._idNaturalDurationTimer != 0)) {
                    clearTimeout(this._idNaturalDurationTimer);
                    this._idNaturalDurationTimer = null;
                }
                return 0;
            };
            //======================
            RE_PlaylistItem_Logic.prototype.generateEndNaturalDurationEvent = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                var event = this.createEvent(amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToAbort, this, null, -1, error, context, callback);
                aPlaylistController._iPlaylistControllerRun.receiveEvent(event, null, error, context, callback);
                //this.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToAbort, 
                //this, null, -1, eventQueue, error, context, callback);
                //to do: get address
            };
            //==================================
            //   generate duration events
            //==================================
            //====================
            RE_PlaylistItem_Logic.prototype.startDurationTimersIfAny = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                var bIsValidDuration = true;
                var bIsValidNaturalDuration = true;
                if ((this._iDuration == null) || isNaN(this._iDuration) || (this._iDuration < 0))
                    bIsValidDuration = false;
                if ((this._iNaturalDuration == null) || isNaN(this._iNaturalDuration) || (this._iNaturalDuration < 0))
                    bIsValidNaturalDuration = false;
                if ((!bIsValidDuration) && (!bIsValidNaturalDuration))
                    return 1;
                var self = this;
                var bStartDurationTimer = true;
                var bStartNaturalDurationTimer = false;
                if ((bIsValidDuration) && (!bIsValidNaturalDuration)) {
                    bStartDurationTimer = true;
                    bStartNaturalDurationTimer = false;
                }
                else if ((!bIsValidDuration) && (bIsValidNaturalDuration)) {
                    bStartDurationTimer = false;
                    bStartNaturalDurationTimer = true;
                }
                else if ((bIsValidDuration) && (bIsValidNaturalDuration)) {
                    if (this._iDuration <= this._iNaturalDuration) {
                        bStartDurationTimer = true;
                        bStartNaturalDurationTimer = false;
                    }
                    else {
                        bStartDurationTimer = false;
                        bStartNaturalDurationTimer = true;
                    }
                }
                //---------------
                if (bStartDurationTimer)
                    self.startDurationTimerIfAny(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                else
                    self.startNaturalDurationTimerIfAny(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                return 0;
            };
            //=================
            RE_PlaylistItem_Logic.prototype.clearDurationTimersIfAny = function () {
                this.clearDurationTimerIfAny();
                this.clearNaturalDurationTimerIfAny();
                return 0;
            };
            //==========================
            // generate start events
            //===========================
            //-------------------------------
            /*
            public  generateStartDiffNow_fromDateString(strDate: string) : number
            {
              //year, month 0-11, date, hour, min (can add ,sec,msec)
              var dtStartDate = new Date(strDate);
              return this.generateStartDiffNow_fromDate(dtStartDate);
            }*/
            //---------------------------------
            RE_PlaylistItem_Logic.prototype.generateStartDiff_fromNow_toDate = function (dtStartDate) {
                var now = (new Date()).getTime();
                var then = dtStartDate.getTime();
                var diff = Math.max((then - now), 0);
                return diff;
                //if (diff > 0x7FFFFFFF) //setTimeout limit is MAX_INT32=(2^31-1)
                //setTimeout(function() {runAtDate(date, func);}, 0x7FFFFFFF);
                //else
                //setTimeout(func, diff);
            };
            //---------------------------------
            /*
            public generateStartDiff_fromUTCNow_toDate(dtStartDate : Date)
            {
              var nowDate  = new Date();
              var utcNow = new Date( utcNow.getUTCFullYear(), utcNow.getUTCMonth(), utcNow.getUTCDay(),
                                     utcNow.getUTCHours(),    utcNow.getUTCMinutes(), utcNow.getUTCSeconds(), utcNow.getUTCMilliseconds());
        
              var now  = utcNow.getTime();
              var then = dtStartDate.getTime();
              var diff = Math.max((then - now), 0);
              return diff;
            }*/
            //---------------------------------
            RE_PlaylistItem_Logic.prototype.generateStartDiff_fromDates = function (dtScheduledDate, dtStartDate) {
                var now = dtStartDate.getTime();
                var then = dtScheduledDate.getTime();
                var diff = Math.max((then - now), 0);
                return diff;
            };
            //-------------------------------
            /*
            public getRealUTCStartDateAsOfToday() : Date
            {
              if (this._dtStartDateTime != null)
              {
                var todayScheduledDate = new Date( this._dtStartDateTime.getUTCFullYear(), this._dtStartDateTime.getUTCMonth(), this._dtStartDateTime.getUTCDay(),
                  this._dtStartDateTime.getUTCHours(), this._dtStartDateTime.getUTCMinutes(), this._dtStartDateTime.getUTCSeconds(), this._dtStartDateTime.getUTCMilliseconds());
                return todayScheduledDate;
              }
              if (this._dtStartTime == null)
                return null;
              var nowDate = new Date();
              var todayScheduledDate = new Date( nowDate.getUTCFullYear(), nowDate.getUTCMonth(), nowDate.getUTCDay(),
                                            this._dtStartTime.getUTCHours(), this._dtStartTime.getUTCMinutes(), this._dtStartTime.getUTCSeconds(), this._dtStartTime.getUTCMilliseconds());
              return todayScheduledDate;
            }*/
            //-------------------------------
            RE_PlaylistItem_Logic.prototype.getRealStartDateAsOfToday = function () {
                if (this._dtStartDateTime != null) {
                    var todayScheduledDate = new Date(this._dtStartDateTime.getFullYear(), this._dtStartDateTime.getMonth(), this._dtStartDateTime.getDay(), this._dtStartDateTime.getHours(), this._dtStartDateTime.getMinutes(), this._dtStartDateTime.getSeconds(), this._dtStartDateTime.getMilliseconds());
                    return todayScheduledDate;
                }
                if (this._dtStartTime == null)
                    return null;
                var nowDate = new Date();
                var todayScheduledDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDay(), this._dtStartTime.getHours(), this._dtStartTime.getMinutes(), this._dtStartTime.getSeconds(), this._dtStartTime.getMilliseconds());
                return todayScheduledDate;
            };
            //==================================
            //   generate duration event
            //==================================
            //====================
            RE_PlaylistItem_Logic.prototype.startStartTimerIfAny = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                var scheduledDate = this.getRealStartDateAsOfToday();
                var iStartTimeDiffInMs = iStartTimeDiffInMs = this.generateStartDiff_fromNow_toDate(scheduledDate); //this.generateStartDiff_fromUTCNow_toDate(scheduledDate);
                if (iStartTimeDiffInMs == null)
                    return 1;
                if (isNaN(iStartTimeDiffInMs))
                    return 1;
                if (iStartTimeDiffInMs <= 0)
                    return 1;
                var self = this;
                this._idStartTimer = setTimeout(function () {
                    self.generateStartEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                }, this._iDuration);
                return 0;
            };
            //=================
            RE_PlaylistItem_Logic.prototype.clearStartTimerIfAny = function () {
                if (this._idStartTimer) {
                    clearTimeout(this._idStartTimer);
                    this._idStartTimer = null;
                }
                return 0;
            };
            //======================
            RE_PlaylistItem_Logic.prototype.generateStartEvent = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                var event = this.createEvent(amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay, this._owner.getParent().getLogic(), null, -1, error, context, callback);
                aPlaylistController._iPlaylistControllerRun.receiveEvent(event, null, error, context, callback);
                //this.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay, 
                //this._owner.getParent().getLogic(), null, -1, eventQueue, error, context, callback);
                //to do: get address
            };
            //======================================
            //   manage Receive Event
            //======================================
            //======================
            RE_PlaylistItem_Logic.prototype.receiveEvent = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                switch (this._status) {
                    case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_End:
                        return this.statusEnd_receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                    case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_Play:
                        return this.statusPlay_receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                    case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_Error:
                        return this.statusError_receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                    case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_Disable:
                        return this.statusDisable_receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                    case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToPlay:
                        return this.statusRequestToPlay_receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                    case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToAbort:
                        return this.statusRequestToAbort_receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                    //case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToEnd:
                    //return this.statusRequestToEnd_receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                    default:
                        return this.ignoreEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                }
            };
            //========================================================================
            RE_PlaylistItem_Logic.prototype.postEvent = function (eventId, receiver, targetAddress, iCrtTargetIdx, eventQueue, error, context, callback) {
                var aEvent = this._aSrvLocator._iEntityCreation.createDefaultEvent(error);
                aEvent.setReceiver(receiver);
                aEvent.setEventId(eventId);
                aEvent.setTargetAddress(targetAddress);
                aEvent.setCrtTargetIdx(iCrtTargetIdx);
                this.prepareEvent(aEvent, eventQueue, error, context, callback);
                eventQueue.push(aEvent);
            };
            //========================================================================
            RE_PlaylistItem_Logic.prototype.createEvent = function (eventId, receiver, targetAddress, iCrtTargetIdx, error, context, callback) {
                var aEvent = this._aSrvLocator._iEntityCreation.createDefaultEvent(error);
                aEvent.setReceiver(receiver);
                aEvent.setEventId(eventId);
                aEvent.setTargetAddress(targetAddress);
                aEvent.setCrtTargetIdx(iCrtTargetIdx);
                return aEvent;
            };
            //----------------------
            // prepareEvent
            //----------------------
            //---------------------
            RE_PlaylistItem_Logic.prototype.prepareEvent = function (event, eventQueue, error, context, callback) {
            };
            //------------------------
            RE_PlaylistItem_Logic.prototype.hasAtLeastOneAncestorDisable = function (refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                var crtParent = this.getOwner().getParent();
                if (crtParent == null)
                    return false;
                if (crtParent.getLogic().isDisable(refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback))
                    return true;
                return crtParent.getLogic().hasAtLeastOneAncestorDisable(refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
            };
            //======================
            RE_PlaylistItem_Logic.prototype.isDisable = function (refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                /*
                //------------
                if (this.getOwner() != null)
                {
                  if (this.getOwner().getPrepareParams() != null)
                  {
                    if (this.getOwner().getPrepareParams().getRenderParams() != null)
                    {
                      if (! this.getOwner().getPrepareParams().getRenderParams().isVisible())
                        return true;
                    }
                  }
                }*/
                //----------------------
                if (this.hasZeroDuration())
                    return true;
                //-------------------------
                var referenceDate = null;
                if (refDate != null) {
                    referenceDate = new Date(refDate.getFullYear(), refDate.getMonth(), refDate.getDate(), refDate.getHours(), refDate.getMinutes(), refDate.getSeconds(), refDate.getMilliseconds());
                }
                else {
                    var nowDate = new Date();
                    referenceDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), nowDate.getHours(), nowDate.getMinutes(), nowDate.getSeconds(), nowDate.getMilliseconds());
                }
                //------------------------
                if ((this._diff_iWeekdays != null) && (Number.isInteger(this._diff_iWeekdays))) {
                    var refDayOfWeek = referenceDate.getDay();
                    var refDayOfWeekBinaryMask = this.getDayOfWeekBinaryMask(refDayOfWeek);
                    if ((this._diff_iWeekdays & refDayOfWeekBinaryMask) == 0)
                        return true;
                }
                //---- ref date is less than start date
                if (this._diff_dtStartDate != null) {
                    if (referenceDate < this._diff_dtStartDate)
                        return true;
                }
                //---- ref date is bigger than end date
                if (this._diff_dtEndDate != null) {
                    if (referenceDate > this._diff_dtEndDate)
                        return true;
                }
                //---- ref date's time is less than start time
                if (this._diff_dtStartTime != null) {
                    var startTimeCopy = new Date(this._diff_dtStartTime.getTime());
                    startTimeCopy.setFullYear(referenceDate.getFullYear());
                    startTimeCopy.setMonth(referenceDate.getMonth());
                    startTimeCopy.setDate(referenceDate.getDate());
                    if (referenceDate < startTimeCopy)
                        return true;
                }
                //---- ref date's time is less than end time
                if (this._diff_dtEndTime != null) {
                    var endTimeCopy = new Date(this._diff_dtEndTime.getTime());
                    endTimeCopy.setFullYear(referenceDate.getFullYear());
                    endTimeCopy.setMonth(referenceDate.getMonth());
                    endTimeCopy.setDate(referenceDate.getDate());
                    if (referenceDate > endTimeCopy)
                        return true;
                }
                return false;
            };
            //======================
            /*
            public isDisable_prev( refDate: Date,
                              event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error,
                              aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                              aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                              context: amGeneralContext.am_general.A_Context, callback): boolean
            {
              //-------------------------
              var referenceDate:Date = null;
              if (refDate != null)
              {
                referenceDate = new Date( refDate.getUTCFullYear(), refDate.getUTCMonth(),   refDate.getUTCDate(),
                                          refDate.getUTCHours(),    refDate.getUTCMinutes(), refDate.getUTCSeconds(), refDate.getUTCMilliseconds());
              }else{
                var nowDate = new Date();
                referenceDate = new Date( nowDate.getUTCFullYear(), nowDate.getUTCMonth(),   nowDate.getUTCDate(),
                                          nowDate.getUTCHours(),    nowDate.getUTCMinutes(), nowDate.getUTCSeconds(), nowDate.getUTCMilliseconds());
              }
              //------------------------
              if ( (this._diff_iWeekdays != null) && (Number.isInteger(this._diff_iWeekdays)))
              {
                var refDayOfWeek = referenceDate.getUTCDay();
                var refDayOfWeekBinaryMask = this.getDayOfWeekBinaryMask(refDayOfWeek);
                if ( (this._diff_iWeekdays & refDayOfWeekBinaryMask) == 0)
                  return true;
              }
              //---- ref date is less than start date
              if (this._diff_dtStartDate != null)
              {
                if (referenceDate < this._diff_dtStartDate)
                  return true;
              }
              //---- ref date is bigger than end date
              if (this._diff_dtEndDate != null)
              {
                if (referenceDate > this._diff_dtEndDate)
                  return true;
              }
              //---- ref date's time is less than start time
              if (this._diff_dtStartTime != null)
              {
                var startTimeCopy = new Date(this._diff_dtStartTime.getTime());
                startTimeCopy.setFullYear(referenceDate.getFullYear())
                startTimeCopy.setMonth(referenceDate.getMonth())
                startTimeCopy.setDate(referenceDate.getDate())
                if (referenceDate < startTimeCopy)
                  return true;
              }
              //---- ref date's time is less than end time
              if (this._diff_dtEndTime != null)
              {
                var endTimeCopy = new Date(this._diff_dtEndTime.getTime());
                endTimeCopy.setFullYear(referenceDate.getFullYear())
                endTimeCopy.setMonth(referenceDate.getMonth())
                endTimeCopy.setDate(referenceDate.getDate())
                if (referenceDate > endTimeCopy)
                  return true;
              }
              return false;
            }*/
            //======================
            RE_PlaylistItem_Logic.prototype.ignoreEvent = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                if (callback != null) {
                    if (error != null) {
                        context.setError(error);
                        //--- to do logError(error);
                    }
                    context.setError(error);
                    callback(context);
                }
            };
            //======================
            RE_PlaylistItem_Logic.prototype.returnWithCallback = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                if (callback != null) {
                    if (error != null) {
                        context.setError(error);
                        //--- to do logError(error);
                    }
                    context.setError(error);
                    callback(context);
                }
            };
            //======================
            //  statusEnd
            //======================
            //======================
            RE_PlaylistItem_Logic.prototype.passedTo_statusEnd = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                this._status = amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_End;
                //---- specific actions
                this.reset();
                //---- notifications
                if (this._owner.getParent() != null) {
                    this.postEvent(amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildEnd, this._owner.getParent().getLogic(), null, -1, eventQueue, error, context, callback);
                    this.postEvent(amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyGraphicDescendantEnd, this._owner.getParent().getLogic(), null, -1, eventQueue, error, context, callback);
                }
            };
            //======================
            RE_PlaylistItem_Logic.prototype.inStatusEnd_notifyChildEnd = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                if (this._owner.getParent() == null)
                    return;
                this.postEvent(amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildEnd, this._owner.getParent().getLogic(), null, -1, eventQueue, error, context, callback);
                // add child address
            };
            //======================
            RE_PlaylistItem_Logic.prototype.inStatusEnd_notifyGraphicDescendantEnd = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                if (this._owner.getParent() == null)
                    return;
                if (!this.hasARenderingRepresentation())
                    return;
                this.postEvent(amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyGraphicDescendantEnd, this._owner.getParent().getLogic(), null, null, eventQueue, error, context, callback);
                // add child address
            };
            //======================
            RE_PlaylistItem_Logic.prototype.statusEnd_receiveEvent = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                if (this._status != amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_End)
                    return this.ignoreEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                switch (event.getEventId()) {
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay:
                        {
                            if (!this.isDisable(null, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback)) {
                                return this.passedTo_statusRequestToPlay(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                            }
                            else {
                                return this.passedTo_statusDisable(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                            }
                            break;
                        }
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToAbort:
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToEnd:
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildPlay:
                        break;
                    //case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildAbort:
                    //break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildEnd:
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildDisable:
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildError:
                        break;
                    default:
                }
            };
            //=========================
            //  statusRequestToPlay
            //=========================
            //======================
            RE_PlaylistItem_Logic.prototype.passedTo_statusRequestToPlay = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                this._status = amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToPlay;
                this.statusRequestToPlay_startPlayOrError(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                /*
                if (this._owner.getParent() != null)
                {
                  this.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay,
                                  aRenderingController, null, -1, eventQueue, error, context, callback);
                }*/
            };
            //======================================
            RE_PlaylistItem_Logic.prototype.statusRequestToPlay_receiveEvent = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                if (this._status != amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToPlay)
                    return this.ignoreEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                switch (event.getEventId()) {
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay:
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToAbort:
                        {
                            return this.passedTo_statusRequestToAbort(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                            break;
                        }
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToEnd:
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildPlay:
                        {
                            return this.passedTo_statusPlay(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                            break;
                        }
                    //case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildAbort:
                    //break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildEnd:
                        {
                            return this.passedTo_statusEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                            break;
                        }
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildDisable:
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildError:
                        {
                            return this.passedTo_statusError(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                            break;
                        }
                    default:
                        break;
                }
            };
            //--------------
            RE_PlaylistItem_Logic.prototype.statusRequestToPlay_startPlayOrError = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                var self = this;
                var startPlayOrError = function startPlayOrError() {
                    if (!error.isError()) //------- pass in Play status  
                     {
                        self.postEvent(amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildPlay, self, null, -1, eventQueue, error, context, callback);
                    }
                    else { //------- pass in Error status  
                        self.postEvent(amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildError, self, null, -1, eventQueue, error, context, callback);
                    }
                };
                startPlayOrError();
            };
            //=========================
            //  statusPlay
            //=========================
            //=========================
            RE_PlaylistItem_Logic.prototype.passedTo_statusPlay = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                this._status = amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_Play;
                this.startDurationTimersIfAny(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                if (this._owner.getParent() != null) {
                    this.postEvent(amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildPlay, this._owner.getParent().getLogic(), null, -1, eventQueue, error, context, callback);
                }
            };
            //==============================
            RE_PlaylistItem_Logic.prototype.statusPlay_receiveEvent = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                if (this._status != amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToPlay)
                    return this.ignoreEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                switch (event.getEventId()) {
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay:
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToAbort:
                        {
                            return this.passedTo_statusRequestToAbort(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                            break;
                        }
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToEnd:
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildPlay:
                        break;
                    //case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildAbort:
                    //break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildEnd:
                        {
                            return this.passedTo_statusEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                            break;
                        }
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildDisable:
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildError:
                        {
                            return this.passedTo_statusError(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                            break;
                        }
                    default:
                        break;
                }
            };
            //======================
            //  statusDisable
            //======================
            //======================
            RE_PlaylistItem_Logic.prototype.passedTo_statusDisable = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                this._status = amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_Disable;
                if (this._owner.getParent() != null) {
                    this.postEvent(amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildDisable, this._owner.getParent().getLogic(), null, -1, eventQueue, error, context, callback);
                }
            };
            //======================
            RE_PlaylistItem_Logic.prototype.statusDisable_notifyChildDisable = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                if (this._owner.getParent() != null) {
                    this.postEvent(amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildDisable, this._owner.getParent().getLogic(), null, -1, eventQueue, error, context, callback);
                }
            };
            //==============================
            RE_PlaylistItem_Logic.prototype.statusDisable_receiveEvent = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                if (this._status != amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToPlay)
                    return this.ignoreEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                switch (event.getEventId()) {
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay:
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToAbort:
                        {
                            return this.passedTo_statusEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                            break;
                        }
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToEnd:
                        {
                            return this.passedTo_statusEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                            break;
                        }
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildPlay:
                        break;
                    //case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildAbort:
                    //break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildEnd:
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildDisable:
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildError:
                        break;
                    default:
                }
            };
            //======================
            //  statusError
            //======================
            //======================
            RE_PlaylistItem_Logic.prototype.passedTo_statusError = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                this._status = amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_Error;
                if (this._owner.getParent() != null) {
                    this.postEvent(amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildError, this._owner.getParent().getLogic(), null, -1, eventQueue, error, context, callback);
                }
            };
            //==============================
            RE_PlaylistItem_Logic.prototype.statusError_receiveEvent = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                if (this._status != amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToPlay)
                    return this.ignoreEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                switch (event.getEventId()) {
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay:
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToAbort:
                        return this.passedTo_statusEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToEnd:
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildPlay:
                        break;
                    //case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildAbort:
                    //break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildEnd:
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildDisable:
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildError:
                        break;
                    default:
                        break;
                }
            };
            //===================================
            //  statusRequestToAbort
            //===================================
            //======================
            RE_PlaylistItem_Logic.prototype.passedTo_statusRequestToAbort = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                var self = this;
                var callbackAbort = function callbackAbort() {
                    self._status = amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToAbort;
                    self.postEvent(amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildEnd, self, null, -1, eventQueue, error, context, callback);
                };
                callbackAbort();
            };
            //======================
            RE_PlaylistItem_Logic.prototype.statusRequestToAbort_receiveEvent = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                if (this._status != amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToAbort)
                    return this.ignoreEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                switch (event.getEventId()) {
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay:
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToAbort:
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToEnd:
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildPlay:
                        break;
                    //case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildAbort:
                    //break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildEnd:
                        {
                            return this.passedTo_statusEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                            break;
                        }
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildDisable:
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildError:
                        break;
                    default:
                        break;
                }
            };
            //===================================
            //  statusRequestToEnd
            //===================================
            /*
            //======================
            public statusRequestToEnd_receiveEvent( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error,
                                                    aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                                    aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                                    context: amGeneralContext.am_general.A_Context, callback): void
            {
              if (this._status != amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToEnd)
               return this.ignoreEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
            }*/
            //======================
            RE_PlaylistItem_Logic.prototype.hasActiveRenderingDescendantsToPlayAndItself = function (refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                if (!this._hasARenderingRepresentation)
                    return false;
                if (this.isDisable(refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback))
                    return false;
                return true;
            };
            //============================
            // adjust coordinates
            //============================
            RE_PlaylistItem_Logic.prototype.forAllChildren_adjustChildrenCoordinates_AlignNearbyEdges = function (error, context, callback) {
                return 1;
            };
            //-------------------------------------
            RE_PlaylistItem_Logic.prototype.adjustChildrenCoordinates_AlignNearbyEdges = function (error, context, callback) {
                return 1;
            };
            //==================================================
            // set sizes from Ancestor With A Rendering Zone
            //===================================================
            //-------------------------------------------------------
            RE_PlaylistItem_Logic.prototype.forAllChildren_setSizes_fromAdjustedContainer = function () {
                return 0;
            };
            //-------------------------------------------------------
            RE_PlaylistItem_Logic.prototype.setSizes_fromAdjustedContainer = function () {
                var ancestorWithRenderingZone = this.getFirstParentWithARenderingZone();
                if (ancestorWithRenderingZone == null)
                    return 1;
                if (this.getOwner().getPrepareParams() == null)
                    return 1;
                if (this.getOwner().getPrepareParams().getRenderParams() == null)
                    return 1;
                if (this.getOwner().getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize() == null)
                    return 1;
                this.getOwner().getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().setAllPosAndSizes(ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerLeft(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerTop(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerRight(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerBottom(), -1, -1, -1, -1);
                //this.getOwner().getPrepareParams().getRenderParams().getParamContainerPosSize().setContainerZOrder(
                //   ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerZOrder()); //9002
            };
            return RE_PlaylistItem_Logic;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_coreservices.RE_PlaylistItem_Logic = RE_PlaylistItem_Logic;
    })(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
});
//# sourceMappingURL=RE_PlaylistItem_Logic.js.map
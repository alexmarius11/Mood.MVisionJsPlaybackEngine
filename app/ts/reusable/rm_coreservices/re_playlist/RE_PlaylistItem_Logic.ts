import amCoreServices   = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Logic");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralEventType  = require("../../../../../app/ts/abstract/am_general/ae_event/AE_EventType");

import amCoreServicesPlaylistController   = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/A_PlaylistController");
import amCoreServicesRenderingController  = require("../../../../../app/ts/abstract/am_coreservices/a_renderingcontroller/A_RenderingController");

import amPlaylistItem  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem");
import amGeneralQueue = require("../../../../../app/ts/abstract/am_general/ae_queue/AE_Queue");
import amGeneralEvent = require("../../../../../app/ts/abstract/am_general/ae_event/AE_Event");
import amPlaylistItemStatusType = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemStatusType");
import amPlaylistItemEventType  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemEventType");

import rmGeneralEntity  = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");
import rmPlaylistItem  = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem");

export module rm_coreservices
{
  export class RE_PlaylistItem_Logic extends rmGeneralEntity.rm_general.R_Entity
                                     implements amCoreServices.am_coreservices.AE_PlaylistItem_Logic
  {
    _status : amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType;
    _owner  : amPlaylistItem.am_coreservices.AE_PlaylistItem;

    //----------------- an address of an item in the playlist tree like: //[1,2,2,1,0,2,1,1,1]
    // _ownerAddress : []; will be computed each time.

    //-------------- [1,2,2,1,0,2,1,1,1]
    //                          | -> last index of a supplied address of an item can be (sometimes) 'earlier' that the full address (len-1)
    //_lastIdxInOwnerAddress : number;
    _ownerIdxAsChild : number ; //first child has index zero
    _ownerIdxAsLevel : number ; //root has level zero

    _idDurationTimer : any;
    _iDuration       : number;

    _idNaturalDurationTimer : any;
    _iNaturalDuration       : number;

    _iPriority       :  number;

    _idStartTimer    : any;
    _startTime       : string;
    _dtStartTime     : Date;
    _startDateTime   : string;
    _dtStartDateTime : Date; 
    

    //-------- if yes - means that the playlist item (the owner) has a graphic representation (that plays on the screen)
    _hasARenderingRepresentation: boolean;

    //------- if yes - means that this playlist item (the owner) defines a X,Y,width,height area
    _hasARenderingZone: boolean;

    //------- if yes - means that the playlist item (the owner) 
    //                    that defines a X,Y,width,height area 
    //                    needs to create a rendering zone (where it or its children will play)
    //                    because it has "proximal" children with a graphical represenation      
    _mustCreateARenderingZone: boolean;

    _diff_duration              ;
    _diff_startDate             ;
    _diff_endDate               ;
    _diff_startTime             ;
    _diff_endTime               ;
    _diff_weekdays              ;
    
    _diff_dtStartDate           ;
    _diff_dtEndDate             ;
    _diff_dtStartTime           ;
    _diff_dtEndTime             ;
    _diff_iWeekdays             ;

    _targetRenderingZoneId      ;

    //===================
    constructor()
    {
      super();
      this._owner = null;
      this._ownerIdxAsChild = -1;
      this._ownerIdxAsLevel = -1;

      this._hasARenderingRepresentation = false;
      this._hasARenderingZone           = false;
      this._mustCreateARenderingZone    = false;

      this._diff_duration  = null ;
      this._diff_startDate = null ;
      this._diff_endDate   = null ;
      this._diff_startTime = null ;
      this._diff_endTime   = null ;
      this._diff_weekdays  = null ;

      this._diff_dtStartDate  = null;
      this._diff_dtEndDate    = null;
      this._diff_dtStartTime  = null;
      this._diff_dtEndTime    = null;
      this._diff_iWeekdays    = null;

      //--- dynamics
      this._status = amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_End;

      this._idDurationTimer = null;
      this._iDuration = null;

      this._idNaturalDurationTimer = null;
      this._iNaturalDuration = null;

      this._idStartTimer = null;
      this._startTime    = null;
      this._startDateTime = null;

      this._iPriority = 0;

      this._hasARenderingRepresentation = false;
      this._hasARenderingZone           = false;
      this._mustCreateARenderingZone    = false;

      this._targetRenderingZoneId = -1;
    }

    //==================================
    public  reset() : void
    {
      //--- dynamics
      this._status = amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_End;

      this._idDurationTimer = null;    
      this._idNaturalDurationTimer = null;
      this._idStartTimer = null;
    
      //this._iPriority = 0;
    }


    //======================================
    // get / set  target rendering zone id
    //=======================================

    //-------------------
    public getTargetRenderingZoneId() : number
    {
      return this._targetRenderingZoneId;
    }

    //-------------------
    public setTargetRenderingZoneId(targetRenderingZoneId : number)
    {
      this._targetRenderingZoneId = targetRenderingZoneId;
    }


    //======================
    // get / set  Priority
    //======================

    //---------------------------
    public getPriority() : number
    {
      return this._iPriority;
    }

    //---------------------------
    public setPriority(iPriority  : number)
    {
      this._iPriority = iPriority;
    }

  

    //======================
    // get / set  StatusCode
    //======================

    //---------------------------
    public getStatusCode() : amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType
    {
      return this._status;
    }

    //---------------------------
    public setStatusCode(status  : amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType)
    {
      this._status = status;
    }

    //============================================
    //  set / get has a rendering representation
    //============================================

    //-------- if yes - means that the playlist item (the owner) has a graphic representation (that plays on the screen)
    public hasARenderingRepresentation() : boolean
    {
      return this._hasARenderingRepresentation;
    }
    //----------------------------------
    public setHasARenderingRepresentation(hasARenderingRepresentation: boolean)
    {
      this._hasARenderingRepresentation = hasARenderingRepresentation;
    }
    

    //============================================
    //  set / get has a rendering zone
    //============================================
    //------- if yes - means that the playlist item (the owner) will determnine the creation of a rendering zone (where it or its children will play)
    public hasARenderingZone() : boolean
    {
      return this._hasARenderingZone;
    }
    //----------------------------------
    public setHasARenderingZone(hasARenderingZone: boolean)
    {
      this._hasARenderingZone = hasARenderingZone;
    }


    //============================================
    //  set / get must create a rendering zone
    //============================================
    //==============================
    public mustCreateARenderingZone() : boolean
    {
      return this._mustCreateARenderingZone;
    }
    //----------------------------------
    public setMustCreateARenderingZone(mustCreateARenderingZone: boolean)
    {
      this._mustCreateARenderingZone = mustCreateARenderingZone;
    }

    //=============================
    //
    //========================


    //------------------------
    public getFirstParentWithARenderingZone() : amPlaylistItem.am_coreservices.AE_PlaylistItem
    {
      var crtParent = this.getOwner().getParent();
      if (crtParent == null)
        return null;
      if (crtParent.getLogic().hasARenderingZone())
        return crtParent;
      return  crtParent.getLogic().getFirstParentWithARenderingZone(); 
    }
    
    //======================
    public setAncestorThatMustCreateARenderingZone( error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      var pAncestorWithRenderingZone:amPlaylistItem.am_coreservices.AE_PlaylistItem = null;
      if (this._hasARenderingRepresentation)
      {
        pAncestorWithRenderingZone  = this.getFirstParentWithARenderingZone() ;
        if ( pAncestorWithRenderingZone != null)
          pAncestorWithRenderingZone.getLogic().setMustCreateARenderingZone(true);
      }
    }

    //====================================
    // parse diffusion dates -- to do: move these functions to Utils.datetime
    //====================================

    //============================
    //"/Date(1542377112427+0000)/"
    public parseJsonDateMillis(strDate: string): Date 
    {
      if (strDate == null)
        return null;
      try{
        var datestr = strDate.substring(strDate.indexOf("(") + 1, strDate.indexOf(")"));
        var dtDate = new Date(parseInt(datestr, 10));
        return dtDate;
      }catch(e){
        return null;
      }
    }

    //=========================
    //"PT23H59M59S"
    public parseJsonDuration(strDuration) : Date
    {
      if (strDuration == null)
        return null;
      try{
        var n = strDuration.replace(/D|H|M/g,":").replace(/P|T|S/g,"").split(":");

        if(1 == n.length)
          2!=n[0].length && (n[0]="0"+n[0]),n[0]="0:"+n[0];
        else 
          for(var r=1, l=n.length-1; l>=r;r++)
              2!=n[r].length && (n[r]="0"+n[r]);

        var str = n.join(":");

        let dtDate = new Date(); // creates a Date Object using the clients current time

        let [hours,minutes,seconds] = str.split(':'); // using ES6 destructuring
        // var time = "18:19:02".split(':'); // "old" ES5 version

        if (seconds == null)
          seconds = 0;
        dtDate.setHours(+hours); // set the hours, using implicit type coercion
        dtDate.setMinutes(minutes); // you can pass Number or String, it doesn't really matter
        dtDate.setSeconds(seconds);
        // if needed, adjust date and time zone
        return dtDate;
      }catch(e){
        return null;
      }
    }

    //===========================
    //The getDay() method returns the day of the week (from 0 to 6) for the specified date.
    //Note: Sunday is 0, Monday is 1, and so on.
    public getDayOfWeekBinaryMask(weekDayNo: number) : number
    {
      switch (weekDayNo)
      {

        case 1:  // Monday
          return 64;

        case 2:  // Tuesday
          return 32;

        case 3:  // Wednesday
          return 16;

        case 4:  // Thursday
          return 8;

        case 5: // Friday
          return 4;

        case 6: // Saturday 
          return 2;

        case 0: // Sunday
          return 1;
      }
      return 0;
    }

    //-----------------------------
    public convertDiffusionStringsToDates()
    {
      this._diff_dtStartDate = this.parseJsonDateMillis(this._diff_startDate);
      this._diff_dtEndDate   = this.parseJsonDateMillis(this._diff_endDate);
      this._diff_dtStartTime = this.parseJsonDuration(this._diff_startTime);  
      this._diff_dtEndTime   = this.parseJsonDuration(this._diff_endTime);  
      this._diff_iWeekdays = null;
      if (this._diff_weekdays != null)
        this._diff_iWeekdays = Number.parseInt(this._diff_weekdays.Value);
  
      //var dt = parseJsonDuration('PT23H59M59S');
      //var hours = dt.getHours();	
      //var dt2 = parseJsonDateMillis("/Date(1542377112427+0000)/");
      //var hours2 = dt2.getHours();
    }
    
    //----------------------
    public setDiffusionInfos(diff_duration : string, diff_startDate : string, diff_endDate : string, diff_startTime : string, diff_endTime:string, diff_weekdays:number) 
    {
      this._diff_duration  = diff_duration;
      this._diff_startDate = diff_startDate;
      this._diff_endDate   = diff_endDate;
      this._diff_startTime = diff_startTime;
      this._diff_endTime   = diff_endTime;
      this._diff_weekdays  = diff_weekdays;

      this.convertDiffusionStringsToDates();
    }

    

    //==================================
    //  set / get Owner of the Logic
    //==================================

    //======================
    public hasChildren() : boolean
    {
        return false;    
    }

    //==================================
    //   set / get Owner of the Logic
    //==================================

    //===================
    public setOwner(owner : amPlaylistItem.am_coreservices.AE_PlaylistItem)
    {
      this._owner = owner;
    }
    //-------------
    public getOwner() : amPlaylistItem.am_coreservices.AE_PlaylistItem
    {
      return this._owner;
    }

    //==================================
    //   set / get Owner Address
    //==================================

    //===================
    public createAndGenerateOwnerAddress() : Array<number>
    {
      var ownerAddress = new Array<number>();
      this.generateOwnerAddress(ownerAddress);
      return ownerAddress;
    }
    //---------------------
    public generateOwnerAddress(ownerAddress : Array<number>)
    {
      ownerAddress.unshift(this._ownerIdxAsChild);
      if (this.getOwner().getParent() != null)
        return this.getOwner().getParent().getLogic().generateOwnerAddress(ownerAddress);
    }

    //==================
    public getOwnerIdxAsChild() : number
    {
      return this._ownerIdxAsChild;
    }
    //------
    public setOwnerIdxAsChild(ownerIdxAsChild : number) : void
    {
      this._ownerIdxAsChild = ownerIdxAsChild;
    }

    //==================
    public getOwnerIdxAsLevel() : number
    {
      return this._ownerIdxAsLevel;
    }
    //------
    public setOwnerIdxAsLevel(ownerIdxAsLevel : number) : void
    {
      this._ownerIdxAsLevel = ownerIdxAsLevel;
    }

        
    //==================================
    //   set / get duration
    //==================================

    //===================
    public setDuration(iDuration : number)
    {
      this._iDuration = iDuration;
    }
    //-------------
    public getDuration() : number
    {
      return this._iDuration;
    }
    //------------
    public setDurationAsString(duration : string)
    { 
      this._iDuration = parseInt(duration);
    }
    //------------
    public getDurationAsString() : string
    { 
      return "" + this._iDuration;
    }
    //-------------
    public hasZeroDuration() : boolean
    {
      if (this._iDuration == null)
        return false;
      if (isNaN(this._iDuration))
        return false;
      if (this._iDuration == 0)  
        return true;
      return false;  
    }

    //==================================
    //   set / get startTime 
    //==================================

    //===================
    public setStartTime(dtStartTime : Date)
    {
      this._dtStartTime = dtStartTime;
    }
    //===================
    public getStartTime() : Date
    {
      return this._dtStartTime;
    }

    //====================
    public setStartTimeAsString(startTime : string)
    { 
      try{
        this._dtStartTime = new Date(startTime);
      }catch(ex)
      {
        this._dtStartTime = null;
      }
    }

    //------------
    public getStartTimeAsString() : string
    { 
      return this._dtStartTime.toDateString();
    }

    //==================================
    //   set / get startDateTime 
    //==================================

    //===================
    public setStartDateTime(dtStartDateTime : Date)
    {
      this._dtStartDateTime = dtStartDateTime;
    }
    //===================
    public getStartDateTime() : Date
    {
      return this._dtStartDateTime;
    }

    //====================
    public setStartDateTimeAsString(startTime : string)
    { 
      try{
        this._dtStartDateTime = new Date(startTime);
      }catch(ex)
      {
        this._dtStartDateTime = null;
      }
    }
    //===================
    public getStartDateTimeAsString() : string
    { 
      return this._dtStartDateTime.toDateString();
    }


    //==================================
    //   set / get natural duration
    //==================================

    //===================
    public setNaturalDuration(naturalDuration : number, epsilonTimeBeforeNaturalEnd: number)
    {
      if (naturalDuration == null)
      {
        this._iNaturalDuration = null;
        return;
      }
      this._iNaturalDuration = naturalDuration;
      if (isNaN(this._iNaturalDuration))
      {
        this._iNaturalDuration = null;
        return;
      }
      if (epsilonTimeBeforeNaturalEnd == null)
        return;
      if (isNaN(epsilonTimeBeforeNaturalEnd))
        return;
      if (this._iNaturalDuration - epsilonTimeBeforeNaturalEnd < 1)
        return ;
      this._iNaturalDuration = this._iNaturalDuration - epsilonTimeBeforeNaturalEnd
    }
    //-------------
    public getNaturalDuration() : number
    {
      return this._iNaturalDuration;
    }
    //------------
    public setNaturalDurationAsString(naturalDuration : string, epsilonTimeBeforeNaturalEnd: number)
    { 
      if (naturalDuration == null)
      {
        this._iNaturalDuration = null;
        return;
      }
      this._iNaturalDuration = parseInt(naturalDuration);
      if (isNaN(this._iNaturalDuration))
      {
        this._iNaturalDuration = null;
        return;
      }
      if (epsilonTimeBeforeNaturalEnd == null)
        return;
      if (isNaN(epsilonTimeBeforeNaturalEnd))
        return;
      if (this._iNaturalDuration - epsilonTimeBeforeNaturalEnd < 1)
        return ;
      this._iNaturalDuration = this._iNaturalDuration - epsilonTimeBeforeNaturalEnd
    }

    //------------
    public getNaturalDurationAsString() : string
    { 
      return "" + this._iNaturalDuration;
    }


    //==================================
    //   generate duration event
    //==================================

    //====================
    public startDurationTimerIfAny( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                    aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                    aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                    context: amGeneralContext.am_general.A_Context, callback) : number
    { 
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
      this._idDurationTimer = setTimeout( function() 
                                          { 
                                            self.generateEndDurationEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback); 
                                          }, 
                                          self._iDuration);
      return 0;
    }

    //=================
    public clearDurationTimerIfAny() : number
    { 
      if ((this._idDurationTimer != null) && (this._idDurationTimer != 0))
      {
        clearTimeout(this._idDurationTimer);
        this._idDurationTimer = null ;
      }
      return 0;
    }

    //======================
    public generateEndDurationEvent( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                     aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                     aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                     context: amGeneralContext.am_general.A_Context, callback): void
    {
      /*
      var a =1;
      if (this._owner.getPlaylistItemId() == 68565)
      {
        a =2 ;
      }*/
      var event : amGeneralEvent.am_general.AE_Event = this.createEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToAbort, 
                                                                         this, null, -1, error, context, callback);
      aPlaylistController._iPlaylistControllerRun.receiveEvent(event, null, error, context, callback);
      //this.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToAbort, 
        //              this, null, -1, eventQueue, error, context, callback);
                      //to do: get address
    }   


    //==================================
    //   generate natural duration event
    //==================================

    //====================
    public startNaturalDurationTimerIfAny( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                    aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                    aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                    context: amGeneralContext.am_general.A_Context, callback) : number
    { 
      if (this._iNaturalDuration == null)
        return 1;
      if (isNaN(this._iNaturalDuration))
        return 1;
      if (this._iNaturalDuration <= 0)
        return 1;
      var self = this; 
      this._idNaturalDurationTimer = setTimeout( function() 
                                          { 
                                            self.generateEndNaturalDurationEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback); 
                                          }, 
                                          self._iNaturalDuration);
      return 0;
    }

    //=================
    public clearNaturalDurationTimerIfAny() : number
    { 
      if ((this._idNaturalDurationTimer != null) && (this._idNaturalDurationTimer != 0))
      {
        clearTimeout(this._idNaturalDurationTimer);
        this._idNaturalDurationTimer = null ;
      }
      return 0;
    }

    //======================
    public generateEndNaturalDurationEvent( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                            aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                            aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                            context: amGeneralContext.am_general.A_Context, callback): void
    {

      var event : amGeneralEvent.am_general.AE_Event = this.createEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToAbort, 
                                                                         this, null, -1, error, context, callback);
      aPlaylistController._iPlaylistControllerRun.receiveEvent(event, null, error, context, callback);
      //this.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToAbort, 
                      //this, null, -1, eventQueue, error, context, callback);
                      //to do: get address
    }   

    //==================================
    //   generate duration events
    //==================================

    //====================
    public startDurationTimersIfAny( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                    aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                    aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                    context: amGeneralContext.am_general.A_Context, callback) : number
    { 
      var bIsValidDuration : boolean        = true;
      var bIsValidNaturalDuration : boolean = true;

      if ( (this._iDuration == null) || isNaN(this._iDuration) || (this._iDuration < 0) )
        bIsValidDuration = false;

      if ( (this._iNaturalDuration == null) || isNaN(this._iNaturalDuration) || (this._iNaturalDuration < 0) )
        bIsValidNaturalDuration = false;

      if ( (! bIsValidDuration) && (! bIsValidNaturalDuration))
        return 1;

      var self = this; 
      var bStartDurationTimer : boolean        = true;
      var bStartNaturalDurationTimer : boolean = false;
       if (( bIsValidDuration) && ( ! bIsValidNaturalDuration))
       {
         bStartDurationTimer = true;
         bStartNaturalDurationTimer = false;  
       }else if (( ! bIsValidDuration) && ( bIsValidNaturalDuration))
       {
         bStartDurationTimer = false;
         bStartNaturalDurationTimer = true;  
       }else if (( bIsValidDuration) && ( bIsValidNaturalDuration))
       {
         if (this._iDuration <= this._iNaturalDuration)
         {
           bStartDurationTimer = true;
           bStartNaturalDurationTimer = false;  
         }else{
          bStartDurationTimer = false;
          bStartNaturalDurationTimer = true;  
         }  
       }
       //---------------
       if ( bStartDurationTimer)
         self.startDurationTimerIfAny( event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) ;
       else 
         self.startNaturalDurationTimerIfAny( event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) ;
      return 0;
    }

    //=================
    public clearDurationTimersIfAny() : number
    { 
      this.clearDurationTimerIfAny() ;
      this.clearNaturalDurationTimerIfAny() ;
      return 0;
    }

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
    public generateStartDiff_fromNow_toDate(dtStartDate : Date) 
    {
      var now = (new Date()).getTime();
      var then = dtStartDate.getTime();
      var diff = Math.max((then - now), 0);
      return diff;
      //if (diff > 0x7FFFFFFF) //setTimeout limit is MAX_INT32=(2^31-1)
          //setTimeout(function() {runAtDate(date, func);}, 0x7FFFFFFF);
      //else
          //setTimeout(func, diff);
    }

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
    public generateStartDiff_fromDates(dtScheduledDate : Date, dtStartDate : Date) : number
    {
      var now  = dtStartDate.getTime();
      var then = dtScheduledDate.getTime();
      var diff = Math.max((then - now), 0);
      return diff;
    }

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
    public getRealStartDateAsOfToday() : Date
    {
      if (this._dtStartDateTime != null)
      {
        var todayScheduledDate = new Date( this._dtStartDateTime.getFullYear(), this._dtStartDateTime.getMonth(), this._dtStartDateTime.getDay(), 
          this._dtStartDateTime.getHours(), this._dtStartDateTime.getMinutes(), this._dtStartDateTime.getSeconds(), this._dtStartDateTime.getMilliseconds());
        return todayScheduledDate;
      }
      if (this._dtStartTime == null)
        return null;
      var nowDate = new Date();
      var todayScheduledDate = new Date( nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDay(), 
                                    this._dtStartTime.getHours(), this._dtStartTime.getMinutes(), this._dtStartTime.getSeconds(), this._dtStartTime.getMilliseconds());
      return todayScheduledDate;
    }

    //==================================
    //   generate duration event
    //==================================

    //====================
    public startStartTimerIfAny( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                    aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                    aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                    context: amGeneralContext.am_general.A_Context, callback) : number
    { 
      var scheduledDate = this.getRealStartDateAsOfToday() ;
      var iStartTimeDiffInMs = iStartTimeDiffInMs = this.generateStartDiff_fromNow_toDate(scheduledDate);//this.generateStartDiff_fromUTCNow_toDate(scheduledDate);
      if (iStartTimeDiffInMs == null)
        return 1;
      if (isNaN(iStartTimeDiffInMs))
        return 1;
      if (iStartTimeDiffInMs <= 0)
        return 1;
      var self = this; 
      this._idStartTimer = setTimeout( function() 
                                          { 
                                            self.generateStartEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback); 
                                          }, 
                                          this._iDuration);
      return 0;
    }

    //=================
    public clearStartTimerIfAny() : number
    { 
      if (this._idStartTimer)
      {
        clearTimeout(this._idStartTimer);
        this._idStartTimer = null ;
      }
      return 0;
    }

    //======================
    public generateStartEvent( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                               aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                               aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                               context: amGeneralContext.am_general.A_Context, callback): void
    {
      var event : amGeneralEvent.am_general.AE_Event = this.createEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay, 
                                                                         this._owner.getParent().getLogic(), null, -1, error, context, callback);
      aPlaylistController._iPlaylistControllerRun.receiveEvent(event, null, error, context, callback);

      //this.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay, 
                        //this._owner.getParent().getLogic(), null, -1, eventQueue, error, context, callback);
                        //to do: get address
    }   

    //======================================
    //   manage Receive Event
    //======================================

    //======================
    public receiveEvent( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                         aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                         aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                         context: amGeneralContext.am_general.A_Context, callback): void
    {
      switch(this._status) 
      {
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
    }


    //========================================================================
    public postEvent( eventId: number, receiver: any, targetAddress: [], iCrtTargetIdx : number,
                      eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                      context: amGeneralContext.am_general.A_Context, callback): void
    {  
      var aEvent = this._aSrvLocator._iEntityCreation.createDefaultEvent(error);
      aEvent.setReceiver(receiver);
      aEvent.setEventId(eventId);
      aEvent.setTargetAddress(targetAddress);
      aEvent.setCrtTargetIdx(iCrtTargetIdx);
      this.prepareEvent(aEvent, eventQueue, error, context, callback);
      eventQueue.push(aEvent);
    }

    //========================================================================
    public createEvent( eventId: number, receiver: any, targetAddress: [], iCrtTargetIdx: number,
                          error: amGeneralError.am_general.A_Error, 
                          context: amGeneralContext.am_general.A_Context, callback): amGeneralEvent.am_general.AE_Event
    {  
      var aEvent = this._aSrvLocator._iEntityCreation.createDefaultEvent(error);
      aEvent.setReceiver(receiver);
      aEvent.setEventId(eventId);
      aEvent.setTargetAddress(targetAddress);
      aEvent.setCrtTargetIdx(iCrtTargetIdx);
      return aEvent;
    }

    //----------------------
    // prepareEvent
    //----------------------

    //---------------------
    public prepareEvent( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, 
                        error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {

    }

   //------------------------
   public hasAtLeastOneAncestorDisable( refDate: Date, 
                                       event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                       aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                       aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                       context: amGeneralContext.am_general.A_Context, callback): boolean
   {
     var crtParent = this.getOwner().getParent();
     if (crtParent == null)
       return false;
     if (crtParent.getLogic().isDisable(refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback))
       return true;
     return  crtParent.getLogic().hasAtLeastOneAncestorDisable(refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback); 
   }
    
    //======================
    public isDisable( refDate: Date, 
                      event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                      aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                      aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                      context: amGeneralContext.am_general.A_Context, callback): boolean
    {
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
      var referenceDate:Date = null;
      if (refDate != null)
      {
        referenceDate = new Date( refDate.getFullYear(), refDate.getMonth(),   refDate.getDate(), 
                                  refDate.getHours(),    refDate.getMinutes(), refDate.getSeconds(), refDate.getMilliseconds());   
      }else{
        var nowDate = new Date();
        referenceDate = new Date( nowDate.getFullYear(), nowDate.getMonth(),   nowDate.getDate(), 
                                  nowDate.getHours(),    nowDate.getMinutes(), nowDate.getSeconds(), nowDate.getMilliseconds());   
      }
      //------------------------
      if ( (this._diff_iWeekdays != null) && (Number.isInteger(this._diff_iWeekdays)))
      {
        var refDayOfWeek = referenceDate.getDay();
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
    }

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
    public ignoreEvent( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                        aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                        aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                        context: amGeneralContext.am_general.A_Context, callback): void
    {
      if (callback != null)
      {
        if (error != null)
        {
          context.setError(error);
          //--- to do logError(error);
        }
        context.setError(error);
        callback(context);
      }
    }

    //======================
    public returnWithCallback( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                               aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                               aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                               context: amGeneralContext.am_general.A_Context, callback): void
    {
      if (callback != null)
      {
        if (error != null)
        {
          context.setError(error);
          //--- to do logError(error);
        }
        context.setError(error);
        callback(context);
      }
    }



    //======================
    //  statusEnd
    //======================

    //======================
    public passedTo_statusEnd( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                               aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                               aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                               context: amGeneralContext.am_general.A_Context, callback): void
    {
      this._status = amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_End;
      //---- specific actions
      this.reset();
      //---- notifications
      if (this._owner.getParent() != null)
      {
        this.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildEnd, 
                      this._owner.getParent().getLogic(), null, -1, eventQueue, error, context, callback);
        this.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyGraphicDescendantEnd, 
                      this._owner.getParent().getLogic(), null, -1, eventQueue, error, context, callback);
  
      }
    }

    //======================
    public inStatusEnd_notifyChildEnd( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                       aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                       aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                       context: amGeneralContext.am_general.A_Context, callback): void
    {
      if (this._owner.getParent() == null)
        return ;

      this.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildEnd, 
                      this._owner.getParent().getLogic(), null, -1, eventQueue, error, context, callback);  
                      // add child address
    }

    //======================
    public inStatusEnd_notifyGraphicDescendantEnd( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                                   aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                                   aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                                   context: amGeneralContext.am_general.A_Context, callback): void
    {
      if (this._owner.getParent() == null)
        return ;  
      if ( ! this.hasARenderingRepresentation())  
        return ;
      this.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyGraphicDescendantEnd, 
                      this._owner.getParent().getLogic(), null, null, eventQueue, error, context, callback);  
                      // add child address
    }


    //======================
    public statusEnd_receiveEvent( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                   aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                   aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                   context: amGeneralContext.am_general.A_Context, callback): void
    {
      if (this._status != amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_End)
        return this.ignoreEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
    
      switch(event.getEventId()) 
      {
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay:
        {
          if (! this.isDisable(null, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback))
          {
            return this.passedTo_statusRequestToPlay(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
          }else{
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
    }


    //=========================
    //  statusRequestToPlay
    //=========================
  
    //======================
    public passedTo_statusRequestToPlay( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                         aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                         aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                         context: amGeneralContext.am_general.A_Context, callback): void
    {
      this._status = amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToPlay;
      this.statusRequestToPlay_startPlayOrError(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);

      /*
      if (this._owner.getParent() != null)
      {
        this.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay, 
                        aRenderingController, null, -1, eventQueue, error, context, callback);
      }*/
    }

    //======================================
    public statusRequestToPlay_receiveEvent( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                             aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                             aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                             context: amGeneralContext.am_general.A_Context, callback): void
    {
      if (this._status != amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToPlay)
        return this.ignoreEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
      switch(event.getEventId()) 
      {
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
    }

    //--------------
    public statusRequestToPlay_startPlayOrError( event : amGeneralEvent.am_general.AE_Event, 
                                                 eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                                 aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                                 aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                                 context: amGeneralContext.am_general.A_Context, callback): void
    {
      var self = this;
      var startPlayOrError = function startPlayOrError()
      {
        if (! error.isError()) //------- pass in Play status  
        {
          self.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildPlay, 
                          self, null, -1, eventQueue, error, context, callback);
        }else{                 //------- pass in Error status  
          self.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildError, 
                          self, null, -1, eventQueue, error, context, callback);
        }
      }
      startPlayOrError(); 
    }



    //=========================
    //  statusPlay
    //=========================
    
    //=========================
    public passedTo_statusPlay( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                context: amGeneralContext.am_general.A_Context, callback): void
    {
      this._status = amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_Play;
      this.startDurationTimersIfAny(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
      if (this._owner.getParent() != null)
      {
        this.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildPlay, 
                      this._owner.getParent().getLogic(), null, -1, eventQueue, error, context, callback);
      }
    }

    //==============================
    public statusPlay_receiveEvent( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                    aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                    aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                    context: amGeneralContext.am_general.A_Context, callback): void
    {
      if (this._status != amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToPlay)
        return this.ignoreEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        switch(event.getEventId()) 
        {
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
      }



    //======================
    //  statusDisable
    //======================

    //======================
    public passedTo_statusDisable( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                   aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                   aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                   context: amGeneralContext.am_general.A_Context, callback): void
    {
      this._status = amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_Disable;
      if (this._owner.getParent() != null)
      {
        this.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildDisable, 
                      this._owner.getParent().getLogic(), null, -1, eventQueue, error, context, callback);
      }
    }

    //======================
    public statusDisable_notifyChildDisable( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                             aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                             aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                            context: amGeneralContext.am_general.A_Context, callback): void
    {
      if (this._owner.getParent() != null)
      {
        this.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildDisable, 
                        this._owner.getParent().getLogic(), null, -1, eventQueue, error, context, callback);
      }
    }

    //==============================
    public statusDisable_receiveEvent( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                       aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                       aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                       context: amGeneralContext.am_general.A_Context, callback): void
    {
      if (this._status != amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToPlay)
        return this.ignoreEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        switch(event.getEventId()) 
        {
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
    }


    //======================
    //  statusError
    //======================

    //======================
    public passedTo_statusError( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                 aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                 aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                 context: amGeneralContext.am_general.A_Context, callback): void
    {
      this._status = amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_Error;
      if (this._owner.getParent() != null)
      {
        this.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildError, 
                      this._owner.getParent().getLogic(), null, -1, eventQueue, error, context, callback);
      }
    }

    //==============================
    public statusError_receiveEvent( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                     aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                     aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                     context: amGeneralContext.am_general.A_Context, callback): void
    {
      if (this._status != amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToPlay)
        return this.ignoreEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
      switch(event.getEventId()) 
      {
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
    }



    //===================================
    //  statusRequestToAbort
    //===================================
    
    //======================
    public passedTo_statusRequestToAbort( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                          aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                          aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                          context: amGeneralContext.am_general.A_Context, callback): void
    {
      var self = this;
      var callbackAbort = function callbackAbort()
      {    
        self._status = amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToAbort;
        self.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildEnd, 
                        self, null, -1, eventQueue, error, context, callback);
      }
      callbackAbort();
    }

    //======================
    public statusRequestToAbort_receiveEvent( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                              aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                              aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                              context: amGeneralContext.am_general.A_Context, callback): void
    {
      if (this._status != amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToAbort)
        return this.ignoreEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        switch(event.getEventId()) 
        {
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
    }


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
    public hasActiveRenderingDescendantsToPlayAndItself( 
                                                refDate: Date, event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                                aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                                aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                                context: amGeneralContext.am_general.A_Context, callback) 
    {
      if (! this._hasARenderingRepresentation)
        return false;
      if (this.isDisable(refDate, event, eventQueue, error, aPlaylistController, aRenderingController,context,callback))  
        return false;
      
      return true;
    }

    //============================
    // adjust coordinates
    //============================
    public forAllChildren_adjustChildrenCoordinates_AlignNearbyEdges(  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : number
    {
      return 1;
    }

    //-------------------------------------
    public adjustChildrenCoordinates_AlignNearbyEdges(  error: amGeneralError.am_general.A_Error, 
                                                        context: amGeneralContext.am_general.A_Context, callback) : number
    {
      return 1;
    }


    //==================================================
    // set sizes from Ancestor With A Rendering Zone
    //===================================================

    //-------------------------------------------------------
    public forAllChildren_setSizes_fromAdjustedContainer() : number
    {
      return 0;
    }

    //-------------------------------------------------------
    public setSizes_fromAdjustedContainer() : number
    {
      var ancestorWithRenderingZone = this.getFirstParentWithARenderingZone();
      if (ancestorWithRenderingZone == null)
        return 1;
      if (this.getOwner().getPrepareParams()== null)
        return 1;
      if (this.getOwner().getPrepareParams().getRenderParams() == null)
        return 1;
      if (this.getOwner().getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize() == null)
        return 1;
    
      this.getOwner().getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().setAllPosAndSizes(
                                        ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerLeft(),
                                        ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerTop(),
                                        ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerRight(),
                                        ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerBottom(),
                                        -1, -1, -1, -1);
      //this.getOwner().getPrepareParams().getRenderParams().getParamContainerPosSize().setContainerZOrder(
                                     //   ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerZOrder()); //9002
    }  
    
  }
} 
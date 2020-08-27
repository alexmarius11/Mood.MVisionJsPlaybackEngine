import amCoreServices   = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_Status");

import amGeneralError      = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amServiceContainer  = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amServiceLog        = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amPlaylistItemLogic  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Logic");
import amPlaylistItemContainerLogic  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_ContainerLogic");

import amPlaylistItemType  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemType");
import amRenderParametersAllParameters     = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_AllParameters");

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
  export class RE_PlaylistItem_Status extends rmGeneralEntity.rm_general.R_Entity
                                       implements amCoreServices.am_coreservices.AE_PlaylistItem_Status
  {
     _diagram : amPlaylistItemLogic.am_coreservices.AE_PlaylistItem_Logic;
     _containerDiagram : amPlaylistItemContainerLogic.am_coreservices.AE_PlaylistItem_ContainerLogic;
     _statusName : string;
     _debug : boolean;
     //----------------
     constructor()
     {
       super();
       this._diagram  = null;
       this._containerDiagram  = null;
       this._statusName = "";
       this._debug = false;
     }

    //-----------------------
    public reset() 
    {

    }

    //-----------------------
    public reset2() 
    {

    }

    //---------------------------
    public getStatusName() : string
    {
      return this._statusName;
    }

    //------------------------
    public injectDependencies( aSrvContainer: amServiceContainer.am_configurationservices.A_ServiceContainer, 
                               aSrvLocator:   amServiceLocator.am_configurationservices.A_ServiceLocator, 
                               aSrvLog:       amServiceLog.am_transversalservices.A_LogService, 
                               error: amGeneralError.am_general.A_Error) : number
    {
      super.injectDependencies( aSrvContainer, aSrvLocator, aSrvLog, error);
      return 0;
    }

    //--------------------
    // set/get properties
    //--------------------

    //-----------------------
    public setDiagram(diagram : amPlaylistItemLogic.am_coreservices.AE_PlaylistItem_Logic)
    {
      this._diagram = diagram;
    }

    //----------------
    public getDiagram() : amPlaylistItemLogic.am_coreservices.AE_PlaylistItem_Logic
    {
      return this._diagram;
    }

    //----------------
    public getContainerDiagram() : amPlaylistItemContainerLogic.am_coreservices.AE_PlaylistItem_ContainerLogic
    {
      if (this._diagram.getOwner().isContainer())
        return <amPlaylistItemContainerLogic.am_coreservices.AE_PlaylistItem_ContainerLogic>this._diagram;
      return null;
    }



    //---------------------
    public receiveEvent( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                         aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                         aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                         context: amGeneralContext.am_general.A_Context, callback): void
    {

    }

    //---------------------
    public passToMe( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                     aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                     aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                     context: amGeneralContext.am_general.A_Context, callback): void
    {

    }

    //---------------------
    public postEvent( eventId: number, receiver: any, targetAddress: [], iCrtTargetIdx : number,
                      eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                      context: amGeneralContext.am_general.A_Context, callback): void
    {  
      var aEvent = this._aSrvLocator._iEntityCreation.createDefaultEvent(error);
      aEvent.setReceiver(receiver);
      aEvent.setEventId(eventId);
      aEvent.setTargetAddress(targetAddress);
      aEvent.setCrtTargetIdx(iCrtTargetIdx);
      this.getDiagram().prepareEvent(aEvent, eventQueue, error, context, callback);
      eventQueue.push(aEvent);
    }

    //---------------------
    public createEvent( eventId: number, receiver: any, targetAddress: [], iCrtTargetIdx : number,
                        eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                        context: amGeneralContext.am_general.A_Context, callback): amGeneralEvent.am_general.AE_Event
    {  
      var aEvent = this._aSrvLocator._iEntityCreation.createDefaultEvent(error);
      aEvent.setReceiver(receiver);
      aEvent.setEventId(eventId);
      aEvent.setTargetAddress(targetAddress);
      aEvent.setCrtTargetIdx(iCrtTargetIdx);
      this.getDiagram().prepareEvent(aEvent, eventQueue, error, context, callback);
      //eventQueue.push(aEvent);
      return aEvent;
    }

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

    //----------------------------------
    public formatDate(date) 
    {
      var year = date.getFullYear(),
          month = date.getMonth() + 1, // months are zero indexed
          day = date.getDate(),
          hour = date.getHours(),
          minute = date.getMinutes(),
          second = date.getSeconds(),
          hourFormatted = hour % 12 || 12, // hour returned in 24 hour format
          minuteFormatted = minute < 10 ? "0" + minute : minute,
          secondsFormatted = second < 10 ? "0" + second : second,
          morning = hour < 12 ? "am" : "pm";
  
      return month + "/" + day + "/" + year + " " + hourFormatted + ":" +
              minuteFormatted + ":" + secondsFormatted + morning;
    }

    //------------------------------------------------------
    public rpad(inpString: string, padString : string, length: number) 
    {
      var res = inpString;
      while (res.length < length)
        res =  res + padString;
      return res;
    }

    //------------------------
    public traceString()
    {
       var rzParent = this.getDiagram().getFirstParentWithARenderingZone() ; 
       var str2 = null;
       if (rzParent != null)
       {
         str2 =           rzParent.getPlaylistItemTypeName()
                  + " " + rzParent.getLogic().getOwnerIdxAsChild() 
                  + " " + rzParent.getPlaylistItemId()
                  + " \"" + rzParent.getPlaylistItemName() +"\"";
       }
       var str1 =  this.formatDate(new Date()) + " -  " + this.getStatusName() 
              + " " + this.rpad(this.getDiagram().getOwner().getPlaylistItemTypeName()," ",20)  
              + " " + this.getDiagram().getOwner().getLogic().getOwnerIdxAsChild() 
              + " " + this.getDiagram().getOwner().getPlaylistItemId()
              + " " + this.rpad("\"" + this.getDiagram().getOwner().getPlaylistItemName() +"\""," ",32) ;
       if (str2 != null)
         return str1 + " -- in -- " + str2;
       return str1;
    }

    //------------------------
    public trace(traceId: number, selectId: string, prefixMessage: string, sufixMessage: string)
    {
      if (this._debug == true)
      {
        if (traceId == 1)
          return this.trace_01(traceId, selectId, prefixMessage, sufixMessage);
      }
    }

    public trace_01(traceId: number, selectId: string, prefixMessage: string, sufixMessage: string)
    {
      var str1 =  this.formatDate(new Date()) + " -  " + prefixMessage + " -  " //+ this.getStatusName() 
      + " " + this.rpad(this.getDiagram().getOwner().getPlaylistItemTypeName()," ",20)  
      + " " + this.getDiagram().getOwner().getLogic().getOwnerIdxAsChild() 
      + " " + this.getDiagram().getOwner().getPlaylistItemId()
      + " " + this.rpad("\"" + this.getDiagram().getOwner().getPlaylistItemName() +"\""," ",32) + " -  " + sufixMessage;
      console.log(str1);
      //var htm:HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById(selectId);
      //htm.innerHTML = str1 + "\r\n" + htm.innerHTML; 
    }

    //------------------------
    public traceAll(selectId: string)
    {
      this.traceInListBox(selectId);
    }

    //------------------------
    public traceInListBox(selectId: string)
    {
      if (this._debug == true)
      {
        console.log(this.traceString());
        //var htm:HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById(selectId);
        //htm.innerHTML = this.traceString() + "\r\n" + htm.innerHTML; 
      }
    }   
  }
} 
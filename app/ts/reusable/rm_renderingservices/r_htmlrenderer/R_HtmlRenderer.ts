import amRenderingServices   = require("../../../../../app/ts/abstract/am_renderingservices/a_htmlrenderer/A_HtmlRenderer");
import amIHtmlRenderer       = require("../../../../../app/ts/abstract/am_renderingservices/a_htmlrenderer/I_HtmlRenderer");
import amIHtmlRendererConfig = require("../../../../../app/ts/abstract/am_renderingservices/a_htmlrenderer/I_HtmlRenderer_Config");

import amGeneralError                           = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescription              = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer  = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService          = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
                                                     
import amPrepareParams = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Prepare");
import amRunParams     = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Run");

import rmRenderingServices     = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/R_RenderingService");
import rmIHtmlRenderer         = require("../../../../../app/ts/reusable/rm_renderingservices/r_htmlrenderer/IImpl_HtmlRenderer_R");
import rmIHtmlRendererConfig   = require("../../../../../app/ts/reusable/rm_renderingservices/r_htmlrenderer/IImpl_HtmlRenderer_Config");

import amTransversalServices4 = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

export module rm_renderingservices
{
  export class R_HtmlRenderer extends rmRenderingServices.rm_renderingservices.R_RenderingService 
                              implements amRenderingServices.am_renderingservices.A_HtmlRenderer
  {
    //---------- properties
    _htmlZoneDiv       : HTMLDivElement;
    _htmlIFrame        : HTMLIFrameElement;
    
    //---------- interfaces
    _iHtmlRenderer       : amIHtmlRenderer.am_renderingservices.I_HtmlRenderer ;
    _iHtmlRendererConfig : amIHtmlRendererConfig.am_renderingservices.I_HtmlRenderer_Config ;

    //----------- composants 
    _aLogService : amTransversalServices4.am_transversalservices.A_LogService; 

    _debug : boolean;
    
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iHtmlRenderer       = new rmIHtmlRenderer.rm_renderingservices.IImpl_HtmlRenderer_R(this) ;
      this._iHtmlRendererConfig = new rmIHtmlRendererConfig.rm_renderingservices.IImpl_HtmlRenderer_Config(this) ;

      this._aLogService = aLogService;

      this._htmlZoneDiv       = null;
      this._htmlIFrame        = null;

      this._debug = false;

    }

    //---------------------------
    public reset() : void 
    {
      this._htmlZoneDiv       = null;
      this._htmlIFrame        = null;
    }

    //---------------------------------
    public setHtmlZoneDiv(htmlZoneDiv : HTMLDivElement)
    {
      this._htmlZoneDiv = htmlZoneDiv;
    }

    //-------------------------------
    public getHtmlZoneDiv() : HTMLDivElement
    {
      return this._htmlZoneDiv ;
    }


    //-------------------------------
    public setHtmlIFrame(htmlIFrame : HTMLIFrameElement)
    {
      this._htmlIFrame = htmlIFrame;
    }

    //------------------------------
    public getHtmlIFrame() : HTMLIFrameElement
    {
      return this._htmlIFrame;
    }

    //-------------------------------------
    public canAccessWebPage(url: string, context, callback) 
    {
      var canAccessWebPage = false;
      var canDisplay = false;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() 
      {
        if( this.readyState == this.HEADERS_RECEIVED) {
          var xFrameOptions = xhttp.getResponseHeader("X-Frame-Options");
          if (xFrameOptions != null) 
          {
            if ((xFrameOptions.toLowerCase() != "deny") && (xFrameOptions.toLowerCase() != "sameorigin"))
              canDisplay = true;
          }else{
            canDisplay = true;
          }
          //xhttp.abort();
        }
        if (this.readyState == 4 && this.status == 200) 
        {
          //document.getElementById("demo").innerHTML = this.responseText;
          if (canDisplay)
            canAccessWebPage = true;
          if (callback != null)
          {
            context.setBoolResult(canAccessWebPage);
            callback(context);
            return;
          }     
        }else{
           if (this.readyState == 4 && this.status != 200) 
           {
             //document.getElementById("demo").innerHTML = "error loading page - status: " + this.status;
             canAccessWebPage = false;
             if (callback != null)
             {
               context.setBoolResult(canAccessWebPage);
               callback(context);
               return;
             }        
           }
        }
      };
      try
      {
        //var url = "https://www.drudgereport.com";
        xhttp.open("GET", url + ((/\?/).test(url) ? "&" : "?") + (new Date()).getTime());
        xhttp.open("GET", url, true);
        //'enabled': false,
        //'overwrite-origin': true,
        //'methods': ['GET', 'PUT', 'POST', 'DELETE', 'HEAD', 'OPTIONS', 'PATCH'],
        //'remove-x-frame': true,
        //'allow-credentials': true,
        //'allow-headers-value': '*',
        //'expose-headers-value': '*',
        //'allow-headers': true
        //xhttp.setRequestHeader("Access-Control-Allow-Origin","*");
        //xhttp.setRequestHeader("Access-Control-Allow-Methods","GET, PUT, POST, DELETE, HEAD, OPTIONS, PATCH");
        //xhttp.setRequestHeader("Access-Control-Allow-Methods","*");
        //xhttp.setRequestHeader("Access-Control-Allow-Credentials","true");
        //xhttp.setRequestHeader("Access-Control-Expose-Headers-Value","*");
        //xhttp.setRequestHeader("Access-Control-Allow-Headers-Value","*");
        //xhttp.setRequestHeader("Access-Control-Allow-Headers","true");
        //xhttp.setRequestHeader("Access-Control-Overwrite-Origin","true");
      
        xhttp.send(null);
    
        //xhttp.withCredentials = true;
      
      }catch(e){
        canAccessWebPage = false;
        if (callback != null)
        {
          context.setBoolResult(canAccessWebPage);
          callback(context);
          return;
        }   
  
        //document.getElementById("demo").innerHTML = "error invalid url";
    
      }
    }
    
    //----------------
    public canPlayNextMediaItem( prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                 error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      if (callback != null)
      {
        callback(context);
        return;
      }   
      return;
      var strHtmlUrl = prepareParams.getRenderParams().getParamFileInfo().getFullUrlName(); 
      var ctx = this._aServiceLocator._iEntityCreation.createDefaultContext();
      var err = this._aServiceLocator._iEntityCreation.createDefaultError();
      var evt = this._aServiceLocator._iEntityCreation.createDefaultEvent(err);
      var callbackCanAcccessWebPage = function canAccessWebPage()
      {
        var res = ctx.getBoolResult();
        if (res == true)
        {
          if (callback != null)
          {
            context.setObjectResult(null);
            return callback(context);
          }  
        }else{
          context.setObjectResult(evt);
          return callback(context);
        }  
      }
      this.canAccessWebPage(strHtmlUrl, ctx, callbackCanAcccessWebPage);
      return ;
    }

    //----------------
    public prepareNextMediaItem( prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                 error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      var strHtmlUrl = prepareParams.getRenderParams().getParamFileInfo().getFullUrlName(); //this._owner._aUtilsService._iUtilsFiles.getFileUrl(storageName, folderName, fileName, this._startFolder, this._startUrlFolder);
      var owner = this;
      /*
      this._htmlIFrame.onload = function ()
      {
         //alert("on load frame");
         //owner.setScrolls( prepareParams, error, context, callback) ;
         try{
         setTimeout(function(){ owner.setScrolls( prepareParams, error, context, callback) ; }, 5000);
         }catch(e){}
      }*/
      /*
      this._htmlIFrame.onload = function(evt){
        console.log("frameOnload");
        console.log("src = '" + evt.target + "'");
        setTimeout(function(){ owner.setScrolls( prepareParams, error, context, callback) ; }, 3000);
      };*/

      try{
        this.onChangeContainerSize( prepareParams, error, context, callback) ;
        //this.setScrolls( prepareParams, error, context, callback) ;
        if (this._htmlIFrame != null)
        {  
          this._htmlIFrame.src = strHtmlUrl;
        }
        
      }catch(e)
      {
        //if (this._debug == true)
         //alert("prepare html - set .src error " + JSON.stringify(e));
      }         

      if (callback != null)
      {
        callback(context);
        return;
      }   
      //this.onChangeContainerSize( prepareParams, error, context, callback) ;
    }

    //----------------
    public prepareNextMediaItem_prev( prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                 error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    { 
      var strHtmlUrl = prepareParams.getRenderParams().getParamFileInfo().getFullUrlName(); //this._owner._aUtilsService._iUtilsFiles.getFileUrl(storageName, folderName, fileName, this._startFolder, this._startUrlFolder);
      var owner = this;
      
      /*
      this._htmlIFrame.contentWindow.document.onload = function (evt)
      { 
        alert("ura");
      }*/

      /*
      this._htmlIFrame.onload = function (evt)
      { try{
        //var iframe = document.getElementById('frameID');
        //var iFrameDoc = owner._htmlIFrame.contentDocument || owner._htmlIFrame.contentWindow.document;
        //var innerHtml = iFrameDoc.body.innerHTML;
        //console.log(innerHtml);
        //if (innerHtml == ""){//iFrameDoc.readyState == "complete"){ //.documentURI == "about:blank"){
          //console.log("ERRORa: Cannot load the web page : " + strHtmlUrl);
        //}
        
        //$(iFrameDoc).ready(function (event) 
        //{
          //var iFrameDoc =owner._htmlIFrame.contentWindow.document;
          //var innerHtml = iFrameDoc.body.innerHTML;
          //console.log(innerHtml);
          //if (innerHtml == ""){//iFrameDoc.readyState == "complete"){ //.documentURI == "about:blank"){
            //console.log("ERRORa: Cannot load the web page : " + strHtmlUrl);
          //}
          ////alert('hello');
          ////console.log("READY" + strHtmlUrl);
          ////const iCon = $('#frameID')[0].contentWindow;
          ////if(owner._htmlIFrame.contentWindow.document.readyState === "complete") {
            ////console.log("NOT LOADED" + strHtmlUrl);
          ////}
        //// you can manipulate the iframe content further:
        ////$(iframeDoc).find('body').html('here is some <b>inserted</b> HTML...');
        //});
        
        // console.log(owner._htmlIFrame.contentDocument.body.innerHTML);
        }catch(err){
          //console.log("ERROR1: Cannot load the web page : " + strHtmlUrl);
        }
        
        //if (evt.timeStamp < 70000.0);
        //var that = $(this)[0];
        
        try{
         owner._htmlIFrame.contentDocument;
        }catch(err){
          console.log("ERROR1: Cannot load the web page : " + strHtmlUrl);
        }
        //console.log("Load the web page : " + strHtmlUrl);
        try{
          //if (owner._htmlIFrame.contentDocument.location.href)
            console.log(owner._htmlIFrame.isConnected);
        }catch(err){
           console.log("ERROR: Cannot load the web page : " + strHtmlUrl);
        }
      };*/
      /*
      this._htmlIFrame.onload = function(evt){
        console.log("frameOnload");
        console.log("src = '" + evt.target + "'");
        setTimeout(function(){ owner.setScrolls( prepareParams, error, context, callback) ; }, 3000);
      };*/
      /*
      this._htmlIFrame.onerror = function() {
        console.log("ERROR2: Cannot load the web page : " + strHtmlUrl);
      };
      */
      try{
        this.onChangeContainerSize( prepareParams, error, context, callback) ;
        //this.setScrolls( prepareParams, error, context, callback) ;
        if (this._htmlIFrame != null)
        {  
          this._htmlIFrame.src = strHtmlUrl;
        }
        
      }catch(e)
      {
        //if (this._debug == true)
         //alert("prepare html - set .src error " + JSON.stringify(e));
      }         
      
      //this.onChangeContainerSize( prepareParams, error, context, callback) ;
      if (callback != null)
      {
        callback(context);
        return;
      }   
  }

    //-------------------
    public playNextMediaItem( runParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                              error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      var self = this;
      //setTimeout( function() 
      { 
        try{
          if (self._htmlIFrame != null)
          {  
            self._htmlIFrame.style.display      = "block";
            //this._htmlIFrame.style.visibility   = "visible";
          }
        }catch(e)
        {
          //if (this._debug == true)
            //alert("play html - error set visible " + JSON.stringify(e));

        }         
        if (callback != null)
        {
          callback(context);
          return;
        }   
      }
      //, 
      //1000)
      //;

    }

    //-------------------------------------------
    public setScrolls( prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                      error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : number 
    {
      if (this._htmlIFrame.src == "")
        return 1;

      if (prepareParams ==  null)
        return 1;
      if (this._htmlIFrame == null)
        return 1;
      if (this._htmlZoneDiv == null)
        return 1;

      var scrollLeft:number = prepareParams.getRenderParams().getParamWebPage().getScrollLeft();
      if (scrollLeft == null)
        scrollLeft = 0;
      if (typeof(scrollLeft) == "undefined")
        scrollLeft = 0;
      if (scrollLeft < 0)
        scrollLeft = 0;

      var scrollTop:number  = prepareParams.getRenderParams().getParamWebPage().getScrollTop();
      if (scrollTop == null)
        scrollTop = 0;
      if (typeof(scrollTop) == "undefined")
        scrollTop = 0;
      if (scrollTop < 0)
        scrollTop = 0;
      this._htmlIFrame.scrollLeft =  scrollLeft;
      this._htmlIFrame.scrollTop  =  scrollTop;      
      //this._htmlIFrame.scrollTo(scrollLeft, scrollTop);
    }

    //-------------------------------------------
    public onChangeContainerSize( prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
              error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : number 
    {
      if (prepareParams ==  null)
        return 1;
      if (this._htmlIFrame == null)
        return 1;
      if (this._htmlZoneDiv == null)
        return 1;

      var containerLeft   : number = prepareParams.getRenderParams().getParamContainerPosSize().getContainerLeft();
      var containerTop    : number = prepareParams.getRenderParams().getParamContainerPosSize().getContainerTop();
      var containerWidth  : number = prepareParams.getRenderParams().getParamContainerPosSize().getContainerWidth();
      var containerHeight : number = prepareParams.getRenderParams().getParamContainerPosSize().getContainerHeight();
      var containerZOrder : number = prepareParams.getRenderParams().getParamContainerPosSize().getContainerZOrder();
      if (containerWidth == 0)
        return 1;
      if (containerHeight == 0)
        return 1;
      this._htmlZoneDiv.style.top    = "" + containerTop;
      this._htmlZoneDiv.style.left   = "" + containerLeft;  
      this._htmlZoneDiv.style.width  = "" + containerWidth;
      this._htmlZoneDiv.style.height = "" + containerHeight;
      this._htmlZoneDiv.style.zIndex = "" + containerZOrder;
      //this._htmlIFrame.style.zIndex  = "" + containerZOrder;
      return this.onChangeMediaSizeOrDisplayType(prepareParams, error, context, callback);
    }


    //-----------------------------------
    public onChangeMediaSizeOrDisplayType( prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                          error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : number 
    {
      if (prepareParams ==  null)
        return 1;
      if (this._htmlIFrame == null)
        return 1;
      if (this._htmlZoneDiv == null)
        return 1;

      this._htmlIFrame.style.top    = "0px";//this._htmlZoneDiv.style.top;
      this._htmlIFrame.style.left   = "0px";//this._htmlZoneDiv.style.left;  
      this._htmlIFrame.style.width  = this._htmlZoneDiv.style.width;
      this._htmlIFrame.style.height = this._htmlZoneDiv.style.height;
    }

    //---------------------
    public stopCrtMediaItem( stopParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                              error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      if (this._htmlIFrame != null)
      {
        try{
          //this._htmlIFrame.style.visibility   = "hidden";
          //this._htmlIFrame.style.display      = "none";
        }catch(e)
        {
          //if (this._debug == true)
            //alert("stop html - visible false " + JSON.stringify(e));
        }         
      }
      if (callback != null)
      {
        callback(context);
      } 
      return ;
     }

     //---------------------
     public destroyCrtMediaItem( stopParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
     {
       //this._htmlIFrame.onload = function (){}       
       //this._htmlIFrame.contentWindow.document.body.innerHTML = '';
       //this._htmlIFrame..clear();
       if (this._htmlIFrame != null)
       { 
        try{
          if (this._htmlIFrame != null)
          {
            //this._htmlIFrame.style.visibility   = "hidden";
            this._htmlIFrame.style.display      = "none";  
            //this._htmlIFrame.src = "about:blank";
            this._htmlIFrame.src = "";
            this._htmlIFrame.removeAttribute('src');
          }
          //this._htmlIFrame.removeAttribute('src'); 
          //this._htmlIFrame.src = "about:blank";
        }catch(e)
        {
          //if (this._debug == true)
            //alert("destroy html - .src = null " + JSON.stringify(e));

        }
       }

       if (callback != null)
       {
         callback(context);
       } 
       return ;
     }

  }
} 



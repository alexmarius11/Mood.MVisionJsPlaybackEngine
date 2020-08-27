import amGeneral     = require("../../../../../app/ts/abstract/am_renderingservices/ae_htmlzone/AE_HtmlZone");

import amGeneralError  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amServiceContainer  = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amServiceLog        = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_renderingservices
{
  export class RE_HtmlZone extends rmGeneralEntity.rm_general.R_Entity
                           implements amGeneral.am_renderingservices.AE_HtmlZone
  {

    _isFree : boolean;

    _htmlZoneDiv       : HTMLDivElement;
    _htmlVideos        : Array<HTMLVideoElement>;
    _htmlVideoStreams  : Array<HTMLVideoElement>;
    _htmlPages         : Array<HTMLIFrameElement>;
    _htmlImages        : Array<HTMLImageElement>;
    _htmlRects         : Array<HTMLDivElement>;

    _iCrtIndex : number;

    //-----------
    constructor()
    {
      super();

      this._iCrtIndex    = 0  ;

      this._isFree = true;

      this._htmlZoneDiv   = null;

      this._htmlVideos = new Array<HTMLVideoElement>(2);
      this._htmlVideos[0] = null;
      this._htmlVideos[1] = null;

      this._htmlVideoStreams    = new Array<HTMLVideoElement>(2);
      this._htmlVideoStreams[0] = null;
      this._htmlVideoStreams[1] = null;

      this._htmlImages    = new Array<HTMLImageElement>(2);
      this._htmlImages[0] = null;
      this._htmlImages[1] = null;

      this._htmlPages    = new Array<HTMLIFrameElement>(2);
      this._htmlPages[0] = null;
      this._htmlPages[1] = null;
      
      this._htmlRects    = new Array<HTMLDivElement>(2);
      this._htmlRects[0] = null;
      this._htmlRects[1] = null;

    }

    //-----------------------
    public reset() : void 
    {
      this._iCrtIndex    = 0;
      
      this._isFree = true;

      /*
      this._htmlZoneDiv  = null;

      this._htmlVideos[0] = null;
      this._htmlVideos[1] = null;

      this._htmlVideoStreams[0] = null;
      this._htmlVideoStreams[1] = null;

      this._htmlImages[0] = null;
      this._htmlImages[1] = null;

      this._htmlPages[0] = null;
      this._htmlPages[1] = null;
      
      this._htmlRects[0] = null;
      this._htmlRects[1] = null;
      */
    }

    //-----------------
    public isFree() : boolean 
    {
      return this._isFree;
    }

    //-----------------------
    public setIsFree(isFree: boolean)  : void 
    {
      this._isFree = isFree;
    }


    //------------------------------
    public injectDependencies( aSrvContainer: amServiceContainer.am_configurationservices.A_ServiceContainer, 
                               aSrvLocator:   amServiceLocator.am_configurationservices.A_ServiceLocator, 
                               aSrvLog:       amServiceLog.am_transversalservices.A_LogService, 
                                  error: amGeneralError.am_general.A_Error) : number
    {
      super.injectDependencies(aSrvContainer, aSrvLocator, aSrvLog, error);

      //this._renderParams = this._aSrvLocator._iEntityCreation.createDefaultRenderParamsAllParameters(error);
      if ((error != null ) && (error.isError()))
      {
        return 1;
      }
      //this._renderParams.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
      return 0;
    }

    //-----------------------------------------------
    public initHtml(divId : string, error: amGeneralError.am_general.A_Error)
    {
      this._htmlZoneDiv      = <HTMLDivElement>document.getElementById(divId);

      this._htmlVideos[0]    = <HTMLVideoElement>document.getElementById(divId + "video01");
      this._htmlVideos[1]    = <HTMLVideoElement>document.getElementById(divId + "video02");

      this._htmlVideoStreams[0]  = <HTMLVideoElement>document.getElementById(divId + "stream01");
      this._htmlVideoStreams[1]  = <HTMLVideoElement>document.getElementById(divId + "stream02");

      this._htmlImages[0]    = <HTMLImageElement>document.getElementById(divId + "img01");
      this._htmlImages[1]    = <HTMLImageElement>document.getElementById(divId + "img02");

      this._htmlPages[0] = <HTMLIFrameElement>document.getElementById(divId + "html01");
      this._htmlPages[1] = <HTMLIFrameElement>document.getElementById(divId + "html02");
      
      this._htmlRects[0]     = <HTMLDivElement>document.getElementById(divId + "rect01");
      this._htmlRects[1]     = <HTMLDivElement>document.getElementById(divId + "rect02");;

      //var video:HTMLVideoElement = <HTMLVideoElement>document.getElementById("sdk.filesystem-renderer.video2");
          
      // //video.setAttribute("width", "960");
      // //video.setAttribute("height", "540");
      // //video.setAttribute("controls","controls");  
      // //video.style.position = 'relative';
      // video.style.display = 'block';
      // video.src = strVideoUrl ; 
      // //video.style.visibility = 'visible';
      // video.style.objectFit = 'fill';
      // //var scriptNode = document.createElement("script");
      // //scriptNode.innerHTML = "var player = videojs('sdk.filesystem-renderer.video');"+ 
      // //                       " player.src({src: '" + streamUrl + "',"+
      // //                       " type: 'application/x-mpegURL'}); player.play(); "
      // //video.appendChild(scriptNode);
      // video.play();
    }


    //---------------------------------
    public setHtmlZoneDiv(htmlZoneDiv : HTMLDivElement)
    {
      this._htmlZoneDiv = htmlZoneDiv;
    }

    //---------------------------------
    public getHtmlZoneDiv() : HTMLDivElement
    {
      return this._htmlZoneDiv;
    }


    //---------------------------------
    public setHtmlImage(idx: number, htmlImage : HTMLImageElement)
    {
      this._htmlImages[idx] = htmlImage;
    }

    //---------------------------------
    public getHtmlImage(idx: number) : HTMLImageElement
    {
      return this._htmlImages[idx];
    }


    //---------------------------------
    public setHtmlVideo(idx: number, htmlImage : HTMLVideoElement)
    {
      this._htmlVideos[idx] = htmlImage;
    }

    //---------------------------------
    public getHtmlVideo(idx: number) : HTMLVideoElement
    {
      return this._htmlVideos[idx];
    }


    //---------------------------------
    public setHtmlVideoStream(idx: number, htmlVideoStream : HTMLVideoElement)
    {
      this._htmlVideoStreams[idx] = htmlVideoStream;
    }

    //---------------------------------
    public getHtmlVideoStream(idx: number) : HTMLVideoElement
    {
      return this._htmlVideoStreams[idx];
    }


    //---------------------------------
    public setHtmlRect(idx: number, htmlRect : HTMLDivElement)
    {
      this._htmlRects[idx] = htmlRect;
    }

    //---------------------------------
    public getHtmlRect(idx: number) : HTMLDivElement
    {
      return this._htmlRects[idx];
    }

    //---------------------------------
    public setHtmlPage(idx: number, htmlPage : HTMLIFrameElement)
    {
      this._htmlPages[idx] = htmlPage;
    }

    //---------------------------------
    public getHtmlPage(idx: number) : HTMLIFrameElement
    {
      return this._htmlPages[idx];
    }

  }
} 
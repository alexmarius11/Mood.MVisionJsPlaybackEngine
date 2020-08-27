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
define(["require", "exports", "../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/R_RenderingService", "../../../../../app/ts/reusable/rm_renderingservices/r_htmlrenderer/IImpl_HtmlRenderer_R", "../../../../../app/ts/reusable/rm_renderingservices/r_htmlrenderer/IImpl_HtmlRenderer_Config"], function (require, exports, rmRenderingServices, rmIHtmlRenderer, rmIHtmlRendererConfig) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_renderingservices;
    (function (rm_renderingservices) {
        var R_HtmlRenderer = /** @class */ (function (_super) {
            __extends(R_HtmlRenderer, _super);
            function R_HtmlRenderer(aFactoryDescription, aServiceContainer, aLogService, error) {
                var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
                _this._iHtmlRenderer = new rmIHtmlRenderer.rm_renderingservices.IImpl_HtmlRenderer_R(_this);
                _this._iHtmlRendererConfig = new rmIHtmlRendererConfig.rm_renderingservices.IImpl_HtmlRenderer_Config(_this);
                _this._aLogService = aLogService;
                _this._htmlZoneDiv = null;
                _this._htmlIFrame = null;
                _this._debug = false;
                return _this;
            }
            //---------------------------
            R_HtmlRenderer.prototype.reset = function () {
                this._htmlZoneDiv = null;
                this._htmlIFrame = null;
            };
            //---------------------------------
            R_HtmlRenderer.prototype.setHtmlZoneDiv = function (htmlZoneDiv) {
                this._htmlZoneDiv = htmlZoneDiv;
            };
            //-------------------------------
            R_HtmlRenderer.prototype.getHtmlZoneDiv = function () {
                return this._htmlZoneDiv;
            };
            //-------------------------------
            R_HtmlRenderer.prototype.setHtmlIFrame = function (htmlIFrame) {
                this._htmlIFrame = htmlIFrame;
            };
            //------------------------------
            R_HtmlRenderer.prototype.getHtmlIFrame = function () {
                return this._htmlIFrame;
            };
            //-------------------------------------
            R_HtmlRenderer.prototype.canAccessWebPage = function (url, context, callback) {
                var canAccessWebPage = false;
                var canDisplay = false;
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == this.HEADERS_RECEIVED) {
                        var xFrameOptions = xhttp.getResponseHeader("X-Frame-Options");
                        if (xFrameOptions != null) {
                            if ((xFrameOptions.toLowerCase() != "deny") && (xFrameOptions.toLowerCase() != "sameorigin"))
                                canDisplay = true;
                        }
                        else {
                            canDisplay = true;
                        }
                        //xhttp.abort();
                    }
                    if (this.readyState == 4 && this.status == 200) {
                        //document.getElementById("demo").innerHTML = this.responseText;
                        if (canDisplay)
                            canAccessWebPage = true;
                        if (callback != null) {
                            context.setBoolResult(canAccessWebPage);
                            callback(context);
                            return;
                        }
                    }
                    else {
                        if (this.readyState == 4 && this.status != 200) {
                            //document.getElementById("demo").innerHTML = "error loading page - status: " + this.status;
                            canAccessWebPage = false;
                            if (callback != null) {
                                context.setBoolResult(canAccessWebPage);
                                callback(context);
                                return;
                            }
                        }
                    }
                };
                try {
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
                }
                catch (e) {
                    canAccessWebPage = false;
                    if (callback != null) {
                        context.setBoolResult(canAccessWebPage);
                        callback(context);
                        return;
                    }
                    //document.getElementById("demo").innerHTML = "error invalid url";
                }
            };
            //----------------
            R_HtmlRenderer.prototype.canPlayNextMediaItem = function (prepareParams, error, context, callback) {
                if (callback != null) {
                    callback(context);
                    return;
                }
                return;
                var strHtmlUrl = prepareParams.getRenderParams().getParamFileInfo().getFullUrlName();
                var ctx = this._aServiceLocator._iEntityCreation.createDefaultContext();
                var err = this._aServiceLocator._iEntityCreation.createDefaultError();
                var evt = this._aServiceLocator._iEntityCreation.createDefaultEvent(err);
                var callbackCanAcccessWebPage = function canAccessWebPage() {
                    var res = ctx.getBoolResult();
                    if (res == true) {
                        if (callback != null) {
                            context.setObjectResult(null);
                            return callback(context);
                        }
                    }
                    else {
                        context.setObjectResult(evt);
                        return callback(context);
                    }
                };
                this.canAccessWebPage(strHtmlUrl, ctx, callbackCanAcccessWebPage);
                return;
            };
            //----------------
            R_HtmlRenderer.prototype.prepareNextMediaItem = function (prepareParams, error, context, callback) {
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
                try {
                    this.onChangeContainerSize(prepareParams, error, context, callback);
                    //this.setScrolls( prepareParams, error, context, callback) ;
                    if (this._htmlIFrame != null) {
                        this._htmlIFrame.src = strHtmlUrl;
                    }
                }
                catch (e) {
                    //if (this._debug == true)
                    //alert("prepare html - set .src error " + JSON.stringify(e));
                }
                if (callback != null) {
                    callback(context);
                    return;
                }
                //this.onChangeContainerSize( prepareParams, error, context, callback) ;
            };
            //----------------
            R_HtmlRenderer.prototype.prepareNextMediaItem_prev = function (prepareParams, error, context, callback) {
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
                try {
                    this.onChangeContainerSize(prepareParams, error, context, callback);
                    //this.setScrolls( prepareParams, error, context, callback) ;
                    if (this._htmlIFrame != null) {
                        this._htmlIFrame.src = strHtmlUrl;
                    }
                }
                catch (e) {
                    //if (this._debug == true)
                    //alert("prepare html - set .src error " + JSON.stringify(e));
                }
                //this.onChangeContainerSize( prepareParams, error, context, callback) ;
                if (callback != null) {
                    callback(context);
                    return;
                }
            };
            //-------------------
            R_HtmlRenderer.prototype.playNextMediaItem = function (runParams, error, context, callback) {
                var self = this;
                //setTimeout( function() 
                {
                    try {
                        if (self._htmlIFrame != null) {
                            self._htmlIFrame.style.display = "block";
                            //this._htmlIFrame.style.visibility   = "visible";
                        }
                    }
                    catch (e) {
                        //if (this._debug == true)
                        //alert("play html - error set visible " + JSON.stringify(e));
                    }
                    if (callback != null) {
                        callback(context);
                        return;
                    }
                }
                //, 
                //1000)
                //;
            };
            //-------------------------------------------
            R_HtmlRenderer.prototype.setScrolls = function (prepareParams, error, context, callback) {
                if (this._htmlIFrame.src == "")
                    return 1;
                if (prepareParams == null)
                    return 1;
                if (this._htmlIFrame == null)
                    return 1;
                if (this._htmlZoneDiv == null)
                    return 1;
                var scrollLeft = prepareParams.getRenderParams().getParamWebPage().getScrollLeft();
                if (scrollLeft == null)
                    scrollLeft = 0;
                if (typeof (scrollLeft) == "undefined")
                    scrollLeft = 0;
                if (scrollLeft < 0)
                    scrollLeft = 0;
                var scrollTop = prepareParams.getRenderParams().getParamWebPage().getScrollTop();
                if (scrollTop == null)
                    scrollTop = 0;
                if (typeof (scrollTop) == "undefined")
                    scrollTop = 0;
                if (scrollTop < 0)
                    scrollTop = 0;
                this._htmlIFrame.scrollLeft = scrollLeft;
                this._htmlIFrame.scrollTop = scrollTop;
                //this._htmlIFrame.scrollTo(scrollLeft, scrollTop);
            };
            //-------------------------------------------
            R_HtmlRenderer.prototype.onChangeContainerSize = function (prepareParams, error, context, callback) {
                if (prepareParams == null)
                    return 1;
                if (this._htmlIFrame == null)
                    return 1;
                if (this._htmlZoneDiv == null)
                    return 1;
                var containerLeft = prepareParams.getRenderParams().getParamContainerPosSize().getContainerLeft();
                var containerTop = prepareParams.getRenderParams().getParamContainerPosSize().getContainerTop();
                var containerWidth = prepareParams.getRenderParams().getParamContainerPosSize().getContainerWidth();
                var containerHeight = prepareParams.getRenderParams().getParamContainerPosSize().getContainerHeight();
                var containerZOrder = prepareParams.getRenderParams().getParamContainerPosSize().getContainerZOrder();
                if (containerWidth == 0)
                    return 1;
                if (containerHeight == 0)
                    return 1;
                this._htmlZoneDiv.style.top = "" + containerTop;
                this._htmlZoneDiv.style.left = "" + containerLeft;
                this._htmlZoneDiv.style.width = "" + containerWidth;
                this._htmlZoneDiv.style.height = "" + containerHeight;
                this._htmlZoneDiv.style.zIndex = "" + containerZOrder;
                //this._htmlIFrame.style.zIndex  = "" + containerZOrder;
                return this.onChangeMediaSizeOrDisplayType(prepareParams, error, context, callback);
            };
            //-----------------------------------
            R_HtmlRenderer.prototype.onChangeMediaSizeOrDisplayType = function (prepareParams, error, context, callback) {
                if (prepareParams == null)
                    return 1;
                if (this._htmlIFrame == null)
                    return 1;
                if (this._htmlZoneDiv == null)
                    return 1;
                this._htmlIFrame.style.top = "0px"; //this._htmlZoneDiv.style.top;
                this._htmlIFrame.style.left = "0px"; //this._htmlZoneDiv.style.left;  
                this._htmlIFrame.style.width = this._htmlZoneDiv.style.width;
                this._htmlIFrame.style.height = this._htmlZoneDiv.style.height;
            };
            //---------------------
            R_HtmlRenderer.prototype.stopCrtMediaItem = function (stopParams, error, context, callback) {
                if (this._htmlIFrame != null) {
                    try {
                        //this._htmlIFrame.style.visibility   = "hidden";
                        //this._htmlIFrame.style.display      = "none";
                    }
                    catch (e) {
                        //if (this._debug == true)
                        //alert("stop html - visible false " + JSON.stringify(e));
                    }
                }
                if (callback != null) {
                    callback(context);
                }
                return;
            };
            //---------------------
            R_HtmlRenderer.prototype.destroyCrtMediaItem = function (stopParams, error, context, callback) {
                //this._htmlIFrame.onload = function (){}       
                //this._htmlIFrame.contentWindow.document.body.innerHTML = '';
                //this._htmlIFrame..clear();
                if (this._htmlIFrame != null) {
                    try {
                        if (this._htmlIFrame != null) {
                            //this._htmlIFrame.style.visibility   = "hidden";
                            this._htmlIFrame.style.display = "none";
                            //this._htmlIFrame.src = "about:blank";
                            this._htmlIFrame.src = "";
                            this._htmlIFrame.removeAttribute('src');
                        }
                        //this._htmlIFrame.removeAttribute('src'); 
                        //this._htmlIFrame.src = "about:blank";
                    }
                    catch (e) {
                        //if (this._debug == true)
                        //alert("destroy html - .src = null " + JSON.stringify(e));
                    }
                }
                if (callback != null) {
                    callback(context);
                }
                return;
            };
            return R_HtmlRenderer;
        }(rmRenderingServices.rm_renderingservices.R_RenderingService));
        rm_renderingservices.R_HtmlRenderer = R_HtmlRenderer;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=R_HtmlRenderer.js.map
import amConfigurationServicesServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");

import amGeneralError  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amRenderParametersAllParameters     = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_AllParameters");
import amRenderParametersIdentification = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_Identification");
import amRenderParametersItemPosAndSize = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_ItemPosAndSize");
import amRenderParametersContainerPosAndSize = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_ContainerPosAndSize");
import amRenderParametersDuration = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_Duration");
import amRenderParametersBackground = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_Background");
import amRenderParametersImage = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_Image");
import amRenderParametersWebImage = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_WebImage");
import amRenderParametersVideo    = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_Video");
import amRenderParametersVideoStream = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_VideoStream");
import amRenderParametersAudio    = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_Audio");
import amRenderParametersWebPage  = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_WebPage");
import amRenderParametersHtmlTemplate = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_HtmlTemplate");
import amRenderParametersFillRect = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_FillRect");

import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

import amServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amServiceContainer  = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amServiceLog        = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_renderingservices
{
  export class RE_RenderParams_AllParameters extends rmGeneralEntity.rm_general.R_Entity
                                             implements amRenderParametersAllParameters.am_renderingservices.AE_RenderParams_AllParameters
                                            
  {
    //-----------------
    _paramIdentification   : amRenderParametersIdentification.am_renderingservices.AE_RenderParams_Identification; 
    _paramItemPosAndSize   : amRenderParametersItemPosAndSize.am_renderingservices.AE_RenderParams_ItemPosAndSize;
	_paramContainerPosSize : amRenderParametersContainerPosAndSize.am_renderingservices.AE_RenderParams_ContainerPosAndSize;
	_paramContainerAdjustedPosSize : amRenderParametersContainerPosAndSize.am_renderingservices.AE_RenderParams_ContainerPosAndSize;
    _paramDuration         : amRenderParametersDuration.am_renderingservices.AE_RenderParams_Duration;
    _paramBackground       : amRenderParametersBackground.am_renderingservices.AE_RenderParams_Background;
    _paramImage            : amRenderParametersImage.am_renderingservices.AE_RenderParams_Image;
    _paramWebImage         : amRenderParametersWebImage.am_renderingservices.AE_RenderParams_WebImage;
    _paramVideo            : amRenderParametersVideo.am_renderingservices.AE_RenderParams_Video;
    _paramVideoStream      : amRenderParametersVideoStream.am_renderingservices.AE_RenderParams_VideoStream;
    _paramAudio            : amRenderParametersAudio.am_renderingservices.AE_RenderParams_Audio;
    _paramWebPage          : amRenderParametersWebPage.am_renderingservices.AE_RenderParams_WebPage;  
	_paramHtmlTemplate     : amRenderParametersHtmlTemplate.am_renderingservices.AE_RenderParams_HtmlTemplate;  
	_paramFillRect         : amRenderParametersFillRect.am_renderingservices.AE_RenderParams_FillRect;  
	_paramFileInfo         : amGeneralFileInfo.am_general.A_FileInfo;
	
	 _isFree : boolean;

	 _isVisible : boolean;

     //----------------
     constructor()
     {
	   super();
	   this._isVisible = true;
     }

    //------------------------------
    public injectDependencies( aSrvContainer: amServiceContainer.am_configurationservices.A_ServiceContainer, 
                               aSrvLocator:   amServiceLocator.am_configurationservices.A_ServiceLocator, 
                               aSrvLog:       amServiceLog.am_transversalservices.A_LogService, 
                              error: amGeneralError.am_general.A_Error) : number
    {
		super.injectDependencies(aSrvContainer, aSrvLocator, aSrvLog, error);

		//---
		this._paramFileInfo  = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
		if ((error != null ) && (error.isError()))
			return 1;
		this._paramFileInfo.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
		
		//---
		this._paramIdentification = this._aSrvLocator._iEntityCreation.createDefaultRenderParamsIdentification(error); 
		if ((error != null ) && (error.isError()))
			return 1;
	    this._paramIdentification.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error); 

		//---
		this._paramItemPosAndSize = this._aSrvLocator._iEntityCreation.createDefaultRenderParamsItemPosAndSize(error);
		if ((error != null ) && (error.isError()))
		  return 1;
		this._paramItemPosAndSize.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);   

		//---
		this._paramContainerPosSize = this._aSrvLocator._iEntityCreation.createDefaultRenderParamsContainerPosAndSize(error);
		if ((error != null ) && (error.isError()))
		  return 1;
        this._paramContainerPosSize.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);   

		//---
		this._paramContainerAdjustedPosSize = this._aSrvLocator._iEntityCreation.createDefaultRenderParamsContainerPosAndSize(error);
		if ((error != null ) && (error.isError()))
		  return 1;
        this._paramContainerAdjustedPosSize.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);   

		//---
		this._paramDuration = this._aSrvLocator._iEntityCreation.createDefaultRenderParamsDuration(error);
		if ((error != null ) && (error.isError()))
		  return 1;
		this._paramDuration.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);   

		//---
		this._paramBackground = this._aSrvLocator._iEntityCreation.createDefaultRenderParamsBackground(error);
		if ((error != null ) && (error.isError()))
		  return 1;
		this._paramBackground.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);   

		//---
		this._paramImage = this._aSrvLocator._iEntityCreation.createDefaultRenderParamsImage(error);
		if ((error != null ) && (error.isError()))
		  return 1;
	    this._paramImage.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);   

		//---
		this._paramWebImage = this._aSrvLocator._iEntityCreation.createDefaultRenderParamsWebImage(error);
		if ((error != null ) && (error.isError()))
		  return 1;
        this._paramWebImage.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);   

		//---
		this._paramVideo  = this._aSrvLocator._iEntityCreation.createDefaultRenderParamsVideo(error);
		if ((error != null ) && (error.isError()))
		  return 1;
		this._paramVideo.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);   

		//---
		this._paramVideoStream = this._aSrvLocator._iEntityCreation.createDefaultRenderParamsVideoStream(error);
		if ((error != null ) && (error.isError()))
		  return 1;
		this._paramVideoStream.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);   

	    //---
		this._paramAudio   = this._aSrvLocator._iEntityCreation.createDefaultRenderParamsAudio(error);
		if ((error != null ) && (error.isError()))
		  return 1;
		this._paramAudio.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);   		  

		//---
		this._paramWebPage = this._aSrvLocator._iEntityCreation.createDefaultRenderParamsWebPage(error);
		if ((error != null ) && (error.isError()))
		  return 1;
        this._paramWebPage.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);   		  

		//---
		this._paramHtmlTemplate  = this._aSrvLocator._iEntityCreation.createDefaultRenderParamsHtmlTemplate(error);
		if ((error != null ) && (error.isError()))
		  return 1;
		this._paramHtmlTemplate.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
	    //---
		this._paramFillRect  = this._aSrvLocator._iEntityCreation.createDefaultRenderParamsFillRect(error);
		if ((error != null ) && (error.isError()))
		  return 1;
		this._paramFillRect.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
   	    //---
        return 0;
    }

    //-----------------
    public isFree() : boolean 
    {
      return this._isFree;
    }

    //-----------------------
    public setIsFree(isFree: boolean)  : boolean
    {
	  this._isFree = isFree;
	  return true;
    }

    //-----------------
    public isVisible() : boolean 
    {
      return this._isVisible;
    }

    //-----------------------
    public setIsVisible(isVisible: boolean)  : void
    {
	  this._isVisible = isVisible;
    }

	//--------------------------
	public getParamFileInfo() : amGeneralFileInfo.am_general.A_FileInfo	
	{
	  return this._paramFileInfo;
	}

	//--------------------------
	public getParamAudio() : amRenderParametersAudio.am_renderingservices.AE_RenderParams_Audio
	{
	  return this._paramAudio;
	}
	//--------------------------
	public getParamBackground() : amRenderParametersBackground.am_renderingservices.AE_RenderParams_Background
	{
	  return this._paramBackground;
	}
	//--------------------------
	public getParamContainerPosSize() : amRenderParametersContainerPosAndSize.am_renderingservices.AE_RenderParams_ContainerPosAndSize
	{
	  return this._paramContainerPosSize;
	}

	//-----------------------------
	public getParamContainerAdjustedPosSize() : amRenderParametersContainerPosAndSize.am_renderingservices.AE_RenderParams_ContainerPosAndSize
	{
	  return this._paramContainerAdjustedPosSize;
	}
  
	//--------------------------
	public getParamDuration() : amRenderParametersDuration.am_renderingservices.AE_RenderParams_Duration
	{
	  return this._paramDuration;
	}
	//--------------------------
	public getParamHtmlTemplate() : amRenderParametersHtmlTemplate.am_renderingservices.AE_RenderParams_HtmlTemplate
	{
	  return this._paramHtmlTemplate;
	}
	//--------------------------
	public getParamIdentification() : amRenderParametersIdentification.am_renderingservices.AE_RenderParams_Identification
	{
	  return this._paramIdentification;
	}
	//--------------------------
	public getParamImage() : amRenderParametersImage.am_renderingservices.AE_RenderParams_Image
	{
	  return this._paramImage;
	}
	//--------------------------
	public getParamItemPosAndSize() : amRenderParametersItemPosAndSize.am_renderingservices.AE_RenderParams_ItemPosAndSize
	{
	  return this._paramItemPosAndSize;
	}
	//--------------------------
	public getParamVideo() : amRenderParametersVideo.am_renderingservices.AE_RenderParams_Video
	{
	  return this._paramVideo;
	}
	//--------------------------
	public getParamVideoStream() : amRenderParametersVideoStream.am_renderingservices.AE_RenderParams_VideoStream
	{
	  return this._paramVideoStream;
	}
	//--------------------------
	public getParamWebImage() : amRenderParametersWebImage.am_renderingservices.AE_RenderParams_WebImage
	{
	  return this._paramWebImage;
	}
	//--------------------------
	public getParamWebPage() : amRenderParametersWebPage.am_renderingservices.AE_RenderParams_WebPage
	{
	  return this._paramWebPage;
	}
	//--------------------------
	public getParamFillRect() : amRenderParametersFillRect.am_renderingservices.AE_RenderParams_FillRect
	{
	  return this._paramFillRect;
	}

	    
    //--------------------------
    public reset() : void
    {
	  this._paramAudio.reset();
	  this._paramBackground.reset();
	  this._paramContainerPosSize.reset();
	  this._paramDuration.reset();
	  this._paramHtmlTemplate.reset();  
	  this._paramIdentification.reset();
	  this._paramImage.reset(); 
	  this._paramItemPosAndSize.reset();
	  this._paramVideo.reset();
	  this._paramVideoStream.reset(); 
	  this._paramWebImage.reset();
	  this._paramWebPage.reset();    
	  this._paramFileInfo.reset();    
	  this._paramFillRect.reset();    
    }    


    //------------
    public copy(src : amRenderParametersAllParameters.am_renderingservices.AE_RenderParams_AllParameters) : number
    {
		if (src == null)
			return 1;
		this._paramAudio.copy(src.getParamAudio());
		this._paramBackground.copy(src.getParamBackground());
		this._paramContainerPosSize.copy(src.getParamContainerPosSize());
		this._paramDuration.copy(src.getParamDuration());
		this._paramHtmlTemplate.copy(src.getParamHtmlTemplate());
		this._paramIdentification.copy(src.getParamIdentification());
		this._paramImage.copy(src.getParamImage()); 
		this._paramItemPosAndSize.copy(src.getParamItemPosAndSize());
		this._paramVideo.copy(src.getParamVideo());
		this._paramVideoStream.copy(src.getParamVideoStream());
		this._paramWebImage.copy(src.getParamWebImage());
		this._paramWebPage.copy(src.getParamWebPage());    
		this._paramFileInfo.copy(src.getParamFileInfo());    
		this._paramFillRect.copy(src.getParamFillRect()); 
		return 0;
    }
      
  }
} 


/*
		[DataMember]
		MediaItem_IdentificationParameters^   _paramIdentification;

		[DataMember]
		MediaItem_ItemPosSizeParameters^      _paramItemPosAndSize;

		[DataMember]
		MediaItem_ContainerPosSizeParameters^ _paramContainerPosAndSize;

		[DataMember]
		MediaItem_DurationParameters^         _paramDuration;

		[DataMember]
		MediaItem_BackgroundParameters^       _paramBackground;

		[DataMember]
		MediaItem_VideoParameters^            _paramVideo;

		[DataMember]
		MediaItem_AudioParameters^            _paramAudio;

		[DataMember]
		MediaItem_BrowserParameters^          _paramBrowser;

		[DataMember]
		MediaItem_ImageParameters^            _paramImage;

	public:
		MediaItem_Parameters()
		{
			_paramIdentification = gcnew MediaItem_IdentificationParameters();
			_paramItemPosAndSize = gcnew MediaItem_ItemPosSizeParameters();
			_paramContainerPosAndSize = gcnew MediaItem_ContainerPosSizeParameters();
			_paramDuration = gcnew MediaItem_DurationParameters();
			_paramBackground = gcnew MediaItem_BackgroundParameters();
			_paramVideo = gcnew MediaItem_VideoParameters();
			_paramAudio = gcnew MediaItem_AudioParameters();
			_paramBrowser = gcnew MediaItem_BrowserParameters();
			_paramImage = gcnew MediaItem_ImageParameters();
		}

	public:
		int copy(MediaItem_Parameters^ src)
		{
			if (src == nullptr)
				return 1;
			int errorNo = 0;
			errorNo = _paramIdentification->copy(src->_paramIdentification);
			if (errorNo != 0)
				return errorNo;

			_paramItemPosAndSize->copy(src->_paramItemPosAndSize);
			if (errorNo != 0)
				return errorNo;

			_paramContainerPosAndSize->copy(src->_paramContainerPosAndSize);
			if (errorNo != 0)
				return errorNo;

			_paramDuration->copy(src->_paramDuration);
			if (errorNo != 0)
				return errorNo;

			_paramBackground->copy(src->_paramBackground);
			if (errorNo != 0)
				return errorNo;

			_paramVideo->copy(src->_paramVideo);
			if (errorNo != 0)
				return errorNo;

			_paramAudio->copy(src->_paramAudio);
			if (errorNo != 0)
				return errorNo;

			_paramBrowser->copy(src->_paramBrowser);
			if (errorNo != 0)
				return errorNo;

			_paramImage->copy(src->_paramImage);
			if (errorNo != 0)
				return errorNo;

			return 0;
		}
	};
*/
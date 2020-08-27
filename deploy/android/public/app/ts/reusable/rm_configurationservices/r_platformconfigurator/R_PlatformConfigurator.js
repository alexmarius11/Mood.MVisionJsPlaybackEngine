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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_service/R_Service", "../../../../../app/ts/reusable/rm_configurationservices/r_platformconfigurator/IImpl_PlatformConfigurator_LoadConfigurations_R", "../../../../../app/ts/reusable/rm_configurationservices/r_platformconfigurator/IImpl_PlatformConfigurator_StartupConfiguration_R", "../../../../../app/ts/reusable/rm_configurationservices/r_platformconfigurator/IImpl_PlatformConfigurator_PlatformConfiguration_R"], function (require, exports, rmGeneral, rmConfigurationServices2, rmConfigurationServices3, rmConfigurationServices4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_configurationservices;
    (function (rm_configurationservices) {
        var R_PlatformConfigurator = /** @class */ (function (_super) {
            __extends(R_PlatformConfigurator, _super);
            //----------- constructor 
            function R_PlatformConfigurator(aFactoryDescription, aServiceContainer, aLogService, error) {
                var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
                _this._iLoadConfigurations = new rmConfigurationServices2.rm_configurationservices.IImpl_PlatformConfigurator_LoadConfigurations_R(_this);
                _this._iStartupConfiguration = new rmConfigurationServices3.rm_configurationservices.IImpl_PlatformConfigurator_StartupConfiguration_R(_this);
                _this._iPlatformConfiguration = new rmConfigurationServices4.rm_configurationservices.IImpl_PlatformConfigurator_PlatformConfiguration_R(_this);
                return _this;
            }
            //------------------------------
            R_PlatformConfigurator.prototype.injectDependencies = function (aServiceContainer, aServiceLocator, aLogService, error) {
                //------------------------
                if (this._aServiceLocator == null) {
                    this._aServiceLocator = this._aServiceContainer._iServiceManager.getServiceByAbstractName("A_ServiceLocator", null, error);
                    if (this._aServiceLocator == null) {
                        error.setError(211, "R_PlatformConfiguration.injectDependencies - cannot find Service Locator");
                        return 1;
                    }
                    this._aProperties = this._aServiceLocator._iEntityCreation.createDefaultProperties(error); //new rmConfigurationServices5.rm_configurationservices.R_Properties();
                    this._srvFactoryDescriptions = this._aServiceLocator._iEntityCreation.createDefaultFactoryDescriptions(error); //new rmGeneral2.rm_general.R_FactoryDescriptions(); 
                    this._entFactoryDescriptions = this._aServiceLocator._iEntityCreation.createDefaultFactoryDescriptions(error); //new rmGeneral2.rm_general.R_FactoryDescriptions(); 
                }
                //------------------------
                if (this._aSDKJsTV == null) {
                    this._aSDKJsTV = this._aServiceContainer._iServiceManager.getServiceByAbstractName("A_SDK_JsTV", null, error);
                    ;
                }
                return 0;
            };
            //--------------------------------------
            R_PlatformConfigurator.prototype.getProperties = function (error) {
                return this._aProperties;
            };
            //-----------------------------------------
            R_PlatformConfigurator.prototype.getProperty = function (propertyName, error) {
                var foundProperty = null;
                return foundProperty;
            };
            //--------------------------
            R_PlatformConfigurator.prototype.getOS = function () {
                return this._os;
            };
            //---------------------------
            R_PlatformConfigurator.prototype.getFirmwareVersion = function () {
                return this._firmware;
            };
            //-----------------------------
            R_PlatformConfigurator.prototype.getCustomerId = function () {
                return this._customerid;
            };
            //------------------------------
            R_PlatformConfigurator.prototype.getAppBasePath = function () {
                return this._appbasepath;
            };
            //-------------------------------
            R_PlatformConfigurator.prototype.getMediaFilesBasePath = function () {
                return this._mediafilesbasepath;
            };
            //---------------------------
            // Platform configuration
            //---------------------------
            //--------------------------------------
            R_PlatformConfigurator.prototype.getServiceFactoryDescriptions = function (error) {
                return this._srvFactoryDescriptions;
            };
            //--------------------------------------
            R_PlatformConfigurator.prototype.getServiceFactoryDescription = function (factoryName, error) {
                return this._srvFactoryDescriptions.getFactoryDescriptionByName(factoryName, error);
            };
            //--------------------------------------
            R_PlatformConfigurator.prototype.getEntityFactoryDescriptions = function (error) {
                return this._entFactoryDescriptions;
            };
            //--------------------------------------
            R_PlatformConfigurator.prototype.getEntityFactoryDescription = function (factoryName, error) {
                return this._entFactoryDescriptions.getFactoryDescriptionByName(factoryName, error);
            };
            //-----------------------------------
            // Load configuration files implementation 
            //-----------------------------------
            //------------
            R_PlatformConfigurator.prototype.loadConfigurationFiles = function (error) {
                var _this = this;
                //to do - move the loading code from client.js here 
                var message = "nothing";
                var os = "webos";
                var strStartupConfig = "";
                var oStartupConfig = null;
                //var strPlatformConfig = "";
                //var oPlatformConfig = null;
                require(["../../../../../config/StartupConfig"], function (dynRMConfig) {
                    strStartupConfig = dynRMConfig.rm_config.strStartupConfig;
                    //alert(strStartupConfig);
                    try {
                        //strStartupConfig = '{ "os":"webos", "firmware":"SSSP4", "customerid":"renaultv1.01", "appbasepath":"/moodmedia", "mediafilesbasepath":"/media_files"}';
                        oStartupConfig = JSON.parse(strStartupConfig);
                    }
                    catch (e) {
                        alert("Fatal Error in R_PlatformConfiguration::loadConfigurationFiles - Invalid json format in strStartupConfig)");
                        error.setError(101, "Fatal Error in R_PlatformConfiguration::loadConfigurationFiles - Invalid json format in StartupConfig");
                        return;
                    }
                    if (oStartupConfig != null) {
                        _this.setupStartupProperties(oStartupConfig, error);
                        if (error.isError()) {
                            alert("Fatal Error in R_PlatformConfiguration::loadConfigurationFiles - Cannot set startup properties in setupStartupPropertie+");
                            error.setError(102, "Fatal Error in R_PlatformConfiguration::loadConfigurationFiles - Cannot set startup properties in setupStartupProperties");
                            return;
                        }
                        _this.loadPlatformConfig(oStartupConfig, error);
                        /*
                        os = oStartupConfig.os;
                        //-----------------------
                        if       (os =="WebOS")
                        {
                          //alert(os);
                          require(["../../../../../config/PlaybackEngine_DefaultConfiguration_forWebOS_406"], (dynRMConfigWebOS: typeof rmConfigWebOS) => {
                            strPlatformConfig = dynRMConfigWebOS.rm_config.strPlatformConfiguration_forWebOS_406 ;
                            alert(strPlatformConfig);
                          });
                        //-----------------------
                        }else if (os == "Tizen"){
                          require(["../../../../../config/PlaybackEngine_DefaultConfiguration_forTizen_SSSP4"], (dynRMConfigTizen: typeof rmConfigTizen) => {
                            strPlatformConfig = dynRMConfigTizen.rm_config.strPlatformConfiguration_forTizen_SSSP4 ;
                            alert(strPlatformConfig);
                          });
                        //-----------------------
                        }else if (os == "NodeJs"){
                          require(["../../../../../config/PlaybackEngine_DefaultConfiguration_forNodeJs_10153LTS"], (dynRMConfigNodeJs: typeof rmConfigNodeJs) => {
                            strPlatformConfig = dynRMConfigNodeJs.rm_config.strPlatformConfiguration_forNodeJs_10153LTS;
                            alert(strPlatformConfig);
                          });
                        //-----------------------
                        }else if (os == "StandaloneBrowser"){
                          require(["../../../../../config/PlaybackEngine_DefaultConfiguration_forStandaloneBrowser_101"], (dynRMConfigStandaloneBrowser: typeof rmConfigStandaloneBrowser) => {
                            strPlatformConfig = dynRMConfigStandaloneBrowser.rm_config.strPlatformConfiguration_forStandaloneBrowser_101;
                            alert(strPlatformConfig);
                          });
                        }
                        */
                        //load(os);
                    }
                });
            };
            //----------------------------------------
            R_PlatformConfigurator.prototype.loadPlatformConfig = function (oStartupConfig, error) {
                var _this = this;
                var strPlatformConfig = "";
                var oPlatformConfig = null;
                var os = oStartupConfig.os;
                //-----------------------
                if (os == "WebOS") {
                    //alert(os);
                    require(["../../../../../config/PlaybackEngine_DefaultConfiguration_forWebOS_406"], function (dynRMConfigWebOS) {
                        strPlatformConfig = dynRMConfigWebOS.rm_config.strPlatformConfiguration_forWebOS_406;
                        _this.setupServiceFactoryDescriptions(strPlatformConfig, error);
                        //alert(strPlatformConfig);
                    });
                    //-----------------------
                }
                else if (os == "Tizen") {
                    require(["../../../../../config/PlaybackEngine_DefaultConfiguration_forTizen_SSSP4"], function (dynRMConfigTizen) {
                        strPlatformConfig = dynRMConfigTizen.rm_config.strPlatformConfiguration_forTizen_SSSP4;
                        _this.setupServiceFactoryDescriptions(strPlatformConfig, error);
                        //alert(strPlatformConfig);
                    });
                    //-----------------------
                }
                else if (os == "NodeJs") {
                    require(["../../../../../config/PlaybackEngine_DefaultConfiguration_forNodeJs_10153LTS"], function (dynRMConfigNodeJs) {
                        strPlatformConfig = dynRMConfigNodeJs.rm_config.strPlatformConfiguration_forNodeJs_10153LTS;
                        _this.setupServiceFactoryDescriptions(strPlatformConfig, error);
                        //alert(strPlatformConfig);
                    });
                    //-----------------------
                }
                else if (os == "StandaloneBrowser") {
                    require(["../../../../../config/PlaybackEngine_DefaultConfiguration_forStandaloneBrowser_101"], function (dynRMConfigStandaloneBrowser) {
                        strPlatformConfig = dynRMConfigStandaloneBrowser.rm_config.strPlatformConfiguration_forStandaloneBrowser_101;
                        _this.setupServiceFactoryDescriptions(strPlatformConfig, error);
                        //alert(strPlatformConfig);
                    });
                }
                //alert(strPlatformConfig);
                //load(os);
            };
            //----------------------------------------
            R_PlatformConfigurator.prototype.setupServiceFactoryDescriptions = function (strPlatformConfig, error) {
                var oPlatformConfig = null;
                try {
                    oPlatformConfig = JSON.parse(strPlatformConfig);
                }
                catch (e) {
                    alert("Fatal Error in R_PlatformConfiguration::loadConfigurationFiles - Invalid json format in strPlatformConfig");
                    error.setError(105, "Fatal Error in R_PlatformConfiguration::loadConfigurationFiles - Invalid json format in strPlatformConfig");
                    return;
                }
                //var factory_name:string = "";
                //var service_name:string = "";
                //var abstract_name:string = "";
                var aServiceFactoryDesc = null;
                for (var _i = 0, _a = oPlatformConfig.service_factory_description; _i < _a.length; _i++) {
                    var crtSrvFactoryDesc = _a[_i];
                    aServiceFactoryDesc = this._aServiceLocator._iEntityCreation.createDefaultFactoryDescription(error);
                    aServiceFactoryDesc.setNames(crtSrvFactoryDesc.factory_name, crtSrvFactoryDesc.service_name, crtSrvFactoryDesc.abstract_name, crtSrvFactoryDesc.service_name);
                    this._srvFactoryDescriptions.addFactoryDescription(aServiceFactoryDesc, error);
                }
                this._aServiceLocator._iFactorySetup.setupServiceFactories(this._srvFactoryDescriptions, error);
                //_srvFactoryDescriptions: amGeneralFactoryDescriptions.am_general.A_FactoryDescriptions;
            };
            //----------------------------------------
            R_PlatformConfigurator.prototype.setupStartupProperties = function (oStartupConfig, error) {
                //_aProperties    : amGeneral4.am_general.A_Properties;
                this._os = oStartupConfig.os;
                this._firmware = oStartupConfig.firmware;
                this._customerid = oStartupConfig.customerid;
                this._appbasepath = oStartupConfig.appbasepath;
                this._mediafilesbasepath = oStartupConfig.mediafilesbasepath;
                //----
                var osProperty = this._aServiceLocator._iEntityCreation.createDefaultProperty(error);
                osProperty.setNameAndValue("os", this._os);
                this._aProperties.addProperty(osProperty, error);
                //----
                var firmwareProperty = this._aServiceLocator._iEntityCreation.createDefaultProperty(error);
                osProperty.setNameAndValue("firmware", this._firmware);
                this._aProperties.addProperty(firmwareProperty, error);
                //----
                var customeridProperty = this._aServiceLocator._iEntityCreation.createDefaultProperty(error);
                osProperty.setNameAndValue("customerid", this._customerid);
                this._aProperties.addProperty(customeridProperty, error);
                //----
                var appbasepathProperty = this._aServiceLocator._iEntityCreation.createDefaultProperty(error);
                osProperty.setNameAndValue("appbasepath", this._appbasepath);
                this._aProperties.addProperty(appbasepathProperty, error);
                //----
                var mediafilesbasepathProperty = this._aServiceLocator._iEntityCreation.createDefaultProperty(error);
                osProperty.setNameAndValue("mediafilesbasepath", this._mediafilesbasepath);
                this._aProperties.addProperty(mediafilesbasepathProperty, error);
            };
            return R_PlatformConfigurator;
        }(rmGeneral.rm_general.R_Service));
        rm_configurationservices.R_PlatformConfigurator = R_PlatformConfigurator;
    })(rm_configurationservices = exports.rm_configurationservices || (exports.rm_configurationservices = {}));
});
//# sourceMappingURL=R_PlatformConfigurator.js.map
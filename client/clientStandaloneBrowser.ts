declare function require(moduleNames: string[], onLoad: (...args: any[]) => void): void;

//import rmFileReader = require("./rmod_filereader/FileReader");

//var fileFullName = "file://usb:2/StartupConfig.ts";
//var rFileReader:rmFileReader.rmod_filereader.FileReader = new rmFileReader.rmod_filereader.FileReader();
//rFileReader.ReadFile(fileFullName);

//--------------------------------------------
// StandaloneBrowser
import rmConfigurationServicesServiceContainer = require("../app/ts/reusable/rm_configurationservices/r_servicecontainer/R_ServiceContainer");
rmConfigurationServicesServiceContainer.rm_configurationservices.R_ServiceContainer.startup();
//--------------------------------------------
/*
  Standalone Browser
*/
/*
import * as rmodPersonal from "./rmod_personal/person";
import * as rmodPersonal2 from "./rmod_personal/salary";
import * as rmodPersonal3 from "./rmod_personal/person";

import * as rmConfig from "../config/StartupConfig";
import * as rmConfigWebOS             from "../config/PlaybackEngine_DefaultConfiguration_forWebOS_406";
import * as rmConfigTizen             from "../config/PlaybackEngine_DefaultConfiguration_forTizen_SSSP4";
import * as rmConfigNodeJs            from "../config/PlaybackEngine_DefaultConfiguration_forNodeJs_10153LTS";
import * as rmConfigStandaloneBrowser from "../config/PlaybackEngine_DefaultConfiguration_forStandaloneBrowser_101";


function greeterPerson (person: rmodPersonal.rmod_personal.Person){ 
    return "name: "+person.name;
}

function greeterSalary (salary: rmodPersonal2.rmod_personal.Salary){ 
    return "salary: "+salary.value;
}

var message = "nothing";
var os ="webos";


var strStartupConfig = "";
var oStartupConfig = null;

var strPlatformConfig = "";
var oPlatformConfig = null;
//alert("start");
require(["../config/StartupConfig"], (dynRMConfig: typeof rmConfig) => {
   
  strStartupConfig = dynRMConfig.rm_config.strStartupConfig;
  //alert(strStartupConfig);
  try{
    //strStartupConfig = '{ "os":"webos", "firmware":"SSSP4", "customerid":"renaultv1.01", "appbasepath":"/moodmedia", "mediafilesbasepath":"/media_files"}';
    oStartupConfig = JSON.parse(strStartupConfig);
  }catch(e)
  {
    alert("Fatal Error : StartupConfig - Invalid json format"); 
  }
  if (oStartupConfig != null)
  {
    os = oStartupConfig.os;
    //-----------------------
    if       (os =="WebOS")
    {
      //alert(os);
      require(["../config/PlaybackEngine_DefaultConfiguration_forWebOS_406"], (dynRMConfigWebOS: typeof rmConfigWebOS) => {
        strPlatformConfig = dynRMConfigWebOS.rm_config.strPlatformConfiguration_forWebOS_406 ;
        //alert(strPlatformConfig);
        load(os);
      });
    //-----------------------
    }else if (os == "Tizen"){
      require(["../config/PlaybackEngine_DefaultConfiguration_forTizen_SSSP4"], (dynRMConfigTizen: typeof rmConfigTizen) => {
        strPlatformConfig = dynRMConfigTizen.rm_config.strPlatformConfiguration_forTizen_SSSP4 ;
        //alert(strPlatformConfig);
        load(os);
      });
    //-----------------------
    }else if (os == "NodeJs"){
      require(["../config/PlaybackEngine_DefaultConfiguration_forNodeJs_10153LTS"], (dynRMConfigNodeJs: typeof rmConfigNodeJs) => {
        strPlatformConfig = dynRMConfigNodeJs.rm_config.strPlatformConfiguration_forNodeJs_10153LTS;
        //alert(strPlatformConfig);
        load(os);
      });
    //-----------------------
    }else if (os == "StandaloneBrowser"){
      require(["../config/PlaybackEngine_DefaultConfiguration_forStandaloneBrowser_101"], (dynRMConfigStandaloneBrowser: typeof rmConfigStandaloneBrowser) => {
        strPlatformConfig = dynRMConfigStandaloneBrowser.rm_config.strPlatformConfiguration_forStandaloneBrowser_101;
        //alert(strPlatformConfig);
        load(os);
      });
    }
    
  }
  
});
*/

/*
  var txt = '';
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function(){
  if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
    txt = xmlhttp.responseText;
    var StartupConfig = JSON.parse(txt);
    os = StartupConfig.os;
    //alert(os);
    load(os);
    }
    //else{
      //  load("tizen");
    //}
  };
  //let fileUrl = URL.createObjectURL("./StartupConfig.json");
  xmlhttp.open("GET","./StartupConfig.json",true);
  xmlhttp.send();
*/
/*
function load(os: string) : void
{
   // your page initialization code here
   // the DOM will be available here
   if (os=="WebOS") {

     require(["./rmod_personal/person"], (dynRModPersonal: typeof rmodPersonal) => {
         var person= new dynRModPersonal.rmod_personal.Person("John");
         message = greeterPerson(person);
         document.getElementById("maindiv").innerHTML=message;
         //alert(message);
     });
   }
   else if (os=="Tizen")
   { 
     require(["./rmod_personal/salary"], (dynRModPersonal2: typeof rmodPersonal2) => {
        var salary = new dynRModPersonal2.rmod_personal.Salary("30.000 $");
        message = greeterSalary(salary);
        document.getElementById("maindiv").innerHTML=message;
        //alert(message);
     });
   }
   else if (os=="NodeJs")
   {
    require(["./rmod_personal/person"], (dynRModPersonal: typeof rmodPersonal) => {
      var person= new dynRModPersonal.rmod_personal.Person("NodeJs");
      message = greeterPerson(person);
      document.getElementById("maindiv").innerHTML=message;
      //alert(message);
    });
  }else if (os=="StandaloneBrowser")
    { 
       require(["./rmod_personal/salary"], (dynRModPersonal2: typeof rmodPersonal2) => {
            var salary = new dynRModPersonal2.rmod_personal.Salary("10.000 $");
            message = greeterSalary(salary);
            document.getElementById("maindiv").innerHTML=message;
            //alert(message);
         });
    }
           
 }
//);
*/

//(function() {
  //  document.getElementById("maindiv").innerHTML=message;
//});

//$(document).ready(function(){
  //  var message = greeter(person);
  //  $("#status")[0].innerHTML=message;
//});

import amTransversalServicesIUtilsWeb = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/I_Utils_Web");

import rmTransversalServices = require("../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/R_UtilsService");
                                                     
import amGeneralXmlJsonObject = require("../../../../../app/ts/abstract/am_general/a_xmljsonobject/A_XmlJsonObject"); 

import amGeneralXmlDocument = require("../../../../../app/ts/abstract/am_general/ae_xmlobjects/AE_XmlDocument"); 
import amGeneralXmlNodes    = require("../../../../../app/ts/abstract/am_general/ae_xmlobjects/AE_XmlNodes"); 
import amGeneralXmlNode     = require("../../../../../app/ts/abstract/am_general/ae_xmlobjects/AE_XmlNode"); 

import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

export module rm_transversalservices
{
  export class IImpl_Utils_XMLJson_R implements amTransversalServicesIUtilsWeb.am_transversalservices.I_Utils_Web
  {
    _name: string;    

    //----------- owner
    _owner: rmTransversalServices.rm_transversalservices.R_UtilsService;

    //----------- constructor 
    constructor(owner: rmTransversalServices.rm_transversalservices.R_UtilsService)  
    {
      this._owner = owner;  
    }


    //-------------------------------------------------
    public xmlDocToJSON(xdoc: XMLDocument) : any
    {
      //Set Object Nodes
      function setObjects(obj, node) {
        var elemName;	//Element name
        var cnode;	//Current Node
        var tObj;	//New subnode
        var cName = "";
        if(!node) { return null; }
        if(!node.hasChildNodes()) { return null; }
        var nodeCount = node.childNodes.length - 1;	
        //Set node attributes if any
        if(node.attributes.length > 0) {
          setAttributes(obj, node);
        }
        //Process child nodes
        obj._children = [];
        obj.Text = "";
        var n = 0;
        do { //Order is irrelevant (speed-up)
          cnode = node.childNodes[n];
          switch(cnode.nodeType) {
            case 1: //Node
            elemName = formatName(cnode.tagName);
            if(cName != elemName) { obj._children.push(elemName); }
              //Create sub elemns array
              if(!obj[elemName]) {
                obj[elemName] = []; //Create Collection
              }
              tObj = {};
              obj[elemName].push(tObj);
              if(cnode.attributes.length > 0) {
                setAttributes(tObj, cnode);
              }
              //Set Helper functions (contains, indexOf, sort, etc);
              if(!obj[elemName].contains) {
                setHelpers(obj[elemName]);
              }	
            cName = elemName;
            if(cnode.hasChildNodes()) {
              setObjects(tObj, cnode); //Recursive Call
            }
            break;
            case 3: //Text Value
            //obj.Text += $.trim(cnode.nodeValue);
            obj.Text += cnode.nodeValue.trim(cnode.nodeValue);
            break;
            case 4: //CDATA
            //obj.Text += (cnode.text)?$.trim(cnode.text):$.trim(cnode.nodeValue);
            obj.Text += (cnode.text)?cnode.text.trim(cnode.text):cnode.nodeValue.trim(cnode.nodeValue);
            break;
          }
        } while(n++ < nodeCount);
      }
      //Set collections
      function setHelpers(grpObj) {
        //Selects a node withing array where attribute = value
        grpObj.getNodeByAttribute = function(attr, obj) {
          if(this.length > 0) {
            var cNode;
            var maxLen = this.length -1;
            try {
              do {
                cNode = this[maxLen];
                if(cNode[attr] == obj) {
                  return cNode;
                }
              } while(maxLen--);
            } catch(e) {return false;}
            return false;
          }
        }
        
        grpObj.contains = function(attr, obj) {
          if(this.length > 0) {
            var maxLen = this.length -1;
            try {
              do {
                if(this[maxLen][attr] == obj) {
                  return true;
                }
              } while(maxLen--);
            } catch(e) {return false;}
            return false;
          }
        }
        
        grpObj.indexOf = function(attr, obj) {
          var pos = -1;
          if(this.length > 0) {
            var maxLen = this.length -1;
            try {
              do {
                if(this[maxLen][attr] == obj) {
                  pos = maxLen;
                }
              } while(maxLen--);
            } catch(e) {return -1;}
            return pos;
          }
        }
        
        grpObj.SortByAttribute = function(col, dir) {
          function getValue(pair, idx) {
            var out = pair[idx];
            out = (isNumeric(out))?parseFloat(out):out;
            return out;
          }
          function sortFn(a, b) {
            var res = 0;
            var tA, tB;						
            tA = getValue(a, col);
            tB = getValue(b, col);
            if(tA < tB) { res = -1;	} else if(tB < tA) { res = 1; }
            if(dir) {
              res = (dir.toUpperCase() == "DESC")?(0 - res):res;
            }
            return res;
          }
          if(this.length) 
          {				
            this.sort(sortFn);
          }
        }
        
        grpObj.SortByValue = function(dir) {
          
          function getValue(pair) {
            var out = pair.Text;
            out = (isNumeric(out))?parseFloat(out):out;
            return out;
          }
          function sortFn(a, b) {
            var res = 0;
            var tA, tB;
            tA = getValue(a);
            tB = getValue(b);
            if(tA < tB) { res = -1;	} else if(tB < tA) { res = 1; }
            if(dir) {
              res = (dir.toUpperCase() == "DESC")?(0 - res):res;
            }
            return res;
          }
          if(this.length) {  
            this.sort(sortFn);
          }
        }
        grpObj.SortByNode = function(node, dir){
          function getValue(pair, node) 
          {
            var out = pair[node][0].Text;
            out = (isNumeric(out))?parseFloat(out):out;
            return out;
          }
          function sortFn(a, b) 
          {
            var res = 0;
            var tA, tB;
            tA = getValue(a, node);
            tB = getValue(b, node);
            if(tA < tB) { res = -1;	} else if(tB < tA) { res = 1; }
            if(dir) {
              res = (dir.toUpperCase() == "DESC")?(0 - res):res;
            }
            return res;
          }
          if(this.length)
          {
            this.sort(sortFn);
          }
        }
      }
      //Set Attributes of an object
      function setAttributes(obj, node) {
        if(node.attributes.length > 0) {
          var a = node.attributes.length-1;
          var attName;
          obj._attributes = [];
          do { //Order is irrelevant (speed-up)
            attName = String(formatName(node.attributes[a].name));
            obj._attributes.push(attName);				
            //obj[attName] = $.trim(node.attributes[a].value);
            obj[attName] = node.attributes[a].value.trim(node.attributes[a].value);
          } while(a--);
        }
      }
      //Alters attribute and collection names to comply with JS
      function formatName(name) {
        var regEx = /-/g;
        var tName = String(name).replace(regEx,"_");
        return tName;
      }
      
      try {

        if(!xdoc){ return null; }
        var tmpObj = {};
          //tmpObj.typeOf = "JSXBObject";
        var xroot = (xdoc.nodeType == 9)?xdoc.documentElement:xdoc;
        
        if(xdoc.nodeType == 3 || xdoc.nodeType == 4) {
          return xdoc.nodeValue;
        }			
        var isNumeric = function(s) {
          var testStr = "";
          if(s && typeof s == "string") { testStr = s; }
          var pattern = /^((-)?([0-9]*)((\.{0,1})([0-9]+))?$)/;
          return pattern.test(testStr);
        }
        //RUN
        setObjects(tmpObj, xroot);
        //Clean-up memmory
        xdoc = null;
        xroot = null;
        return tmpObj;
        
        } catch(e) {
          return null;	
        }
      }		
    
    
          /*
          <!DOCTYPE html>
    <html>
    <body>
    
    <p id="demo"></p>
    
    <script>
    var parser, xmlDoc;
    
    var text = '<?xml version="1.0" encoding="utf-8"?>'+
    '<!DOCTYPE TCCRON ['+
     ' <!ELEMENT TCCRON (ACTIONS)>'+
     ' <!ELEMENT ACTIONS (ACTION*)>'+
     ' <!ELEMENT ACTION (PATH, ARGUMENTS, RUN_AS, DATES, TIMES)>'+
     ' <!ELEMENT ARGUMENTS (ARGUMENT*)>'+
     ' <!ELEMENT DATES (FROM, TO, DAYS)>'+
     ' <!ELEMENT TIMES (FROM, TO, EVERY)>'+
     ' <!ELEMENT PATH (#PCDATA)>'+
     ' <!ELEMENT ARGUMENT (#PCDATA)>'+
     ' <!ELEMENT RUN_AS (#PCDATA)>'+
     ' <!ELEMENT FROM (#PCDATA)>'+
     ' <!ELEMENT TO (#PCDATA)>'+
     ' <!ELEMENT DAYS (#PCDATA)>'+
     ' <!ELEMENT EVERY (#PCDATA)>'+
    ']>'+
    '<root>'+
    '<TCCRON>'+
      '<ACTIONS>'+
        '<ACTION>'+
          '<!-- TURN THE SCREENS ON, SET VOLUME, LOCK EVERY 20 MINUTES -->'+
          '<PATH>D:\\moodmedia\\project\\scripts\\screen_control\\McDScreenControl.exe</PATH>'+
          '<ARGUMENTS></ARGUMENTS>'+
          '<RUN_AS>root</RUN_AS>'+
          '<DATES>'+
            '<FROM>2015-07-13</FROM>'+
            '<TO>2025-01-01</TO>'+
            '<DAYS>1111111</DAYS>'+
          '</DATES>'+
          '<TIMES>'+
            '<FROM>00:00:30</FROM>'+
            '<TO>23:59:59</TO>'+
            '<EVERY>00:20:07</EVERY>'+
          '</TIMES>'+
        '</ACTION>'+
        '<ACTION>'+
          '<!-- SEND STATISTICS (Except Today) between midnight and 5am -->'+
          '<PATH>D:\\moodmedia\\software_v5\\bin\\sendStatistics\\send_statistics.exe</PATH>'+
          '<ARGUMENTS>'+
            '<ARGUMENT>-url http://mvision.moodmedia.com/v5/</ARGUMENT>'+
          '</ARGUMENTS>'+
          '<RUN_AS>root</RUN_AS>'+
          '<DATES>'+
            '<FROM>2010-01-01</FROM>'+
            '<TO>2025-01-01</TO>'+
            '<DAYS>1111111</DAYS>'+
          '</DATES>'+
          '<TIMES>'+
            '<!--Randomized by CronStartTimeRandomizer-->'+
            '<FROM>00:16:40</FROM>'+
            '<TO>08:15:00</TO>'+
            '<EVERY>00:59:00</EVERY>'+
          '</TIMES>'+
        '</ACTION>'+
        '<ACTION>'+
          '<!-- SEND MONITORING INFORMATION -->'+
          '<PATH>D:\\moodmedia\\software_v5\\send_monitoring.bat</PATH>'+
          '<ARGUMENTS></ARGUMENTS>'+
          '<RUN_AS>root</RUN_AS>'+
          '<DATES>'+
            '<FROM>2012-01-01</FROM>'+
            '<TO>2025-01-01</TO>'+
            '<DAYS>1111111</DAYS>'+
          '</DATES>'+
          '<TIMES>'+
            '<!--Randomized by CronStartTimeRandomizer-->'+
            '<FROM>00:06:16</FROM>'+
            '<TO>23:59:59</TO>'+
            '<EVERY>00:11:17</EVERY>'+
          '</TIMES>'+
        '</ACTION>'+
        '<ACTION>'+
          '<!-- SRX2 UDP BROADCAST -->'+
          '<PATH>D:\\moodmedia\\project\\scripts\\srx_udp_listener.exe</PATH>'+
          '<ARGUMENTS>'+
            '<ARGUMENT>d:\\moodmedia\\feeds\\srx_receive\</ARGUMENT>'+
          '</ARGUMENTS>'+
          '<RUN_AS>root</RUN_AS>'+
          '<DATES>'+
            '<FROM>2012-01-01</FROM>'+
            '<TO>2099-01-01</TO>'+
            '<DAYS>1111111</DAYS>'+
          '</DATES>'+
          '<TIMES>'+
            '<FROM>00:14:00</FROM>'+
            '<TO>23:59:59</TO>'+
            '<EVERY>00:47:29</EVERY>'+
          '</TIMES>'+
        '</ACTION>'+
        '<ACTION>'+
          '<!-- UPDATE MEDIA FILES AND PLAYLIST VIA SATELLITE -->'+
          '<PATH>D:\\moodmedia\\project\\scripts\\srx2_playlist_media_update.bat</PATH>'+
          '<ARGUMENTS />'+
          '<RUN_AS>root</RUN_AS>'+
          '<DATES>'+
            '<FROM>2012-01-01</FROM>'+
            '<TO>2025-01-01</TO>'+
            '<DAYS>1111111</DAYS>'+
          '</DATES>'+
          '<TIMES>'+
            '<FROM>04:30:00</FROM>'+
            '<TO>23:59:59</TO>'+
            '<EVERY>00:09:11</EVERY>'+
          '</TIMES>'+
        '</ACTION>'+
        '<ACTION>'+
          '<!-- UPDATE MEDIA FILES AND PLAYLIST IN HYBRID MODE-->'+
          '<PATH>D:\\moodmedia\\project\\scripts\\MCD_hybrid_playlist_update.bat</PATH>'+
          '<ARGUMENTS />'+
          '<RUN_AS>root</RUN_AS>'+
          '<DATES>'+
            '<FROM>2012-01-01</FROM>'+
            '<TO>2025-01-01</TO>'+
            '<DAYS>1111111</DAYS>'+
          '</DATES>'+
          '<TIMES>'+
            '<!--Randomized by CronStartTimeRandomizer-->'+
            '<FROM>00:03:36</FROM>'+
            '<TO>04:15:59</TO>'+
            '<EVERY>00:09:11</EVERY>'+
          '</TIMES>'+
        '</ACTION>'+
        '<ACTION>'+
          '<!-- ALL DAY: UPDATE SETTINGS AND RUN LIVE COMMANDS FROM SERVER-->'+
          '<PATH>D:\\moodmedia\\software_v5\\player_files_updater.exe</PATH>'+
          '<ARGUMENTS>'+
            '<ARGUMENT>-url http://mvision.moodmedia.com/v5/</ARGUMENT>'+
          '</ARGUMENTS>'+
          '<RUN_AS>root</RUN_AS>'+
          '<DATES>'+
            '<FROM>2012-01-01</FROM>'+
            '<TO>2025-01-01</TO>'+
            '<DAYS>1111111</DAYS>'+
          '</DATES>'+
          '<TIMES>'+
            '<!--Randomized by CronStartTimeRandomizer-->'+
            '<FROM>00:06:54</FROM>'+
            '<TO>23:59:59</TO>'+
            '<EVERY>00:09:11</EVERY>'+
          '</TIMES>'+
        '</ACTION>'+
        '<ACTION>'+
          '<!-- MIDNIGHT: PURGE LOG, MEDIAS, TMP ...  -->'+
          '<PATH>D:\\moodmedia\\software_v5\\tc_purge.exe</PATH>'+
          '<ARGUMENTS />'+
          '<RUN_AS>root</RUN_AS>'+
          '<DATES>'+
            '<FROM>2010-01-01</FROM>'+
            '<TO>2025-01-01</TO>'+
            '<DAYS>1111111</DAYS>'+
          '</DATES>'+
          '<TIMES>'+
            '<FROM>00:02:00</FROM>'+
            '<TO>00:02:00</TO>'+
            '<EVERY>00:00:00</EVERY>'+
          '</TIMES>'+
        '</ACTION>'+
        '<ACTION>'+
          '<!-- NIGHTLY REBOOT  -->'+
          '<PATH>C:\\Windows\\System32\\shutdown.exe</PATH>'+
          '<ARGUMENTS>'+
            '<ARGUMENT>-f -r -t 0</ARGUMENT>'+
          '</ARGUMENTS>'+
          '<RUN_AS>root</RUN_AS>'+
          '<DATES>'+
            '<FROM>2012-01-01</FROM>'+
            '<TO>2025-01-01</TO>'+
            '<DAYS>1111111</DAYS>'+
          '</DATES>'+
          '<TIMES>'+
            '<FROM>04:25:00</FROM>'+
            '<TO>04:25:00</TO>'+
            '<EVERY>00:00:00</EVERY>'+
          '</TIMES>'+
        '</ACTION>'+
      '</ACTIONS>'+
    '</TCCRON>'+
    '</root>';
    */
    
        /*
        {"_children":
        ["ENVIRONMENT","SERIAL_NUMBER","WINDOWS_ACCOUNTS"],
        "Text":"",
    
        "ENVIRONMENT":
          [{"_children":
          
              ["ENV_NAME","EARLY_ADOPTER"],
              
              "Text":"",
              "ENV_NAME":[{"_children":[],"Text":"MVP425_WES7"}],
                  
              "EARLY_ADOPTER":[{"_children":[],"Text":"0"}]}],
                  
              "SERIAL_NUMBER":[{"_children":[],"Text":"PC100001"}],
                  
              "WINDOWS_ACCOUNTS":
                     [{"_children":["ACCOUNT"],"Text":"",
                         "ACCOUNT":
                            [{"_children":["ACCOUNT_ID","NAME","PWD"],"Text":"",
                            "ACCOUNT_ID":[{"_children":[],"Text":"1"}],
                            "NAME":[{"_children":[],"Text":"stream01"}],
                            "PWD":[{"_children":[],"Text":"retr9xEt"}]}]}]}
          */
    
    
      //------------------------------------------------------------
      public getXMLJsonObjectTagText(aXmlJsonObject: amGeneralXmlJsonObject.am_general.A_XmlJsonObject, jsonPath: string) : string
      {
        if (aXmlJsonObject === null)
          return "";
        var nativJsnObj = aXmlJsonObject.getNativeXmlJsonObject();
        if (nativJsnObj === null)
          return "";
        var tagText = this.getXMLJsonTagText(nativJsnObj, jsonPath);//, false);
        return tagText ;
      }

      //------------------------------------------------------------
      public getXMLJsonObjectTagArray(aXmlJsonObject: amGeneralXmlJsonObject.am_general.A_XmlJsonObject, jsonPath: string) : Array<object>
      {
        if (aXmlJsonObject === null)
          return null;
        var nativJsnObj = aXmlJsonObject.getNativeXmlJsonObject();
        if (nativJsnObj === null)
          return null;
        var tagArray = this.getXMLJsonTagArray(nativJsnObj, jsonPath);//, false);
        return tagArray ;
      }

      //------------------------------------------------------------
      public getXMLJsonTagText(jsonObj: object, jsonPath: string) : string //, bStart: boolean
      {
        // get the results (useful data) somewhere
        //document.getElementById("demo").innerHTML += JSON.stringify(jsonObj);
        //document.getElementById("demo").innerHTML += '<br>';
        //document.getElementById("demo").innerHTML += '<br>';
        var crtTag = this._owner._iUtilsStrings.getPrevContent(jsonPath, "/");
        if (crtTag === "")
        {
          //document.getElementById("demo").innerHTML += "end...";
          //document.getElementById("demo").innerHTML += '<br>';
          //document.getElementById("demo").innerHTML += '<br>';
          
          //document.getElementById("demo").innerHTML += JSON.stringify(jsonObj);
          //document.getElementById("demo").innerHTML += '<br>';
          //document.getElementById("demo").innerHTML += '<br>';
    
          if (jsonObj === null)
            return "";
          //document.getElementById("demo").innerHTML += JSON.stringify(jsonObj[jsonPath]);
          //document.getElementById("demo").innerHTML += '<br>';
          //document.getElementById("demo").innerHTML += '<br>';
    
          if (jsonObj[jsonPath] === null)
            return "";        
            
          //document.getElementById("demo").innerHTML += JSON.stringify(jsonObj[jsonPath][0]);
          //document.getElementById("demo").innerHTML += '<br>';
          //document.getElementById("demo").innerHTML += '<br>';
            
          if (jsonObj[jsonPath][0] === null)
            return "";        
            
          //document.getElementById("demo").innerHTML += JSON.stringify(jsonObj[jsonPath][0]["Text"]);
          //document.getElementById("demo").innerHTML += '<br>';
          //document.getElementById("demo").innerHTML += '<br>';
          if (jsonObj[jsonPath][0]["Text"] === null)
            return "";
            
          return jsonObj[jsonPath][0]["Text"];   
        }
        
        if (jsonObj[0] === null)
          return "";      
        //console.debug(JSON.stringify(JSON.stringify(jsonObj)));  

        var nextJsonObj = null;
        //if (bStart)
          //nextJsonObj = jsonObj[crtTag];
        //else  
          nextJsonObj = jsonObj[crtTag][0];

        //document.getElementById("demo").innerHTML += JSON.stringify(jsonObj[crtTag][0]);
        //document.getElementById("demo").innerHTML += '<br>';
        //document.getElementById("demo").innerHTML += '<br>';
    
        if (nextJsonObj === null)
          return "";
        var nextPath = this._owner._iUtilsStrings.getNextContent(jsonPath, "/");
        return this.getXMLJsonTagText(nextJsonObj, nextPath);//, false);
      }  
       
    
      //------------------------------------------------------------
      public getXMLJsonTagObject(jsonObj: object, jsonPath: string) : object
      {
        // get the results (useful data) somewhere
        //document.getElementById("demo").innerHTML += JSON.stringify(jsonObj);
        //document.getElementById("demo").innerHTML += '<br>';
        //document.getElementById("demo").innerHTML += '<br>';
        var crtTag = this._owner._iUtilsStrings.getPrevContent(jsonPath, "/");
        if (crtTag === "")
        {
          //document.getElementById("demo").innerHTML += "end...";
          //document.getElementById("demo").innerHTML += '<br>';
          //document.getElementById("demo").innerHTML += '<br>';
          
          //document.getElementById("demo").innerHTML += JSON.stringify(jsonObj);
          //document.getElementById("demo").innerHTML += '<br>';
          //document.getElementById("demo").innerHTML += '<br>';
          
          if (jsonObj === null)
            return null;
          //document.getElementById("demo").innerHTML += JSON.stringify(jsonObj[jsonPath]);
          //document.getElementById("demo").innerHTML += '<br>';
          //document.getElementById("demo").innerHTML += '<br>';
    
          if (jsonObj[jsonPath] === null)
            return null;        
            
          //return jsonObj[jsonPath];     
    
          //document.getElementById("demo").innerHTML += JSON.stringify(jsonObj[jsonPath][0]);
          //document.getElementById("demo").innerHTML += '<br>';
          //document.getElementById("demo").innerHTML += '<br>';
            
          if (jsonObj[jsonPath][0] === null)
            return null;        
                      
          return jsonObj[jsonPath][0];   
        }
        
        if (jsonObj === null)
          return null;      
          
        var nextJsonObj = jsonObj[crtTag][0];
        //document.getElementById("demo").innerHTML += JSON.stringify(jsonObj[crtTag][0]);
        //document.getElementById("demo").innerHTML += '<br>';
        //document.getElementById("demo").innerHTML += '<br>';
    
        if (nextJsonObj === null)
          return null;
        var nextPath = this._owner._iUtilsStrings.getNextContent(jsonPath, "/");
        return this.getXMLJsonTagObject(nextJsonObj, nextPath);
      }  
      
      //------------------------------------------------------------
      public getXMLJsonTagArray(jsonObj: object, jsonPath: string) : object[]
      {
        // get the results (useful data) somewhere
        //document.getElementById("demo").innerHTML += JSON.stringify(jsonObj);
        //document.getElementById("demo").innerHTML += '<br>';
        //document.getElementById("demo").innerHTML += '<br>';
        var crtTag = this._owner._iUtilsStrings.getPrevContent(jsonPath, "/");
        if (crtTag === "")
        {
          //document.getElementById("demo").innerHTML += "end...";
          //document.getElementById("demo").innerHTML += '<br>';
          //document.getElementById("demo").innerHTML += '<br>';
          
          //document.getElementById("demo").innerHTML += JSON.stringify(jsonObj);
          //document.getElementById("demo").innerHTML += '<br>';
          //document.getElementById("demo").innerHTML += '<br>';
          
          if (jsonObj === null)
            return null;
          //document.getElementById("demo").innerHTML += JSON.stringify(jsonObj[jsonPath]);
          //document.getElementById("demo").innerHTML += '<br>';
          //document.getElementById("demo").innerHTML += '<br>';
    
          if (jsonObj[jsonPath] === null)
            return null;        
            
          return jsonObj[jsonPath];     
    
          //document.getElementById("demo").innerHTML += JSON.stringify(jsonObj[jsonPath][0]);
          //document.getElementById("demo").innerHTML += '<br>';
          //document.getElementById("demo").innerHTML += '<br>';
            
          //if (jsonObj[jsonPath][0] === null)
            //return null;        
                      
          //return jsonObj[jsonPath][0];   
        }
        
        if (jsonObj === null)
          return null;      
          
        if (jsonObj[crtTag] === null)
          return null;      
          
        var nextJsonObj = jsonObj[crtTag][0];
        //document.getElementById("demo").innerHTML += JSON.stringify(jsonObj[crtTag][0]);
        //document.getElementById("demo").innerHTML += '<br>';
        //document.getElementById("demo").innerHTML += '<br>';
    
        if (nextJsonObj === null)
          return null;
        var nextPath = this._owner._iUtilsStrings.getNextContent(jsonPath, "/");
        return this.getXMLJsonTagArray(nextJsonObj, nextPath);
      }   
    




      //================================
      //    Not Used 
      //===============================
    
      public getXMLJsonKeyValue(jsonObj, jsonXml1, jsonXml2, jsonXml3)
      {
        // get the results (useful data) somewhere
        document.getElementById("demo").innerHTML += "start...";
        
        var json1 = jsonObj[jsonXml1];
        document.getElementById("demo").innerHTML += JSON.stringify(json1);
        if (json1 === null)
          return "not-found";
        document.getElementById("demo").innerHTML += '<br>';
        document.getElementById("demo").innerHTML += '<br>';     
    
        var json0 = json1[0];
        document.getElementById("demo").innerHTML += JSON.stringify(json0);
    
        /*
        var json2 = json1[0][jsonXml2];
        document.getElementById("demo").innerHTML += JSON.stringify(json2);
        if (json2 === null)
          return "not-found";
        document.getElementById("demo").innerHTML += '<br>';
        document.getElementById("demo").innerHTML += '<br>';
    
        var json3 = json2[0][jsonXml3];
        document.getElementById("demo").innerHTML += JSON.stringify(json3);
        if (json3 === null)
          return "not-found";
        document.getElementById("demo").innerHTML += '<br>';
        document.getElementById("demo").innerHTML += '<br>';
     
        var text = json3[0]["Text"];
        document.getElementById("demo").innerHTML += JSON.stringify(text);
        if (text === null)
          return "not-found";
        document.getElementById("demo").innerHTML += '<br>';
        document.getElementById("demo").innerHTML += '<br>';
        */
           /*
        // you can loop through all, assuming that each result set is the same. 
        if (results.length > 0) 
        { 
          // iterating through the results array
          
          for(var i = 0; i < results.length; i++) 
          {
            // get i-th object in the results array  
            var columnsIn = results[i];
            // loop through every key in the object
            for(var key in columnsIn){
              // here is your column name you are looking for + its value
              console.log(key + ' : ' + results[i][key]); 
              document.getElementById("demo").innerHTML += key + ' : ' + results[i][key];
            } 
          }
        }else{
          console.log("No columns");
        }*/
      }
    
      public getXMLJsonKeyValue2(jsonObject: object, jsonXmlPath: string)
      {
        // get the results (useful data) somewhere
        var results = jsonObject["_children"];
        // you can loop through all, assuming that each result set is the same. 
        if (results.length > 0) 
        { 
          // iterating through the results array
          for(var i = 0; i < results.length; i++) 
          {
            // get i-th object in the results array  
            var columnsIn = results[i];
            // loop through every key in the object
            for(var key in columnsIn){
              console.log(key + ' : ' + results[i][key]); // here is your column name you are looking for + its value
            } 
          }
        }else{
          console.log("No columns");
        }
      }

      /*
      textToXML: function(strXML) {
      try {
      var xmlDoc = ($.browser.msie)?new ActiveXObject("Microsoft.XMLDOM"):new DOMParser();
        xmlDoc.async = false;
      } catch(e) {throw new Error("XML Parser could not be instantiated");}
      var out;
      try {
        if($.browser.msie) {
          out = (xmlDoc.loadXML(strXML))?xmlDoc:false;
        } else {		
          out = xmlDoc.parseFromString(strXML, "text/xml");
        }
      } catch(e) { throw new Error("Error parsing XML string"); }
      return out;
    }*/
    

    //====================================
    //  XML Functions
    //====================================

    //-------------------------------  
    public getXmlXPath_Nodes(aXmlDocument: amGeneralXmlDocument.am_general.AE_XmlDocument, xPathString: string, error: amGeneralError.am_general.A_Error) : Array<amGeneralXmlNode.am_general.AE_XmlNode>
    {
      if (aXmlDocument === null)
        return null;
      var nativeXmlDocument = aXmlDocument.getNativeXmlDocument();
      if (nativeXmlDocument === null)
        return null;
      return this.getNativeXmlXPath_Nodes(nativeXmlDocument, xPathString, error) ;
    }


    //--------------------------------------
    public getNativeXmlXPath_Nodes(xmlObject: any, xPathString: string, error: amGeneralError.am_general.A_Error) : Array<amGeneralXmlNode.am_general.AE_XmlNode>
    {
      var xmlNodesResult : Array<amGeneralXmlNode.am_general.AE_XmlNode> = new Array<amGeneralXmlNode.am_general.AE_XmlNode>() ;
      var txt = "";
      try{
        if (xmlObject.evaluate) {
            var nodes = xmlObject.evaluate(xPathString, xmlObject, null, XPathResult.ANY_TYPE, null);
            var result = nodes.iterateNext();
            while (result) {
              var xmlNode: amGeneralXmlNode.am_general.AE_XmlNode = this._owner._aServiceLocator._iEntityCreation.createDefaultXmlNode(error);              
              xmlNode.setNativeXmlNode(result.childNodes[0]);
              xmlNodesResult.push(xmlNode);

              result = nodes.iterateNext();
              //txt += result.childNodes[0].nodeValue ;
            } 
        // Code For Internet Explorer
        } else if ((<any>window).ActiveXObject) {
            xmlObject.setProperty("SelectionLanguage", "XPath");
            nodes = xmlObject.selectNodes(xPathString);
            var i = 0;
            for (i = 0; i < nodes.length; i++)
            {
              var xmlNode: amGeneralXmlNode.am_general.AE_XmlNode = this._owner._aServiceLocator._iEntityCreation.createDefaultXmlNode(error);
              xmlNode.setNativeXmlNode(nodes[i].childNodes[0]);
              xmlNodesResult.push(xmlNode);
              //txt += nodes[i].childNodes[0].nodeValue ;//+ "<br>";
            }
        }
      }catch(e){
        if (error != null)
           error.setError(101, e.message);
        return null;    
      }
      return xmlNodesResult;
    }

    //-----------------------------------------
    //path = "/bookstore/book[price>35]/title";
    public getXmlXPath_FirstNodeText(aXmlDocument: amGeneralXmlDocument.am_general.AE_XmlDocument, xPathString: string, error: amGeneralError.am_general.A_Error) : string
    {
      if (aXmlDocument === null)
        return null;
      var nativeXmlDocument = aXmlDocument.getNativeXmlDocument();
      if (nativeXmlDocument === null)
        return null;
      return this.getNativeXmlXPath_FirstNodeText(nativeXmlDocument, xPathString, error) ;
    }

    //--------------------------------------
    public getNativeXmlXPath_FirstNodeText(xmlObject: any, xPathString: string, error: amGeneralError.am_general.A_Error) : string
    {
      var txt = "";
      try{
        if (xmlObject.evaluate) {
            var nodes = xmlObject.evaluate(xPathString, xmlObject, null, XPathResult.ANY_TYPE, null);
            var result = nodes.iterateNext();
            while (result) {
                txt += result.childNodes[0].nodeValue ;
                break;
                //result = nodes.iterateNext();
            } 
        // Code For Internet Explorer
        } else if ((<any>window).ActiveXObject) {
            xmlObject.setProperty("SelectionLanguage", "XPath");
            nodes = xmlObject.selectNodes(xPathString);
            var i = 0;
            for (i = 0; i < nodes.length; i++) {
                txt += nodes[i].childNodes[0].nodeValue ;//+ "<br>";
                break;
            }
        }
      }catch(e){
        if (error != null)
           error.setError(101, e.message);
        return "";    
      }
      return txt;
    }
  
    //-----------------------------------------
    //path = "/bookstore/book[price>35]/title";
    public getXmlXPath_FirstNodeText_FromNode(aXmlNode: amGeneralXmlNode.am_general.AE_XmlNode, xPathString: string, error: amGeneralError.am_general.A_Error) : string
    {
      if (aXmlNode === null)
        return null;
      var nativeXmlNode = aXmlNode.getNativeXmlNode();
      if (nativeXmlNode === null)
        return null;
      return this.getNativeXmlXPath_FirstNodeText_FromNode(nativeXmlNode, xPathString, error) ;
    }

    //--------------------------------------
    public getNativeXmlXPath_FirstNodeText_FromNode(xmlObject: any, xPathString: string, error: amGeneralError.am_general.A_Error) : string
    {
      var txt = "";
      try{
        if (xmlObject.evaluate) {
            var nodes = xmlObject.evaluate(xPathString, xmlObject, null, XPathResult.ANY_TYPE, null);
            var result = nodes.iterateNext();
            while (result) {
                txt += result.childNodes[0].nodeValue ;
                break;
                //result = nodes.iterateNext();
            } 
        // Code For Internet Explorer
        } else if ((<any>window).ActiveXObject) {
            xmlObject.setProperty("SelectionLanguage", "XPath");
            nodes = xmlObject.selectNodes(xPathString);
            var i = 0;
            for (i = 0; i < nodes.length; i++) {
                txt += nodes[i].childNodes[0].nodeValue ;//+ "<br>";
                break;
            }
        }
      }catch(e){
        if (error != null)
           error.setError(101, e.message);
        return "";    
      }
      return txt;
    }
  
    //--------------------------
    public parseXMLString(xmlString: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var parser = null;
      var xmlObject = null;
      var jsn = null;
  
      //---- is parse error 
      function isParseError(parsedDocument) : boolean {
          // parser and parsererrorNS could be cached on startup for efficiency
          var parser = new DOMParser(),
          errorneousParse = parser.parseFromString('<', 'text/xml'),
          parsererrorNS = errorneousParse.getElementsByTagName("parsererror")[0].namespaceURI;
      
          if (parsererrorNS === 'http://www.w3.org/1999/xhtml') {
              // the parseerror element doesn't seem to have a special namespace, so we are just guessing here :(
              //return parsedDocument.getElementsByTagName("parsererror").length > 0;
              var xmlError = parsedDocument.getElementsByTagName("parsererror");
              if (xmlError === null)
                return false;
              if (xmlError == "")
                return false;
              if (xmlError.length > 0)
               return true;
              return false; 
        }
      
        //return parsedDocument.getElementsByTagNameNS(parsererrorNS, 'parsererror').length > 0;
        var xmlError = parsedDocument.getElementsByTagNameNS(parsererrorNS, 'parsererror');
        //document.getElementById("renderer.message").innerHTML += "<p>cannot parse xml files: " + xmlError + "</p>";
        if (xmlError === null)
          return false;
        if (xmlError == "")
          return false;
        if (xmlError.length > 0)
          return true;
        return false; 
      };
      //--------------------
      if (typeof DOMParser != "undefined") {
  
          parser = new DOMParser();
          xmlObject = parser.parseFromString(xmlString,"text/xml");
          //var parsererrorNS = parser.parseFromString('INVALID', 'text/xml').getElementsByTagName("parsererror")[0].namespaceURI;
          if( isParseError(xmlObject) ) //xmlObject.getElementsByTagNameNS(parsererrorNS, 'parsererror').length > 0) 
          {
            //throw new Error('Error parsing XML');
            console.log( 'Error parsing xml file ' + xmlString ); 
            context.setError(error);
            context.setObjectResult(null);
            if (context.getError() != null)
              context.getError().setError(7009, 'Error parsing xml ' + xmlString );//+ " " + parsererrorNS);
            if (callback != null)
              callback(context);  
            return;  
  
      }
      //document.getElementById("sdk.message").innerHTML += "<p>" + JSON.stringify(xmlObject) + "</p>";
      console.log(JSON.stringify(xmlObject));
      context.setObjectResult(xmlObject);
      console.log( "Successfully parse xml object"); 
      context.setError(error);
      if (callback != null)
        callback(context);     
      return ;
      //--------------------
      }else if ((<any>window).ActiveXObject != null){ //} != "undefined") {
        xmlObject = new ActiveXObject("Microsoft.XMLDOM");
        if (xmlObject == null)
        {
          console.log( 'Error parsing xml ' + xmlString + " cannot create Microsoft.XMLDOM"); 
          context.setError(error);
          context.setObjectResult(null);
          if (context.getError() != null)
            context.getError().setError(7002, 'Error parsing xml ' + xmlString + " cannot create Microsoft.XMLDOM");
          if (callback != null)
            callback(context);  
          return;  
        }
        xmlObject.async = "false";
        var bSucceed = xmlObject.loadXML(xmlString);
        if (! bSucceed)
        {
          console.log( 'Error parsing xml file ' + xmlString ); 
          context.setError(error);
          context.setObjectResult(null);
          if (context.getError() != null)
            context.getError().setError(7009, 'Error parsing xml ' + xmlString );//+ " " + parsererrorNS);
          if (callback != null)
            callback(context);  
          return;    
        }
        console.log(JSON.stringify(xmlObject));
        context.setObjectResult(xmlObject);
        console.log( "Successfully parse xml object"); 
        context.setError(error);
        if (callback != null)
          callback(context);     
        return ;
      } else {
        console.log( 'Error parsing xml ' + xmlString + " no xml parser found"); 
        context.setError(error);
        context.setObjectResult(null);
        if (context.getError() != null)
          context.getError().setError(7001, 'Error parsing xml ' + xmlString + " no xml parser found");
        if (callback != null)
          callback(context);  
        return;  
      }
    }
  
  
  
  
  
  }
  
} 
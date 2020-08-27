var blessed=require("blessed"),fs=require("fs"),path=require("path"),log=require("npmlog"),mkdir=require("mkdirp"),appdata=require("./cli-appdata"),eulaContent="",cliVersion="unknown",isAgreed=!1,clidata=new appdata,eulatools={};"undefined"!==typeof module&&module.exports&&(module.exports=eulatools);
(function(){try{if("ose"!=clidata.getConfig(!0).profile)isAgreed=!0;else{var a=path.resolve(__dirname,"..","package.json"),b=fs.readFileSync(a,"utf8"),c=JSON.parse(b);cliVersion=c&&c.version||"unknown";isAgreed=checkEulaFile();isAgreed||(a=path.resolve(__dirname,"LICENSE.txt"),eulaContent=fs.readFileSync(a,"utf8"))}}catch(e){console.error(e),process.exit(1)}})();
function checkEulaFile(){var a=path.join(clidata.getPath(),"eula.json");if(fs.existsSync(a)){fs.statSync(a);try{var b=fs.readFileSync(a,"utf8"),c=JSON.parse(b),e=c.agreement,d=c.version.split("-"),g=cliVersion.split("-");if(d[0]==g[0]&&1==e)return!0}catch(f){console.error(f),process.exit(1)}}return!1}
function updateEulaFile(a){var b=clidata.getPath(),c=path.join(b,"eula.json");fs.existsSync(b)?fs.statSync(b).isDirectory()||log.verbose("'"+b+"' is not a directory"):(log.verbose("creating directory '"+b+"' ..."),mkdir.sync(b));fs.realpathSync(b);b={version:cliVersion,agreement:a};try{fs.writeFileSync(c,JSON.stringify(b,null,"\t"))}catch(e){console.error(e),process.exit(1)}isAgreed=a}
function removeEulaFile(){var a=path.join(clidata.getPath(),"eula.json");fs.existsSync(a)&&fs.unlinkSync(a);isAgreed=!1}
function showScreen(a){function b(a,b){return"page("+a+"/"+b+")\nI have read and agree with the above terms and conditions (press Y/N/Q)"}if("win32"==process.platform)var c="windows-ansi";var e=blessed.screen({terminal:c,fastCSR:!0,smartCSR:!0,useBCE:!0}),c=blessed.form({parent:e,mouse:!0,keys:!0,vi:!0,left:0,top:0,width:"100%",height:"100%",style:{scrollbar:{inverse:!0}},scrollable:!1,alwaysScroll:!0}),d=blessed.scrollablebox({parent:c,scrollable:!0,left:0,top:0,width:"100%",height:"90%",content:eulaContent,
alwaysScroll:!0,scrollbar:{ch:" ",inverse:!0}}),g=Math.ceil(d.getScrollHeight()/d.height),f=1,k=b(f,g),l=blessed.box({parent:c,padding:0,left:0,top:"90%",height:2,width:"100%",content:k,style:{fg:"white",bg:"gray"}});d.on("keypress",function(c,h){switch(h.name){case "pageup":case "pagedown":case "home":case "end":switch(h.name){case "pageup":d.scroll(-1*d.height);1<f&&--f;break;case "pagedown":d.scroll(d.height);f<g&&(f+=1);break;case "home":d.scrollTo(0);f=1;break;case "end":d.scrollTo(Number.MAX_SAFE_INTEGER),
f=g}l.setContent(b(f,g));e.render();break;case "y":updateEulaFile(!0);e.destroy();a(null);break;case "n":case "q":updateEulaFile(!1),e.destroy(),a("If you want to use webOS CLI, you must agree to the terms and conditions.")}});d.focus();e.render()}eulatools.checkEula=function(a){isAgreed?a(null):showScreen(a)};eulatools.setEula=function(a){updateEulaFile(a)};eulatools.removeEula=function(){removeEulaFile()};

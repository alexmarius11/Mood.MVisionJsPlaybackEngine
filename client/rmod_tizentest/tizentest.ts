//simple
var numOfMountedUSB;
var usbPath = "/dtv/sub/sdb1/";
var fileName = "StartupConfig.json";
var filePath = "/dtv/sub/sdb1/StartupConfig.json";

declare var tizen : any;

export var init = function (){
    checkMountState();
};
var checkMountState = function () {
    numOfMountedUSB = 0;
    var USBLabelList = "";
    tizen.filesystem.listStorages(function (storages) {
        for (var i = 0; i < storages.length; i++) {
            console.log(storages[i]);
            if (storages[i].type == "EXTERNAL" && storages[i].state == "MOUNTED") {
                numOfMountedUSB = numOfMountedUSB + 1;
                USBLabelList += storages[i].label;
            }
        }
        document.getElementById("maindiv").innerHTML += "<h3>" + "The label is : " + USBLabelList + "</h3>";
        RetriveMounted();
    }, function (error) {
        document.getElementById("maindiv").innerHTML +=  "<h3>" + "Error code : " + error.code + ", message:" + error.message + "</h3>";
    });
};
var RetriveMounted = function () {
    if (numOfMountedUSB == 0) {
        document.getElementById("maindiv").innerHTML += "<h3>" +"USB is not mounted" +"</h3>";
    }
    else {
        tizen.filesystem.listStorages(function (storages) {
            for (var i = 0; i < storages.length; i++) {
                if (storages[i].type == "EXTERNAL" && storages[i].state == "MOUNTED") {
                	/*tizen.filesystem.resolve(storages[i].label, function (dir) {
                		document.getElementById("maindiv").innerHTML +="<h3>" + "inside resolvepath" +"Path: " + dir.path + "</h3>";
                		document.getElementById("maindiv").innerHTML +="<h3>" + "inside resolvepath" +"FullPath: " + dir.fullPath + "</h3>";

                    });*/
                	
                    tizen.filesystem.resolve(storages[i].label, function (removableStorage) {
                        removableStorage.listFiles(function (files) {
                            for (i = 0; i < files.length; i++) {
                                document.getElementById("maindiv").innerHTML += "<h3>" + "file/directory list [" + i + "] : " + files[i].path + files[i].name + "</h3>";
                                if(files[i].name == "StartupConfig.json"){
                                	var path = files[i].path + files[i].name;
                                	readFile(removableStorage);
                                	//var testFile = "/opt/storage/usb/sda1/StartupConfig.json";
                                	//readFile2(testFile);
                                }
                            }
                        }, function (error) {
                            document.getElementById("maindiv").innerHTML += "<h3>"+"Error code : " + error.code + ", message:" + error.message + "</h3>";
                        });
                    }, function (error) {
                        document.getElementById("maindiv").innerHTML += "<h3>"+ "Error code : " + error.code + ", message:" + error.message +"</h3>";
                    });
                    break;
                }
            }
        }, function (error) {
            document.getElementById("maindiv").innerHTML += "<h3>" +"Error code : " + error.code + ", message:" + error.message +"</h3>";
        });
    }
};

function readFile(usb){
	try{
		document.getElementById("maindiv").innerHTML +="<h3>" + "inside readFile" + "</h3>";
		var file = usb.resolve("StartupConfig.json");
		if(file != null){
			file.openStream("r",
	             function(fs) {
					document.getElementById("maindiv").innerHTML +="<h3>" + fs.read(file.fileSize) + "</h3>";
	                fs.close();
	             }, function(e) {
	                console.log("Error " + e.message);
	                document.getElementById("maindiv").innerHTML +="<h3>" + "File read fail" +"</h3>";
	             }, "UTF-8"
	         );
		}else{
			// mm message.innerHTML="File read fail";
		}
	}catch(e){
		console.log(e);
		// mm message.innerHTML="File read fail";
	} 
}
function resolvePath(path)
{
	tizen.filesystem.resolve(path, function(dir){
		document.getElementById("maindiv").innerHTML +="<h3>" + "inside resolvepath" +"Path: " +dir.path + "</h3>";
		document.getElementById("maindiv").innerHTML +="<h3>" + "inside resolvepath" +"FullPath: " +dir.fullPath + "</h3>";

	});
}

function readFile2(filePath){
	document.getElementById("maindiv").innerHTML +="<h3>" + "inside readFile " + filePath + "</h3>";
	tizen.filesystem.resolve(filePath, function(dir) //mm path
	{
				var file = dir.resolve(filePath);
			    file.openStream("r", function(fs){
				var fileContent = fs.read(file.fileSize);
				document.getElementById("maindiv").innerHTML +="<h3>" + fs.read(file.fileSize) + "</h3>";
				fs.close();
			});

	});
}

//----------------- >
// window.onload = init

/*function readFile(path){
	try{
        document.getElementById("maindiv").innerHTML += "<h3>" + "readFile called: " + path + "</h3>";
		tizen.filesystem.resolve(path, function (handle) {
	        if (handle) {
	            if (handle.isFile) {
	                handle.openStream("r", function (fs) {
	                    var fileContent = fs.read(handle.filesize);
	                    document.getElementById("maindiv").innerHTML += "<h3>" + fileContent + "</h3>";
	                    fs.close();
	                    handle = null;
	                });
	            }
	            else {
	                handle = null;
	            }
	        }
	    });
	}catch(e){
		console.log(e);
		document.getElementById("maindiv").innerHTML +="File read fail";
	} 
}*/
//Example from Soc project - SSP4
/*init();
function init(){
    var storagePath;
    getExternalMountedDrives().then((result) =>{
        if(result.length > 0){
            getPath(result[0]).then((res)=>
            {
                storagePath = res + "/";
                document.getElementById("maindiv").innerHTML+="<h3>" + "The path is : " + storagePath + "</h3>";

            }).then(() => {
                readFileContent(storagePath + "StartupConfig.json");
            });
        }
        else{
            document.getElementById("maindiv").innerHTML += "<h3>"+"No usb mounted" + "</h3>";
        }
    });
}

function getExternalMountedDrives(): Promise<any> {

    return new Promise((resolve, reject) => {
        var mountedDrives = [];
        var listStor = tizen.filesystem.listStorages((storages) => {
            for (var i = 0; i < storages.length; i++) {
                if (storages[i].type == "EXTERNAL" && storages[i].state == "MOUNTED") {
                    mountedDrives.push(storages[i].label);
                    document.getElementById("maindiv").innerHTML+="<h3>"+ storages[i].label + "</h3>" ;
                }
            }
            return resolve(mountedDrives);
        });
    });
}

function getPath(path): Promise<any> {
    return new Promise((resolve, reject)=> {
        tizen.filesystem.resolve(path, (handle) => {
            if (handle) {
                return resolve(handle.fullPath);
            }
            else {
                return resolve(path);
            }
        });
    });
}

class TizenFileInterfaceInfo {
    parent: any;
    readOnly: boolean;
    isFile: boolean;
    isDirectory: boolean;

    created: string;
    modified: string;
    name: string;
    fullPath: string;
    fileSize: string;
    length: string;
}

function readFileContent(path): Promise<string> {
    return new Promise((resolve) => {
        var info = new TizenFileInterfaceInfo;
        tizen.filesystem.resolve(path, (handle) => {
            if (handle) {
                if (handle.isFile) {
                    var size = handle.fileSize;
                    info.created = handle.created;
                    info.modified = handle.modified;
                    info.parent = handle.parent;
                    info.isFile = handle.isFile;
                    info.isDirectory = handle.isDirectory;
                    info.name = handle.name;
                    info.fullPath = handle.fullPath;
                    info.fileSize = handle.fileSize;
                    info.length = handle.length;
                    handle.openStream("r",
                        (fs) => {
                            var fileContent = fs.read(size);
                            document.getElementById("maindiv").innerHTML += "<h3>"+ fileContent + "</h3>";
                            fs.close();
                            handle = null;
                            resolve(fileContent);
                        });
                } else {
                    handle = null;
                    resolve("");
                }
            }
            else {
                resolve("");
            }
        }, function (error) {
            resolve(error);
        });
    });
}

*/
///Example from Samsung documentation
/*var numOfMountedUSB;
var message;
declare var tizen :any;
init();
var init = function() {
    // TODO:: Do your initialization job
    console.log("init() called");
    message = document.getElementById("maindiv");
    checkMountState();
    RetriveMounted();
    //Adds a listener to subscribe to notifications when a change in storage state occurs.
};
var checkMountState = function(){
    numOfMountedUSB = 0;
    var USBLabelList = "";
    tizen.filesystem.listStorages(function(storages){
        for (var i = 0; i < storages.length; i++){
            console.log(storages[i]);
            if(storages[i].type == "EXTERNAL" && storages[i].state == "MOUNTED"){
                numOfMountedUSB = numOfMountedUSB + 1;
                USBLabelList += storages[i].label + " is mounted.<br/>"
            }
        }
        message.innerHTML += USBLabelList;

    }, function(error){
        message.innerHTML += "Error code : " + error.code + ", message:" + error.message;
    });
}

var RetriveMounted = function(){
    if(numOfMountedUSB == 0){
        message.innerHTML += "USB is not mounted";
    }else{
        tizen.filesystem.listStorages(function(storages){
            for (var i = 0; i < storages.length; i++){
                if(storages[i].type == "EXTERNAL" && storages[i].state == "MOUNTED"){
                    tizen.filesystem.resolve(storages[i].label, function(removableStorage){
                        removableStorage.listFiles(function(files){
                                for(i = 0; i < files.length; i++) {
                                    message.innerHTML += "file/directory list ["+ i + "] : "+ files[i].path+ files[i].name	+  "<br/>";
                                }
                            }, function(error){
                                message.innerHTML += "Error code : " + error.code + ", message:" + error.message;
                            });
                        }, function(error){
                            message.innerHTML += "Error code : " + error.code + ", message:" + error.message;
                        });
                    
                    break;
                }
            }
        }, function(error){
            message.innerHTML += "Error code : " + error.code + ", message:" + error.message;
        });
    }
}*/ 
//# sourceMappingURL=TizenParser.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var rmConfigurationServicesServiceLocator = require("../app/ts/reusable/rm_configurationservices/r_servicelocator/R_ServiceLocator");
var rmodSDKServer = require("../app/ts/reusable/rm_transversalservices/r_sdk_server/R_SDK_Server");
var nmodSDKNodeJs = require("../app/ts/native/nm_transversalservices/n_sdk_nodejs/N_SDK_NodeJs");
var rmodUtilsService = require("../app/ts/reusable/rm_transversalservices/r_utilsservice/R_UtilsService");
var error = null;
var aSrvLocator;
aSrvLocator = rmConfigurationServicesServiceLocator.rm_configurationservices.R_ServiceLocator.startupCreateDefaultServiceLocator(null, error);
var context = aSrvLocator._iEntityCreation.createDefaultContext();
var error = aSrvLocator._iEntityCreation.createDefaultError();
var aUtilsService = new rmodUtilsService.rm_transversalservices.R_UtilsService(null, null, null, error);
aUtilsService._iService.setServiceLocator(aSrvLocator);
var aSDKServer = new rmodSDKServer.rm_transversalservices.R_SDK_Server(null, null, null, error);
var aSDKNodeJs = new nmodSDKNodeJs.nm_transversalservices.N_SDK_NodeJs(null, null, null, error);
aSDKServer._iService.setTargetService(aSDKNodeJs);
aSDKServer._iService.setServiceLocator(aSrvLocator);
aSDKNodeJs._iService.setServiceLocator(aSrvLocator);
var rmodLogService = require("../app/ts/reusable/rm_transversalservices/r_logservice/R_LogService");
var rmodLogServer = require("../app/ts/reusable/rm_transversalservices/r_log_server/R_Log_Server");
var aLogService = new rmodLogService.rm_transversalservices.R_LogService(null, null, null, error);
aLogService._iService.setServiceLocator(aSrvLocator);
aLogService._iService.setTargetService(aSDKNodeJs);
aLogService._iService.setUtilsService(aUtilsService);
var aLogServer = new rmodLogServer.rm_transversalservices.R_Log_Server(null, null, null, error);
aLogServer._iService.setServiceLocator(aSrvLocator);
aLogServer._iService.setTargetService(aLogService);
var app = express();
app.set("port", process.env.PORT || 2000);
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.static((path.join(__dirname, '../public'))));
app.use('/termux', express.static("/data/data/com.termux/"));
var http = require("http").Server(app);
var io = require("socket.io")(http);
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
io.on("connection", function (socket) {
    console.log("a user connected");
    aSDKServer._iRemoteService.receive(socket, null);
    aLogServer._iRemoteService.receive(socket, null);
});
var server = http.listen(2000, function () {
    console.log("listening on *:2000");
});
//# sourceMappingURL=servert.js.map
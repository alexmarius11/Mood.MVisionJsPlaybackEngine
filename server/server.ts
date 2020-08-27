import * as express from "express";
import * as socketio from "socket.io";
import * as path from "path";


//========================================
//declare function require(moduleNames: string[], onLoad: (...args: any[]) => void): void;
//--------------------------------------------
//import rmConfigurationServicesServiceContainer = require("../app/ts/reusable/rm_configurationservices/r_servicecontainer/R_ServiceContainer");
//rmConfigurationServicesServiceContainer.rm_configurationservices.R_ServiceContainer.startup();
//--------------------------------------------

import amSDKJsTV = require("../app/ts/abstract/am_transversalservices/a_sdk_jstv/A_SDK_JsTV");
import amConfigurationServicesServiceLocator   = require("../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amGeneralContext = require("../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralError   = require("../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralDateTime = require("../app/ts/abstract/am_general/a_datetime/A_DateTime");
import amGeneralTimeZone = require("../app/ts/abstract/am_general/a_timezone/A_TimeZone");
import amGeneralFileInfo = require("../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

import rmConfigurationServicesServiceLocator   = require("../app/ts/reusable/rm_configurationservices/r_servicelocator/R_ServiceLocator");
import rmodSDKServer = require("../app/ts/reusable/rm_transversalservices/r_sdk_server/R_SDK_Server");

import nmodSDKNodeJs = require("../app/ts/native/nm_transversalservices/n_sdk_nodejs/N_SDK_NodeJs");

import amTransversalServicesUtilsService  = require("../app/ts/abstract/am_transversalservices/a_utilsservice/A_UtilsService");
import rmodUtilsService = require("../app/ts/reusable/rm_transversalservices/r_utilsservice/R_UtilsService");



//-- the variables
var error             : amGeneralError.am_general.A_Error = null;
var aSrvLocator       : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator;
aSrvLocator = rmConfigurationServicesServiceLocator.rm_configurationservices.R_ServiceLocator.startupCreateDefaultServiceLocator(null,error);
var context:amGeneralContext.am_general.A_Context = aSrvLocator._iEntityCreation.createDefaultContext();
var error:amGeneralError.am_general.A_Error = aSrvLocator._iEntityCreation.createDefaultError();

//---
var aUtilsService:amTransversalServicesUtilsService.am_transversalservices.A_UtilsService = new rmodUtilsService.rm_transversalservices.R_UtilsService(null, null, null, error);
aUtilsService._iService.setServiceLocator(aSrvLocator);

//--- the call
var aSDKServer:amSDKJsTV.am_transversalservices.A_SDK_JsTV = new rmodSDKServer.rm_transversalservices.R_SDK_Server(null, null, null, error);
var aSDKNodeJs:amSDKJsTV.am_transversalservices.A_SDK_JsTV = new nmodSDKNodeJs.nm_transversalservices.N_SDK_NodeJs(null, null, null, error);
//----------------------------------------
aSDKServer._iService.setTargetService(aSDKNodeJs);
aSDKServer._iService.setServiceLocator(aSrvLocator);
//--
aSDKNodeJs._iService.setServiceLocator(aSrvLocator);

//=================================
// log service setup 
//--- the service creation
import amodLogService   = require("../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import rmodLogService = require("../app/ts/reusable/rm_transversalservices/r_logservice/R_LogService");
import rmodLogServer  = require("../app/ts/reusable/rm_transversalservices/r_log_server/R_Log_Server");

var aLogService:amodLogService.am_transversalservices.A_LogService = new rmodLogService.rm_transversalservices.R_LogService(null, null, null, error);
aLogService._iService.setServiceLocator(aSrvLocator);
aLogService._iService.setTargetService(aSDKNodeJs);
aLogService._iService.setUtilsService(aUtilsService);

var aLogServer:amodLogService.am_transversalservices.A_LogService = new rmodLogServer.rm_transversalservices.R_Log_Server(null, null, null, error);
aLogServer._iService.setServiceLocator(aSrvLocator);
aLogServer._iService.setTargetService(aLogService);

//=================================
//var cors = require('cors');

//=========================================================================================
const app = express();
//app.use(cors());
//app.options('*', cors());


app.set("port", process.env.PORT || 3000);

/*
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
*/

//var cors = require('cors');
//app.use(cors());

// use it before all route definitions
//app.use(cors({origin: 'http://localhost:9080'}));//'http://localhost:9080'}));

app.use(express.static((path.join(__dirname, '../public'))))
app.use('/ux', express.static("/"));
app.use('/termux', express.static("/data/data/com.termux/"));
app.use('/c', express.static("c:/"));

let http = require("http").Server(app);


 /*https
//=====================================
//var fs = require('fs');
//var http = require('http');
*/
var fs = require('fs');
var https = require('https');
var domainKey  = fs.readFileSync(path.join(__dirname,'../certificates/servercertificates/domain/domainkey.pem'), 'utf8');
var domainCertificate = fs.readFileSync(path.join(__dirname,'../certificates/servercertificates/domain/domaincert.pem'), 'utf8');
var domainCredentials = {key: domainKey, cert: domainCertificate};
var httpsDomainServer = https.createServer(domainCredentials, app);

var selfSignedKey         = fs.readFileSync(path.join(__dirname,'../certificates/servercertificates/selfsigned/selfsignedkey.pem'), 'utf8');
var selfSignedCertificate = fs.readFileSync(path.join(__dirname,'../certificates/servercertificates/selfsigned/selfsignedcert.pem'), 'utf8');
var selfSignedCredentials = {key: selfSignedKey, cert: selfSignedCertificate};
var httpsSelfSignedServer = https.createServer(selfSignedCredentials, app);

//====================================

// set up socket.io and bind it to our
// http server.
//let io = require("socket.io");
// Socket.io
const ioServer = require( "socket.io" );
const io       = new ioServer();
io.attach(http);
io.attach(httpsDomainServer);
io.attach(httpsSelfSignedServer);


//var Assessment = require('../app/models/assessment');

//app.use(function(req, res, next) {
  //res.header("Access-Control-Allow-Origin", "*");
  //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //next();
//});

// Add headers
//app.use(function (req, res, next) {
  /*
app.all('*', function(req, res,next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', "true");

  // Pass to next layer of middleware
  //next();
  if ('OPTIONS' == req.method) {
    res.send(200);
  }else {
    next();
  }

});
*/

/*
app.all('*', function(req, res,next) {
  
   // Response settings
   // @type {Object}
   //
  var responseSettings = {
      "AccessControlAllowOrigin": req.headers.origin,
      "AccessControlAllowHeaders": "Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name",
      "AccessControlAllowMethods": "POST, GET, PUT, DELETE, OPTIONS",
      "AccessControlAllowCredentials": "true"
  };

  //
   // Headers
   //
  res.header("Access-Control-Allow-Credentials", responseSettings.AccessControlAllowCredentials);
  res.header("Access-Control-Allow-Origin",  <string>responseSettings.AccessControlAllowOrigin);
  res.header("Access-Control-Allow-Headers", (req.headers['access-control-request-headers']) ? <string>req.headers['access-control-request-headers'] : "x-requested-with");
  res.header("Access-Control-Allow-Methods", (req.headers['access-control-request-method']) ? <string>req.headers['access-control-request-method'] : responseSettings.AccessControlAllowMethods);

  if ('OPTIONS' == req.method) {
      res.send(200);
  }
  else {
      next();
  }
});
*/

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "127.0.0.1:9080"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', function(req, res, next) {
  // Handle the get for this route
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

/*
app.get("/", (req: any, res: any) => {
 // res.sendFile(path.resolve("./client/index.html"));
  res.sendFile(path.join(__dirname, '../public/index.html'));
});*/

// whenever a user connects on port 3000 via
// a websocket, log that a user has connected

//----------------------------------------
io.on("connection", function(socket: any) 
{

  console.log("a user connected");
  aSDKServer._iRemoteService.receive(socket, null);
  aLogServer._iRemoteService.receive(socket, null);
  //// whenever we receive a 'message' we log it out
  //socket.on("message", function(message: any) {
    //console.log(message);
  //});

  //socket.on('get-file-list', function() {
    //socket.emit('ret-get-file-list', "file list list"); //users[currentDrawer].ioid);
  //});
});

/*
io2.on("connection", function(socket2: any) 
{

  console.log("a user connected");
  aSDKServer2._iRemoteService.receive(socket2, null);
  aLogServer2._iRemoteService.receive(socket2, null);
});*/

const server = http.listen(3000, function() {
  console.log("http listening on *:3000");
});

const server1 = httpsSelfSignedServer.listen(3001, function() {
  //console.log("https self-signed server listening on *:3001");
});

const server2 = httpsDomainServer.listen(3002, function() {
  //console.log("https domain server listening on *:3002");
});


//=========================================================================================
/*
import express = require('express');
//import http = require('http');
import path = require('path');
//var io = require('socket.io')(http);
import socketio = require("socket.io");

//var express = require('express');
//var app     = express();
//var server  = app.listen(1337);
//var io      = require('socket.io').listen(server);
// set up socket.io and bind it to our
// http server.
var app = express();
app.set('port', process.env.PORT || 2000);
let http = require("http").Server(app);
let io = require("socket.io")(http);


app.use(express.static((path.join(__dirname, 'public'))))


app.get('/', function(req: express.Request, res: express.Response) {
  res.sendFile(path.join(__dirname, 'www/index.html'));
});

io.on('connection', function(socket: socketio.Socket){
  console.log('a user connected');
});

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
*/
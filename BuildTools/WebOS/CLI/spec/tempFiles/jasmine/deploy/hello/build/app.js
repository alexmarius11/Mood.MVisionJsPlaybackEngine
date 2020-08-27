enyo.path.addPath("enyo", "/usr/palm/frameworks/enyo-bundle/2.5/enyo");
enyo.path.addPath("lib\garnet", "/usr/palm/frameworks/enyo-bundle/2.5/lib/garnet");
enyo.path.addPath("lib\enyo-webos", "/usr/palm/frameworks/enyo-bundle/2.5/lib/enyo-webos");
enyo.path.addPath("lib\enyo-ilib", "/usr/palm/frameworks/enyo-bundle/2.5/lib/enyo-ilib");
enyo.path.addPath("lib\enyo-cordova", "/usr/palm/frameworks/enyo-bundle/2.5/lib/enyo-cordova");
enyo.path.addPath("lib", "lib");
enyo.depends(
	"\usr\palm\frameworks\enyo-bundle\2.5\lib\enyo-webos\package.js",
	"\usr\palm\frameworks\enyo-bundle\2.5\lib\garnet\package.js",
	"\usr\palm\frameworks\enyo-bundle\2.5\lib\enyo-ilib\package.js",
	"\usr\palm\frameworks\enyo-bundle\2.5\lib\enyo-cordova\package.js",
	"build\app1.css",
	"build\app1.js"
);
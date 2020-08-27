
// source\HelloWorldSample.js
enyo.kind({name:"g.sample.HelloWorldSample",handlers:{ondragfinish:"eventHandler"},classes:"enyo-unselectable garnet g-layout-text-center main-view",components:[{kind:"g.Title",content:"Hello World"},{content:"Drag right to close app",classes:"g-sample-hello"}],eventHandler:function(e,n){1===n.xDirection&&window.close()}}),enyo.ready(function(){(new g.sample.HelloWorldSample).renderInto(document.body)});

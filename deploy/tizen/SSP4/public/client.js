define(["require", "exports", "./rmod_personal/person"], function (require, exports, rmodPersonal) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function greeter(person) {
        return "hello " + person.name;
    }
    var person = new rmodPersonal.rmod_personal.Person("John");
    (function () {
        // your page initialization code here
        // the DOM will be available here
        var message = greeter(person);
        document.getElementById("maindiv").innerHTML = message;
    })();
});
//$(document).ready(function(){
//  var message = greeter(person);
//  $("#status")[0].innerHTML=message;
//});
//# sourceMappingURL=client.js.map
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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_entity/R_Entity"], function (require, exports, rmGeneralEntity) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_coreservices;
    (function (rm_coreservices) {
        var RE_TagManager = /** @class */ (function (_super) {
            __extends(RE_TagManager, _super);
            //----------------
            function RE_TagManager() {
                var _this = _super.call(this) || this;
                _this._mapOfRealTags = new Map();
                return _this;
            }
            //---------------------
            RE_TagManager.prototype.getRealTag = function (tagId) {
                return this._mapOfRealTags.get(tagId);
            };
            //---------------------
            RE_TagManager.prototype.hasRealTag = function (tagId) {
                return this._mapOfRealTags.has(tagId);
            };
            //---------------------
            RE_TagManager.prototype.addRealTag = function (tagId, realTag) {
                if (!this._mapOfRealTags.has(tagId))
                    return false;
                this._mapOfRealTags.set(tagId, realTag);
                return true;
            };
            //---------------------
            RE_TagManager.prototype.addRealTagIfNotExists = function (tagId, realTag) {
                if (this._mapOfRealTags.has(tagId))
                    return false;
                this._mapOfRealTags.set(tagId, realTag);
                return true;
            };
            //---------------------
            RE_TagManager.prototype.deleteRealTag = function (tagId) {
                return this._mapOfRealTags.delete(tagId);
            };
            //-----------------------------------------------------
            RE_TagManager.prototype.clearAllRealTags = function () {
                this._mapOfRealTags.clear();
            };
            //-----------------------------------------------------
            RE_TagManager.prototype.toJSONString = function () {
                return "";
            };
            return RE_TagManager;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_coreservices.RE_TagManager = RE_TagManager;
    })(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
});
/*
let nameAgeMapping = new Map();
 
//Set entries
nameAgeMapping.set("Lokesh", 37);
nameAgeMapping.set("Raj", 35);
nameAgeMapping.set("John", 40);
 
//Get entries
nameAgeMapping.get("John");     //40
 
//Check entry is present or not
nameAgeMapping.has("Lokesh");       //true
nameAgeMapping.has("Brian");        //false
 
//Size of Map with
nameAgeMapping.size;                //3
 
//Delete an entry
nameAgeMapping.delete("Lokesh");    // true
 
//Clear whole Map
nameAgeMapping.clear();             //Clear all entries
Iterate over Map entries
Use 'for...of' loop to iterate over map keys or values or entries.

Iterate Map Example
let nameAgeMapping = new Map();
 
nameAgeMapping.set("Lokesh", 37);
nameAgeMapping.set("Raj", 35);
nameAgeMapping.set("John", 40);
 
//Iterate over map keys
for (let key of nameAgeMapping.keys()) {
    console.log(key);                   //Lokesh Raj John
}
 
//Iterate over map values
for (let value of nameAgeMapping.values()) {
    console.log(value);                 //37 35 40
}
 
//Iterate over map entries
for (let entry of nameAgeMapping.entries()) {
    console.log(entry[0], entry[1]);    //"Lokesh" 37 "Raj" 35 "John" 40
}
 
//Using object destructuring
for (let [key, value] of nameAgeMapping) {
    console.log(key, value);            //"Lokesh" 37 "Raj" 35 "John" 40
}
*/ 
//# sourceMappingURL=RE_TagManager.js.map
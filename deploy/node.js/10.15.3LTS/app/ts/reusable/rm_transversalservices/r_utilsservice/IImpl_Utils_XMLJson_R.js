"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_transversalservices;
(function (rm_transversalservices) {
    var IImpl_Utils_XMLJson_R = (function () {
        function IImpl_Utils_XMLJson_R(owner) {
            this._owner = owner;
        }
        IImpl_Utils_XMLJson_R.prototype.xmlDocToJSON = function (xdoc) {
            function setObjects(obj, node) {
                var elemName;
                var cnode;
                var tObj;
                var cName = "";
                if (!node) {
                    return null;
                }
                if (!node.hasChildNodes()) {
                    return null;
                }
                var nodeCount = node.childNodes.length - 1;
                if (node.attributes.length > 0) {
                    setAttributes(obj, node);
                }
                obj._children = [];
                obj.Text = "";
                var n = 0;
                do {
                    cnode = node.childNodes[n];
                    switch (cnode.nodeType) {
                        case 1:
                            elemName = formatName(cnode.tagName);
                            if (cName != elemName) {
                                obj._children.push(elemName);
                            }
                            if (!obj[elemName]) {
                                obj[elemName] = [];
                            }
                            tObj = {};
                            obj[elemName].push(tObj);
                            if (cnode.attributes.length > 0) {
                                setAttributes(tObj, cnode);
                            }
                            if (!obj[elemName].contains) {
                                setHelpers(obj[elemName]);
                            }
                            cName = elemName;
                            if (cnode.hasChildNodes()) {
                                setObjects(tObj, cnode);
                            }
                            break;
                        case 3:
                            obj.Text += cnode.nodeValue.trim(cnode.nodeValue);
                            break;
                        case 4:
                            obj.Text += (cnode.text) ? cnode.text.trim(cnode.text) : cnode.nodeValue.trim(cnode.nodeValue);
                            break;
                    }
                } while (n++ < nodeCount);
            }
            function setHelpers(grpObj) {
                grpObj.getNodeByAttribute = function (attr, obj) {
                    if (this.length > 0) {
                        var cNode;
                        var maxLen = this.length - 1;
                        try {
                            do {
                                cNode = this[maxLen];
                                if (cNode[attr] == obj) {
                                    return cNode;
                                }
                            } while (maxLen--);
                        }
                        catch (e) {
                            return false;
                        }
                        return false;
                    }
                };
                grpObj.contains = function (attr, obj) {
                    if (this.length > 0) {
                        var maxLen = this.length - 1;
                        try {
                            do {
                                if (this[maxLen][attr] == obj) {
                                    return true;
                                }
                            } while (maxLen--);
                        }
                        catch (e) {
                            return false;
                        }
                        return false;
                    }
                };
                grpObj.indexOf = function (attr, obj) {
                    var pos = -1;
                    if (this.length > 0) {
                        var maxLen = this.length - 1;
                        try {
                            do {
                                if (this[maxLen][attr] == obj) {
                                    pos = maxLen;
                                }
                            } while (maxLen--);
                        }
                        catch (e) {
                            return -1;
                        }
                        return pos;
                    }
                };
                grpObj.SortByAttribute = function (col, dir) {
                    function getValue(pair, idx) {
                        var out = pair[idx];
                        out = (isNumeric(out)) ? parseFloat(out) : out;
                        return out;
                    }
                    function sortFn(a, b) {
                        var res = 0;
                        var tA, tB;
                        tA = getValue(a, col);
                        tB = getValue(b, col);
                        if (tA < tB) {
                            res = -1;
                        }
                        else if (tB < tA) {
                            res = 1;
                        }
                        if (dir) {
                            res = (dir.toUpperCase() == "DESC") ? (0 - res) : res;
                        }
                        return res;
                    }
                    if (this.length) {
                        this.sort(sortFn);
                    }
                };
                grpObj.SortByValue = function (dir) {
                    function getValue(pair) {
                        var out = pair.Text;
                        out = (isNumeric(out)) ? parseFloat(out) : out;
                        return out;
                    }
                    function sortFn(a, b) {
                        var res = 0;
                        var tA, tB;
                        tA = getValue(a);
                        tB = getValue(b);
                        if (tA < tB) {
                            res = -1;
                        }
                        else if (tB < tA) {
                            res = 1;
                        }
                        if (dir) {
                            res = (dir.toUpperCase() == "DESC") ? (0 - res) : res;
                        }
                        return res;
                    }
                    if (this.length) {
                        this.sort(sortFn);
                    }
                };
                grpObj.SortByNode = function (node, dir) {
                    function getValue(pair, node) {
                        var out = pair[node][0].Text;
                        out = (isNumeric(out)) ? parseFloat(out) : out;
                        return out;
                    }
                    function sortFn(a, b) {
                        var res = 0;
                        var tA, tB;
                        tA = getValue(a, node);
                        tB = getValue(b, node);
                        if (tA < tB) {
                            res = -1;
                        }
                        else if (tB < tA) {
                            res = 1;
                        }
                        if (dir) {
                            res = (dir.toUpperCase() == "DESC") ? (0 - res) : res;
                        }
                        return res;
                    }
                    if (this.length) {
                        this.sort(sortFn);
                    }
                };
            }
            function setAttributes(obj, node) {
                if (node.attributes.length > 0) {
                    var a = node.attributes.length - 1;
                    var attName;
                    obj._attributes = [];
                    do {
                        attName = String(formatName(node.attributes[a].name));
                        obj._attributes.push(attName);
                        obj[attName] = node.attributes[a].value.trim(node.attributes[a].value);
                    } while (a--);
                }
            }
            function formatName(name) {
                var regEx = /-/g;
                var tName = String(name).replace(regEx, "_");
                return tName;
            }
            try {
                if (!xdoc) {
                    return null;
                }
                var tmpObj = {};
                var xroot = (xdoc.nodeType == 9) ? xdoc.documentElement : xdoc;
                if (xdoc.nodeType == 3 || xdoc.nodeType == 4) {
                    return xdoc.nodeValue;
                }
                var isNumeric = function (s) {
                    var testStr = "";
                    if (s && typeof s == "string") {
                        testStr = s;
                    }
                    var pattern = /^((-)?([0-9]*)((\.{0,1})([0-9]+))?$)/;
                    return pattern.test(testStr);
                };
                setObjects(tmpObj, xroot);
                xdoc = null;
                xroot = null;
                return tmpObj;
            }
            catch (e) {
                return null;
            }
        };
        IImpl_Utils_XMLJson_R.prototype.getXMLJsonObjectTagText = function (aXmlJsonObject, jsonPath) {
            if (aXmlJsonObject === null)
                return "";
            var nativJsnObj = aXmlJsonObject.getNativeXmlJsonObject();
            if (nativJsnObj === null)
                return "";
            var tagText = this.getXMLJsonTagText(nativJsnObj, jsonPath);
            return tagText;
        };
        IImpl_Utils_XMLJson_R.prototype.getXMLJsonObjectTagArray = function (aXmlJsonObject, jsonPath) {
            if (aXmlJsonObject === null)
                return null;
            var nativJsnObj = aXmlJsonObject.getNativeXmlJsonObject();
            if (nativJsnObj === null)
                return null;
            var tagArray = this.getXMLJsonTagArray(nativJsnObj, jsonPath);
            return tagArray;
        };
        IImpl_Utils_XMLJson_R.prototype.getXMLJsonTagText = function (jsonObj, jsonPath) {
            var crtTag = this._owner._iUtilsStrings.getPrevContent(jsonPath, "/");
            if (crtTag === "") {
                if (jsonObj === null)
                    return "";
                if (jsonObj[jsonPath] === null)
                    return "";
                if (jsonObj[jsonPath][0] === null)
                    return "";
                if (jsonObj[jsonPath][0]["Text"] === null)
                    return "";
                return jsonObj[jsonPath][0]["Text"];
            }
            if (jsonObj[0] === null)
                return "";
            var nextJsonObj = null;
            nextJsonObj = jsonObj[crtTag][0];
            if (nextJsonObj === null)
                return "";
            var nextPath = this._owner._iUtilsStrings.getNextContent(jsonPath, "/");
            return this.getXMLJsonTagText(nextJsonObj, nextPath);
        };
        IImpl_Utils_XMLJson_R.prototype.getXMLJsonTagObject = function (jsonObj, jsonPath) {
            var crtTag = this._owner._iUtilsStrings.getPrevContent(jsonPath, "/");
            if (crtTag === "") {
                if (jsonObj === null)
                    return null;
                if (jsonObj[jsonPath] === null)
                    return null;
                if (jsonObj[jsonPath][0] === null)
                    return null;
                return jsonObj[jsonPath][0];
            }
            if (jsonObj === null)
                return null;
            var nextJsonObj = jsonObj[crtTag][0];
            if (nextJsonObj === null)
                return null;
            var nextPath = this._owner._iUtilsStrings.getNextContent(jsonPath, "/");
            return this.getXMLJsonTagObject(nextJsonObj, nextPath);
        };
        IImpl_Utils_XMLJson_R.prototype.getXMLJsonTagArray = function (jsonObj, jsonPath) {
            var crtTag = this._owner._iUtilsStrings.getPrevContent(jsonPath, "/");
            if (crtTag === "") {
                if (jsonObj === null)
                    return null;
                if (jsonObj[jsonPath] === null)
                    return null;
                return jsonObj[jsonPath];
            }
            if (jsonObj === null)
                return null;
            if (jsonObj[crtTag] === null)
                return null;
            var nextJsonObj = jsonObj[crtTag][0];
            if (nextJsonObj === null)
                return null;
            var nextPath = this._owner._iUtilsStrings.getNextContent(jsonPath, "/");
            return this.getXMLJsonTagArray(nextJsonObj, nextPath);
        };
        IImpl_Utils_XMLJson_R.prototype.getXMLJsonKeyValue = function (jsonObj, jsonXml1, jsonXml2, jsonXml3) {
            document.getElementById("demo").innerHTML += "start...";
            var json1 = jsonObj[jsonXml1];
            document.getElementById("demo").innerHTML += JSON.stringify(json1);
            if (json1 === null)
                return "not-found";
            document.getElementById("demo").innerHTML += '<br>';
            document.getElementById("demo").innerHTML += '<br>';
            var json0 = json1[0];
            document.getElementById("demo").innerHTML += JSON.stringify(json0);
        };
        IImpl_Utils_XMLJson_R.prototype.getXMLJsonKeyValue2 = function (jsonObject, jsonXmlPath) {
            var results = jsonObject["_children"];
            if (results.length > 0) {
                for (var i = 0; i < results.length; i++) {
                    var columnsIn = results[i];
                    for (var key in columnsIn) {
                        console.log(key + ' : ' + results[i][key]);
                    }
                }
            }
            else {
                console.log("No columns");
            }
        };
        return IImpl_Utils_XMLJson_R;
    }());
    rm_transversalservices.IImpl_Utils_XMLJson_R = IImpl_Utils_XMLJson_R;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=IImpl_Utils_XMLJson_R.js.map
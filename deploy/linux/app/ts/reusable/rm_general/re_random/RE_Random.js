"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var rmGeneralEntity = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");
var rm_general;
(function (rm_general) {
    var RE_Random = (function (_super) {
        __extends(RE_Random, _super);
        function RE_Random() {
            var _this = _super.call(this) || this;
            _this._nMin = 0;
            _this._nMax = 0;
            _this._nExtracted = 0;
            _this._pValues = null;
            _this._bLoop = false;
            _this._bNoRepeatLast = false;
            _this._nLastExtracted = -1;
            _this._pValidPlay = null;
            return _this;
        }
        RE_Random.prototype.initRandom = function (nMin, nMax, bLoop, bNoRepeatLast) {
            this._nMin = nMin;
            this._nMax = nMax;
            this._bLoop = bLoop;
            this._bNoRepeatLast = bNoRepeatLast;
            this._pValues = new Array(this.getNbValues());
            this._pValidPlay = new Array(this.getNbValues());
            this._nExtracted = 0;
            for (var i = 0; i < this.getNbValues(); i++) {
                this._pValues[i] = this._nMin + i;
                this._pValidPlay[i] = 1;
            }
        };
        RE_Random.prototype.setValidPlay = function (nIdxValidPlay, nValidPlay) {
            this._pValidPlay[nIdxValidPlay] = nValidPlay;
            if (nValidPlay == 1)
                this._nLastExtracted = -1;
        };
        RE_Random.prototype.testAllInvalid = function () {
            var bAllInvalid = false;
            var nbValid = 0;
            for (var i = 0; i < this.getNbValues(); i++) {
                nbValid = nbValid + this._pValidPlay[i];
            }
            if (nbValid == 0)
                bAllInvalid = true;
            return bAllInvalid;
        };
        RE_Random.prototype.resetRandom = function () {
            if (this._bNoRepeatLast) {
                while (this._nExtracted > 0) {
                    this._nExtracted--;
                    var nRest = this.getNbValues() - this._nExtracted - 1;
                    if ((nRest >= 0) && (nRest < this.getNbValues())) {
                        if (this._pValidPlay[this._pValues[nRest]] == 1) {
                            this._nLastExtracted = this._pValues[nRest];
                            break;
                        }
                        else {
                            this._nLastExtracted = -1;
                            continue;
                        }
                    }
                    else
                        this._nLastExtracted = -1;
                }
            }
            var nbValid = 0;
            for (var i = 0; i < this.getNbValues(); i++) {
                nbValid = nbValid + this._pValidPlay[i];
            }
            if (nbValid == 1)
                this._nLastExtracted = -1;
            this._nExtracted = 0;
            for (var i = 0; i < this.getNbValues(); i++) {
                this._pValues[i] = this._nMin + i;
                this._pValidPlay[i] = 1;
            }
        };
        RE_Random.prototype.generateRandom = function (nMin, nMax) {
            return this.randomInteger_v1(nMin, nMax);
        };
        RE_Random.prototype.randomInteger_v1 = function (nMin, nMax) {
            var nRange = nMax - nMin + 1;
            var random = Math.floor(Math.random() * 1000000) % nRange + nMin;
            return random;
        };
        RE_Random.prototype.randomInteger_v2 = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        RE_Random.prototype.randomRealNumberBetween = function (min, max) {
            return Math.random() * (max - min) + min;
        };
        RE_Random.prototype.getValuePos = function (nValue) {
            var nPos = -1;
            for (var i = 0; i < this.getNbValues(); i++) {
                if (this._pValues[i] == nValue) {
                    nPos = i;
                    break;
                }
            }
            return nPos;
        };
        RE_Random.prototype.getRandom = function () {
            if (this._nExtracted >= this.getNbValues()) {
                if (!this._bLoop)
                    return -1;
                this.resetRandom();
            }
            if (this.getNbValues() > 1) {
                if (this._nLastExtracted != -1) {
                    var nLatPos = this.getNbValues() - this._nExtracted - 1;
                    var nLastExtractedPos = this.getValuePos(this._nLastExtracted);
                    if (nLastExtractedPos >= 0) {
                        var aux = this._pValues[nLastExtractedPos];
                        this._pValues[nLastExtractedPos] = this._pValues[nLatPos];
                        this._pValues[nLatPos] = aux;
                        this._nExtracted++;
                    }
                }
            }
            var nRest = this.getNbValues() - this._nExtracted - 1;
            var nRandom = this.generateRandom(0, nRest);
            var aux = this._pValues[nRest];
            this._pValues[nRest] = this._pValues[nRandom];
            this._pValues[nRandom] = aux;
            if (this.getNbValues() > 1) {
                if (this._nLastExtracted != -1) {
                    this._nExtracted--;
                    var nLatPos = this.getNbValues() - this._nExtracted - 1;
                    var aux = this._pValues[nRest];
                    this._pValues[nRest] = this._pValues[nLatPos];
                    this._pValues[nLatPos] = aux;
                    nRest = nLatPos;
                }
            }
            this._nExtracted++;
            this._pValidPlay[this._pValues[nRest]] = 1;
            return this._pValues[nRest];
        };
        RE_Random.prototype.getNbValues = function () {
            return this._nMax - this._nMin + 1;
        };
        RE_Random.prototype.getValue = function (nIdxValue) {
            return this._pValues[nIdxValue];
        };
        RE_Random.prototype.generateRandom_old = function (nMin, nMax) {
            var nRange = nMax - nMin + 1;
            var random = Math.random() % nRange + nMin;
            return random;
        };
        return RE_Random;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_general.RE_Random = RE_Random;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=RE_Random.js.map
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
    var rm_general;
    (function (rm_general) {
        var RE_Random = /** @class */ (function (_super) {
            __extends(RE_Random, _super);
            ////////
            //----------- constructor 
            function RE_Random() {
                var _this = _super.call(this) || this;
                _this._nMin = 0;
                _this._nMax = 0;
                _this._nExtracted = 0;
                _this._pValues = null;
                _this._bLoop = false;
                _this._bNoRepeatLast = false;
                ////////
                _this._nLastExtracted = -1;
                _this._pValidPlay = null;
                return _this;
                ////////
            }
            //--------------------------------------------------
            RE_Random.prototype.initRandom = function (nMin, nMax, bLoop, bNoRepeatLast) {
                //srand(time(NULL));  //Changed from rand(). srand() seeds rand for you.
                this._nMin = nMin;
                this._nMax = nMax;
                this._bLoop = bLoop;
                this._bNoRepeatLast = bNoRepeatLast;
                this._pValues = new Array(this.getNbValues()); //(int*) malloc (sizeof(int) * GetNbValues());
                this._pValidPlay = new Array(this.getNbValues()); //(int*) malloc (sizeof(int) * GetNbValues());
                this._nExtracted = 0;
                for (var i = 0; i < this.getNbValues(); i++) {
                    this._pValues[i] = this._nMin + i;
                    this._pValidPlay[i] = 1;
                }
            };
            //------------------------------------
            //nValidPlay = 1; - Valid for play -> Don't need to be set
            //nValidPlay = 0; - Invalid for play -> Must be set
            RE_Random.prototype.setValidPlay = function (nIdxValidPlay, nValidPlay) {
                this._pValidPlay[nIdxValidPlay] = nValidPlay;
                if (nValidPlay == 1)
                    this._nLastExtracted = -1;
            };
            RE_Random.prototype.testAllInvalid = function () {
                ////////
                var bAllInvalid = false;
                var nbValid = 0;
                for (var i = 0; i < this.getNbValues(); i++) {
                    nbValid = nbValid + this._pValidPlay[i];
                }
                if (nbValid == 0)
                    bAllInvalid = true;
                ////////
                return bAllInvalid;
            };
            //--------------------------------------------------
            RE_Random.prototype.resetRandom = function () {
                ////////
                if (this._bNoRepeatLast) {
                    while (this._nExtracted > 0) {
                        this._nExtracted--; //last extracted
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
                ////////
                var nbValid = 0;
                for (var i = 0; i < this.getNbValues(); i++) {
                    nbValid = nbValid + this._pValidPlay[i];
                }
                if (nbValid == 1)
                    this._nLastExtracted = -1;
                ////////
                this._nExtracted = 0;
                for (var i = 0; i < this.getNbValues(); i++) {
                    this._pValues[i] = this._nMin + i;
                    this._pValidPlay[i] = 1;
                }
            };
            //------------------------------------
            RE_Random.prototype.generateRandom = function (nMin, nMax) {
                return this.randomInteger_v1(nMin, nMax);
            };
            //---------------------------------
            //Returns an integer random number between min (included) and max (included):
            RE_Random.prototype.randomInteger_v1 = function (nMin, nMax) {
                //srand(time(NULL));  //Changed from rand(). srand() seeds rand for you.
                var nRange = nMax - nMin + 1;
                var random = Math.floor(Math.random() * 1000000) % nRange + nMin;
                return random;
            };
            //---------------------------------
            //Returns an integer random number between min (included) and max (included):
            RE_Random.prototype.randomInteger_v2 = function (min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            };
            //--------------------------------------------
            //any real number between min (included) and max (not included):
            RE_Random.prototype.randomRealNumberBetween = function (min, max) {
                return Math.random() * (max - min) + min;
            };
            //---------------------------------
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
            //---------------------------------
            RE_Random.prototype.getRandom = function () {
                if (this._nExtracted >= this.getNbValues()) {
                    if (!this._bLoop)
                        return -1;
                    this.resetRandom();
                    //this._nExtracted++;
                }
                ////////
                if (this.getNbValues() > 1) {
                    if (this._nLastExtracted != -1) {
                        var nLatPos = this.getNbValues() - this._nExtracted - 1; //last position not used
                        var nLastExtractedPos = this.getValuePos(this._nLastExtracted);
                        if (nLastExtractedPos >= 0) {
                            var aux = this._pValues[nLastExtractedPos];
                            this._pValues[nLastExtractedPos] = this._pValues[nLatPos];
                            this._pValues[nLatPos] = aux;
                            this._nExtracted++;
                        }
                    }
                }
                ////////
                var nRest = this.getNbValues() - this._nExtracted - 1;
                var nRandom = this.generateRandom(0, nRest);
                var aux = this._pValues[nRest];
                this._pValues[nRest] = this._pValues[nRandom];
                this._pValues[nRandom] = aux;
                ////////
                if (this.getNbValues() > 1) {
                    if (this._nLastExtracted != -1) {
                        this._nExtracted--;
                        var nLatPos = this.getNbValues() - this._nExtracted - 1; //last position not used
                        var aux = this._pValues[nRest];
                        this._pValues[nRest] = this._pValues[nLatPos];
                        this._pValues[nLatPos] = aux;
                        nRest = nLatPos; //for return !!!
                        //this._nLastExtracted = -1;
                    }
                }
                ////////
                this._nExtracted++;
                this._pValidPlay[this._pValues[nRest]] = 1;
                return this._pValues[nRest];
            };
            //-----------------------------
            RE_Random.prototype.getNbValues = function () {
                return this._nMax - this._nMin + 1;
            };
            //--------------------------------------------
            RE_Random.prototype.getValue = function (nIdxValue) {
                return this._pValues[nIdxValue];
            };
            //------------------------------------
            RE_Random.prototype.generateRandom_old = function (nMin, nMax) {
                //srand(time(NULL));  //Changed from rand(). srand() seeds rand for you.
                var nRange = nMax - nMin + 1;
                var random = Math.random() % nRange + nMin;
                return random;
            };
            return RE_Random;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_general.RE_Random = RE_Random;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
/*
export module rm_general
{
  export class RE_Random2   extends rmGeneralEntity.rm_general.R_Entity
                          implements amGeneral.am_general.AE_Random
  {
    _nMin : number;
    _nMax : number;
    _nExtracted : number;
    _pValues : Array<number>;
    _bLoop : boolean;
    _bNoRepeatLast : boolean;
    ////////
    _nLastExtracted : number;
    ////////

    //----------- constructor
    constructor()
    {
      super();
      this._nMin = 0;
      this._nMax = 0;
      this._nExtracted = 0;
      this._pValues = null;
      this._bLoop = false;
      this._bNoRepeatLast = false;
      ////////
      this._nLastExtracted = -1;
      ////////
    }

    //--------------------------------------------------
    public initRandom(nMin : number, nMax: number, bLoop: boolean, bNoRepeatLast: boolean) : void
    {
      //srand(time(NULL));  //Changed from rand(). srand() seeds rand for you.
      this._nMin  = nMin;
      this._nMax  = nMax;
      this._bLoop = bLoop;
      this._bNoRepeatLast = bNoRepeatLast;
      this._pValues = new Array<number>(this.getNbValues()); //(int*) malloc (sizeof(int) * GetNbValues());

      this._nExtracted = 0;
      for (var i = 0; i < this.getNbValues(); i++)
        this._pValues[i] = this._nMin + i;
    }

    //--------------------------------------------------
    public resetRandom() : void
    {
      ////////
      if(this._nExtracted > 0)
      {
        this._nExtracted--;//last extracted
        var nRest:number = this.getNbValues() - this._nExtracted - 1;
        if( (nRest >= 0) && (nRest < this.getNbValues()))
          this._nLastExtracted = this._pValues[nRest];
        else
          this._nLastExtracted = -1;
      }
      ////////

      this._nExtracted = 0;
      for (var i = 0; i < this.getNbValues(); i++)
        this._pValues[i] = this._nMin + i;
    }

    //---------------------------------
    public getRandom() : number
    {
      if (this._nExtracted >= this.getNbValues())
      {
        if (! this._bLoop)
          return -1;
        this.resetRandom();
        //this._nExtracted++;
      }

      ////////
      if(this.getNbValues() > 1)
      {
        if(this._nLastExtracted != -1)
        {
          var nLatPos:number = this.getNbValues() - this._nExtracted - 1;//last position not used

          var aux:number = this._pValues[this._nLastExtracted];
          this._pValues[this._nLastExtracted] = this._pValues[nLatPos];
          this._pValues[nLatPos] = aux;

          this._nExtracted++;
        }
      }
      ////////

      var nRest:number = this.getNbValues() - this._nExtracted - 1;
      var nRandom:number = this.generateRandom(0, nRest);
  
      var aux:number = this._pValues[nRest];
      this._pValues[nRest] = this._pValues[nRandom];
      this._pValues[nRandom] = aux;

      ////////
      if(this.getNbValues() > 1)
      {
        if(this._nLastExtracted != -1)
        {
          this._nExtracted--;

          var nLatPos:number = this.getNbValues() - this._nExtracted - 1;//last position not used

          var aux:number = this._pValues[nRest];
          this._pValues[nRest] = this._pValues[nLatPos];
          this._pValues[nLatPos] = aux;
          nRest = nLatPos;//for return !!!

          this._nLastExtracted = -1;
        }
      }
      ////////

      this._nExtracted++;
  
      return this._pValues[nRest];
    }

    //-----------------------------
    public  getNbValues() : number
    {
      return this._nMax - this._nMin + 1;
    }

    //--------------------------------------------
    public getValue(nIdxValue: number) : number
    {
      return this._pValues[nIdxValue];
    }
  
    //------------------------------------
    public generateRandom(nMin : number, nMax: number) : number //Pass in range
    {
      //srand(time(NULL));  //Changed from rand(). srand() seeds rand for you.
      var nRange:number = nMax - nMin + 1;
      var random:number = Math.floor(Math.random()*1000) % nRange + nMin;
      return random;
    }
    
  }
}


/*

    CRandomUnique(int nMin, int nMax)
    {
      Init(nMin, nMax);
    };

    virtual ~CRandomUnique()
    {
      free( m_pValues);
    };

    int GetRandom()
    {
        int nRest = GetNbValues() - m_nExtracted - 1;
        int nRandom = GenerateRandom(0, nRest);

        int aux = m_pValues[nRest];
        m_pValues[nRest] = m_pValues[nRandom];
        m_pValues[nRandom] = aux;

        m_nExtracted++;
        if (m_nExtracted > GetNbValues())
        {
            Init(m_nMin, m_nMax);
            m_nExtracted++;
        }

        return m_pValues[nRest];
    };
    int GetNbValues(){ return m_nMax - m_nMin + 1; };
    int GetValue(int nIdxValue)
    {
        return m_pValues[nIdxValue];
    }
protected:
    void Init(int nMin, int nMax)
    {
        srand(time(NULL));  //Changed from rand(). srand() seeds rand for you.
        m_nMin = nMin;
        m_nMax = nMax;
        m_nExtracted = 0;
        m_pValues = (int*) malloc (sizeof(int) * GetNbValues());
        for (int i = 0; i < GetNbValues(); i++)
            m_pValues[i] = m_nMin + i;
    };
    int GenerateRandom(int nMin, int nMax) //Pass in range
    {
        //srand(time(NULL));  //Changed from rand(). srand() seeds rand for you.
        int nRange = nMax - nMin + 1;
        int random = rand() % nRange + nMin;
        return random;
    }
    
protected:
    int m_nMin;
    int m_nMax;
    int m_nExtracted;
    int* m_pValues;
};
*/
/*

    CRandomUnique(int nMin, int nMax)
    {
      Init(nMin, nMax);
    };

    virtual ~CRandomUnique()
    {
      free( m_pValues);
    };

    int GetRandom()
    {
        int nRest = GetNbValues() - m_nExtracted - 1;
        int nRandom = GenerateRandom(0, nRest);

        int aux = m_pValues[nRest];
        m_pValues[nRest] = m_pValues[nRandom];
        m_pValues[nRandom] = aux;

        m_nExtracted++;
        if (m_nExtracted > GetNbValues())
        {
            Init(m_nMin, m_nMax);
            m_nExtracted++;
        }

        return m_pValues[nRest];
    };
    int GetNbValues(){ return m_nMax - m_nMin + 1; };
    int GetValue(int nIdxValue)
    {
        return m_pValues[nIdxValue];
    }
protected:
    void Init(int nMin, int nMax)
    {
        srand(time(NULL));  //Changed from rand(). srand() seeds rand for you.
        m_nMin = nMin;
        m_nMax = nMax;
        m_nExtracted = 0;
        m_pValues = (int*) malloc (sizeof(int) * GetNbValues());
        for (int i = 0; i < GetNbValues(); i++)
            m_pValues[i] = m_nMin + i;
    };
    int GenerateRandom(int nMin, int nMax) //Pass in range
    {
        //srand(time(NULL));  //Changed from rand(). srand() seeds rand for you.
        int nRange = nMax - nMin + 1;
        int random = rand() % nRange + nMin;
        return random;
    }
    
protected:
    int m_nMin;
    int m_nMax;
    int m_nExtracted;
    int* m_pValues;
};
*/ 
//# sourceMappingURL=RE_Random.js.map
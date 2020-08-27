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
    var RE_Queue = (function (_super) {
        __extends(RE_Queue, _super);
        function RE_Queue() {
            var _this = _super.call(this) || this;
            _this._head = 0;
            _this._tail = 0;
            _this._capacityMask = 0x3;
            _this._list = new Array(4);
            return _this;
        }
        RE_Queue.prototype.peekAt = function (index) {
            var i = index;
            if ((i !== (i | 0))) {
                return void 0;
            }
            var len = this.size();
            if (i >= len || i < -len)
                return undefined;
            if (i < 0)
                i += len;
            i = (this._head + i) & this._capacityMask;
            return this._list[i];
        };
        RE_Queue.prototype.get = function (i) {
            return this.peekAt(i);
        };
        ;
        RE_Queue.prototype.peek = function () {
            if (this._head === this._tail)
                return undefined;
            return this._list[this._head];
        };
        ;
        RE_Queue.prototype.peekFront = function () {
            return this.peek();
        };
        ;
        RE_Queue.prototype.peekBack = function () {
            return this.peekAt(-1);
        };
        ;
        RE_Queue.prototype.size = function () {
            if (this._head === this._tail)
                return 0;
            if (this._head < this._tail)
                return this._tail - this._head;
            else
                return this._capacityMask + 1 - (this._head - this._tail);
        };
        ;
        RE_Queue.prototype.unshift = function (item) {
            if (item === undefined)
                return this.size();
            var len = this._list.length;
            this._head = (this._head - 1 + len) & this._capacityMask;
            this._list[this._head] = item;
            if (this._tail === this._head)
                this._growArray();
            if (this._head < this._tail)
                return this._tail - this._head;
            else
                return this._capacityMask + 1 - (this._head - this._tail);
        };
        ;
        RE_Queue.prototype.shift = function () {
            var head = this._head;
            if (head === this._tail)
                return undefined;
            var item = this._list[head];
            this._list[head] = undefined;
            this._head = (head + 1) & this._capacityMask;
            if (head < 2 && this._tail > 10000 && this._tail <= this._list.length >>> 2)
                this._shrinkArray();
            return item;
        };
        ;
        RE_Queue.prototype.push = function (item) {
            if (item === undefined)
                return this.size();
            var tail = this._tail;
            this._list[tail] = item;
            this._tail = (tail + 1) & this._capacityMask;
            if (this._tail === this._head) {
                this._growArray();
            }
            if (this._head < this._tail)
                return this._tail - this._head;
            else
                return this._capacityMask + 1 - (this._head - this._tail);
        };
        ;
        RE_Queue.prototype.pop = function () {
            var tail = this._tail;
            if (tail === this._head)
                return undefined;
            var len = this._list.length;
            this._tail = (tail - 1 + len) & this._capacityMask;
            var item = this._list[this._tail];
            this._list[this._tail] = undefined;
            if (this._head < 2 && tail > 10000 && tail <= len >>> 2)
                this._shrinkArray();
            return item;
        };
        ;
        RE_Queue.prototype.removeOne = function (index) {
            var i = index;
            if ((i !== (i | 0))) {
                return void 0;
            }
            if (this._head === this._tail)
                return void 0;
            var size = this.size();
            var len = this._list.length;
            if (i >= size || i < -size)
                return void 0;
            if (i < 0)
                i += size;
            i = (this._head + i) & this._capacityMask;
            var item = this._list[i];
            var k;
            if (index < size / 2) {
                for (k = index; k > 0; k--) {
                    this._list[i] = this._list[i = (i - 1 + len) & this._capacityMask];
                }
                this._list[i] = void 0;
                this._head = (this._head + 1 + len) & this._capacityMask;
            }
            else {
                for (k = size - 1 - index; k > 0; k--) {
                    this._list[i] = this._list[i = (i + 1 + len) & this._capacityMask];
                }
                this._list[i] = void 0;
                this._tail = (this._tail - 1 + len) & this._capacityMask;
            }
            return item;
        };
        ;
        RE_Queue.prototype.remove = function (index, count) {
            var i = index;
            var removed;
            var del_count = count;
            if ((i !== (i | 0))) {
                return void 0;
            }
            if (this._head === this._tail)
                return void 0;
            var size = this.size();
            var len = this._list.length;
            if (i >= size || i < -size || count < 1)
                return void 0;
            if (i < 0)
                i += size;
            if (count === 1 || !count) {
                removed = new Array(1);
                removed[0] = this.removeOne(i);
                return removed;
            }
            if (i === 0 && i + count >= size) {
                removed = this.toArray();
                this.clear();
                return removed;
            }
            if (i + count > size)
                count = size - i;
            var k;
            removed = new Array(count);
            for (k = 0; k < count; k++) {
                removed[k] = this._list[(this._head + i + k) & this._capacityMask];
            }
            i = (this._head + i) & this._capacityMask;
            if (index + count === size) {
                this._tail = (this._tail - count + len) & this._capacityMask;
                for (k = count; k > 0; k--) {
                    this._list[i = (i + 1 + len) & this._capacityMask] = void 0;
                }
                return removed;
            }
            if (index === 0) {
                this._head = (this._head + count + len) & this._capacityMask;
                for (k = count - 1; k > 0; k--) {
                    this._list[i = (i + 1 + len) & this._capacityMask] = void 0;
                }
                return removed;
            }
            if (i < size / 2) {
                this._head = (this._head + index + count + len) & this._capacityMask;
                for (k = index; k > 0; k--) {
                    this.unshift(this._list[i = (i - 1 + len) & this._capacityMask]);
                }
                i = (this._head - 1 + len) & this._capacityMask;
                while (del_count > 0) {
                    this._list[i = (i - 1 + len) & this._capacityMask] = void 0;
                    del_count--;
                }
                if (index < 0)
                    this._tail = i;
            }
            else {
                this._tail = i;
                i = (i + count + len) & this._capacityMask;
                for (k = size - (count + index); k > 0; k--) {
                    this.push(this._list[i++]);
                }
                i = this._tail;
                while (del_count > 0) {
                    this._list[i = (i + 1 + len) & this._capacityMask] = void 0;
                    del_count--;
                }
            }
            if (this._head < 2 && this._tail > 10000 && this._tail <= len >>> 2)
                this._shrinkArray();
            return removed;
        };
        ;
        RE_Queue.prototype.splice = function (index, count) {
            var elements = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                elements[_i - 2] = arguments[_i];
            }
            var i = index;
            if ((i !== (i | 0))) {
                return void 0;
            }
            var size = this.size();
            if (i < 0)
                i += size;
            if (i > size)
                return void 0;
            if (arguments.length > 2) {
                var k;
                var temp;
                var removed;
                var arg_len = arguments.length;
                var len = this._list.length;
                var arguments_index = 2;
                if (!size || i < size / 2) {
                    temp = new Array(i);
                    for (k = 0; k < i; k++) {
                        temp[k] = this._list[(this._head + k) & this._capacityMask];
                    }
                    if (count === 0) {
                        removed = [];
                        if (i > 0) {
                            this._head = (this._head + i + len) & this._capacityMask;
                        }
                    }
                    else {
                        removed = this.remove(i, count);
                        this._head = (this._head + i + len) & this._capacityMask;
                    }
                    while (arg_len > arguments_index) {
                        this.unshift(arguments[--arg_len]);
                    }
                    for (k = i; k > 0; k--) {
                        this.unshift(temp[k - 1]);
                    }
                }
                else {
                    temp = new Array(size - (i + count));
                    var leng = temp.length;
                    for (k = 0; k < leng; k++) {
                        temp[k] = this._list[(this._head + i + count + k) & this._capacityMask];
                    }
                    if (count === 0) {
                        removed = [];
                        if (i != size) {
                            this._tail = (this._head + i + len) & this._capacityMask;
                        }
                    }
                    else {
                        removed = this.remove(i, count);
                        this._tail = (this._tail - leng + len) & this._capacityMask;
                    }
                    while (arguments_index < arg_len) {
                        this.push(arguments[arguments_index++]);
                    }
                    for (k = 0; k < leng; k++) {
                        this.push(temp[k]);
                    }
                }
                return removed;
            }
            else {
                return this.remove(i, count);
            }
        };
        ;
        RE_Queue.prototype.clear = function () {
            this._head = 0;
            this._tail = 0;
        };
        ;
        RE_Queue.prototype.isEmpty = function () {
            return this._head === this._tail;
        };
        ;
        RE_Queue.prototype.toArray = function () {
            return this._copyArray(false);
        };
        RE_Queue.prototype._fromArray = function (array) {
            for (var i = 0; i < array.length; i++)
                this.push(array[i]);
        };
        RE_Queue.prototype._copyArray = function (fullCopy) {
            var newArray = [];
            var list = this._list;
            var len = list.length;
            var i;
            if (fullCopy || this._head > this._tail) {
                for (i = this._head; i < len; i++)
                    newArray.push(list[i]);
                for (i = 0; i < this._tail; i++)
                    newArray.push(list[i]);
            }
            else {
                for (i = this._head; i < this._tail; i++)
                    newArray.push(list[i]);
            }
            return newArray;
        };
        RE_Queue.prototype._growArray = function () {
            if (this._head) {
                this._list = this._copyArray(true);
                this._head = 0;
            }
            this._tail = this._list.length;
            this._list.length *= 2;
            this._capacityMask = (this._capacityMask << 1) | 1;
        };
        RE_Queue.prototype._shrinkArray = function () {
            this._list.length >>>= 1;
            this._capacityMask >>>= 1;
        };
        RE_Queue.prototype.test_01 = function () {
            this.push("awesome");
            this.unshift("typescript");
            var last = this.pop();
            var first = this.shift();
            this.toArray();
            this.peekBack();
            this.peekFront();
            this.get(1);
            var entry = this.peekAt(1);
            if (entry !== undefined) {
                entry.size();
            }
            this.remove(1, 1);
            this.removeOne(1);
            this.toString();
            var len = this.size();
            this.splice(len, 0, "8", "9", "10");
            len = this.size();
            this.splice(3, 1, "44", "55", "66");
            this.isEmpty();
            this.clear();
        };
        return RE_Queue;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_general.RE_Queue = RE_Queue;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=RE_Queue.js.map
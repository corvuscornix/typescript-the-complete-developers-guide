"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sortable = /** @class */ (function () {
    function Sortable() {
    }
    Sortable.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sortable;
}());
exports.Sortable = Sortable;

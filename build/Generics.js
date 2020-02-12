"use strict";
// NOTHING TO DO WITH GENERICS
var addOne = function (a) {
    return a + 1;
};
var addTwo = function (a) {
    return a + 2;
};
var addThree = function (a) {
    return a + 3;
};
// BETTER CODE: Reusable
var add = function (a, b) {
    return a + b;
};
add(10, 1);
add(10, 2);
add(10, 3);
// WAY 1
var HoldNumber = /** @class */ (function () {
    function HoldNumber(data) {
        this.data = data;
    }
    return HoldNumber;
}());
var HoldString = /** @class */ (function () {
    function HoldString(data) {
        this.data = data;
    }
    return HoldString;
}());
var holdNumber = new HoldNumber();
holdNumber.data = 123;
var holdString = new HoldString();
holdString.data = 'addsfgg';
// WAY2: GENERICS
var HoldAnything = /** @class */ (function () {
    function HoldAnything(data) {
        this.data = data;
    }
    return HoldAnything;
}());
// T = Reference to generic Type
var HoldAnything2 = /** @class */ (function () {
    function HoldAnything2(data) {
        this.data = data;
    }
    return HoldAnything2;
}());
var holdNumber1 = new HoldAnything();
holdNumber1.data = 123;
var holdString1 = new HoldAnything();
holdString1.data = 'sfgddgdg';

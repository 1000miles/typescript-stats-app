"use strict";
var rectangular = function (state) {
    return {
        area: function () {
            return state.height * state.width;
        }
    };
};
var openable = function (state) {
    return {
        toggleOpen: function () {
            state.open = !state.open;
        },
        area: function () { }
    };
};
var buildRectangleWindow = function (state) {
    // Take the state object of rectangle and assign to state
    // and take state object of openable and assign to state
    return Object.assign(state, rectangular(state), openable(state));
};
var rectangleWindow = buildRectangleWindow({
    height: 20,
    width: 20,
    open: false
});
rectangleWindow.open;
rectangleWindow.toggleOpen();
rectangleWindow.open;

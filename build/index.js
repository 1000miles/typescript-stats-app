"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var matches = fs_1.default
    .readFileSync('football.csv', {
    encoding: 'utf-8'
})
    .split('\n') // Split the string after new line
    // Map through row of strings and return an array of strings
    .map(function (row) {
    // Split each row at ',' and return
    return row.split(',');
});
console.log(matches);

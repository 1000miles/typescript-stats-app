"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        // Initiliaze data as two dimensional data of strings
        this.data = [];
    }
    ;
    CsvFileReader.prototype.read = function () {
        //console.log(this.data);
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: 'utf-8'
        })
            .split('\n') // Split the string after new line
            // Map through row of strings and return an array of strings
            .map(function (row) {
            // Split each row at ',' and return
            return row.split(',');
        });
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;

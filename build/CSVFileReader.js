"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var utils_1 = require("./utils");
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        // Initiliaze data as two dimensional data of strings
        this.data = [];
    }
    ;
    CsvFileReader.prototype.read = function () {
        console.log(this.data);
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: 'utf-8'
        })
            .split('\n') // Split the string after new line
            // Map through row of strings and return an array of strings
            .map(function (row) {
            // Split each row at ',' and return
            return row.split(',');
        })
            .map(function (row) {
            return [
                // Take the first element of each row and return
                utils_1.dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]) // Example: '1'
                // Convert string into matchable enum
            ];
        });
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;

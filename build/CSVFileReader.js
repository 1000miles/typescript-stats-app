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
        // Note: We only use 1x brackets as MatchData[] here since Tuple MatchData is already an array
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
            // Map through row of strings from football.csv
            // Return an array with Date, string, number or enum MatchResult
            .map(function (row) {
            return [
                // Take the first element of each row and return
                utils_1.dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                // Convert string into matchable enum
                // MatchResult => Overwrite with Type Assertion
                row[5],
                row[6]
            ];
        });
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;

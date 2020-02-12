"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Get data strings and return a date
exports.dateStringToDate = function (dateString) {
    // Input from football.csv: 28/10/2018
    var dateParts = dateString
        .split('/') // ['28', '10', '2018']
        // Map through arrray of date strings and return a number
        .map(function (value) {
        // Convert value (string) into integers and return
        return parseInt(value);
    });
    // Return a new instance of date as:
    // 'dateParts[2]' = year'; dateParts[1]' = month;
    // 'dataParts[1] - 1' = month inside date constructor is zero indexed, jan = 0
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};

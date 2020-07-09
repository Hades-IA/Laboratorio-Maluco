const fs = require("fs");
const util = require("util");

class Processor {
    static Proces(data) {
        const splitedData = data.split("\r\n");
        const arrayRows = [];
        const Rows = [];

        splitedData.forEach(row => arrayRows.push(row.split(",")));
        arrayRows.forEach(array => {
            array.forEach(row => Rows.push(row.split(";")))
        });
        const resultFilter = Rows.map(array => {
            return array.filter(row => row !== '')
        }).filter(array => array.length > 0);
        return resultFilter;
    }
};

module.exports = Processor;
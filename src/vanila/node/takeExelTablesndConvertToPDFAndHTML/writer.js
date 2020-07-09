const fs = require("fs");
const util = require("util");
class Writer {
    constructor() {
        this.writer = util.promisify(fs.writeFile);
    };

    async Write(fileName, data) {
        try {
            await this.writer(fileName, data);
            return true;
        } catch (error) {
            throw new Error(error)
            return false;
        }

    };

};

module.exports = Writer;
const ejs = require("ejs")
class HTMLParser {

    static async ParserHTML(table) {
        return await ejs.renderFile("./TableHTML.ejs", { header: table.header, body: table.rows });
    }

}

module.exports = HTMLParser;
const Writer = require("../takeExelTablesndConvertToPDFAndHTML/Writer");
const Reader = require("../takeExelTablesndConvertToPDFAndHTML/Reader");

async function Main() {
    const text = new Reader();
    const htmlTxt = await text.Read("./titleHtml.txt");
    const splitHtml = htmlTxt.split("<RePlaceITs>").filter(text => text != false);
    let titles = splitHtml
    const escritor = new Writer;

    escritor.Write('tabela.csv', "name;stat;stat-min;stat-max;set;rarety\r\n" + titles
        .map(text => text + ";;;;;\r\n").reduce((acc, data) => acc + data))


};

Main();
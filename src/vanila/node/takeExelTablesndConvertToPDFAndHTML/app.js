const fs = require("fs");
const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");
const HTMLTable = require("./HTMLParser");
const Writer = require("./writer")
async function Main() {
    const ler = new Reader();
    const tablesData = await ler.Read("./tables.csv");
    const dataTable = Processor.Proces(tablesData);
    const tables = new Table(dataTable);
    const html = await HTMLTable.ParserHTML(tables);
    const escritor = new Writer;
    escritor.Write('HTMLDinamico.html', html);

};







































fs.writeFile("./hellow.txt", "new content", (err) => {
    if (err) throw console.error(err)
})
fs.readFile('./hellow.txt', { encoding: 'utf-8' }, (error, data) => {
    if (error) throw console.error(error);
    else {
        console.log(data);
    };

});

function payDay(deposit) {
    fs.readFile("./user.json", { encoding: "utf-8" }, (error, data) => {
        if (error) throw new Error(error);
        else {
            let JSONdata = JSON.parse(data);
            console.log('money is ' + JSONdata.money);
            JSONdata.money = JSONdata.money + deposit;

            fs.writeFile("./user.json", JSON.stringify(JSONdata), (err) => {
                if (err) throw new Error(err);
            })

            console.log('money is update to ' + JSONdata.money);
        };


    });
};




payDay(1000)


Main();
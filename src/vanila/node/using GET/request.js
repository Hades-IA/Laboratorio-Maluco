const fs = require("fs");
const Writer = require("./Writer");
const axios = require('axios');
async function Main() {
    res = await axios.all([
        axios.get('https://www.papanduva.sc.gov.br/'),
        axios.get('https://www.papanduva.sc.gov.br/styles/zbox/zbox-layout/estruturas/cabecalho-coluna-direita.css')
    ]).then(axios.spread((papanduvaHTMLRes, papanduvaCSSRes) => {
        return {
            html: papanduvaHTMLRes.data,
            css: papanduvaCSSRes.data
        }
    })).catch(error => {
        console.log(error);
    });
    writering = new Writer();
    writering.Write('NewHTMLClone.html', res.html);
    writering.Write('NewCSSClone.css', res.css);

}
Main()


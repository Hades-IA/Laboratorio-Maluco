
const axios = require('axios');
const ProcessorString = require("./ProcessorString");



async function Main() {
    res = await axios.all([
        axios.get('https://chaotic.fandom.com/wiki/Aggroar')

    ]).then(axios.spread((HTMLRes) => {
        return {
            html: HTMLRes.data

        }
    })).catch(error => {
        console.log(error);
    });

    const transformHtml = new ProcessorString();

    const aside = await transformHtml.FindTagHTML([res.html], "aside");
    const sections = await transformHtml.FindTagHTML(aside, "section");
    const section = [sections[0]];
    const linka = await transformHtml.FindTagHTML(section, "a");
    const h2 = await transformHtml.FindTagHTML(aside, "h2");
    const statsHtml = await transformHtml.FindTagHTML(aside, "b")
    const statsString = await transformHtml.InnerHTML(statsHtml, "b");
    const name = [h2[0]];
    const title = await transformHtml.InnerHTML(name, "h2");
    const linkSet = [linka[1]];
    const set = await transformHtml.InnerHTML(linkSet, "a");
    console.log(title, set, statsString);


}

Main()
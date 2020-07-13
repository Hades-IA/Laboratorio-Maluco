class ProcessorString {
    constructor() {
        this.tag;
        this.string;

    };


    FindTagHTML(arrayhtml, tag) {

        this.tag = tag;
        let result = [];
        var spliter = "tiuLUluClayton";
        arrayhtml.forEach(html => {
            let tagReplace = html.split(`<${tag}`).join(spliter);
            let tagCompleteReplace = tagReplace.split(`</${tag}`).join("/finded" + spliter);


            let arraySplited = tagCompleteReplace.split(spliter);


            let regxp = new RegExp(`</${tag}`, "gm");
            let mapArrayData = arraySplited.map(data => {
                let matching = new RegExp("/finded", "gm");
                let matched = data.match(matching) || [];
                if (matched.length > 0) return `<${tag} ` + data.split("/finded").join(`</${tag}>`);
                else {
                    return data
                }

            })

            let filterArrayData = mapArrayData.filter(data => {
                let matched = data.match(regxp) || [];

                return matched.length > 0;
            })
            filterArrayData.forEach(data => result.push(data));


        });


        return result;


    };


    InnerHTML(htmlArray, tag) {


        const removeTagInit = htmlArray.map(nodeListHtml => nodeListHtml.split(`<${tag} `)).map(nodeListHtml => {
            return nodeListHtml
                .filter(data => data != false)
                .reduce((acc, data) => acc + data)
        });
        const removeTagEnd = removeTagInit
            .map(restString => restString.split(`</${tag}>`))
            .map(data => data
                .filter(data => data != false)
                .reduce((acc, data) => acc + data));
        const changeRestOfTag = removeTagEnd.map(data => data.split(">").join("eNdliNe tiululucleiton"));

        const stringPure = changeRestOfTag.map(data => data.split("tiululucleiton")
            .filter(endline => {
                let matching = new RegExp("eNdliNe", "gm");
                let matched = endline.match(matching) || [];

                return matched.length < 1;
            })
            .reduce((acc, data) => acc + data));
        return stringPure;

    };
};

module.exports = ProcessorString;
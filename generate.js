const fs = require("fs");
const path = require("path")
const { exit } = require("process");

const colors = JSON.parse(fs.readFileSync("colors.json", "utf-8"))
for (let file of fs.readdirSync("templates")) {
    let template = fs.readFileSync(`templates/${file}`, "utf-8")
    let regex = (/\@(.*?)\@/g)
    let i = 0
    while (template.indexOf("@") != -1) {
        while ((arr = regex.exec(template)) !== null) {
            let value = arr[0].slice(1, -1);
            let [color, alpha] = value.split(":")
            if (!colors[color]) {
                let line = template.substr(0, arr.index).split('\n').length;
                console.error(`could not find color: ${arr[0]} at ${path.resolve(`templates/${file}:${line}`)}`)
                exit()
            }
            let out = colors[color]
            if (alpha) {
                out += alpha
            }
            template = template.replace(arr[0], out)
        }
        if ((template.match(/\@/g) || []).length == 1) {
            console.error("odd number of @s :<")
            exit()
        }
    }

    fs.writeFileSync(`themes/${file}`, template)
}
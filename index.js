const fs = require("fs")

let file = fs.readFileSync("C:/dev/ariake-dark-2.0/themes/ariake-dark.json", "utf-8")
let colors = [... new Set(file.match(/\"#.*?\"/g).map(c => "#" + c.substring(2, 8)))]

fs.writeFileSync("all_colors.json", JSON.stringify(colors))
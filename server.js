import "dotenv/config";

import app from "./src/app.js";

const rotas = {
    "/": "Curso de sla",
    "/poggers": "poggers"
}

app.listen(3000, () => { console.log("servidor ta on") })
import express from "express";
import {dirname, join} from "path";
import {fileURLToPath} from "url";
import indexRouter from "./router/index.js";

const app = express();

const _dirname = dirname(fileURLToPath(import.meta.url));

app.set("views", join(_dirname , "views"));
app.set("views engine", "ejs");
app.use(indexRouter);

app.use(express.static(join(_dirname, "public/css")));
app.use(express.static(join(_dirname, "public/imgs")));

app.listen(3000);
console.log("Server on port 3000");

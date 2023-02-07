"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const route1_routes_1 = require("./routes/route1.routes");
const route2_routes_1 = require("./routes/route2.routes");
const route3_routes_1 = require("./routes/route3.routes");
const express = require("express");
let cors = require('cors');
const app = express();
app.use(cors());
app.get("/", route1_routes_1.router1);
app.use("/wholeInfo", route2_routes_1.router2);
app.use("/search", route3_routes_1.router3);
app.listen(8080, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("server is running");
}));

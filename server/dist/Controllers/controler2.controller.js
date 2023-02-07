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
exports.secondController = void 0;
const DataFetching_repository_1 = require("../repository/DataFetching.repository");
const interfaceRequired_1 = require("../models/interfaceRequired");
const express = require("express");
let cors = require('cors');
const app = express();
app.use(cors());
function secondController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let middleWareResponse = [];
        let url = `https://stage-api.homluv.com/api/nlc/detail?title=${req.query.title}`;
        console.log(url);
        try {
            const data = yield (0, DataFetching_repository_1.getData)(url);
            data.map((item) => {
                let mappedData = new interfaceRequired_1.RequiredDataHelper(item);
                middleWareResponse.push(mappedData);
            });
            res.send(middleWareResponse);
        }
        catch (_a) {
            console.log("There is some error fetching data.");
            res.send(middleWareResponse);
        }
    });
}
exports.secondController = secondController;

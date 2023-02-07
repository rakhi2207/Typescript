import { RequiredData,RequiredDataHelper } from '../models/interfaceRequired';
import {getData} from '../repository/DataFetching.repository';
import express=require('express')
import  { Request, Response } from "express";
let cors = require('cors');
const app = express();
app.use(cors());

export async function firstController(req:Request,res:Response)
{   
    let middleWareResponse: RequiredDataHelper[] = [];
    let url=`https://stage-api.homluv.com/api/nlc/${req.query.type}?pagesize=${req.query.pagesize}&page=${req.query.page}&category=${req.query.category}`;
    console.log(url);
    try {
        const data:RequiredData[]= await getData(url);
          data.map((item:RequiredData) => {
            let mappedData = new RequiredDataHelper(item);
            middleWareResponse.push(mappedData);
          });
          res.send(middleWareResponse);
      } catch {
        console.log("There is some error fetching data.");
        res.send(middleWareResponse);
      }
}
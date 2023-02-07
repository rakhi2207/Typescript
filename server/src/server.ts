import {router1}  from './routes/route1.routes';
import {router2}  from './routes/route2.routes';
import {router3}  from './routes/route3.routes';
import express=require('express')
let cors = require('cors');
const app = express();
app.use(cors());

app.get("/",router1);

app.use("/wholeInfo",router2)

app.use("/search",router3)

app.listen(8080,async()=>{
    console.log("server is running");
});
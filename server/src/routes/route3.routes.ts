import { thirdController } from '../Controllers/controler3.controller';
import express=require('express')
let cors = require('cors');
const app = express();
app.use(cors());
console.log("kjsabl");
export const router3=express.Router();
router3.get("/",thirdController);
import { firstController } from '../Controllers/controler1.controllers';
import express=require('express')
let cors = require('cors');
const app = express();
app.use(cors());

export const router1=express.Router();
router1.get("/",firstController);

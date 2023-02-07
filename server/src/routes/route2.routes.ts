import { secondController } from '../Controllers/controler2.controller';
import express=require('express')
let cors = require('cors');
const app = express();
app.use(cors());

export const router2=express.Router();
router2.get("/",secondController);
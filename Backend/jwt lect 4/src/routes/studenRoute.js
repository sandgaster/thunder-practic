import {signup , user , login} from "../controller/studentController.js";
import express from "express"


const router = express.Router()

router.post("/bulk", signup);

router.get("/user", user);
router.post("/login", login);

export default router
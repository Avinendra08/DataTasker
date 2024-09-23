import {Router} from "express";
import { getAllContacts, getContactById } from "../controllers/controller.js";

const router = Router();

router.get("/contactlist",getAllContacts);
router.get("/contacts/:id",getContactById);

export default router;
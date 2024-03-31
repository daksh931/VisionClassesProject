import express  from "express";
import { newOrder } from "../controllers/OrderController.js";
import { isAuthorized } from "../middleware/auth.js";



const router = express.Router();

router.post("/newOrder",isAuthorized,newOrder);

const orderRouter = router;
export default orderRouter;
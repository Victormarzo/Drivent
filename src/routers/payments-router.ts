import { Router } from "express";
import { authenticateToken, validateBody } from "@/middlewares";
import { getPayment } from "@/controllers";

const paymentsRouter = Router();
paymentsRouter
  .all("/*", authenticateToken)
  .get("/", getPayment);

export { paymentsRouter };

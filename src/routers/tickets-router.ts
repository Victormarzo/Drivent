import { Router } from "express";
import { authenticateToken, validateBody } from "@/middlewares";
import { getTicketsTypes, getTickets, postNewTicket } from "@/controllers";
import { ticketTypeSchema } from "@/schemas";

const ticketsRouter = Router();

ticketsRouter
  .all("/*", authenticateToken)
  .get("/types", getTicketsTypes)
  .get("/", getTickets)
  .post("/", validateBody(ticketTypeSchema), postNewTicket);
export { ticketsRouter };

import { AuthenticatedRequest } from "@/middlewares";
import httpStatus from "http-status";
import { Response } from "express";
import paymentsService from "@/services/payments-service";

export async function getPayment(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { ticketId } = req.query;
  if (!ticketId) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }  
  try {
    await paymentsService.checkTicket(Number(ticketId), Number(userId));
    const payment = await paymentsService.getPayment(Number(ticketId));
    return res.send(payment).status(httpStatus.OK);
  } catch (error) {
    if (error.name === "NotFoundError") {
      return res.sendStatus(httpStatus.NOT_FOUND);
    } 
    else if (error.name === "UnauthorizedError") {
      return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
  }
}

export async function postPayment() {
  return "calma la ";
}


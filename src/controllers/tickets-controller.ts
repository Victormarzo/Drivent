import { AuthenticatedRequest } from "@/middlewares";
import httpStatus from "http-status";
import { Response } from "express";
import ticketsService from "@/services/tickets-service";

export async function getTicketsTypes(req: AuthenticatedRequest, res: Response) {
  try {
    const ticketsTypes = await ticketsService.getTypes();
    return res.status(httpStatus.OK).send(ticketsTypes);
  } catch (error) {
    return res.status(httpStatus.OK);
  }    
}

export async function getTickets(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  try {
    const getTickets = await ticketsService.getTickets(userId);
    return res.status(httpStatus.OK).send(getTickets);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function postNewTicket(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { ticketTypeId }=req.body;
  try { 
    const getEnrollmentId = await ticketsService.getEnrollmentId(userId);
    const postTicket = await ticketsService.postNewTicket(ticketTypeId, getEnrollmentId);
    return res.status(httpStatus.CREATED).send(postTicket);
  } catch (error) { 
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

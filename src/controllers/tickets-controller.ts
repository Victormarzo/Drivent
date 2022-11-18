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

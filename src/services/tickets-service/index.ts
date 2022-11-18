import ticketsRepository from "@/repositories/tickets-repository";
import { notFoundError } from "@/errors";
async function getTypes(): Promise<TicketType[]> {
  const types = await ticketsRepository.getTypes();
  if(!types) {
    return [];
  }
  return types;
}

async function getTickets(id: number) {
  const tickets = await ticketsRepository.getTickets(id);
  if (!tickets) throw notFoundError();

  return tickets;
}

async function postNewTicket(ticketTypeId: number, enrollmentId: number) {
  const newTicket = await ticketsRepository.insertTicket(ticketTypeId, enrollmentId);
  return newTicket;
}

async function  getEnrollmentId(userId: number) {
  const enrollment = await ticketsRepository.getEnrollmentId(userId);
  if (!enrollment) throw notFoundError();
  return enrollment.id;
}
export type TicketType = {
  id: number,
  name: string,
  price: number,
  isRemote: boolean,
  includesHotel: boolean,
  createdAt: Date,
  updatedAt: Date,
}

const ticketsService = {
  getTypes, getTickets, postNewTicket, getEnrollmentId
};
export default ticketsService;

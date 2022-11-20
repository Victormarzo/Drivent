import paymentsRepository from "@/repositories/payments-repository";
import { notFoundError, unauthorizedError } from "@/errors";
import ticketsRepository from "@/repositories/tickets-repository";

async function checkTicket(ticketId: number, userId: number) {
  const ticket = await paymentsRepository.checkTicket(ticketId);
  if(!ticket) throw  notFoundError();
  if(Number(ticket.Enrollment.userId)!==userId) throw unauthorizedError();    
}

async function getPayment(ticketId: number) {
  const payment = await paymentsRepository.getPayment(ticketId);
  return payment;
}

const paymentsService ={ checkTicket, getPayment };
export default paymentsService;

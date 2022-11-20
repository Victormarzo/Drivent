import paymentsRepository from "@/repositories/payments-repository";
import { notFoundError, unauthorizedError } from "@/errors";
import { PaymentData } from "@/protocols";

async function checkTicket(ticketId: number, userId: number) {
  const ticket = await paymentsRepository.checkTicket(ticketId);
  if(!ticket) throw  notFoundError();
  if(Number(ticket.Enrollment.userId)!==userId) throw unauthorizedError();    
}

async function getPayment(ticketId: number) {
  const payment = await paymentsRepository.getPayment(ticketId);
  return payment;
}

async function newPayment(body: PaymentData) {
  const { ticketId, cardData }=body;
  const cardLastDigits = cardData.number.toString();
  const update = await paymentsRepository.updateStatus(ticketId);
  const newPayment = {
    cardIssuer: cardData.issuer,
    cardLastDigits: cardLastDigits.slice(-4),
    ticketId,
    value: update.TicketType.price,
  };
  const postPayment = await paymentsRepository.postPayment(newPayment);
  return postPayment;
}

const paymentsService ={ checkTicket, getPayment, newPayment };
export default paymentsService;

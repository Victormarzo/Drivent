import { prisma } from "@/config";
import { NewPayment } from "@/protocols";

async function checkTicket(ticketId: number) {
  return prisma.ticket.findFirst({
    where: {
      id: ticketId
    },
    include: {
      Enrollment: true
    }
  });    
}

async function getPayment(ticketId: number) {
  return prisma.payment.findFirst({
    where: {
      ticketId: ticketId
    }
  });
}

async function updateStatus(ticketId: number) {
  return prisma.ticket.update({
    where: {
      id: ticketId
    },
    data: {
      status: "PAID"
    },
    include: {
      TicketType: true
    }
  
  });
}

async function postPayment(body: NewPayment) {
  return prisma.payment.create({
    data: {
      cardIssuer: body.cardIssuer,
      cardLastDigits: body.cardLastDigits,
      ticketId: body.ticketId,
      value: body.value,
    }
  });
}

const paymentsRepository ={
  checkTicket, getPayment, updateStatus, postPayment
};

export default paymentsRepository;

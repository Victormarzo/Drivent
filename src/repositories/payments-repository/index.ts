import { prisma } from "@/config";

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
const paymentsRepository ={
  checkTicket, getPayment
};

export default paymentsRepository;

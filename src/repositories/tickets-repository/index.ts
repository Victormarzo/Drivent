import { prisma } from "@/config";
import { TicketType } from "@prisma/client";

async function getTypes() {
  return prisma.ticketType.findMany();
}

async function getTickets(id: number) {
  return prisma.ticket.findFirst({
    where: {
      Enrollment: {
        userId: id
      },
    },
    include: {
      TicketType: true
    }
  });
}

const ticketsRepository = {
  getTypes,
  getTickets
};

export default ticketsRepository;

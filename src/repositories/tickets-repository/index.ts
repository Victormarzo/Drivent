import { prisma } from "@/config";
import { TicketType } from "@prisma/client";

async function getTypes() {
  return prisma.ticketType.findMany();
}

const ticketsRepository = {
  getTypes
};

export default ticketsRepository;

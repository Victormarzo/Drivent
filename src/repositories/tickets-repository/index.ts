import { prisma } from "@/config";

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
async function insertTicket(ticketTypeId: number, enrollmentId: number) {
  return prisma.ticket.create({
    data: {
      ticketTypeId,
      status: "RESERVED",
      enrollmentId,
    },
    include: {
      TicketType: true
    }
  });
}

async function getEnrollmentId(userId: number) {
  return prisma.enrollment.findFirst({
    where: { userId }
  });
}

const ticketsRepository = {
  getTypes,
  getTickets,
  insertTicket,
  getEnrollmentId
};

export default ticketsRepository;

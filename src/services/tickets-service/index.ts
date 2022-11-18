import ticketsRepository from "@/repositories/tickets-repository";

async function getTypes(): Promise<TicketType[]> {
  const types = await ticketsRepository.getTypes();
  if(!types) {
    return [];
  }
  return types;
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
  getTypes
};
export default ticketsService;

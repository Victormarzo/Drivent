import { TicketId } from "@/protocols";
import Joi from "joi";

export const ticketTypeSchema = Joi.object<TicketId>({
  ticketTypeId: Joi.number().required()
});


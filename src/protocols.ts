export type ApplicationError = {
  name: string;
  message: string;
};

export type ViaCEPAddress = {
  logradouro: string,
  complemento: string,
  bairro: string,
  localidade: string,
  uf: string,

};

export type AddressEnrollment = {
  logradouro: string,
  complemento: string,
  bairro: string,
  cidade: string,
  uf: string,
  error?: string

}

export type RequestError = {
  status: number,
  data: object | null,
  statusText: string,
  name: string,
  message: string,
};

export type TicketId = {
  ticketTypeId: number
};

export type PaymentData = {
  ticketId: number,
	cardData: {
  issuer: string,
  number: number,
  name: string,
  expirationDate: Date,
  cvv: number
  }
};

export type PaymentSucess = {
  id: number,
  ticketId: number,
  value: number,
  cardIssuer: string, 
  cardLastDigits: string,
  createdAt: Date,
  updatedAt: Date,
};

export type NewPayment=Omit<PaymentSucess, "createdAt" |"id" |"updatedAt">

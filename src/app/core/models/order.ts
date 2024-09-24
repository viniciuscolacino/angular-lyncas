export interface Order {
  id: string,
  documento: string,
  motorista: OrderDriver,
  cliente_origem: OrderSender,
  cliente_destino: OrderRecipient,
  status_entrega: OrderStatusEnum,
}

export interface OrderDriver {
  nome: string,
  image: string,
}

export interface OrderSender {
  nome: string,
  endereco: string,
  bairro: string,
  cidade: string,
}

export interface OrderRecipient {
  nome: string,
  endereco: string,
  bairro: string,
  cidade: string,
}

export enum OrderStatusEnum {
  Delivered = "ENTREGUE",
  Pending = "PENDENTE",
  Unsuccessful = "INSUCESSO"
}

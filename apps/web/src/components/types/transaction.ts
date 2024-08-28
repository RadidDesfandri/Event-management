export interface ITransaction {
  id: string;
  event_Id: string;
  user_Id: string;
  qty: number;
  totalPrice?: string | null;
  totalDiscount?: string | null;
  finalPrice: number;
  paymentLink: string;
  status: string;
  created_at: string;
  event?: {
    id: string;
    eventName: string
    date: string;
    location: string;
    description: string;
    image: string;
    eOId: string;
    createdAt: string;
    category: string;
  }
}

export interface ResponseGet {
  status: string
  transaction: ITransaction[]
}

export interface DataMidtrans {
  token: string
  redirect_url: string
}

export interface Quantity {
  qty: number
}

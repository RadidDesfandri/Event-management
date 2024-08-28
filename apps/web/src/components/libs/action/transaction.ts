import { DataMidtrans, ITransaction, ResponseGet } from "@/components/types/transaction";
import { getCookie } from "./server";

export const createTransaction = async (id: string, qty: number) => {
  const token = await getCookie('token')
  interface Response {
    status: string;
    msg: string;
    transaction: ITransaction;
    data: DataMidtrans;
  }

  const res = await fetch(`http://localhost:8000/api/order/${id}`, {
    method: "POST",
    next: { revalidate: 200 },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token?.value}`,
    },
    body: JSON.stringify({ qty }),
  });

  const data: Response = await res.json();

  return { result: data, ok: res.ok };
};

export const getTransactionId = async () => {
  const token = await getCookie('token')


  const res = await fetch('http://localhost:8000/api/order/get/id', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token?.value}`,
    }
  })

  const data: ResponseGet = await res.json();
  return { result: data, ok: res.ok }
}

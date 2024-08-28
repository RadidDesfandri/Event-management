import React from "react";
import BuyTiket from "./buyTiket";
import { IEvent } from "../types/event";

export default function ListBuyTicket({ data }: { data: IEvent }) {
  // console.log(data);
  const event = data.Ticketing;

  return (
    <div>
      {event!.map((item) => {
        return <BuyTiket data={item} />;
      })}
    </div>
  );
}

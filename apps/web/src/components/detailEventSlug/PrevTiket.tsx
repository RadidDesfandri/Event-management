import Image from "next/image";
import React from "react";
import ListPayTicket from "./ListPayTicket";
import { IEvent } from "../types/event";

export const PayTiket = ({ data }: { data: IEvent }) => {
  // console.log(data);

  return (
    <section className="my-3 overflow-hidden bg-white lg:rounded-lg">
      <Image
        src={data.image}
        alt={data.eventName}
        width={200}
        height={200}
        className="h-[120px] w-full object-cover object-center md:h-[182px]"
      />

      <main className="flex items-center px-5 py-3">
        <span className="h-[0.1px] w-1/2 bg-gray-600"></span>
        <h1 className="mx-4 w-28 text-wrap text-center text-[16px] font-extrabold text-gray-900 lg:w-[300px]">
          {data.eventName}
        </h1>
        <span className="h-[0.1px] w-1/2 bg-gray-600"></span>
      </main>

      <ListPayTicket data={data} />
    </section>
  );
};

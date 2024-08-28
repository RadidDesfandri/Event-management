import Image from "next/image";
import React from "react";
import { IconType } from "react-icons";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { IoTime } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IEvent } from "../types/event";
import { formatDateID, formatTimeID } from "../utils/FormatDate";
import { getEventById } from "../libs/action/event";
import DescHarga from "./descHarga";

interface ICons {
  icon: IconType;
  text: any;
}

export interface PropsEvent {
  event: IEvent;
}

export default async function PosterDate({ data }: { data: PropsEvent }) {
  const event = await getEventById(data.event.id!);
  // console.log(event);

  const icons: ICons[] = [
    { icon: BsFillCalendarDateFill, text: formatDateID(data.event.date) },
    { icon: IoTime, text: formatTimeID(data.event.date) },
    { icon: FaLocationDot, text: data.event.location },
  ];

  return (
    <section className="w-full bg-white lg:pt-16">
      <div className="mx-auto max-w-7xl lg:px-20">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <Image
            src={data.event.image}
            alt="Image"
            width={500}
            height={500}
            className="h-[195px] w-[100%] object-cover lg:h-[338px] lg:w-[720px] lg:rounded-lg"
          />

          <div className="bg-white px-5 pt-8 lg:h-[338px] lg:w-[360px] lg:rounded-lg lg:shadow-md lg:shadow-gray-400">
            <div className="pb-5 lg:pb-16">
              <h1 className="text-wrap pb-3 text-2xl font-semibold text-gray-800">
                {data.event.eventName}
              </h1>
              {icons.map((item, key) => (
                <div
                  key={key}
                  className="flex items-center gap-5 pb-1 text-base text-gray-500"
                >
                  <item.icon className="text-blue-700" />
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-5 border-t border-dashed border-gray-300 py-4">
              <Image
                src={"/kultural1.jpg"}
                alt="avatar"
                width={100}
                height={100}
                className="h-[50px] w-[50px] rounded-full object-cover"
              />
              <div className="text-sm">
                <p className="text-gray-500">Diselenggarakan oleh</p>
                <p className="text-base font-semibold">
                  {data.event.eo!.username}
                </p>
              </div>
            </div>
          </div>
        </div>

        <section>
          <DescHarga data={event.event} />
        </section>
      </div>
    </section>
  );
}

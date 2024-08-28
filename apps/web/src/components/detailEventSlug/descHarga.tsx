"use client";

import React, { useState } from "react";
import DeskripsiDetailEvent from "./deskripsiDetailEvent";
import BuyTiket from "./buyTiket";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaArrowLeftLong, FaXTwitter } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";
import { PayTiket } from "./PrevTiket";
import { ModalPayTiket } from "../modal/ModalPayTiket";
import { IEvent } from "../types/event";
import ListBuyTicket from "./ListBuyTicket";

const DescHarga = ({ data }: { data: IEvent }) => {
  const [isActive, setIsActive] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const handleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <section className="flex justify-between pt-10">
      <main className="flex w-full flex-wrap items-center lg:w-[720px]">
        <div onClick={handleActive} className="relative w-1/2">
          <button
            disabled={!isActive}
            type="submit"
            className={`text-center ${isActive ? "font-normal" : "font-bold"} h-10 w-full border-b border-gray-400`}
          >
            DESKRIPSI
          </button>
          <span
            className={`w-full ${isActive ? "h-0" : "h-1"} absolute bottom-0 left-0 rounded-t-lg bg-blue-700`}
          ></span>
        </div>
        <div onClick={handleActive} className="relative w-1/2">
          <button
            disabled={isActive}
            type="submit"
            className={`text-center ${isActive ? "font-bold" : "font-normal"} relative h-10 w-full border-b border-gray-400`}
          >
            TIKET
          </button>
          <span
            className={`w-full ${isActive ? "h-1" : "h-0"} absolute bottom-0 left-0 rounded-t-lg bg-blue-700`}
          ></span>
        </div>

        {isActive ? (
          <div className="my-10 flex w-full flex-col gap-6 px-5 lg:px-0">
            <div className="flex justify-end">
              <button
                onClick={openModal}
                className="rounded-md bg-blue-500 px-8 py-3 font-semibold text-gray-100 shadow-lg shadow-blue-500/50 transition-all duration-150 hover:bg-blue-600"
              >
                Beli Tiket
              </button>

              {/* Active modal pay start */}
              <ModalPayTiket isOpen={isOpenModal} onClose={closeModal}>
                <div className="mx-auto max-w-5xl">
                  <div className="px-5 py-5 lg:px-0">
                    <FaArrowLeftLong
                      onClick={closeModal}
                      className="h-7 w-7 text-gray-800"
                    />
                  </div>
                  <PayTiket data={data} />
                </div>
              </ModalPayTiket>
              {/* Active modal pay end */}
            </div>
            <ListBuyTicket data={data} />
          </div>
        ) : (
          <div className="my-10 w-full px-5 lg:px-0">
            <DeskripsiDetailEvent data={data} />
            <DeskripsiDetailEvent data={data} />
          </div>
        )}
      </main>

      <main className="hidden gap-5 lg:flex lg:w-[360px] lg:flex-col">
        <p className="text-sm text-gray-800">Bagikan event</p>

        <div className="flex gap-5">
          <Link href={"https://www.facebook.com/"} target="_blank">
            <div className="rounded-full border border-black p-2">
              <FaFacebookF className="h-5 w-5" />
            </div>
          </Link>

          <Link href={"https://x.com/"} target="_blank">
            <div className="rounded-full border border-black p-2">
              <FaXTwitter className="h-5 w-5" />
            </div>
          </Link>

          <Link href={"#"}>
            <div className="rounded-full border border-black p-2">
              <IoMdShare className="h-5 w-5" />
            </div>
          </Link>
        </div>
      </main>
    </section>
  );
};

export default DescHarga;

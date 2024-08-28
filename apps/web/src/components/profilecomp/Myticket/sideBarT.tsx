import React from "react";
import { MdExplore, MdOutlinePerson2 } from "react-icons/md";
import Link from "next/link";
import { IoTicket } from "react-icons/io5";
import LogoLg from "@/components/logoLg";

function SideBarTic() {
  return (
    <div className="sticky z-20 top-0 h-[490px] min-h-screen hidden w-[350px] bg-blue-950 lg:block">
      <main className="flex items-center justify-center bg-[#131e43] py-3">
        <LogoLg />
      </main>

      <section className="flex flex-col gap-6 py-5">
        <div className="px-5">
          <Link
            href={"/beranda"}
            className="flex items-center gap-3 text-gray-400 transition-all duration-150 hover:translate-x-1 hover:text-white"
          >
            <MdExplore className="h-4 w-4" />
            <p className="text-sm">Jelajahi Event</p>
          </Link>
        </div>

        <div className="bg-blue-700 px-5 py-3">
          <Link
            href={"/profile/ticket"}
            className="flex items-center gap-3 text-white"
          >
            <IoTicket className="h-4 w-4" />
            <p className="text-sm">Ticket Saya</p>
          </Link>
        </div>
        <span className="h-[0.1px] w-full bg-gray-600"></span>
      </section>

      <section>
        <main className="px-5">
          <p className="text-sm font-semibold text-gray-400">Akun</p>
        </main>
        <Link href={'/profile'} className="mt-2 flex items-center gap-2 px-5 py-3 text-sm text-gray-400 transition-all duration-150 hover:translate-x-1 hover:text-white">
          <MdOutlinePerson2 className="h-4 w-4" />
          <p>Informasi Dasar</p>
        </Link>
      </section>
    </div>
  );
}

export default SideBarTic;

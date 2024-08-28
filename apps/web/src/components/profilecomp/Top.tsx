"use client";

import React from "react";
import { IoPersonCircle } from "react-icons/io5";
import { UserState } from "../types/user";
import { useAppSelector } from "@/redux/hooks";

const Top = ({ text }: { text: string }) => {
  const user: UserState = useAppSelector((state) => state.user);
  const username = user.username.toUpperCase();
  return (
    <div className="flex w-full justify-between border-b-2 px-3 py-4 lg:px-8 lg:py-6">
      <p className="text-xl font-semibold text-gray-700">{text}</p>
      <main className="flex items-center gap-3 rounded-full bg-blue-50 px-3 py-1">
        <IoPersonCircle className="h-5 w-5 text-blue-900" />
        <p className="font-light text-gray-900">{username}</p>
      </main>
    </div>
  );
};

export default Top;

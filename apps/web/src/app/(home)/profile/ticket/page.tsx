import { AllT } from "@/components/profilecomp/Myticket/All";
import SideBarTic from "@/components/profilecomp/Myticket/sideBarT";
import React from "react";

function Ticket() {
  return (
    <div className="mx-auto flex max-w-7xl">
      <SideBarTic />
      <AllT/>
    </div>
  );
}

export default Ticket;

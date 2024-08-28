import React from "react";
import ListTransaction from "./ListTransaction";
import Top from "../Top";
import StateReview from "./stateReview";

export const AllT = () => {
  return (
    <div className="w-full">
      <Top text="Ticket kamu" />
      {/* <ListTransaction /> */}
      <StateReview/>
    </div>
  );
};

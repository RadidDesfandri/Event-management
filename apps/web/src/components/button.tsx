import React from "react";

export default function Button({ props }: { props: string }) {
  return (
    <div>
      <button className="rounded-md bg-blue-500 px-3 py-2 font-semibold shadow-lg shadow-blue-500/50 transition-all duration-150 hover:bg-blue-600">
        {props}
      </button>
    </div>
  );
}

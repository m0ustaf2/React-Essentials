import React from "react";

export default function TabBtn({ children, onSelect,isSelected }) {
  return (
    <>
      <li>
        <button
          className={`${isSelected?"bg-[#7925d3] text-[#ebe7ef]":""}  p-2 rounded text-white `}
          onClick={onSelect}
        >
          {children}
        </button>
      </li>
    </>
  );
}

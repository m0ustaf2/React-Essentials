import React from "react";

export default function ({ title, description, img }) {
  return (
    <>
      <li className="text-white">
        <img className="w-80 rounded-2xl" src={img} alt="coreImg" />
        <h3 className="my-[0.5rem]">{title}</h3>
        <p className="text-[0.9rem]">{description}</p>
      </li>
    </>
  );
}

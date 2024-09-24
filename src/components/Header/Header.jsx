import React from "react";
import imgHeader from "../../assets/images/1.jpg";
export default function Header() {
  const reactDescriptions = ["Fundamental", "Crucial", "Core"];
  const genRandomInt = (max) => {
    return Math.floor(Math.random() * (max + 1));
  };

  const description = reactDescriptions[genRandomInt(2)];
  return (
    <>
      <header className="text-center ">
        <div className="flex items-center justify-center">
          <img
            className="rounded-full margin-auto "
            src={imgHeader}
            alt="headerimg"
          />
        </div>
        <h1>React Essentials</h1>
        <p>
          {description} A React Essentials course you will need for any app you
          are going to build
        </p>
      </header>
    </>
  );
}

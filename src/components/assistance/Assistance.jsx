import React from "react";
import Input from "../core/Input";

const Assistance = () => {
  return (
    <div>
      <div className="text-black ">
        <p className="bg-gray-200 font-semibold px-2 py-1">What is Chatgpt?</p>
        <p className=" px-2 py-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          minima veritatis modi nisi culpa nesciunt dignissimos explicabo ab?
          Officia necessitatibus ea libero eum nihil temporibus, consectetur
          harum ratione molestias quas aperiam reprehenderit quibusdam cumque
          fugit, sunt hic doloribus recusandae nam voluptatum neque blanditiis,
          consequuntur debitis voluptatibus! Doloremque nostrum perferendis
          quod?
        </p>
      </div>
      <div className=" absolute bottom-0 w-full">
        <Input />
      </div>
    </div>
  );
};

export default Assistance;

import React from "react";
import { TransactionProps } from "../type";

const index = ({ image, debitName, details, amount }: TransactionProps) => {
  return (
    <div className="flex justify-between my-5">
      <div className="flex gap-5">
        <img className=" w-10" src={image} alt="" />
        <div>
          <p className="font-bold">{debitName}</p>
          <p className="font-thin text-xs">{details}</p>
        </div>
      </div>
      <p className="text-sm font-bold">{amount}</p>
    </div>
  );
};

export default index;

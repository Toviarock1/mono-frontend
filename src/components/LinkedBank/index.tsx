import React from "react";
import { Link } from "react-router-dom";
import { LinkedBankProps } from "../type";

const Index = ({ image, bankName, bankNumber, amount }: LinkedBankProps) => {
  return (
    <div className="flex justify-between items-center my-5">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="">
        <p>{bankName}</p>
        <p className="font-thin">{bankNumber}</p>
      </div>
      <div>
        <p className="font-light">${amount}</p>
      </div>
      <div>
        <Link
          to={"/linked-account/2"}
          className="px-4 py-2 bg-blue-700 text-white"
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default Index;

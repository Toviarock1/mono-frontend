import React from "react";
import LinkedBank from "../../../components/LinkedBank";
import GtBankIcon from "./../../../assets/gtbank.svg";

const Index = () => {
  return (
    <section className="pt-14 md:pt-0">
      <div className="md:flex gap-16">
        <div className="w-full">
          <div className="pt-7 pb-24 text-center">
            <h2 className="font-bold text-center text-xl">TOTAL BALANCE</h2>
            <div className="py-3">
              <p className="font-extrabold text-4xl">$800</p>
            </div>
            <p className="font-thin text-sm">Your balance across all Banks</p>
            <button className="bg-red-50 text-red-500 font-bold px-4 py-4 rounded-md tracking-wider mt-10">
              LINK BANK ACCOUNT
            </button>
          </div>
          <div className="px-10">
            <h3 className="font-thin text-xl">Linked Bank Accounts</h3>
            <div>
              <LinkedBank
                image={GtBankIcon}
                bankName="KudaBank"
                bankNumber={1100301055}
                amount={400}
              />
              <LinkedBank
                image={GtBankIcon}
                bankName="KudaBank"
                bankNumber={1100301055}
                amount={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;

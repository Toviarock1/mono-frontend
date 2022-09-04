import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { DashboardProps } from "./type";
import Chart from "react-apexcharts";
import Profile from "./../../assets/Profile.png";
import CalenderIcon from "./../../assets/arrow-right.svg";
import GTBankIcon from "./../../assets/gtbank.svg";
import AddIcon from "./../../assets/addicon.svg";
import JumiaCart from "./../../assets/jumia-cart.svg";
import Padlock from "./../../assets/padlock.svg";

const Index = ({ showModal }: DashboardProps) => {
  if (showModal) {
    return (
      <section className="bg-white flex justify-center">
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"></div>
        <div className="bg-black w-96 h-80 mx-auto my-32 rounded-lg absolute">
          <div className="text-white text-6xl py-5">
            <img className="mx-auto block" src={Padlock} alt="" />
          </div>
          <div className="text-white text-center text-2xl font-light">
            <h2>Final Step</h2>
          </div>
          <div className="text-white text-center font-light my-5">
            <p>Link your Bank Account in seconds</p>
          </div>
          <div className="mt-10">
            <button className="text-blue-700 font-bold py-3 px-8 mx-auto bg-white flex items-center rounded-md text-center tracking-wide">
              LINK NOW
              <span>
                {" "}
                <BsArrowUpRight className="text-sm font-bold ml-1" />{" "}
              </span>
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="flex flex-wrap items-center gap-4 justify-end p-4">
        <p className="font-medium">Good Morning, Ola</p>
        <img className="w-8" src={Profile} alt="user profile" />
      </div>
      <div className="md:flex gap-16">
        <div>
          <div>
            <div className="flex items-center gap-2 border border-gray-300 py-1 px-2 mx-2 text-xs rounded drop-shadow-xl text-gray-600 w-fit">
              <p>Today</p>
              <img src={CalenderIcon} alt="" />
            </div>
            <div>
              <div className="font-bold text-center text-xl">
                <h2>Expense Tracker</h2>
              </div>
              <div className="w-full md:w-[500px]">
                <Chart
                  options={{
                    chart: {
                      id: "expense-tracker",
                    },
                    xaxis: {
                      categories: [
                        2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
                      ],
                    },
                  }}
                  series={[
                    {
                      name: "expenses",
                      data: [30, 40, 45, 50, 49, 60, 70, 91],
                    },
                  ]}
                  type="bar"
                />
              </div>
            </div>
          </div>
          <div className="px-10 md:px-1">
            <div className="my-2">
              <h3 className="font-thin text-xl">Latest Transactions</h3>
            </div>
            <hr />
            <div>
              <div className="flex justify-between my-5">
                <div className="flex gap-5">
                  <img className=" w-10" src={JumiaCart} alt="" />
                  <div>
                    <p className="font-bold">Jumia</p>
                    <p className="font-thin text-xs">
                      11-11-2021 • 10:12 am • Credit
                    </p>
                  </div>
                </div>
                <p className="text-sm font-bold">-10800</p>
              </div>
              <div className="flex justify-between my-5">
                <div className="flex gap-5">
                  <img className=" w-10" src={JumiaCart} alt="" />
                  <div>
                    <p className="font-bold">Jumia</p>
                    <p className="font-thin text-xs">
                      11-11-2021 • 10:12 am • Credit
                    </p>
                  </div>
                </div>
                <p className="text-sm font-bold">-10800</p>
              </div>
              <div className="flex justify-between my-5">
                <div className="flex gap-5">
                  <img className=" w-10" src={JumiaCart} alt="" />
                  <div>
                    <p className="font-bold">Jumia</p>
                    <p className="font-thin text-xs">
                      11-11-2021 • 10:12 am • Credit
                    </p>
                  </div>
                </div>
                <p className="text-sm font-bold">-10800</p>
              </div>
              <div className="flex justify-between my-5">
                <div className="flex gap-5">
                  <img className=" w-10" src={JumiaCart} alt="" />
                  <div>
                    <p className="font-bold">Jumia</p>
                    <p className="font-thin text-xs">
                      11-11-2021 • 10:12 am • Credit
                    </p>
                  </div>
                </div>
                <p className="text-sm font-bold">-10800</p>
              </div>
              <div className="flex justify-between my-5">
                <div className="flex gap-5">
                  <img className=" w-10" src={JumiaCart} alt="" />
                  <div>
                    <p className="font-bold">Jumia</p>
                    <p className="font-thin text-xs">
                      11-11-2021 • 10:12 am • Credit
                    </p>
                  </div>
                </div>
                <p className="text-sm font-bold">-10800</p>
              </div>
              <div className="flex justify-between my-5">
                <div className="flex gap-5">
                  <img className=" w-10" src={JumiaCart} alt="" />
                  <div>
                    <p className="font-bold">Jumia</p>
                    <p className="font-thin text-xs">
                      11-11-2021 • 10:12 am • Credit
                    </p>
                  </div>
                </div>
                <p className="text-sm font-bold">-10800</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="pt-7 pb-24 text-center">
            <h2 className="font-bold text-center text-xl">TOTAL BALANCE</h2>
            <div className="py-3">
              <p className="font-extrabold text-4xl">30,000,000</p>
            </div>
            <p className="font-thin text-sm">Your balance across all Banks</p>
            <div className="py-7 flex justify-center">
              <div>
                <img src={GTBankIcon} alt="" />
              </div>
              <div className="-ml-2">
                <img src={GTBankIcon} alt="" />
              </div>
              <div className="-ml-2">
                <img src={GTBankIcon} alt="" />
              </div>
              <div className="ml-3">
                <img className="block my-auto" src={AddIcon} alt="" />
              </div>
            </div>
            <button className="bg-red-50 text-red-500 font-bold px-4 py-4 rounded-md tracking-wider">
              UNLINK BANK ACCOUNT
            </button>
          </div>

          <div className="px-10">
            <h3 className="font-thin text-xl">Where your money go?</h3>
            <div>
              <div>
                <div className="flex justify-between my-3">
                  <p>Food and Drinks</p>
                  <p className="font-thin">872.400</p>
                </div>
                <div className="relative pt-1">
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                    <div
                      style={{ width: "30%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-300"
                    ></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between my-3">
                  <p>Food and Drinks</p>
                  <p className="font-thin">872.400</p>
                </div>
                <div className="relative pt-1">
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                    <div
                      style={{ width: "30%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-300"
                    ></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between my-3">
                  <p>Food and Drinks</p>
                  <p className="font-thin">872.400</p>
                </div>
                <div className="relative pt-1">
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                    <div
                      style={{ width: "30%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-300"
                    ></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between my-3">
                  <p>Food and Drinks</p>
                  <p className="font-thin">872.400</p>
                </div>
                <div className="relative pt-1">
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                    <div
                      style={{ width: "30%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-300"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;

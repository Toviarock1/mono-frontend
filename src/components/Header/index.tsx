import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";
import { HeaderProps } from "../type";
import Logo from "./../../assets/dashboard-logo.png";

const Index = ({ showModal }: HeaderProps) => {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  return (
    <header>
      <div className="md:hidden bg-[#242121] w-full py-3 px-5 fixed z-50">
        <button
          className="border rounded text-white text-2xl px-2 py-1"
          onClick={() => setToggleNavbar(!toggleNavbar)}
          disabled={showModal}
        >
          <BiMenuAltLeft />
        </button>
      </div>
      <nav
        className={`${
          toggleNavbar ? "block" : "hidden"
        } w-full md:w-64 md:block fixed bg-[#242121] h-full z-50 text-gray-400 py-12 pl-8`}
      >
        <div className="md:hidden bg-[#242121] w-full fixed ">
          <button
            className="border rounded text-white text-2xl px-2 py-1"
            onClick={() => setToggleNavbar(!toggleNavbar)}
          >
            <BiMenuAltLeft />
          </button>
        </div>
        {!showModal ? (
          <>
            <div>
              <img src={Logo} alt="comapany logo" />
            </div>
            <ul className="">
              <li className="list-none py-6 font-light">
                <NavLink
                  className={(navData) =>
                    navData.isActive ? "text-white" : "hover:text-gray-200"
                  }
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              </li>
              <li className="list-none py-6 font-light">
                <NavLink
                  className={(navData) =>
                    navData.isActive ? "text-white" : "hover:text-gray-200"
                  }
                  to="/expenses"
                >
                  Expenses
                </NavLink>
              </li>
              <li className="list-none py-6 font-light">
                <NavLink
                  className={(navData) =>
                    navData.isActive ? "text-white" : "hover:text-gray-200"
                  }
                  to="/wallets"
                >
                  Wallets
                </NavLink>
              </li>
              <li className="list-none py-6 font-light">
                <NavLink
                  className={(navData) =>
                    navData.isActive ? "text-white" : "hover:text-gray-200"
                  }
                  to="/summary"
                >
                  Summary
                </NavLink>
              </li>
              <li className="list-none py-6 font-light">
                <NavLink
                  className={(navData) =>
                    navData.isActive ? "text-white" : "hover:text-gray-200"
                  }
                  to="/linked-account"
                >
                  Accounts
                </NavLink>
              </li>
              <li className="list-none py-6 font-light">
                <NavLink
                  className={(navData) =>
                    navData.isActive ? "text-white" : "hover:text-gray-200"
                  }
                  to="/settings"
                >
                  Settings
                </NavLink>
              </li>
            </ul>
          </>
        ) : (
          <div className="shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse space-x-4">
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-100 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-100 rounded col-span-2"></div>
                  </div>
                  <div className="h-2 bg-slate-100 rounded"></div>
                  <div className="h-2 bg-[#5D66B0] rounded"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Index;

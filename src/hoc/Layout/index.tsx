import React from "react";
import Header from "./../../components/Header";
import { LayoutChildren } from "./../type";

const index = ({ children, showModal }: LayoutChildren) => {
  return (
    <>
      <Header showModal={showModal} />
      <main className="md:ml-72 md:py-20 md:pr-20">{children}</main>
    </>
  );
};

export default index;

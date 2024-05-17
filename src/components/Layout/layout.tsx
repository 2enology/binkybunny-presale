import React, { FC } from "react";
import Header from "./header";
import Footer from "./footer";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

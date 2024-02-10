import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop"
import MetaData from "./MetaData"

const Layout = () => {
  return (
    <>
    <MetaData title="NexusInfo"/>
      <Header />
      <ScrollToTop/>
      <Outlet /> 
      <Footer />
    </>
  );
};
export default Layout;

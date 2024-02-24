import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import MetaData from "./MetaData"
import { HelmetProvider } from "react-helmet-async";


const Layout = () => {
  return (
    <HelmetProvider>
    <MetaData title="NexusInfo"/>
      <Header />
      <Outlet /> 
      <Footer />
    </HelmetProvider>
  );
};
export default Layout;

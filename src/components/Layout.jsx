import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import MetaData from "./MetaData";
import { HelmetProvider } from "react-helmet-async";
import DataContextProvider from "../context/DataContextProvider";
import WeatherDataProvider from "../context/WeatherDataProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <HelmetProvider>
      <MetaData title="NexusInfo" />
      <DataContextProvider>
        <WeatherDataProvider>
        <ToastContainer position="bottom-center" autoClose={3000}/>
          <Header />
          <Outlet />
          <Footer />
        </WeatherDataProvider>
      </DataContextProvider>
    </HelmetProvider>
  );
};
export default Layout;

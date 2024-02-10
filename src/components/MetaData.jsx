import React from "react";
import Helmet from "react-helmet";
import logoTab from "../images/logo-tab.PNG";

const MetaData = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="icon" type="image/png" href={logoTab} />
    </Helmet>
  );
};

export default MetaData;

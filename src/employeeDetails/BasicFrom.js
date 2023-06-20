import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import LogOutAndLanguage from "./LogOutAndLanguage";
import DetailForm from "./DetailForm";
import DepartmenForm from "./DepartmenForm";

const BasicFrom = () => {
  return (
    <>
      <DepartmenForm />
    </>
  );
};

export default BasicFrom;

// <DetailForm />
// <Header />
// <MainContent />
// <Footer />
// <LogOutAndLanguage /> // no need to use it cause its already implemented in footer component

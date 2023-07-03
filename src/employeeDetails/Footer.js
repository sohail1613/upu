import React from "react";
import { ReactComponent as BgImage } from "../logos/illustration.svg";
import LogOutAndLanguage from "./LogOutAndLanguage"

const Footer = () => {
  return (
    <>
      <BgImage
        className="absolute bottom-0 -z-10 ml-5"
        width={1600}
        height={320}
      />
      <LogOutAndLanguage />
    </>
  );
};

export default Footer;

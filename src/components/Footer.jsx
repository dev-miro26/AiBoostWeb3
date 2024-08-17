import React from "react";
import { Link } from "react-router-dom";
import logoFull from "../../images/logo_white.svg";

const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 border-t border-slate-600 bg-slate-900">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          <Link
            to={"/"}
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <img className="text-white w-44" src={logoFull} alt="logo" />
          </Link>
        </div>

        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
          <div className="flex">
            <Link
              to={"/buy-token"}
              aria-label="Buy Token"
              title="Buy Token"
              className="font-bold tracking-wide smoothLinear"
            >
              Buy Token
            </Link>
          </div>
          <div className="flex">
            <Link
              to={"/stake"}
              aria-label="Farm Crypto"
              title="Stake Crypto"
              className="font-bold tracking-wide smoothLinear"
            >
              Stake
            </Link>
          </div>

          <div className="flex">
            <Link
              to={"/lottery"}
              aria-label="Lottery"
              title="Lottery"
              className="font-bold tracking-wide smoothLinear"
            >
              Lottery
            </Link>
          </div>

          <div className="flex">
            <Link
              to={"/send-matic"}
              aria-label="Send Matic"
              title="Send Matic"
              className="font-bold tracking-wide smoothLinear"
            >
              Send Matic
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

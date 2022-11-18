import React, { useState, useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";
import { HiOutlineDotsVertical } from "react-icons/hi";
import ethlogo from "../assets/ethlogo.png";
import uniswapLogo from "../assets/uniswapLogo.png";
import Image from "next/image";

const style = {};

const Header = () => {
  const [selectedNav, setSelectedNav] = useState("swap");

  return (
    <header className={style.wrapper}>
      <div className={style.headerLogo}>
        <Image src={uniswapLogo} alt="Uniswap Logo" width={40} height={40} />
      </div>
    </header>
  );
};

export default Header;

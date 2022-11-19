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
      <nav className="style.nav">
        <ul className={style.navList}>
          <li
            className={`${style.navItem}
            ${selectedNav === "swap" ? style.selected : ""}
          `}
            onClick={() => setSelectedNav("swap")}
          >
            Swap
          </li>
          <li
            className={`${style.navItem}
            ${selectedNav === "pool" ? style.selected : ""} 
          `}
            onClick={() => setSelectedNav("pool")}
          >
            Pool
          </li>
          <li
            className={`${style.navItem}
            ${selectedNav === "vote" ? style.selected : ""}
          `}
            onClick={() => setSelectedNav("vote")}
          >
            Vote
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

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
          <a
            href="https://info.uniswap.ort/#/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className={style.navItem}>
              Charts
              <FiArrowUpRight />
            </li>
          </a>
        </ul>
        <ul className={style.buttonsContainer}>
          <li className={`${style.button} ${style.buttonPadding}`}>
            <div className={style.buttonsContainer}>
              <Image src={ethlogo} alt="Ethereum Logo" width={20} height={20} />
            </div>
            <span>0.00 ETH</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

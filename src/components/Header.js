import React, { useState, useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";
import { HiOutlineDotsVertical } from "react-icons/hi";
import ethlogo from "../assets/ethlogo.png";
import uniswapLogo from "../assets/uniswapLogo.png";
import Image from "next/image";

const style = {
  wrapper: "p-4 w-screen flex justify-between items-center",
  headerLogo: "flex w-1/4 items-center justify-start",
  nav: "flex-1 flex items-center justify-center",
  navItemsContainer: "flex bg-[#191b1f] rounded-3xl",
  navItem:
    "px-4 py-2 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-3xl",
  activeNavItem: "bg-[#20242A]",
  buttonsContainer: "flex w-1/4 justify-end items-center",
  button:
    "flex items-center bg-[#191b1f] rounded-2xl mx-2 text-[0.9rem] font-semibold cursor pointer",
  buttonPadding: "p-2",
  buttonTextContainer: "h-8 flex items-center",
  buttonIconContainer: "h-8 w-8 flex items-center justify-center",
  buttonAccent:
    "bg-[#172a42] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#4f90ea]",
};

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
            <div className={style.buttonIconContainer}>
              <Image src={ethlogo} alt="Ethereum Logo" width={20} height={20} />
            </div>
            <span>Ethereum</span>
            <div className={style.buttonsContainer}>
              <AiOutlineDown />
            </div>
          </li>

          <li
            className={`${style.button} ${style.buttonPadding}`}
            onClick={() => connectWallet()}
          >
            <span>Connect Wallet</span>
            <div className={`${style.button} ${style.buttonPadding}`}>
              <div className={`${style.buttonIconContainer} mx-2`}>
                <HiOutlineDotsVertical />
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

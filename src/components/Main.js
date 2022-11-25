import React from "react";
import Image from "next/Image";
import { RiSettings3Fill } from "react-icons/ri";
import { AiOutlineDown } from "react-icons/ai";
import ethLogo from "../assets/eth.png";

const styles = {
  wrapper: "w-screen flex items-center justify-center flex-col mt-14",
  content: "bg-[#181B1F] w-[90%] h-[40rem] rounded-2xl p-4",
};

function Main() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.content}></div>
    </main>
  );
}

export default Main;

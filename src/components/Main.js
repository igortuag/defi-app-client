import React from "react";
import Image from "next/Image";
import { RiSettings3Fill } from "react-icons/ri";
import { AiOutlineDown } from "react-icons/ai";
import ethLogo from "../assets/eth.png";

const styles = {
  wrapper: "w-screen flex items-center justify-center flex-col mt-14",
  content: "bg-[#181B1F] w-[90%] h-[40rem] rounded-2xl p-4",
  formHeader: "px-2 flex items-center justify-between font-semibold text-xl",
  transferPropContainer: "bbg-[#20242A] my-3 text-3xl border border-[#41444F] [flex  justify-between",
};

function Main() {
  return (
    <main className={styles.wrapper}>
      <form className={styles.content}>
        <header className={styles.formHeader}>
          <div>
            Swap
          </div>
          <div>
            <RiSettings3Fill />
          </div>
        </header>
        <div className={styles.transferPropContainer}>

        </div>
      </form>
    </main>
  );
}

export default Main;

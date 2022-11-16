import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const styles = {
  wrapper:
    "h-screen max-h-screen h-min-screen w-screen bg-[#2d242f] text-white select-none flex flex-col justify-between",
};

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <header>header</header>
      <main>main</main>
      <footer>footer</footer>
    </div>
  );
};

export default Home;

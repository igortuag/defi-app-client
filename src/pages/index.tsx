import type { NextPage } from "next";
import Header from "../components/Header";

const styles = {
  wrapper:
    "h-screen max-h-screen h-min-screen w-screen bg-[#2d242f] text-white select-none flex flex-col justify-between",
};

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>main</main>
      <footer>footer</footer>
    </div>
  );
};

export default Home;

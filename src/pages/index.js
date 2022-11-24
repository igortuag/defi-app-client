import Header from "../components/Header";
import Main from "../components/Main";

const styles = {
  wrapper:
    "h-screen max-h-screen h-min-screen w-screen bg-[#2d242f] text-white select-none flex flex-col justify-between",
};

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Main />
      <footer>footer</footer>
    </div>
  );
};

export default Home;

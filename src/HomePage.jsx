import SearchContainer from "./SearchPanel/SearchContainer";
import Hero from "./Hero/Hero";
import NavBar from "./NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div>
        <Hero />
        <SearchContainer />
      </div>
    </>
  );
};

export default HomePage;

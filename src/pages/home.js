import React from "react";
import DebouncedINput from "../components/debounce-input";
import useWindowSize from "../hooks/use-window";

const Home = () => {
  const { width, height } = useWindowSize();

  return (
    <div className="page">
      <h1>Home Page</h1>
      <p>Welcome to home page</p>
      <DebouncedINput />
      <div>
        <p>Width:{width} </p>
        <p>Height: {height}</p>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import DebouncedINput from "../components/debounce-input";

const Home = () => {
  return (
    <div className="page">
      <h1>Home Page</h1>
      <p>Welcome to home page</p>
      <DebouncedINput />
    </div>
  );
};

export default Home;

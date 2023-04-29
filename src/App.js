import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import "./style.css";

import Data from "./Data";

export default function App() {
  const cardElements = Data.map((data) => {
    return <Card key={data.countryName} data={data}></Card>;
  });
  console.log(cardElements);
  return (
    <div className="app">
      <Navbar />
      <div className="card-container"></div>
      {cardElements}
    </div>
  );
}

import React from "react";
import Cards from "./Cards.jsx";
import Data from "./Data.jsx";

function App() {
  return (
    <>
      <h1 className="heading"> Top Netflix Webseries</h1>
      <Cards
        imgsrc={Data[0].imgscr}
        title={Data[0].title}
        sname={Data[0].sname}
        link={Data[0].link}
      />
      <Cards
        imgsrc={Data[1].imgscr}
        title={Data[1].title}
        sname={Data[1].sname}
        link={Data[1].link}
      />
      <Cards
        imgsrc={Data[2].imgscr}
        title={Data[2].title}
        sname={Data[2].sname}
        link={Data[2].link}
      />
      <Cards
        imgsrc={Data[3].imgscr}
        title={Data[3].title}
        sname={Data[3].sname}
        link={Data[3].link}
      />
      <Cards
        imgsrc={Data[4].imgscr}
        title={Data[4].title}
        sname={Data[4].sname}
        link={Data[4].link}
      />
    </>
  );
}

export default App;

import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

import "./styles.css";

import MapChart from "./components/MapChart";

function App() {
  const [content, setContent] = useState("");
  return (
    <div>
      <MapChart setTooltipContent={setContent} />
      {console.log('App content ', content)}
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

export default App;

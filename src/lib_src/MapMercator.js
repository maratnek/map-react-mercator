import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import MapChart from "./components/MapChart";

// import "./styles.css";



function MapMercator({markers}) {
  const [content, setContent] = useState("");
  return (
    <div>
      <MapChart setTooltipContent={setContent} markers={markers}/>
      {console.log('App content ', content)}
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

export default MapMercator;

import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";

const geoUrl =
//   "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
  {
    markerOffset: -30,
    name: "Buenos Aires",
    coordinates: [-58.3816, -34.6037]
  },
  { markerOffset: 15, name: "La Paz", coordinates: [-68.1193, -16.4897] },
  { markerOffset: 15, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
  { markerOffset: 15, name: "Santiago", coordinates: [-70.6693, -33.4489] },
  { markerOffset: 15, name: "Bogota", coordinates: [-74.0721, 4.711] },
  { markerOffset: 15, name: "Quito", coordinates: [-78.4678, -0.1807] },
  { markerOffset: -30, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
  { markerOffset: -30, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
  { markerOffset: 15, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
  { markerOffset: 15, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
  { markerOffset: 15, name: "Caracas", coordinates: [-66.9036, 10.4806] },
  { markerOffset: 15, name: "Lima", coordinates: [-77.0428, -12.0464] }
];

const rounded = num => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};


const MapChart = ({ setTooltipContent }) => {
  return (
    <ComposableMap
    //   projection="geoAzimuthalEqualArea"
       projection="geoMercator"
    //   projectionConfig={{
        // rotate: [58.0, 20.0],
        // scale: 400
    //   }}
    >
        <ZoomableGroup zoom={1}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies
            // .filter(d => d.properties.REGION_UN === "Americas")
            .map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
                onMouseEnter={() => {
                  const { NAME, POP_EST } = geo.properties;
                  setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                }}
                style={{
                  default: {
                    fill: "#D6D6DA",
                    stroke: "#D6D6DA",
                    outline: "none"
                  },
                  hover: {
                    fill: "#F53",
                    stroke: "#F53",
                    outline: "none"
                  },
                  pressed: {
                    fill: "#E42",
                    stroke: "#E42",
                    outline: "none"
                  }
                }}
              />
            ))
        }
        </Geographies>
        {/* {markers.map(({ name, coordinates, markerOffset }) => (
          <Marker key={name} coordinates={coordinates}
            onMouseEnter={() => {
              console.log('mouse enter');
              // setTooltipContent(`MouseEnter`);
              // const { NAME, POP_EST } = geo.properties;
              setTooltipContent(`${name}`);
            }}
            onMouseLeave={() => {
              console.log('mouse leave');
              setTooltipContent("");
            }}
            style={{
              default: {
            fill: "#D6D6DA",
            outline: "none"
          },
          hover: {
            fill: "#F53",
            outline: "none"
          },
          pressed: {
            fill: "#E42",
            outline: "none"
          }
        }}
        >
          <g
            fill="none"
            stroke="#aa1133"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="scale(0.5) translate(-12, -24) "
          >
            <circle cx="12" cy="10" r="3" /> 
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))} */}
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default MapChart;
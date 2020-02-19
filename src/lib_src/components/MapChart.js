import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";
// import './map-chart.css';

const geoUrl =
  //   "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";



const MapChart = ({ setTooltipContent, markers }) => {
  return (
    <div className="mapChart">
      <ComposableMap data-tip="" height={400} width={800} projection="geoMercator">
        <ZoomableGroup zoom={0.8}
        minZoom={0.5}
        center={[0,25]}
        >
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
                      // const { NAME, POP_EST } = geo.properties;
                      // setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                    }}
                    onMouseLeave={() => {
                      // setTooltipContent("");
                    }}
                    style={{
                      default: {
                        fill: "#D6D6DA",
                        stroke: "#fff",
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
          {markers.map(({ name, coordinates, markerOffset }) => (
            <Marker key={name} coordinates={coordinates}
              onMouseEnter={() => {
                console.log('mouse enter');
                setTooltipContent(`${name}`);
              }}
              onMouseLeave={() => {
                console.log('mouse leave');
                setTooltipContent("");
              }}
              style={{
                default: {
                  fill: "#D6D6DA",
                  stroke: "#F53",
                  outline: "none"
                },
                hover: {
                  fill: "#F53",
                  stoke: "#D6D6D6",
                  outline: "none"
                },
                pressed: {
                  fill: "#E42",
                  outline: "none"
                }
              }}
            >
              <g
                className="mapMarker"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="scale(0.5) translate(-12, -24) "
              >
                <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
              </g>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </div>

  );
};

export default MapChart;
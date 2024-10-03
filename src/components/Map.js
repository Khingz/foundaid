import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup
} from 'react-simple-maps'
import { countries } from "../utils/countries";

const geoUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-110m.json';

const Maps = () => {
    return (
        <div className="md:w-2/3 w-full border border-blue-200 bg-gray-50">
            <ComposableMap data-tip="">
                <ZoomableGroup center={[0, 0]} zoom={1}>
                    <Geographies geography={geoUrl}
                    
                    >
                        {({ geographies }) => 
                            geographies.map(geo => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    style={{
                                        default: {
                                          fill: "#1355A9",
                                          outline: "none"
                                        },
                                        hover: {
                                          fill: "#94C83F",
                                          outline: "none"
                                        },
                                        pressed: {
                                          fill: "#E42",
                                          outline: "none"
                                        }
                                    }}
                                />
                            ))
                        }
                    </Geographies>
                    {
                        countries.map(({ name, coordinates, markerOffset }) => (
                            <Marker key={name} coordinates={coordinates}>
                                <circle r={4} fill="#333" />
                                <text
                                    textAnchor="middle"
                                    x={markerOffset}
                                    className="text-[0.5rem]"
                                >
                                    {name}
                                </text>
                            </Marker>
                        ))
                    }
                </ZoomableGroup>
            </ComposableMap>
        </div>
    );
}

export default Maps;
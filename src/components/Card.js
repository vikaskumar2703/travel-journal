import React from "react";
import locPin from "./Fill 220.png";
import "../style.css";
export default function Card(props) {
  // console.log(Data);
  return (
    <div className="card">
      <img className="card-img" src={props.data.imageUrl} />
      <div className="info">
        <div className="location-info">
          <img className="loc-pin" src={locPin} />
          <p>{props.data.countryName}</p>
          <a className="map-link" href="#">
            View on Google Maps
          </a>
        </div>
        <h1 className="loc-name">{props.data.locName}</h1>
        <br />
        <p className="dates">{props.data.date}</p>
        <br />
        <p className="loc-para">{props.data.locPara}</p>
      </div>
    </div>
  );
}

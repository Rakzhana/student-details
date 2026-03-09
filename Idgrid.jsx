import React from "react";
import data from './../components/Idgrid.json';
import "./Idgrid.css";

export default function Idgrid({data}) {
  return (
    <div className="stud">
      <h2 className="grid-title">Student Grid</h2>

      <div className="grid-container">
        {data.map((val) => (
          <div className="grid-card" key={val.id}>
            <h3>{val.Name}</h3>
            <p>Course: {val.course}</p>
            <p>Roll No: {val.Roll}</p>
            <p>Duration: {val.Duration}</p>
            <p>Reg No: {val.Reg}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

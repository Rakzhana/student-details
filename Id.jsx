import React from "react";
import "./Id.css";
import data from './../components/Idgrid.json';
export default function Id({data}) {
     return (
    <div>
        <h2>Student Table</h2>

        <table border={1}>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Roll No</th>
                    <th>Duration</th>
                    <th>Reg No</th>
                </tr>

            {
                data.map((val)=>(
                    <tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.Name}</td>
                        <td>{val.course}</td>
                        <td>{val.Roll}</td>
                        <td>{val.Duration}</td>
                        <td>{val.Reg}</td>
                    </tr>
                ))
            }

        </table>
    </div>
  );
}

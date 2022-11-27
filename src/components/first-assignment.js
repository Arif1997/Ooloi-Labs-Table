import "../css/FirstAssignment.css";
import React from "react";
import { useEffect, useState } from "react";
import SortIconComponent from "./sort-icon-component";
import TaskDescription from "./task-description";

function FirstAssignment(props) {
  const both = props.column.option_one && props.column.option_two;
  const first = props.column.option_one;
  const second = props.column.option_two;
  const anyone = props.column.option_one || props.column.option_two;
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("tableTestData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };

  const [sorted_Name, setSortedName] = useState(false);
  const [sorted_City, setSortedCity] = useState(false);
  const [sorted_Date, setSorted_Date] = useState(false);
  const [sorted_Role, setSorted_Role] = useState(false);

  const sortName = () => setSortedName(true);
  const sortCity = () => setSortedCity(true);
  const sortDate = () => setSorted_Date(true);
  const sortRole = () => setSorted_Role(true);

  const sortedName = [...data.map((j) => j.person.name)].sort((a, b) =>
    a.toLowerCase() < b.toLowerCase() ? -1 : 1
  );

  const sortedRole = [...data.map((j) => j.role)].sort((a, b) =>
    a.toLowerCase() < b.toLowerCase() ? -1 : 1
  );
  const sortedCity = [...data.map((j) => j.city)].sort((a, b) =>
    a.toLowerCase() < b.toLowerCase() ? -1 : 1
  );
  let sortedDate = [...data.map((j) => j.joiningDate)].sort((a, b) =>
    a.split("/").reverse().join().localeCompare(b.split("/").reverse().join())
  );
  // if we don't use spread operator anyone of the columns values the whole table will be arranged
  // based on the mentioned columns
  useEffect(() => {
    getData();
  }, []);

  const items = data.map((x, index) => (
    <tr className="table_rows" key={index}>
      {first && (
        <td style={{ display: "flex" }}>
          <img src={x.person.avatar} alt="Pofile" id="profile_image"></img>
          {sorted_Name ? sortedName[index] : x.person.name}
        </td>
      )}
      {both && <td>{sorted_City ? sortedCity[index] : x.city}</td>}
      {anyone && (
        <td
          style={{
            width: "220px",
          }}
        >
          <a href="https://mail.google.com/" style={{ color: "blue" }}>
            {x.email}
          </a>
        </td>
      )}
      {second && <td>{sorted_Date ? sortedDate[index] : x.joiningDate}</td>}
      {anyone && <td> {sorted_Role ? sortedRole[index] : x.role}</td>}
    </tr>
  ));

  return (
    <div className="task_one">
      { ( <TaskDescription anyone={anyone} option_one={first} option_two={second} both={both}/>)}
      <div>
        {props.column.all && (
          <table className="table_group_one">
            <tbody>
              <tr className="table_rows">
                {first && (
                  <th>
                    Name
                    <span onClick={sortName}>
                      <SortIconComponent />
                    </span>
                  </th>
                )}
                {both && (
                  <th>
                    City{" "}
                    <span onClick={sortCity}>
                      <SortIconComponent />
                    </span>
                  </th>
                )}
                {anyone && (
                  <th>
                    Email Address{" "}
                    <span>
                      <SortIconComponent />
                    </span>
                  </th>
                )}
                {second && (
                  <th>
                    Joining Date{" "}
                    <span onClick={sortDate}>
                      <SortIconComponent />
                    </span>
                  </th>
                )}
                {anyone && (
                  <th>
                    Role{" "}
                    <span onClick={sortRole}>
                      <SortIconComponent />
                    </span>
                  </th>
                )}
              </tr>
              {items}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default FirstAssignment;

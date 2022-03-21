import React, { useState } from "react";

function Loggedin() {
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [opt, setOpt] = useState("");
  const [print, setPrint] = useState([]);
  function submitForm(e) {
    const dataV = [];
    if (name !== "") {
      dataV.push(name);
    }
    if (lname !== "") {
      dataV.push(lname);
    }
    if (opt !== "") {
      dataV.push(opt);
    }
    setPrint(dataV);
    e.preventDefault();
  }
  return (
    <>
      <form style={{ display: "flex", flexDirection: "column", margin: "5px" }}>
        <input
          placeholder="Name...."
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          placeholder="Lastname...."
          value={lname}
          onChange={(e) => {
            setLname(e.target.value);
          }}
        />
        <select
          value={opt}
          onChange={(e) => {
            setOpt(e.target.value);
          }}
        >
          <option value="">Select</option>
          <option value="a">Option A</option>
          <option value="b">Option B</option>
        </select>
        <button
          onClick={(e) => {
            submitForm(e);
          }}
        >
          Submit
        </button>
      </form>
      {print.length > 0 ? (
        <ul>
          {print.map((el) => {
            return <li>{el}</li>;
          })}
        </ul>
      ) : (
        <></>
      )}
    </>
  );
}

export default Loggedin;

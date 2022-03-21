import React, { useState } from "react";

function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPass] = useState("");
  const [value, setValue] = useState("");
  const [error, setError] = useState([]);
  function submitForm(e) {
    const validationError = [];
    if (!phone || phone.length !== 10) {
      validationError.push("Phone number is not valid");
    }
    if (!password) {
      validationError.push("password is missing");
    }
    if (!value) {
      validationError.push("Gender is missing");
    }
    setError(validationError);
    e.preventDefault();
  }
  return (
    <>
      <h1>Login Form</h1>
      {error.length > 0 ? (
        <ul>
          {error.map((val) => {
            return <li>{val}</li>;
          })}
        </ul>
      ) : (
        <></>
      )}
      <form style={{ display: "flex", flexDirection: "column" }}>
        <input
          placeholder="Phone"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <select
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button
          onClick={(e) => {
            submitForm(e);
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Login;

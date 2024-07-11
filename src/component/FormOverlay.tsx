import React, { useState } from "react";
import Style from "./formoverlay.module.scss";

interface IHide {
  handleHide: any;
}

const FormOverlay: React.FC<IHide> = ({ handleHide }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [item, setItem] = useState("");
  const [error, setError] = useState("");
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");
  const handleData = (e: any) => {
    e.preventDefault();
    if (name === "") {
      setError("Name is Required");
    } else {
      setError("");
    }

    if (number === "") {
      setError1("Number is Required");
    } else if (number.length > 10 || number.length < 10) {
      setError1("Please Enter 10 Digit Number");
    } else {
      setError1("");
    }

    if (email === "") {
      setError2("Email is Required");
    } else {
      setError2("");
    }

    if (item === "") {
      setError3("Item is Required");
    } else {
      setError3("");
    }
  };
  return (
    <>
      <div className={Style.overlay}>
        <div className={Style.oveerlayform}>
          <h2>INQUIRE NOW !</h2>
          <form onSubmit={handleData}>
            <div className={Style.box}>
              <label>Name *:</label>
              <br />
              <input
                type="text"
                placeholder="Nikhil singh"
                value={name}
                onChange={(e: any) => setName(e.target.value)}
              />
              <br />
              <span>{error}</span>
            </div>
            <div className={Style.box}>
              <label>Mobile Number *:</label>
              <br />
              <input
                type="text"
                placeholder="9369212707"
                value={number}
                onChange={(e: any) => setNumber(e.target.value)}
              />
              <br />
              <span>{error1}</span>
            </div>
            <div className={Style.box}>
              <label>Email *:</label>
              <br />
              <input
                type="email"
                placeholder="nikhilsurvanshi137@gmail.com"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />
              <br />
              <span>{error2}</span>
            </div>
            <div className={Style.box}>
              <label>Select Project *:</label>
              <br />
              <select
                onChange={(e: any) => setItem(e.target.value)}
                value={item}
              >
                <option>—Please choose an option—</option>
                <option>Majestique Residence</option>
                <option>Mon Reve</option>
                <option>Le Presidium</option>
                <option>Le Solarium</option>
                <option>The Prism</option>
              </select>
              <span>{error3}</span>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
      <div className={Style.cross} onClick={handleHide}>
        X
      </div>
    </>
  );
};

export default FormOverlay;

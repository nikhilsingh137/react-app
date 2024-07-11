import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { fetchFooter } from "../redux/SliceApi";
import Style from "./footer.module.scss";

interface IType {
  email: string;
}

const Footer = () => {
  const [detail, setDetail] = useState<IType>({
    email: "",
  });

  const [submit, setSubmit] = useState(true);
  const [error, setError] = useState("");

  const handleData = (e: any) => {
    const newData = { ...detail, [e.target.id]: e.target.value };
    setDetail(newData);
  };
  const mydata = (e: any) => {
    e.preventDefault();
    if (detail.email === "") {
      setError("This field is required");
      setSubmit(true);
    } else {
      setError("");
      setSubmit(false);
    }

    const object: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: detail.email,
      }),
    };
    fetch("http://localhost:5000/post", object)
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchFooter());
  }, [dispatch]);
  return (
    <div className={Style.footer}>
      <div className={Style.footerTop}>
        {data.footerData &&
          data.footerData.map((item) => {
            return (
              <div className={Style.foot}>
                <h2>
                  {item.heading}
                  <i></i>
                </h2>

                <ul>
                  {item.data &&
                    item.data.map((item) => {
                      return (
                        <li>
                          <a href="#/">{item.address}</a>
                        </li>
                      );
                    })}
                </ul>
                {Number(item.id) === 3 && (
                  <div className={Style.inputBox}>
                    {submit ? (
                      <form onSubmit={mydata}>
                        <div>
                          <input
                            type="email"
                            placeholder="Your Email (required)"
                            id="email"
                            value={detail.email}
                            onChange={handleData}
                          />
                          <br></br>
                          <span>{error}</span>
                        </div>
                        <button>SignUp</button>
                      </form>
                    ) : (
                      <p>SignUp completed</p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Footer;

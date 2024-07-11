import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { fetchCity, fetchHeder } from "../redux/SliceApi";
import HeaderProp from "./HeaderProp";
import Style from "./Header.module.scss";
import HDImg from "../img/Credo-Designer-Web-Logo.png";
import StickyBox from "react-sticky-box";
import FormOverlay from "../component/FormOverlay";

const Header = () => {
  const [detail, setDetail] = useState("");
  const [toggle, setToggle] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);

  useEffect(() => {
    dispatch(fetchHeder());
    dispatch(fetchCity());
  }, [dispatch]);

  const handleData = (e: any) => {
    setDetail(e.target.value.toLowerCase());
    setToggle(true);
  };

  const filteredData = data.cityData.filter((item) =>
    item.city.toLowerCase().includes(detail)
  );

  const handleItemClick = (title: any) => {
    setDetail(title);
    setToggle(false);
  };

  const handledata = (e: any) => {
    e.preventDefault();
    window.location.href = `/${detail}`;
  };

  const navOpen = () => {
    const slider = document.getElementById("slider");
    const open = document.getElementById("navOpen");
    const close = document.getElementById("navClose");
    if (slider && open && close) {
      slider.style.width = "270px";
      open.style.display = "none";
      close.style.display = "block";
    }
  };

  const navClose = () => {
    const slider = document.getElementById("slider");
    const open = document.getElementById("navOpen");
    const close = document.getElementById("navClose");
    if (slider && open && close) {
      slider.style.width = "0";
      open.style.display = "block";
      close.style.display = "none";
    }
  };

  const showDiv = () => {
    setOverlay(true);
    document.body.style.overflow = "hidden";
  };
  const handleoverlay = () => {
    setOverlay(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <StickyBox style={{ zIndex: "99" }}>
        <div className={Style.container}>
          {overlay && (
            <div className={Style.overlay} id={Style.overlay}>
              <FormOverlay handleHide={handleoverlay} />
            </div>
          )}
          <div className={Style.Content}>
            <div className={Style.logo}>
              <img src={HDImg} alt="Logo" />
            </div>
            <div className={Style.data}>
              {data.headerData &&
                data.headerData.map((item, index) => (
                  <HeaderProp key={index} data={item} />
                ))}
            </div>
            <div className={Style.icon}>
              <a href="#/" className={Style.whatsapp}>
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <span>
                <a href="#/" className={Style.envelope} onClick={showDiv}>
                  <i className="fa-solid fa-envelope"></i>Inquire Now
                </a>
                <br />
                <h2>Inquire Now!</h2>
              </span>

              <div className={Style.input}>
                <form onSubmit={handledata}>
                  <input
                    type="text"
                    placeholder="Search"
                    name="name"
                    value={detail}
                    autoComplete="off"
                    onChange={handleData}
                  />
                  <i className="fa-solid fa-magnifying-glass"></i>
                </form>
                {toggle && (
                  <div className={Style.drop}>
                    {filteredData.map((item) => (
                      <a
                        id={Style.drop}
                        key={item.city}
                        onClick={() => handleItemClick(item.city)}
                        href="#/"
                      >
                        {item.city}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className={Style.button}>
              <h2 id="navOpen" onClick={navOpen}>
                ☰
              </h2>
              <h3 id="navClose" onClick={navClose} style={{ display: "none" }}>
                X
              </h3>
            </div>
          </div>

          <div className={Style.sidebar} id="slider">
            <div className={Style.inputbox}>
              <form onSubmit={handledata}>
                <input
                  type="text"
                  placeholder="Search"
                  name="name"
                  value={detail}
                  autoComplete="off"
                  onChange={handleData}
                />
              </form>
              {toggle && (
                <div className={Style.drop}>
                  {filteredData.map((item) => (
                    <a
                      id={Style.drop}
                      key={item.city}
                      onClick={() => handleItemClick(item.city)}
                      href="#/"
                    >
                      {item.city}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className={Style.navbar}>
              {data.headerData &&
                data.headerData.map((item, index) => (
                  <HeaderProp key={index} data={item} />
                ))}
            </div>
            <div className={Style.sideIcon}>
              <ul>
                <li>
                  <a href="#/" className={Style.whatsapp}>
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </li>
                <li>
                  <a href="#/" className={Style.envelope}>
                    <i className="fa-solid fa-envelope"></i>Inquire Now
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </StickyBox>
    </>
  );
};

export default Header;

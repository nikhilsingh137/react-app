import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { fetchHeder } from "../redux/SliceApi";
import HeaderProp from "./HeaderProp";
import Style from "./Header.module.scss";
import HDImg from "../img/Credo-Designer-Web-Logo.png";

const Header = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchHeder());
  }, [dispatch]);

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
  return (
    <div className={Style.container}>
      <div className={Style.Content}>
        <div className={Style.logo}>
          <img src={HDImg} alt="Logo" />
        </div>
        <div className={Style.data}>
          {data.headerData &&
            data.headerData.map((item) => {
              return (
                <>
                  <HeaderProp data={item} />
                </>
              );
            })}
        </div>
        <div className={Style.icon}>
          <a href="#/" className={Style.whatsapp}>
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="#/" className={Style.envelope}>
            <i className="fa-solid fa-envelope"></i>Inquire Now
          </a>
          <div className={Style.input}>
            <input type="text" placeholder="search" />
            <i className="fa-solid fa-magnifying-glass"></i>
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
          <input type="text" placeholder="Search" />
        </div>
        <div className={Style.navbar}>
          {data.headerData &&
            data.headerData.map((item) => {
              return (
                <>
                  <HeaderProp data={item} />
                </>
              );
            })}
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
  );
};

export default Header;

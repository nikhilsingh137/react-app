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
      </div>
    </div>
  );
};

export default Header;

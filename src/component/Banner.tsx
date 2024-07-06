import React, { useEffect } from "react";
import Style from "./banner.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { fetchBanner } from "../redux/SliceApi";

const Banner = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchBanner());
  }, [dispatch]);
  return (
    <div className={Style.banner}>
      {data.bannerData &&
        data.bannerData.map((item) => {
          return (
            <div className={Style.content}>
              <h2>{item.title}</h2>
              <p>{item.paragraph}</p>
              <a href={item.url}>{item.button}</a>
            </div>
          );
        })}
    </div>
  );
};

export default Banner;

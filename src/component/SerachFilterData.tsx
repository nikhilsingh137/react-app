import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { fetchCity } from "../redux/SliceApi";
import { useParams } from "react-router-dom";
import Style from "./serachfilter.module.scss";

const SerachFilterData = () => {
  const { userData } = useParams();
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchCity());
  }, [dispatch]);
  const filterData =
    data.cityData && data.cityData.filter((item) => item.city === userData);

  return (
    <div className={Style.data}>
      {filterData &&
        filterData.map((item) => {
          return (
            <div className={Style.content}>
              <div className={Style.heding}>
                <h2>
                  {item.name} <span>{item.city}</span>
                </h2>
              </div>
              <div className={Style.image}>
                {item.image &&
                  item.image.map((item) => {
                    return (
                      <span>
                        <img src={item} alt="" />
                      </span>
                    );
                  })}
              </div>
              <div className={Style.paragraph}>
                <p>{item.detail}</p>
                <h2>{item.area}</h2>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SerachFilterData;

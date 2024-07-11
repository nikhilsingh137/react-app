import React, { useEffect } from "react";
import Style from "./homeimagebox.module.scss";
import HOmeImg from "../img/best-property-developer-in-dubai-credo-investments-fze-scaled.jpg";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { fetchImagebox } from "../redux/SliceApi";

const HomeImagebox = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchImagebox());
  }, [dispatch]);

  return (
    <div className={Style.homeimagebox}>
      <span>
        <img src={HOmeImg} alt="HomeImage" />
        <div className={Style.content}>
          {data.imageData &&
            data.imageData.map((item) => {
              return (
                <>
                  <h2>{item.title}</h2>
                  <p>{item.paragraph}</p>
                  <a href={`/about${item.url}`}>{item.button}</a>
                </>
              );
            })}
        </div>
      </span>
    </div>
  );
};

export default HomeImagebox;

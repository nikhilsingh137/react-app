import React, { useEffect } from "react";
import Style from "./feature.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { fetchFeature } from "../redux/SliceApi";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Feature = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchFeature());
  }, [dispatch]);
  return (
    <div className={Style.feature}>
      {data.featureData &&
        data.featureData.map((item) => {
          return (
            <>
              <div className={Style.header}>
                <i></i>
                <h2>{item.Heading}</h2>
                <span></span>
              </div>
              <div className={Style.detail}>
                <div className={Style.data}>
                  <div className={Style.frame}>
                    <h2>{item.title}</h2>
                    <p>{item.paragraph}</p>
                    <a href="#/">{item.button}</a>
                  </div>
                </div>
                <div className={Style.image}>
                  <OwlCarousel
                    items={1}
                    loop
                    autoplay
                    autoplayTimeout={3000}
                    dots={false}
                  >
                    {item.image &&
                      item.image.map((item) => {
                        return (
                          <span>
                            <img src={item} alt="" />
                          </span>
                        );
                      })}
                  </OwlCarousel>

                  <div className={Style.file}>
                    {item.data &&
                      item.data.map((item) => {
                        return (
                          <div className={Style.area}>
                            <h2>{item.roof}</h2>
                            <h3>{item.pool}</h3>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Feature;

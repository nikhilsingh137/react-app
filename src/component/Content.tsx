import React, { useEffect } from "react";
import Style from "./content.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { fetchFeature } from "../redux/SliceApi";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Content = () => {
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
              <div className={Style.detail}>
                <div className={Style.image}>
                  <OwlCarousel
                    items={1}
                    loop
                    autoplay
                    autoplayTimeout={3000}
                    dots={false}
                  >
                    {item.image1 &&
                      item.image1.map((item) => {
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
                <div className={Style.data}>
                  <div className={Style.frame}>
                    <h2>{item.title1}</h2>
                    <p>{item.paragraph1}</p>
                    <a href="#/">{item.button1}</a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Content;

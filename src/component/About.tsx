import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { fetchAbout } from "../redux/SliceApi";
import Style from "./about.module.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useParams } from "react-router-dom";

const About = () => {
  const { userAbout } = useParams();
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchAbout());
  }, [dispatch]);

  console.log("userAbout:", userAbout);
  console.log("data.aboutData:", data.aboutData);

  const filterData =
    data.aboutData &&
    data.aboutData.filter((item) => item.url === `/${userAbout}/`);
  console.log(filterData, "hello");

  return (
    <div className={Style.about}>
      {filterData &&
        filterData.map((item) => {
          return (
            <div className={Style.data}>
              {item.id.toString() === "2" && (
                <div className={Style.video}>
                  <iframe
                    id="ytplayer-50"
                    className="ux-youtube fill object-fit visible"
                    data-videoid="Y3_p-DG3xAs"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    title="Explore Best Property in Dubai South - Majestique Residence | Ready To Move Apartments in Dubai"
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/Y3_p-DG3xAs?html5=1&amp;autoplay=1&amp;controls=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;fs=0&amp;loop=1&amp;el=0&amp;playlist=Y3_p-DG3xAs&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.credouae.com&amp;widgetid=1"
                    data-gtm-yt-inspected-92957565_17="true"
                  ></iframe>
                </div>
              )}
              <span>
                <img src={item.img} alt="about" />
                <div className={Style.heading}>
                  <h2>{item.title}</h2>
                </div>
              </span>
              <div className={Style.content}>
                <div className={Style.image}>
                  <OwlCarousel
                    items={1}
                    loop
                    autoplay
                    autoplayTimeout={3000}
                    dots={false}
                    animateOut="fade Out"
                    autoplaySpeed={5000}
                  >
                    {item.image &&
                      item.image.map((item) => (
                        <span>
                          <img src={item} alt="house" />
                        </span>
                      ))}
                  </OwlCarousel>
                </div>
                <div className={Style.text}>
                  <h2>{item.heading}</h2>
                  {item.paragraph &&
                    item.paragraph.map((item) => <p>{item.content}</p>)}
                </div>
              </div>
              <div className={Style.mainbox}>
                <div className={Style.project}>
                  <div className={Style.detail}>
                    <h2>{item.project}</h2>
                    <ul>
                      {item.data &&
                        item.data.map((item) => {
                          return (
                            <li>
                              <a href={`/about${item.url.replace(" ", "-")}`}>
                                {item.title}
                              </a>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                  <div className={Style.collection}>
                    {item.detail &&
                      item.detail.map((item) => {
                        return (
                          <strong>
                            <img src={item.img} alt="project" />
                            <h2>{item.title}</h2>
                            <p>{item.paragraph}</p>
                          </strong>
                        );
                      })}
                  </div>
                </div>
              </div>
              <div className={Style.client}>
                <div className={Style.clientWrapper}>
                  <div className={Style.clientData}>
                    <h2>{item.client}</h2>
                  </div>
                  <div className={Style.clientContent}>
                    <OwlCarousel
                      items={1}
                      loop
                      autoplay
                      autoplayTimeout={3000}
                      dots={false}
                      animateOut={"fadeOut"}
                    >
                      {item.about &&
                        item.about.map((item) => (
                          <div className={Style.frame}>
                            <div>
                              <img src={item.img} alt="" />
                            </div>
                            <div className={Style.cont}>
                              <p>{item.paragraph}</p>
                              <h2>
                                {item.name} /<strong>{item.company}</strong>
                              </h2>
                            </div>
                          </div>
                        ))}
                    </OwlCarousel>
                  </div>
                  <div className={Style.bottom}></div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default About;

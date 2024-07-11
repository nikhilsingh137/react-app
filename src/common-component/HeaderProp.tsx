import React from "react";
import { IHeader } from "../redux/Articel";
import Style from "./Header.module.scss";

interface IHeader1 {
  data: IHeader;
}

const HeaderProp: React.FC<IHeader1> = ({ data }) => {
  return (
    <ul>
      {data.Header &&
        data.Header.map((item, index) => {
          return (
            <li>
              <a href={item.url}>{item.title}</a>
              {(item.id === 2 || item.id === 4) && item.subTitle && (
                <>
                  <div
                    className={`${Style.drop} ${
                      item.id.toString() === "4" ? Style.specialDrop : ""
                    }`}
                  >
                    <div className={Style.project}>
                      <div className={Style.detail}>
                        <h2>{item.subHeading}</h2>
                        <ul>
                          {item.subMenu &&
                            item.subMenu.map((item) => {
                              return (
                                <li>
                                  <a
                                    href={`about${item.url
                                      .replace(" ", "-")
                                      .toLowerCase()}`}
                                  >
                                    {item.title}
                                  </a>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                      <div className={Style.collection}>
                        {item.media &&
                          item.media.map((item) => {
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
                </>
              )}
            </li>
          );
        })}
    </ul>
  );
};

export default HeaderProp;

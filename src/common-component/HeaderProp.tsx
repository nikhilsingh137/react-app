import React from "react";
import { IHeader } from "../redux/Articel";
// import Style from "./Header.module.scss";

interface IHeader1 {
  data: IHeader;
}

const HeaderProp: React.FC<IHeader1> = ({ data }) => {
  return (
    <ul>
      {data.Header &&
        data.Header.map((item) => {
          return (
            <li>
              <a href={item.url}>{item.title}</a>
            </li>
          );
        })}
    </ul>
  );
};

export default HeaderProp;

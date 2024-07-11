import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hook";
import {
  fetchAbout,
  fetchBanner,
  fetchCity,
  fetchFeature,
  fetchFooter,
  fetchHeder,
  fetchImagebox,
} from "./SliceApi";

const SliceData = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchHeder());
    dispatch(fetchImagebox());
    dispatch(fetchBanner());
    dispatch(fetchFeature());
    dispatch(fetchCity());
    dispatch(fetchAbout());
    dispatch(fetchFooter());
  }, [dispatch]);
  return (
    <>
      <div>
        {data.headerData &&
          data.headerData.map((item) => {
            return (
              <li>
                <a href="/">{item.Header[0].title}</a>
              </li>
            );
          })}
      </div>
      <div>
        {data.imageData && data.imageData.map((item) => <li>{item.title}</li>)}
      </div>
    </>
  );
};

export default SliceData;

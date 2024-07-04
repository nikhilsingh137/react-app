import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hook";
import { fetchHeder } from "./SliceApi";

const SliceData = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchHeder());
  }, [dispatch]);
  return <div>SliceData</div>;
};

export default SliceData;

import React from "react";
import { InfinitySpin } from "react-loader-spinner";
import "../component/Loader.css";

export default function Spinner() {
  return (
    <div>
      <div className="spinner-container">
        <div className="spinner">
        <InfinitySpin color="teal" width="150px" />
        </div>
      </div>
    </div>
  );
}

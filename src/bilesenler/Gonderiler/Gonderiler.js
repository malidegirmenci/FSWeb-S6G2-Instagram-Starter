import React from "react";
import Gonderi from "./Gonderi";
import "./Gonderiler.css";

const Gonderiler = (props) => {
  const { gonderiyiBegen, gonderiler } = props;
  
  return (
    <div className="posts-container-wrapper">
        {
          gonderiler.map((gonderi, index) => {
            return(
              <Gonderi gonderiyiBegen = {gonderiyiBegen} gonderi={gonderi} key={gonderi.id}/>
            )
          })
        }
    </div>
  );
};

export default Gonderiler;

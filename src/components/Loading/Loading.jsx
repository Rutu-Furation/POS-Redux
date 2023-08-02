import React from "react";

const Loading = () => {
  return (
    <div
    className="d-flex flex-column m-auto    justify-content-center"
 
    >
      <img
        style={{  width: "50px", height: "50px" }}
        src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif"
        alt=""
        className="m-auto"
      />
       {/* <p style={{margin:"auto",fontSize:"20px"}}>Loading...</p> */}
    </div>
  );
};

export default Loading;

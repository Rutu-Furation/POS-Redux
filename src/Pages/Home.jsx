import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { getTableList } from "../redux/table/table.action";
// import { getTableList } from "../redux/table/table.action";

const Home = () => {
  // const  { isLoading,
  // isError,
  // AreaData,} = useSelector((store)=>store.)

  // const disPatch = useDispatch()
  // useEffect(()=>{
  //   disPatch(getTableList())
  // },[])
  // console.log(TableListData)
  return (
    <>
      <h1>Welcome</h1>

      <Link to={`/panel/tables`}>
        <button>Click here to explore</button>
      </Link>
      <Link to={`/settings/basic`}>
        <button>Click here for settings</button>
      </Link>
    </>
  );
};

export default Home;

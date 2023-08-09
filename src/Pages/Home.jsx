import React from "react";

import { Link } from "react-router-dom";

const Home = () => {
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

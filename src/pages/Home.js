import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <div>{`현재 페이지 : ${location.pathname.slice(1)}`}</div>
      <button
        onClick={() => {
          navigate("/works");
        }}
      ></button>
    </div>
  );
};

export default Home;

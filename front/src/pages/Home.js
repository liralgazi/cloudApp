import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  const routeBooks = () => {
    let path = `/Books`;
    navigate(path);
  };
  return (
    <div
      style={{
        backgroundImage: "url(/../../books.png)",
        height: 900,
        width: 1500,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          marginLeft: 850,
          paddingTop: 170,
          color: "white",
          fontWeight: "bold",
        }}
      >
        <h1 style={{ fontSize: 60 }}>WELCOME</h1>
        <div style={{ fontSize: 40 }}>To Your Private Book Store</div>
        <div style={{ paddingTop: 40 }}>
          <button
            onClick={routeBooks}
            style={{ borderRadius: 10, backgroundColor: "grey", fontSize: 16 }}
          >
            go to book store
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
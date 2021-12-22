import React from "react";
import "./home.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
function Home() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("http://localhost:7000/clinic")
      .then(res => res.json())
      .then(data => setData(data));
  });
  function handleSendMsg() {}
  return (
    <>
      <div className="home">
        <h1 className="home__heading">Welcome to our Service</h1>

        <ul>
          <li>
            <NavLink to="/clinic">Clinics</NavLink>
          </li>
          <li>
            <NavLink to="/types">Types</NavLink>
          </li>
          <li>
            <NavLink to="/ochered">Send Order</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Home;

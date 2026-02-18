import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";



const Header = () => {
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://marketplace.canva.com/EAGZJ2Na9V0/1/0/1600w/canva-red-and-orange-bold-fast-food-restaurant-animated-logo-0ujmrXVcncU.jpg"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};


const Applayout = () => {
  return(
  <div className = "app">
    <Header/>
  </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>);

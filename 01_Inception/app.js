import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://marketplace.canva.com/EAGZJ2Na9V0/1/0/1600w/canva-red-and-orange-bold-fast-food-restaurant-animated-logo-0ujmrXVcncU.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const {resName, cuisine} = props;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/janhgjevj4xnyyg5htnv"
      ></img>
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>4.4 Stars</h4>
      <h4>38 Minutes </h4>
    </div>
  );
};



const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="Meghana Foods"
          cuisine="Biryani, North Indian, Asian"

        />
        <RestaurantCard 
        resName="KFC" 
        cuisine="Burger,Fast Food" 
        />
      </div>
    </div>
  );
};

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);

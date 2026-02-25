import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  // Local state varobale -> Super powerful variable
  let [ListOfRestaurants, setListOfRestaurants] = useState(resList);

  // useEffect(()=> {
  //     fetchdata();
  // }, []);

  

  // const fetchdata = async () =>{
  //   const data = fetch();
    
  //   const json = await data.json();
  //   console.log(json);
  //   // optional chaining
  //   setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    
  // };

  // if (listOfRestaurant.length === 0){
  //   return <h1>Loading .....</h1>
  // }

  return (
    <div className="body">
      <div className="filter">
        {/* filterlist button */}
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic here
            const filteredList = ListOfRestaurants.filter(
              (res) => res.data.avgRating > 4,
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurents
        </button>

        {/* reset list button  */}
        <button className = "reset-btn"
          onClick={() => {
            setListOfRestaurants(resList);
          }}
        >
          Reset
        </button>
      </div>
      <div className="res-container">
        {ListOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

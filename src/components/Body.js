import RestaurantCards from "./RestaurantCards";
import resObject from "../utils/resObject";
import OrderOption from "./OrderOption";
import { useEffect, useState } from "react";
import Filters from "./Filters";
import { URL } from "../service/zomatoData";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router";

const Body = () => {
  const [card, setListOfCard] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const [searchText, setSearchText] = useState("");
  const fetchData = async () => {
    const data = await fetch(URL);

    let response = await data.json();
    setListOfCard(
      response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // Conditional rendering
  // if (card.length === 0) {
  //   return (
  //       <ShimmerUI />
  //   );
  // }

  return card.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="searchBox"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filterRes = card?.filter((res) =>
                res?.info?.name?.toLowerCase().includes(searchText)
              );
              setFilteredRestaurant(filterRes);
            }}
          >
            Search
          </button>
        </div>
        <Filters
          label="Top Rated Restaurents ⭐"
          filterCondition={card.filter((res) => res.info.avgRating > 4.5)}
          setListofCards={setFilteredRestaurant}
        />
        <Filters
          label="Chinese 🍜"
          filterCondition={card.filter((res) =>
            res?.info?.cuisines?.some((resipe) => resipe === "Chinese")
          )}
          setListofCards={setFilteredRestaurant}
        />
        <Filters
          label="Breverages 🍵"
          filterCondition={card.filter((res) =>
            res?.info?.cuisines?.some((drinks) => drinks === "Beverages")
          )}
          setListofCards={setFilteredRestaurant}
        />
        <Filters
          label="Home Food 🍔"
          filterCondition={card.filter((resipe) =>
            resipe?.info?.cuisines?.some((res) => res === "Home Food")
          )}
          setListofCards={setFilteredRestaurant}
        />
        <Filters
          label="Punjabi 🍛"
          filterCondition={card.filter((resipe) =>
            resipe?.info?.cuisines?.some((res) => res === "Punjabi")
          )}
          setListofCards={setFilteredRestaurant}
        />
      </div>
      <div className="food-options">
        {resObject.data.orderType.map((type) => (
          <OrderOption key={type?.id} orderOptions={type} />
        ))}
      </div>
      <h3 className="card-heading">Discover best restaurants on Dineout</h3>
      <div className="card-container">
        {filteredRestaurant.map((restaurent) => (
          <Link className="link" key={restaurent?.info?.id} to={"/restaurent/" + restaurent?.info?.id}><RestaurantCards resData={restaurent} /></Link>
        ))}
      </div>
      {/* <RestaurantCards resData={resObject.data.cards[0]} /> */}
      {/* Passing Properies to the Component */}
    </div>
  );
};

export default Body;

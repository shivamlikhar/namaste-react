import RestaurantCards from "./RestaurantCards";
import resObject from "../utils/resObject";
import OrderOption from "./OrderOption";
import { useState } from "react";
import Filters from "./Filters";

const Body = () => {
  const [card, setListOfCard] = useState(resObject.data.cards);
  return (
    <div className="body">
      <div className="filter">
        <Filters
          label="Top Rated Restaurents ⭐"
          filterCondition={resObject.data.cards.filter((res) => res.rating > 4)}
          setListofCards={setListOfCard}
        />
        <Filters
          label="Chinese 🍜"
          filterCondition={resObject.data.cards.filter((res) =>
            res.cusins.some((resipe) => resipe === "Chinese")
          )}
          setListofCards={setListOfCard}
        />
        <Filters
          label="Breverages 🍵"
          filterCondition={resObject.data.cards.filter((res) =>
            res.cusins.some((drinks) => drinks === "Breverages")
          )}
          setListofCards={setListOfCard}
        />
        <Filters
          label="Fast Food 🍔"
          filterCondition={resObject.data.cards.filter((resipe) =>
            resipe.cusins.some((res) => res === "Fast Food")
          )}
          setListofCards={setListOfCard}
        />
        <Filters
          label="Biryani 🍛"
          filterCondition={resObject.data.cards.filter((resipe) =>
            resipe.cusins.some((res) => res === "Biryani")
          )}
          setListofCards={setListOfCard}
        />
      </div>
      <div className="food-options">
        {resObject.data.orderType.map((type) => (
          <OrderOption key={type?.id} orderOptions={type} />
        ))}
      </div>
      <h3 className="card-heading">Discover best restaurants on Dineout</h3>
      <div className="card-container">
        {card.map((restaurent) => (
          <RestaurantCards key={restaurent?.id} resData={restaurent} />
        ))}
        {/* <RestaurantCards resData={resObject.data.cards[0]} /> */}
        {/* Passing Properies to the Component */}
      </div>
    </div>
  );
};

export default Body;

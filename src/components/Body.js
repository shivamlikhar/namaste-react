import RestaurantCards from "./RestaurantCards";
import resObject from "../utils/resObject";
import OrderOption from "./OrderOption";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="food-options">
        {resObject.data.orderType.map((type) => (
          <OrderOption key={type?.id} orderOptions={type} />
        ))}
      </div>
      <h3 className="card-heading">Discover best restaurants on Dineout</h3>
      <div className="card-container">
        {resObject.data.cards.map((restaurent) => (
          <RestaurantCards key={restaurent?.id} resData={restaurent} />
        ))}
        {/* <RestaurantCards resData={resObject.data.cards[0]} /> */}
        {/* Passing Properies to the Component */}
      </div>
    </div>
  );
};

export default Body;

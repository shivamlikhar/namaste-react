import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router";
import { MENU_URL } from "../service/zomatoData";

const RestaurentMenu = () => {
  const [restaurent, setRestaurent] = useState(null);
  //   const [menu, setMenu] = useState();

  
  const { resId } = useParams();
  console.log(resId)
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        MENU_URL + resId +"&catalog_qa=undefined&submitAction=ENTER"
      );
      const json = await data.json();
      const ResData = json?.data || [];
      setRestaurent(ResData);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };
  console.log(restaurent);
  //   const { menuData } = menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
  // Show shimmer UI while menu is loading
  if (!restaurent) return <ShimmerUI />;

  const { name, cuisines, costForTwoMessage, areaName, id, avgRating } =
    restaurent?.cards[2]?.card?.card?.info || {};
  const itemCard =
    restaurent?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;
  return (
    <div>
      <div className="res-card">
        <div className="res-img">
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              restaurent?.cards[2]?.card?.card?.info?.cloudinaryImageId
            }
            width={150}
            height={150}
          ></img>
        </div>
        <div className="res-data">
          <div className="res-desc">
            <div className="res-details">
              <h4>{name}</h4>
              <p>{cuisines.join(" • ").toUpperCase()}</p>
              <p>{costForTwoMessage}</p>
            </div>
            <div className="res-ratings">
              <p>⭐{avgRating}</p>
              <span>📌 {areaName}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="menu">
        <div className="menu-heading">–— Menu –—</div>
        <div className="menu-card">
          {itemCard?.map((res) => (
            <div className="parent" key={res?.card?.info?.id}>
              <div className="menu-details">
                <h3 className="dish-name">{res?.card?.info?.name}</h3>
                <p className="dish-price">
                  ₹{res?.card?.info?.defaultPrice / 100 || res?.card?.info?.price  / 100}
                </p>
                <p className="dish-rating">
                  ⭐{res?.card?.info?.ratings?.aggregatedRating?.rating}
                  {res?.card?.info?.ratings?.aggregatedRating?.ratingCountV2
                    ? ` (${res.card.info.ratings.aggregatedRating.ratingCountV2})`
                    : ""}
                </p>
                <p className="dish-description">
                  {res?.card?.info?.description}
                </p>
              </div>
              <div className="menu-image">
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/" +
                    res?.card?.info?.imageId
                  }
                ></img>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurentMenu;

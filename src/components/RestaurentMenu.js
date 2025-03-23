import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router";
import { MENU_URL } from "../service/zomatoData";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurantCategory from "./RestaurentCategory";

const RestaurentMenu = () => {
  // const [restaurent, setRestaurent] = useState(null);
  //   const [menu, setMenu] = useState();

  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);
  const restaurent = useRestaurentMenu(resId); // how to get data is abstracted for RestaurentMenu Component becoz this operation done by customHook that is useRestaurentMenu
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   try {
  //     const data = await fetch(
  //       MENU_URL + resId +"&catalog_qa=undefined&submitAction=ENTER"
  //     );
  //     const json = await data.json();
  //     const ResData = json?.data || [];
  //     setRestaurent(ResData);
  //   } catch (error) {
  //     console.error("Error fetching menu:", error);
  //   }
  // };

  //   const { menuData } = menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
  // Show shimmer UI while menu is loading
  if (!restaurent) return <ShimmerUI />;

  const { name, cuisines, costForTwoMessage, areaName, id, avgRating } =
    restaurent?.cards[2]?.card?.card?.info || {};
  const itemCard =
    restaurent?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;
  const category = restaurent?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) => c.card.card['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
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
          {/* Controlled Component - Here we are getting index like whichever item we're selectign thaty index we getting 
          through map function & based on that for that index falg is getting true for other's false */}
          {/* Example of props Dilling */}
          {category.map((category, index) => (
            <RestaurantCategory
              key={category?.card?.card.categoryId}
              data={category?.card?.card}
              showItem={index === showIndex ? true : false}
              setShowIndex={() => { setShowIndex(index) }} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurentMenu;

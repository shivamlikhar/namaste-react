import { useContext } from "react";
import UserContext from "../utils/userContext";

const RestaurantCards = (props) => {
  const {loggedInUser} = useContext(UserContext);
  const { resData } = props;
  // const { cloudinaryImageId, name, cuisines, areaName, avgRating, costForTwo } = resData;
  return (
    <div className="card">
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/" + resData?.info?.cloudinaryImageId} width={300} height={200}></img>
      <h3 className="card-name">{resData?.info?.name}</h3>
      <h5 className="card-spices">
        <ul>
          <li>
            <span>{resData?.info?.cuisines.join(" • ")}</span>
          </li>
        </ul>
      </h5>
      <div className="card-details">
        <span className="location">{resData?.info?.areaName}</span>
        <span className="rating">{resData?.info?.avgRating} ⭐</span>
      </div>
      <span className="card-details">{resData?.info?.costForTwo}</span>
      <span className="card-details">User : {loggedInUser}</span>
      <div className="bookNow-btn">
        <button>
          <span className="text">Order Now</span> <span className="icon">⩥</span>
        </button>
      </div>
    </div>
  );
};

// Higher Order Function -  which take conponent as an argument and return a new component
// export const promotedRestaurentCards = (RestaurantCards) => {
//   return (props)=>{
//     return(
//       <div>
//         <p>Promoted</p>
//         <RestaurantCards {...props}/>
//       </div>
//     )
//   }
// }

export default RestaurantCards;
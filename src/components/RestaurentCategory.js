import React, { useState } from "react";
import { addToCard, removeItem, clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantCategory = (props) => {
    const { title, itemCards } = props.data;
    const { showItem, setShowIndex } = props; // Removed redundant destructuring
    function handleClicked() {
        setShowIndex();
    }

    const dispatch = useDispatch()
    const handleStoreItem = (cartItems) => {
        console.log(cartItems)
        // Dispatch an action to the redux Store - through this we're updating the existing state value by passing addToCard action in dispatch Function
        console.log("Add Button Clicked");
        dispatch(addToCard(cartItems)); // by clicking add+ => action is dispatched to the redux store => calls the reducer functions => update the slice of the store
        // here what dispatch will do it create a payload object & pass to the cartSlice reducers as secord argument of the actions object, 
        // inshot it will call the addToCard function from the cartSlice.js file and pass the payload object to it in the second argument in place of action
    }

    const handleStoreItemRemove = () =>{
        dispatch(removeItem());
    }
    return (
        <div className="restaurant-category">
            <div className="category-title" onClick={handleClicked}>
                <span className="title">{title}</span>
                <span className="action">
                    {/* <button style={{ border: "none", backgroundColor: "white" }}></button> */}
                </span>
            </div>
            <div className="description">
                {showItem && itemCards?.map((res) => (
                    <div className="parent" key={res?.card?.info?.id}>
                        <div className="menu-details">
                            <h3 className="dish-name">{res?.card?.info?.name}</h3>
                            <p className="dish-price">
                                ₹{res?.card?.info?.defaultPrice / 100 || res?.card?.info?.price / 100}
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

                            <button className="addBtn" onClick={() => handleStoreItem(res)}>+</button>
                            <span className="addBtn">Add</span>
                            <button className="addBtn" onClick={() => handleStoreItemRemove(res)}>-</button>
                            {/* By Clicking this button Dispatch an action to the redux Store */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RestaurantCategory;
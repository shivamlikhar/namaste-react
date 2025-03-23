import React, { useState } from "react";

const RestaurantCategory = (props) => {
    const { title, itemCards } = props.data;
    const { showItem, setShowIndex } = props; // Removed redundant destructuring
    function handleClicked() {
        setShowIndex()
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
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RestaurantCategory;
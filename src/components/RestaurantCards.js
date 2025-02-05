const RestaurantCards = (props) => {
  const { resData } = props;
  const { image, restName, cusins, location, rating, deliveryTime } = resData;

  return (
    <div className="card">
      <img src={image} width={300} height={200}></img>
      <h3 className="card-name">{restName}</h3>
      <h5 className="card-spices">
        <ul>
          <li>
            <span>{cusins.join(" • ")}</span>
          </li>
        </ul>
      </h5>
      <div className="card-details">
        <span className="location">{location}</span>
        <span className="rating">{rating} ⭐</span>
      </div>
      <span className="card-details">{deliveryTime} Mins</span>
      <div className="bookNow-btn">
        <button>
          <span className="text">Book Now</span> <span className="icon">⩥</span>
        </button>
      </div>
    </div>
  );
};

export default RestaurantCards;
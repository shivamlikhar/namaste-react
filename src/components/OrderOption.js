import foodDelivery from "../../assets/food-delivery.png";

const OrderOption = (props) => {
  const { orderOptions } = props;
  const { type, from, discount, img } = orderOptions;
  return (
    <div className="order-type">
      <div className="order-Options">
        <h1>{type}</h1>
        <h4>FROM {from}</h4>
        <h5>UPTO {discount}%</h5>
      </div>
      <div className="order-img">
        <div className="text">
          <span>👉</span>
        </div>
        <div className="image">
          <img src={foodDelivery} width={100} height={100}></img>
        </div>
      </div>
    </div>
  );
};

export default OrderOption;

import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router";

const CartItems = () => {

    const cartItems = useSelector((store) => { return store?.cart?.cartItems })
    console.log(cartItems)

    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (

        <>
            <div className="cart-body">
                <div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span className="title">Cart Items</span>
                        <button style={{ backgroundColor: "#ddd", color: "black", padding: "0.5rem", borderRadius: "3px", border: "none", fontWeight: "600" }}
                            onClick={handleClearCart}>Clear Cart</button>
                    </div>
                    {
                        cartItems.length === 0 ? <div style={{ textAlign: "center", verticalAlign: "center", padding: "1rem", fontSize: "1.5rem", fontFamily: "serif" }} ><span>Your cart is empty, Add something from the menu</span><br></br>
                            <button className="addBtn"><Link to="/">Browse Restaurents</Link></button>
                        </div> : null
                    }
                    {cartItems && cartItems?.map((items, index) => {
                        return (
                            <div className="bucket-list">
                                <div className="bucket-item" style={{ borderBottom: "1px solid gray", padding: "1rem" }}>

                                    <div className="item-name">
                                        <p>{items?.card?.info?.name}</p>
                                    </div>
                                    <div className="bucket-item" style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div className="item-details">
                                            <ul>
                                                <li className="dish-name">{items?.card?.info?.description}</li>
                                                <li className="dish-price">₹ {items?.card?.info?.price / 100}</li>
                                                <li className="dish-quantity">Quantity: 1</li>
                                            </ul>
                                        </div>
                                        <div className="bucket-item-image">
                                            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/" + items?.card?.info?.imageId} width={100} height={100}></img>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )

}

export default CartItems;
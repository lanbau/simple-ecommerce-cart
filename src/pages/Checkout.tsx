import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Checkout.css';
import { updateOrders, clearCart} from '../store/actions'
import { useHistory } from "react-router-dom";

interface BookInterface {
    body: string;
    id: number;
    price: number;
    src: string;
    title: string;
    userId: number;
}

interface RootState {
    cart: BookInterface[]
}
const Checkout = () => {
    const { cart } = useSelector((state: RootState) => state)
    const dispatch = useDispatch()
    const history = useHistory()
    const handleCheckout = () => {
        let newOrder = {
            date: new Date(),
            items: cart
        }
        dispatch(updateOrders(newOrder))
        dispatch(clearCart())
        history.push('/order')
    }

    return <div className="single-checkout">
        <div className="checkout-container">
            <div className="checkout-title">Shipping Address</div>
            <div>
                First Name
            </div>
            <div>
                Address
            </div>
            <div>Save Address Button</div>
            <div>Edit Address</div>
        </div>
        <div className="checkout-container">
            <div className="checkout-title">Shopping Bag</div>
            {cart.map(({ title }) => {
                return <div>
                    {title}
                </div>
            })
            }
            <div className="checkout-title">Payment Info</div>
            <div>Total</div>
            {/* Checkout will add cart to orders array with current Date */}
            <div onClick={() => handleCheckout()}>Checkout</div> 
            {/* Return to Home */}
            <div>Cancel</div>
        </div>
    </div>
}
export default Checkout
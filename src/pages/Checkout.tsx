import React, { useState } from 'react'
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

    const total = cart.reduce( (total, { price }) => {
        total = total + price
        return total
    }, 0)

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')

    const handleSubmit = (event: any) => {
        alert('A name was submitted: ' + name);
        event.preventDefault();
        const result = {
            name, 
            address,
            phone
        }
        console.log(result)
    }

    const handleChange = (event: any)  => {
        setName(event.target.value)
    }

    return <div className="single-checkout">
        <div className="checkout-container">
            <div className="checkout-title">Shipping Address</div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', marginBottom: 16 }}>
                    <label style={{ width: 150 }}>
                        Name:
                        <br></br>
                        <input type="text" onChange={e => setName(e.target.value)} />
                    </label>
                    <label>
                        Address:
                        <br></br>
                        <input type="text" onChange={e => setAddress(e.target.value)} />
                    </label>
                    <label>
                        Phone:
                        <br></br>
                        <input type="text" onChange={e => setPhone(e.target.value)} />
                    </label>
                    
                </form>
                <button className="book-save-button" onClick={handleSubmit} style={{ width: 150 }}>Save</button>
            </div>
            
        </div>
        <div className="checkout-container">
            <div className="checkout-title">Shopping Bag ({cart.length})</div>
            {cart.map(({ title, src, price }) => {
                return <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                    <img src={src} style={{ width: 50, height: 50, marginRight: 8 }} />
                    <div style={{ display: 'flex', flexDirection: 'column', marginRight: 8 }}>
                        <div style={{ fontWeight: 'bold' }}>{`${title.substring(0, 30)}...`}</div>
                        <div>${price}</div>
                    </div>
                    {/* If have time */}
                    {/* <div style={{ fontWeight: 'bold', cursor: 'pointer' }}>
                        X
                    </div> */}
                </div>
            })
            }
            
        </div>
        <div className="checkout-container">
         <div className="checkout-title">Payment Info</div>
            <div style={{ marginBottom: 16 }}>Free Shipping & Tax Free</div>
            <div style={{ fontSize: 25, marginBottom: 16 }}>Total: ${total}</div>
            {/* Checkout will add cart to orders array with current Date */}
            <div style={{ display: 'flex' }}>
                {total > 0 && <div onClick={() => handleCheckout()} className="book-buy-button">Checkout</div> }
                {/* Return to Home */}
                {total > 0 && <div className="book-cancel-button" onClick={() => history.push('/')}>Cancel</div>}
            </div>
            
        </div>
    </div>
}
export default Checkout
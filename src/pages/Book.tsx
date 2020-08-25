import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Book.css';
import { updateCart } from '../store/actions';
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
    book: BookInterface
}
const Book = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const { book } = useSelector((state: RootState) => state)
    const { title, body, price, userId, src } = book || {}

    const addToCart = (book: BookInterface) => {
        dispatch(updateCart(book))
    }
    const buyNow = (book: BookInterface) => {
        dispatch(updateCart(book))
        history.push('/checkout')
    }
    return <div className="single-book">
        <div className="single-book-src">
            <img src={src} />
        </div>
        <div>
            <div className="single-book-title">Title: {title}</div>
            
            <div className="single-book-price" >Price: ${price}</div>
            <div className="single-book-author">Author: {userId}</div>
            <div style={{ display: 'flex', paddingBottom: 32 }}>
                <div className="book-buy-button" onClick={() => addToCart(book)}>Add To Cart</div>
                <div className="book-buy-button" onClick={() => buyNow(book)}>Buy Now</div>
            </div>
            
            <div className="single-book-description">Description: {body}</div>
        </div>
        

    </div>
}
export default Book
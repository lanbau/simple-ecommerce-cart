import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setBook } from '../store/actions'
import getBooks from '../selectors/bookSelector';
import { BookInterface } from '../interfaces'
import { updateCart } from '../store/actions';
import { useHistory } from "react-router-dom";
import './Home.css';
import { Link } from "react-router-dom";

const Home = () => {
    const dispatch = useDispatch()
    const books = useSelector(getBooks)
    const history = useHistory()
    
    const handleBook = (book: BookInterface) => {
        dispatch(setBook(book))
    }
    const buyNow = (book: BookInterface) => {
        dispatch(updateCart(book))
        history.push('/checkout')
    }
    return <div className="books">
        {books?.map( book => {
            const { id, title, body, src } = book
            return (
                <div className="book" key={id}>
                    <div className="book-src"><img src={src} /></div>
                    <div className="book-title" onClick={() => handleBook(book)}>
                        <Link to="/book">{title}</Link>
                    </div>
                    <div className="book-description">{body}</div>
                    <div className="book-buy-button" onClick={() => buyNow(book)}>Buy Now</div>
                </div>
            )
        })}
    </div>
}

export default Home
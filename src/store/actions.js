import { SET_CURRENT, SET_BOOKS, SET_BOOK, FETCH_BOOKS, UPDATE_CART, CLEAR_CART, UPDATE_ORDERS, SET_ERROR } from "./actionTypes";
import { Z_STREAM_ERROR } from "zlib";

export const setCurrent = item => ({
  type: SET_CURRENT,
  payload: item
})

export const setBooks = item => ({
  type: SET_BOOKS,
  payload: item
})

export const fetchBooks = item => ({
  type: FETCH_BOOKS
})

export const setBook = item => ({
  type: SET_BOOK,
  payload: item
})

export const updateCart = item => ({
  type: UPDATE_CART,
  payload: item
})

export const clearCart = item => ({
  type: CLEAR_CART
})

export const updateOrders = item => ({
  type: UPDATE_ORDERS,
  payload: item
})

export const setError = item => ({
  type: SET_ERROR,
  payload: item
})
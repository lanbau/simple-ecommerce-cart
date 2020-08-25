import { SET_CURRENT, SET_BOOKS } from "./actionTypes";

export const setCurrent = item => ({
  type: SET_CURRENT,
  payload: item
})

export const setBooks = item => ({
  type: SET_BOOKS,
  payload: item
})


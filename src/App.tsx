import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from './store/actions'
import Home from './pages/Home'
import Book from './pages/Book'
import Checkout from './pages/Checkout'
import Order from './pages/Order'

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
function App() {
  const dispatch = useDispatch()
  const { cart } = useSelector((state: RootState) => state) 

  useEffect(() => {
    dispatch(fetchBooks())
  }, [])

  return (
    <Router>
      <div>
        <nav className="app-nav">
          <div className="app-logo">eCommerce Site</div>
          <ul className="app-ul">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/order">Orders</Link>
            </li>
            <li>
              <Link to="/checkout">Cart ({cart?.length})</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/book">
            <Book />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

// function Home() {
//   return <h2>Home</h2>;
// }

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
export default App;

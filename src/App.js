import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
//components
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Payment from './components/Payment';
import Orders from './components/Orders';
//api and data layer stuff
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
//styles
import './App.css';
import SearchResults from './components/SearchResults';

const promise = loadStripe(
  'pk_test_51JxXKXLtsv2PBqJe00BSLps8HLYtJcuVVG5MctkEV7q2eZRI53LWr5I797T6ZWy8XNkerBjTVxCnTX0GDHBQszen00k7C46GV0'
);

function App() {
  const [{ user }, dispatch] = useStateValue();
  //useEffect
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/search-results"
            element={
              <>
                <Header />
                <SearchResults />
              </>
            }
          />
          <Route
            path="/search-results/:id"
            element={
              <>
                <Header />
                <SearchResults />
              </>
            }
          />
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />

          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

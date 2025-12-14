import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Payment from "./components/Payment";
import Orders from "./components/Orders";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Footer1 from "./components/Footer1";
import Footer2 from "./components/Footer2";

const promise = loadStripe(
  "pk_test_51HVIQ5DHERTlqaM1ymLedwlbqLfOmz57NAdnjn4RvvidRl5xUM1cGFt1gzp92tsBb5xIfslvoe2dEp4Q5TAvsRvw00RSr68Rn7"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
              <Footer1 />
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
              <Footer1 />
            </>
          }
        />

          <Route path="/orders"
            element={
              <>
                <Header />
                <Header2 />
                <Orders />
                <Footer1 />
              </>
            }
          />

          <Route path="/"
            element={
              <>
                <Header />
                <Header2 />
                <Home />
                <Footer1 />
                <Footer2 />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

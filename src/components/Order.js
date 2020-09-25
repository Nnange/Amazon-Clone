import React from "react";
import "../CSS/Order.css";
import moment from "moment";

const Order = () => {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(Order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{Order.id}</small>
      </p>
      {Order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
        />
      ))}
    </div>
  );
};

export default Order;

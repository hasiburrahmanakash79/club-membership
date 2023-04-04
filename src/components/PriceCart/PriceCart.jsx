import React from "react";

const PriceCart = ({ price }) => {
  const { name, amount, features } = price;
  return (
    <div className="bg-teal-500 hover:bg-teal-600 rounded-lg p-6">
      <div>
        <h1>
          <span className="text-6xl font-extrabold">{amount}</span>
          <span>/month</span>{" "}
        </h1>
        <h1 className="font-bold text-4xl my-4">{name}</h1>
        <p>
          {
            features.map(feature => <li>{feature}</li>)
          }
        </p>
      </div>
      <div className="mt-5">
        <button className="bg-teal-800 p-2 text-cyan-50 text-lg font-bold rounded-md hover:bg-teal-900">BUY NOW</button>
      </div>
    </div>
  );
};

export default PriceCart;

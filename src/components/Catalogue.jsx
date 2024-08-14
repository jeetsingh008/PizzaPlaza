import React, { useEffect, useState } from "react";
import axios from "axios";

const Basket = ({ items, onRemove }) => {
  return (
    <div className="basket-container bg-gray-100 shadow-lg rounded-lg p-4 m-4">
      <h2 className="text-xl font-bold text-gray-700">Your Basket</h2>
      {items.length > 0 ? (
        <>
          {items.map((item) => {
            const { id, name, price, imageUrl, description } = item;
            return (
              <div
                key={id}
                className="flex items-center justify-between p-2 bg-white rounded-lg shadow-md my-2"
              >
                <div className="flex items-center">
                  <img
                    src={imageUrl}
                    alt={name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{name}</h3>
                    <p className="text-sm text-gray-600">{description}</p>
                    <p className="text-lg font-medium text-green-600">₹{price}</p>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(id)}
                  className="px-3 py-1 bg-red-600 rounded-lg hover:bg-red-700 text-white"
                >
                  Remove
                </button>
              </div>
            );
          })}
          <div className="flex justify-end mt-4">
            <button className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 text-white font-semibold">
              Checkout
            </button>
          </div>
        </>
      ) : (
        <p className="text-gray-600 mt-2">Your basket is empty.</p>
      )}
    </div>
  );
};

const Catalogue = () => {
  const [myData, setMyData] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/pizzas").then((res) => {
      setMyData(res.data);
    });
  }, []);

  const addToBasket = (pizza) => {
    setBasket([...basket, pizza]);
  };

  const removeFromBasket = (id) => {
    setBasket(basket.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <div className="main-container py-4 w-full md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-3 p-3">
        {myData.map((pizza) => {
          const { id, name, description, price, imageUrl } = pizza;
          return (
            <div
              key={id}
              className="px-4 py-2 m-auto flex flex-col shadow-md hover:shadow-xl items-center justify-center min-w-[450px]"
            >
              <img src={imageUrl} alt={name} />

              <div className="py-2 px-2">
                <h4 className="text-lg font-medium text-gray-800 ">{name}</h4>
                <p className="text-gray-600">{description}</p>
              </div>

              <hr />

              <div className="flex w-full justify-between px-2 py-2">
                <p>₹{price}</p>
                <button
                  onClick={() => addToBasket(pizza)}
                  className="px-2 py-1 bg-emerald-600 rounded-lg hover:bg-emerald-700 text-white font-semibold"
                >
                  Add to basket
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-white sticky bottom-0 z-50 w-full p-4">
        <Basket items={basket} onRemove={removeFromBasket} />
      </div>
    </div>
  );
};

export default Catalogue;

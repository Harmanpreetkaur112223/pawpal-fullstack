// const { useState } = React;
import React from "react";
import { useState } from "react";
// CartItem component for individual items
function Cart({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow mb-4">
      <div className="flex items-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover rounded mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-gray-600">${item.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
          disabled={item.quantity <= 1}
        >
          -
        </button>
        <span className="mx-3 text-lg">{item.quantity}</span>
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          +
        </button>
        <button
          onClick={() => onRemove(item.id)}
          className="ml-4 text-red-500 hover:text-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default Cart
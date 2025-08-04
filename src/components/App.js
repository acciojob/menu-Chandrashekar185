import React, { useState } from "react";
import Menu from "./Menu";
import "./styles.css";

// Menu items
const menuItems = [
  {
    name: "Pancakes",
    category: "Breakfast",
    image: "https://via.placeholder.com/150",
    price: "$5.99"
  },
  {
    name: "Burger",
    category: "Lunch",
    image: "https://via.placeholder.com/150",
    price: "$8.99"
  },
  {
    name: "Milkshake",
    category: "Shakes",
    image: "https://via.placeholder.com/150",
    price: "$3.99"
  },
  {
    name: "Omelette",
    category: "Breakfast",
    image: "https://via.placeholder.com/150",
    price: "$4.99"
  },
  {
    name: "Steak",
    category: "Lunch",
    image: "https://via.placeholder.com/150",
    price: "$12.99"
  },
  {
    name: "Strawberry Shake",
    category: "Shakes",
    image: "https://via.placeholder.com/150",
    price: "$4.49"
  }
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div id="main">
      <h1>Menu</h1>
      <div className="btn-container">
        <button id="filter-btn-1" onClick={() => setSelectedCategory("Breakfast")}>
          Breakfast
        </button>
        <button id="filter-btn-2" onClick={() => setSelectedCategory("Lunch")}>
          Lunch
        </button>
        <button id="filter-btn-3" onClick={() => setSelectedCategory("Shakes")}>
          Shakes
        </button>
        <button id="filter-btn-all" onClick={() => setSelectedCategory("All")}>
          All
        </button>
      </div>
      <Menu items={menuItems} selectedCategory={selectedCategory} />
    </div>
  );
}


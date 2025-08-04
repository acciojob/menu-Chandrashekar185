import "./styles.css";
import Menu from "./menu.jsx";
import { useState } from "react";

export default function App() {
  const menuItems = [
    {
      name: "Pancakes",
      category: "Breakfast",
      price: "$5.99",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Burger",
      category: "Lunch",
      price: "$9.99",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Oreo Milkshake",
      category: "Shakes",
      price: "$4.50",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Dosa",
      category: "Breakfast",
      price: "$3.50",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Chicken Biryani",
      category: "Lunch",
      price: "$10.00",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Chocolate Shake",
      category: "Shakes",
      price: "$4.00",
      image: "https://via.placeholder.com/150",
    },
  ];

  const [category, setCategory] = useState("All");

  const showList = (selected) => {
    setCategory(selected);
  };

  return (
    <>
      <div className="Buttons">
        <button onClick={() => showList("All")}>All</button>
        <button onClick={() => showList("Breakfast")}>Breakfast</button>
        <button onClick={() => showList("Lunch")}>Lunch</button>
        <button onClick={() => showList("Shakes")}>Shakes</button>
      </div>

      <div>
        <Menu items={menuItems} selectedCategory={category} />
      </div>
    </>
  );
}

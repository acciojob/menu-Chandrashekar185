const Menu = ({ items, selectedCategory }) => {
  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="menu">
      {filteredItems.map((item, index) => (
        <div
          key={index}
          className="menu-item"
          data-test-id={`menu-item-${item.category.toLowerCase()}`}
        >
          <h3>{item.name}</h3>
          <img className=" menu-item img" src={item.image} alt={item.name} />
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;

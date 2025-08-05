const Menu = ({ items, selectedCategory }) => {
  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="menu">
      {filteredItems.map((item) => (
        <div
          key={item.id}
          className="menu-item"
          data-test-id={`menu-item-${item.category.toLowerCase()}`}
        >
          <h3>{item.title}</h3>
          <img className=" menu-item img" src={item.img} alt={item.title} />
          <p>{item.price}</p>
         <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;

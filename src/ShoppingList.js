const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

export const ShoppingList = () => {
  const listItems = products.map((item) => {
    return <li>{item.title}</li>;
  });
  return <ul>{listItems}</ul>;
};

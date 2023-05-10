import CategoryItem from "./components/category-item/category-item.component";

function App() {
  const categories = [
    {
      id: 1,
      title: "Hats",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      id: 2,
      title: "Jackets",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      id: 3,
      title: "Sneakers",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      id: 4,
      title: "Womens",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      id: 5,
      title: "Mans",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
  ];
  return (
    <>
      <div className="categories-container">
        {categories.map((item) => (
          <CategoryItem category={item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default App;

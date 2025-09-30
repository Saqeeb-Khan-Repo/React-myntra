import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.items.items);
  const error = useSelector((store) => store.items.error);

  if (error) {
    return <div className="error-container">Error: {error}</div>;
  }

  return (
    <main>
      <div className="items-container">
        {items && items.length > 0 ? (
          items.map((item) => (
            <HomeItem key={item.id} item={item} />
          ))
        ) : (
          <div className="loading">Loading items...</div>
        )}
      </div>
    </main>
  );
};

export default Home;

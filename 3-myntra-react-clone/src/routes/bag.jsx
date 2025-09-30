import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";
import { useSelector } from "react-redux";

const Bag = () => {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items.items);

  const finalItems = items.filter((item) => bagItems.includes(item.id));

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.length === 0 ? (
            <div className="empty-bag">Your bag is empty</div>
          ) : (
            finalItems.map((item) => <BagItem key={item.id} item={item} />)
          )}
        </div>
        <BagSummary items={finalItems} />
      </div>
    </main>
  );
};

export default Bag;

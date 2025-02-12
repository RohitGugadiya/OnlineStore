import { useSelector, useStore } from "react-redux";
import HomeItems from "../Components/HomeItems";

const Home = () => {
  const items = useSelector((store) => store.items);
  

  return (
    <>
      <main>
        <div className="items-container">
          {items.map((item) => (
            <HomeItems key={item.id} item={item}></HomeItems>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;

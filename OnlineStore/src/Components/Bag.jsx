import { useSelector } from "react-redux";
import BagItem from "./BagItem";
import BagSummary from "./Bagsummary";


const Bag = () => {
   const bagItems = useSelector(state =>state.bag);
   console.log(bagItems)
   const items= useSelector(state => state.items);
   const finalItems = items.filter(item =>{
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >=0;
   })

  return (


    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.map(item =><BagItem key={item.id} item={item}></BagItem> )}
            
          </div>
          <BagSummary></BagSummary>
        </div>
      </main>
    </>
  );
};

export default Bag;

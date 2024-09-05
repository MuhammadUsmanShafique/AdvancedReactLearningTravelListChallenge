// Part 1
// import Item from '../components/Item'
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//    { id: 2, description: "Charger", quantity: 1, packed: false }
// ];
// export default function PackingList(){
// return(
//     <div className="list">
// <ul>
// {initialItems.map((item)=>(<Item item = {item} />))
// }
// </ul>
//     </div>
// )

// }

// part 2
import { useState } from "react";
import Item from "../components/Item";
export default function PackingList({ items, onDeleteItem, onTogglePacked }) {
  const [sortedBy, setSortedBY] = useState("input");
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onTogglePacked={onTogglePacked}
          />
        ))}
      </ul>
      <div className="action">
        <select value={sortedBy} onChange={(e) => setSortedBY(e.target.value)}>
          <option value="input">Sorted By Input</option>
          <option value="description">Sorted By Description</option>
          <option value="packedStatus">Sorted By Packed Status</option>
        </select>
      </div>
    </div>
  );
}

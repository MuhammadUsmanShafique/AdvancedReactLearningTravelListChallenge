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
export default function PackingList({
  items,
  onDeleteItem,
  onTogglePacked,
  onClearItems,
}) {
  const [sortedBy, setSortedBy] = useState("input");
  let sortedItems;
  if (sortedBy === "input") sortedItems = items;
  else if (sortedBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortedBy === "packedStatus") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id} // Ensure each child in a list has a unique key
            item={item}
            onDeleteItem={onDeleteItem}
            onTogglePacked={onTogglePacked}
          />
        ))}
      </ul>
      {items.length > 0 && (
        <div className="action">
          <select
            value={sortedBy}
            onChange={(e) => setSortedBy(e.target.value)}
          >
            <option value="input">Sorted By Input</option>
            <option value="description">Sorted By Description</option>
            <option value="packedStatus">Sorted By Packed Status</option>
          </select>

          <button onClick={onClearItems}>Clear Items List</button>
        </div>
      )}
    </div>
  );
}

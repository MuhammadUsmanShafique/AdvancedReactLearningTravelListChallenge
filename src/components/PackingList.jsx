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
import Item from "../components/Item";
export default function PackingList({ items, onDeleteItem, onTogglePacked }) {
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
    </div>
  );
}

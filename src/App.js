// part 1
// import Logo from "./components/Logo";
// import Form from "./components/Form";
// import PackingList from "./components/PackingList";
// import Stats from "./components/Stats";
// import "./index.css";
// export default function App() {
//   return (
//     <div className="app">
//       <Logo />
//       <Form />
//       <PackingList />
//       <Stats />
//     </div>
//   );
// }

import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { useState } from "react";
import "./index.css";
export default function App() {
  const [items, setItems] = useState([]); // lifting state up : to the common parent so can be used in other siblings
  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    //     setItems((items) => {
    // let newList = items.filter((item) => item.id!=id);
    // return newList;
    //     })
    // Or just in one line
    setItems((items) => items.filter((item) => item.id != id));
  }
  function handleTogglePacked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function ClearItemsArray() {
    const confimed = window.confirm("Click Ok if you are sure to clear list"); // as conform method returns 'true' in case of pressing OK
    if (confimed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onTogglePacked={handleTogglePacked}
        onClearItems={ClearItemsArray}
      />
      <Stats items={items} />
    </div>
  );
}

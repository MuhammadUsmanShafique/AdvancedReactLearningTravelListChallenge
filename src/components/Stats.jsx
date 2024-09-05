export default function Stats({ items }) {
  const numOfItems = items.length; // Derived state , no need to create a new state for it then we will have to remain it with sync with items length
  const noOfPackedItems = items.filter((item) => item.packed === true).length;
  const per = Math.floor((noOfPackedItems / numOfItems) * 100);
  return (
    <footer className="stats">
      <em>
        You have {numOfItems} items on your list and you already packed{" "}
        {noOfPackedItems} items ({per} %)
      </em>
    </footer>
  );
}

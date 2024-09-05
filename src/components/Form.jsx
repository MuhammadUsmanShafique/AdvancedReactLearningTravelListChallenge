// Part 1 : first undertands the things done till this
// import { useState } from "react";

// export default function Form(){
//     const [description,setDescripttion] = useState("");
//     const [quantity,setQuantity] = useState(1);
//     function handleSubmit(e){

//         e.preventDefault(); // will not refresh page on submit of form
//         setDescripttion(""); // once form is submitted state is back to initial
//         setQuantity(1);
//     }
// return(
// <form className="add-form" onSubmit={handleSubmit}> {/*  when we using onSubmit here even on enter key form submits */}
//     <h3>What do you want for your 😎 trip </h3>
//     <select  value={quantity} onChange={(e) => setQuantity(e.target.value)} >
// {Array.from({length:20},(_,i)=>i+1).map(   // creating an array of 20 (1--20) then map on it
//     (num) => (<option value={num} key={num}>{num}</option>)
// )}
//     </select>
//     <input type="text" placeholder="Items..." value={description}
//     onChange={(e)=>{setDescripttion(e.target.value)}}
//     ></input>
//     <button>Add</button>
// </form>
// )

// }

// part 2
import { useState } from "react";

export default function Form({ onAddItem }) {
  const [description, setDescripttion] = useState("");
  const [quantity, setQuantity] = useState(1);
  /* 
  const [items, setItems] = useState([]); // lifting state up : to the common parent so can be used in other siblings
   function handleAddItem(item) {
     setItems((items) => [...items, item]);
  }
*/
  function handleSubmit(e) {
    e.preventDefault(); // will not refresh page on submit of form
    if (!description) {
      return; // if user does not enter any description , no need to add that item
    }

    let newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItem(newItem);

    setDescripttion(""); // once form is submitted state is back to initial
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      {" "}
      {/*  when we using onSubmit here even on enter key form submits */}
      <h3>What do you want for your 😎 trip </h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map(
          // creating an array of 20 (1--20) then map on it
          (num) => (
            <option value={num} key={num}>
              {num}
            </option>
          )
        )}
      </select>
      <input
        type="text"
        placeholder="Items..."
        value={description}
        onChange={(e) => {
          setDescripttion(e.target.value);
        }}
      ></input>
      <button>Add</button>
    </form>
  );
}

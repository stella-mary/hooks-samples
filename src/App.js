import './App.css';
import InputArea from "./Components/InputArea";
import React, { useState } from "react";
import ToDoItems from './Components/ToDoItems';

function App() {
  const [items, setItems] = useState([]);

  const addItems = (inputText) => {
    setItems((prevItems)=>{
      return [...prevItems, inputText];
    });
  };

  return ( 
    <div className="container">
    <InputArea addItems={addItems}/>
    <div>
        {items.map((addItems, index)=>{
            return <ToDoItems key={index} text={addItems} />;
          })}
    </div>
    </div>
  );
}

export default App;

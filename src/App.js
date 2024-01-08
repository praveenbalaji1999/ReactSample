import React, { useState } from 'react';
import Header from './Header';
import './index.css';
import Navigate from './navigate';
import Footer from './Footer';
import Content from './content';
import './index.css';
import Additem from './AddItem';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "Read About AI"
    },
    {
      id: 2,
      checked: true,
      item: "Play Tennis"
    },
    {
      id: 3,
      checked: true,
      item: "Sing Song to Relax"
    }
  ]);
  const [newItem, setNewItem]= useState('')

  const handleCheckboxChange = (itemId) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
    localStorage.setItem("todo_list",JSON.stringify(updatedItems))
    
  };

  const handledelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id );
    setItems(updatedItems);
    localStorage.setItem("todo_list",JSON.stringify(updatedItems))
    
  };
  const handlesubmit = (e) =>
{
  console.log("submitted")
}

  return (
    <div className="App">
      <Header title="Balaji to do's" />
      <Additem />
      <Content
        items={items}
        handleCheckboxChange={handleCheckboxChange}
        handledelete={handledelete}
      />
      <Navigate></Navigate>
      <Footer
      length={items.length} 
      />
    </div>
  );
}

export default App;

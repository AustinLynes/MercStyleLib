import React, { useState } from "react";
import "./App.css";
import { Item } from "./main/Item"
import { Container } from "./main";



function ExampleApp() {
  const [items, setItems] = useState([
    {
      id: 0,
      onSale: false,
      itemName: 'Shirt 01',
      itemCost: '$7.49',
      saleCost: '$5.49'
    },
    {
      id: 1,
      onSale: true,
      itemName: 'Shirt 02',
      itemCost: '$5.49',
      saleCost: '$2.49'

    },
    {
      id: 2,
      onSale: true,
      itemName: 'Shirt 03',
      itemCost: '$9.49',
      saleCost: '$7.49'

    },
    {
      id: 3,
      onSale: false,
      itemName: 'Shirt 04',
      itemCost: '$6.49',
      saleCost: '$4.99'
    }
  ])
  //ThIS --> IS --> IMPROTANT TO IMPLEMENT
  // this disables the context menu so that i can toggle the 
  // on sale dynamicly and allow the user more ability to change their prices
  document.oncontextmenu = (e => {
    e.preventDefault();

  })

  const toggleOnSale = (id) => {
    setItems([...items.map(i => (
      JSON.stringify(i.id) === id ? (i = { ...i, onSale: !i.onSale }) : (i))
    )]);
  }
  const updateItem = () => {

  }
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          {items.map(item => {
            return <Item {...item} toggleOnSale={toggleOnSale} />
          })}
        </Container>
      </header>
    </div>
  );
}


export default ExampleApp;

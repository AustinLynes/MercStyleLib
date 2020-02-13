import React, { Fragment, useState, useEffect } from "react";
import { Item } from "./main/Item"
import { Container, GlobalReset } from "./main";
import { data as Data } from './__mock/data'
import { Carosel } from './main/carosel'
import { Navigation } from './main/navigation'

// DEBUG----
import Shoes from './_media_/carosel/shoes.png'
import Pants from './_media_/carosel/pants.png'
import Hat from './_media_/carosel/hat.png'
//DEBUG----------//
const buttons = [{ id: 0, name: 'home', url: '/' }, { id: 1, name: 'about', url: '/about' }, { id: 2, name: 'products', url: '/products' }]
function ExampleApp() {

  const [data, setData] = useState([])
  const [images, setImages] = useState([
    Shoes,
    "data:image/jpeg;base64,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",
    Pants, Hat
  ])
  useEffect(() => {
    setData(Data)  // simulated axios call with use state.. operation may differ..
  }, [])

  const toggleOnSale = (id) => {
    setData([...data.map(i => (
      JSON.stringify(i.id) === id ? (i = { ...i, onSale: !i.onSale }) : (i))
    )]);
  }
  const updateItem = (id, changes) => {
    setData([...data.map(i => (
      JSON.stringify(i.id) === id ? (i = { ...i, changes }) : (i))
    )]);
  }
  const deleteItem = (id) => {
    setData([...data.filter(i => (
      JSON.stringify(i.id) !== id ? (i) : (null))
    )]);
  }

  return (
    <Fragment>
      <GlobalReset />
      <Navigation buttons={buttons} />

      <Container>
        {data.map(item => {
          return <Item {...item}
            updateItem={updateItem}
            toggleOnSale={toggleOnSale}
            deleteItem={deleteItem}
          />
        })}
      </Container>
      <Container>
        <Carosel images={images} />
      </Container>
    </Fragment>
  );
}


export default ExampleApp;

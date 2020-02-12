import React, { useState } from "react";
import "./App.css";
import { Item } from "./main/Item"
import styled from 'styled-components'
import { Container } from "./main";



function ExampleApp() {

  return (
    <div className="App">
      <header className="App-header">
        <Container>
            <Item itemCost={`$7.47`} itemSaleCost={`$2.49`} itemName={'Shirt 01'}/> 
            <Item itemCost={`$7.47`} itemSaleCost={`$2.49`} itemName={'Shirt 01'}/> 
            <Item itemCost={`$7.47`} itemSaleCost={`$2.49`} itemName={'Shirt 01'}/> 
            <Item itemCost={`$7.47`} itemSaleCost={`$2.49`} itemName={'Shirt 01'}/> 
        </Container>
        <Container>
            <Item itemCost={`$7.47`} itemSaleCost={`$2.49`} itemName={'Shirt 01'}/> 
            <Item itemCost={`$7.47`} itemSaleCost={`$2.49`} itemName={'Shirt 01'}/> 
            <Item itemCost={`$7.47`} itemSaleCost={`$2.49`} itemName={'Shirt 01'}/> 
            <Item itemCost={`$7.47`} itemSaleCost={`$2.49`} itemName={'Shirt 01'}/> 
        </Container>
        <Container>
            <Item itemCost={`$7.47`} itemSaleCost={`$2.49`} itemName={'Shirt 01'}/> 
            <Item itemCost={`$7.47`} itemSaleCost={`$2.49`} itemName={'Shirt 01'}/> 
            <Item itemCost={`$7.47`} itemSaleCost={`$2.49`} itemName={'Shirt 01'}/> 
            <Item itemCost={`$7.47`} itemSaleCost={`$2.49`} itemName={'Shirt 01'}/> 
        </Container>
        <Container>
            <Item itemCost={`$7.47`} itemSaleCost={`$2.49`} itemName={'Shirt 01'}/> 
            <Item itemCost={`$7.47`} itemSaleCost={`$2.49`} itemName={'Shirt 01'}/> 
            <Item itemCost={`$7.47`} itemSaleCost={`$2.49`} itemName={'Shirt 01'}/> 
            <Item itemCost={`$7.47`} itemSaleCost={`$2.49`} itemName={'Shirt 01'}/> 
        </Container>
        <Container>
            <Item itemCost={`$7.47`} itemSaleCost={`$2.49`} itemName={'Shirt 01'}/> 
            <Item itemCost={`$7.47`} itemSaleCost={`$2.49`} itemName={'Shirt 01'}/> 
            <Item itemCost={`$7.47`} itemSaleCost={`$2.49`} itemName={'Shirt 01'}/> 
            <Item itemCost={`$7.47`} itemSaleCost={`$2.49`} itemName={'Shirt 01'}/> 
        </Container>
      </header>
    </div>
  );
}


export default ExampleApp;

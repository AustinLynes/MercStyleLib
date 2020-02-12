import React from 'react';
import shirtSrc from '../../_media_/shirt.png';
import {Item_, CloseButton,Cost, Image, ItemName, SaleCost} from './style'

export const Item =  ({onSale, itemName, itemCost, itemSaleCost, ItemPicture }) =>{
   
    console.log('im here boss!');
    return (
        <Item_>
            <CloseButton className={'fas fa-times'}/>
            <Image src={shirtSrc} alt='shirt'/>
            <Cost name='cost' placeholder={itemCost} value={itemCost}/>
            <ItemName name='name' placeholder={itemName} value={itemName}/>
            <SaleCost name='saleCost' placeholder={itemSaleCost} value={itemSaleCost}/>
        </Item_>
    )
}
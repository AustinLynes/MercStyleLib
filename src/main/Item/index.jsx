import React from 'react';
import shirtSrc from '../../_media_/shirt.png';
import { Item_, CloseButton, Cost, Image, ItemName, SaleCost } from './style'

export const Item = (props) => {
    const { id, onSale, itemName, itemCost, itemSaleCost, ItemPicture, toggleOnSale, ...rest } = props
    console.log('im here boss!');
    const toggle = (id) => {
        toggleOnSale(id);
    }
    return (
        <Item_ id={id} onContextMenu={e => {
            e.preventDefault();
            toggle(e.target.id);
        }}>
            <CloseButton className={'fas fa-times'} />
            <Image id={id} src={shirtSrc} alt='shirt' />
            <Cost onSale={onSale} name='cost' placeholder={itemCost} value={itemCost} />
            {onSale && (
                <SaleCost name='saleCost' placeholder={itemSaleCost} value={itemSaleCost} />
            )}
            <ItemName name='name' placeholder={itemName} value={itemName} />
        </Item_>
    )
}
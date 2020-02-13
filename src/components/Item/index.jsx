import React, { useState, useEffect } from 'react';
import shirtSrc from '../../_media_/shirt.png';
import { Item_, CloseButton, Cost, Image, ItemName, SaleCost } from './style'

export const Item = (props) => {
    // GSAP 
    const { id, onSale, itemName, itemCost, toggleOnSale,saleCost,submitCallback, updateItem, deleteItem, ...rest } = props

    const [payload, setPayload] = useState({id,itemName, saleCost, itemCost })

    //SET->REF
    console.log('im here boss!');

    const toggle = (id) => {
        toggleOnSale(id);
    }
    //-> SET ANIM 
    // GSAP so
    const handleChanges = (e) => {
        setPayload({ ...payload, [e.target.name]: e.target.value })
        updateItem(e.target.id, payload);
    }
    const _deleteItem = (e) => {
        deleteItem(e.target.id);
    }

    // abstract scale to a parent var... then.. apply scale to the carosel 
    // navigation needs background color.. then customize buttons 
    // 
    const scale = 0.5;
    return (
        <Item_ scale={scale} id={id} onContextMenu={e => { e.preventDefault(); toggle(e.target.id); }}>
            <Image scale={scale + 0.2} id={id} src={shirtSrc} alt='shirt' />
            <Cost
                name='itemCost'
                id={id + 'ic'}
                onSale={onSale}
                type='number'
                onChange={handleChanges}
                value={payload.itemCost}
            />
            {onSale && (
                <SaleCost
                    id={id + 'sc'}
                    type='number'
                    name='saleCost'
                    onChange={handleChanges}
                    value={payload.saleCost}
                />
            )}
            <ItemName
                id={id + 'in'}
                name='itemName'
                onChange={handleChanges}
                value={payload.itemName}
            />
            <CloseButton id={id} className={'fas fa-times'} onClick={_deleteItem} />
        </Item_>
    )
}
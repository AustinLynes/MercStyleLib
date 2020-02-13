import React from 'react'
import { NAVIGATION, BUTTON}from './style'

export const Navigation = (props) => {
    const { buttons, ...rest } = props

    return (
        <NAVIGATION>
            {
                buttons && buttons.map(button => (<BUTTON key={button.id} >{button.name}</BUTTON>))
            }
        </NAVIGATION>
    )
}
import React from 'react'
import styled from 'styled-components'

export const Image = (props) => {

    const { src, size, ...rest } = props
    const IMAGE = styled.img`
        width:100%;
        object-fit:cover;
        max-height:${props => {
            if (props.size === 'small')
                return '150px;'
            if (props.size === 'medium')
                return '300px;'
            else return '600px'
        }};
    `
    return (
        <IMAGE size={size} src={src} />
    )
}
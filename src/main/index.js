import React from 'react'
import styled, { css } from 'styled-components'

// MAIN_EXPORT 
export const Container = styled.div`
display:flex;
flex-flow:row wrap;
width:100%;
border:1px solid black;
padding:${props => props.padding || "15px 0" };
background: ${props => props.background || "white" };
transition:all 1s ease-in-out;
`

/*
* TODO: ->
*   Container,
        must accept flex,
*
*
*
*
*
*/
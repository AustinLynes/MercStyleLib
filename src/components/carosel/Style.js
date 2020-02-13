import styled from "styled-components";

export const CAROSEL = styled.div`
        flex-grow:1;
        height:600px;
        position:relative;
        display:flex;
        flex-flow:row wrap;
`

export const IMAGE = styled.img`
    width:50%;
    max-height:600px;
    margin:0 auto;
    object-fit:contain ;

`

export const BUTTON = styled.i`
        position:absolute;
        top:50%;
        ${props=> props.right ? `right: 20px;` : `left: 20px;`}
        width:30px;
        height:30px;
        padding:1rem;
        text-align:center;
        font-size:2rem;
        color:dodgerblue;
        border:1px solid dodgerblue;
        border-radius:50%;
`
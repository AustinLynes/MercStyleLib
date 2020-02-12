import styled from 'styled-components';


export const Item_ = styled.div`
position:relative;
margin:0 auto;
flex-flow:row wrap;
border:2px solid #eeeeee;
border-radius:10px;
padding:20px;
box-shadow:3px 2px 5px rgba(0,0,0,.15);
`

export const Image = styled.img`
max-width:300px;
`

export const ItemName = styled.input`
position:absolute;
bottom:0;
left:0px;
padding:5px 5px 0;
margin-bottom:2px;
margin-left:12px;
width:40%;

background:transparent;

font-size:2.2rem;
color: black;
-webkit-text-fill-color: white; 
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: black;
text-align:center;

border:none;
border-bottom:2px solid rgba(0,0,0,.2);
`

export const Cost = styled.input`
position:absolute;
bottom:0;
right:0px;
padding:5px;
width:100px;

background:transparent;

font-size:2.2rem;
color: black;
-webkit-text-fill-color: white; 
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: black;
text-align:center;
text-decoration-color:darkslategrey;

text-decoration: ${props => props.onSale ? "line-through" : "none"};
border:none;
`
export const SaleCost = styled.input`
position:absolute;
top:0;
left:0px;
padding:5px;
width:100px;
padding:10px;

background:transparent;

font-size:2rem;
color: black;
-webkit-text-fill-color: white; 
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: black;
text-align:center;
border:none;

`
export const CloseButton = styled.i`
position:absolute;
top:-13px;
right:-13px;
border-radius:50%;
font-size:1.4rem;
padding:5px;
width:25px;
height:25px;
text-align:center;
border:none;
box-shadow:3px 4px 5px rgba(0,0,0,.2);


background:#dd0000;
color: black;
-webkit-text-fill-color: white; 
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: black;
text-align:center;
`
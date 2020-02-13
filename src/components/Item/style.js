import styled from 'styled-components';


export const Item_ = styled.div`
flex-grow:1;
display:flex;
position:relative;
margin:0 10px;
max-width:50%;
max-height:${props => props.scale ? `${225 * props.scale}px`:'225px'};
flex-flow:row wrap;
border-radius:10px;
padding:4rem 0;
box-shadow: 5px 5px 8px rgba(127,127,127,.3), 
                -5px -5px 8px rgba(255,255,255,1);

`

export const Image = styled.img`
max-width:50%;
max-height:${props => props.scale ? `${225 * props.scale}px`:'225px'};
object-fit:contain;
margin:0 auto;
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
width:120px;

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
border-radius:10px;
box-shadow:2px 4px 5px rgba(0,0,0,.1);
background:transparent;
background:yellow;
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
top: 5px;
right:5px;
border-radius:50%;
font-size:1.4rem;
padding:5px;
width:20px;
height:20px;
text-align:center;
border:none;


color: black;
-webkit-text-fill-color: #595959; 
-webkit-text-stroke-width: 0.5px;
-webkit-text-stroke-color: white;
text-align:center;
`
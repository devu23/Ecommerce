import {FavoriteBorderOutlined, Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
flex: 1;
margin:5px ;
min-width: 280px;
height: 370px;
display:flex;
align-items: center;
justify-content: center;
background-color: #f2f2f2 ;
position: relative;

`
const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
position: absolute;
background-color: white;
`
const Image = styled.img`
height : 80%;
z-index:2;

`
const Info = styled.div`
height:100%;
width: 100%;
position: absolute;
top:0;
left:0;
background-color: grey;
z-index:3;
display:flex;
align-items: center;
justify-content: center;    

`
const Icon = styled.div`
height:40px;
width:40px;
border-radius: 50%;
background-color: white;
display:flex;
align-items: center;
justify-content: center;
margin:10px;

&:hover{
    background-color: #ffffff;
    transform:scale(1.1);
    cursor:pointer;
}`

 const Products = ({item}) => {
  return (
<Container>
<Circle/>
<Image src={item.img}/>
<Info>
<Icon>
<FavoriteBorderOutlined/>
</Icon>

<Icon>
<ShoppingCartOutlined/>
</Icon>
<Icon>
<Search/>
</Icon>

</Info>

</Container>


    )
}
export default Products;
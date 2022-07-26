import { Badge } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { Search, ShoppingBasketOutlined, ShoppingBasketRounded, ShoppingCart, ShoppingCartTwoTone } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../Responsive'



const Container = styled.div`
height: 60px;
${mobile({height: "50px"})}
`;

const Wrapper = styled.div`
padding: 10px 20px ;
display:flex; 
align-items: center;
justify-content: space-between;
${mobile({padding: "10px 0px"})}

`




const Left = styled.div`
flex:1;
display: flex;
align-items: center;
`;

const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({display: "none"})}


`


const SearchContainer = styled.div`
border: 1px solid gray;
display: flex;
align-items: center;
margin-left: 25px;
padding:3px ;
${mobile({marginLeft: "5px",marginRight: "2px"})}

`

const Input = styled.input`
border:none;
${mobile({width: "50px"})}


`
const Center = styled.div`flex:1;
text-align: center;`;

const Logo = styled.h1`
${mobile({fontSize: "18px"})}
font-weight: bold;
`
const Right = styled.div` 
flex:1;
display:flex;
align-items: center;
justify-content: flex-end;
${mobile({flex:2,justifyContent: "center"})}
`;

const MenuItem = styled.div`
font-size: 20px;
cursor: pointer;
margin-left:25px;
${mobile({fontWeight: "bold",fontSize: "8px",marginLeft: "5px"})}

`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>
                        EN
                    </Language>
                    <SearchContainer>
                        <Input placeholder="Search"/>
                        <Search style={{color:"gray", fontSize:"16px"}}/>
                    </SearchContainer>
                </Left>

                <Center><Logo>EasyShopping.com</Logo></Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGNIN</MenuItem>
                    <MenuItem>
                        <Badge  badgeContent={89} color="secondary">
                        <ShoppingCartTwoTone/> 
                        </Badge>


                    </MenuItem>

                </Right>
            </Wrapper>

  

        </Container>
    )
}

export default Navbar
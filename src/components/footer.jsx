import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
display:flex;
height:3vh;
`

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Right = styled.div`
flex: 1;
padding: 20px;

`

const Center = styled.div`
flex: 1;
padding: 20px;
`

const Logo = styled.h1``
const Description = styled.div`
margin: 20px 0px
`
const Socialcontainer = styled.div`
display: flex;
`
const SocialIcon = styled.div`

width:40px;
height:40px;
border-radius:50%;
color: white;
background-color: #${props => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right:20px;

`
const Title = styled.h1`
margin-bottom: 30px;
`
const List = styled.ul`
margin:0;
padding: 0;
list-style: none;
display: flex;
flex-wrap:wrap;


`
const Listitem = styled.li`
width:50%;
margin-bottom:10px;
`

const Contactitem= styled.div`
margin-bottom:20px;
display: flex;
align-items: center;
 ` 
const Payment= styled.img`
max-width:50%;
height:auto;
 ` 
export const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>
                    EASYSHOPPING.
                </Logo>
                <Description>
                    A good product is marketed efficiently with clear value proposition. Efficient marketing is needed for a product to turn out well, we all know that. But what (exactly) is a value proposition? A value proposition refers to the value a company promises to offer to customers if they choose to stick with their product.
                </Description>
                <Socialcontainer>
                    <SocialIcon color="3b5999">
                        <Facebook />
                    </SocialIcon>

                    <SocialIcon color="E1306C">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="1DA1F2">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </Socialcontainer>
            </Left>
            <Center>

                <Title>
                    Useful Links
                </Title>

                <List>
                    <Listitem>Home</Listitem>
                    <Listitem>Cart</Listitem>
                    <Listitem>Man fashion</Listitem>
                    <Listitem>Women Fashion</Listitem>
                    <Listitem> Accessories</Listitem>
                    <Listitem> My Account</Listitem>
                    <Listitem>Order Tracking</Listitem>
                    <Listitem> Wishlist</Listitem>
                    <Listitem> Wishlist</Listitem>
                    <Listitem>Terms and Conditions</Listitem>
                </List>
            </Center>
            <Right>

                <Title>
                    Contact  </Title>
                <Contactitem>
                <Room style={{marginRight: "10px"}} />
                    Adarsh apt, office no 2216, vasundhra ghaziabad
                </Contactitem>
                <Contactitem>
                <Phone style={{marginRight: "10px"}}/>
                +91 654 343 654
                </Contactitem>
                <Contactitem>
                <MailOutline style={{marginRight: "10px"}}/>
                Easyshopping@devu.easy
                </Contactitem>
              

                <Payment src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOV6C8KuAPG9sgCDPWAZSVtIiG56-ik2PPXw&usqp=CAU">

                </Payment>
            </Right>
        </Container>
    )
}

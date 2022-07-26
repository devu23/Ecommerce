import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import {mobile} from '../Responsive'


const Container = styled.div``;
const Wrapper = styled.div`
padding: 20px;
${mobile({padding:"10px 0px",width:"100%"})}

`;
const Title = styled.h1`
font-weight: 300;
text-align: center;
width: 103%;

`;
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`;

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props => props.type === "filled" && "none"};
background-color : ${props =>
    props.type === "filled" ? "black" : "transparent"};

color: ${(props) => props.type === "filled" && "white"};
${mobile({height: "50px"})}


`

const TopTexts = styled.div`
${mobile({display: "none"})}

`;
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0 10px;

`;



const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection: "column"})}

`;
const Info = styled.div`
flex: 3;

`;
const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection: "column"})}


`
const ProductDetail = styled.div`
flex: 2;
display: flex;

`
const Image = styled.img`
width:300px;
${mobile({width: "50vw", objectFit:"cover"})}

`
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`


const ProductName = styled.span``
const ProductId = styled.span``


const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color:${props => props.color}`


const ProductSize = styled.span``

const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-Bottom: 20p x;
`
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
${mobile({margin: "5px 15px"})}

`
const ProductPrice = styled.div`
font-size:30px;
font-weight: 2000;
${mobile({marginBottom: "20px"})}

`
const Hr = styled.hr `
background-color: #eee;
border: none;
height: 1px;
  `

const Summary = styled.div`
flex:0.8;
border: 0.5px solid lightgray;
padding: 20px;
border-radius:10px;
height: 50vh;

`;


const SummaryTitle = styled.h1`
font-weight: 200;

`
const SummaryItem = styled.div`
margin: 30px 0;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === "total" && "500" };
font-size: ${props=>props.type === "total" && "24px" };
`
const SummaryItemText = styled.span`
`
const SummaryItemPrice = styled.span`
`
const Button = styled.button`

width: 100%;
padding: 15px;
background-color: black;
color: white;
`





const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>

        <Top>
          <TopButton>
            CONTINUE SHOPPOPING
          </TopButton>
          <TopTexts>
            <TopText>
              Shopping Bag(2)
            </TopText>
            <TopText>
              Your Wishlist(2)
            </TopText>
          </TopTexts>
          <TopButton type="filled">
            CHECKOUT NOW
          </TopButton>
        </Top>


        <Bottom>
          <Info>
            <Product>
            
              <ProductDetail>
                <Image src="https://m.media-amazon.com/images/I/51UDX+yrWXS._UX500_.jpg" />
                <Details>
                  <ProductName> <b>Product:</b>Nike Jordan 1 Mid All Star Carbon Fiber Black/White Men's DD1649-001</ProductName>
                  <ProductId> <b>ID:</b>45453454545</ProductId>
                  <ProductColor color="black" />
                  <ProductSize> <b>Size:</b> 37.5</ProductSize>

                </Details>

              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>

      
              <Hr/>
                          <Product>
            
              <ProductDetail>
                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <Details>
                  <ProductName> <b>Product:</b>Hakura tshirt</ProductName>
                  <ProductId> <b>ID:</b>979797979</ProductId>
                  <ProductColor color="gray" />
                  <ProductSize> <b>Size:</b> M</ProductSize>

                </Details>

              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </PriceDetail>
            </Product>

          </Info>


          <Summary>
            <SummaryTitle>
              ORDER SUMMARY
            </SummaryTitle>

            <SummaryItem >
              <SummaryItemText>
                Subtotal
              </SummaryItemText>
              <SummaryItemPrice>
                   $ 80
              </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>
                Estimated Shipping
              </SummaryItemText>
              <SummaryItemPrice>
                   $ 5.90
              </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>
                Shipping Discount
              </SummaryItemText>
              <SummaryItemPrice>
                   $ -5.90
              </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem   type="total">
              <SummaryItemText>
                Total
              </SummaryItemText>
              <SummaryItemPrice>
                   $ 80
              </SummaryItemPrice>
            </SummaryItem>
            <Button>
              CHECKOUT NOW
            </Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}
export default Cart;

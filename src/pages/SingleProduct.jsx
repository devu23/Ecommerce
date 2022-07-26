import { Add, MonetizationOnOutlined, Remove } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import {mobile} from '../Responsive'




const Container = styled.div`

`
const Imagecontainer = styled.div`
flex:1;
`
const Wrapper = styled.div`
padding: 50px;
display:flex;
${mobile({padding:"10px",flexDirection:"column"})}

`
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({height:"40vh"})}

`
const Infocontainer = styled.div`
padding: 0 50px;  
flex:1;
${mobile({padding:"10px"})}
`
const Title = styled.h1`
font-weight: 200;
font-size: 60px;
`
const UnderTitle = styled.span`
font-size:30px;


`
const Desc = styled.p`
margin: 20px 0;
`
const Price = styled.span`
display: flex;
font-weight: 100;
font-size: 40px;
`
const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
${mobile({width:"100%"})}

`
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`
const Filter = styled.div`
display: flex;
align-items: center;

`
const Filtercolor= styled.div`
width: 20px;
height: 20px;
border-radius:50%;
background-color: ${props=> props.color};
margin: 0px 5px;
cursor:pointer;

`
const FilterSize= styled.select`
margin-left: 10px;
padding: 5px 10px;
`
const FilterSizeOption = styled.option`
padding: ;
`


const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`
const Addcontainer = styled.div`
display: flex;
width: 50%;
justify-content: space-between;
align-items: center;
${mobile({width:"100%"})}

`
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;

`
const Button = styled.button`
cursor: pointer;
padding: 15px;
border: 2px solid teal;
background-color: white;
font-weight: 500;

&:hover{
  background-color: #d6d5d2;
}
`
const SingleProduct = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Imagecontainer>
          <Image src="https://www.sportsdirect.com/images/products/64303218_l.jpg" />
        </Imagecontainer>
        <Infocontainer>
          <Title>
            Slim Fit Ankle-Length Jeans <UnderTitle>- Lee Cooper</UnderTitle>
          </Title>
          <Desc>
            the tiresome search for the perfect jeans. They should fit comfortably without tweaking, be flattering and in our case be sustainable as well. Every time we discover a new pair of hopefuls, we end up being disappointed in the changing room: too tight, poor fit, too long…….
          </Desc>
          <Price>
            $ 20
          </Price>

          <FilterContainer>

                   
           <Filter><FilterTitle>Color</FilterTitle>
              <Filtercolor color="black" />
              <Filtercolor color="gray" />
              <Filtercolor color="darkblue" />
            </Filter>
           


            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize >
                <FilterSizeOption>
                  XS
                </FilterSizeOption>
                <FilterSizeOption>
                  S
                </FilterSizeOption>
                <FilterSizeOption>
                  M
                </FilterSizeOption>
                <FilterSizeOption>
                  L
                </FilterSizeOption>
                <FilterSizeOption>
                  XL
                </FilterSizeOption>
              </FilterSize>
            </Filter>

          </FilterContainer>


          <Addcontainer>

            <AmountContainer>
              <Remove/>
              <Amount>1</Amount>
              <Add/>
            </AmountContainer>
            <Button>ADD TO CART </Button>

          </Addcontainer>

        </Infocontainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default SingleProduct;
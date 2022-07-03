import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Products from './Products'



const Container = styled.div`
display:flex ;
padding:20px;
margin-top:220px;
flex-wrap: wrap;
justify-content: space-between ;

`


 const Product = () => {
    return (
        <Container>
            {popularProducts.map(item =>(
       <Products item={item}/>
       ))}

        </Container>
    )
}

export default Product;

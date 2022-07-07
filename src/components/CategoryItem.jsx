import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
flex:1;
maargin:5px;
height:70vh;
padding:3px;
position:relative;
`;
const Image = styled.img`
width: 100%;
height: 80vh;
object-fit:cover;
border-radius:20px;

`;
const Info = styled.div`
position: absolute;
top: 0;
left: 1;
height: 100%;
width: 100%;
display:flex;
flex-direction: column; 
align-items: center;
justify-content: center;
`

const Title = styled.h1`
color: white ;
margin-bottom: 20px;
font-weight: 600px;
`;


const Button = styled.button` 
border:none;
border-radius: 5px;
background-color: white ;
padding:10px ;
transition : all 0.5s ease;
cursor: pointer;
&:hover{
transform:scale(1.2);


}
`;

 const CategoryItem = ({item}) => { 
    return (
    <Container>
     <Image  src={item.img}/>
     <Info>
      <Title>
      {item.title}
     </Title>
      <Button>SHOP NOW</Button>
     </Info>

    </Container>
    )
}

export default CategoryItem;
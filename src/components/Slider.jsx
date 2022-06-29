import { ListItemSecondaryAction } from '@material-ui/core'
import { ArrowLeftOutlined, ArrowRightAltOutlined, ArrowRightOutlined, Height } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
// import Image from './Image'
import { SliderItems } from '../data'


const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
`
const Arrow = styled.div`
background-color: white;
border-radius:50%;
height: 60px;
width: 60px;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left:${props=>props.direction === "left"&&"10px"};
right:${props=>props.direction === "right"&&"10px"};
margin:auto;
cursor:pointer;
opacity:0.5;
z-index:2;
`
const Wrapper = styled.div`
height:100%;
display: flex;
${'' /* transition : all 1.5s ease;s */}
transform: translateX(${props=>props.SlideIndex * -100}vw);
`;
const Slide= styled.div` 
width:100vw;
Height:100vh;
display:flex;
align-items:center;
background-color:#${props=>props.bg};

` 
const ImgContainer= styled.div`
height:100%;

flex:1;` 

const Image = styled.img`
height:80%;
padding-top:100px;
margin-left:80px;
border-radius:10px;

`

const InfoContainer= styled.div`
padding: 250px; 
${'' /* font-size:30px; */}
flex:1;` 

const Title = styled.h1`
font-size: 70px;
letter-spacing:3px
`
const Desc = styled.p`
margin:50px 0px;
font-size:20px;
font-weight:500;
letter-spacing:3px;
`

const Button = styled.button`
padding:10px; 
font-size:20px;
background-color:transparent;
cursor:pointer;
`

export const Slider = () => {
  const [SlideIndex,SetSlideIndex] = useState("");



  const handleClick=(direction)=>{
if(direction === "left") {
SetSlideIndex(SlideIndex > 0? SlideIndex - 1:2);
}else{
  SetSlideIndex(SlideIndex < 2 ? SlideIndex+1: 0);
}}
  return (
<Container>
<Arrow direction="left" onClick={()=>handleClick("left")}>
<ArrowLeftOutlined/>

</Arrow>

<Wrapper SlideIndex={SlideIndex}>
{SliderItems.map((item)=>(
<Slide bg={item.bg}>
<ImgContainer >
<Image  src={item.img}/>
</ImgContainer>
<InfoContainer>
 <Title>{item.title}</Title> 
 <Desc> {item.desc}</Desc> 
 <Button>SHOP NOW</Button> 
</InfoContainer>
  </Slide>
  ))}
</Wrapper>

<Arrow direction="right" onClick={()=>handleClick("right")}>
    <ArrowRightOutlined/>
</Arrow>
</Container>
    
  )
  }
import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import { Divider, styled } from '@material-ui/core'
import { Slider } from '../components/Slider'
import Category from '../components/Category'
import Product from "../components/product"

const Home = () => {
  return(
  <div className='container'>
   <Announcement/>
   <Navbar/>
   <Slider/>
   <Category/>
   <Product/>
    </div>
 
  )
}

export default Home;
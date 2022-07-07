import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import { Divider, styled } from '@material-ui/core'
import { Slider } from '../components/Slider'
import Category from '../components/Category'
import Product from "../components/product"
import  Newsletter  from '../components/Newsletter'
import { Footer } from '../components/footer'

const Home = () => {
  return(
  <div className='container'>
   <Announcement/>
   <Navbar/>
   <Slider/>
   <Category/>
   <Product/>
   <Newsletter/>
   <Footer/>
    </div>
 
  )
}

export default Home;
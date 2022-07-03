import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import { Divider, styled } from '@material-ui/core'
import { Slider } from '../components/Slider'
import Category from '../components/Category'
<<<<<<< HEAD




=======
import Product from '../components/Product'
>>>>>>> experiment

const Home = () => {
  return(<div className='container'>
   <Announcement/>
   <Navbar/>
   <Slider/>
<<<<<<< HEAD
   <Category/> 
    </div>
=======
   <Category/>
   <Product/>
   </div>
>>>>>>> experiment
  )
}

export default Home;
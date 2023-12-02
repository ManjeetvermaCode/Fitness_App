import React from 'react'
import './App.css'
import { Box } from '@mui/material'
import { Route,Routes } from 'react-router-dom'

//Importing Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
import ExerciseDetails from './Pages/ExerciseDetails'

const App = () => {
  return (
    <Box width='400px'>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/exercises/:id' element={<ExerciseDetails/>}/>

      </Routes>
      <Footer/>
    </Box>
  )
}

export default App
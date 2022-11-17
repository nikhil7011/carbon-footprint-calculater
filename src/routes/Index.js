import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home/Home'
import FormOne from '../pages/Household/FormOne/FormOne'
import FormTwo from '../pages/Household/FormTwo/FormTwo'
import Results from '../pages/Household/Results/Results'

const Index = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route path='household'>
        <Route index element={<FormOne />} />
        <Route path='cars' element={<FormTwo />} /> 
        <Route path='results' element={<Results />} />
      </Route>
    </Routes>
  )
}

export default Index
import React, { createContext, useState, useContext } from 'react'

export const DataContext = createContext()

export const Context = ({ children }) => {
  const [formData, setFormData] = useState({electricity: '', gas: '', oil: '', people: '', cars: {}})

  const initialData = {
    formData,
    setFormData
  }

  return (
    <DataContext.Provider value={initialData}>{children}</DataContext.Provider>
  )
}

export const UserContext = () => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error(`userContext context can only  
        be used in a component wrapped with UserContext`)
  }
  return context
}
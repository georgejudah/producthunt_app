import React from 'react'
import "./App.css"
import Card from './card'

export default function App() {
  
  //sorting based on the alphabetical order + can add new elements easily just by adding to below array and using the card component
  const names = ["Nokia", "Samsung", "Apple", "Redmi"]
  const names_sorted = names.sort()
  console.log(names_sorted)
  
  
  return (
    <div className='App'>
      <h1>Products</h1>
      <Card name= {names_sorted[0]} />
      <Card name= {names_sorted[1]} />
      <Card name= {names_sorted[2]} />
      <Card name= {names_sorted[3]} />
    </div>
  )
}


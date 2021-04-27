import './App.css'
import Header from './components/Layout/Header'
import React, { useState } from 'react'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import CartProvider from './context/CartProvider'

const App = () => {
  const [carIsShown, setCarIsShown] = useState(false)
  const showCartHandler = () => {
    setCarIsShown(true)
  }
  const hideCartHandler = () => {
    setCarIsShown(false)
  }

  return (
    <CartProvider className='App'>
      {carIsShown && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowcart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}

export default App

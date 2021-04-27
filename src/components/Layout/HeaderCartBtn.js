import React, { useContext, useEffect, useState } from 'react'
import styles from './HeaderCartBtn.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../context/cart-context'

const HeaderCartBtn = (props) => {
  const [btnhighlighted, setBtnhighlighted] = useState(false)
  const cartContext = useContext(CartContext)
  const { items } = cartContext
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  const btnClasses = `${styles.button} 
  ${btnhighlighted ? styles.bump : ''}`

  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setBtnhighlighted(true)

    const timer = setTimeout(() => {
      setBtnhighlighted(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartBtn

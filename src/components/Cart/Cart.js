import React, { useContext } from 'react'
import CartContext from '../../context/cart-context'
import Modal from '../UI/Modal'
import styles from './Cart.module.css'
import CartItem from './CartItem'

const Cart = (props) => {
  const cartCtx = useContext(CartContext)
  const totalAmount = `Rs: ${cartCtx.totalAmount}`
  const hasItems = cartCtx.items > 0

  const itemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
    console.log(id)
  }
  const itemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 })
    console.log(item)
  }

  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={itemRemoveHandler.bind(null, item.id)}
          onAdd={itemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  )
  return (
    <Modal onClose={props.onCloseCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.onCloseCart}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  )
}

export default Cart

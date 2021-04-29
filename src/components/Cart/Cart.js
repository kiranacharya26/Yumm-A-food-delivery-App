import React, { useContext, useState } from 'react'
import CartContext from '../../context/cart-context'
import Modal from '../UI/Modal'
import styles from './Cart.module.css'
import CartItem from './CartItem'
import Checkout from './Checkout'

const Cart = (props) => {
  const cartCtx = useContext(CartContext)
  const [isCheckout, setIsCheckout] = useState(false)

  const totalAmount = `Rs: ${cartCtx.totalAmount}`
  const hasItems = cartCtx.items.length > 0

  const itemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
    console.log(id)
  }
  const itemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 })
    console.log(item)
  }
  const orderHandler = () => {
    setIsCheckout(true)
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
  const modalActions = (
    <div className={styles.actions}>
      <button className={styles['button--alt']} onClick={props.onCloseCart}>
        Close
      </button>
      {hasItems && (
        <button className={styles.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  )
  return (
    <Modal onClose={props.onCloseCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onCancel={props.onCloseCart} />}
      {!isCheckout && modalActions}
    </Modal>
  )
}

export default Cart

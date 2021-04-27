import React, { useRef, useState } from 'react'
import Input from '../../UI/Input'
import styles from './MealItemForm.module.css'

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const amountInputRef = useRef()

  const submitHandler = (e) => {
    e.preventDefault()

    const enteredAmount = amountInputRef.current.value
    const enteredAmountNummber = +enteredAmount

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNummber < 1 ||
      enteredAmountNummber > 5
    ) {
      setAmountIsValid(false)
      return
    }
    props.onAddCart(enteredAmountNummber)
  }
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          defaultValue: '1',
          step: '1',
        }}
      />
      <button> + Add</button>
      {!amountIsValid && <p>Please enter valid amount</p>}
    </form>
  )
}

export default MealItemForm

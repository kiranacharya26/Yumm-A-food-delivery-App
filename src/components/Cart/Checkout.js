import { useRef, useState } from 'react'
import styles from './Checkout.module.css'

const isEmpty = (value) => value.trim() === ''
const isSixChars = (value) => value.trim().length === 6

const Checkout = (props) => {
  const [isFormValid, setIsFormValid] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  })

  const nameRef = useRef()
  const streetRef = useRef()
  const postalRef = useRef()
  const cityRef = useRef()

  const confirmHandler = (event) => {
    event.preventDefault()

    const enteredName = nameRef.current.value
    const enteredStreet = streetRef.current.value
    const enteredPostal = postalRef.current.value
    const enteredCity = cityRef.current.value

    const enteredNameIsValid = !isEmpty(enteredName)
    const enteredStreetIsValid = !isEmpty(enteredStreet)
    const enteredPostalIsValid = isSixChars(enteredPostal)
    const enteredCityIsValid = !isEmpty(enteredCity)

    setIsFormValid({
      name: enteredNameIsValid,
      city: enteredCityIsValid,
      postal: enteredPostalIsValid,
      street: enteredStreetIsValid,
    })

    const formValid =
      enteredCityIsValid &&
      enteredNameIsValid &&
      enteredPostalIsValid &&
      enteredStreetIsValid

    if (!formValid) {
      return
    }
  }

  return (
    <form onSubmit={confirmHandler}>
      <div
        className={`${styles.control} ${
          isFormValid.name ? '' : styles.invalid
        }`}
      >
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameRef} />
        {!isFormValid.name && <p>Please enter a valid name</p>}
      </div>
      <div
        className={`${styles.control} ${
          isFormValid.street ? '' : styles.invalid
        }`}
      >
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetRef} />
        {!isFormValid.street && <p>Please enter a valid street name</p>}
      </div>
      <div
        className={`${styles.control} ${
          isFormValid.postal ? '' : styles.invalid
        }`}
      >
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalRef} />
        {!isFormValid.postal && (
          <p>Please enter a valid postal code (6 chars long)</p>
        )}
      </div>
      <div
        className={`${styles.control} ${
          isFormValid.city ? '' : styles.invalid
        }`}
      >
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityRef} />
        {!isFormValid.city && <p>Please enter a valid city name</p>}
      </div>
      <div className={styles.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  )
}

export default Checkout

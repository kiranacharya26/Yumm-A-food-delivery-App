import React, { useEffect, useState } from 'react'
import Card from '../UI/Card'
import styles from './AvaliableMeals.module.css'
import MealItem from './MealItem/MealItem'

const AvailableMeals = () => {
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [httpError, setHttpError] = useState(null)

  useEffect(() => {
    const fetchMeals = async () => {
      const res = await fetch(
        'https://mealsdb-d8dee-default-rtdb.firebaseio.com/meals.json'
      )
      if (!res.ok) {
        throw new Error('Something went wrong')
      }
      const data = await res.json()

      const loadedMeals = []
      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          desc: data[key].description,
          price: data[key].price,
        })
      }
      setMeals(loadedMeals)
      setLoading(false)
    }

    fetchMeals().catch((error) => {
      setLoading(false)
      setHttpError(error.message)
    })
  }, [])

  if (loading) {
    return (
      <section className={styles.MealsLoading}>
        <p>Loading...</p>
      </section>
    )
  }
  if (httpError) {
    return (
      <section className={styles.MealsError}>
        <p>{httpError}</p>
      </section>
    )
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      desc={meal.description}
      price={meal.price}
    />
  ))
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}

export default AvailableMeals

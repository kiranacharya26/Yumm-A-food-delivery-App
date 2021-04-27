import React, { Fragment } from 'react'
import styles from './Header.module.css'
import HeroImg from '../../assets/hero.jpg'
import HeaderCartBtn from './HeaderCartBtn'

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Yumm!</h1>
        <HeaderCartBtn onClick={props.onShowcart} />
      </header>
      <div className={styles['main-image']}>
        <img src={HeroImg} alt='main' />
      </div>
    </Fragment>
  )
}

export default Header

import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../components/Card/Card'
import Header from '../../components/Header/Header'
import styles from './Home.module.css'

const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <Header 
      heading="Carbon Footprint"
      subheading="Calculate your daily carbon footprint" />

      <div className={styles.card__container}>
        <Card
          onClick={() => navigate('/household')}
          title="Household"
          image={`${process.env.PUBLIC_URL}/assets/images/house.svg`}
        />

        <Card
          onClick={() => navigate('/industry')}
          title="Industry"
          image={`${process.env.PUBLIC_URL}/assets/images/factory.svg`}
        />
      </div>
    </>
  )
}

export default Home
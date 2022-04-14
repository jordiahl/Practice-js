import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Father from '../components/Father/Father'
import Grandfather from '../components/Grandfather/Grandfather'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Grandfather />
    </div>
  )
}

export default Home

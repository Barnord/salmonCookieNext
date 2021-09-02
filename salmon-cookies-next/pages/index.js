import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Head from '../components/head'
import Header from '../components/header'
import Form from '../components/form'
import Footer from '../components/footer'

export default function Home() {
  return (
    <>
      <Head />
      <Header />
      <Form />
      <Footer />
    </>
  )
}

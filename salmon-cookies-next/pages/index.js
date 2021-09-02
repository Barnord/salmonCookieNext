import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Head from '../components/head'
import Header from '../components/header'
import Table from '../components/table'
import Form from '../components/form'
import Footer from '../components/footer'

export default function Home() {

  const [store, setStore] = useState({});
  const [stores, setStores] = useState([]);

  const addStore = (newStore) => {
    setStore(newStore);
    setStores([...stores, newStore]);
  }
  return (
    <>
      <Head />
      <Header />
      <Form handleSubmit={addStore} />
      <Table reports={stores} />
      <Footer reports={stores} />
    </>
  )
}

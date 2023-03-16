import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {
  return (
    
      <div className={styles.container}>
      <Head>
      <title>Events App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header>
      <nav align="center">
        <img/>
        <a href=''>Home </a>
        <a href="/events">Events </a>
        <a href="/about-us">About Us </a>
        </nav>
    </header>
    <main className={styles.main}> 
    {data.map((ev) => ( 
    <a key={ev.id} href={'/events/${ev.id}'}> 
    <Image width={200} height={100} alt={ev.title} src= {ev.image}/> <h2> {ev.title}</h2> <p>
     {ev.description} </p></a>))}
    
    
    </main>
      <footer className={styles.footer}>

        <p>
          2023 Coding Using Next- Project by GQ
        </p>
      </footer>
      
      </div>
    
  );
}

export async function getServerSideProps() {
// this code runs only on server side and runs first
// client or user wont be able to see any data written in this section
const {events_categories} = await import('/Data/data.json');
// we need events category from json file first
console.log(events_categories);
 return {
    props:{
      data: events_categories,

    }
  }
}

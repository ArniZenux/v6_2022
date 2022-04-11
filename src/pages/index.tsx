import Head from 'next/head'
//import Link from 'next/link';
import styles from '../styles/Home.module.css';

import React, { useEffect, useState  } from 'react';

import { Layout } from '../components/layout/Layout';
import { Footer } from '../components/footer/footer';

const apiUrl = 'https://v3-vefthjousta.herokuapp.com/';
//const apiUrl = 'https://vef2-20222-v3-synilausn.herokuapp.com/'  Invaldi token, jesus!

console.log(apiUrl);

export default function Home() {
  return (
    <Layout>
    <Head>
      <title>Viðburður Zen - NextJS</title>
    </Head>
    <main>
      <h1>Viðburðslisti</h1>
      <h2>Viðburðir á næstunni</h2>
      <ul>
        <li> Bull </li>
      </ul>
      
    <hr/>
      
    </main>
    <Footer/>
    </Layout>

  );
}
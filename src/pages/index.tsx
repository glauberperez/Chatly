import React from 'react'
import { useState, useEffect } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/index.module.css'

import Link from 'next/link';

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Chatly</title>
        <meta name="description" content="Chatly - meet new people!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-light-purple flex flex-col items-center justify-center h-screen">
      <Image
          src="/chatly_main.png"
          alt="Chatly"
          width={500}
          height={500}
          className="pointer-events-none"
        />
        <Link
          href="/chat"
        >
        <button className="font-sanfrancisco mt-4 px-4 py-2 rounded-lg text-3xl">Join</button>
        </Link>
      </main>
    </>
  )
}

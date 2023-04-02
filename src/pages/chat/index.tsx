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
            {/* chat div */}
            <div className="bg-white rounded-lg shadow-lg p-4 h-3/4 w-2/3 m-3 overflow-x-scroll">
              {/*left user message*/}
              <div className="flex flex-row justify-start items-center mb-4">
                <div className="bg-gray-200 rounded-lg p-2">
                  <p className="text-base">Hello</p>

                  <p className="text-xs">12:00</p>
                </div>
              </div>
              
              {/*right user message*/}
              <div className="flex flex-row justify-end items-center mb-4">
                <div className="bg-purple-500 rounded-lg p-2">
                  <p className="text-base">Hi bitch</p>

                  <p className="text-xs">12:00</p>
                </div>
              </div>
            </div>

            <div className="bg-white flex flex-col rounded-lg shadow-lg p-4 h-1/6 w-2/3">
              <form>
                  <input className="flex flex-row justify-start items-center mb-4" type="text" value=""/>
                  <input className="flex flex-row justify-end items-center mb-4" type="submit" value="Submit" />
              </form>
            </div>

      </main>
    </>
  )
}
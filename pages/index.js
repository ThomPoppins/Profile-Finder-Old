import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { getSession, useSession, signOut } from "next-auth/react"
import LayoutIndex from '../layout/layoutindex'


export default function Home() {

  const { data: session } = useSession()

  function handleSignOut() {
    signOut()
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Profile Finder</title>
        <meta name="description" content="Vind het profiel dat u zoekt!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {session ? User({ session, handleSignOut }) : Guest()}
    </div>
  )
}

// Guest 
function Guest() {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className='text-4xl font-bold'>Welkom gast!</h3>

      <div className='flex justify-center'>
        <Link href={'/login'} className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'>Inloggen</Link>
      </div>
    </main>
  )
}

// Authorize User
function User({ session, handleSignOut }) {
  return (
    <div>
      <LayoutIndex>
        <main className="container mx-auto text-center py-20">
          <div className='text-white' id='pageTop'>
            <h3 className='text-4xl font-bold'>Welkom op de Profile-Finder webapp!</h3>

            <div className='details'>
              <h5>{session.user.name}</h5>
              <h5>{session.user.email}</h5>
            </div>
          </div>


          <div className="bg-red-500 h-32" id="outersearchbox">
            <div className="text-center py-10 bg-slate-50 md:rounded-md">
              Vind profiel
            </div>
          </div>
          <div className='flex justify-center'>
            <button className='mt-5 px-10 py-1 rounded-sm bg-gray-50' onClick={handleSignOut}>Uitloggen</button>
          </div>

          <div className='flex justify-center'>
            <Link href={'/profile'} className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'>Profielpagina</Link>
          </div>
        </main>
      </LayoutIndex>
    </div>
  )
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req })

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }
}
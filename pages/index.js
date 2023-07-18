import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { getSession, useSession, signOut } from "next-auth/react"
import LayoutIndex from '../layout/layoutindex'
import AddProfileDataToUserSession from '../components/addprofiledatatousersession'


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
  // add profile config to user session
  AddProfileDataToUserSession(session);

  console.log(session.user)

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

          {/* TODO  create a input type search field */}
          {/* Box with search input field */}

          <div className="text-center mx-auto my-10 py-3 max-w-md bg-red-500 rounded-md" id="outersearchbox">
            <input type='text' placeholder='Vind profiel' className='w-11/12 mx-2 px-6 rounded-full' />
          </div>

          {/* Button to profile page */}
          <div className='flex justify-center'>
            <Link href={'/profile'} className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'>Profielpagina</Link>
          </div>
          {/* Button to demo page */}
          <div className='flex justify-center'>
            <Link href={'/demo'} className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'>Demo</Link>
          </div>
          {/* Logout button */}
          <div className='flex justify-center'>
            <button className='mt-5 px-10 py-1 rounded-sm bg-gray-50' onClick={handleSignOut}>Uitloggen</button>
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
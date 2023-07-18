import Head from 'next/head'
import LayoutAccount from '../layout/layoutaccount.js'
import styles from '../styles/Form.module.css'
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useFormik } from 'formik'
import { registerValidate } from '../lib/validate.js'
import { useRouter } from 'next/router.js';


export default function Aanmelden() {
  const [show, setShow] = useState({ password: false, cpassword: false });
  // router hook
  const router = useRouter();
  // formik hook
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      cpassword: ''
    },
    validate: registerValidate,
    onSubmit
  })

  // initialize base URL variable as {baseUrl}
  if (typeof window !== "undefined") {
    const url = window.location.href;

    const vercelBaseURL = "https://profile-finder-black.vercel.app";
    const localhostBaseURL = "http://localhost:3000"
    if (url.startsWith(vercelBaseURL)) {
      var baseUrl = vercelBaseURL;
    } else {
      var baseUrl = localhostBaseURL;
    }
  }

  async function onSubmit(values) {
    const options = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    }
    await fetch(baseUrl + '/api/auth/aanmelden', options)
      .then(res => res.json())
      .then((data) => {
        if (data) router.push(baseUrl)
      })
  }


  async function onSubmit(values) {
    const options = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    }
    await fetch(baseUrl + '/api/auth/aanmelden', options)
      .then(res => res.json())
      .then((data) => {
        if (data) router.push(baseUrl)
      })
  }

  return (
    <LayoutAccount>
      <Head>
        <title>Account aanmaken</title>
      </Head>

      <section className='w-3/4 mx-auto flex flex-col gap-10'>
        <div className='title'>
          <h1 className='text-gray-800 text-4xl font-bold py-4'>Account aanmaken</h1>
          <p className='w-3/4 mx-auto text-gray-400'>Registreer een nieuw account.</p>
        </div>
        <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>
          {/* firstname input field */}
          <div className={`${styles.input_group} ${formik.errors.firstname && formik.touched.firstname ? 'border-rose-600' : ''}`}>
            <input
              type='text'
              name='firstname'
              placeholder='Voornaam'
              className={styles.input_text}
              {...formik.getFieldProps('firstname')}
            />
            <span className='icon flex items-center px-4'>
              <HiOutlineUser size={25} />
            </span>
          </div>
          {formik.errors.firstname && formik.touched.firstname ? <span className='text-rose-500'>{formik.errors.firstname}</span> : <></>}
          {/* lastname input field */}
          <div className={`${styles.input_group} ${formik.errors.lastname && formik.touched.lastname ? 'border-rose-600' : ''}`}>
            <input
              type='text'
              name='lastname'
              placeholder='Achternaam'
              className={styles.input_text}
              {...formik.getFieldProps('lastname')}
            />
            <span className='icon flex items-center px-4'>
              <HiOutlineUser size={25} />
            </span>
          </div>
          {formik.errors.lastname && formik.touched.lastname ? <span className='text-rose-500'>{formik.errors.lastname}</span> : <></>}
          {/* username input field  */}
          <div className={`${styles.input_group} ${formik.errors.username && formik.touched.username ? 'border-rose-600' : ''}`}>
            <input
              type='text'
              name='username'
              placeholder='Gebruikersnaam'
              className={styles.input_text}
              {...formik.getFieldProps('username')}
            />
            <span className='icon flex items-center px-4'>
              <HiOutlineUser size={25} />
            </span>
          </div>
          {formik.errors.username && formik.touched.username ? <span className='text-rose-500'>{formik.errors.username}</span> : <></>}
          {/* email input field  */}
          <div className={`${styles.input_group} ${formik.errors.email && formik.touched.email ? 'border-rose-600' : ''}`}>
            <input
              type='email'
              name='email'
              placeholder='Email'
              className={styles.input_text}
              {...formik.getFieldProps('email')}
            />
            <span className='icon flex items-center px-4'>
              <HiAtSymbol size={25} />
            </span>
          </div>
          {formik.errors.email && formik.touched.email ? <span className='text-rose-500'>{formik.errors.email}</span> : <></>}
          {/* password input field  */}
          <div className={`${styles.input_group} ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
            <input
              type={`${show.password ? "text" : "password"}`}
              name='password'
              placeholder='Wachtwoord'
              className={styles.input_text}
              {...formik.getFieldProps('password')}
            />
            <span className='icon flex items-center px-4' onClick={() => setShow({ ...show, password: !show.password })}>
              <HiFingerPrint size={25} />
            </span>
          </div>
          {formik.errors.password && formik.touched.password ? <span className='text-rose-500'>{formik.errors.password}</span> : <></>}
          {/* confirm password input field  */}
          <div className={`${styles.input_group} ${formik.errors.cpassword && formik.touched.cpassword ? 'border-rose-600' : ''}`}>
            <input
              type={`${show.cpassword ? "text" : "password"}`}
              name='cpassword'
              placeholder='Herhaal wachtwoord'
              className={styles.input_text}
              {...formik.getFieldProps('cpassword')}
            />
            <span className='icon flex items-center px-4' onClick={() => setShow({ ...show, cpassword: !show.cpassword })}>
              <HiFingerPrint size={25} />
            </span>
          </div>
          {formik.errors.cpassword && formik.touched.cpassword ? <span className='text-rose-500'>{formik.errors.cpassword}</span> : <></>}
          {/* login buttons */}
          <div className='input-button'>
            <button type='submit' className={styles.button}>
              Aanmelden
            </button>
          </div>
        </form>
        {/* bottom */}
        <div className='input-group'>
          <p className='text-center text-gray-400 '>
            Heb je al een account? <Link href={'/login'} className='text-blue-700'>Log in</Link>
          </p>
        </div>
      </section>
    </LayoutAccount>
  )
}
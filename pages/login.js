import Head from 'next/head'
import LayoutAccount from '../layout/layoutaccount'
import Link from 'next/link'
import styles from '../styles/Form.module.css'
import Image from 'next/image'
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useState } from 'react'
import { signIn, signOut } from "next-auth/react"
import { useFormik } from 'formik'
import login_validate from '../lib/validate'
import { useRouter } from 'next/router'

export default function Login() {
  // initialize state {show} initial value = false
  const [show, setShow] = useState(false);
  // router hook
  const router = useRouter()
  // formik hook
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: login_validate,
    onSubmit
  });
  // initialize {baseUrl}
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

  // Log Formik form errors if necessary 
  // console.log(formik.errors)

  async function onSubmit(values) {
    const status = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "/",
    })

    if (status.ok) router.push(status.url)
  }

  // Google Handler function
  async function handleGoogleSignIn() {
    signIn('google', { callbackUrl: baseUrl })
  }

  // Github login
  async function handleGithubSignIn() {
    signIn('github', { callbackUrl: baseUrl })
  }

  // Facebook login
  // TODO fix login this on Vercel
  async function handleFacebookSignIn() {
    signIn('facebook', { callbackUrl: baseUrl })
  }

  return (
    <LayoutAccount>
      <Head>
        <title>Login</title>
      </Head>

      <section className='w-3/4 mx-auto flex flex-col gap-10'>
        <div className='title'>
          <h1 className='text-gray-800 text-4xl font-bold py-4'>Inloggen</h1>
          <p className='w-3/4 mx-auto text-gray-400'>Log in op uw account.</p>
        </div>

        {/* form */}
        <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>
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

          <div className={`${styles.input_group} ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
            <input
              type={`${show ? "text" : "password"}`}
              name='password'
              placeholder='Wachtwoord'
              className={styles.input_text}
              {...formik.getFieldProps('password')}
            />
            <span className='icon flex items-center px-4' onClick={() => setShow(!show)}>
              <HiFingerPrint size={25} />
            </span>
          </div>
          {formik.errors.password && formik.touched.password ? <span className='text-rose-500'>{formik.errors.password}</span> : <></>}

          {/* login buttons */}
          <div className='input-button'>
            <button type='submit' className={styles.button}>
              Login
            </button>
          </div>
          <div className='input-button'>
            <button type='button' onClick={handleGoogleSignIn} className={styles.button_custom}>
              Sign in with Google <Image src={'/assets/google.svg'} width={20} height={20} alt="Google Icon"></Image>
            </button>
          </div>
          <div className='input-button'>
            <button type='button' onClick={handleGithubSignIn} className={styles.button_custom}>
              Sign in with Github <Image src={'/assets/github.svg'} width={25} height={25} alt="Github Icon"></Image>
            </button>
          </div>
          <div className='input-button'>
            <button type='button' onClick={handleFacebookSignIn} className={styles.button_custom}>
              Sign in with Facebook <Image src={'/assets/facebook.svg'} width={25} height={25} alt="Facebook Icon"></Image>
            </button>
          </div>
        </form>

        {/* bottom */}
        <div className='input-group'>
          <p className='text-center text-gray-400 '>
            Heb je nog geen account? <Link href={'/aanmelden'} className='text-blue-700'>Meld je aan</Link>
          </p>
        </div>
      </section>
    </LayoutAccount>
  )
}
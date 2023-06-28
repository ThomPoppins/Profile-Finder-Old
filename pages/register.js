import Head from 'next/head'
import Layout from '../layout/layout.js'
import styles from '../styles/Form.module.css'
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useFormik } from 'formik'

export default function Register() {
    const [show, setShow] = useState({password: false, cpassword: false});
    // formik hook
    const formik = useFormik({
        initialValues: {
            gebruikersnaam: '',
            email: '',
            password: '',
            cpassword: ''
        },
        onSubmit
    })

    async function onSubmit(values) {
        console.log(values)
    }

    return (
        <Layout>
            <Head>
                <title>Account aanmaken</title>
            </Head>

            <section className='w-3/4 mx-auto flex flex-col gap-10'>
                <div className='title'>
                    <h1 className='text-gray-800 text-4xl font-bold py-4'>Account aanmaken</h1>
                    <p className='w-3/4 mx-auto text-gray-400'>Registreer een nieuw account.</p>
                </div>

                {/* form */}
                <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>
                    <div className={styles.input_group}>
                        <input
                            type='text'
                            name='gebruikersnaam'
                            placeholder='Gebruikersnaam'
                            className={styles.input_text}
                            {...formik.getFieldProps('gebruikersnaam')}
                        />
                        <span className='icon flex items-center px-4'>
                            <HiOutlineUser size={25} />
                        </span>
                    </div>
                    <div className={styles.input_group}>
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

                    <div className={styles.input_group}>
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

                    <div className={styles.input_group}>
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


                    {/* login buttons */}
                    <div className='input-button'>
                        <button type='submit' className={styles.button}>
                            Registreer
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
        </Layout>
    )
}
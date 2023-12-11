"use client"
import React, { useState } from 'react'
import styles from './login.module.css'
import axios from '../../../utils/axios';
import { useRouter } from 'next/navigation';

const Login = () => {

  const [err, setErr] = useState('');
  const router = useRouter()

  console.log(err)
    const handleLogin = async (event) => {
      event.preventDefault();
        await axios.post('/api/login', {
          username: event.target.username.value,
          password: event.target.password.value,
        }).then((response) => {
          console.log(response); 
          router.push('/write')
         }).catch((err)=>{
          setErr(err.response.data.message)
          console.log(err.response.data.message)
         })
    };

  return (
    <>
    <div className={styles.body}><div className={styles.wrapper}>
          <div className={styles.heading}>
              <h2>Welcome back Sanuj!</h2>
              <p>Sign In to your account</p>
          </div>
          <form onSubmit={handleLogin}>
    
          <div className={styles.inputgroup}>
              <input type="text" id="username" className={styles.inputfield} placeholder="Username" />
              </div>
    
          <div className={styles.inputgroup}>
              <input type="password" id="password" className={styles.inputfield} placeholder="Password" />
            </div>
    
          <div className={styles.row}>
          </div>  
          <div className={styles.inputgroup}>
              <button className={styles.button}  >Login <i className="fa-solid fa-arrow-right"></i></button>
          </div>
          {err &&
          <p className={styles.error}>* {err}</p>
          }
          </form>
      </div>
      </div></>
  )
}

export default Login

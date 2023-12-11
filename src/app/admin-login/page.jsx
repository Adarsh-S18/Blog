"use client"
import React from 'react';
import styles from './admin-login.module.css'
// import axios from '../../../utils/axios';

const AdminLogin = () => {
  // const {data, status} = useSession;
    // const handleLogin = async () => {
    //   console.log('hihihiih')
    //   try {
    //     const response = await axios.post('/api/login', {
    //       username: 'yourUsername',
    //       password: 'yourPassword',
    //     });
    //     console.log(response.data); // Handle the response as needed
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
  
  return (
    <>
    <div className={styles.body}><div className={styles.wrapper}>

          <div className={styles.heading}>
              <h2>Welcome back Sanuj!</h2>
              <p>Sign In to your account</p>
          </div>

          <div className={styles.inputgroup}>
              <input type="text" id="username" className={styles.inputfield} placeholder="Username" />
              </div>

          <div className={styles.inputgroup}>
              <input type="password" id="password" className={styles.inputfield} placeholder="Password" />
            </div>

          <div className={styles.row}>
          </div>


          <div className={styles.inputgroup}>
              <button className={styles.button} onClick={handleLogin}>Login <i className="fa-solid fa-arrow-right"></i></button>
          </div>

      </div>
      </div></>

  )
}

export default AdminLogin

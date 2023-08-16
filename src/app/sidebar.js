import React from 'react';
import Image from "next/image";
// import { useRouter } from 'next/router';
import styles from "../CSS/page.module.css";
import Link from "next/link";
import rightArrow from "../Images/right.png";
import MyConnection from './myConnection';

const Sidebar = () => {
    // const router = useRouter();
    function Show(){
        console.log('hello')

    }
    


  return (
    <div className={styles.leftSide}>
        <div className={styles.head_leftSide}>
          <span>Dashboard</span>
        </div>
        <div className={styles.content_leftSide}>
          <div className={styles.btn_leftSide}>
            <p>
              <Image
                src={rightArrow}
                width={20}
                height={20}
                alt="Right Arrow"
              />
              {/* <Link href='/myprofile'> */}
              <button className={styles.proBtn} >My Profile</button>
              {/* </Link> */}
            </p>
            <p>
              <Image
                src={rightArrow}
                width={20}
                height={20}
                alt="Right Arrow"
              />
              {/* <Link href='/'> */}
              <button className={styles.connBtn}>My Connection</button>
              {/* </Link> */}
            </p>
          </div>
          <div className={styles.logOut}>
            <p>Log Out</p>
          </div>
        </div>
      </div>
  )
}

export default Sidebar
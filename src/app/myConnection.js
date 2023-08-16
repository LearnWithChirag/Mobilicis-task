import React from 'react';
import Image from "next/image";
import styles from "../CSS/page.module.css";
import userProfile from "../Images/userProfile.png";

const MyConnection = () => {
  return (
    <div className={styles.connectionContainer}>
    <div className={styles.connBackground}>
      MY CONNECTION
    </div>
    <div className={styles.connContent}>
      <div className={styles.myConnection}>
      <div className={styles.connCard}>
        <div className={styles.cardContent}>
          <h3>Jatin Sharma</h3>
          <p>Full Stack Developer</p>
          <p>@ Oruphones</p>
          <input type="button" value="Remove Connection" />
        </div>
        <Image
          src={userProfile}
          width={120}
          height={120}
          alt="Profile Image"
        />
      </div>

      <div className={styles.connCard}>
        <div className={styles.cardContent}>
          <h3>Shivam Chaudhary</h3>
          <p>Full Stack Developer</p>
          <p>@ Oruphones</p>
          <input type="button" value="Remove Connection" />
        </div>
        <Image
          src={userProfile}
          width={120}
          height={120}
          alt="Profile Image"
        />
      </div>

      <div className={styles.connCard}>
        <div className={styles.cardContent}>
          <h3>Badal Chhipa</h3>
          <p>Full Stack Developer</p>
          <p>@ Oruphones</p>
          <input type="button" value="Remove Connection" />
        </div>
        <Image
          src={userProfile}
          width={120}
          height={120}
          alt="Profile Image"
        />
      </div>

      <div className={styles.connCard}>
        <div className={styles.cardContent}>
          <h3>Sumit Rathi</h3>
          <p>Full Stack Developer</p>
          <p>@ Oruphones</p>
          <input type="button" value="Remove Connection" />
        </div>
        <Image
          src={userProfile}
          width={120}
          height={120}
          alt="Profile Image"
        />
      </div>

      </div>

      

        {/* People You May Know */}
      <div className={styles.newConnect}>
      <div className={styles.newConnHead}>
          <p>People you can also connect</p>
      </div>
      <div className={styles.newConnCard}>
      <div className={styles.connCard}>
        <div className={styles.cardContent}>
          <h3>Hiralal Thakur</h3>
          <p>Full Stack Developer</p>
          <p>@ Oruphones</p>
          <input type="button" value="Connect" />
        </div>
        <Image
          src={userProfile}
          width={120}
          height={120}
          alt="Profile Image"
        />
      </div>
      </div>
      </div>
    </div>

  </div>
  )
}

export default MyConnection;
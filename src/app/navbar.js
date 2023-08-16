import React from 'react';
import Image from "next/image";
import styles from "../CSS/page.module.css";
import profileImg from "../Images/profileImg.png";
import downArrow from "../Images/down.png";
import notification from "../Images/notification.png";

const Navbar = () => {
  return (
    <div className={styles.headPortion}>
          <div className={styles.notificationIcon}>
            <Image
              src={notification}
              width={30}
              height={30}
              alt="Notification Icon"
            />
          </div>
          <div className={styles.headProfile}>
            <span className={styles.headProfileContent}>
              <Image
                src={profileImg}
                width={40}
                height={40}
                alt="Profile Image"
              />
              <p>
                <h3>Welcome Back,</h3>
                <h1>Chirag Paliwal</h1>
              </p>
            </span>

            <span>
              <Image src={downArrow} width={20} height={20} alt="Right Arrow" />
            </span>
          </div>
        </div>
  )
}

export default Navbar;
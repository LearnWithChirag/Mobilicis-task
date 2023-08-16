import Image from "next/image";
import styles from "../CSS/page.module.css";
import userProfile from "../Images/userProfile.png";
import stars from "../Images/stars.png";
import vector from "../Images/vector.png";
import oru from "../Images/oru.png";


export default function MyProfile () {
    return(
        <div className={styles.profileContainer}>
          <div className={styles.profileBackground}>
            <h3>MY PROFILE</h3>
            <div className={styles.profileContent}>
              {/* Left Side of Main Container */}

              <div className={styles.leftContent}>
                {/* Profile Container Start */}
                <div className={styles.profileImage}>
                  <Image
                    src={userProfile}
                    width={120}
                    height={120}
                    alt="Profile Image"
                  />
                  <input type="button" value="Upload Photo" />
                </div>
                {/* Profile Container End */}

                {/* User Detail Section Start*/}
                <div className={styles.userDetail}>
                  <label htmlFor="name">Your Name</label>
                  <span>
                    <p> Chirag Paliwal </p>
                    <input
                      type="button"
                      className={styles.editName}
                      value="Edit"
                    />
                  </span>

                  <label htmlFor="email">Email</label>
                  <span>
                    <p>chiragpaliwal147@gmail.com </p>
                    <input
                      type="button"
                      className={styles.editEmail}
                      value="Edit"
                    />
                  </span>

                  <label htmlFor="phno">Phone Number</label>
                  <span>
                    <p> 7069249904 </p>
                    <input
                      type="button"
                      className={styles.editPhno}
                      value="Edit"
                    />
                  </span>
                </div>
                {/* User Detail Section End */}

                {/* About User Start */}

                <div className={styles.userInfo}>
                  <div className={styles.userHead}>
                    <h3>About</h3>
                    <span>
                      <p> Chirag </p>
                      <input
                        type="button"
                        className={styles.editName}
                        value="Edit"
                      />
                    </span>
                  </div>

                  <span className={styles.userBio}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi, distinctio? Officia animi vitae dolore beatae.
                  </span>
                </div>
                {/* About User End */}

                {/* User Skills Section Start */}
                <div className={styles.userSkills}>
                  <div className={styles.userSkillHead}>
                    <h3>Skills</h3>
                    <input
                      type="button"
                      className={styles.editSkill}
                      value="Edit"
                    />
                  </div>
                  <div className={styles.skillValue}>
                    <li>Javascript</li>
                    <li>CSS</li>
                    <li>Java</li>
                    <li>React JS</li>
                    <li>Next JS</li>
                  </div>
                </div>
                {/* User Skills Section End */}
              </div>
              {/* Left Side of Main Container End */}

              {/* Right Side of Main Container Start */}
              <div className={styles.rightContent}>
                {/* Professional Container Start */}
                <div className={styles.profContainer}>
                  <span className={styles.profDetails}>
                    <h5>Professional Details</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                    </p>
                  </span>
                  <span className={styles.profIcon}>
                    <Image
                      src={stars}
                      width={70}
                      height={70}
                      alt="Stars icon"
                    />
                  </span>
                </div>
                {/* Professional Container End */}

                {/* Certification Container Start */}
                <div className={styles.certfContainer}>
                  <span className={styles.certfHead}>
                    <h3>Certification</h3>
                    <input
                      type="button"
                      value="Edit"
                      className={styles.editCertf}
                    />
                  </span>
                  <div className={styles.certfContent}>
                    <Image
                      src={vector}
                      width={40}
                      height={40}
                      alt="Vector Icon"
                    />
                    <span className={styles.certfName}>
                      <h4>Python</h4>
                      <p>Coding Ninjas</p>
                    </span>
                  </div>
                </div>
                {/* Certification Container End */}

                {/* Experience Container Start */}
                <div className={styles.expContainer}>
                  <span className={styles.expHead}>
                    <h3>Experience</h3>
                    <input
                      type="button"
                      value="Edit"
                      className={styles.editExp}
                    />
                  </span>
                  <div className={styles.expContent}>
                    <span className={styles.expDuration}>
                      <h4>5 Years(2015-2020)</h4>
                      <p>Oruphones</p>
                    </span>
                    <span className={styles.expName}>
                      <h4>Full Time</h4>
                      <p>Full-Stack Developer</p>
                    </span>
                    <Image src={oru} width={40} height={40} alt="Comp Icon" />
                  </div>
                  <div className={styles.expContent}>
                    <span className={styles.expDuration}>
                      <h4>6 Months(2014)</h4>
                      <p>Oruphones</p>
                    </span>
                    <span className={styles.expName}>
                      <h4>Intern</h4>
                      <p>Full-Stack Developer</p>
                    </span>
                    <Image src={oru} width={40} height={40} alt="Comp Icon" />
                  </div>
                </div>
                {/* Experience Container End */}

                {/* Education Container Start */}
                <div className={styles.eduContainer}>
                  <span className={styles.eduHead}>
                    <h3>Education</h3>
                    <input
                      type="button"
                      value="Edit"
                      className={styles.editEdu}
                    />
                  </span>
                  <div className={styles.eduContent}>
                    <h3>IIT HYDERABAD</h3>
                    <span>
                      <p>(2010-2014)</p>
                      <p>Btech</p>
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Non repudiandae mollitia repellendus dicta provident
                      debitis aliquam, vitae reprehenderit odit officia?
                    </p>
                  </div>
                </div>
                {/* Education Container End */}
              </div>
            </div>
          </div>
        </div>

    )
};


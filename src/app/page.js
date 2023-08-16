import styles from "../CSS/page.module.css";
import MyProfile from "./myProfile";
import MyConnection from "./myConnection";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

export default function Home() {
  return (
    <>
      {/* Left Side Bar Start */}
      <Sidebar />
      {/* Left Side Bar End */}

      {/* Right Side Start */}
      <div className={styles.rightSide}>
        {/* Navbar start */}
        <Navbar />
        {/* Navbar End */}
        {/* Main Container Profile Section Start */}
        <MyProfile />
        {/* Main Container Profile Section End */}

        {/* Main Container Connection Section Start */}
        <MyConnection />
        {/* Main Container Connection Section End */}
      </div>
    </>
  );
}

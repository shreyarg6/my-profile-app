import styles from "../styles/navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = ({ mode, updateMode }) => {
  return (
    <nav className={`${styles["navbar"]}`}>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact Me</a>
        </li>
        <li>
          <a href="#">Add Profile</a>
        </li>
      </ul>
      <button onClick={updateMode}>
        {mode === "light" ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
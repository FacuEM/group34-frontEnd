import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Link to="/">
          <h1>Blog Challenge</h1>
        </Link>
      </div>
      <div className={styles.right}>
        <Link to="/newPost">
          <h4>Create a new post</h4>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

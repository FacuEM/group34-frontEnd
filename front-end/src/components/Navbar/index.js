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
          <h4 className={styles.newPostText}>Create a new post</h4>
          <div className={styles.newPostIcon}>
            <i class="bi bi-file-earmark-plus"></i>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

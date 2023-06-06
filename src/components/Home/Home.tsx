import { NavLink } from 'react-router-dom';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <NavLink className={styles.link} to={'/login'}>Login (Challenge - 1)</NavLink>
      <NavLink className={styles.link} to={'/video'}>Video Player (Challenge - 2)</NavLink>
      <NavLink className={styles.link} to={'/date'}>Date (Challenge - 3)</NavLink>
    </div>
  )
}

export default Home
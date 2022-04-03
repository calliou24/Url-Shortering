import { useState } from 'react';
import styles from './nav.module.css';
import logo from '../../assets/images/logo.svg';

function Nav() {
	const [ open, setOpen ] = useState(false);

	return (
		<nav className={styles.nav}>
			<div className={styles.logoCont}>
				<img src={logo} alt="logo" className={styles.logo} />
			</div>
			<div id={open ? styles.listOpen : undefined} className={styles.listCont}>
				<ul className={styles.list}>
					<li className={styles.item}>Features</li>
					<li className={styles.item}>Pricing</li>
					<li className={styles.item}>Resources</li>
				</ul>
				<div className={styles.btnCont}>
					<button className={styles.login}>Login</button>
					<button className={styles.signUp}>Sign Up</button>
				</div>
			</div>
			<div onClick={() => setOpen(!open)} className={styles.hamburger}>
				<div id={open ? styles.bar1 : undefined} className={styles.bar} />
				<div id={open ? styles.bar2 : undefined} className={styles.bar} />
				<div id={open ? styles.bar3 : undefined} className={styles.bar} />
			</div>
		</nav>
	);
}

export default Nav;

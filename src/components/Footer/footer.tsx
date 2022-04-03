import styles from './footer.module.css';

import { Logo, Facebook, Twitter, Pinterest, Instagram } from './Icons/Icons';

const socialMedia = [ 
  {
    key:'facebook',
    icon: <Facebook />
  },
  {
    key: 'twitter',
    icon: <Twitter />
  },
  {
    key: 'pinterest',
    icon: <Pinterest />}, 
  {
    key : 'instagram',
    icon : <Instagram />
  } 
];

function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.iconCont}>
				<Logo />
			</div>
			<div className={styles.listsCont}>
				<ul className={styles.list}>
					<li className={styles.itemTitle}>Features</li>
					<li className={styles.item}>Link Shortering</li>
					<li className={styles.item}>Branded Links</li>
					<li className={styles.item}>Analytics</li>
				</ul>
				<ul className={styles.list}>
					<li className={styles.itemTitle}>Resources</li>
					<li className={styles.item}>Blog</li>
					<li className={styles.item}>Developers</li>
					<li className={styles.item}>Support</li>
				</ul>
				<ul className={styles.list}>
					<li className={styles.itemTitle}>Company</li>
					<li className={styles.item}>About</li>
					<li className={styles.item}>Our Team</li>
					<li className={styles.item}>Careers</li>
					<li className={styles.item}>Contact</li>
				</ul>
			</div>
			<div className={styles.mediaCont}>{socialMedia.map(({key,icon}) => <div className={styles.iconCont} key={key}>{icon}</div>)}</div>
		</footer>
	);
}

export default Footer;

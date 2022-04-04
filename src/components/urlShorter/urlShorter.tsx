import styles from './url-shorter.module.css';
import ButtonCopyToC from './ButtonCopy/button';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { motion } from 'framer-motion';

import useGetShortUrl from '../../hooks/useGetShortUrl';

function UrlShorter() {
  const {handdleShortLink,handdleChange, url, shortenLinks, validLink} = useGetShortUrl() 

	const handdleCopy = () => {
		return toast.success('Copied! ⭐', {
			position: 'top-center',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined
		});
	};

	return (
		<div className={styles.shorter}>
			<form onSubmit={(e) => handdleShortLink(e)} className={styles.form}>
				<input
					id={url.length > 1 && validLink == false ? styles.invalidLink : undefined}
					className={styles.input}
					placeholder="shorten a link here..."
					onChange={(e) => handdleChange(e)}
					value={url}
				/>
				<button className={styles.btnSubmit} type="submit">
					Shorten Url
				</button>
				{url.length > 1 && validLink == false ? <p className={styles.error}>Provide a valid link</p> : ''}
			</form>
			<ul className={styles.urlDisplayList}>
				{shortenLinks.map((e) => (
					<motion.li
						initial={{ opacity: 0, x: -200 }}
						animate={{ opacity: 1, x: 0 }}
						className={styles.item}
						id={e.code}
						key={e.code}
					>
						<p className={styles.originalLink}>{e.original}</p>
						<span className={styles.copyCont}>
							{e.short}
							<ButtonCopyToC handdleCopy={handdleCopy} text={e.short} />
						</span>
					</motion.li>
				))}
			</ul>
			<ToastContainer />
		</div>
	);
}

export default UrlShorter;

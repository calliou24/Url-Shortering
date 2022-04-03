import { useState } from 'react';
import styles from './url-shorter.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ButtonCopyToC from './ButtonCopy/button';
import { motion } from 'framer-motion';

function UrlShorter() {
	const [ url, setUrl ] = useState('');
	const [ shortenLinks, setShortenLinks ] = useState([ { code: 'not-display', original: null, short: null } ]);
	const [ validLink, setValidLink ] = useState(false);
	const api_key = `https://api.shrtco.de/v2/shorten?url=${url}`;

	const handdleShortLink = async (e: any) => {
		e.preventDefault();
		if (validLink) {
			const request = await fetch(api_key);
			const { result } = await request.json();
			const { code, original_link, short_link } = result;
			setShortenLinks([ ...shortenLinks, { code: code, original: original_link, short: short_link } ]);
		}
		return;
	};

	const handdleChange = (e: any) => {
		const { value } = e.target;
		setUrl(value);
		const regex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
		if (regex.test(url)) {
			return setValidLink(true);
		}
		return setValidLink(false);
	};

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

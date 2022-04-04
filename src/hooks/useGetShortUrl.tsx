import { useState } from 'react';

import getShortUrl from '../helpers/getShortUrl';

function useGetShortUrl() {
	const [ url, setUrl ] = useState('');
	const [ shortenLinks, setShortenLinks ] = useState([ { code: 'not-display', original: null, short: null } ]);
	const [ validLink, setValidLink ] = useState(false);
	const api_key = `https://api.shrtco.de/v2/shorten?url=${url}`;

	const handdleShortLink = async (e: any) => {
		e.preventDefault();
		if (validLink) {
			const data = await getShortUrl(api_key);
			const { code, original_link, short_link } = data;
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

	return { handdleShortLink, handdleChange, url, shortenLinks, validLink };
}

export default useGetShortUrl;

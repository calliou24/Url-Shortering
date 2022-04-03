import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styles from './button.module.css'

function ButtonCopyToC({text, handdleCopy}:ButtonCopyToC) {
	const [copied, setCopied] = useState(false)
  
  return (
		<CopyToClipboard text={text}>
			<button onClick={() => {
        handdleCopy()
        setCopied(true)
        }} id={copied ? styles.copiedLink : undefined} className={styles.copyTC}>
				{copied == false ? 'Copy' : 'Copied!'}
			</button>
		</CopyToClipboard>
	);
}

type ButtonCopyToC = {
  text: any;
  handdleCopy:any;
}

export default ButtonCopyToC;

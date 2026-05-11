import Link from 'next/link';
import Image from 'next/image';
import styles from './MyButton.module.css';

const MyButton = ({ text, link, className = "btn_white", icon = "/arrow-btn.webp", iconWidth = 24, iconHeight = 13, onClick, type, disabled }) => {
    // Determine the actual link to use: if text is "Get Started", use "#contact" unless another link is explicitly provided
    const isRedirectText = typeof text === 'string' && (text.toLowerCase() === 'get started' || text.toLowerCase() === 'get a quote');
    const finalLink = link !== undefined ? link : (isRedirectText ? "#contact" : "#");

    const content = (
        <>
            <div className={styles.text}>
                <span>{text}</span>
                <span>{text}</span>
            </div>
            <div className={styles.icon}>
                <div className={styles.iconWrapper}>
                    <Image src={icon} alt="icon" width={iconWidth} height={iconHeight} />
                    <Image src={icon} alt="icon" width={iconWidth} height={iconHeight} />
                </div>
            </div>
        </>
    );

    if (type === 'submit' || type === 'button' || onClick) {
        return (
            <button
                type={type || 'button'}
                onClick={onClick}
                disabled={disabled}
                className={`${styles.mybtn} ${styles[className] || className}`}
                style={{ border: 'none', padding: 0, outline: 'none', fontFamily: 'inherit', opacity: disabled ? 0.7 : 1, cursor: disabled ? 'not-allowed' : 'pointer' }}
            >
                {content}
            </button>
        );
    }

    return (
        <Link href={finalLink} className={`${styles.mybtn} ${styles[className] || className}`}>
            {content}
        </Link>
    );
};

export default MyButton;


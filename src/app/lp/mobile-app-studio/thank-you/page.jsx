import Link from 'next/link'
import GoogleConversion from "@/components/GoogleConversion";
import styles from './ThankYou.module.css'

export const metadata = {
  title: "Thank You - Next Apps Inc",
  description:
    "Thank you for contacting Next Apps Inc. Your inquiry has been received and our team will get back to you shortly.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
}

export default function ThankYou() {
    return (
        <>
            <GoogleConversion />
            
            <main className={styles.thankYouPage}>
                <div className="container">
                    <div className={styles.content}>
                        {/* <div className={styles.iconBox}>
                            <Image src="/lp/mobile-app-studio/check-circle.png" alt="success" width={100} height={100} />
                        </div> */}
                        <h1 className={styles.title}>Thank You!</h1>
                        <p className={styles.desc}>
                            Your inquiry has been received. One of our "Next Apps Inc" will get back to you shortly
                            to discuss how we can bring your mobile vision to life.
                        </p>
                        <div className={styles.btnRow}>
                            <Link href="/lp/mobile-app-studio" className={styles.backBtn}>
                                &larr; BACK TO HOME
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

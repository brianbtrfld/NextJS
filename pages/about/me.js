import styles from '../../styles/Home.module.css'
import Link from "next/link";


export default function AboutMe() {
    return (
        <>
            <h1 className={styles.title}>Brian G. Butterfield</h1>

            <h2>
                <Link href="/">
                    <a>Return</a>
                </Link>
            </h2>
        </>
    )
}
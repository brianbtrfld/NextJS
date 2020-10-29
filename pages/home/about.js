import styles from '../../styles/Home.module.css'
import Link from "next/link";


export default function AboutMe() {
    return (
        <>
            <h1 className={styles.title}>Brian G. Butterfield</h1>

            <h2>Version 2020.10.28.101</h2>
            <h4>
                <Link href="/">
                    <a>Return Home</a>
                </Link>
            </h4>
        </>
    )
}
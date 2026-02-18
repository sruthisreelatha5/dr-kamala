import styles from "./Footer.module.css";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.name}>Dr. R. Kamala</div>
			<div className={styles.sub}>
				Daughter &nbsp;&middot;&nbsp; Mother &nbsp;&middot;&nbsp; Aunt &nbsp;&middot;&nbsp; Friend
				&nbsp;&middot;&nbsp; Teacher
			</div>
			<ul className={styles.links}>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#book">The Book</a>
				</li>
				<li>
					<a href="#tributes">Tributes</a>
				</li>
				<li>
					<a href="#remember">Remembrance Wall</a>
				</li>
				<li>
					<a href="#gallery">Gallery</a>
				</li>
			</ul>
			<div className={styles.copy}>
				The Hall of Silence &middot; Published with love by her family &middot; &copy; 2026
			</div>
		</footer>
	);
}

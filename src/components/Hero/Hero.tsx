import styles from "./Hero.module.css";
import KannikonnaArt from "./KannikonnaArt";

export default function Hero() {
	return (
		<section id="hero" className={styles.hero}>
			<div className={styles.heroBg} />
			<KannikonnaArt />
			<h1 className={styles.heroName}>Dr. R. Kamala</h1>
			<p className={styles.heroYears}>
				Daughter &nbsp;&middot;&nbsp; Mother &nbsp;&middot;&nbsp; Aunt &nbsp;&middot;&nbsp; Friend
				&nbsp;&middot;&nbsp; Teacher
			</p>
			<div className={styles.heroDivider} />
			<p className={styles.heroTagline}>The light of every room she ever entered.</p>
		</section>
	);
}

import styles from "./Hero.module.css";
import KannikonnaArt from "./KannikonnaArt";
import Image from "next/image";

export default function Hero() {
	return (
		<section id="hero" className={styles.hero}>
			<div className={styles.heroBg} />
			<KannikonnaArt />
			<div className={styles.heroPhotoContainer}>
				<Image
					src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-kamala-Z6kER40q1ch1saydhLmnnTatYTPhzT.jpg"
					alt="Dr. R. Kamala portrait"
					width={280}
					height={360}
					priority
					className={styles.heroPhoto}
				/>
			</div>
			<h1 className={styles.heroName}>Dr. R. Kamala</h1>
			<p className={styles.heroYears}>
				Daughter &nbsp;&middot;&nbsp; Wife &nbsp;&middot;&nbsp; Mother &nbsp;&middot;&nbsp; Aunt &nbsp;&middot;&nbsp; Friend
				&nbsp;&middot;&nbsp; Teacher
			</p>
			<div className={styles.heroDivider} />
			<p className={styles.heroTagline}>The light of every room she ever entered.</p>
		</section>
	);
}

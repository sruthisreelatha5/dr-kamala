import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import styles from "./About.module.css";

export default function About() {
	return (
		<section id="about" className={styles.about}>
			<ScrollReveal>
				<p className="section-label">Who She Was</p>
				<h2 className="section-title">
					About <em>Kamala</em>
				</h2>
			</ScrollReveal>
			<ScrollReveal className={styles.aboutGrid}>
				<div>
					<Image
						src="/ProfilePic.png"
						alt="Dr. R. Kamala portrait"
						width={200}
						height={267}
						priority
						className={styles.photoImage}
					/>
				</div>
				<div className={styles.aboutText}>
					<p>
						Dr. R. Kamala, lovingly known as Mini, was the kind of person who carried sunshine with
						her. She had a natural warmth that made everyone feel seen, cared for, and a little
						lighter just by being around her.
					</p>
					<p>
						A brilliant scholar who earned First Rank in M.A. English Literature, she became a
						deeply devoted teacher. From Kerala to Andhra Pradesh, she shaped young minds with
						kindness, intelligence, and quiet strength. Her students remember her not just for what
						she taught, but for how she made them feel.
					</p>
					<p>
						She was known for her thoughtfulness in the smallest things: she was always the one who
						arrived with a gift chosen specifically for you, who remembered what you loved, who
						showed up. She collected meaningful things for the people she cared about, not out of
						obligation, but because giving was simply in her nature.
					</p>
					<p>
						Even in difficult times, she met life with grace, courage, and an unwavering smile. She
						is remembered as a beloved daughter, mother, sister, aunt, teacher, and friend, a light
						that continues to glow in the hearts of all who knew her.
					</p>
				</div>
			</ScrollReveal>
		</section>
	);
}

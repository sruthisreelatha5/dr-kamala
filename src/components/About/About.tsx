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
					<div className={styles.photoPlaceholder}>
						[ Photo of Kamala ]
						<br />
						<br />
						<small>Replace with her photo</small>
					</div>
				</div>
				<div className={styles.aboutText}>
					<p>
						Dr. R. Kamala — known to those closest to her simply as <em>Mini</em> — was, by every
						account, the happiest person in any room she entered. Not because life was always easy,
						but because joy was simply the way she moved through the world. She had an extraordinary
						gift for making people feel seen, loved, and lighter than when they arrived.
					</p>
					<p>
						A brilliant academic — daughter of MKC Nair and Dr. K. Radha, and granddaughter of the
						legendary Professor K.P.K. Menon — she secured First Rank in M.A. English Literature and
						went on to become a devoted teacher whose students remember her with a reverence that
						speaks for itself. She taught at institutions across India, from Kerala to Andhra
						Pradesh, leaving behind students and colleagues who became family.
					</p>
					<p>
						Kamala was known for her thoughtfulness in the smallest things: she was always the one
						who arrived with a gift chosen specifically for you, who remembered what you loved, who
						showed up. She collected meaningful things for the people she cared about — not out of
						obligation, but because giving was simply in her nature.
					</p>
					<p>
						She faced illness with the same grace and courage with which she faced everything else —
						smiling, warm, and more concerned about others than herself. She is remembered as a
						daughter, mother, aunt, teacher, and lifelong friend whose light continues to guide
						everyone she loved.
					</p>
				</div>
			</ScrollReveal>
		</section>
	);
}

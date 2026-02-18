import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import styles from "./Book.module.css";

export default function Book() {
	return (
		<div id="book" className={styles.book}>
			<div className={styles.inner}>
				<ScrollReveal>
					<div className={styles.bookCover}>
						<div>
							<div className={styles.bookCoverTitle}>The Hall of Silence</div>
							<div className={styles.bookCoverAuthor}>Dr. R. Kamala</div>
						</div>
					</div>
				</ScrollReveal>
				<ScrollReveal>
					<p className={`section-label ${styles.sectionLabel}`}>The Collection</p>
					<h2 className={`section-title ${styles.sectionTitle}`}>
						The <em className={styles.sectionTitleEm}>Hall of Silence</em>
						<br />
						Collected Poems
					</h2>
					<p className={styles.bookDescription}>
						A posthumous collection of poems gathered from a lifetime of writing — gathered with
						love by her family, and now offered to the world as Dr. R. Kamala always gave:
						generously, wholeheartedly, and with the hope of bringing light into someone&apos;s day.
					</p>
					<p className={styles.bookDescription}>
						This book is a gift to all who knew her, and a beautiful introduction for all who did
						not.
					</p>
					<a href="#" className="btn btn-light">
						Where to Buy ↗
					</a>
				</ScrollReveal>
			</div>
		</div>
	);
}

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import styles from "./Book.module.css";

export default function Book() {
	return (
		<div id="book" className={styles.book}>
			<div className={styles.inner}>
				<ScrollReveal>
					<Image
						src="/bookCover.png"
						alt="The Hall of Silence book cover"
						width={300}
						height={450}
						priority
						className={styles.bookCover}
					/>
				</ScrollReveal>
				<ScrollReveal>
					<p className={`section-label ${styles.sectionLabel}`}>The Collection</p>
					<h2 className={`section-title ${styles.sectionTitle}`}>
						The <em className={styles.sectionTitleEm}>Hall of Silence</em>
						<br />
						Collected Poems
					</h2>
					<p className={styles.bookDescription}>
						A collection of poems gathered from a lifetime of writing, now offered to the world as
						Kamala always gave: generously, wholeheartedly, and with the hope of bringing light into
						someone&apos;s day.
					</p>
					<p className={styles.bookDescription}>
						This book is a gift to all who knew her, and a beautiful introduction for all who did
						not.
					</p>
					<div className={styles.ctaBlock}>
						<a
							href="https://wa.me/919895686526?text=Hi%2C%20I%27d%20like%20to%20pre-book%20The%20Hall%20of%20Silence.%20My%20address%20is%3A%20"
							target="_blank"
							rel="noopener noreferrer"
							className={`btn btn-light ${styles.prebookBtn}`}
						>
							Pre-book via WhatsApp →
						</a>
						<p className={styles.paymentNote}>Payment via GPay to 9895686526</p>
					</div>
				</ScrollReveal>
			</div>
		</div>
	);
}

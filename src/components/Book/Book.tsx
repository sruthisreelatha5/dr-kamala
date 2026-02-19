import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import Image from "next/image";
import styles from "./Book.module.css";

export default function Book() {
	return (
		<div id="book" className={styles.book}>
			<div className={styles.inner}>
				<ScrollReveal>
					<Image
						src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-18%20at%205.26.42%E2%80%AFPM-scPSXVI1Gz3gOynfZWnhK9HUaJqnDG.png"
						alt="The Hall of Silence book cover"
						width={300}
						height={450}
						className={styles.bookCover}
						priority
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
						Dr. R. Kamala always gave: generously, wholeheartedly, and with the hope of bringing light into someone&apos;s day.
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

"use client";

import { useCallback, useEffect, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import { galleryItems } from "@/data/gallery";
import type { GalleryItem } from "@/types";
import styles from "./Gallery.module.css";

export default function Gallery() {
	const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
	const [lightboxIndex, setLightboxIndex] = useState<number>(-1);

	const openLightbox = useCallback((item: GalleryItem, index: number) => {
		setLightboxItem(item);
		setLightboxIndex(index);
		document.body.style.overflow = "hidden";
	}, []);

	const closeLightbox = useCallback(() => {
		setLightboxItem(null);
		setLightboxIndex(-1);
		document.body.style.overflow = "";
	}, []);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") closeLightbox();
		};
		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [closeLightbox]);

	const handleOverlayClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			closeLightbox();
		}
	};

	return (
		<section id="gallery" className={styles.gallery}>
			<ScrollReveal>
				<p className="section-label">Photographs</p>
				<h2 className="section-title">
					A Life in <em>Pictures</em>
				</h2>
			</ScrollReveal>
			<ScrollReveal>
				<div className={styles.galleryGrid}>
					{galleryItems.map((item, index) => (
						<div
							className={styles.galleryItem}
							key={item.caption}
							onClick={() => openLightbox(item, index)}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") openLightbox(item, index);
							}}
							role="button"
							tabIndex={0}
						>
							{item.image ? (
  <img src={item.image} alt={item.caption} className={styles.galleryPhoto} />
) : (
  <div className={styles.galleryPhotoPlaceholder} style={{ background: item.gradient }}>
    [ Photo {index + 1} ]
  </div>
)}
						</div>
					))}
				</div>
			</ScrollReveal>

			{/* Lightbox */}
			<div
				className={`${styles.lightbox} ${lightboxItem ? styles.lightboxActive : ""}`}
				onClick={handleOverlayClick}
			>
				<button className={styles.lightboxClose} onClick={closeLightbox} type="button">
					&#x2715;
				</button>
				<div className={styles.lightboxContent}>
				{lightboxItem?.image ? (
  <img src={lightboxItem.image} alt={lightboxItem.caption} className={styles.lightboxImg} />
) : (
  <div className={styles.lightboxImgPlaceholder}>
    [ Photo {lightboxIndex + 1} ]
  </div>
)}
		
				</div>
			</div>
		</section>
	);
}

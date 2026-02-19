"use client";

import Image from "next/image";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { memo, useCallback, useEffect, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import { galleryItems } from "@/data/gallery";
import { useMobile } from "@/hooks/mobilehooks";
import type { GalleryItem } from "@/types";
import styles from "./Gallery.module.css";

const BENTO_ITEM_CLASS_NAMES = [
	styles.galleryItem1,
	styles.galleryItem2,
	styles.galleryItem3,
	styles.galleryItem4,
	styles.galleryItem5,
	styles.galleryItem6,
];

interface GalleryCardProps {
	areaClassName: string;
	index: number;
	item: GalleryItem;
	onOpen: (item: GalleryItem, index: number) => void;
}

const GalleryCard = memo(function GalleryCard({
	areaClassName,
	index,
	item,
	onOpen,
}: GalleryCardProps) {
	const handleOpen = useCallback(() => {
		onOpen(item, index);
	}, [index, item, onOpen]);

	const handleKeyDown = useCallback(
		(e: ReactKeyboardEvent<HTMLDivElement>) => {
			if (e.key !== "Enter" && e.key !== " ") return;
			e.preventDefault();
			onOpen(item, index);
		},
		[index, item, onOpen],
	);

	return (
		<div
			className={`${styles.galleryItem} ${areaClassName}`}
			onClick={handleOpen}
			onKeyDown={handleKeyDown}
			role="button"
			tabIndex={0}
			aria-label={`Open photo ${index + 1}: ${item.caption}`}
		>
			{item.image ? (
				<div className={styles.galleryMedia}>
					<Image
						src={item.image}
						alt={item.caption}
						fill
						sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 34vw, 26vw"
						className={styles.galleryPhoto}
					/>
				</div>
			) : (
				<div className={styles.galleryPhotoPlaceholder} style={{ background: item.gradient }}>
					[ Photo {index + 1} ]
				</div>
			)}
			
		</div>
	);
});

export default function Gallery() {
	const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
	const [lightboxIndex, setLightboxIndex] = useState<number>(-1);
	const isMobile = useMobile();

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

	useEffect(() => {
		return () => {
			document.body.style.overflow = "";
		};
	}, []);

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
						<GalleryCard
							key={item.caption}
							item={item}
							index={index}
							areaClassName={BENTO_ITEM_CLASS_NAMES[index] ?? ""}
							onOpen={openLightbox}
						/>
					))}
				</div>
			</ScrollReveal>

			{/* Lightbox */}
			<div
				className={`${styles.lightbox} ${lightboxItem ? styles.lightboxActive : ""} ${isMobile ? styles.lightboxMobile : ""}`}
				onClick={handleOverlayClick}
			>
				<button
					className={styles.lightboxClose}
					onClick={closeLightbox}
					type="button"
					aria-label="Close"
				>
					&#x2715;
				</button>
				<div
					className={`${styles.lightboxContent} ${isMobile ? styles.lightboxContentMobile : ""}`}
				>
					{lightboxItem?.image ? (
						<Image
							src={lightboxItem.image}
							alt={lightboxItem.caption}
							width={1400}
							height={1100}
							sizes="100vw"
							className={styles.lightboxImg}
						/>
					) : (
						<div className={styles.lightboxImgPlaceholder}>[ Photo {lightboxIndex + 1} ]</div>
					)}
					
				
				</div>
			</div>
		</section>
	);
}

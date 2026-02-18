import type { Tribute } from "@/types";
import styles from "./Tributes.module.css";

interface TributeModalProps {
	tribute: Tribute | null;
	onClose: () => void;
}

export default function TributeModal({ tribute, onClose }: TributeModalProps) {
	if (!tribute) return null;

	const handleOverlayClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	return (
		<div
			className={`${styles.modalOverlay} ${tribute ? styles.modalOverlayActive : ""}`}
			onClick={handleOverlayClick}
		>
			<div className={styles.modal}>
				<button className={styles.modalClose} onClick={onClose} type="button">
					&#x2715;
				</button>
				<p className={styles.modalText}>{tribute.text}</p>
				<div className={styles.modalAuthor}>{tribute.author}</div>
				<div className={styles.modalRelation}>{tribute.relation}</div>
			</div>
		</div>
	);
}

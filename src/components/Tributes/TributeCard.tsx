import type { Tribute } from "@/types";
import styles from "./Tributes.module.css";

interface TributeCardProps {
	tribute: Tribute;
	onClick: () => void;
}

export default function TributeCard({ tribute, onClick }: TributeCardProps) {
	return (
		<div
			className={styles.tributeCard}
			onClick={onClick}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") onClick();
			}}
			role="button"
			tabIndex={0}
		>
			<div className={styles.tributeTextWrap}>
				<p className={styles.tributeText}>{tribute.text}</p>
			</div>
			<div className={styles.tributeFooter}>
				<div>
					<div className={styles.tributeAuthor}>{tribute.author}</div>
					<div className={styles.tributeRelation}>{tribute.relation}</div>
				</div>
				<span className={styles.tributeReadMore}>Read more ↗</span>
			</div>
		</div>
	);
}

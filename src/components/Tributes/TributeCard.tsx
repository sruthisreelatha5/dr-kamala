import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { memo, useCallback } from "react";
import type { Tribute } from "@/types";
import styles from "./Tributes.module.css";

interface TributeCardProps {
	tribute: Tribute;
	index: number;
	onOpen: (index: number) => void;
}

function TributeCard({ tribute, index, onOpen }: TributeCardProps) {
	const handleOpen = useCallback(() => {
		onOpen(index);
	}, [index, onOpen]);

	const handleKeyDown = useCallback(
		(e: ReactKeyboardEvent<HTMLDivElement>) => {
			if (e.key !== "Enter" && e.key !== " ") return;
			e.preventDefault();
			onOpen(index);
		},
		[index, onOpen],
	);

	return (
		<div
			className={styles.tributeCard}
			onClick={handleOpen}
			onKeyDown={handleKeyDown}
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

export default memo(TributeCard);

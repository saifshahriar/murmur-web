"use client";

import { type RefObject, useState } from "react";
import { currentUser } from "../_data/feed";
import styles from "../_styles/home.module.css";
import { EmojiIcon, GifIcon, ImageIcon, PollIcon, ScheduleIcon } from "./icons";

type ComposerProps = {
	textareaRef: RefObject<HTMLTextAreaElement | null>;
	onPost: (text: string) => void;
	onNotice: (message: string) => void;
};

const MAX_LENGTH = 280;

export default function Composer({
	textareaRef,
	onPost,
	onNotice,
}: ComposerProps) {
	const [text, setText] = useState("");
	const remaining = MAX_LENGTH - text.length;
	const canPost = text.trim().length > 0 && remaining >= 0;

	const handlePost = () => {
		if (!canPost) {
			return;
		}

		onPost(text.trim());
		setText("");
	};

	return (
		<div className={styles.composer}>
			<span
				className={styles.avatar}
				style={{ background: currentUser.avatar.background }}
				aria-hidden="true"
			>
				{currentUser.avatar.initials}
			</span>

			<div className={styles.composerBody}>
				<textarea
					ref={textareaRef}
					className={styles.composerInput}
					value={text}
					onChange={(event) => setText(event.target.value)}
					placeholder="What's happening?"
					rows={2}
					aria-label="Post text"
				/>

				<div className={styles.composerActions}>
					<button
						type="button"
						className={styles.composerAction}
						aria-label="Add photos"
						title="Add photos"
						onClick={() =>
							onNotice("Photo uploads are coming soon")
						}
					>
						<ImageIcon size={20} />
					</button>
					<button
						type="button"
						className={styles.composerAction}
						aria-label="Add a GIF"
						title="Add a GIF"
						onClick={() => onNotice("GIFs are coming soon")}
					>
						<GifIcon size={20} />
					</button>
					<button
						type="button"
						className={styles.composerAction}
						aria-label="Add a poll"
						title="Add a poll"
						onClick={() => onNotice("Polls are coming soon")}
					>
						<PollIcon size={20} />
					</button>
					<button
						type="button"
						className={styles.composerAction}
						aria-label="Add an emoji"
						title="Add an emoji"
						onClick={() => onNotice("Emoji picker is coming soon")}
					>
						<EmojiIcon size={20} />
					</button>
					<button
						type="button"
						className={styles.composerAction}
						aria-label="Schedule post"
						title="Schedule post"
						onClick={() => onNotice("Scheduling is coming soon")}
					>
						<ScheduleIcon size={20} />
					</button>

					<span className={styles.composerSpacer} />

					{text.length > 0 ? (
						<span
							className={`${styles.charCount} ${
								remaining < 0
									? styles.charCountError
									: remaining <= 20
										? styles.charCountWarn
										: ""
							}`}
						>
							{remaining}
						</span>
					) : null}

					<button
						type="button"
						className={styles.postButtonSmall}
						disabled={!canPost}
						onClick={handlePost}
					>
						Post
					</button>
				</div>
			</div>
		</div>
	);
}

"use client";

import { useState } from "react";
import { suggestions, trends } from "../_data/feed";
import styles from "../_styles/home.module.css";
import { SearchIcon, VerifiedBadge } from "./icons";

type RightRailProps = {
	onNotice: (message: string) => void;
};

export default function RightRail({ onNotice }: RightRailProps) {
	const [following, setFollowing] = useState<Record<string, boolean>>({});
	const [query, setQuery] = useState("");

	const toggleFollow = (handle: string) => {
		setFollowing((current) => ({
			...current,
			[handle]: !current[handle],
		}));
	};

	return (
		<aside className={styles.rightRail}>
			<div className={styles.searchWrap}>
				<form
					className={styles.search}
					onSubmit={(event) => event.preventDefault()}
				>
					<SearchIcon size={18} />
					<input
						value={query}
						onChange={(event) => setQuery(event.target.value)}
						placeholder="Search Murmur"
						aria-label="Search Murmur"
					/>
				</form>
			</div>

			<section className={styles.card}>
				<div className={styles.premiumCard}>
					<h2 className={styles.premiumTitle}>
						Subscribe to Premium
					</h2>
					<p className={styles.premiumText}>
						Unlock longer posts, edit history, and a calmer
						timeline.
					</p>
					<button
						type="button"
						className={styles.premiumButton}
						onClick={() => onNotice("Premium is coming soon")}
					>
						Subscribe
					</button>
				</div>
			</section>

			<section className={styles.card}>
				<h2 className={styles.cardTitle}>What&apos;s happening</h2>
				{trends.map((trend) => (
					<button
						key={trend.title}
						type="button"
						className={styles.trendItem}
						onClick={() =>
							onNotice(`Showing posts for ${trend.title}`)
						}
					>
						<span className={styles.trendMeta}>
							{trend.category}
						</span>
						<span className={styles.trendTitle}>{trend.title}</span>
						<span className={styles.trendPosts}>{trend.posts}</span>
					</button>
				))}
				<button
					type="button"
					className={styles.showMore}
					onClick={() => onNotice("You're all caught up")}
				>
					Show more
				</button>
			</section>

			<section className={styles.card}>
				<h2 className={styles.cardTitle}>Who to follow</h2>
				{suggestions.map((person) => {
					const isFollowing = Boolean(following[person.handle]);

					return (
						<div key={person.handle} className={styles.followItem}>
							<span
								className={`${styles.avatar} ${styles.avatarSmall}`}
								style={{
									background: person.avatar.background,
								}}
								aria-hidden="true"
							>
								{person.avatar.initials}
							</span>
							<span className={styles.followMeta}>
								<span className={styles.followName}>
									{person.name}
									{person.verified ? (
										<VerifiedBadge size={16} />
									) : null}
								</span>
								<span className={styles.followHandle}>
									{person.handle}
								</span>
							</span>
							<button
								type="button"
								className={`${styles.followButton} ${
									isFollowing ? styles.followingButton : ""
								}`}
								aria-pressed={isFollowing}
								onClick={() => toggleFollow(person.handle)}
							>
								{isFollowing ? "Following" : "Follow"}
							</button>
						</div>
					);
				})}
				<button
					type="button"
					className={styles.showMore}
					onClick={() => onNotice("No more suggestions right now")}
				>
					Show more
				</button>
			</section>

			<footer className={styles.footer}>
				<span>Terms of Service</span>
				<span>Privacy Policy</span>
				<span>Cookie Policy</span>
				<span>Accessibility</span>
				<span>Ads info</span>
				<span>© 2026 Murmur</span>
			</footer>
		</aside>
	);
}

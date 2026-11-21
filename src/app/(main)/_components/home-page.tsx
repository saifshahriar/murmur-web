"use client";

import { useEffect, useRef, useState } from "react";
import { currentUser, initialTweets, type Tweet } from "../_data/feed";
import styles from "../_styles/home.module.css";
import Composer from "./composer";
import {
	BellIcon,
	HomeIcon,
	MailIcon,
	SearchIcon,
	SparkleIcon,
	UserIcon,
} from "./icons";
import LeftRail from "./left-rail";
import RightRail from "./right-rail";
import TweetCard from "./tweet-card";

type Tab = "for-you" | "following";

export default function HomePage() {
	const [tweets, setTweets] = useState<Tweet[]>(initialTweets);
	const [tab, setTab] = useState<Tab>("for-you");
	const [toast, setToast] = useState<string | null>(null);
	const composerRef = useRef<HTMLTextAreaElement>(null);
	const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		return () => {
			if (toastTimer.current) {
				clearTimeout(toastTimer.current);
			}
		};
	}, []);

	const showToast = (message: string) => {
		setToast(message);

		if (toastTimer.current) {
			clearTimeout(toastTimer.current);
		}

		toastTimer.current = setTimeout(() => setToast(null), 2200);
	};

	const focusComposer = () => {
		composerRef.current?.focus();
		composerRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "center",
		});
	};

	const updateTweet = (id: number, updater: (tweet: Tweet) => Tweet) => {
		setTweets((current) =>
			current.map((tweet) => (tweet.id === id ? updater(tweet) : tweet)),
		);
	};

	const handleReply = (id: number) => {
		updateTweet(id, (tweet) => ({
			...tweet,
			replies: tweet.replies + 1,
		}));
	};

	const handleRepost = (id: number) => {
		const target = tweets.find((tweet) => tweet.id === id);

		updateTweet(id, (tweet) => ({
			...tweet,
			reposted: !tweet.reposted,
			reposts: tweet.reposts + (tweet.reposted ? -1 : 1),
		}));

		if (target) {
			showToast(target.reposted ? "Repost removed" : "Reposted");
		}
	};

	const handleLike = (id: number) => {
		updateTweet(id, (tweet) => ({
			...tweet,
			liked: !tweet.liked,
			likes: tweet.likes + (tweet.liked ? -1 : 1),
		}));
	};

	const handleBookmark = (id: number) => {
		const target = tweets.find((tweet) => tweet.id === id);

		updateTweet(id, (tweet) => ({
			...tweet,
			bookmarked: !tweet.bookmarked,
		}));

		if (target) {
			showToast(
				target.bookmarked
					? "Removed from Bookmarks"
					: "Added to Bookmarks",
			);
		}
	};

	const handleShare = async (id: number) => {
		const url = `${window.location.origin}${window.location.pathname}#tweet-${id}`;

		try {
			if (navigator.clipboard?.writeText) {
				await navigator.clipboard.writeText(url);
				showToast("Link copied to clipboard");
				return;
			}

			showToast("Link ready to share");
		} catch {
			showToast("Could not copy link");
		}
	};

	const handlePost = (text: string) => {
		const newTweet: Tweet = {
			id: Date.now(),
			name: currentUser.name,
			handle: currentUser.handle,
			time: "now",
			content: text,
			replies: 0,
			reposts: 0,
			likes: 0,
			views: 0,
			avatar: currentUser.avatar,
			isOwn: true,
			following: true,
		};

		setTweets((current) => [newTweet, ...current]);
		setTab("for-you");
		showToast("Your murmur was posted");
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const visibleTweets =
		tab === "following"
			? tweets.filter((tweet) => tweet.following || tweet.isOwn)
			: tweets;

	return (
		<div className={styles.page}>
			<div className={styles.shell}>
				<LeftRail onPostClick={focusComposer} onNotice={showToast} />

				<main className={styles.main}>
					<header className={styles.header}>
						<div className={styles.headerTop}>
							<h1 className={styles.headerTitle}>Home</h1>
							<button
								type="button"
								className={styles.headerAction}
								aria-label="Timeline settings"
								onClick={() =>
									showToast(
										"Timeline settings are coming soon",
									)
								}
							>
								<SparkleIcon size={20} />
							</button>
						</div>

						<div
							className={styles.tabs}
							role="tablist"
							aria-label="Home timeline"
						>
							<button
								type="button"
								role="tab"
								id="for-you-tab"
								aria-selected={tab === "for-you"}
								aria-controls="timeline"
								className={`${styles.tab} ${
									tab === "for-you" ? styles.tabActive : ""
								}`}
								onClick={() => setTab("for-you")}
							>
								For you
							</button>
							<button
								type="button"
								role="tab"
								id="following-tab"
								aria-selected={tab === "following"}
								aria-controls="timeline"
								className={`${styles.tab} ${
									tab === "following" ? styles.tabActive : ""
								}`}
								onClick={() => setTab("following")}
							>
								Following
							</button>
						</div>
					</header>

					<Composer
						textareaRef={composerRef}
						onPost={handlePost}
						onNotice={showToast}
					/>

					<section
						id="timeline"
						role="tabpanel"
						aria-labelledby={`${tab}-tab`}
					>
						{visibleTweets.length > 0 ? (
							visibleTweets.map((tweet) => (
								<TweetCard
									key={tweet.id}
									tweet={tweet}
									onReply={handleReply}
									onRepost={handleRepost}
									onLike={handleLike}
									onBookmark={handleBookmark}
									onShare={handleShare}
									onNotice={showToast}
								/>
							))
						) : (
							<p className={styles.emptyState}>
								Nothing here yet. Follow a few people to fill
								your timeline.
							</p>
						)}
					</section>
				</main>

				<RightRail onNotice={showToast} />
			</div>

			<nav className={styles.mobileNav} aria-label="Primary mobile">
				<button
					type="button"
					className={`${styles.mobileNavItem} ${styles.mobileNavItemActive}`}
					aria-label="Home"
					aria-current="page"
					onClick={() =>
						window.scrollTo({ top: 0, behavior: "smooth" })
					}
				>
					<HomeIcon size={24} />
				</button>
				<button
					type="button"
					className={styles.mobileNavItem}
					aria-label="Explore"
					onClick={() => showToast("Explore is coming soon")}
				>
					<SearchIcon size={24} />
				</button>
				<button
					type="button"
					className={styles.mobileNavItem}
					aria-label="Notifications"
					onClick={() => showToast("Notifications are coming soon")}
				>
					<BellIcon size={24} />
				</button>
				<button
					type="button"
					className={styles.mobileNavItem}
					aria-label="Messages"
					onClick={() => showToast("Messages are coming soon")}
				>
					<MailIcon size={24} />
				</button>
				<button
					type="button"
					className={styles.mobileNavItem}
					aria-label="Profile"
					onClick={() => showToast("Profile is coming soon")}
				>
					<UserIcon size={24} />
				</button>
			</nav>

			{toast ? <output className={styles.toast}>{toast}</output> : null}
		</div>
	);
}

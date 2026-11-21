import { formatCount, type Tweet } from "../_data/feed";
import styles from "../_styles/home.module.css";
import {
	BookmarkIcon,
	ChartIcon,
	HeartIcon,
	MoreIcon,
	ReplyIcon,
	RepostIcon,
	ShareIcon,
	VerifiedBadge,
} from "./icons";

type TweetCardProps = {
	tweet: Tweet;
	onReply: (id: number) => void;
	onRepost: (id: number) => void;
	onLike: (id: number) => void;
	onBookmark: (id: number) => void;
	onShare: (id: number) => void;
	onNotice: (message: string) => void;
};

export default function TweetCard({
	tweet,
	onReply,
	onRepost,
	onLike,
	onBookmark,
	onShare,
	onNotice,
}: TweetCardProps) {
	return (
		<article className={styles.tweet} id={`tweet-${tweet.id}`}>
			<span
				className={styles.avatar}
				style={{ background: tweet.avatar.background }}
				aria-hidden="true"
			>
				{tweet.avatar.initials}
			</span>

			<div className={styles.tweetBody}>
				<div className={styles.tweetHeader}>
					<span className={styles.tweetName}>{tweet.name}</span>
					{tweet.verified ? <VerifiedBadge /> : null}
					<span className={styles.tweetMeta}>{tweet.handle}</span>
					<span className={styles.tweetMeta}>·</span>
					<span className={styles.tweetMeta}>{tweet.time}</span>
					<button
						type="button"
						className={styles.tweetMore}
						aria-label="More options"
						onClick={() => onNotice("Post options are coming soon")}
					>
						<MoreIcon size={18} />
					</button>
				</div>

				<p className={styles.tweetText}>{tweet.content}</p>

				<div className={styles.tweetActions}>
					<button
						type="button"
						className={styles.action}
						aria-label={`Reply (${tweet.replies})`}
						onClick={() => onReply(tweet.id)}
					>
						<ReplyIcon size={18} />
						<span>{formatCount(tweet.replies)}</span>
					</button>

					<button
						type="button"
						className={`${styles.action} ${
							tweet.reposted ? styles.actionReposted : ""
						}`}
						aria-label={`Repost (${tweet.reposts})`}
						aria-pressed={tweet.reposted}
						onClick={() => onRepost(tweet.id)}
					>
						<RepostIcon size={18} />
						<span>{formatCount(tweet.reposts)}</span>
					</button>

					<button
						type="button"
						className={`${styles.action} ${
							tweet.liked ? styles.actionLiked : ""
						}`}
						aria-label={`Like (${tweet.likes})`}
						aria-pressed={tweet.liked}
						onClick={() => onLike(tweet.id)}
					>
						<HeartIcon size={18} filled={tweet.liked} />
						<span>{formatCount(tweet.likes)}</span>
					</button>

					<span className={styles.actionStatic}>
						<ChartIcon size={18} />
						<span className={styles.srOnly}>Views: </span>
						<span>{formatCount(tweet.views)}</span>
					</span>

					<button
						type="button"
						className={`${styles.action} ${
							tweet.bookmarked ? styles.actionBookmarked : ""
						}`}
						aria-label="Bookmark"
						aria-pressed={tweet.bookmarked}
						onClick={() => onBookmark(tweet.id)}
					>
						<BookmarkIcon size={18} filled={tweet.bookmarked} />
					</button>

					<button
						type="button"
						className={styles.action}
						aria-label="Share post"
						onClick={() => onShare(tweet.id)}
					>
						<ShareIcon size={18} />
					</button>
				</div>
			</div>
		</article>
	);
}

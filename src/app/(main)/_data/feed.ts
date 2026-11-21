export type Avatar = {
	initials: string;
	background: string;
};

export type Tweet = {
	id: number;
	name: string;
	handle: string;
	time: string;
	content: string;
	replies: number;
	reposts: number;
	likes: number;
	views: number;
	avatar: Avatar;
	verified?: boolean;
	following?: boolean;
	isOwn?: boolean;
	liked?: boolean;
	reposted?: boolean;
	bookmarked?: boolean;
};

export type Trend = {
	category: string;
	title: string;
	posts: string;
};

export type Suggestion = {
	name: string;
	handle: string;
	avatar: Avatar;
	verified?: boolean;
};

export const currentUser = {
	name: "You",
	handle: "@you",
	avatar: {
		initials: "Y",
		background: "linear-gradient(135deg, #1d9bf0, #7856ff)",
	},
};

export const initialTweets: Tweet[] = [
	{
		id: 1,
		name: "Nadia Rahman",
		handle: "@nadiacodes",
		time: "2h",
		content:
			"Shipped a tiny detail today: the like button now has a spring animation.\n\nIt's the little things. What's a micro-interaction you can't live without?",
		replies: 48,
		reposts: 112,
		likes: 1284,
		views: 48200,
		verified: true,
		following: true,
		avatar: {
			initials: "NR",
			background: "linear-gradient(135deg, #f97316, #ec4899)",
		},
	},
	{
		id: 2,
		name: "Marcus Lee",
		handle: "@marcusbuilds",
		time: "4h",
		content:
			"Hot take: the best debugging tool is still a walk around the block.",
		replies: 96,
		reposts: 342,
		likes: 2871,
		views: 120400,
		following: true,
		avatar: {
			initials: "ML",
			background: "linear-gradient(135deg, #0ea5e9, #2563eb)",
		},
	},
	{
		id: 3,
		name: "Priya Shah",
		handle: "@priyadesigns",
		time: "5h",
		content:
			"Design systems aren't about components. They're about decisions — and writing those decisions down where the whole team can find them.",
		replies: 31,
		reposts: 204,
		likes: 1690,
		views: 73400,
		avatar: {
			initials: "PS",
			background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
		},
	},
	{
		id: 4,
		name: "Murmur Engineering",
		handle: "@murmureng",
		time: "7h",
		content:
			"We're hiring a product engineer to help build a calmer, kinder social feed.\n\nRemote-first. Small team. Real ownership.",
		replies: 22,
		reposts: 87,
		likes: 642,
		views: 38100,
		verified: true,
		avatar: {
			initials: "ME",
			background: "linear-gradient(135deg, #1d9bf0, #0b6fc2)",
		},
	},
	{
		id: 5,
		name: "Alex Chen",
		handle: "@alexchen",
		time: "9h",
		content: "What's one small habit that genuinely improved your focus?",
		replies: 231,
		reposts: 89,
		likes: 943,
		views: 60100,
		following: true,
		avatar: {
			initials: "AC",
			background: "linear-gradient(135deg, #10b981, #0ea5e9)",
		},
	},
	{
		id: 6,
		name: "Sam Rivera",
		handle: "@samr",
		time: "12h",
		content: "Reminder: you don't need permission to build the thing.",
		replies: 14,
		reposts: 56,
		likes: 489,
		views: 21900,
		avatar: {
			initials: "SR",
			background: "linear-gradient(135deg, #f59e0b, #ef4444)",
		},
	},
];

export const trends: Trend[] = [
	{
		category: "Technology · Trending",
		title: "#BuildInPublic",
		posts: "18.2K posts",
	},
	{
		category: "Design · Trending",
		title: "Design systems",
		posts: "12.4K posts",
	},
	{
		category: "Trending in Tech",
		title: "Next.js",
		posts: "8,901 posts",
	},
	{
		category: "Sports · Trending",
		title: "Finals",
		posts: "45.1K posts",
	},
];

export const suggestions: Suggestion[] = [
	{
		name: "Aisha Khan",
		handle: "@aishak",
		verified: true,
		avatar: {
			initials: "AK",
			background: "linear-gradient(135deg, #ec4899, #f97316)",
		},
	},
	{
		name: "Dev Patel",
		handle: "@devpatel",
		avatar: {
			initials: "DP",
			background: "linear-gradient(135deg, #14b8a6, #0ea5e9)",
		},
	},
	{
		name: "Lina Torres",
		handle: "@linacodes",
		verified: true,
		avatar: {
			initials: "LT",
			background: "linear-gradient(135deg, #6366f1, #a855f7)",
		},
	},
];

export function formatCount(value: number): string {
	if (value >= 1_000_000) {
		return `${(value / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
	}

	if (value >= 1_000) {
		return `${(value / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
	}

	return String(value);
}

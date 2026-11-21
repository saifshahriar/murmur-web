import type { ReactNode } from "react";

type IconProps = {
	size?: number;
	className?: string;
};

type BaseIconProps = IconProps & {
	filled?: boolean;
	children: ReactNode;
};

function Icon({
	size = 24,
	className,
	filled = false,
	children,
}: BaseIconProps) {
	return (
		<svg
			viewBox="0 0 24 24"
			width={size}
			height={size}
			fill={filled ? "currentColor" : "none"}
			stroke={filled ? "none" : "currentColor"}
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={className}
			aria-hidden="true"
		>
			{children}
		</svg>
	);
}

export function BirdIcon(props: IconProps) {
	return (
		<Icon {...props} filled>
			<path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
		</Icon>
	);
}

export function HomeIcon(props: IconProps) {
	return (
		<Icon {...props}>
			<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
			<polyline points="9 22 9 12 15 12 15 22" />
		</Icon>
	);
}

export function SearchIcon(props: IconProps) {
	return (
		<Icon {...props}>
			<circle cx="11" cy="11" r="8" />
			<line x1="21" y1="21" x2="16.65" y2="16.65" />
		</Icon>
	);
}

export function BellIcon(props: IconProps) {
	return (
		<Icon {...props}>
			<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
			<path d="M13.73 21a2 2 0 0 1-3.46 0" />
		</Icon>
	);
}

export function MailIcon(props: IconProps) {
	return (
		<Icon {...props}>
			<rect x="2" y="4" width="20" height="16" rx="2" />
			<polyline points="22 6 12 13 2 6" />
		</Icon>
	);
}

export function BookmarkIcon({
	filled = false,
	...props
}: IconProps & { filled?: boolean }) {
	return (
		<Icon {...props} filled={filled}>
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
		</Icon>
	);
}

export function UserIcon(props: IconProps) {
	return (
		<Icon {...props}>
			<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
			<circle cx="12" cy="7" r="4" />
		</Icon>
	);
}

export function UsersIcon(props: IconProps) {
	return (
		<Icon {...props}>
			<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
			<path d="M16 3.128a4 4 0 0 1 0 7.744" />
			<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
			<circle cx="9" cy="7" r="4" />
		</Icon>
	);
}

export function MoreIcon(props: IconProps) {
	return (
		<Icon {...props} filled>
			<circle cx="5" cy="12" r="1.5" />
			<circle cx="12" cy="12" r="1.5" />
			<circle cx="19" cy="12" r="1.5" />
		</Icon>
	);
}

export function SparkleIcon(props: IconProps) {
	return (
		<Icon {...props}>
			<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
			<path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z" />
		</Icon>
	);
}

export function ImageIcon(props: IconProps) {
	return (
		<Icon {...props}>
			<rect x="3" y="3" width="18" height="18" rx="2" />
			<circle cx="8.5" cy="8.5" r="1.5" />
			<polyline points="21 15 16 10 5 21" />
		</Icon>
	);
}

export function GifIcon(props: IconProps) {
	return (
		<Icon {...props}>
			<rect x="2" y="5" width="20" height="14" rx="3" />
			<text
				x="12"
				y="15.5"
				textAnchor="middle"
				fontSize="7"
				fontWeight="700"
				fill="currentColor"
				stroke="none"
			>
				GIF
			</text>
		</Icon>
	);
}

export function PollIcon(props: IconProps) {
	return (
		<Icon {...props}>
			<line x1="6" y1="20" x2="6" y2="14" />
			<line x1="12" y1="20" x2="12" y2="8" />
			<line x1="18" y1="20" x2="18" y2="4" />
		</Icon>
	);
}

export function EmojiIcon(props: IconProps) {
	return (
		<Icon {...props}>
			<circle cx="12" cy="12" r="10" />
			<path d="M8 14s1.5 2 4 2 4-2 4-2" />
			<circle cx="9" cy="9" r="1" fill="currentColor" stroke="none" />
			<circle cx="15" cy="9" r="1" fill="currentColor" stroke="none" />
		</Icon>
	);
}

export function ScheduleIcon(props: IconProps) {
	return (
		<Icon {...props}>
			<circle cx="12" cy="12" r="10" />
			<polyline points="12 6 12 12 16 14" />
		</Icon>
	);
}

export function ReplyIcon(props: IconProps) {
	return (
		<Icon {...props}>
			<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
		</Icon>
	);
}

export function RepostIcon(props: IconProps) {
	return (
		<Icon {...props}>
			<polyline points="17 1 21 5 17 9" />
			<path d="M3 11V9a4 4 0 0 1 4-4h14" />
			<polyline points="7 23 3 19 7 15" />
			<path d="M21 13v2a4 4 0 0 1-4 4H3" />
		</Icon>
	);
}

export function HeartIcon({
	filled = false,
	...props
}: IconProps & { filled?: boolean }) {
	return (
		<Icon {...props} filled={filled}>
			<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
		</Icon>
	);
}

export function ChartIcon(props: IconProps) {
	return (
		<Icon {...props}>
			<line x1="18" y1="20" x2="18" y2="10" />
			<line x1="12" y1="20" x2="12" y2="4" />
			<line x1="6" y1="20" x2="6" y2="14" />
		</Icon>
	);
}

export function ShareIcon(props: IconProps) {
	return (
		<Icon {...props}>
			<path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7" />
			<polyline points="16 6 12 2 8 6" />
			<line x1="12" y1="2" x2="12" y2="15" />
		</Icon>
	);
}

export function VerifiedBadge({ size = 18, className }: IconProps) {
	return (
		<svg
			viewBox="0 0 24 24"
			width={size}
			height={size}
			className={className}
			role="img"
			aria-label="Verified account"
		>
			<circle cx="12" cy="12" r="10" fill="#1d9bf0" />
			<path
				d="m7.5 12.2 3 3 6-6.4"
				fill="none"
				stroke="#fff"
				strokeWidth="2.2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

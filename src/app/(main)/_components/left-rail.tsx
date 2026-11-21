"use client";

import Link from "next/link";
import type { ComponentType } from "react";
import { currentUser } from "../_data/feed";
import styles from "../_styles/home.module.css";
import {
	BellIcon,
	BirdIcon,
	BookmarkIcon,
	HomeIcon,
	MailIcon,
	MoreIcon,
	SearchIcon,
	UserIcon,
	UsersIcon,
} from "./icons";

type LeftRailProps = {
	onPostClick: () => void;
	onNotice: (message: string) => void;
};

type NavItem = {
	label: string;
	icon: ComponentType<{ size?: number }>;
	badge?: number;
	active?: boolean;
};

const navItems: NavItem[] = [
	{ label: "Home", icon: HomeIcon, active: true },
	{ label: "Explore", icon: SearchIcon },
	{ label: "Notifications", icon: BellIcon, badge: 3 },
	{ label: "Messages", icon: MailIcon, badge: 2 },
	{ label: "Bookmarks", icon: BookmarkIcon },
	{ label: "Communities", icon: UsersIcon },
	{ label: "Profile", icon: UserIcon },
	{ label: "More", icon: MoreIcon },
];

export default function LeftRail({ onPostClick, onNotice }: LeftRailProps) {
	return (
		<aside className={styles.leftRail}>
			<Link href="/feed" className={styles.logo} aria-label="Murmur home">
				<BirdIcon size={30} />
				<span className={styles.logoName}>Murmur</span>
			</Link>

			<nav className={styles.nav} aria-label="Primary">
				{navItems.map(({ label, icon: NavIcon, badge, active }) => (
					<button
						key={label}
						type="button"
						className={`${styles.navItem} ${
							active ? styles.navItemActive : ""
						}`}
						aria-current={active ? "page" : undefined}
						onClick={() => {
							if (active) {
								window.scrollTo({ top: 0, behavior: "smooth" });
								return;
							}

							onNotice(`${label} is coming soon`);
						}}
					>
						<span className={styles.navIcon}>
							<NavIcon size={26} />
							{badge ? (
								<span className={styles.badge}>{badge}</span>
							) : null}
						</span>
						<span className={styles.navLabel}>{label}</span>
					</button>
				))}
			</nav>

			<button
				type="button"
				className={styles.postButton}
				onClick={onPostClick}
			>
				Post
			</button>

			<button
				type="button"
				className={styles.profileChip}
				onClick={() => onNotice("Profile menu is coming soon")}
			>
				<span
					className={`${styles.avatar} ${styles.avatarSmall}`}
					style={{ background: currentUser.avatar.background }}
					aria-hidden="true"
				>
					{currentUser.avatar.initials}
				</span>
				<span className={styles.profileMeta}>
					<span className={styles.profileName}>
						{currentUser.name}
					</span>
					<span className={styles.profileHandle}>
						{currentUser.handle}
					</span>
				</span>
				<MoreIcon size={18} className={styles.moreIcon} />
			</button>
		</aside>
	);
}

import type { Metadata } from "next";
import HomePage from "../_components/feed-page";

export const metadata: Metadata = {
	title: "Murmur — Feed",
	description: "A calmer place to share what's happening.",
};

export default function HomeRoute() {
	return <HomePage />;
}

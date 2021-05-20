import { InfoSection } from '../app.component';

export const infoSections: readonly InfoSection[] = [
	{
		module: 'decktracker',
		title: 'Decktracker',
		thumbnailPath: 'assets/images/screenshots/decktracker/thumbnail.png',
		videoPath: undefined,
		features: [
			{
				text: `See your full decklist and the opponent's known cards`,
			},
			{
				text: `Show information about the opponent's hand`,
			},
			{
				text: `See replays and your full deck stats in-app`,
			},
		],
	},
	{
		module: 'battlegrounds',
		title: 'Battlegrounds',
		thumbnailPath: 'assets/images/screenshots/battlegrounds/thumbnail.png',
		videoPath: undefined,
		features: [
			{
				text: `See your opponents' last known state and current battle chances`,
			},
			{
				text: `Track personal stats for free`,
			},
			{
				text: `Live stats while in a match`,
			},
			{
				text: `Highlight specific minions or tribes in the tavern`,
			},
		],
	},
	{
		module: 'duels',
		title: 'Duels',
		thumbnailPath: 'assets/images/screenshots/duels/thumbnail.png',
		videoPath: undefined,
		features: [
			{
				text: `See your personal and meta stats`,
			},
			{
				text: `See everything for decks that got to 10+ wins`,
			},
			{
				text: `Recap all of your runs and build stats for each of your decks`,
			},
		],
	},
	{
		module: 'replays',
		title: 'Replays',
		thumbnailPath: 'assets/images/screenshots/replays/thumbnail.png',
		videoPath: undefined,
		features: [
			{
				text: `See an overview of all your past matches`,
			},
			{
				text: `Replay a game in a UI that mimicks the game itself`,
			},
			{
				text: `Rewatch replays of your BG matches`,
			},
		],
	},
	{
		module: 'achievements',
		title: 'Achievements',
		thumbnailPath: 'assets/images/screenshots/achievements/thumbnail.png',
		videoPath: undefined,
		features: [
			{
				text: `Track the in-game achievements directly from the app`,
			},
			{
				text: `Complete hundreds of unique achievements`,
			},
			{
				text: `Shows the missing achievements in Battlegrounds`,
			},
		],
	},
	{
		module: 'collection',
		title: 'Collection',
		thumbnailPath: 'assets/images/screenshots/collection/thumbnail.png',
		videoPath: undefined,
		features: [
			{
				text: `Comprehensive stats for your collection`,
			},
			{
				text: `View your lifetime packs received`,
			},
			{
				text: `Explore each card's unique sounds and voice lines`,
			},
		],
	},
];

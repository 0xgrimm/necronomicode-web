import type { CollectionEntry } from "astro:content";

export type EntryCollection = "journal" | "notebook";
export type Entry = CollectionEntry<EntryCollection>;

export const collectionLabels: Record<EntryCollection, string> = {
	journal: "Diario",
	notebook: "Cuaderno",
};

export const entryCollections = Object.keys(
	collectionLabels,
) as EntryCollection[];

export const entryUrl = ({ collection, id }: Entry) => `/${collection}/${id}`;

export const byNewestFirst = (a: Entry, b: Entry) =>
	b.data.date.valueOf() - a.data.date.valueOf();

// Frontmatter dates have no time and parse as UTC midnight, so read the UTC date
export const formatDate = (date: Date) =>
	date.toISOString().slice(0, 10).split("-").reverse().join("-");


// Tag identity: tags that only differ in case or accents are the same tag
export const tagKey = (tag: string) =>
	tag.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().trim();

// Slugs that can't be derived from the tag itself, keyed by the tag as written
const tagSlugOverrides: Record<string, string> = {
	"C++": "cpp",
};

const overridesByKey = new Map(
	Object.entries(tagSlugOverrides).map(([tag, slug]) => {
		if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
			throw new Error(`Invalid slug override for tag "${tag}": "${slug}"`);
		}
		return [tagKey(tag), slug];
	}),
);

// URL-safe form of a tag: "Clean Code" → "clean-code", "diseño" → "diseno"
export const tagSlug = (tag: string) =>
	overridesByKey.get(tagKey(tag)) ??
	tagKey(tag)
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");

export const tagUrl = (tag: string) => `/tags/${tagSlug(tag)}`;

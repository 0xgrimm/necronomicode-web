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


import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Journal and notebook entries share the same fields
const entrySchema = z.object({
	title: z.string(),
	date: z.coerce.date(),
	tags: z.array(z.string()).nonempty(),
});

const journal = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/journal" }),
	schema: entrySchema,
});

const notebook = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/notebook" }),
	schema: entrySchema,
});

export const collections = { journal, notebook };

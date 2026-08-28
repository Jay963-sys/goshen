import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const url = process.env.DATABASE_URL;

/**
 * `db` is null when DATABASE_URL is not configured, so the app runs and the
 * forms still email leads even before Neon is wired up. Guard usage with `if (db)`.
 */
export const db = url ? drizzle(neon(url), { schema }) : null;
export { schema };

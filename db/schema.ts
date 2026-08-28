import {
  pgTable,
  serial,
  text,
  varchar,
  timestamp,
} from "drizzle-orm/pg-core";

/** Free-assessment / general enquiries from the contact form. */
export const enquiries = pgTable("enquiries", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 160 }).notNull(),
  email: varchar("email", { length: 200 }).notNull(),
  phone: varchar("phone", { length: 40 }),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

/** Job applications from the careers form. */
export const applications = pgTable("applications", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 160 }).notNull(),
  email: varchar("email", { length: 200 }).notNull(),
  phone: varchar("phone", { length: 40 }).notNull(),
  position: varchar("position", { length: 80 }).notNull(),
  employmentType: varchar("employment_type", { length: 40 }),
  experience: text("experience"),
  credentials: varchar("credentials", { length: 200 }),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

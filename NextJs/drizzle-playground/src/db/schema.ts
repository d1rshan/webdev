import {
  integer,
  pgTable,
  varchar,
  uuid,
  pgEnum,
  uniqueIndex,
  unique,
  boolean,
  real,
  timestamp,
} from "drizzle-orm/pg-core";

export const userRole = pgEnum("user_role", ["ADMIN", "USER"]);

export const userTable = pgTable(
  "user",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 255 }).notNull(),
    age: integer("age").notNull(),
    email: varchar("email", { length: 255 }).notNull(),
    role: userRole().default("USER"),
  },
  (t) => [
    uniqueIndex("email_index").on(t.email),
    unique("unique_name_and_age").on(t.name, t.age), // just for demonstration (this will add a constraint)
  ]
);

// also naming these constraints and indexes -> helps in debugging

// one to one relation: userTable & userPreferencesTable
export const userPreferencesTable = pgTable("user_preferences", {
  id: uuid("id").primaryKey().defaultRandom(),
  emailUpdates: boolean("email_updates").default(true),
  userId: uuid("user_id")
    .references(() => userTable.id, { onDelete: "cascade" })
    .notNull()
    .unique(), // sets up a foreign key to userTable.id - ie only if userId exists then we can make the entry in this table
});

// one to many relation: userTable & postTable
export const postTable = pgTable("post_table", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title", { length: 255 }).notNull(),
  averageRating: real("average_rating").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  authorId: uuid("author_id")
    .references(() => userTable.id, { onDelete: "cascade" })
    .notNull(),
});

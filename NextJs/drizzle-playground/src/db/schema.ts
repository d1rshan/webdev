import {
  integer,
  pgTable,
  varchar,
  uuid,
  uniqueIndex,
  unique,
  boolean,
  timestamp,
  primaryKey,
} from "drizzle-orm/pg-core";

export const usersTable = pgTable(
  "users",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 255 }).notNull(),
    age: integer("age").notNull(),
    email: varchar("email", { length: 255 }).notNull(),
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
    .references(() => usersTable.id, { onDelete: "cascade" })
    .notNull()
    .unique(), // sets up a foreign key to userTable.id - ie only if userId exists then we can make the entry in this table
});

// one to many relation: userTable & postTable
export const postsTable = pgTable("posts", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  authorId: uuid("author_id")
    .references(() => usersTable.id, { onDelete: "cascade" })
    .notNull(),
});

export const likesTable = pgTable(
  "likes",
  {
    userId: uuid("user_id").references(() => usersTable.id, {
      onDelete: "cascade",
    }),
    postId: uuid("post_id").references(() => postsTable.id, {
      onDelete: "cascade",
    }),
  },
  (t) => [primaryKey({ columns: [t.userId, t.postId] })] // composite primary key
);

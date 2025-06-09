import {
  pgTable,
  text,
  uuid,
  integer,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// schema for a table that stores information about each folder or each file (yes common schema for folder and file here)
// thats why we have self relation here

export const files = pgTable("files", {
  id: uuid("id").defaultRandom().primaryKey(),

  // basic file/folder information
  name: text("name").notNull(),
  path: text("path").notNull(), // /document/project/resume
  size: integer("size").notNull(),
  type: text("type").notNull(), // "for file or folder ig"

  // storage information
  fileUrl: text("file_url").notNull(), // url to access file ie image kit url
  thumbnailUrl: text("thumbnail_url"),

  // Ownership
  userId: text("user_id").notNull(), // from clerk
  parentId: uuid("parent_id"), // Parent folder id (null for root items)

  // file/folder flags
  isFolder: boolean("is_folder").default(false).notNull(),
  isStarred: boolean("is_starred").default(false).notNull(),
  isTrash: boolean("is_trash").default(false).notNull(),

  // Timestamps
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

/*
parent: each file/folder can have one parent folder
children: each folder can have many child files/folders
*/

export const filesRelations = relations(files, ({ one, many }) => ({
  parent: one(files, {
    fields: [files.parentId],
    references: [files.id],
  }),
  // there could me many folders or files for a folder
  children: many(files),
}));

// writes type
export const File = typeof files.$inferInsert;
export const NewFile = typeof files.$inferInsert;

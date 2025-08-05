import { eq } from "drizzle-orm";
import { db } from "./db";
import {
  usersTable,
  postsTable,
  likesTable,
  userPreferencesTable,
} from "./db/schema";

async function main() {
  try {
    console.log("Success");
  } catch (error) {
    console.log("Failed!", error);
  }
}

main();

// const user = await db
//   .insert(usersTable)
//   .values({
//     name: "Bunny",
//     age: 20,
//     email: "bund@example.com",
//   })
//   .returning({
//     userIdxo: usersTable.id, // select which values to return
//   });

// ---------------------------------

// these are joins (depends on usecase for when to use them) now it queries user
// and includes userPreferences also to be returned, but this is slower for large rows
// like getting all users posts like this is slower just query the postsTable directly instead

// await db.query.usersTable.findMany({
//   with: {
//     preferences: true,
//   },
// });

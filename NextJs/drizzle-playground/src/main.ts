import { db } from "./db";
import { usersTable } from "./db/schema";

async function main() {
  const user = await db
    .insert(usersTable)
    .values({
      name: "Darshan Pacchass",
    })
    .returning();

  console.log("User inserted!", user);
}

main();

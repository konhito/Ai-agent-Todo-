import { timeStamp } from "console";
import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const todosTable = pgTable("todos", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  todo: text().notNull(),
  createdAt: timeStamp("createdAt").defaultNow(),
  updatedAt: timeStamp("createdAt").$onUpdate(() => new Data()),
});

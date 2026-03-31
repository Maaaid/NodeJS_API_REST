/*
  Warnings:

  - You are about to drop the column `eventManagerId` on the `Event` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "dateAndHour" DATETIME NOT NULL,
    "place" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "billPrice" INTEGER NOT NULL,
    "nbPlace" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "coverImage" INTEGER NOT NULL
);
INSERT INTO "new_Event" ("billPrice", "category", "city", "coverImage", "createdAt", "dateAndHour", "description", "id", "nbPlace", "place", "title") SELECT "billPrice", "category", "city", "coverImage", "createdAt", "dateAndHour", "description", "id", "nbPlace", "place", "title" FROM "Event";
DROP TABLE "Event";
ALTER TABLE "new_Event" RENAME TO "Event";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

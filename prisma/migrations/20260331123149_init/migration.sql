-- CreateTable
CREATE TABLE "Event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "eventManagerId" INTEGER NOT NULL,
    "dateAndHour" DATETIME NOT NULL,
    "place" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "billPrice" INTEGER NOT NULL,
    "nbPlace" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "coverImage" INTEGER NOT NULL,
    CONSTRAINT "Event_eventManagerId_fkey" FOREIGN KEY ("eventManagerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'USER'
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

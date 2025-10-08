-- CreateEnum
CREATE TYPE "DamageLevel" AS ENUM ('SMALL', 'LARGE', 'NONE');

-- CreateTable
CREATE TABLE "Borrowing" (
    "id" TEXT NOT NULL,
    "bookId" TEXT NOT NULL,
    "userId" TEXT,
    "groupId" TEXT,
    "borrowDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "returnDate" TIMESTAMP(3),
    "isReturned" BOOLEAN NOT NULL DEFAULT false,
    "damageLevel" "DamageLevel",

    CONSTRAINT "Borrowing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fine" (
    "id" TEXT NOT NULL,
    "borrowingId" TEXT NOT NULL,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "missingBook" BOOLEAN NOT NULL DEFAULT false,
    "lateDays" INTEGER NOT NULL DEFAULT 0,
    "damageLevel" "DamageLevel",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Fine_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Fine_borrowingId_key" ON "Fine"("borrowingId");

-- AddForeignKey
ALTER TABLE "Borrowing" ADD CONSTRAINT "Borrowing_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Borrowing" ADD CONSTRAINT "Borrowing_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Borrowing" ADD CONSTRAINT "Borrowing_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fine" ADD CONSTRAINT "Fine_borrowingId_fkey" FOREIGN KEY ("borrowingId") REFERENCES "Borrowing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

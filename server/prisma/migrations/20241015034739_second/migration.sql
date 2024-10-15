/*
  Warnings:

  - You are about to drop the column `emailAdress` on the `Employee` table. All the data in the column will be lost.
  - Added the required column `emailAddress` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "emailAdress",
ADD COLUMN     "emailAddress" TEXT NOT NULL,
ALTER COLUMN "contactNumber" SET DATA TYPE TEXT;

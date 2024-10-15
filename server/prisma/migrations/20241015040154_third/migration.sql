/*
  Warnings:

  - Changed the type of `openingTime` on the `Branch` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `closingTime` on the `Branch` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Branch" DROP COLUMN "openingTime",
ADD COLUMN     "openingTime" TIMESTAMP(3) NOT NULL,
DROP COLUMN "closingTime",
ADD COLUMN     "closingTime" TIMESTAMP(3) NOT NULL;

/*
  Warnings:

  - You are about to drop the column `transactionPkgId` on the `Service` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_transactionPkgId_fkey";

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "transactionPkgId",
ADD COLUMN     "transactionId" INTEGER;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE SET NULL ON UPDATE CASCADE;

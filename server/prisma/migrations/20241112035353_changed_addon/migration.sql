/*
  Warnings:

  - You are about to drop the column `addonPkgId` on the `Addon` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Addon" DROP CONSTRAINT "Addon_addonPkgId_fkey";

-- AlterTable
ALTER TABLE "Addon" DROP COLUMN "addonPkgId",
ADD COLUMN     "transactionId" INTEGER;

-- AddForeignKey
ALTER TABLE "Addon" ADD CONSTRAINT "Addon_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE SET NULL ON UPDATE CASCADE;

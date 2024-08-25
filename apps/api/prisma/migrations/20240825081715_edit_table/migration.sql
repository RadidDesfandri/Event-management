/*
  Warnings:

  - Added the required column `paymentLink` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `transaction` ADD COLUMN `paymentLink` VARCHAR(191) NOT NULL;

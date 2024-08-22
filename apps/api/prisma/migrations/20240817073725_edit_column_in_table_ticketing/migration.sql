/*
  Warnings:

  - You are about to drop the column `ticketId` on the `ticketing` table. All the data in the column will be lost.
  - Added the required column `eventsId` to the `Ticketing` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `ticketing` DROP FOREIGN KEY `Ticketing_ticketId_fkey`;

-- AlterTable
ALTER TABLE `ticketing` DROP COLUMN `ticketId`,
    ADD COLUMN `eventsId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Ticketing` ADD CONSTRAINT `Ticketing_eventsId_fkey` FOREIGN KEY (`eventsId`) REFERENCES `Events`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

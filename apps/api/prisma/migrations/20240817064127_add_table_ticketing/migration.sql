/*
  Warnings:

  - You are about to drop the column `price` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `quota` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `ticketType` on the `events` table. All the data in the column will be lost.
  - The values [konser,pertandingan,cosplay,pameran] on the enum `Events_category` will be removed. If these variants are still used in the database, this will fail.
  - The values [pending,waiting,paid,declined] on the enum `Transaction_status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `events` DROP COLUMN `price`,
    DROP COLUMN `quota`,
    DROP COLUMN `ticketType`,
    MODIFY `category` ENUM('Konser', 'Pertandingan', 'Cosplay', 'Pameran') NOT NULL;

-- AlterTable
ALTER TABLE `transaction` MODIFY `status` ENUM('Pending', 'Waiting', 'Paid', 'Declined') NOT NULL;

-- CreateTable
CREATE TABLE `Ticketing` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nameTicket` VARCHAR(191) NOT NULL,
    `quota` INTEGER NOT NULL,
    `price` DOUBLE NULL DEFAULT 0,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `ticketId` INTEGER NOT NULL,

    UNIQUE INDEX `Ticketing_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Ticketing` ADD CONSTRAINT `Ticketing_ticketId_fkey` FOREIGN KEY (`ticketId`) REFERENCES `Events`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to alter the column `date` on the `events` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - Made the column `price` on table `ticketing` required. This step will fail if there are existing NULL values in that column.
  - Made the column `startDate` on table `ticketing` required. This step will fail if there are existing NULL values in that column.
  - Made the column `endDate` on table `ticketing` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `Events_eventName_key` ON `events`;

-- AlterTable
ALTER TABLE `events` MODIFY `date` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `ticketing` MODIFY `price` DOUBLE NOT NULL DEFAULT 0,
    MODIFY `startDate` DATETIME(3) NOT NULL,
    MODIFY `endDate` DATETIME(3) NOT NULL;

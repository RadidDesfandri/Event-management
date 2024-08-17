/*
  Warnings:

  - You are about to drop the column `eo_Id` on the `events` table. All the data in the column will be lost.
  - Added the required column `eOId` to the `Events` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `events` DROP FOREIGN KEY `Events_eo_Id_fkey`;

-- AlterTable
ALTER TABLE `events` DROP COLUMN `eo_Id`,
    ADD COLUMN `eOId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Events` ADD CONSTRAINT `Events_eOId_fkey` FOREIGN KEY (`eOId`) REFERENCES `EO`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

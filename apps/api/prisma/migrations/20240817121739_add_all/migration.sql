/*
  Warnings:

  - You are about to alter the column `startDate` on the `Ticketing` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - You are about to alter the column `endDate` on the `Ticketing` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - You are about to drop the `transaction` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `transaction` DROP FOREIGN KEY `Transaction_event_Id_fkey`;

-- DropForeignKey
ALTER TABLE `transaction` DROP FOREIGN KEY `Transaction_user_Id_fkey`;

-- AlterTable
ALTER TABLE `Ticketing` MODIFY `startDate` DATETIME(3) NULL,
    MODIFY `endDate` DATETIME(3) NULL;

-- DropTable
DROP TABLE `transaction`;

-- CreateTable
CREATE TABLE `Transaction` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `event_Id` INTEGER NOT NULL,
    `user_Id` INTEGER NOT NULL,
    `qty` INTEGER NOT NULL DEFAULT 1,
    `totalPrice` DOUBLE NOT NULL,
    `totalDiscount` INTEGER NOT NULL,
    `finalPrice` DOUBLE NOT NULL,
    `status` ENUM('Pending', 'Waiting', 'Paid', 'Declined') NOT NULL,
    `proof` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Transaction_id_key`(`id`),
    UNIQUE INDEX `Transaction_event_Id_key`(`event_Id`),
    UNIQUE INDEX `Transaction_user_Id_key`(`user_Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_user_Id_fkey` FOREIGN KEY (`user_Id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_event_Id_fkey` FOREIGN KEY (`event_Id`) REFERENCES `Events`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

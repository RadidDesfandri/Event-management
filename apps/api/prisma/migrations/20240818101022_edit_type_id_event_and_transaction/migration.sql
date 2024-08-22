-- DropForeignKey
ALTER TABLE `promotion` DROP FOREIGN KEY `Promotion_event_Id_fkey`;

-- DropForeignKey
ALTER TABLE `review` DROP FOREIGN KEY `Review_event_Id_fkey`;

-- DropForeignKey
ALTER TABLE `ticketing` DROP FOREIGN KEY `Ticketing_eventsId_fkey`;

-- DropForeignKey
ALTER TABLE `transaction` DROP FOREIGN KEY `Transaction_event_Id_fkey`;

-- AlterTable
ALTER TABLE `events` MODIFY `id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `promotion` MODIFY `event_Id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `review` MODIFY `event_Id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `ticketing` MODIFY `eventsId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `transaction` MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `event_Id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_event_Id_fkey` FOREIGN KEY (`event_Id`) REFERENCES `Events`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ticketing` ADD CONSTRAINT `Ticketing_eventsId_fkey` FOREIGN KEY (`eventsId`) REFERENCES `Events`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_event_Id_fkey` FOREIGN KEY (`event_Id`) REFERENCES `Events`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Promotion` ADD CONSTRAINT `Promotion_event_Id_fkey` FOREIGN KEY (`event_Id`) REFERENCES `Events`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

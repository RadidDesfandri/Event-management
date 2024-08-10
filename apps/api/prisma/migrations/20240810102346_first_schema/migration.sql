/*
  Warnings:

  - You are about to drop the `samples` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `samples`;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `referal` VARCHAR(191) NOT NULL,
    `point` INTEGER NOT NULL,
    `avatar` VARCHAR(191) NULL,
    `isVerified` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `User_id_key`(`id`),
    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_phone_key`(`phone`),
    UNIQUE INDEX `User_referal_key`(`referal`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EO` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NULL,
    `isVerified` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `EO_id_key`(`id`),
    UNIQUE INDEX `EO_username_key`(`username`),
    UNIQUE INDEX `EO_email_key`(`email`),
    UNIQUE INDEX `EO_phone_key`(`phone`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Review` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `review` TEXT NOT NULL,
    `ratings` INTEGER NOT NULL,
    `user_Id` INTEGER NOT NULL,
    `event_Id` INTEGER NOT NULL,

    UNIQUE INDEX `Review_id_key`(`id`),
    UNIQUE INDEX `Review_user_Id_key`(`user_Id`),
    UNIQUE INDEX `Review_event_Id_key`(`event_Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Events` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `eventName` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `quota` INTEGER NOT NULL,
    `ticketType` ENUM('free', 'paid') NOT NULL,
    `eo_Id` INTEGER NOT NULL,
    `image` VARCHAR(191) NULL,
    `category` ENUM('konser', 'pertandingan', 'cosplay', 'pameran') NOT NULL,

    UNIQUE INDEX `Events_id_key`(`id`),
    UNIQUE INDEX `Events_eventName_key`(`eventName`),
    UNIQUE INDEX `Events_eo_Id_key`(`eo_Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transaction` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `event_Id` INTEGER NOT NULL,
    `user_Id` INTEGER NOT NULL,
    `qty` INTEGER NOT NULL DEFAULT 1,
    `totalPrice` DOUBLE NOT NULL,
    `totalDiscount` INTEGER NOT NULL,
    `finalPrice` DOUBLE NOT NULL,
    `status` ENUM('pending', 'waiting', 'paid', 'declined') NOT NULL,
    `proof` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Transaction_id_key`(`id`),
    UNIQUE INDEX `Transaction_event_Id_key`(`event_Id`),
    UNIQUE INDEX `Transaction_user_Id_key`(`user_Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Promotion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `voucherCode` VARCHAR(191) NOT NULL,
    `quota` INTEGER NULL,
    `percentage` INTEGER NULL,
    `event_Id` INTEGER NOT NULL,

    UNIQUE INDEX `Promotion_id_key`(`id`),
    UNIQUE INDEX `Promotion_event_Id_key`(`event_Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_user_Id_fkey` FOREIGN KEY (`user_Id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_event_Id_fkey` FOREIGN KEY (`event_Id`) REFERENCES `Events`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Events` ADD CONSTRAINT `Events_eo_Id_fkey` FOREIGN KEY (`eo_Id`) REFERENCES `EO`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_user_Id_fkey` FOREIGN KEY (`user_Id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_event_Id_fkey` FOREIGN KEY (`event_Id`) REFERENCES `Events`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Promotion` ADD CONSTRAINT `Promotion_event_Id_fkey` FOREIGN KEY (`event_Id`) REFERENCES `Events`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

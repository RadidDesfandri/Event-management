-- DropIndex
DROP INDEX `EO_id_key` ON `eo`;

-- DropIndex
DROP INDEX `Events_id_key` ON `events`;

-- DropIndex
DROP INDEX `Promotion_id_key` ON `promotion`;

-- DropIndex
DROP INDEX `Review_id_key` ON `review`;

-- DropIndex
DROP INDEX `Ticketing_id_key` ON `ticketing`;

-- DropIndex
DROP INDEX `Transaction_id_key` ON `transaction`;

-- DropIndex
DROP INDEX `User_id_key` ON `user`;

-- AlterTable
ALTER TABLE `eo` ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `events` ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `promotion` ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `review` ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `ticketing` ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `transaction` ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `user` ADD PRIMARY KEY (`id`);

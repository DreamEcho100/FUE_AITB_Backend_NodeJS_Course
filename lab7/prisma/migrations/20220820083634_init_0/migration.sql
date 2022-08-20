-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(64) NULL,
    `email` VARCHAR(64) NOT NULL,
    `password` VARCHAR(150) NOT NULL,
    `city` VARCHAR(45) NOT NULL,
    `phone` VARCHAR(45) NOT NULL,

    UNIQUE INDEX `email_UNIQUE`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

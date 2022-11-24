-- CreateTable
CREATE TABLE `filmes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `horario` VARCHAR(191) NOT NULL,
    `genero` VARCHAR(191) NOT NULL,
    `classificacao` VARCHAR(191) NOT NULL,
    `duracao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `funcionarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `local` VARCHAR(191) NOT NULL,
    `salario` VARCHAR(191) NOT NULL,
    `jornada` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lanchonete` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `combo` VARCHAR(191) NOT NULL,
    `valor` VARCHAR(191) NOT NULL,
    `pipoca` VARCHAR(191) NOT NULL,
    `refrigerante` VARCHAR(191) NOT NULL,
    `doce` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

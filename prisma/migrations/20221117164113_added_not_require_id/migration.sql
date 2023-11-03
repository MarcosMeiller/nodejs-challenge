-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_categorie_Id_fkey`;

-- AlterTable
ALTER TABLE `product` MODIFY `categorie_Id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_categorie_Id_fkey` FOREIGN KEY (`categorie_Id`) REFERENCES `Categorie`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

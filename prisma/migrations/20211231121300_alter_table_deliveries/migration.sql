/*
  Warnings:

  - Made the column `item_name` on table `deliveries` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "deliveries" ALTER COLUMN "item_name" SET NOT NULL;

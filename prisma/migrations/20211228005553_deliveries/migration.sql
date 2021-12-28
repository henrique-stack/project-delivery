/*
  Warnings:

  - You are about to drop the column `id_delivery` on the `deliveries` table. All the data in the column will be lost.
  - Added the required column `id_deliveryman` to the `deliveries` table without a default value. This is not possible if the table is not empty.
  - Made the column `item_name` on table `deliveries` required. This step will fail if there are existing NULL values in that column.
  - Made the column `end_at` on table `deliveries` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "deliveries" DROP CONSTRAINT "deliveries_id_delivery_fkey";

-- AlterTable
ALTER TABLE "deliveries" DROP COLUMN "id_delivery",
ADD COLUMN     "id_deliveryman" TEXT NOT NULL,
ALTER COLUMN "item_name" SET NOT NULL,
ALTER COLUMN "end_at" SET NOT NULL,
ALTER COLUMN "end_at" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_id_deliveryman_fkey" FOREIGN KEY ("id_deliveryman") REFERENCES "deliveryman"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

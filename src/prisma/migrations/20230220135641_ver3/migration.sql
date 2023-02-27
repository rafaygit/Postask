/*
  Warnings:

  - You are about to drop the column `project_id` on the `Requests` table. All the data in the column will be lost.
  - Added the required column `folder_id` to the `Requests` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Requests" DROP CONSTRAINT "Requests_project_id_fkey";

-- AlterTable
ALTER TABLE "Requests" DROP COLUMN "project_id",
ADD COLUMN     "folder_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Folders" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "project_id" INTEGER NOT NULL,

    CONSTRAINT "Folders_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Folders" ADD CONSTRAINT "Folders_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Requests" ADD CONSTRAINT "Requests_folder_id_fkey" FOREIGN KEY ("folder_id") REFERENCES "Folders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

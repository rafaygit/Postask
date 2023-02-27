/*
  Warnings:

  - You are about to drop the `APIrequests` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Collections` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "APIrequests" DROP CONSTRAINT "APIrequests_collection_id_fkey";

-- DropForeignKey
ALTER TABLE "Collections" DROP CONSTRAINT "Collections_user_id_fkey";

-- DropTable
DROP TABLE "APIrequests";

-- DropTable
DROP TABLE "Collections";

-- CreateTable
CREATE TABLE "Projects" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Requests" (
    "id" SERIAL NOT NULL,
    "project_id" INTEGER NOT NULL,
    "method" TEXT,
    "url" TEXT,
    "query_params" TEXT,
    "body" TEXT,
    "request" TEXT,
    "response" TEXT,

    CONSTRAINT "Requests_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Requests" ADD CONSTRAINT "Requests_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

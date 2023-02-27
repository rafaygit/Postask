-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Collections" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Collections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "APIrequests" (
    "id" SERIAL NOT NULL,
    "collection_id" INTEGER NOT NULL,
    "method" TEXT,
    "url" TEXT,
    "query_params" TEXT,
    "body" TEXT,
    "request" TEXT,
    "response" TEXT,

    CONSTRAINT "APIrequests_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- AddForeignKey
ALTER TABLE "Collections" ADD CONSTRAINT "Collections_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "APIrequests" ADD CONSTRAINT "APIrequests_collection_id_fkey" FOREIGN KEY ("collection_id") REFERENCES "Collections"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'DEVELOPER');

-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "content" VARCHAR(250) NOT NULL,
    "email" TEXT NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 5,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

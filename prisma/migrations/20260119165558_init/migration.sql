-- CreateTable
CREATE TABLE "Request" (
    "id" SERIAL NOT NULL,
    "phoneNumber" VARCHAR(24) NOT NULL,
    "email" VARCHAR(128) NOT NULL,
    "name" VARCHAR(128) NOT NULL,
    "theme" VARCHAR(256) NOT NULL,
    "message" VARCHAR(1024) NOT NULL,
    "isSent" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Request_pkey" PRIMARY KEY ("id")
);

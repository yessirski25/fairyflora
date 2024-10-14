-- CreateTable
CREATE TABLE "Employee" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "branchId" TEXT NOT NULL,
    "salary" INTEGER NOT NULL,
    "contactNumber" INTEGER NOT NULL,
    "dateHired" TIMESTAMP(3) NOT NULL,
    "role" TEXT NOT NULL,
    "emailAdress" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "assignedBranchId" INTEGER NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Branch" (
    "id" SERIAL NOT NULL,
    "barangay" TEXT NOT NULL,
    "municipality" TEXT NOT NULL,
    "province" TEXT NOT NULL,
    "openingTime" TEXT NOT NULL,
    "closingTime" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "dateEstablish" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Branch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "customerName" TEXT NOT NULL,
    "customerContact" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Service" (
    "id" SERIAL NOT NULL,
    "serviceName" TEXT NOT NULL,
    "service" TEXT[],
    "serviceCode" TEXT NOT NULL,
    "totalPrice" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "transactionPkgId" INTEGER NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Addon" (
    "id" SERIAL NOT NULL,
    "addonName" TEXT NOT NULL,
    "addonPrice" INTEGER NOT NULL,
    "addonPkgId" INTEGER NOT NULL,

    CONSTRAINT "Addon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "customerId" INTEGER NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inventory" (
    "id" SERIAL NOT NULL,
    "branchInventoryId" INTEGER NOT NULL,
    "arielPoweder" INTEGER NOT NULL,
    "downyFabcon" INTEGER NOT NULL,
    "zonrox" INTEGER NOT NULL,

    CONSTRAINT "Inventory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_id_key" ON "Employee"("id");

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_assignedBranchId_fkey" FOREIGN KEY ("assignedBranchId") REFERENCES "Branch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_transactionPkgId_fkey" FOREIGN KEY ("transactionPkgId") REFERENCES "Transaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Addon" ADD CONSTRAINT "Addon_addonPkgId_fkey" FOREIGN KEY ("addonPkgId") REFERENCES "Transaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_branchInventoryId_fkey" FOREIGN KEY ("branchInventoryId") REFERENCES "Branch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
//create product read many
const run = async()=> {
    const productSaved = await prisma.product.findMany()
    console.log(productSaved)
};
run();
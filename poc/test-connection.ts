import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
//read many categories
const run = async()=> {
    const categories = await prisma.category.findMany()
    console.log(categories)
};
run();
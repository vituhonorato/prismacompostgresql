import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const run = async()=> {
    const savedCategories = await prisma.category.create({
        data: {
            category: "Devices"
        }
    })
    console.log(savedCategories)
};
run();
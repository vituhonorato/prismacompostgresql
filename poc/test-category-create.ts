import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const run = async()=> {
    const savedCategories = await prisma.category.create({
        data: {
            category: "Softwares"
        }
    })
    console.log(savedCategories)
};
run();
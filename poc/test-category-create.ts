import { PrismaClient } from "@prisma/client";
//create category
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
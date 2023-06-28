import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
//update category
const run = async()=> {
    const updatedCategories = await prisma.category.update({
        where:{
            id:'104ddeca-d7a2-4f59-be1d-5fb2da0d7c17'
        },
        data:{
            category:'Hardware',
        }
    });
    console.log(updatedCategories)
    
};
run();
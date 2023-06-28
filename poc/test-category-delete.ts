import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
//delete category
const run = async()=> {
    const deletedCategories = await prisma.category.delete({
        where:{
            id:'104ddeca-d7a2-4f59-be1d-5fb2da0d7c17'
        }
       
    });
    console.log(deletedCategories)
    
};
run();
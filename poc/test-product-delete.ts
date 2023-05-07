import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const run = async()=> {
    const deletedProduct = await prisma.product.delete({
        where:{
            id:'104ddeca-d7a2-4f59-be1d-5fb2da0d7c17'
        }
       
    });
    console.log(deletedProduct)
    
};
run();
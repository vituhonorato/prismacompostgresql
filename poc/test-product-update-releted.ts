import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
//create product update
const run = async()=> {
    const updatedProduct = await prisma.product.update({
        where:{
            id:'23e254e0-eeba-4f96-869d-dba7f3c6a6ef'
        },
        data:{
           
            categories:{
                connect:[{id:''}]
            }
        }
    });
    console.log(updatedProduct)
    
};
run();
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
//create product
const run = async()=> {
    const categoryId = '6d3f2b29-baf2-40f8-9023-b9d4c88f9ae2'
    const savedProtdAutoTrim = await prisma.product.create({
        data: {
            name: "Linux",
            price: 100,
            categories:{
                connect:[
                    {id:categoryId}
                ]
            }
        }
    })
    console.log(savedProtdAutoTrim)
};
run();
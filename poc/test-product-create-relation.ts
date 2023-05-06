import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const run = async()=> {
    const categoryId = 'b075dfa1-515e-4f86-a5ec-bc6357115d21'
    const savedProtdAutoTrim = await prisma.product.create({
        data: {
            name: "Mouse with category",
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
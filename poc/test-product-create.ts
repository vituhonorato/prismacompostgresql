import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
// create product poc
const run = async()=> {
    const savedProtdAutoTrim = await prisma.product.create({
        data: {
            name: "Mouse",
            price: 100,
        }
    })
    console.log(savedProtdAutoTrim)
};
run();
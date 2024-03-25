const {PrismaClient} =require('@prisma/client')
const prisma = new PrismaClient()

async function run() {
  await prisma.$executeRawUnsafe('DROP Database shoestore')
  await prisma.$executeRawUnsafe('CREATE Database shoestore')
}
console.log('Reset DB')
run()
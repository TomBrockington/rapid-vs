const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function seed() {
  const password = await bcrypt.hash("123", 8);

  const createdDev = await prisma.user.create({
    data: {
      email: "maxpower@email.com",
      password,
      role: 'DEVELOPER'

    },
  });
console.log(createdDev)
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});

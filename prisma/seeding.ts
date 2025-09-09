import { PrismaClient, Prisma } from "../app/generated/prisma";
const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Jessie",
    email: "jessx0x0@rocket.io",
    tasks: {
      create: [
        {
          title: "get bombs",
        },
        {
          title: "capture the twerp",
        },
      ],
    },
  },
  {
    name: "James",
    email: "bigJ@rocket.io",
    tasks: {
      create: [
        {
          title: "get the smoke machine",
        },
        {
          title: "capture the twerp",
        },
      ],
    },
  },
];

export async function seed() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}
seed();

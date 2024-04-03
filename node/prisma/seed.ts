import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      id: "37aeedc7-b992-4055-83b0-1a9499aa5a2c",
      title: "Unite Summit",
      slug: "unite-summit",
      details: "This is my first event using with a NLW Unite Experience",
      maximumAttendees: 100,
    },
  });
}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
});

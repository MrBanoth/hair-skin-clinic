import { PrismaClient, Role } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 12);
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      name: 'Admin User',
      email: 'admin@example.com',
      password: hashedPassword,
      role: Role.ADMIN,
    },
  });

  console.log(`👤 Created admin user: ${admin.email}`);

  // Create sample services
  const services = [
    {
      name: 'Hair Cut & Styling',
      description: 'Professional hair cutting and styling service',
      duration: 60,
      price: 50.0,
      category: 'Hair',
    },
    {
      name: 'Facial Treatment',
      description: 'Deep cleansing and rejuvenating facial treatment',
      duration: 90,
      price: 80.0,
      category: 'Skin',
    },
    {
      name: 'Manicure & Pedicure',
      description: 'Complete nail care for hands and feet',
      duration: 75,
      price: 65.0,
      category: 'Nails',
    },
  ];

  await Promise.all(
    services.map((service) =>
      prisma.service.upsert({
        where: { name: service.name },
        update: {},
        create: service,
      })
    )
  );

  console.log('✨ Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

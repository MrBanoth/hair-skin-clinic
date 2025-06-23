import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    let appointments;
    
    if (session.user.role === 'ADMIN' || session.user.role === 'STAFF') {
      // Admins and staff can see all appointments
      appointments = await prisma.appointment.findMany({
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
          service: true,
        },
        orderBy: {
          date: 'asc',
        },
      });
    } else {
      // Regular users can only see their own appointments
      appointments = await prisma.appointment.findMany({
        where: {
          userId: session.user.id,
        },
        include: {
          service: true,
        },
        orderBy: {
          date: 'asc',
        },
      });
    }

    return NextResponse.json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch appointments' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const data = await request.json();
    
    // Check if the service exists
    const service = await prisma.service.findUnique({
      where: { id: data.serviceId },
    });

    if (!service) {
      return NextResponse.json(
        { error: 'Service not found' },
        { status: 404 }
      );
    }

    // Check for overlapping appointments
    const appointmentDate = new Date(data.date);
    const endTime = new Date(appointmentDate.getTime() + service.duration * 60000);

    const overlappingAppointment = await prisma.appointment.findFirst({
      where: {
        date: {
          lt: endTime,
        },
        OR: [
          {
            date: {
              gte: appointmentDate,
            },
          },
          {
            date: {
              lt: new Date(appointmentDate.getTime() + service.duration * 60000),
            },
          },
        ],
      },
    });

    if (overlappingAppointment) {
      return NextResponse.json(
        { error: 'This time slot is already booked' },
        { status: 400 }
      );
    }

    const appointment = await prisma.appointment.create({
      data: {
        userId: session.user.id,
        serviceId: data.serviceId,
        date: appointmentDate,
        time: data.time,
        notes: data.notes || null,
      },
      include: {
        service: true,
      },
    });

    return NextResponse.json(appointment, { status: 201 });
  } catch (error) {
    console.error('Error creating appointment:', error);
    return NextResponse.json(
      { error: 'Failed to create appointment' },
      { status: 500 }
    );
  }
}

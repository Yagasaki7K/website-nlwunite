import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { BadRequest } from "./_errors/bad-request";

export async function checkIn(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    "/attendees/:/attendeeId/check-in",
    {
      schema: {
        summary: "Check in attendee",
        tags: ["CheckIn"],
        params: z.object({
          attendeeId: z.coerce.number().int(),
        }),
        response: {
          201: z.null(),
        },
      },
    },
    async (request) => {
      const { attendeeId } = request.params;
      const attendeeCheckIn = await prisma.attendee.findUnique({
        where: {
          id: attendeeId,
        },
      });

      if (attendeeCheckIn === null) {
        throw new BadRequest("Attendee already checked in");
      }

      await prisma.attendee.update({
        where: {
          id: attendeeId,
        },
        data: {
          id: attendeeId,
        },
      });
    }
  );
}

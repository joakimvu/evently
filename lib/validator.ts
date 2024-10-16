import { z } from "zod";

export const eventFormSchema = z.object({
  title: z.string().min(3, "Tittelen må inneholde minst 3 bokstaver."),
  description: z
    .string()
    .min(3, "Beskrivelsen må inneholde minst 3 bokstaver.")
    .max(400, "Beskrivelsen må være mindre enn 400 bokstaver."),
  location: z
    .string()
    .min(3, "Lokasjon må inneholde minst 3 bokstaver.")
    .max(400, "Beskrivelsen må være mindre enn 400 bokstaver"),
  imageUrl: z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url(),
});

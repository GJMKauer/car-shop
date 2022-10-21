import { z } from 'zod';
import { vehicleZodSchema } from './IVehicle';

const carZodSchema = vehicleZodSchema.extend({
  doorsQty: z.number({
    required_error: 'doorsQty is required',
    invalid_type_error: 'doorsQty must be a number',
  }).int()
    .min(2, { message: 'doorsQty must be 2 or more' })
    .max(4, { message: 'doorsQty must be 4 or less' }),
  seatsQty: z.number({
    required_error: 'seatsQty is required',
    invalid_type_error: 'seatsQty must be a number',
  }).int()
    .min(2, { message: 'seatsQty must be 2 or more' })
    .max(7, { message: 'seatsQty must be 7 or less' }),
});

export type ICar = z.infer<typeof carZodSchema>;
export { carZodSchema };
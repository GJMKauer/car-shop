import { z } from 'zod';
import { vehicleZodSchema } from './IVehicle';

const motorcycleZodSchema = vehicleZodSchema.extend({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number({
    required_error: 'engineCapacity is required',
    invalid_type_error: 'engineCapacity must be a number',
  }).positive()
    .int()
    .max(2500, { message: 'engineCapacity must be 2500 or less' }),
});

export type IMotorcycle = z.infer<typeof motorcycleZodSchema>;
export { motorcycleZodSchema };
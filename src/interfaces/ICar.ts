import { IVehicle } from './IVehicle';

export interface ICar extends IVehicle {
  doorsQty: number
  seatsQty: number
}
import { IService } from '../interfaces/IService';
import { ICar, carZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

class CarService implements IService<ICar> {
  private _car: IModel<ICar>;

  constructor(model: IModel<ICar>) {
    this._car = model;
  }

  public async create(obj: unknown): Promise<ICar> {
    const parsedObj = carZodSchema.safeParse(obj);

    if (!parsedObj.success) {
      throw parsedObj.error;
    }

    return this._car.create(parsedObj.data);
  }

  public async read(): Promise<ICar[]> {
    return this._car.read();
  }

  public async readOne(id: string): Promise<ICar | null> {
    const car = await this._car.readOne(id);

    if (!car) throw new Error(ErrorTypes.EntityNotFound);

    return car;
  }

  public async update(id: string, obj: unknown): Promise<ICar | null> {
    const parsedObj = carZodSchema.safeParse(obj);

    if (!parsedObj.success) {
      throw parsedObj.error;
    }

    const updatedCar = await this._car.update(id, parsedObj.data);

    if (!updatedCar) throw new Error(ErrorTypes.EntityNotFound);

    return updatedCar;
  }

  public async delete(id: string): Promise<ICar | null> {
    const deletedCar = await this._car.delete(id);

    if (!deletedCar) throw new Error(ErrorTypes.EntityNotFound);

    return deletedCar;
  }
}

export default CarService;
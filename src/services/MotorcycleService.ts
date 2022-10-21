import { IService } from '../interfaces/IService';
import { IMotorcycle, motorcycleZodSchema } from '../interfaces/IMotorcycle';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

class MotorcycleService implements IService<IMotorcycle> {
  private _motorcycle: IModel<IMotorcycle>;

  constructor(model: IModel<IMotorcycle>) {
    this._motorcycle = model;
  }

  public async create(obj: unknown): Promise<IMotorcycle> {
    const parsedObj = motorcycleZodSchema.safeParse(obj);

    if (!parsedObj.success) {
      throw parsedObj.error;
    }

    return this._motorcycle.create(parsedObj.data);
  }

  public async read(): Promise<IMotorcycle[]> {
    return this._motorcycle.read();
  }

  public async readOne(id: string): Promise<IMotorcycle> {
    const motorcycle = await this._motorcycle.readOne(id);

    if (!motorcycle) throw new Error(ErrorTypes.EntityNotFound);

    return motorcycle;
  }

  public async update(id: string, obj: unknown): Promise<IMotorcycle> {
    const parsedObj = motorcycleZodSchema.safeParse(obj);

    if (!parsedObj.success) {
      throw parsedObj.error;
    }

    const updatedMotorcycle = await this._motorcycle.update(id, parsedObj.data);

    if (!updatedMotorcycle) throw new Error(ErrorTypes.EntityNotFound);

    return updatedMotorcycle;
  }

  public async delete(id: string): Promise<IMotorcycle> {
    const deletedMotorcycle = await this._motorcycle.delete(id);

    if (!deletedMotorcycle) throw new Error(ErrorTypes.EntityNotFound);

    return deletedMotorcycle;
  }
}

export default MotorcycleService;
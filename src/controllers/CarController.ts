import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

class CarController {
  constructor(private _service: IService<ICar>) { }

  public async create(req: Request, res: Response<ICar>) {
    const car = await this._service.create(req.body);
    return res.status(201).json(car);
  }

  public async read(_req: Request, res: Response<ICar[]>) {
    const cars = await this._service.read();
    return res.status(200).json(cars);
  }

  public async readOne(req: Request, res: Response<ICar>) {
    const { id } = req.params;
    const car = await this._service.readOne(id as string);
    return res.status(200).json(car);
  }

  public async update(req: Request, res: Response<ICar>) {
    const { id } = req.params;
    
    const updatedCar = await this._service.update(id, req.body);
    return res.status(200).json(updatedCar);
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;

    await this._service.delete(id);
    return res.status(204).json();
  }
}

export default CarController;
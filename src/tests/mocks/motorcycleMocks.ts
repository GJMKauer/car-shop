import { IMotorcycle } from '../../interfaces/IMotorcycle';

const motorcycleMock: IMotorcycle = {
    model: 'Ferrari',
    year: 2005,
    color: 'yellow',
    status: true,
    buyValue: 500,
    category: 'Street',
    engineCapacity: 2200,
}

const motorcycleMockWithId: IMotorcycle & { id: string } = {
  id: '6352f8ea74092b2e6a784c51',
  model: 'Ferrari',
  year: 2005,
  color: 'yellow',
  status: true,
  buyValue: 500,
  category: 'Street',
  engineCapacity: 2200,
}

const motorcycleMockUpdated: IMotorcycle = {
  model: 'Onix',
  year: 2012,
  color: 'black',
  status: true,
  buyValue: 5000,
  category: 'Street',
  engineCapacity: 2200,
}

const motorcycleMockUpdatedWithId: IMotorcycle & { id: string } = {
  id: '6352f8ea74092b2e6a784c51',
  model: 'Onix',
  year: 2012,
  color: 'black',
  status: true,
  buyValue: 5000,
  category: 'Street',
  engineCapacity: 2200,
}

export {
  motorcycleMock,
  motorcycleMockWithId,
  motorcycleMockUpdated,
  motorcycleMockUpdatedWithId,
};
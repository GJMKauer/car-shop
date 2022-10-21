import { ICar } from '../../interfaces/ICar';

const carMock: ICar = {
    model: 'Ferrari',
    year: 2005,
    color: 'yellow',
    status: true,
    buyValue: 500,
    doorsQty: 3,
    seatsQty: 3,
}

const carMockWithId: ICar & { id: string } = {
  id: '6352f8ea74092b2e6a784c51',
  model: 'Ferrari',
  year: 2005,
  color: 'yellow',
  status: true,
  buyValue: 500,
  doorsQty: 3,
  seatsQty: 3,
}

const carMockUpdated: ICar = {
  model: 'Onix',
  year: 2012,
  color: 'black',
  status: true,
  buyValue: 5000,
  doorsQty: 3,
  seatsQty: 4,
}

const carMockUpdatedWithId: ICar & { id: string } = {
  id: '6352f8ea74092b2e6a784c51',
  model: 'Onix',
  year: 2012,
  color: 'black',
  status: true,
  buyValue: 5000,
  doorsQty: 3,
  seatsQty: 4,
}

export {
  carMock,
  carMockWithId,
  carMockUpdated,
  carMockUpdatedWithId,
};
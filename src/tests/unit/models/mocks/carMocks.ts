import { ICar } from '../../../../interfaces/ICar';

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

export {
  carMock,
  carMockWithId,
};
import * as sinon from 'sinon';
import { expect } from 'chai';
import CarModel from '../../../models/CarModel';
import mongoose from 'mongoose';
import { carMock, carMockWithId } from './mocks/carMocks';

describe('Car Model', () => {
  const carModel = new CarModel();

  beforeEach(() => {
    sinon.stub(mongoose.Model, 'create').resolves(carMockWithId);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('When creating a car', () => {
    it('Creates a new car succesfully', async () => {
      const newCar = await carModel.create(carMock);
      expect(newCar).to.be.deep.equal(carMockWithId);
    });
  });
});

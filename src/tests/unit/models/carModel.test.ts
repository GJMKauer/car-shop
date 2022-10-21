import * as sinon from 'sinon';
import { expect } from 'chai';
import CarModel from '../../../models/CarModel';
import mongoose from 'mongoose';
import { carMock, carMockWithId, carMockUpdatedWithId, carMockUpdated } from '../../mocks/carMocks';
import { ErrorTypes } from '../../../errors/catalog';

describe('Car Model', () => {
  const carModel = new CarModel();

  beforeEach(() => {
    sinon.stub(mongoose.Model, 'create').resolves(carMockWithId);
    sinon.stub(mongoose.Model, 'find').resolves([carMockWithId]);
    sinon.stub(mongoose.Model, 'findOne').resolves(carMockWithId);
    sinon.stub(mongoose.Model, 'findByIdAndUpdate').resolves(carMockUpdatedWithId);
    sinon.stub(mongoose.Model, 'findByIdAndDelete').resolves(carMockUpdatedWithId);
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

  describe('When searching all cars', () => {
    it('Return all cars succesfully', async () => {
      const allCars = await carModel.read();
      expect(allCars).to.be.deep.equal([carMockWithId]);
    });
  });

  describe('When searching one car', () => {
    it('Return a car succesfully when id is found', async () => {
      const validIdStub = sinon.stub(mongoose, 'isValidObjectId').returns(true);
      const car = await carModel.readOne('KozukiOden');
      expect(car).to.be.deep.equal(carMockWithId);
      validIdStub.restore();
    });

    it('Fails to return a car when id is not found', async () => {
      const invalidIdStub = sinon.stub(mongoose, 'isValidObjectId').returns(false);

      try {
        await carModel.readOne('KurozumiOrochi');
      } catch (err: any) {
        expect(err.message).to.be.equal('InvalidMongoId');
      }

      invalidIdStub.restore();
    });
  });

  describe('When updating one car', () => {
    it('Return the updated car successfully', async () => {
      const updatedCar = await carModel.update('6352f8ea74092b2e6a784c51', carMockUpdated);
      expect(updatedCar).to.be.deep.equal(carMockUpdatedWithId);
    });

    it('Fails to return a car when id is not found', async () => {
      try {
        await carModel.update('KurozumiOrochi', carMockUpdated);
      } catch (err: any) {
        expect(err.message).to.be.equal(ErrorTypes.InvalidMongoId);
      }
    });
  });

  describe('When deleting a car', () => {
    it('Return the deleted car successfully', async () => {
      const deletedCar = await carModel.delete('6352f8ea74092b2e6a784c51');
      expect(deletedCar).to.be.deep.equal(carMockUpdatedWithId);
    });

    it('Fails to return a car when id is not found', async () => {
      try {
        await carModel.delete('KurozumiOrochi');
      } catch (err: any) {
        expect(err.message).to.be.equal(ErrorTypes.InvalidMongoId);
      }
    });
  });
});

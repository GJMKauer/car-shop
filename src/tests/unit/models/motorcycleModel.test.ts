import * as sinon from 'sinon';
import { expect } from 'chai';
import MotorcycleModel from '../../../models/MotorcycleModel';
import mongoose from 'mongoose';
import { motorcycleMock, motorcycleMockWithId, motorcycleMockUpdatedWithId, motorcycleMockUpdated } from '../../mocks/motorcycleMocks';
import { ErrorTypes } from '../../../errors/catalog';

describe('Motorcycle Model', () => {
  const motorcycleModel = new MotorcycleModel();

  beforeEach(() => {
    sinon.stub(mongoose.Model, 'create').resolves(motorcycleMockWithId);
    sinon.stub(mongoose.Model, 'find').resolves([motorcycleMockWithId]);
    sinon.stub(mongoose.Model, 'findOne').resolves(motorcycleMockWithId);
    sinon.stub(mongoose.Model, 'findByIdAndUpdate').resolves(motorcycleMockUpdatedWithId);
    sinon.stub(mongoose.Model, 'findByIdAndDelete').resolves(motorcycleMockUpdatedWithId);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('When creating a motorcycle', () => {
    it('Creates a new motorcycle succesfully', async () => {
      const newMotorcycle = await motorcycleModel.create(motorcycleMock);
      expect(newMotorcycle).to.be.deep.equal(motorcycleMockWithId);
    });
  });

  describe('When searching all motorcycles', () => {
    it('Return all motorcycles succesfully', async () => {
      const allMotorcycles = await motorcycleModel.read();
      expect(allMotorcycles).to.be.deep.equal([motorcycleMockWithId]);
    });
  });

  describe('When searching one motorcycle', () => {
    it('Return a motorcycle succesfully when id is found', async () => {
      const validIdStub = sinon.stub(mongoose, 'isValidObjectId').returns(true);
      const motorcycle = await motorcycleModel.readOne('KozukiOden');
      expect(motorcycle).to.be.deep.equal(motorcycleMockWithId);
      validIdStub.restore();
    });

    it('Fails to return a motorcycle when id is not found', async () => {
      const invalidIdStub = sinon.stub(mongoose, 'isValidObjectId').returns(false);

      try {
        await motorcycleModel.readOne('KurozumiOrochi');
      } catch (err: any) {
        expect(err.message).to.be.equal('InvalidMongoId');
      }

      invalidIdStub.restore();
    });
  });

  describe('When updating one motorcycle', () => {
    it('Return the updated motorcycle successfully', async () => {
      const updatedMotorcycle = await motorcycleModel.update('6352f8ea74092b2e6a784c51', motorcycleMockUpdated);
      expect(updatedMotorcycle).to.be.deep.equal(motorcycleMockUpdatedWithId);
    });

    it('Fails to return a motorcycle when id is not found', async () => {
      try {
        await motorcycleModel.update('KurozumiOrochi', motorcycleMockUpdated);
      } catch (err: any) {
        expect(err.message).to.be.equal(ErrorTypes.InvalidMongoId);
      }
    });
  });

  describe('When deleting a motorcycle', () => {
    it('Return the deleted motorcycle successfully', async () => {
      const deletedMotorcycle = await motorcycleModel.delete('6352f8ea74092b2e6a784c51');
      expect(deletedMotorcycle).to.be.deep.equal(motorcycleMockUpdatedWithId);
    });

    it('Fails to return a motorcycle when id is not found', async () => {
      try {
        await motorcycleModel.delete('KurozumiOrochi');
      } catch (err: any) {
        expect(err.message).to.be.equal(ErrorTypes.InvalidMongoId);
      }
    });
  });
});

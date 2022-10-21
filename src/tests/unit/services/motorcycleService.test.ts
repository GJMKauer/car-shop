import * as sinon from 'sinon';
import { expect } from 'chai';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import MotorcycleModel from '../../../models/MotorcycleModel';
import MotorcycleService from '../../../services/MotorcycleService';
import { motorcycleMock, motorcycleMockWithId, motorcycleMockUpdatedWithId, motorcycleMockUpdated } from '../../mocks/motorcycleMocks';

describe('Motorcycle Service', () => {
  const motorcycleModel = new MotorcycleModel();
  const motorcycleService = new MotorcycleService(motorcycleModel);

  before(() => {
    sinon.stub(motorcycleModel, 'create').resolves(motorcycleMockWithId);
    sinon.stub(motorcycleModel, 'read').resolves([motorcycleMockWithId]);
    sinon.stub(motorcycleModel, 'readOne')
      .onCall(0).resolves(motorcycleMockWithId)
      .onCall(1).resolves(null);
    sinon.stub(motorcycleModel, 'delete')
      .onCall(0).resolves(motorcycleMockWithId)
      .onCall(1).resolves(null);
  });

  after(() => {
    sinon.restore();
  })

  describe('When creating a motorcycle', () => {
    it('Creates a new motorcycle succesfully', async () => {
      const newMotorcycle = await motorcycleService.create(motorcycleMock);
      expect(newMotorcycle).to.be.deep.equal(motorcycleMockWithId);
    });

    it('Fails when creating a new motorcycle', async () => {
      let error;

      try {
        await motorcycleService.create({});
      } catch (err) {
        error = err;
      }

      expect(error).to.be.instanceOf(ZodError);
    });
  });

  describe('When searching all motorcycles', () => {
    it('Return all motorcycles succesfully', async () => {
      const allMotorcycles = await motorcycleService.read();
      expect(allMotorcycles).to.be.deep.equal([motorcycleMockWithId]);
    });
  });

  describe('When searching a motorcycle', () => {
    it('Return a motorcycle succesfully', async () => {
      const motorcycle = await motorcycleService.readOne('KozukiOden');
      expect(motorcycle).to.be.deep.equal(motorcycleMockWithId);
    });

    it('Fails to return a motorcycle', async () => {
      let error;

      try {
        await motorcycleService.readOne(motorcycleMockWithId.id);
      } catch (err: any) {
        error = err;
      }

      expect(error.message).to.be.equal(ErrorTypes.EntityNotFound);
    });
  });

  describe('When deleting a motorcycle', () => {
    it('Delete a motorcycle succesfully', async () => {
      const deletedMotorcycle = await motorcycleService.delete(motorcycleMockWithId.id);
      expect(deletedMotorcycle).to.be.deep.equal(motorcycleMockWithId);
    });

    it('Fails to return delete a motorcycle', async () => {
      let error;

      try {
        await motorcycleService.delete(motorcycleMockWithId.id);
      } catch (err: any) {
        error = err;
      }

      expect(error.message).to.be.equal(ErrorTypes.EntityNotFound);
    });
  });

  describe('When updating a motorcycle', () => {
    it('Return an updated motorcycle succesfully', async () => {
      sinon.stub(motorcycleModel, 'update').resolves(motorcycleMockUpdatedWithId);

      const updatedMotorcycle = await motorcycleService.update('KozukiOden', motorcycleMockUpdated);
      expect(updatedMotorcycle).to.be.deep.equal(motorcycleMockUpdatedWithId);

      sinon.restore();
    });

    it('Fails to return an updated motorcycle - Zod Error', async () => {
      let error;

      try {
        await motorcycleService.update('KozukiOden', { INVALID: 'OBJECT' });
      } catch (err: any) {
        error = err;
      }

      expect(error).to.be.instanceOf(ZodError);
    });

    it('Fails to return an updated motorcycle - EntityNotFound', async () => {
      sinon.stub(motorcycleModel, 'update').resolves(null);

      let error;

      try {
        await motorcycleService.update('KozukiOden', motorcycleMockUpdated)
      } catch (err: any) {
        error = err;
      }

      expect(error.message).to.be.equal(ErrorTypes.EntityNotFound);

      sinon.restore();
    });
  });
});
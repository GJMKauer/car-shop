import * as sinon from 'sinon';
import { expect } from 'chai';
import { Request, Response } from 'express';
import MotorcycleController from '../../../controllers/MotorcycleController';
import MotorcycleService from '../../../services/MotorcycleService';
import MotorcycleModel from '../../../models/MotorcycleModel';
import { motorcycleMock, motorcycleMockWithId, motorcycleMockUpdated } from '../../mocks/motorcycleMocks';

describe('Motorcycle Controller', () => {
  const motorcycleModel = new MotorcycleModel();
  const motorcycleService = new MotorcycleService(motorcycleModel);
  const motorcycleController = new MotorcycleController(motorcycleService);
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  afterEach(() => {
    sinon.restore();
  })

  describe('When creating a motorcycle', () => {
    beforeEach(() => {
      sinon.stub(motorcycleService, 'create').resolves(motorcycleMock);
    });

    it('Creates a new motorcycle succesfully', async () => {
      req.body = motorcycleMock;
      await motorcycleController.create(req, res);

      const statusStub = res.status as sinon.SinonStub;
      expect(statusStub.calledWith(201)).to.be.true;

      const jsonStub = res.json as sinon.SinonStub;
      expect(jsonStub.calledWith(motorcycleMock)).to.be.true;
    });
  });

  describe('When searching all motorcycle', () => {
    beforeEach(() => {
      sinon.stub(motorcycleService, 'read').resolves([motorcycleMockWithId]);
    });

    it('Return all motorcycles succesfully', async () => {
      await motorcycleController.read(req, res);

      const statusStub = res.status as sinon.SinonStub;
      expect(statusStub.calledWith(200)).to.be.true;

      const jsonStub = res.json as sinon.SinonStub;
      expect(jsonStub.calledWith([motorcycleMockWithId])).to.be.true;
    });
  });

  describe('When searching a motorcycle', () => {
    beforeEach(() => {
      sinon.stub(motorcycleService, 'readOne').resolves(motorcycleMockWithId);
    });

    it('Return a motorcycle succesfully', async () => {
      req.params = { id: motorcycleMockWithId.id };
      await motorcycleController.readOne(req, res);

      const statusStub = res.status as sinon.SinonStub;
      expect(statusStub.calledWith(200)).to.be.true;

      const jsonStub = res.json as sinon.SinonStub;
      expect(jsonStub.calledWith(motorcycleMockWithId)).to.be.true;
    });
  });

  describe('When updating a motorcycle', () => {
    beforeEach(() => {
      sinon.stub(motorcycleService, 'update').resolves(motorcycleMockWithId);
    });

    it('Return a motorcycle succesfully', async () => {
      req.body = motorcycleMockUpdated;
      req.params = { id: motorcycleMockWithId.id };
      await motorcycleController.update(req, res);

      const statusStub = res.status as sinon.SinonStub;
      expect(statusStub.calledWith(200)).to.be.true;

      const jsonStub = res.json as sinon.SinonStub;
      expect(jsonStub.calledWith(motorcycleMockWithId)).to.be.true;
    });
  });

  describe('When deleting a motorcycle', () => {
    beforeEach(() => {
      sinon.stub(motorcycleService, 'delete').resolves(motorcycleMockWithId);
    });

    it('Delete a motorcycle succesfully', async () => {
      req.params = { id: motorcycleMockWithId.id };
      await motorcycleController.delete(req, res);

      const statusStub = res.status as sinon.SinonStub;
      expect(statusStub.calledWith(204)).to.be.true;

      const jsonStub = res.json as sinon.SinonStub;
      expect(jsonStub.calledWith()).to.be.true;
    });
  });
});
import * as sinon from 'sinon';
import { expect } from 'chai';
import { Request, Response } from 'express';
import CarController from '../../../controllers/CarController';
import CarService from '../../../services/CarService';
import CarModel from '../../../models/CarModel';
import { carMock, carMockUpdated, carMockWithId } from '../../mocks/carMocks';

describe('Car Controller', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);
  const carController = new CarController(carService);
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  afterEach(() => {
    sinon.restore();
  })

  describe('When creating a car', () => {
    beforeEach(() => {
      sinon.stub(carService, 'create').resolves(carMock);
    });

    it('Creates a new car succesfully', async () => {
      req.body = carMock;
      await carController.create(req, res);

      const statusStub = res.status as sinon.SinonStub;
      expect(statusStub.calledWith(201)).to.be.true;

      const jsonStub = res.json as sinon.SinonStub;
      expect(jsonStub.calledWith(carMock)).to.be.true;
    });
  });

  describe('When searching all car', () => {
    beforeEach(() => {
      sinon.stub(carService, 'read').resolves([carMockWithId]);
    });

    it('Return all cars succesfully', async () => {
      await carController.read(req, res);

      const statusStub = res.status as sinon.SinonStub;
      expect(statusStub.calledWith(200)).to.be.true;

      const jsonStub = res.json as sinon.SinonStub;
      expect(jsonStub.calledWith([carMockWithId])).to.be.true;
    });
  });

  describe('When searching a car', () => {
    beforeEach(() => {
      sinon.stub(carService, 'readOne').resolves(carMockWithId);
    });

    it('Return a car succesfully', async () => {
      req.params = { id: carMockWithId.id };
      await carController.readOne(req, res);

      const statusStub = res.status as sinon.SinonStub;
      expect(statusStub.calledWith(200)).to.be.true;

      const jsonStub = res.json as sinon.SinonStub;
      expect(jsonStub.calledWith(carMockWithId)).to.be.true;
    });
  });

  describe('When updating a car', () => {
    beforeEach(() => {
      sinon.stub(carService, 'update').resolves(carMockWithId);
    });

    it('Return a car succesfully', async () => {
      req.body = carMockUpdated;
      req.params = { id: carMockWithId.id };
      await carController.update(req, res);

      const statusStub = res.status as sinon.SinonStub;
      expect(statusStub.calledWith(200)).to.be.true;

      const jsonStub = res.json as sinon.SinonStub;
      expect(jsonStub.calledWith(carMockWithId)).to.be.true;
    });
  });

  describe('When deleting a car', () => {
    beforeEach(() => {
      sinon.stub(carService, 'delete').resolves(carMockWithId);
    });

    it('Delete a car succesfully', async () => {
      req.params = { id: carMockWithId.id };
      await carController.delete(req, res);

      const statusStub = res.status as sinon.SinonStub;
      expect(statusStub.calledWith(204)).to.be.true;

      const jsonStub = res.json as sinon.SinonStub;
      expect(jsonStub.calledWith()).to.be.true;
    });
  });
});
import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { ErrorTypes, errorCatalog } from '../errors/catalog';

const errorHandler: ErrorRequestHandler = (
  err: Error | ZodError,
  _req,
  res,
  _next,
) => {
  if (err instanceof ZodError) {
    return res.status(400).json({ message: err.issues });
  }

  const messageAsErrorType = err.message as ErrorTypes;

  const mappedError = errorCatalog[messageAsErrorType];
  
  if (mappedError) {
    const { httpStatus, error } = mappedError;
    return res.status(httpStatus).json({ error });
  }
  console.log(err);
  return res.status(500).json({ message: 'Internal Server Error' });
};

export default errorHandler;
import 'express-async-errors';
import express from 'express';
import carsRoute from './routes/carsRoute';
import errorHandler from './middlewares/errorMiddleware';

const app = express();

app.use(express.json());
app.use('/cars', carsRoute);
app.use(errorHandler);

export default app;

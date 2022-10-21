import 'express-async-errors';
import express from 'express';
import carsRoute from './routes/carsRoute';
import motorcyclesRoute from './routes/motorcycleRoute';
import errorHandler from './middlewares/errorMiddleware';

const app = express();

app.use(express.json());
app.use('/cars', carsRoute);
app.use('/motorcycles', motorcyclesRoute);
app.use(errorHandler);

export default app;

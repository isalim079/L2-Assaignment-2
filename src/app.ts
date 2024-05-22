import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { eCommerceRoutes } from './app/modules/eCommerce/eCommerce.route';
import { orderRoutes } from './app/modules/orderManagement/orderManagement.router';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/', eCommerceRoutes);
app.use('/', orderRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running correctly..!');
});

app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

export default app;

import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { eCommerceRoutes } from './app/modules/eCommerce/eCommerce.route';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/', eCommerceRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running correctly..!');
});

export default app;

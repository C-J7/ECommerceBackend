import express from 'express';
import productRouter from './routes/products/index.js'
import { Router } from 'express';

const app = express();
const port = 3000;
const router = Router();



app.use('/products', productRouter);


app.listen(port, () => {
  console.log(`App and DevJ7 listening on port ${port}`)
});

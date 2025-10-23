import express, {json, urlencoded}  from 'express';
import productRouter from './routes/products/index.js'


const app = express();
const port = 3000;

//middlewares: utility functions that process requests before they reach the route handlers via app.use()
app.use(urlencoded({ extended: false }));//middleware to parse urlencoded bodies for every request
app.use(json());//middleware to parse json bodies for every request


app.get('/', (req: any, res: any) => {
  res.send('Welcome to the E-Commerce API');
});

app.use('/products', productRouter);


app.listen(port, () => {
  console.log(`App and DevJ7 listening on port ${port}`)
});

import express, { Router }  from 'express';

const router = Router();
router.get('/', (req: any, res: { send: (arg0: string) => void; }) => {
  res.send('Hello DevJ7 Here!')
});

//products endpoint
router.get('/', 
  (req: any, 
   res: { json: (
    arg: { 
      id: number; 
      name: string; 
      price: number; }[]) => void; }) => {
        res.json([
          { id: 1, name: 'Example Product', price: 10000 },
        ])
      }
    );


//getting a product by id
router.get('/:id', 
  (req: any, 
   res: { json: (
    arg: { 
      id: number; 
      name: string; 
      price: number; }[]) => void; }) => {
        console.log(parseInt(req.params.id));//getting the id 

        res.json([
          { id: 1, name: 'Example Product', price: 10000 },
        ])
      }
    );

router.post('/', 
  (req: any, 
    res: { json: (
      arg: { 
        id: number; 
        name: string; 
        price: number; }) => void; }) => {
  const newProduct = req.body;
  res.json(newProduct);
});


export default router;
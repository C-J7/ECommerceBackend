import {Request, Response} from 'express';


export function getProducts(req: Request, res: Response) {
  res.json();
}

export function getProductById(req: Request, res: Response) {
  res.json();
}



export function addProduct(req: Request, res: Response) {
  const newProduct = req.body;
  res.json();
}


export function updateProduct(req: Request, res: Response) {
  const updatedProduct = req.body;
  res.json();
}


export function deleteProduct(req: Request, res: Response) {
  res.json();
}
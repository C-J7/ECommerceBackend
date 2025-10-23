import express, { Router }  from 'express';
import {getProducts, getProductById, addProduct, updateProduct, deleteProduct} from './productsControllers.js'
const router = Router();

//products endpoint

//getting all products
router.get('/', getProducts);

//getting a product by id
router.get('/:id', getProductById);

//adding a new product
router.post('/', addProduct);

//updating a product
router.put('/:id', updateProduct)

//deleting a product
router.delete("/:id", deleteProduct)


export default router;
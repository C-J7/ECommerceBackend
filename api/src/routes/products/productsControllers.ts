import type { Request as Req, Response as Res } from 'express';
import { eq } from 'drizzle-orm';
import { db } from '../../db/query.js';
import { productsTable } from '../../db/schema/products.js';

type ProductRow = {
  id: number;
  name: string;
  price: number;
  description: string;
  image?: string | null;
};

type InsertProduct = Omit<ProductRow, 'id'>;

export async function getProducts(_req: Req, res: Res) {
  try {
    const products = await db.select().from(productsTable);
    return res.json(products);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to fetch products' });
  }
}

export async function getProductById(req: Req<{ id: string }>, res: Res) {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'Invalid product id' });
  }

  try {
    const rows = await db.select().from(productsTable).where(eq(productsTable.id, id));
    const product = Array.isArray(rows) ? rows[0] : rows;
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    return res.json(product);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to fetch product' });
  }
}

export async function addProduct(req: Req<{}, any, InsertProduct>, res: Res) {
  const body = req.body;
  if (
    !body ||
    typeof body.name !== 'string' ||
    typeof body.price !== 'number' ||
    typeof body.description !== 'string'
  ) {
    return res.status(400).json({ error: 'Invalid product data' });
  }

  try {
    const inserted = await db.insert(productsTable).values(body).returning();
    const product = inserted[0];
    return res.status(201).json(product);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to create product' });
  }
}

export async function updateProduct(req: Req<{ id: string }, any, Partial<InsertProduct>>, res: Res) {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'Invalid product id' });
  }

  const patch = req.body;
  if (!patch || Object.keys(patch).length === 0) {
    return res.status(400).json({ error: 'No data to update' });
  }

  try {
    const updatedRows = await db
      .update(productsTable)
      .set(patch as Partial<InsertProduct>)
      .where(eq(productsTable.id, id))
      .returning();
    const updated = updatedRows[0];
    if (!updated) {
      return res.status(404).json({ error: 'Product not found' });
    }
    return res.json(updated);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to update product' });
  }
}

export async function deleteProduct(req: Req<{ id: string }>, res: Res) {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'Invalid product id' });
  }

  try {
    const deletedRows = await db.delete(productsTable).where(eq(productsTable.id, id)).returning();
    const deleted = deletedRows[0];
    if (!deleted) {
      return res.status(404).json({ error: 'Product not found' });
    }
    return res.status(204).send();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to delete product' });
  }
}
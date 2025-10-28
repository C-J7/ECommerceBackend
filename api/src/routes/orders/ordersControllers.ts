import type { Response as Res, Request as Req } from "express";
import { db } from "../../db/query.js";
import { ordersTable } from "../../db/schema/orders.js";
import { eq } from "drizzle-orm";

type OrderRow = {
  id: number;
  user_id: number;
  product_id: number;
  quantity: number;
  timestamp: Date;
};

type InsertOrder = Omit<OrderRow, 'id' | 'timestamp'>;

export async function getOrders(_req: Req, res: Res) {
  try {
    const orders = await db.select().from(ordersTable);
    return res.json(orders);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to fetch orders' });
  }
}

export async function getOrderById(req: Req<{ id: string }>, res: Res) {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'Invalid order id' });
  }

  try {
    const rows = await db.select().from(ordersTable).where(eq(ordersTable.id, id));
    const order = Array.isArray(rows) ? rows[0] : rows;
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    return res.json(order);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to fetch order' });
  }
}

export async function addOrder(req: Req<{}, any, InsertOrder>, res: Res) {
  const body = req.body;
  if (
    !body ||
    typeof body.user_id !== 'number' ||
    typeof body.product_id !== 'number' ||
    typeof body.quantity !== 'number' ||
    body.quantity <= 0
  ) {
    return res.status(400).json({ error: 'Invalid order data' });
  }

  try {
    const inserted = await db.insert(ordersTable).values(body).returning();
    const order = inserted[0];
    return res.status(201).json(order);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to create order' });
  }
}

export async function updateOrder(req: Req<{ id: string }, any, Partial<InsertOrder>>, res: Res) {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'Invalid order id' });
  }

  const patch = req.body;
  if (!patch || Object.keys(patch).length === 0) {
    return res.status(400).json({ error: 'No data to update' });
  }

  try {
    const updatedRows = await db
      .update(ordersTable)
      .set(patch as Partial<InsertOrder>)
      .where(eq(ordersTable.id, id))
      .returning();
    const updated = updatedRows[0];
    if (!updated) {
      return res.status(404).json({ error: 'Order not found' });
    }
    return res.json(updated);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to update order' });
  }
}

export async function deleteOrder(req: Req<{ id: string }>, res: Res) {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'Invalid order id' });
  }

  try {
    const deletedRows = await db.delete(ordersTable).where(eq(ordersTable.id, id)).returning();
    const deleted = deletedRows[0];
    if (!deleted) {
      return res.status(404).json({ error: 'Order not found' });
    }
    return res.status(204).send();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to delete order' });
  }
}


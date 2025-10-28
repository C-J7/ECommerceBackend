
import { ordersTable } from "./orders.js"
import { productsTable } from "./products.js"
import { usersTable } from "./users.js"


export default {
  ...ordersTable,
  ...productsTable,
  ...usersTable
}
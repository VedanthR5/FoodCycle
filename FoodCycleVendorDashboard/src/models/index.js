// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const OrderStatus = {
  "NEW": "NEW",
  "COOKING": "COOKING",
  "READY_FOR_PICKUP": "READY_FOR_PICKUP",
  "PICKED_UP": "PICKED_UP",
  "COMPLETED": "COMPLETED"
};

const { OrderDish, Order, BasketDish, Basket, User, Dish, Restaurant } = initSchema(schema);

export {
  OrderDish,
  Order,
  BasketDish,
  Basket,
  User,
  Dish,
  Restaurant,
  OrderStatus
};
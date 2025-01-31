import { EmployeesType } from '../models/Northwind/employees-type';
import { OrdersType } from '../models/Northwind/orders-type';
import { ProductsType } from '../models/Northwind/products-type';

export async function getProducts(): Promise<ProductsType[]> {
  const response = await fetch('../../static-data/northwind-products-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}

export async function getOrders(): Promise<OrdersType[]> {
  const response = await fetch('../../static-data/northwind-orders-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}

export async function getEmployees(): Promise<EmployeesType[]> {
  const response = await fetch('../../static-data/northwind-employees-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}

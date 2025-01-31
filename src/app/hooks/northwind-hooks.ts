import { useCallback, useEffect, useState } from 'react';
import { EmployeesType } from '../models/Northwind/employees-type';
import { getEmployees, getOrders, getProducts } from '../services/northwind';
import { OrdersType } from '../models/Northwind/orders-type';
import { ProductsType } from '../models/Northwind/products-type';

export const useGetProducts = () => {
  const [products, setProducts] = useState<ProductsType[]>([]);

  const requestProducts = useCallback(() => {
    let ignore = false;
    getProducts()
      .then((data) => {
        if (!ignore) {
          setProducts(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestProducts();
  }, [requestProducts]);

  return { requestNorthwindProducts: requestProducts, northwindProducts: products, setNorthwindProducts: setProducts };
}

export const useGetOrders = () => {
  const [orders, setOrders] = useState<OrdersType[]>([]);

  const requestOrders = useCallback(() => {
    let ignore = false;
    getOrders()
      .then((data) => {
        if (!ignore) {
          setOrders(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestOrders();
  }, [requestOrders]);

  return { requestNorthwindOrders: requestOrders, northwindOrders: orders, setNorthwindOrders: setOrders };
}

export const useGetEmployees = () => {
  const [employees, setEmployees] = useState<EmployeesType[]>([]);

  const requestEmployees = useCallback(() => {
    let ignore = false;
    getEmployees()
      .then((data) => {
        if (!ignore) {
          setEmployees(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestEmployees();
  }, [requestEmployees]);

  return { requestNorthwindEmployees: requestEmployees, northwindEmployees: employees, setNorthwindEmployees: setEmployees };
}

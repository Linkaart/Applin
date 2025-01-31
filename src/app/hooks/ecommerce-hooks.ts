import { useCallback, useEffect, useState } from 'react';
import { getRevenueList, getSalesList } from '../services/ecommerce';
import { RevenueType } from '../models/ECommerce/revenue-type';
import { SalesType } from '../models/ECommerce/sales-type';

export const useGetRevenueList = () => {
  const [revenue, setRevenue] = useState<RevenueType[]>([]);

  const requestRevenue = useCallback(() => {
    let ignore = false;
    getRevenueList()
      .then((data) => {
        if (!ignore) {
          setRevenue(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestRevenue();
  }, [requestRevenue]);

  return { requestECommerceRevenue: requestRevenue, eCommerceRevenue: revenue, setECommerceRevenue: setRevenue };
}

export const useGetSalesList = () => {
  const [sales, setSales] = useState<SalesType[]>([]);

  const requestSales = useCallback(() => {
    let ignore = false;
    getSalesList()
      .then((data) => {
        if (!ignore) {
          setSales(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestSales();
  }, [requestSales]);

  return { requestECommerceSales: requestSales, eCommerceSales: sales, setECommerceSales: setSales };
}

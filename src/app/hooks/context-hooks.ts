import { createContext, Dispatch, useContext, useEffect, useRef, useState } from 'react';
import { ProductsTypeInventoryApp } from '../models/InventoryApp/products-type-inventory-app';
import { RevenueType } from '../models/ECommerce/revenue-type';
import { useGetProductsList } from './inventory-app-hooks';
import { useGetRevenueList } from './ecommerce-hooks';

export const GlobalContext = createContext<{globalState: GlobalStateInterface, setGlobalState: Dispatch<React.SetStateAction<GlobalStateInterface>>}>(undefined as any);
export const useGlobalContext = () => useContext(GlobalContext);

export const useGlobalState = () => {
  const __loaded = useRef<boolean>(false);
  const initialState = {
    revenue: [],
    products: []
  } as GlobalStateInterface;

  const [globalState, setGlobalState] = useState<GlobalStateInterface>(initialState);
  const { eCommerceRevenue: revenue } = useGetRevenueList();
  const { inventoryAppProducts: products } = useGetProductsList();

  useEffect(() => {
    if (__loaded.current) {
      setGlobalState(prevState => { return {...prevState,
        revenue
      }});
    }
  }, [revenue]);

  useEffect(() => {
    if (__loaded.current) {
      setGlobalState(prevState => { return {...prevState,
        products
      }});
    }
  }, [products]);

  useEffect(() => {
    __loaded.current = true;
    return () => {
      __loaded.current = false;
    }
  }, []);

  return { globalState, setGlobalState };
};

interface GlobalStateInterface {
  revenue: RevenueType[];
  products: ProductsType[];
}

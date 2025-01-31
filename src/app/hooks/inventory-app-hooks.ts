import { useCallback, useEffect, useState } from 'react';
import { BrandsType } from '../models/InventoryApp/brands-type';
import { getBrandsList, getNewProductsList, getProductsList } from '../services/inventory-app';
import { NewProductsType } from '../models/InventoryApp/new-products-type';
import { ProductsTypeInventoryApp } from '../models/InventoryApp/products-type-inventory-app';

export const useGetNewProductsList = () => {
  const [newProducts, setNewProducts] = useState<NewProductsType[]>([]);

  const requestNewProducts = useCallback(() => {
    let ignore = false;
    getNewProductsList()
      .then((data) => {
        if (!ignore) {
          setNewProducts(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestNewProducts();
  }, [requestNewProducts]);

  return { requestInventoryAppNewProducts: requestNewProducts, inventoryAppNewProducts: newProducts, setInventoryAppNewProducts: setNewProducts };
}

export const useGetBrandsList = () => {
  const [brands, setBrands] = useState<BrandsType[]>([]);

  const requestBrands = useCallback(() => {
    let ignore = false;
    getBrandsList()
      .then((data) => {
        if (!ignore) {
          setBrands(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestBrands();
  }, [requestBrands]);

  return { requestInventoryAppBrands: requestBrands, inventoryAppBrands: brands, setInventoryAppBrands: setBrands };
}

export const useGetProductsList = () => {
  const [products, setProducts] = useState<ProductsTypeInventoryApp[]>([]);

  const requestProducts = useCallback(() => {
    let ignore = false;
    getProductsList()
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

  return { requestInventoryAppProducts: requestProducts, inventoryAppProducts: products, setInventoryAppProducts: setProducts };
}

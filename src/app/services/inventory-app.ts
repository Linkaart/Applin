import { BrandsType } from '../models/InventoryApp/brands-type';
import { FetchApi } from './fetch-api';
import { NewProductsType } from '../models/InventoryApp/new-products-type';
import { ProductsTypeInventoryApp } from '../models/InventoryApp/products-type-inventory-app';

export async function getNewProductsList(): Promise<NewProductsType[]> {
  return await FetchApi.fetchApiResponse<NewProductsType[]>('https://excel2json.io/api/share/4b54e7f8-927a-4a38-e690-08dab79fa5b4', []);
}

export async function getBrandsList(): Promise<BrandsType[]> {
  return await FetchApi.fetchApiResponse<BrandsType[]>('https://my.appbuilder.dev/api/files?keyName=DataSources/duvz2u35/4so04eumnwx', []);
}

export async function getProductsList(): Promise<ProductsTypeInventoryApp[]> {
  return await FetchApi.fetchApiResponse<ProductsTypeInventoryApp[]>('https://excel2json.io/api/share/22b3aaa8-bba3-43cb-e68f-08dab79fa5b4', []);
}

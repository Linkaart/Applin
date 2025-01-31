export interface ProductsType {
  productID: number;
  supplierID: number;
  categoryID: number;
  quantityPerUnit: string;
  unitPrice: number;
  unitsInStock: number;
  unitsOnOrder: number;
  reorderLevel: number;
  discontinued: boolean;
  name: string;
}

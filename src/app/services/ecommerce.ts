import { FetchApi } from './fetch-api';
import { RevenueType } from '../models/ECommerce/revenue-type';
import { SalesType } from '../models/ECommerce/sales-type';

export async function getRevenueList(): Promise<RevenueType[]> {
  return await FetchApi.fetchApiResponse<RevenueType[]>('https://excel2json.io/api/share/03e74dde-d2e1-4fee-437d-08da496bf5f2', []);
}

export async function getSalesList(): Promise<SalesType[]> {
  return await FetchApi.fetchApiResponse<SalesType[]>('https://excel2json.io/api/share/f9942c71-b172-4060-4381-08da496bf5f2', []);
}

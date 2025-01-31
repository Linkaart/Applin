import { FetchApi } from './fetch-api';
import { MaterialsType } from '../models/Peinture/materials-type';

export async function getMaterialsList(): Promise<MaterialsType[]> {
  return await FetchApi.fetchApiResponse<MaterialsType[]>('https://my.appbuilder.dev/api/files?keyName=DataSources/duvz2u35/0grbddcnkrr', []);
}

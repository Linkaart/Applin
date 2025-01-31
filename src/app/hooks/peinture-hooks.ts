import { useCallback, useEffect, useState } from 'react';
import { getMaterialsList } from '../services/peinture';
import { MaterialsType } from '../models/Peinture/materials-type';

export const useGetMaterialsList = () => {
  const [materials, setMaterials] = useState<MaterialsType[]>([]);

  const requestMaterials = useCallback(() => {
    let ignore = false;
    getMaterialsList()
      .then((data) => {
        if (!ignore) {
          setMaterials(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestMaterials();
  }, [requestMaterials]);

  return { requestPeintureMaterials: requestMaterials, peintureMaterials: materials, setPeintureMaterials: setMaterials };
}

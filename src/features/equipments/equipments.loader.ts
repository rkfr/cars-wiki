import { API_CONFIG } from '../../config';
import type { LoaderParams, LoaderResult } from '../../types';
import type { ModelEquipmentPage } from './types';

export const equipmentLoader = async ({
  params,
}: LoaderParams): Promise<LoaderResult<ModelEquipmentPage>> => {
  const data = await fetch(
    `${API_CONFIG.apiBasePath}/model/equipments/${params.id}`,
  ).then((res) => res.json());

  return { data };
};

import { API_CONFIG } from '../../config';
import type { LoaderParams, LoaderResult } from '../../types';
import type { ModelGeneration } from './types';

export const generationLoader = async ({
  params,
}: LoaderParams): Promise<LoaderResult<ModelGeneration[]>> => {
  const data = await fetch(
    `${API_CONFIG.apiBasePath}/model/list/${params.id}`,
  ).then((res) => res.json());

  return { data };
};

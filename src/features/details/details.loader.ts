import { API_CONFIG } from '../../config';
import type { LoaderParams, LoaderResult } from '../../types';
import type { ModelDetailsPage } from './types';

export const detailsLoader = async ({
  params,
}: LoaderParams): Promise<LoaderResult<ModelDetailsPage>> => {
  const data = await fetch(
    `${API_CONFIG.apiBasePath}/model/details/${params.id}`,
  ).then((res) => res.json());

  return { data };
};

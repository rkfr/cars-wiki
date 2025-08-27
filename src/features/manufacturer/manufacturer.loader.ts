import { API_CONFIG } from '../../config';
import type { LoaderParams, LoaderResult } from '../../types';
import type { ManufacturerSection } from './types';

export const manufacturerLoader = async ({
  params,
}: LoaderParams): Promise<LoaderResult<ManufacturerSection[]>> => {
  const data = await fetch(
    `${API_CONFIG.apiBasePath}/manufacturer/${params.id}`,
  ).then((res) => res.json());

  return { data };
};

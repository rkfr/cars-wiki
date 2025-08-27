import { API_CONFIG } from '../../config';
import type { LoaderResult } from '../../types';
import type { CatalogSection } from './types';

export const catalogLoader = async (): Promise<
  LoaderResult<CatalogSection[]>
> => {
  const data = await fetch(`${API_CONFIG.apiBasePath}/catalog`).then((res) =>
    res.json(),
  );

  return { data };
};

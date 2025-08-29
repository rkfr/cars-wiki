import type { Picture } from '../../types';

export interface ModelGeneration {
  bodyType?: string;
  dimensionsInfo?: string;
  id: string;
  image: Picture;
  inProduction: boolean;
  name: string;
  powerInfo?: string;
  productionYears: string;
}

import type { Picture } from '../../types';

export interface ManufacturerModel {
  id: string;
  image: Picture;
  name: string;
  productionYears?: string;
}

export interface ManufacturerSection {
  letter: string;
  models: ManufacturerModel[];
}

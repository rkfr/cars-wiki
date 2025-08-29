import type { Picture } from '../../types';

export interface ModelEquipment {
  description: string;
  id: string;
  inProduction: boolean;
  productionYears: string;
}

export interface ModelEquipmentPage {
  equipments: ModelEquipment[];
  gallery: Picture[];
  title: string;
}

import type { Picture } from "../../types";

export interface CatalogItem {
  id: string;
  logo: Picture;
  name: string;
}

export interface CatalogSection {
  brands: CatalogItem[];
  letter: string;
}

import { createBrowserRouter } from 'react-router';
import { NotFound } from '../components';
import { Catalog, catalogLoader } from '../features/catalog';
import { Details, detailsLoader } from '../features/details';
import { equipmentLoader, Equipments } from '../features/equipments';
import Generations, { generationLoader } from '../features/generations';
import { Manufacturer, manufacturerLoader } from '../features/manufacturer';
import App from './App';

export const router = createBrowserRouter([
  {
    Component: App,
    HydrateFallback: () => null,
    children: [
      {
        index: true,
        Component: Catalog,
        loader: catalogLoader,
      },
      {
        path: '/manufacturer/:id',
        Component: Manufacturer,
        loader: manufacturerLoader,
      },
      {
        path: 'generation/:id',
        Component: Generations,
        loader: generationLoader,
      },
      {
        path: '/equipment/:id',
        Component: Equipments,
        loader: equipmentLoader,
      },
      {
        path: '/details/:id',
        Component: Details,
        loader: detailsLoader,
      },
      {
        path: '*',
        Component: NotFound,
      },
    ],
  },
]);

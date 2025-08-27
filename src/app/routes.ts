import { createBrowserRouter } from 'react-router';
import { NotFound } from '../components';
import { Catalog, catalogLoader } from '../features/catalog';
import Details from '../features/details';
import Equipments from '../features/equipments';
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
      },
      {
        path: '/details/:id',
        Component: Details,
      },
      {
        path: '*',
        Component: NotFound,
      },
    ],
  },
]);

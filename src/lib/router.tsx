import Layout from '@/components/features/layout';
import Home from '@/pages/home-page';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'products',
        lazy: () =>
          import('@/pages/products-page').then((mod) => ({ Component: mod.default })),
      },
    ],
  },
]);

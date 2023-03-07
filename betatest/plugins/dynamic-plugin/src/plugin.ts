import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const dynamicPluginPlugin = createPlugin({
  id: 'dynamic-plugin',
  routes: {
    root: rootRouteRef,
  },
});

export const DynamicPluginPage = dynamicPluginPlugin.provide(
  createRoutableExtension({
    name: 'DynamicPluginPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);

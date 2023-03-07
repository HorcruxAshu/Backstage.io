import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { dynamicPluginPlugin, DynamicPluginPage } from '../src/plugin';

createDevApp()
  .registerPlugin(dynamicPluginPlugin)
  .addPage({
    element: <DynamicPluginPage />,
    title: 'Root Page',
    path: '/dynamic-plugin'
  })
  .render();

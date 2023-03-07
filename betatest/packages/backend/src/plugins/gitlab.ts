// packages/backend/src/plugins/gitlab.ts
import { PluginEnvironment } from '../types';
import { Router } from 'express-serve-static-core';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createRouter } from '@immobiliarelabs/backstage-plugin-gitlab-backend';

export default async function createPlugin(
    env: PluginEnvironment
): Promise<Router> {
    return createRouter({
        logger: env.logger,
        config: env.config,
    });
}
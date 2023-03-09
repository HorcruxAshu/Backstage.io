/* eslint-disable import/no-extraneous-dependencies */
import { createTemplateAction } from '@backstage/plugin-scaffolder-node';
import { promisify } from 'util';

const { exec } = require("child_process");

const promisifiedExec = promisify(exec);

export const createNewFileAction = () => {
  return createTemplateAction<{ pluginURL: string; plugin: string }>({
    id: 'myplugin:install-plugin',
    schema: {
      input: {
        required: ['pluginURL', 'plugin'],
        type: 'object',
        properties: {
          pluginURL: {
            type: 'string',
            title: 'PluginURL',
            description: 'The URL of the plugin',
          },
          plugin: {
            type: 'string',
            title: 'Plugin',
            description: 'The name of the Plugin',
          },
        },
      },
    },
    async handler({input}) {
      const  pluginURL = input.pluginURL;
      console.log("Installing Plugins");
      if(pluginURL.length > 1){
        await exec(`cd .. && yarn add ${pluginURL}`)
      }
    },
  });
};
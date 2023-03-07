import { dynamicPluginPlugin } from './plugin';

describe('dynamic-plugin', () => {
  it('should export plugin', () => {
    expect(dynamicPluginPlugin).toBeDefined();
  });
});

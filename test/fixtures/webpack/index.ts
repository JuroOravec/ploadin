import type { Configuration } from 'webpack';

import config from './config';
import pWebpack from '../../lib/p-webpack';
import { PloadinSubclass } from './subclasses';

export { PloadinSubclass, RegisteredPloadinSubclass } from './subclasses';

export async function runWebpack(configOverrides: Configuration = {}) {
  const mergedConfig: Configuration = {
    ...config,
    ...configOverrides,
    module: {
      rules: [...(configOverrides?.module?.rules || [])],
    },
    plugins: [...(configOverrides?.plugins || [])],
  };

  const stats = await pWebpack(mergedConfig);
  const info = stats.toJson();
  expect(info.errors).toHaveLength(0);
  expect(info.warnings).toHaveLength(0);
  return stats;
}

export function initState() {
  const states: any = {};
  return {
    dump: (stateName: string, inst: PloadinSubclass) => {
      states[stateName] = {
        loader: inst.messageFromLoader,
        pitch: inst.messageFromPitch,
        plugin: inst.messageFromPlugin,
      };
    },
    get: () => ({ ...states }),
  };
}

import path from 'path';
import type { Configuration } from 'webpack';

const config: Configuration = {
  mode: 'development',
  context: path.dirname(module.filename),
  entry: './entry.ts',
  output: {
    path: path.join(process.cwd(), 'temp', 'test', 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [],
  },
  plugins: [],
};

export default config;

import { Compiler } from 'webpack';

import { Ploadin, registerSubclass } from '../../../src';

export class PloadinSubclass extends Ploadin {
  constructor(
    public dumpState: (name: string, ...args: any) => void = () => null,
    public messageFromLoader: string = 'loader',
    public messageFromPitch: string = 'pitch',
    public messageFromPlugin: string = 'plugin',
  ) {
    super();
  }

  apply(compiler: Compiler) {
    compiler.hooks.beforeCompile.tapAsync(
      'SubclassPloadin',
      (stats, callback) => {
        this.dumpState('pluginBeforeCompile_start', this);
        this.messageFromPlugin = 'Bonjour';
        this.dumpState('pluginBeforeCompile_end', this);
        callback();
      },
    );

    compiler.hooks.afterCompile.tapAsync(
      'SubclassPloadin',
      (compilation, callback) => {
        this.dumpState('pluginAfterCompile_end', this);
        callback();
      },
    );
  }

  loader(loaderContext: any, source?: string, ...args: any[]) {
    this.dumpState('loader_start', this);
    this.messageFromLoader = 'Ahoj';
    this.dumpState('loader_end', this);
    return source;
  }

  pitch(...args: any[]) {
    this.dumpState('pitch_start', this);
    this.messageFromPitch = 'Tschuess';
    this.dumpState('pitch_end', this);
  }
}

export class RegisteredPloadinSubclass extends PloadinSubclass {}
registerSubclass(RegisteredPloadinSubclass);

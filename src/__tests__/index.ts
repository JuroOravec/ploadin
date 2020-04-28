import webpack from 'webpack';

import { Ploadin } from '..';
import {
  runWebpack,
  initState,
  PloadinSubclass,
  RegisteredPloadinSubclass,
} from '../../test/fixtures/webpack';

describe('Ploadin', () => {
  test('[meta] setup works', () => {
    expect(true).toBe(true);
  });

  describe.each([
    [Ploadin.name, Ploadin, false, true],
    [PloadinSubclass.name, PloadinSubclass, true, false],
    [RegisteredPloadinSubclass.name, RegisteredPloadinSubclass, true, true],
  ])('class %s', (klassName, klass, isSubclass, isRegistered) => {
    // Do this test first before initialization as by initializing, we register
    // also unregistered classes
    test('static version of asLoader includes class id, no instance id', () => {
      const {
        query: { classId, instanceId },
      } = klass.asLoader;
      isRegistered
        ? expect(typeof classId).toBe('number')
        : expect(typeof classId).not.toBe('number');
      expect(instanceId).toBeUndefined();
    });

    test('initializes', () => {
      expect(new klass()).toBeTruthy();
    });

    test('static version of asLoader includes loader path', () => {
      const { loader } = klass.asLoader;
      expect(typeof loader).toBe('string');
      expect(loader).toBe(require.resolve('../loader'));
    });
  });

  describe.each([
    [Ploadin.name, Ploadin],
    [PloadinSubclass.name, PloadinSubclass],
    [RegisteredPloadinSubclass.name, RegisteredPloadinSubclass],
  ])('%s instance', (className, klass) => {
    let ploadin: Ploadin;

    beforeAll(() => {
      ploadin = new klass();
    });

    test('instance version of asLoader includes class id and instance id', () => {
      const {
        query: { classId, instanceId },
      } = ploadin.asLoader;
      expect(typeof classId).toBe('number');
      expect(typeof instanceId).toBe('number');
    });

    test('instance version of asLoader includes loader path', () => {
      const { loader } = Ploadin.asLoader;
      expect(typeof loader).toBe('string');
      expect(loader).toBe(require.resolve('../loader'));
    });
  });

  describe('in webpack', () => {
    const prepConfig = (instance: Ploadin) =>
      ({
        plugins: [instance as any],
        module: {
          rules: [
            {
              test: /\.ts$/u,
              use: instance.asLoader,
            },
          ],
        },
      } as webpack.Configuration);

    test('[meta] webpack works', async () => {
      const stats = await runWebpack();
      expect(stats).toBeTruthy();
    });

    test('non-subclassed should fail in webpack', async () => {
      const ploadin = new Ploadin();
      const config = prepConfig(ploadin);
      expect(runWebpack(config)).rejects.toThrowError();
    });

    describe.each([
      [PloadinSubclass.name, PloadinSubclass],
      [RegisteredPloadinSubclass.name, RegisteredPloadinSubclass],
    ])(
      'subclass %s with loader, pitch and apply methods',
      (klassName, klass) => {
        let result: any;
        let states: any;

        beforeAll(async () => {
          const state = initState();
          const ploadin = new klass(state.dump);
          const config = prepConfig(ploadin);
          result = await runWebpack(config);
          states = state.get();
        });

        test('properly subclassed should pass in webpack', () => {
          expect(result).toBeDefined();
        });

        test('instance should be accessed by plugin, loader and pitch', () => {
          const { loader, pitch, plugin } = states.pluginAfterCompile_end;
          expect(loader).not.toBe('loader');
          expect(pitch).not.toBe('pitch');
          expect(plugin).not.toBe('plugin');
        });
      },
    );
  });
});

import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  jest,
} from '@jest/globals';
import Cli from './cli';
import RenovateConfig from '../../test/renovate-config';

describe('Cli', () => {
  const mocks = {
    console: {
      log: jest.spyOn(console, 'log'),
      error: jest.spyOn(console, 'error'),
    },
    renovateConfig: jest.spyOn(RenovateConfig.prototype, 'write'),
    exit: jest.spyOn(process, 'exit'),
  };
  beforeEach((): void => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    mocks.console.log.mockImplementation(() => {});

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    mocks.console.error.mockImplementation(() => {});

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    mocks.renovateConfig.mockImplementation(() => {});

    // @ts-expect-error: TS2769: No overload matches this call.
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    mocks.exit.mockImplementation(() => {});
  });

  afterEach((): void => {
    mocks.console.log.mockReset();
    mocks.console.error.mockReset();
    mocks.exit.mockReset();
  });

  describe('Exits with error code and message', () => {
    it('If no input is given', () => {
      const cli = new Cli();
      cli.run([]);

      expect(mocks.console.log).not.toHaveBeenCalled();
      expect(mocks.console.error).toHaveBeenCalled();
      expect(mocks.exit).toHaveBeenCalledWith(1);
    });

    it("If 'filePath' extension is not JSON", () => {
      const cli = new Cli();
      cli.run(['config.js']);

      expect(mocks.console.log).not.toHaveBeenCalled();
      expect(mocks.console.error).toHaveBeenCalled();
      expect(mocks.exit).toHaveBeenCalledWith(1);
    });
  });

  it("Calls 'RenovateConfig.write()' and exits with success code", () => {
    const cli = new Cli();
    cli.run(['config-test.json']);

    expect(mocks.renovateConfig).toHaveBeenCalledTimes(1);
    expect(mocks.exit).toHaveBeenCalledWith(0);
  });

  describe('Exits with success code and message', () => {
    it.each(['--help', '-h', '--version', '-v'])(
      'If only the `%s` option is given',
      (option) => {
        const cli = new Cli();
        cli.run([option]);

        expect(mocks.exit).toHaveBeenCalledWith(0);
      },
    );
  });
});

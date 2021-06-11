import * as defaultRenovateConfig from '../src/renovate-config';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { afterEach, beforeEach, describe, expect, it } from '@jest/globals';
import RenovateConfig from './renovate-config';

describe('RenovateConfig', () => {
  let tempDirectory: string;
  const baseName = 'config-test';
  const fileName = `${baseName}.json`;
  let tempFilePath: string;
  let renovateConfig: RenovateConfig;

  beforeEach(() => {
    tempDirectory = fs.mkdtempSync(
      path.join(os.tmpdir(), 'RenovateConfig-test'),
    );
    tempFilePath = path.join(tempDirectory, fileName);

    renovateConfig = new RenovateConfig(tempFilePath);
  });

  afterEach(() => {
    fs.rmSync(tempDirectory, { recursive: true });
  });

  it('throws if the configuration file is not has no extension', () => {
    expect(() => {
      new RenovateConfig(path.join(tempDirectory, baseName));
    }).toThrow(/Path must have '.*?' as extension./);
  });

  it("throws if the extension of the configuration file is not '.json'", () => {
    expect(() => {
      new RenovateConfig(path.join(tempDirectory, `${baseName}.js`));
    }).toThrow(/Path must have '.*?' as extension./);
  });

  it("uses '.json' extension for the configuration file", () => {
    expect(renovateConfig.extension).toEqual('json');
  });

  it("'path' contains the given given file path", () => {
    expect(renovateConfig.path).toEqual(tempFilePath);
  });

  it('enables dry-run mode', () => {
    expect(renovateConfig.config.dryRun).toEqual(true);
  });

  /**
   * This test isn't extensive, but verifies that the default Renovate config of
   * this repository is extended by the test config. This test checks keys that
   * would not need to be changed, and thus not defined, by the test config.
   */
  it('extends the default Renovate config', () => {
    expect(renovateConfig.config.platform).toEqual(
      defaultRenovateConfig.platform,
    );
    expect(renovateConfig.config.onboarding).toEqual(
      defaultRenovateConfig.onboarding,
    );
    expect(renovateConfig.config.gitAuthor).toEqual(
      defaultRenovateConfig.gitAuthor,
    );
  });

  describe('write()', () => {
    it('throws if the directory of the given path is a file', () => {
      fs.rmSync(tempDirectory, { recursive: true });
      fs.writeFileSync(tempDirectory, '\n');
      expect(() => {
        renovateConfig.write();
      }).toThrow(/Path '.*?' must be a directory./);
    });

    it('creates the directory if it does not exist', () => {
      fs.rmSync(tempDirectory, { recursive: true });
      expect(fs.existsSync(tempDirectory)).toEqual(false);
      renovateConfig.write();
      expect(fs.existsSync(tempDirectory)).toEqual(true);
    });

    it('writes the config to file', () => {
      renovateConfig.write();
      expect(fs.existsSync(tempFilePath)).toEqual(true);
      const readData = fs.readFileSync(tempFilePath, { encoding: 'utf-8' });

      const expectedData = `${JSON.stringify(
        renovateConfig.config,
        undefined,
        2,
      )}\n`;
      expect(readData).toEqual(expectedData);
    });
  });
});

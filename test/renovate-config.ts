import * as fs from 'fs';
import * as path from 'path';
import * as renovateConfig from '../src/renovate-config';
import { JsonObject } from '../src/json';

class RenovateConfig {
  readonly extension = 'json';
  readonly path: string;
  readonly config: Readonly<JsonObject> = {
    ...renovateConfig,
    dryRun: true,
    logLevel: 'debug',
  };

  constructor(filePath: string) {
    if (path.extname(filePath) !== `.${this.extension}`) {
      throw new Error(`Path must have '${this.extension}' as extension.`);
    }

    this.path = path.resolve(filePath);
  }

  write(): void {
    const dirname = path.dirname(this.path);

    if (!fs.existsSync(dirname)) {
      fs.mkdirSync(dirname, { recursive: true });
    }

    const stats = fs.statSync(dirname);
    if (!stats.isDirectory()) {
      throw new Error(`Path '${dirname}' must be a directory.`);
    }

    const data = JSON.stringify(this.config, undefined, 2);
    fs.writeFileSync(this.path, data + '\n');
  }
}

export default RenovateConfig;

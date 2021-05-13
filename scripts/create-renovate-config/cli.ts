import * as yargs from 'yargs';
import RenovateConfig from '../../test/renovate-config';

type Arguments = yargs.Arguments<{
  filePath: string;
}>;

class Cli {
  readonly name = 'create-renovate-config';

  run(argv: string[]): never {
    const args = this.parse(argv);

    try {
      const renovateConfig = new RenovateConfig(args.filePath);
      renovateConfig.write();
      process.exit(0);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  }

  private parse(argv: string[]): Arguments {
    const args = yargs
      .strict(true)
      .scriptName(this.name)
      .usage(
        '$0 <filePath>',
        'Create Renovate test configuration.',
        (yargs): yargs.Argv => {
          return yargs
            .positional('filePath', {
              describe:
                'Path to the Renovate test configuration JSON file to be created.',
              type: 'string',
            })
            .example(
              '$0 ./dist/test/config.json',
              'Create Renovate test configuration as the given file path.',
            );
        },
      )
      .options({
        version: {
          alias: 'v',
        },
        help: {
          alias: 'h',
        },
      })
      .parse(argv);

    return args as unknown as Arguments;
  }
}

export default Cli;

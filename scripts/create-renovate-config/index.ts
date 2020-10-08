import Cli from './cli';

const cli = new Cli();
cli.run(process.argv.splice(2));

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const help = `
HELP
	help
`;

export const cli = (argv: string[], commands: any): void => {
  yargs(hideBin(argv)).scriptName('mortor').usage(help).command(commands).help().argv;
};

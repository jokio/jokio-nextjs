import { run } from 'jokio'
import { nextjs, express } from '../index';

run(
	express(),
	nextjs({ pagesDirectory: './src/debug' }),
)

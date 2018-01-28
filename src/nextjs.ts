import * as nextjslib from 'next'
import * as Express from 'express'
import { merge } from 'lodash';

const dev = process.env.NODE_ENV !== 'production'


export const nextjs = (props: NextProps = null) => async (state, context) => {
	let { express } = context;

	if (!express)
		throw new Error('[context] express not found')

	const defaultProps: NextProps = {
		pagesDirectory: './src/'
	}

	const { pagesDirectory } = merge(defaultProps, props);

	const nextApp = nextjslib({ dev, dir: pagesDirectory })
	const nextHandler = nextApp.getRequestHandler()

	await nextApp.prepare()

	express.get('*', nextHandler);

	return state
}


export interface NextProps {
	pagesDirectory?: string
}

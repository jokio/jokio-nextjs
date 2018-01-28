import * as nextjslib from 'next'

const dev = process.env.NODE_ENV !== 'production'


export const nextjs = (props: NextProps) => async (state, context) => {
	const { express } = context;

	const nextApp = nextjslib({ dev, dir: props.pagesDirectory })
	const nextHandler = nextApp.getRequestHandler()

	await nextApp.prepare()

	express.get('*', nextHandler);

	return state
}


export interface NextProps {
	pagesDirectory?: string
}

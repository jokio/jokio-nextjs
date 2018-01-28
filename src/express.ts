import * as Express from 'express'
import { merge } from 'lodash';
import { Context } from './context';

export const express = (props: StartProps = null) => (state, context: Context) => {
	const express = Express()

	if (!express)
		throw new Error('[context] express not found')

	const defaultProps: StartProps = {
		port: parseInt(process.env.PORT) || 3000
	}

	const {
		port
	} = merge(defaultProps, props);


	context.express = express;

	return new Promise(resolve => express.listen(port, () => {
		console.log(`server started at: http://localhost:${port}`);
		resolve(state);
	}));
}


export interface StartProps {
	port?: number
}

import * as Express from 'express'
import { merge } from 'lodash';
import { Context } from './context';

export const express = (props: StartProps = null) => (state, context: Context) => {
	const express = Express()

	const defaultProps: StartProps = {
		port: parseInt(process.env.PORT) || 3000,
		autoStart: true,
	}

	const {
		port,
		autoStart,
	} = merge(defaultProps, props);


	context.express = express;

	if (!autoStart) {
		return state;
	}

	return new Promise(resolve => express.listen(port, () => {
		console.log(`server started at: http://localhost:${port}`);
		resolve(state);
	}));
}


export interface StartProps {
	port?: number
	autoStart?: boolean
}

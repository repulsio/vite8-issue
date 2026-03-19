import { SOME_LIST } from './constant.js';

export class Core {
	constructor() {
		console.log('Core created');
		console.log(SOME_LIST);
	}

	start(): void {
		console.log('Core started');
	}
}

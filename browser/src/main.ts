import { Core } from './barrel.js';
import { USE_WEB_WORKER } from './constant.js';
// import { Core } from './Core.js';
// import { SOME_LIST, Core } from './import.js';

// import { CORE, setCore } from './core/singleton.js';

export function main(): void {
	// console.log(SOME_LIST);

	if (USE_WEB_WORKER) {
		return;
	}

	const core = new Core();
	core.start();

	// setCore(core);
	// setCore(new Core());
	console.log('Core created in main thread');

	// CORE.start();
}

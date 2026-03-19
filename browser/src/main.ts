import { USE_WEB_WORKER } from './constant.js';
import { Core } from './Core.js';

if (!USE_WEB_WORKER) {
	const core = new Core();
	console.log('Core created in main thread');
}

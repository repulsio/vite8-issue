import { USE_WEB_WORKER } from './constant.js';
import {} from './main.js';

if (USE_WEB_WORKER) {
	const worker = new Worker(new URL('./worker', import.meta.url), {});
}

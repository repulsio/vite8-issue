import type { Core } from '../import.js';

export let CORE: Core;

export function setCore(core: Core): void {
	CORE = core;
}

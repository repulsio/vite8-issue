import { Core } from './barrel.js';
// import { Core } from './Core.js';
// import { SOME_LIST, Core } from './import.js';

// import { CORE, setCore } from './core/singleton.js';

// console.log(SOME_LIST);

const core = new Core();
core.start();

// setCore(core);
// setCore(new Core());
// console.log('Core created in worker thread');

// CORE.start();

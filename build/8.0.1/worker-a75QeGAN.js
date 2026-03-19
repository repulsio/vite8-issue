(function() {
	//#region src/Core.ts
	var Core = class {
		constructor() {
			console.log("Core created");
		}
	};
	//#endregion
	//#region src/worker.ts
	new Core();
	console.log("Core created in worker thread");
	//#endregion
})();

//# sourceMappingURL=worker-a75QeGAN.js.map
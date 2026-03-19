(function() {
	//#region src/Core.ts
	var Core = class {
		constructor() {
			console.log("Core created");
		}
		start() {
			console.log("Core started");
		}
	};
	//#endregion
	//#region src/worker.ts
	new Core().start();
	//#endregion
})();

//# sourceMappingURL=worker-LKArviPS.js.map
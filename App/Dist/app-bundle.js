/******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate"];
/******/ 	window["webpackHotUpdate"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "9b7a010de1335152f617";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "app";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire("./static/demo/main.js")(__webpack_require__.s = "./static/demo/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./App/Static/AppStyles.css":
/*!**********************************!*\
  !*** ./App/Static/AppStyles.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--4-1!./AppStyles.css */ "./node_modules/css-loader/index.js?!./App/Static/AppStyles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--4-1!./AppStyles.css */ "./node_modules/css-loader/index.js?!./App/Static/AppStyles.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--4-1!./AppStyles.css */ "./node_modules/css-loader/index.js?!./App/Static/AppStyles.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./App/Static/styleConfigurator.js":
/*!*****************************************!*\
  !*** ./App/Static/styleConfigurator.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var settings = __webpack_require__(/*! ../../rougeSettings.json */ "./rougeSettings.json");
var Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.min.js");
var WebFont = __webpack_require__(/*! webfontloader */ "./node_modules/webfontloader/webfontloader.js");

window.addEventListener('load', function() {
	/* eslint-disable no-unused-vars */
	var cssPanel = new Vue({
		el: '#css-panel',
		data: {
			fontSize: 20,
			googleFonts: this.getGoogleFonts,
			selectedGoogleFont: { main: '', alt: '', title: '', titleAlt: '' },
		},
		methods: {
			updateCssProperty: function() {
				document.documentElement.style.setProperty('--font-size', this.fontSize + 'px');
			},
			updateCssFont: function(type) {
				WebFont.load({
					google: {
						families: [this.selectedGoogleFont[type]],
					},
				});
				document.documentElement.style.setProperty('--font-family-' + type, this.selectedGoogleFont[type]);
			},
		},
		mounted: function() {
			var request = new XMLHttpRequest();

			request.open(
				'GET',
				'https://www.googleapis.com/webfonts/v1/webfonts?sort=alpha&key=' + settings.googleFontKey
			);
			var self = this;
			request.onreadystatechange = function() {
				if (request.readyState === 4) {
					if (request.status === 200) {
						var data = JSON.parse(request.responseText);

						self.googleFonts = data.items;
					}
				}
			};
			request.send();
		},
	});
});


/***/ }),

/***/ "./node_modules/ansi-html/index.js":
/*!*****************************************!*\
  !*** ./node_modules/ansi-html/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = ansiHTML

// Reference to https://github.com/sindresorhus/ansi-regex
var _regANSI = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/

var _defColors = {
  reset: ['fff', '000'], // [FOREGROUD_COLOR, BACKGROUND_COLOR]
  black: '000',
  red: 'ff0000',
  green: '209805',
  yellow: 'e8bf03',
  blue: '0000ff',
  magenta: 'ff00ff',
  cyan: '00ffee',
  lightgrey: 'f0f0f0',
  darkgrey: '888'
}
var _styles = {
  30: 'black',
  31: 'red',
  32: 'green',
  33: 'yellow',
  34: 'blue',
  35: 'magenta',
  36: 'cyan',
  37: 'lightgrey'
}
var _openTags = {
  '1': 'font-weight:bold', // bold
  '2': 'opacity:0.5', // dim
  '3': '<i>', // italic
  '4': '<u>', // underscore
  '8': 'display:none', // hidden
  '9': '<del>' // delete
}
var _closeTags = {
  '23': '</i>', // reset italic
  '24': '</u>', // reset underscore
  '29': '</del>' // reset delete
}

;[0, 21, 22, 27, 28, 39, 49].forEach(function (n) {
  _closeTags[n] = '</span>'
})

/**
 * Converts text with ANSI color codes to HTML markup.
 * @param {String} text
 * @returns {*}
 */
function ansiHTML (text) {
  // Returns the text if the string has no ANSI escape code.
  if (!_regANSI.test(text)) {
    return text
  }

  // Cache opened sequence.
  var ansiCodes = []
  // Replace with markup.
  var ret = text.replace(/\033\[(\d+)*m/g, function (match, seq) {
    var ot = _openTags[seq]
    if (ot) {
      // If current sequence has been opened, close it.
      if (!!~ansiCodes.indexOf(seq)) { // eslint-disable-line no-extra-boolean-cast
        ansiCodes.pop()
        return '</span>'
      }
      // Open tag.
      ansiCodes.push(seq)
      return ot[0] === '<' ? ot : '<span style="' + ot + ';">'
    }

    var ct = _closeTags[seq]
    if (ct) {
      // Pop sequence
      ansiCodes.pop()
      return ct
    }
    return ''
  })

  // Make sure tags are closed.
  var l = ansiCodes.length
  ;(l > 0) && (ret += Array(l + 1).join('</span>'))

  return ret
}

/**
 * Customize colors.
 * @param {Object} colors reference to _defColors
 */
ansiHTML.setColors = function (colors) {
  if (typeof colors !== 'object') {
    throw new Error('`colors` parameter must be an Object.')
  }

  var _finalColors = {}
  for (var key in _defColors) {
    var hex = colors.hasOwnProperty(key) ? colors[key] : null
    if (!hex) {
      _finalColors[key] = _defColors[key]
      continue
    }
    if ('reset' === key) {
      if (typeof hex === 'string') {
        hex = [hex]
      }
      if (!Array.isArray(hex) || hex.length === 0 || hex.some(function (h) {
        return typeof h !== 'string'
      })) {
        throw new Error('The value of `' + key + '` property must be an Array and each item could only be a hex string, e.g.: FF0000')
      }
      var defHexColor = _defColors[key]
      if (!hex[0]) {
        hex[0] = defHexColor[0]
      }
      if (hex.length === 1 || !hex[1]) {
        hex = [hex[0]]
        hex.push(defHexColor[1])
      }

      hex = hex.slice(0, 2)
    } else if (typeof hex !== 'string') {
      throw new Error('The value of `' + key + '` property must be a hex string, e.g.: FF0000')
    }
    _finalColors[key] = hex
  }
  _setTags(_finalColors)
}

/**
 * Reset colors.
 */
ansiHTML.reset = function () {
  _setTags(_defColors)
}

/**
 * Expose tags, including open and close.
 * @type {Object}
 */
ansiHTML.tags = {}

if (Object.defineProperty) {
  Object.defineProperty(ansiHTML.tags, 'open', {
    get: function () { return _openTags }
  })
  Object.defineProperty(ansiHTML.tags, 'close', {
    get: function () { return _closeTags }
  })
} else {
  ansiHTML.tags.open = _openTags
  ansiHTML.tags.close = _closeTags
}

function _setTags (colors) {
  // reset all
  _openTags['0'] = 'font-weight:normal;opacity:1;color:#' + colors.reset[0] + ';background:#' + colors.reset[1]
  // inverse
  _openTags['7'] = 'color:#' + colors.reset[1] + ';background:#' + colors.reset[0]
  // dark grey
  _openTags['90'] = 'color:#' + colors.darkgrey

  for (var code in _styles) {
    var color = _styles[code]
    var oriColor = colors[color] || '000'
    _openTags[code] = 'color:#' + oriColor
    code = parseInt(code)
    _openTags[(code + 10).toString()] = 'background:#' + oriColor
  }
}

ansiHTML.reset()


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./App/Static/AppStyles.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./App/Static/AppStyles.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/* Application styles : edit at you're own risk :) */\r\n\r\n:root {\r\n\t--app-ratio: 1.6em;\r\n}\r\n#css-panel {\r\n\tbox-sizing: border-box;\r\n\twidth: 300px;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tbottom: 0;\r\n\tright: 0;\r\n\tfont-family: Arial, Helvetica, sans-serif;\r\n\tfont-size: 20px;\r\n\tbackground: #fff;\r\n\tpadding: var(--app-ratio);\r\n\tbackground: url('/images/hip-square.png'), #fff;\r\n}\r\n#css-panel input,\r\n#css-panel select {\r\n\tpadding: var(--app-ratio) calc(var(--app-ratio) / 4) calc(var(--app-ratio) / 4) calc(var(--app-ratio) / 4);\r\n\twidth: 100%;\r\n\tmargin: -0.5em 0 calc(var(--app-ratio) / 2);\r\n}\r\n#css-panel label {\r\n\tmargin: var(--app-ratio) 0;\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\tz-index: 10;\r\n}\r\n#css-panel .css-panel__label {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tz-index: 10;\r\n\tbackground: #fff;\r\n}\r\n", "", {"version":3,"sources":["C:/projects/rougeFramework/App/Static/AppStyles.css"],"names":[],"mappings":"AAAA,qDAAqD;;AAErD;CACC,mBAAmB;CACnB;AACD;CACC,uBAAuB;CACvB,aAAa;CACb,gBAAgB;CAChB,OAAO;CACP,UAAU;CACV,SAAS;CACT,0CAA0C;CAC1C,gBAAgB;CAChB,iBAAiB;CACjB,0BAA0B;CAC1B,gDAAgD;CAChD;AACD;;CAEC,2GAA2G;CAC3G,YAAY;CACZ,4CAA4C;CAC5C;AACD;CACC,2BAA2B;CAC3B,eAAe;CACf,mBAAmB;CACnB,YAAY;CACZ;AACD;CACC,mBAAmB;CACnB,sBAAsB;CACtB,YAAY;CACZ,iBAAiB;CACjB","file":"AppStyles.css","sourcesContent":["/* Application styles : edit at you're own risk :) */\r\n\r\n:root {\r\n\t--app-ratio: 1.6em;\r\n}\r\n#css-panel {\r\n\tbox-sizing: border-box;\r\n\twidth: 300px;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tbottom: 0;\r\n\tright: 0;\r\n\tfont-family: Arial, Helvetica, sans-serif;\r\n\tfont-size: 20px;\r\n\tbackground: #fff;\r\n\tpadding: var(--app-ratio);\r\n\tbackground: url('/images/hip-square.png'), #fff;\r\n}\r\n#css-panel input,\r\n#css-panel select {\r\n\tpadding: var(--app-ratio) calc(var(--app-ratio) / 4) calc(var(--app-ratio) / 4) calc(var(--app-ratio) / 4);\r\n\twidth: 100%;\r\n\tmargin: -0.5em 0 calc(var(--app-ratio) / 2);\r\n}\r\n#css-panel label {\r\n\tmargin: var(--app-ratio) 0;\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\tz-index: 10;\r\n}\r\n#css-panel .css-panel__label {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tz-index: 10;\r\n\tbackground: #fff;\r\n}\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./static/demo/styles.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./static/demo/styles.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "html {\r\n\tfont-family: var(--font-family-main);\r\n\tbackground: saddlebrown;\r\n\tfont-size: var(--font-size);\r\n}\r\n", "", {"version":3,"sources":["C:/projects/rougeFramework/static/demo/styles.css"],"names":[],"mappings":"AAAA;CACC,qCAAqC;CACrC,wBAAwB;CACxB,4BAA4B;CAC5B","file":"styles.css","sourcesContent":["html {\r\n\tfont-family: var(--font-family-main);\r\n\tbackground: saddlebrown;\r\n\tfont-size: var(--font-size);\r\n}\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/html-entities/index.js":
/*!*********************************************!*\
  !*** ./node_modules/html-entities/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  XmlEntities: __webpack_require__(/*! ./lib/xml-entities.js */ "./node_modules/html-entities/lib/xml-entities.js"),
  Html4Entities: __webpack_require__(/*! ./lib/html4-entities.js */ "./node_modules/html-entities/lib/html4-entities.js"),
  Html5Entities: __webpack_require__(/*! ./lib/html5-entities.js */ "./node_modules/html-entities/lib/html5-entities.js"),
  AllHtmlEntities: __webpack_require__(/*! ./lib/html5-entities.js */ "./node_modules/html-entities/lib/html5-entities.js")
};


/***/ }),

/***/ "./node_modules/html-entities/lib/html4-entities.js":
/*!**********************************************************!*\
  !*** ./node_modules/html-entities/lib/html4-entities.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var HTML_ALPHA = ['apos', 'nbsp', 'iexcl', 'cent', 'pound', 'curren', 'yen', 'brvbar', 'sect', 'uml', 'copy', 'ordf', 'laquo', 'not', 'shy', 'reg', 'macr', 'deg', 'plusmn', 'sup2', 'sup3', 'acute', 'micro', 'para', 'middot', 'cedil', 'sup1', 'ordm', 'raquo', 'frac14', 'frac12', 'frac34', 'iquest', 'Agrave', 'Aacute', 'Acirc', 'Atilde', 'Auml', 'Aring', 'Aelig', 'Ccedil', 'Egrave', 'Eacute', 'Ecirc', 'Euml', 'Igrave', 'Iacute', 'Icirc', 'Iuml', 'ETH', 'Ntilde', 'Ograve', 'Oacute', 'Ocirc', 'Otilde', 'Ouml', 'times', 'Oslash', 'Ugrave', 'Uacute', 'Ucirc', 'Uuml', 'Yacute', 'THORN', 'szlig', 'agrave', 'aacute', 'acirc', 'atilde', 'auml', 'aring', 'aelig', 'ccedil', 'egrave', 'eacute', 'ecirc', 'euml', 'igrave', 'iacute', 'icirc', 'iuml', 'eth', 'ntilde', 'ograve', 'oacute', 'ocirc', 'otilde', 'ouml', 'divide', 'oslash', 'ugrave', 'uacute', 'ucirc', 'uuml', 'yacute', 'thorn', 'yuml', 'quot', 'amp', 'lt', 'gt', 'OElig', 'oelig', 'Scaron', 'scaron', 'Yuml', 'circ', 'tilde', 'ensp', 'emsp', 'thinsp', 'zwnj', 'zwj', 'lrm', 'rlm', 'ndash', 'mdash', 'lsquo', 'rsquo', 'sbquo', 'ldquo', 'rdquo', 'bdquo', 'dagger', 'Dagger', 'permil', 'lsaquo', 'rsaquo', 'euro', 'fnof', 'Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Eta', 'Theta', 'Iota', 'Kappa', 'Lambda', 'Mu', 'Nu', 'Xi', 'Omicron', 'Pi', 'Rho', 'Sigma', 'Tau', 'Upsilon', 'Phi', 'Chi', 'Psi', 'Omega', 'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'eta', 'theta', 'iota', 'kappa', 'lambda', 'mu', 'nu', 'xi', 'omicron', 'pi', 'rho', 'sigmaf', 'sigma', 'tau', 'upsilon', 'phi', 'chi', 'psi', 'omega', 'thetasym', 'upsih', 'piv', 'bull', 'hellip', 'prime', 'Prime', 'oline', 'frasl', 'weierp', 'image', 'real', 'trade', 'alefsym', 'larr', 'uarr', 'rarr', 'darr', 'harr', 'crarr', 'lArr', 'uArr', 'rArr', 'dArr', 'hArr', 'forall', 'part', 'exist', 'empty', 'nabla', 'isin', 'notin', 'ni', 'prod', 'sum', 'minus', 'lowast', 'radic', 'prop', 'infin', 'ang', 'and', 'or', 'cap', 'cup', 'int', 'there4', 'sim', 'cong', 'asymp', 'ne', 'equiv', 'le', 'ge', 'sub', 'sup', 'nsub', 'sube', 'supe', 'oplus', 'otimes', 'perp', 'sdot', 'lceil', 'rceil', 'lfloor', 'rfloor', 'lang', 'rang', 'loz', 'spades', 'clubs', 'hearts', 'diams'];
var HTML_CODES = [39, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 34, 38, 60, 62, 338, 339, 352, 353, 376, 710, 732, 8194, 8195, 8201, 8204, 8205, 8206, 8207, 8211, 8212, 8216, 8217, 8218, 8220, 8221, 8222, 8224, 8225, 8240, 8249, 8250, 8364, 402, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 931, 932, 933, 934, 935, 936, 937, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 977, 978, 982, 8226, 8230, 8242, 8243, 8254, 8260, 8472, 8465, 8476, 8482, 8501, 8592, 8593, 8594, 8595, 8596, 8629, 8656, 8657, 8658, 8659, 8660, 8704, 8706, 8707, 8709, 8711, 8712, 8713, 8715, 8719, 8721, 8722, 8727, 8730, 8733, 8734, 8736, 8743, 8744, 8745, 8746, 8747, 8756, 8764, 8773, 8776, 8800, 8801, 8804, 8805, 8834, 8835, 8836, 8838, 8839, 8853, 8855, 8869, 8901, 8968, 8969, 8970, 8971, 9001, 9002, 9674, 9824, 9827, 9829, 9830];

var alphaIndex = {};
var numIndex = {};

var i = 0;
var length = HTML_ALPHA.length;
while (i < length) {
    var a = HTML_ALPHA[i];
    var c = HTML_CODES[i];
    alphaIndex[a] = String.fromCharCode(c);
    numIndex[c] = a;
    i++;
}

/**
 * @constructor
 */
function Html4Entities() {}

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.prototype.decode = function(str) {
    if (!str || !str.length) {
        return '';
    }
    return str.replace(/&(#?[\w\d]+);?/g, function(s, entity) {
        var chr;
        if (entity.charAt(0) === "#") {
            var code = entity.charAt(1).toLowerCase() === 'x' ?
                parseInt(entity.substr(2), 16) :
                parseInt(entity.substr(1));

            if (!(isNaN(code) || code < -32768 || code > 65535)) {
                chr = String.fromCharCode(code);
            }
        } else {
            chr = alphaIndex[entity];
        }
        return chr || s;
    });
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.decode = function(str) {
    return new Html4Entities().decode(str);
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.prototype.encode = function(str) {
    if (!str || !str.length) {
        return '';
    }
    var strLength = str.length;
    var result = '';
    var i = 0;
    while (i < strLength) {
        var alpha = numIndex[str.charCodeAt(i)];
        result += alpha ? "&" + alpha + ";" : str.charAt(i);
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.encode = function(str) {
    return new Html4Entities().encode(str);
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.prototype.encodeNonUTF = function(str) {
    if (!str || !str.length) {
        return '';
    }
    var strLength = str.length;
    var result = '';
    var i = 0;
    while (i < strLength) {
        var cc = str.charCodeAt(i);
        var alpha = numIndex[cc];
        if (alpha) {
            result += "&" + alpha + ";";
        } else if (cc < 32 || cc > 126) {
            result += "&#" + cc + ";";
        } else {
            result += str.charAt(i);
        }
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.encodeNonUTF = function(str) {
    return new Html4Entities().encodeNonUTF(str);
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.prototype.encodeNonASCII = function(str) {
    if (!str || !str.length) {
        return '';
    }
    var strLength = str.length;
    var result = '';
    var i = 0;
    while (i < strLength) {
        var c = str.charCodeAt(i);
        if (c <= 255) {
            result += str[i++];
            continue;
        }
        result += '&#' + c + ';';
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.encodeNonASCII = function(str) {
    return new Html4Entities().encodeNonASCII(str);
};

module.exports = Html4Entities;


/***/ }),

/***/ "./node_modules/html-entities/lib/html5-entities.js":
/*!**********************************************************!*\
  !*** ./node_modules/html-entities/lib/html5-entities.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ENTITIES = [['Aacute', [193]], ['aacute', [225]], ['Abreve', [258]], ['abreve', [259]], ['ac', [8766]], ['acd', [8767]], ['acE', [8766, 819]], ['Acirc', [194]], ['acirc', [226]], ['acute', [180]], ['Acy', [1040]], ['acy', [1072]], ['AElig', [198]], ['aelig', [230]], ['af', [8289]], ['Afr', [120068]], ['afr', [120094]], ['Agrave', [192]], ['agrave', [224]], ['alefsym', [8501]], ['aleph', [8501]], ['Alpha', [913]], ['alpha', [945]], ['Amacr', [256]], ['amacr', [257]], ['amalg', [10815]], ['amp', [38]], ['AMP', [38]], ['andand', [10837]], ['And', [10835]], ['and', [8743]], ['andd', [10844]], ['andslope', [10840]], ['andv', [10842]], ['ang', [8736]], ['ange', [10660]], ['angle', [8736]], ['angmsdaa', [10664]], ['angmsdab', [10665]], ['angmsdac', [10666]], ['angmsdad', [10667]], ['angmsdae', [10668]], ['angmsdaf', [10669]], ['angmsdag', [10670]], ['angmsdah', [10671]], ['angmsd', [8737]], ['angrt', [8735]], ['angrtvb', [8894]], ['angrtvbd', [10653]], ['angsph', [8738]], ['angst', [197]], ['angzarr', [9084]], ['Aogon', [260]], ['aogon', [261]], ['Aopf', [120120]], ['aopf', [120146]], ['apacir', [10863]], ['ap', [8776]], ['apE', [10864]], ['ape', [8778]], ['apid', [8779]], ['apos', [39]], ['ApplyFunction', [8289]], ['approx', [8776]], ['approxeq', [8778]], ['Aring', [197]], ['aring', [229]], ['Ascr', [119964]], ['ascr', [119990]], ['Assign', [8788]], ['ast', [42]], ['asymp', [8776]], ['asympeq', [8781]], ['Atilde', [195]], ['atilde', [227]], ['Auml', [196]], ['auml', [228]], ['awconint', [8755]], ['awint', [10769]], ['backcong', [8780]], ['backepsilon', [1014]], ['backprime', [8245]], ['backsim', [8765]], ['backsimeq', [8909]], ['Backslash', [8726]], ['Barv', [10983]], ['barvee', [8893]], ['barwed', [8965]], ['Barwed', [8966]], ['barwedge', [8965]], ['bbrk', [9141]], ['bbrktbrk', [9142]], ['bcong', [8780]], ['Bcy', [1041]], ['bcy', [1073]], ['bdquo', [8222]], ['becaus', [8757]], ['because', [8757]], ['Because', [8757]], ['bemptyv', [10672]], ['bepsi', [1014]], ['bernou', [8492]], ['Bernoullis', [8492]], ['Beta', [914]], ['beta', [946]], ['beth', [8502]], ['between', [8812]], ['Bfr', [120069]], ['bfr', [120095]], ['bigcap', [8898]], ['bigcirc', [9711]], ['bigcup', [8899]], ['bigodot', [10752]], ['bigoplus', [10753]], ['bigotimes', [10754]], ['bigsqcup', [10758]], ['bigstar', [9733]], ['bigtriangledown', [9661]], ['bigtriangleup', [9651]], ['biguplus', [10756]], ['bigvee', [8897]], ['bigwedge', [8896]], ['bkarow', [10509]], ['blacklozenge', [10731]], ['blacksquare', [9642]], ['blacktriangle', [9652]], ['blacktriangledown', [9662]], ['blacktriangleleft', [9666]], ['blacktriangleright', [9656]], ['blank', [9251]], ['blk12', [9618]], ['blk14', [9617]], ['blk34', [9619]], ['block', [9608]], ['bne', [61, 8421]], ['bnequiv', [8801, 8421]], ['bNot', [10989]], ['bnot', [8976]], ['Bopf', [120121]], ['bopf', [120147]], ['bot', [8869]], ['bottom', [8869]], ['bowtie', [8904]], ['boxbox', [10697]], ['boxdl', [9488]], ['boxdL', [9557]], ['boxDl', [9558]], ['boxDL', [9559]], ['boxdr', [9484]], ['boxdR', [9554]], ['boxDr', [9555]], ['boxDR', [9556]], ['boxh', [9472]], ['boxH', [9552]], ['boxhd', [9516]], ['boxHd', [9572]], ['boxhD', [9573]], ['boxHD', [9574]], ['boxhu', [9524]], ['boxHu', [9575]], ['boxhU', [9576]], ['boxHU', [9577]], ['boxminus', [8863]], ['boxplus', [8862]], ['boxtimes', [8864]], ['boxul', [9496]], ['boxuL', [9563]], ['boxUl', [9564]], ['boxUL', [9565]], ['boxur', [9492]], ['boxuR', [9560]], ['boxUr', [9561]], ['boxUR', [9562]], ['boxv', [9474]], ['boxV', [9553]], ['boxvh', [9532]], ['boxvH', [9578]], ['boxVh', [9579]], ['boxVH', [9580]], ['boxvl', [9508]], ['boxvL', [9569]], ['boxVl', [9570]], ['boxVL', [9571]], ['boxvr', [9500]], ['boxvR', [9566]], ['boxVr', [9567]], ['boxVR', [9568]], ['bprime', [8245]], ['breve', [728]], ['Breve', [728]], ['brvbar', [166]], ['bscr', [119991]], ['Bscr', [8492]], ['bsemi', [8271]], ['bsim', [8765]], ['bsime', [8909]], ['bsolb', [10693]], ['bsol', [92]], ['bsolhsub', [10184]], ['bull', [8226]], ['bullet', [8226]], ['bump', [8782]], ['bumpE', [10926]], ['bumpe', [8783]], ['Bumpeq', [8782]], ['bumpeq', [8783]], ['Cacute', [262]], ['cacute', [263]], ['capand', [10820]], ['capbrcup', [10825]], ['capcap', [10827]], ['cap', [8745]], ['Cap', [8914]], ['capcup', [10823]], ['capdot', [10816]], ['CapitalDifferentialD', [8517]], ['caps', [8745, 65024]], ['caret', [8257]], ['caron', [711]], ['Cayleys', [8493]], ['ccaps', [10829]], ['Ccaron', [268]], ['ccaron', [269]], ['Ccedil', [199]], ['ccedil', [231]], ['Ccirc', [264]], ['ccirc', [265]], ['Cconint', [8752]], ['ccups', [10828]], ['ccupssm', [10832]], ['Cdot', [266]], ['cdot', [267]], ['cedil', [184]], ['Cedilla', [184]], ['cemptyv', [10674]], ['cent', [162]], ['centerdot', [183]], ['CenterDot', [183]], ['cfr', [120096]], ['Cfr', [8493]], ['CHcy', [1063]], ['chcy', [1095]], ['check', [10003]], ['checkmark', [10003]], ['Chi', [935]], ['chi', [967]], ['circ', [710]], ['circeq', [8791]], ['circlearrowleft', [8634]], ['circlearrowright', [8635]], ['circledast', [8859]], ['circledcirc', [8858]], ['circleddash', [8861]], ['CircleDot', [8857]], ['circledR', [174]], ['circledS', [9416]], ['CircleMinus', [8854]], ['CirclePlus', [8853]], ['CircleTimes', [8855]], ['cir', [9675]], ['cirE', [10691]], ['cire', [8791]], ['cirfnint', [10768]], ['cirmid', [10991]], ['cirscir', [10690]], ['ClockwiseContourIntegral', [8754]], ['clubs', [9827]], ['clubsuit', [9827]], ['colon', [58]], ['Colon', [8759]], ['Colone', [10868]], ['colone', [8788]], ['coloneq', [8788]], ['comma', [44]], ['commat', [64]], ['comp', [8705]], ['compfn', [8728]], ['complement', [8705]], ['complexes', [8450]], ['cong', [8773]], ['congdot', [10861]], ['Congruent', [8801]], ['conint', [8750]], ['Conint', [8751]], ['ContourIntegral', [8750]], ['copf', [120148]], ['Copf', [8450]], ['coprod', [8720]], ['Coproduct', [8720]], ['copy', [169]], ['COPY', [169]], ['copysr', [8471]], ['CounterClockwiseContourIntegral', [8755]], ['crarr', [8629]], ['cross', [10007]], ['Cross', [10799]], ['Cscr', [119966]], ['cscr', [119992]], ['csub', [10959]], ['csube', [10961]], ['csup', [10960]], ['csupe', [10962]], ['ctdot', [8943]], ['cudarrl', [10552]], ['cudarrr', [10549]], ['cuepr', [8926]], ['cuesc', [8927]], ['cularr', [8630]], ['cularrp', [10557]], ['cupbrcap', [10824]], ['cupcap', [10822]], ['CupCap', [8781]], ['cup', [8746]], ['Cup', [8915]], ['cupcup', [10826]], ['cupdot', [8845]], ['cupor', [10821]], ['cups', [8746, 65024]], ['curarr', [8631]], ['curarrm', [10556]], ['curlyeqprec', [8926]], ['curlyeqsucc', [8927]], ['curlyvee', [8910]], ['curlywedge', [8911]], ['curren', [164]], ['curvearrowleft', [8630]], ['curvearrowright', [8631]], ['cuvee', [8910]], ['cuwed', [8911]], ['cwconint', [8754]], ['cwint', [8753]], ['cylcty', [9005]], ['dagger', [8224]], ['Dagger', [8225]], ['daleth', [8504]], ['darr', [8595]], ['Darr', [8609]], ['dArr', [8659]], ['dash', [8208]], ['Dashv', [10980]], ['dashv', [8867]], ['dbkarow', [10511]], ['dblac', [733]], ['Dcaron', [270]], ['dcaron', [271]], ['Dcy', [1044]], ['dcy', [1076]], ['ddagger', [8225]], ['ddarr', [8650]], ['DD', [8517]], ['dd', [8518]], ['DDotrahd', [10513]], ['ddotseq', [10871]], ['deg', [176]], ['Del', [8711]], ['Delta', [916]], ['delta', [948]], ['demptyv', [10673]], ['dfisht', [10623]], ['Dfr', [120071]], ['dfr', [120097]], ['dHar', [10597]], ['dharl', [8643]], ['dharr', [8642]], ['DiacriticalAcute', [180]], ['DiacriticalDot', [729]], ['DiacriticalDoubleAcute', [733]], ['DiacriticalGrave', [96]], ['DiacriticalTilde', [732]], ['diam', [8900]], ['diamond', [8900]], ['Diamond', [8900]], ['diamondsuit', [9830]], ['diams', [9830]], ['die', [168]], ['DifferentialD', [8518]], ['digamma', [989]], ['disin', [8946]], ['div', [247]], ['divide', [247]], ['divideontimes', [8903]], ['divonx', [8903]], ['DJcy', [1026]], ['djcy', [1106]], ['dlcorn', [8990]], ['dlcrop', [8973]], ['dollar', [36]], ['Dopf', [120123]], ['dopf', [120149]], ['Dot', [168]], ['dot', [729]], ['DotDot', [8412]], ['doteq', [8784]], ['doteqdot', [8785]], ['DotEqual', [8784]], ['dotminus', [8760]], ['dotplus', [8724]], ['dotsquare', [8865]], ['doublebarwedge', [8966]], ['DoubleContourIntegral', [8751]], ['DoubleDot', [168]], ['DoubleDownArrow', [8659]], ['DoubleLeftArrow', [8656]], ['DoubleLeftRightArrow', [8660]], ['DoubleLeftTee', [10980]], ['DoubleLongLeftArrow', [10232]], ['DoubleLongLeftRightArrow', [10234]], ['DoubleLongRightArrow', [10233]], ['DoubleRightArrow', [8658]], ['DoubleRightTee', [8872]], ['DoubleUpArrow', [8657]], ['DoubleUpDownArrow', [8661]], ['DoubleVerticalBar', [8741]], ['DownArrowBar', [10515]], ['downarrow', [8595]], ['DownArrow', [8595]], ['Downarrow', [8659]], ['DownArrowUpArrow', [8693]], ['DownBreve', [785]], ['downdownarrows', [8650]], ['downharpoonleft', [8643]], ['downharpoonright', [8642]], ['DownLeftRightVector', [10576]], ['DownLeftTeeVector', [10590]], ['DownLeftVectorBar', [10582]], ['DownLeftVector', [8637]], ['DownRightTeeVector', [10591]], ['DownRightVectorBar', [10583]], ['DownRightVector', [8641]], ['DownTeeArrow', [8615]], ['DownTee', [8868]], ['drbkarow', [10512]], ['drcorn', [8991]], ['drcrop', [8972]], ['Dscr', [119967]], ['dscr', [119993]], ['DScy', [1029]], ['dscy', [1109]], ['dsol', [10742]], ['Dstrok', [272]], ['dstrok', [273]], ['dtdot', [8945]], ['dtri', [9663]], ['dtrif', [9662]], ['duarr', [8693]], ['duhar', [10607]], ['dwangle', [10662]], ['DZcy', [1039]], ['dzcy', [1119]], ['dzigrarr', [10239]], ['Eacute', [201]], ['eacute', [233]], ['easter', [10862]], ['Ecaron', [282]], ['ecaron', [283]], ['Ecirc', [202]], ['ecirc', [234]], ['ecir', [8790]], ['ecolon', [8789]], ['Ecy', [1069]], ['ecy', [1101]], ['eDDot', [10871]], ['Edot', [278]], ['edot', [279]], ['eDot', [8785]], ['ee', [8519]], ['efDot', [8786]], ['Efr', [120072]], ['efr', [120098]], ['eg', [10906]], ['Egrave', [200]], ['egrave', [232]], ['egs', [10902]], ['egsdot', [10904]], ['el', [10905]], ['Element', [8712]], ['elinters', [9191]], ['ell', [8467]], ['els', [10901]], ['elsdot', [10903]], ['Emacr', [274]], ['emacr', [275]], ['empty', [8709]], ['emptyset', [8709]], ['EmptySmallSquare', [9723]], ['emptyv', [8709]], ['EmptyVerySmallSquare', [9643]], ['emsp13', [8196]], ['emsp14', [8197]], ['emsp', [8195]], ['ENG', [330]], ['eng', [331]], ['ensp', [8194]], ['Eogon', [280]], ['eogon', [281]], ['Eopf', [120124]], ['eopf', [120150]], ['epar', [8917]], ['eparsl', [10723]], ['eplus', [10865]], ['epsi', [949]], ['Epsilon', [917]], ['epsilon', [949]], ['epsiv', [1013]], ['eqcirc', [8790]], ['eqcolon', [8789]], ['eqsim', [8770]], ['eqslantgtr', [10902]], ['eqslantless', [10901]], ['Equal', [10869]], ['equals', [61]], ['EqualTilde', [8770]], ['equest', [8799]], ['Equilibrium', [8652]], ['equiv', [8801]], ['equivDD', [10872]], ['eqvparsl', [10725]], ['erarr', [10609]], ['erDot', [8787]], ['escr', [8495]], ['Escr', [8496]], ['esdot', [8784]], ['Esim', [10867]], ['esim', [8770]], ['Eta', [919]], ['eta', [951]], ['ETH', [208]], ['eth', [240]], ['Euml', [203]], ['euml', [235]], ['euro', [8364]], ['excl', [33]], ['exist', [8707]], ['Exists', [8707]], ['expectation', [8496]], ['exponentiale', [8519]], ['ExponentialE', [8519]], ['fallingdotseq', [8786]], ['Fcy', [1060]], ['fcy', [1092]], ['female', [9792]], ['ffilig', [64259]], ['fflig', [64256]], ['ffllig', [64260]], ['Ffr', [120073]], ['ffr', [120099]], ['filig', [64257]], ['FilledSmallSquare', [9724]], ['FilledVerySmallSquare', [9642]], ['fjlig', [102, 106]], ['flat', [9837]], ['fllig', [64258]], ['fltns', [9649]], ['fnof', [402]], ['Fopf', [120125]], ['fopf', [120151]], ['forall', [8704]], ['ForAll', [8704]], ['fork', [8916]], ['forkv', [10969]], ['Fouriertrf', [8497]], ['fpartint', [10765]], ['frac12', [189]], ['frac13', [8531]], ['frac14', [188]], ['frac15', [8533]], ['frac16', [8537]], ['frac18', [8539]], ['frac23', [8532]], ['frac25', [8534]], ['frac34', [190]], ['frac35', [8535]], ['frac38', [8540]], ['frac45', [8536]], ['frac56', [8538]], ['frac58', [8541]], ['frac78', [8542]], ['frasl', [8260]], ['frown', [8994]], ['fscr', [119995]], ['Fscr', [8497]], ['gacute', [501]], ['Gamma', [915]], ['gamma', [947]], ['Gammad', [988]], ['gammad', [989]], ['gap', [10886]], ['Gbreve', [286]], ['gbreve', [287]], ['Gcedil', [290]], ['Gcirc', [284]], ['gcirc', [285]], ['Gcy', [1043]], ['gcy', [1075]], ['Gdot', [288]], ['gdot', [289]], ['ge', [8805]], ['gE', [8807]], ['gEl', [10892]], ['gel', [8923]], ['geq', [8805]], ['geqq', [8807]], ['geqslant', [10878]], ['gescc', [10921]], ['ges', [10878]], ['gesdot', [10880]], ['gesdoto', [10882]], ['gesdotol', [10884]], ['gesl', [8923, 65024]], ['gesles', [10900]], ['Gfr', [120074]], ['gfr', [120100]], ['gg', [8811]], ['Gg', [8921]], ['ggg', [8921]], ['gimel', [8503]], ['GJcy', [1027]], ['gjcy', [1107]], ['gla', [10917]], ['gl', [8823]], ['glE', [10898]], ['glj', [10916]], ['gnap', [10890]], ['gnapprox', [10890]], ['gne', [10888]], ['gnE', [8809]], ['gneq', [10888]], ['gneqq', [8809]], ['gnsim', [8935]], ['Gopf', [120126]], ['gopf', [120152]], ['grave', [96]], ['GreaterEqual', [8805]], ['GreaterEqualLess', [8923]], ['GreaterFullEqual', [8807]], ['GreaterGreater', [10914]], ['GreaterLess', [8823]], ['GreaterSlantEqual', [10878]], ['GreaterTilde', [8819]], ['Gscr', [119970]], ['gscr', [8458]], ['gsim', [8819]], ['gsime', [10894]], ['gsiml', [10896]], ['gtcc', [10919]], ['gtcir', [10874]], ['gt', [62]], ['GT', [62]], ['Gt', [8811]], ['gtdot', [8919]], ['gtlPar', [10645]], ['gtquest', [10876]], ['gtrapprox', [10886]], ['gtrarr', [10616]], ['gtrdot', [8919]], ['gtreqless', [8923]], ['gtreqqless', [10892]], ['gtrless', [8823]], ['gtrsim', [8819]], ['gvertneqq', [8809, 65024]], ['gvnE', [8809, 65024]], ['Hacek', [711]], ['hairsp', [8202]], ['half', [189]], ['hamilt', [8459]], ['HARDcy', [1066]], ['hardcy', [1098]], ['harrcir', [10568]], ['harr', [8596]], ['hArr', [8660]], ['harrw', [8621]], ['Hat', [94]], ['hbar', [8463]], ['Hcirc', [292]], ['hcirc', [293]], ['hearts', [9829]], ['heartsuit', [9829]], ['hellip', [8230]], ['hercon', [8889]], ['hfr', [120101]], ['Hfr', [8460]], ['HilbertSpace', [8459]], ['hksearow', [10533]], ['hkswarow', [10534]], ['hoarr', [8703]], ['homtht', [8763]], ['hookleftarrow', [8617]], ['hookrightarrow', [8618]], ['hopf', [120153]], ['Hopf', [8461]], ['horbar', [8213]], ['HorizontalLine', [9472]], ['hscr', [119997]], ['Hscr', [8459]], ['hslash', [8463]], ['Hstrok', [294]], ['hstrok', [295]], ['HumpDownHump', [8782]], ['HumpEqual', [8783]], ['hybull', [8259]], ['hyphen', [8208]], ['Iacute', [205]], ['iacute', [237]], ['ic', [8291]], ['Icirc', [206]], ['icirc', [238]], ['Icy', [1048]], ['icy', [1080]], ['Idot', [304]], ['IEcy', [1045]], ['iecy', [1077]], ['iexcl', [161]], ['iff', [8660]], ['ifr', [120102]], ['Ifr', [8465]], ['Igrave', [204]], ['igrave', [236]], ['ii', [8520]], ['iiiint', [10764]], ['iiint', [8749]], ['iinfin', [10716]], ['iiota', [8489]], ['IJlig', [306]], ['ijlig', [307]], ['Imacr', [298]], ['imacr', [299]], ['image', [8465]], ['ImaginaryI', [8520]], ['imagline', [8464]], ['imagpart', [8465]], ['imath', [305]], ['Im', [8465]], ['imof', [8887]], ['imped', [437]], ['Implies', [8658]], ['incare', [8453]], ['in', [8712]], ['infin', [8734]], ['infintie', [10717]], ['inodot', [305]], ['intcal', [8890]], ['int', [8747]], ['Int', [8748]], ['integers', [8484]], ['Integral', [8747]], ['intercal', [8890]], ['Intersection', [8898]], ['intlarhk', [10775]], ['intprod', [10812]], ['InvisibleComma', [8291]], ['InvisibleTimes', [8290]], ['IOcy', [1025]], ['iocy', [1105]], ['Iogon', [302]], ['iogon', [303]], ['Iopf', [120128]], ['iopf', [120154]], ['Iota', [921]], ['iota', [953]], ['iprod', [10812]], ['iquest', [191]], ['iscr', [119998]], ['Iscr', [8464]], ['isin', [8712]], ['isindot', [8949]], ['isinE', [8953]], ['isins', [8948]], ['isinsv', [8947]], ['isinv', [8712]], ['it', [8290]], ['Itilde', [296]], ['itilde', [297]], ['Iukcy', [1030]], ['iukcy', [1110]], ['Iuml', [207]], ['iuml', [239]], ['Jcirc', [308]], ['jcirc', [309]], ['Jcy', [1049]], ['jcy', [1081]], ['Jfr', [120077]], ['jfr', [120103]], ['jmath', [567]], ['Jopf', [120129]], ['jopf', [120155]], ['Jscr', [119973]], ['jscr', [119999]], ['Jsercy', [1032]], ['jsercy', [1112]], ['Jukcy', [1028]], ['jukcy', [1108]], ['Kappa', [922]], ['kappa', [954]], ['kappav', [1008]], ['Kcedil', [310]], ['kcedil', [311]], ['Kcy', [1050]], ['kcy', [1082]], ['Kfr', [120078]], ['kfr', [120104]], ['kgreen', [312]], ['KHcy', [1061]], ['khcy', [1093]], ['KJcy', [1036]], ['kjcy', [1116]], ['Kopf', [120130]], ['kopf', [120156]], ['Kscr', [119974]], ['kscr', [120000]], ['lAarr', [8666]], ['Lacute', [313]], ['lacute', [314]], ['laemptyv', [10676]], ['lagran', [8466]], ['Lambda', [923]], ['lambda', [955]], ['lang', [10216]], ['Lang', [10218]], ['langd', [10641]], ['langle', [10216]], ['lap', [10885]], ['Laplacetrf', [8466]], ['laquo', [171]], ['larrb', [8676]], ['larrbfs', [10527]], ['larr', [8592]], ['Larr', [8606]], ['lArr', [8656]], ['larrfs', [10525]], ['larrhk', [8617]], ['larrlp', [8619]], ['larrpl', [10553]], ['larrsim', [10611]], ['larrtl', [8610]], ['latail', [10521]], ['lAtail', [10523]], ['lat', [10923]], ['late', [10925]], ['lates', [10925, 65024]], ['lbarr', [10508]], ['lBarr', [10510]], ['lbbrk', [10098]], ['lbrace', [123]], ['lbrack', [91]], ['lbrke', [10635]], ['lbrksld', [10639]], ['lbrkslu', [10637]], ['Lcaron', [317]], ['lcaron', [318]], ['Lcedil', [315]], ['lcedil', [316]], ['lceil', [8968]], ['lcub', [123]], ['Lcy', [1051]], ['lcy', [1083]], ['ldca', [10550]], ['ldquo', [8220]], ['ldquor', [8222]], ['ldrdhar', [10599]], ['ldrushar', [10571]], ['ldsh', [8626]], ['le', [8804]], ['lE', [8806]], ['LeftAngleBracket', [10216]], ['LeftArrowBar', [8676]], ['leftarrow', [8592]], ['LeftArrow', [8592]], ['Leftarrow', [8656]], ['LeftArrowRightArrow', [8646]], ['leftarrowtail', [8610]], ['LeftCeiling', [8968]], ['LeftDoubleBracket', [10214]], ['LeftDownTeeVector', [10593]], ['LeftDownVectorBar', [10585]], ['LeftDownVector', [8643]], ['LeftFloor', [8970]], ['leftharpoondown', [8637]], ['leftharpoonup', [8636]], ['leftleftarrows', [8647]], ['leftrightarrow', [8596]], ['LeftRightArrow', [8596]], ['Leftrightarrow', [8660]], ['leftrightarrows', [8646]], ['leftrightharpoons', [8651]], ['leftrightsquigarrow', [8621]], ['LeftRightVector', [10574]], ['LeftTeeArrow', [8612]], ['LeftTee', [8867]], ['LeftTeeVector', [10586]], ['leftthreetimes', [8907]], ['LeftTriangleBar', [10703]], ['LeftTriangle', [8882]], ['LeftTriangleEqual', [8884]], ['LeftUpDownVector', [10577]], ['LeftUpTeeVector', [10592]], ['LeftUpVectorBar', [10584]], ['LeftUpVector', [8639]], ['LeftVectorBar', [10578]], ['LeftVector', [8636]], ['lEg', [10891]], ['leg', [8922]], ['leq', [8804]], ['leqq', [8806]], ['leqslant', [10877]], ['lescc', [10920]], ['les', [10877]], ['lesdot', [10879]], ['lesdoto', [10881]], ['lesdotor', [10883]], ['lesg', [8922, 65024]], ['lesges', [10899]], ['lessapprox', [10885]], ['lessdot', [8918]], ['lesseqgtr', [8922]], ['lesseqqgtr', [10891]], ['LessEqualGreater', [8922]], ['LessFullEqual', [8806]], ['LessGreater', [8822]], ['lessgtr', [8822]], ['LessLess', [10913]], ['lesssim', [8818]], ['LessSlantEqual', [10877]], ['LessTilde', [8818]], ['lfisht', [10620]], ['lfloor', [8970]], ['Lfr', [120079]], ['lfr', [120105]], ['lg', [8822]], ['lgE', [10897]], ['lHar', [10594]], ['lhard', [8637]], ['lharu', [8636]], ['lharul', [10602]], ['lhblk', [9604]], ['LJcy', [1033]], ['ljcy', [1113]], ['llarr', [8647]], ['ll', [8810]], ['Ll', [8920]], ['llcorner', [8990]], ['Lleftarrow', [8666]], ['llhard', [10603]], ['lltri', [9722]], ['Lmidot', [319]], ['lmidot', [320]], ['lmoustache', [9136]], ['lmoust', [9136]], ['lnap', [10889]], ['lnapprox', [10889]], ['lne', [10887]], ['lnE', [8808]], ['lneq', [10887]], ['lneqq', [8808]], ['lnsim', [8934]], ['loang', [10220]], ['loarr', [8701]], ['lobrk', [10214]], ['longleftarrow', [10229]], ['LongLeftArrow', [10229]], ['Longleftarrow', [10232]], ['longleftrightarrow', [10231]], ['LongLeftRightArrow', [10231]], ['Longleftrightarrow', [10234]], ['longmapsto', [10236]], ['longrightarrow', [10230]], ['LongRightArrow', [10230]], ['Longrightarrow', [10233]], ['looparrowleft', [8619]], ['looparrowright', [8620]], ['lopar', [10629]], ['Lopf', [120131]], ['lopf', [120157]], ['loplus', [10797]], ['lotimes', [10804]], ['lowast', [8727]], ['lowbar', [95]], ['LowerLeftArrow', [8601]], ['LowerRightArrow', [8600]], ['loz', [9674]], ['lozenge', [9674]], ['lozf', [10731]], ['lpar', [40]], ['lparlt', [10643]], ['lrarr', [8646]], ['lrcorner', [8991]], ['lrhar', [8651]], ['lrhard', [10605]], ['lrm', [8206]], ['lrtri', [8895]], ['lsaquo', [8249]], ['lscr', [120001]], ['Lscr', [8466]], ['lsh', [8624]], ['Lsh', [8624]], ['lsim', [8818]], ['lsime', [10893]], ['lsimg', [10895]], ['lsqb', [91]], ['lsquo', [8216]], ['lsquor', [8218]], ['Lstrok', [321]], ['lstrok', [322]], ['ltcc', [10918]], ['ltcir', [10873]], ['lt', [60]], ['LT', [60]], ['Lt', [8810]], ['ltdot', [8918]], ['lthree', [8907]], ['ltimes', [8905]], ['ltlarr', [10614]], ['ltquest', [10875]], ['ltri', [9667]], ['ltrie', [8884]], ['ltrif', [9666]], ['ltrPar', [10646]], ['lurdshar', [10570]], ['luruhar', [10598]], ['lvertneqq', [8808, 65024]], ['lvnE', [8808, 65024]], ['macr', [175]], ['male', [9794]], ['malt', [10016]], ['maltese', [10016]], ['Map', [10501]], ['map', [8614]], ['mapsto', [8614]], ['mapstodown', [8615]], ['mapstoleft', [8612]], ['mapstoup', [8613]], ['marker', [9646]], ['mcomma', [10793]], ['Mcy', [1052]], ['mcy', [1084]], ['mdash', [8212]], ['mDDot', [8762]], ['measuredangle', [8737]], ['MediumSpace', [8287]], ['Mellintrf', [8499]], ['Mfr', [120080]], ['mfr', [120106]], ['mho', [8487]], ['micro', [181]], ['midast', [42]], ['midcir', [10992]], ['mid', [8739]], ['middot', [183]], ['minusb', [8863]], ['minus', [8722]], ['minusd', [8760]], ['minusdu', [10794]], ['MinusPlus', [8723]], ['mlcp', [10971]], ['mldr', [8230]], ['mnplus', [8723]], ['models', [8871]], ['Mopf', [120132]], ['mopf', [120158]], ['mp', [8723]], ['mscr', [120002]], ['Mscr', [8499]], ['mstpos', [8766]], ['Mu', [924]], ['mu', [956]], ['multimap', [8888]], ['mumap', [8888]], ['nabla', [8711]], ['Nacute', [323]], ['nacute', [324]], ['nang', [8736, 8402]], ['nap', [8777]], ['napE', [10864, 824]], ['napid', [8779, 824]], ['napos', [329]], ['napprox', [8777]], ['natural', [9838]], ['naturals', [8469]], ['natur', [9838]], ['nbsp', [160]], ['nbump', [8782, 824]], ['nbumpe', [8783, 824]], ['ncap', [10819]], ['Ncaron', [327]], ['ncaron', [328]], ['Ncedil', [325]], ['ncedil', [326]], ['ncong', [8775]], ['ncongdot', [10861, 824]], ['ncup', [10818]], ['Ncy', [1053]], ['ncy', [1085]], ['ndash', [8211]], ['nearhk', [10532]], ['nearr', [8599]], ['neArr', [8663]], ['nearrow', [8599]], ['ne', [8800]], ['nedot', [8784, 824]], ['NegativeMediumSpace', [8203]], ['NegativeThickSpace', [8203]], ['NegativeThinSpace', [8203]], ['NegativeVeryThinSpace', [8203]], ['nequiv', [8802]], ['nesear', [10536]], ['nesim', [8770, 824]], ['NestedGreaterGreater', [8811]], ['NestedLessLess', [8810]], ['nexist', [8708]], ['nexists', [8708]], ['Nfr', [120081]], ['nfr', [120107]], ['ngE', [8807, 824]], ['nge', [8817]], ['ngeq', [8817]], ['ngeqq', [8807, 824]], ['ngeqslant', [10878, 824]], ['nges', [10878, 824]], ['nGg', [8921, 824]], ['ngsim', [8821]], ['nGt', [8811, 8402]], ['ngt', [8815]], ['ngtr', [8815]], ['nGtv', [8811, 824]], ['nharr', [8622]], ['nhArr', [8654]], ['nhpar', [10994]], ['ni', [8715]], ['nis', [8956]], ['nisd', [8954]], ['niv', [8715]], ['NJcy', [1034]], ['njcy', [1114]], ['nlarr', [8602]], ['nlArr', [8653]], ['nldr', [8229]], ['nlE', [8806, 824]], ['nle', [8816]], ['nleftarrow', [8602]], ['nLeftarrow', [8653]], ['nleftrightarrow', [8622]], ['nLeftrightarrow', [8654]], ['nleq', [8816]], ['nleqq', [8806, 824]], ['nleqslant', [10877, 824]], ['nles', [10877, 824]], ['nless', [8814]], ['nLl', [8920, 824]], ['nlsim', [8820]], ['nLt', [8810, 8402]], ['nlt', [8814]], ['nltri', [8938]], ['nltrie', [8940]], ['nLtv', [8810, 824]], ['nmid', [8740]], ['NoBreak', [8288]], ['NonBreakingSpace', [160]], ['nopf', [120159]], ['Nopf', [8469]], ['Not', [10988]], ['not', [172]], ['NotCongruent', [8802]], ['NotCupCap', [8813]], ['NotDoubleVerticalBar', [8742]], ['NotElement', [8713]], ['NotEqual', [8800]], ['NotEqualTilde', [8770, 824]], ['NotExists', [8708]], ['NotGreater', [8815]], ['NotGreaterEqual', [8817]], ['NotGreaterFullEqual', [8807, 824]], ['NotGreaterGreater', [8811, 824]], ['NotGreaterLess', [8825]], ['NotGreaterSlantEqual', [10878, 824]], ['NotGreaterTilde', [8821]], ['NotHumpDownHump', [8782, 824]], ['NotHumpEqual', [8783, 824]], ['notin', [8713]], ['notindot', [8949, 824]], ['notinE', [8953, 824]], ['notinva', [8713]], ['notinvb', [8951]], ['notinvc', [8950]], ['NotLeftTriangleBar', [10703, 824]], ['NotLeftTriangle', [8938]], ['NotLeftTriangleEqual', [8940]], ['NotLess', [8814]], ['NotLessEqual', [8816]], ['NotLessGreater', [8824]], ['NotLessLess', [8810, 824]], ['NotLessSlantEqual', [10877, 824]], ['NotLessTilde', [8820]], ['NotNestedGreaterGreater', [10914, 824]], ['NotNestedLessLess', [10913, 824]], ['notni', [8716]], ['notniva', [8716]], ['notnivb', [8958]], ['notnivc', [8957]], ['NotPrecedes', [8832]], ['NotPrecedesEqual', [10927, 824]], ['NotPrecedesSlantEqual', [8928]], ['NotReverseElement', [8716]], ['NotRightTriangleBar', [10704, 824]], ['NotRightTriangle', [8939]], ['NotRightTriangleEqual', [8941]], ['NotSquareSubset', [8847, 824]], ['NotSquareSubsetEqual', [8930]], ['NotSquareSuperset', [8848, 824]], ['NotSquareSupersetEqual', [8931]], ['NotSubset', [8834, 8402]], ['NotSubsetEqual', [8840]], ['NotSucceeds', [8833]], ['NotSucceedsEqual', [10928, 824]], ['NotSucceedsSlantEqual', [8929]], ['NotSucceedsTilde', [8831, 824]], ['NotSuperset', [8835, 8402]], ['NotSupersetEqual', [8841]], ['NotTilde', [8769]], ['NotTildeEqual', [8772]], ['NotTildeFullEqual', [8775]], ['NotTildeTilde', [8777]], ['NotVerticalBar', [8740]], ['nparallel', [8742]], ['npar', [8742]], ['nparsl', [11005, 8421]], ['npart', [8706, 824]], ['npolint', [10772]], ['npr', [8832]], ['nprcue', [8928]], ['nprec', [8832]], ['npreceq', [10927, 824]], ['npre', [10927, 824]], ['nrarrc', [10547, 824]], ['nrarr', [8603]], ['nrArr', [8655]], ['nrarrw', [8605, 824]], ['nrightarrow', [8603]], ['nRightarrow', [8655]], ['nrtri', [8939]], ['nrtrie', [8941]], ['nsc', [8833]], ['nsccue', [8929]], ['nsce', [10928, 824]], ['Nscr', [119977]], ['nscr', [120003]], ['nshortmid', [8740]], ['nshortparallel', [8742]], ['nsim', [8769]], ['nsime', [8772]], ['nsimeq', [8772]], ['nsmid', [8740]], ['nspar', [8742]], ['nsqsube', [8930]], ['nsqsupe', [8931]], ['nsub', [8836]], ['nsubE', [10949, 824]], ['nsube', [8840]], ['nsubset', [8834, 8402]], ['nsubseteq', [8840]], ['nsubseteqq', [10949, 824]], ['nsucc', [8833]], ['nsucceq', [10928, 824]], ['nsup', [8837]], ['nsupE', [10950, 824]], ['nsupe', [8841]], ['nsupset', [8835, 8402]], ['nsupseteq', [8841]], ['nsupseteqq', [10950, 824]], ['ntgl', [8825]], ['Ntilde', [209]], ['ntilde', [241]], ['ntlg', [8824]], ['ntriangleleft', [8938]], ['ntrianglelefteq', [8940]], ['ntriangleright', [8939]], ['ntrianglerighteq', [8941]], ['Nu', [925]], ['nu', [957]], ['num', [35]], ['numero', [8470]], ['numsp', [8199]], ['nvap', [8781, 8402]], ['nvdash', [8876]], ['nvDash', [8877]], ['nVdash', [8878]], ['nVDash', [8879]], ['nvge', [8805, 8402]], ['nvgt', [62, 8402]], ['nvHarr', [10500]], ['nvinfin', [10718]], ['nvlArr', [10498]], ['nvle', [8804, 8402]], ['nvlt', [60, 8402]], ['nvltrie', [8884, 8402]], ['nvrArr', [10499]], ['nvrtrie', [8885, 8402]], ['nvsim', [8764, 8402]], ['nwarhk', [10531]], ['nwarr', [8598]], ['nwArr', [8662]], ['nwarrow', [8598]], ['nwnear', [10535]], ['Oacute', [211]], ['oacute', [243]], ['oast', [8859]], ['Ocirc', [212]], ['ocirc', [244]], ['ocir', [8858]], ['Ocy', [1054]], ['ocy', [1086]], ['odash', [8861]], ['Odblac', [336]], ['odblac', [337]], ['odiv', [10808]], ['odot', [8857]], ['odsold', [10684]], ['OElig', [338]], ['oelig', [339]], ['ofcir', [10687]], ['Ofr', [120082]], ['ofr', [120108]], ['ogon', [731]], ['Ograve', [210]], ['ograve', [242]], ['ogt', [10689]], ['ohbar', [10677]], ['ohm', [937]], ['oint', [8750]], ['olarr', [8634]], ['olcir', [10686]], ['olcross', [10683]], ['oline', [8254]], ['olt', [10688]], ['Omacr', [332]], ['omacr', [333]], ['Omega', [937]], ['omega', [969]], ['Omicron', [927]], ['omicron', [959]], ['omid', [10678]], ['ominus', [8854]], ['Oopf', [120134]], ['oopf', [120160]], ['opar', [10679]], ['OpenCurlyDoubleQuote', [8220]], ['OpenCurlyQuote', [8216]], ['operp', [10681]], ['oplus', [8853]], ['orarr', [8635]], ['Or', [10836]], ['or', [8744]], ['ord', [10845]], ['order', [8500]], ['orderof', [8500]], ['ordf', [170]], ['ordm', [186]], ['origof', [8886]], ['oror', [10838]], ['orslope', [10839]], ['orv', [10843]], ['oS', [9416]], ['Oscr', [119978]], ['oscr', [8500]], ['Oslash', [216]], ['oslash', [248]], ['osol', [8856]], ['Otilde', [213]], ['otilde', [245]], ['otimesas', [10806]], ['Otimes', [10807]], ['otimes', [8855]], ['Ouml', [214]], ['ouml', [246]], ['ovbar', [9021]], ['OverBar', [8254]], ['OverBrace', [9182]], ['OverBracket', [9140]], ['OverParenthesis', [9180]], ['para', [182]], ['parallel', [8741]], ['par', [8741]], ['parsim', [10995]], ['parsl', [11005]], ['part', [8706]], ['PartialD', [8706]], ['Pcy', [1055]], ['pcy', [1087]], ['percnt', [37]], ['period', [46]], ['permil', [8240]], ['perp', [8869]], ['pertenk', [8241]], ['Pfr', [120083]], ['pfr', [120109]], ['Phi', [934]], ['phi', [966]], ['phiv', [981]], ['phmmat', [8499]], ['phone', [9742]], ['Pi', [928]], ['pi', [960]], ['pitchfork', [8916]], ['piv', [982]], ['planck', [8463]], ['planckh', [8462]], ['plankv', [8463]], ['plusacir', [10787]], ['plusb', [8862]], ['pluscir', [10786]], ['plus', [43]], ['plusdo', [8724]], ['plusdu', [10789]], ['pluse', [10866]], ['PlusMinus', [177]], ['plusmn', [177]], ['plussim', [10790]], ['plustwo', [10791]], ['pm', [177]], ['Poincareplane', [8460]], ['pointint', [10773]], ['popf', [120161]], ['Popf', [8473]], ['pound', [163]], ['prap', [10935]], ['Pr', [10939]], ['pr', [8826]], ['prcue', [8828]], ['precapprox', [10935]], ['prec', [8826]], ['preccurlyeq', [8828]], ['Precedes', [8826]], ['PrecedesEqual', [10927]], ['PrecedesSlantEqual', [8828]], ['PrecedesTilde', [8830]], ['preceq', [10927]], ['precnapprox', [10937]], ['precneqq', [10933]], ['precnsim', [8936]], ['pre', [10927]], ['prE', [10931]], ['precsim', [8830]], ['prime', [8242]], ['Prime', [8243]], ['primes', [8473]], ['prnap', [10937]], ['prnE', [10933]], ['prnsim', [8936]], ['prod', [8719]], ['Product', [8719]], ['profalar', [9006]], ['profline', [8978]], ['profsurf', [8979]], ['prop', [8733]], ['Proportional', [8733]], ['Proportion', [8759]], ['propto', [8733]], ['prsim', [8830]], ['prurel', [8880]], ['Pscr', [119979]], ['pscr', [120005]], ['Psi', [936]], ['psi', [968]], ['puncsp', [8200]], ['Qfr', [120084]], ['qfr', [120110]], ['qint', [10764]], ['qopf', [120162]], ['Qopf', [8474]], ['qprime', [8279]], ['Qscr', [119980]], ['qscr', [120006]], ['quaternions', [8461]], ['quatint', [10774]], ['quest', [63]], ['questeq', [8799]], ['quot', [34]], ['QUOT', [34]], ['rAarr', [8667]], ['race', [8765, 817]], ['Racute', [340]], ['racute', [341]], ['radic', [8730]], ['raemptyv', [10675]], ['rang', [10217]], ['Rang', [10219]], ['rangd', [10642]], ['range', [10661]], ['rangle', [10217]], ['raquo', [187]], ['rarrap', [10613]], ['rarrb', [8677]], ['rarrbfs', [10528]], ['rarrc', [10547]], ['rarr', [8594]], ['Rarr', [8608]], ['rArr', [8658]], ['rarrfs', [10526]], ['rarrhk', [8618]], ['rarrlp', [8620]], ['rarrpl', [10565]], ['rarrsim', [10612]], ['Rarrtl', [10518]], ['rarrtl', [8611]], ['rarrw', [8605]], ['ratail', [10522]], ['rAtail', [10524]], ['ratio', [8758]], ['rationals', [8474]], ['rbarr', [10509]], ['rBarr', [10511]], ['RBarr', [10512]], ['rbbrk', [10099]], ['rbrace', [125]], ['rbrack', [93]], ['rbrke', [10636]], ['rbrksld', [10638]], ['rbrkslu', [10640]], ['Rcaron', [344]], ['rcaron', [345]], ['Rcedil', [342]], ['rcedil', [343]], ['rceil', [8969]], ['rcub', [125]], ['Rcy', [1056]], ['rcy', [1088]], ['rdca', [10551]], ['rdldhar', [10601]], ['rdquo', [8221]], ['rdquor', [8221]], ['CloseCurlyDoubleQuote', [8221]], ['rdsh', [8627]], ['real', [8476]], ['realine', [8475]], ['realpart', [8476]], ['reals', [8477]], ['Re', [8476]], ['rect', [9645]], ['reg', [174]], ['REG', [174]], ['ReverseElement', [8715]], ['ReverseEquilibrium', [8651]], ['ReverseUpEquilibrium', [10607]], ['rfisht', [10621]], ['rfloor', [8971]], ['rfr', [120111]], ['Rfr', [8476]], ['rHar', [10596]], ['rhard', [8641]], ['rharu', [8640]], ['rharul', [10604]], ['Rho', [929]], ['rho', [961]], ['rhov', [1009]], ['RightAngleBracket', [10217]], ['RightArrowBar', [8677]], ['rightarrow', [8594]], ['RightArrow', [8594]], ['Rightarrow', [8658]], ['RightArrowLeftArrow', [8644]], ['rightarrowtail', [8611]], ['RightCeiling', [8969]], ['RightDoubleBracket', [10215]], ['RightDownTeeVector', [10589]], ['RightDownVectorBar', [10581]], ['RightDownVector', [8642]], ['RightFloor', [8971]], ['rightharpoondown', [8641]], ['rightharpoonup', [8640]], ['rightleftarrows', [8644]], ['rightleftharpoons', [8652]], ['rightrightarrows', [8649]], ['rightsquigarrow', [8605]], ['RightTeeArrow', [8614]], ['RightTee', [8866]], ['RightTeeVector', [10587]], ['rightthreetimes', [8908]], ['RightTriangleBar', [10704]], ['RightTriangle', [8883]], ['RightTriangleEqual', [8885]], ['RightUpDownVector', [10575]], ['RightUpTeeVector', [10588]], ['RightUpVectorBar', [10580]], ['RightUpVector', [8638]], ['RightVectorBar', [10579]], ['RightVector', [8640]], ['ring', [730]], ['risingdotseq', [8787]], ['rlarr', [8644]], ['rlhar', [8652]], ['rlm', [8207]], ['rmoustache', [9137]], ['rmoust', [9137]], ['rnmid', [10990]], ['roang', [10221]], ['roarr', [8702]], ['robrk', [10215]], ['ropar', [10630]], ['ropf', [120163]], ['Ropf', [8477]], ['roplus', [10798]], ['rotimes', [10805]], ['RoundImplies', [10608]], ['rpar', [41]], ['rpargt', [10644]], ['rppolint', [10770]], ['rrarr', [8649]], ['Rrightarrow', [8667]], ['rsaquo', [8250]], ['rscr', [120007]], ['Rscr', [8475]], ['rsh', [8625]], ['Rsh', [8625]], ['rsqb', [93]], ['rsquo', [8217]], ['rsquor', [8217]], ['CloseCurlyQuote', [8217]], ['rthree', [8908]], ['rtimes', [8906]], ['rtri', [9657]], ['rtrie', [8885]], ['rtrif', [9656]], ['rtriltri', [10702]], ['RuleDelayed', [10740]], ['ruluhar', [10600]], ['rx', [8478]], ['Sacute', [346]], ['sacute', [347]], ['sbquo', [8218]], ['scap', [10936]], ['Scaron', [352]], ['scaron', [353]], ['Sc', [10940]], ['sc', [8827]], ['sccue', [8829]], ['sce', [10928]], ['scE', [10932]], ['Scedil', [350]], ['scedil', [351]], ['Scirc', [348]], ['scirc', [349]], ['scnap', [10938]], ['scnE', [10934]], ['scnsim', [8937]], ['scpolint', [10771]], ['scsim', [8831]], ['Scy', [1057]], ['scy', [1089]], ['sdotb', [8865]], ['sdot', [8901]], ['sdote', [10854]], ['searhk', [10533]], ['searr', [8600]], ['seArr', [8664]], ['searrow', [8600]], ['sect', [167]], ['semi', [59]], ['seswar', [10537]], ['setminus', [8726]], ['setmn', [8726]], ['sext', [10038]], ['Sfr', [120086]], ['sfr', [120112]], ['sfrown', [8994]], ['sharp', [9839]], ['SHCHcy', [1065]], ['shchcy', [1097]], ['SHcy', [1064]], ['shcy', [1096]], ['ShortDownArrow', [8595]], ['ShortLeftArrow', [8592]], ['shortmid', [8739]], ['shortparallel', [8741]], ['ShortRightArrow', [8594]], ['ShortUpArrow', [8593]], ['shy', [173]], ['Sigma', [931]], ['sigma', [963]], ['sigmaf', [962]], ['sigmav', [962]], ['sim', [8764]], ['simdot', [10858]], ['sime', [8771]], ['simeq', [8771]], ['simg', [10910]], ['simgE', [10912]], ['siml', [10909]], ['simlE', [10911]], ['simne', [8774]], ['simplus', [10788]], ['simrarr', [10610]], ['slarr', [8592]], ['SmallCircle', [8728]], ['smallsetminus', [8726]], ['smashp', [10803]], ['smeparsl', [10724]], ['smid', [8739]], ['smile', [8995]], ['smt', [10922]], ['smte', [10924]], ['smtes', [10924, 65024]], ['SOFTcy', [1068]], ['softcy', [1100]], ['solbar', [9023]], ['solb', [10692]], ['sol', [47]], ['Sopf', [120138]], ['sopf', [120164]], ['spades', [9824]], ['spadesuit', [9824]], ['spar', [8741]], ['sqcap', [8851]], ['sqcaps', [8851, 65024]], ['sqcup', [8852]], ['sqcups', [8852, 65024]], ['Sqrt', [8730]], ['sqsub', [8847]], ['sqsube', [8849]], ['sqsubset', [8847]], ['sqsubseteq', [8849]], ['sqsup', [8848]], ['sqsupe', [8850]], ['sqsupset', [8848]], ['sqsupseteq', [8850]], ['square', [9633]], ['Square', [9633]], ['SquareIntersection', [8851]], ['SquareSubset', [8847]], ['SquareSubsetEqual', [8849]], ['SquareSuperset', [8848]], ['SquareSupersetEqual', [8850]], ['SquareUnion', [8852]], ['squarf', [9642]], ['squ', [9633]], ['squf', [9642]], ['srarr', [8594]], ['Sscr', [119982]], ['sscr', [120008]], ['ssetmn', [8726]], ['ssmile', [8995]], ['sstarf', [8902]], ['Star', [8902]], ['star', [9734]], ['starf', [9733]], ['straightepsilon', [1013]], ['straightphi', [981]], ['strns', [175]], ['sub', [8834]], ['Sub', [8912]], ['subdot', [10941]], ['subE', [10949]], ['sube', [8838]], ['subedot', [10947]], ['submult', [10945]], ['subnE', [10955]], ['subne', [8842]], ['subplus', [10943]], ['subrarr', [10617]], ['subset', [8834]], ['Subset', [8912]], ['subseteq', [8838]], ['subseteqq', [10949]], ['SubsetEqual', [8838]], ['subsetneq', [8842]], ['subsetneqq', [10955]], ['subsim', [10951]], ['subsub', [10965]], ['subsup', [10963]], ['succapprox', [10936]], ['succ', [8827]], ['succcurlyeq', [8829]], ['Succeeds', [8827]], ['SucceedsEqual', [10928]], ['SucceedsSlantEqual', [8829]], ['SucceedsTilde', [8831]], ['succeq', [10928]], ['succnapprox', [10938]], ['succneqq', [10934]], ['succnsim', [8937]], ['succsim', [8831]], ['SuchThat', [8715]], ['sum', [8721]], ['Sum', [8721]], ['sung', [9834]], ['sup1', [185]], ['sup2', [178]], ['sup3', [179]], ['sup', [8835]], ['Sup', [8913]], ['supdot', [10942]], ['supdsub', [10968]], ['supE', [10950]], ['supe', [8839]], ['supedot', [10948]], ['Superset', [8835]], ['SupersetEqual', [8839]], ['suphsol', [10185]], ['suphsub', [10967]], ['suplarr', [10619]], ['supmult', [10946]], ['supnE', [10956]], ['supne', [8843]], ['supplus', [10944]], ['supset', [8835]], ['Supset', [8913]], ['supseteq', [8839]], ['supseteqq', [10950]], ['supsetneq', [8843]], ['supsetneqq', [10956]], ['supsim', [10952]], ['supsub', [10964]], ['supsup', [10966]], ['swarhk', [10534]], ['swarr', [8601]], ['swArr', [8665]], ['swarrow', [8601]], ['swnwar', [10538]], ['szlig', [223]], ['Tab', [9]], ['target', [8982]], ['Tau', [932]], ['tau', [964]], ['tbrk', [9140]], ['Tcaron', [356]], ['tcaron', [357]], ['Tcedil', [354]], ['tcedil', [355]], ['Tcy', [1058]], ['tcy', [1090]], ['tdot', [8411]], ['telrec', [8981]], ['Tfr', [120087]], ['tfr', [120113]], ['there4', [8756]], ['therefore', [8756]], ['Therefore', [8756]], ['Theta', [920]], ['theta', [952]], ['thetasym', [977]], ['thetav', [977]], ['thickapprox', [8776]], ['thicksim', [8764]], ['ThickSpace', [8287, 8202]], ['ThinSpace', [8201]], ['thinsp', [8201]], ['thkap', [8776]], ['thksim', [8764]], ['THORN', [222]], ['thorn', [254]], ['tilde', [732]], ['Tilde', [8764]], ['TildeEqual', [8771]], ['TildeFullEqual', [8773]], ['TildeTilde', [8776]], ['timesbar', [10801]], ['timesb', [8864]], ['times', [215]], ['timesd', [10800]], ['tint', [8749]], ['toea', [10536]], ['topbot', [9014]], ['topcir', [10993]], ['top', [8868]], ['Topf', [120139]], ['topf', [120165]], ['topfork', [10970]], ['tosa', [10537]], ['tprime', [8244]], ['trade', [8482]], ['TRADE', [8482]], ['triangle', [9653]], ['triangledown', [9663]], ['triangleleft', [9667]], ['trianglelefteq', [8884]], ['triangleq', [8796]], ['triangleright', [9657]], ['trianglerighteq', [8885]], ['tridot', [9708]], ['trie', [8796]], ['triminus', [10810]], ['TripleDot', [8411]], ['triplus', [10809]], ['trisb', [10701]], ['tritime', [10811]], ['trpezium', [9186]], ['Tscr', [119983]], ['tscr', [120009]], ['TScy', [1062]], ['tscy', [1094]], ['TSHcy', [1035]], ['tshcy', [1115]], ['Tstrok', [358]], ['tstrok', [359]], ['twixt', [8812]], ['twoheadleftarrow', [8606]], ['twoheadrightarrow', [8608]], ['Uacute', [218]], ['uacute', [250]], ['uarr', [8593]], ['Uarr', [8607]], ['uArr', [8657]], ['Uarrocir', [10569]], ['Ubrcy', [1038]], ['ubrcy', [1118]], ['Ubreve', [364]], ['ubreve', [365]], ['Ucirc', [219]], ['ucirc', [251]], ['Ucy', [1059]], ['ucy', [1091]], ['udarr', [8645]], ['Udblac', [368]], ['udblac', [369]], ['udhar', [10606]], ['ufisht', [10622]], ['Ufr', [120088]], ['ufr', [120114]], ['Ugrave', [217]], ['ugrave', [249]], ['uHar', [10595]], ['uharl', [8639]], ['uharr', [8638]], ['uhblk', [9600]], ['ulcorn', [8988]], ['ulcorner', [8988]], ['ulcrop', [8975]], ['ultri', [9720]], ['Umacr', [362]], ['umacr', [363]], ['uml', [168]], ['UnderBar', [95]], ['UnderBrace', [9183]], ['UnderBracket', [9141]], ['UnderParenthesis', [9181]], ['Union', [8899]], ['UnionPlus', [8846]], ['Uogon', [370]], ['uogon', [371]], ['Uopf', [120140]], ['uopf', [120166]], ['UpArrowBar', [10514]], ['uparrow', [8593]], ['UpArrow', [8593]], ['Uparrow', [8657]], ['UpArrowDownArrow', [8645]], ['updownarrow', [8597]], ['UpDownArrow', [8597]], ['Updownarrow', [8661]], ['UpEquilibrium', [10606]], ['upharpoonleft', [8639]], ['upharpoonright', [8638]], ['uplus', [8846]], ['UpperLeftArrow', [8598]], ['UpperRightArrow', [8599]], ['upsi', [965]], ['Upsi', [978]], ['upsih', [978]], ['Upsilon', [933]], ['upsilon', [965]], ['UpTeeArrow', [8613]], ['UpTee', [8869]], ['upuparrows', [8648]], ['urcorn', [8989]], ['urcorner', [8989]], ['urcrop', [8974]], ['Uring', [366]], ['uring', [367]], ['urtri', [9721]], ['Uscr', [119984]], ['uscr', [120010]], ['utdot', [8944]], ['Utilde', [360]], ['utilde', [361]], ['utri', [9653]], ['utrif', [9652]], ['uuarr', [8648]], ['Uuml', [220]], ['uuml', [252]], ['uwangle', [10663]], ['vangrt', [10652]], ['varepsilon', [1013]], ['varkappa', [1008]], ['varnothing', [8709]], ['varphi', [981]], ['varpi', [982]], ['varpropto', [8733]], ['varr', [8597]], ['vArr', [8661]], ['varrho', [1009]], ['varsigma', [962]], ['varsubsetneq', [8842, 65024]], ['varsubsetneqq', [10955, 65024]], ['varsupsetneq', [8843, 65024]], ['varsupsetneqq', [10956, 65024]], ['vartheta', [977]], ['vartriangleleft', [8882]], ['vartriangleright', [8883]], ['vBar', [10984]], ['Vbar', [10987]], ['vBarv', [10985]], ['Vcy', [1042]], ['vcy', [1074]], ['vdash', [8866]], ['vDash', [8872]], ['Vdash', [8873]], ['VDash', [8875]], ['Vdashl', [10982]], ['veebar', [8891]], ['vee', [8744]], ['Vee', [8897]], ['veeeq', [8794]], ['vellip', [8942]], ['verbar', [124]], ['Verbar', [8214]], ['vert', [124]], ['Vert', [8214]], ['VerticalBar', [8739]], ['VerticalLine', [124]], ['VerticalSeparator', [10072]], ['VerticalTilde', [8768]], ['VeryThinSpace', [8202]], ['Vfr', [120089]], ['vfr', [120115]], ['vltri', [8882]], ['vnsub', [8834, 8402]], ['vnsup', [8835, 8402]], ['Vopf', [120141]], ['vopf', [120167]], ['vprop', [8733]], ['vrtri', [8883]], ['Vscr', [119985]], ['vscr', [120011]], ['vsubnE', [10955, 65024]], ['vsubne', [8842, 65024]], ['vsupnE', [10956, 65024]], ['vsupne', [8843, 65024]], ['Vvdash', [8874]], ['vzigzag', [10650]], ['Wcirc', [372]], ['wcirc', [373]], ['wedbar', [10847]], ['wedge', [8743]], ['Wedge', [8896]], ['wedgeq', [8793]], ['weierp', [8472]], ['Wfr', [120090]], ['wfr', [120116]], ['Wopf', [120142]], ['wopf', [120168]], ['wp', [8472]], ['wr', [8768]], ['wreath', [8768]], ['Wscr', [119986]], ['wscr', [120012]], ['xcap', [8898]], ['xcirc', [9711]], ['xcup', [8899]], ['xdtri', [9661]], ['Xfr', [120091]], ['xfr', [120117]], ['xharr', [10231]], ['xhArr', [10234]], ['Xi', [926]], ['xi', [958]], ['xlarr', [10229]], ['xlArr', [10232]], ['xmap', [10236]], ['xnis', [8955]], ['xodot', [10752]], ['Xopf', [120143]], ['xopf', [120169]], ['xoplus', [10753]], ['xotime', [10754]], ['xrarr', [10230]], ['xrArr', [10233]], ['Xscr', [119987]], ['xscr', [120013]], ['xsqcup', [10758]], ['xuplus', [10756]], ['xutri', [9651]], ['xvee', [8897]], ['xwedge', [8896]], ['Yacute', [221]], ['yacute', [253]], ['YAcy', [1071]], ['yacy', [1103]], ['Ycirc', [374]], ['ycirc', [375]], ['Ycy', [1067]], ['ycy', [1099]], ['yen', [165]], ['Yfr', [120092]], ['yfr', [120118]], ['YIcy', [1031]], ['yicy', [1111]], ['Yopf', [120144]], ['yopf', [120170]], ['Yscr', [119988]], ['yscr', [120014]], ['YUcy', [1070]], ['yucy', [1102]], ['yuml', [255]], ['Yuml', [376]], ['Zacute', [377]], ['zacute', [378]], ['Zcaron', [381]], ['zcaron', [382]], ['Zcy', [1047]], ['zcy', [1079]], ['Zdot', [379]], ['zdot', [380]], ['zeetrf', [8488]], ['ZeroWidthSpace', [8203]], ['Zeta', [918]], ['zeta', [950]], ['zfr', [120119]], ['Zfr', [8488]], ['ZHcy', [1046]], ['zhcy', [1078]], ['zigrarr', [8669]], ['zopf', [120171]], ['Zopf', [8484]], ['Zscr', [119989]], ['zscr', [120015]], ['zwj', [8205]], ['zwnj', [8204]]];

var alphaIndex = {};
var charIndex = {};

createIndexes(alphaIndex, charIndex);

/**
 * @constructor
 */
function Html5Entities() {}

/**
 * @param {String} str
 * @returns {String}
 */
Html5Entities.prototype.decode = function(str) {
    if (!str || !str.length) {
        return '';
    }
    return str.replace(/&(#?[\w\d]+);?/g, function(s, entity) {
        var chr;
        if (entity.charAt(0) === "#") {
            var code = entity.charAt(1) === 'x' ?
                parseInt(entity.substr(2).toLowerCase(), 16) :
                parseInt(entity.substr(1));

            if (!(isNaN(code) || code < -32768 || code > 65535)) {
                chr = String.fromCharCode(code);
            }
        } else {
            chr = alphaIndex[entity];
        }
        return chr || s;
    });
};

/**
 * @param {String} str
 * @returns {String}
 */
 Html5Entities.decode = function(str) {
    return new Html5Entities().decode(str);
 };

/**
 * @param {String} str
 * @returns {String}
 */
Html5Entities.prototype.encode = function(str) {
    if (!str || !str.length) {
        return '';
    }
    var strLength = str.length;
    var result = '';
    var i = 0;
    while (i < strLength) {
        var charInfo = charIndex[str.charCodeAt(i)];
        if (charInfo) {
            var alpha = charInfo[str.charCodeAt(i + 1)];
            if (alpha) {
                i++;
            } else {
                alpha = charInfo[''];
            }
            if (alpha) {
                result += "&" + alpha + ";";
                i++;
                continue;
            }
        }
        result += str.charAt(i);
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
 Html5Entities.encode = function(str) {
    return new Html5Entities().encode(str);
 };

/**
 * @param {String} str
 * @returns {String}
 */
Html5Entities.prototype.encodeNonUTF = function(str) {
    if (!str || !str.length) {
        return '';
    }
    var strLength = str.length;
    var result = '';
    var i = 0;
    while (i < strLength) {
        var c = str.charCodeAt(i);
        var charInfo = charIndex[c];
        if (charInfo) {
            var alpha = charInfo[str.charCodeAt(i + 1)];
            if (alpha) {
                i++;
            } else {
                alpha = charInfo[''];
            }
            if (alpha) {
                result += "&" + alpha + ";";
                i++;
                continue;
            }
        }
        if (c < 32 || c > 126) {
            result += '&#' + c + ';';
        } else {
            result += str.charAt(i);
        }
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
 Html5Entities.encodeNonUTF = function(str) {
    return new Html5Entities().encodeNonUTF(str);
 };

/**
 * @param {String} str
 * @returns {String}
 */
Html5Entities.prototype.encodeNonASCII = function(str) {
    if (!str || !str.length) {
        return '';
    }
    var strLength = str.length;
    var result = '';
    var i = 0;
    while (i < strLength) {
        var c = str.charCodeAt(i);
        if (c <= 255) {
            result += str[i++];
            continue;
        }
        result += '&#' + c + ';';
        i++
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
 Html5Entities.encodeNonASCII = function(str) {
    return new Html5Entities().encodeNonASCII(str);
 };

/**
 * @param {Object} alphaIndex Passed by reference.
 * @param {Object} charIndex Passed by reference.
 */
function createIndexes(alphaIndex, charIndex) {
    var i = ENTITIES.length;
    var _results = [];
    while (i--) {
        var e = ENTITIES[i];
        var alpha = e[0];
        var chars = e[1];
        var chr = chars[0];
        var addChar = (chr < 32 || chr > 126) || chr === 62 || chr === 60 || chr === 38 || chr === 34 || chr === 39;
        var charInfo;
        if (addChar) {
            charInfo = charIndex[chr] = charIndex[chr] || {};
        }
        if (chars[1]) {
            var chr2 = chars[1];
            alphaIndex[alpha] = String.fromCharCode(chr) + String.fromCharCode(chr2);
            _results.push(addChar && (charInfo[chr2] = alpha));
        } else {
            alphaIndex[alpha] = String.fromCharCode(chr);
            _results.push(addChar && (charInfo[''] = alpha));
        }
    }
}

module.exports = Html5Entities;


/***/ }),

/***/ "./node_modules/html-entities/lib/xml-entities.js":
/*!********************************************************!*\
  !*** ./node_modules/html-entities/lib/xml-entities.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ALPHA_INDEX = {
    '&lt': '<',
    '&gt': '>',
    '&quot': '"',
    '&apos': '\'',
    '&amp': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&apos;': '\'',
    '&amp;': '&'
};

var CHAR_INDEX = {
    60: 'lt',
    62: 'gt',
    34: 'quot',
    39: 'apos',
    38: 'amp'
};

var CHAR_S_INDEX = {
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;',
    '&': '&amp;'
};

/**
 * @constructor
 */
function XmlEntities() {}

/**
 * @param {String} str
 * @returns {String}
 */
XmlEntities.prototype.encode = function(str) {
    if (!str || !str.length) {
        return '';
    }
    return str.replace(/<|>|"|'|&/g, function(s) {
        return CHAR_S_INDEX[s];
    });
};

/**
 * @param {String} str
 * @returns {String}
 */
 XmlEntities.encode = function(str) {
    return new XmlEntities().encode(str);
 };

/**
 * @param {String} str
 * @returns {String}
 */
XmlEntities.prototype.decode = function(str) {
    if (!str || !str.length) {
        return '';
    }
    return str.replace(/&#?[0-9a-zA-Z]+;?/g, function(s) {
        if (s.charAt(1) === '#') {
            var code = s.charAt(2).toLowerCase() === 'x' ?
                parseInt(s.substr(3), 16) :
                parseInt(s.substr(2));

            if (isNaN(code) || code < -32768 || code > 65535) {
                return '';
            }
            return String.fromCharCode(code);
        }
        return ALPHA_INDEX[s] || s;
    });
};

/**
 * @param {String} str
 * @returns {String}
 */
 XmlEntities.decode = function(str) {
    return new XmlEntities().decode(str);
 };

/**
 * @param {String} str
 * @returns {String}
 */
XmlEntities.prototype.encodeNonUTF = function(str) {
    if (!str || !str.length) {
        return '';
    }
    var strLength = str.length;
    var result = '';
    var i = 0;
    while (i < strLength) {
        var c = str.charCodeAt(i);
        var alpha = CHAR_INDEX[c];
        if (alpha) {
            result += "&" + alpha + ";";
            i++;
            continue;
        }
        if (c < 32 || c > 126) {
            result += '&#' + c + ';';
        } else {
            result += str.charAt(i);
        }
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
 XmlEntities.encodeNonUTF = function(str) {
    return new XmlEntities().encodeNonUTF(str);
 };

/**
 * @param {String} str
 * @returns {String}
 */
XmlEntities.prototype.encodeNonASCII = function(str) {
    if (!str || !str.length) {
        return '';
    }
    var strLenght = str.length;
    var result = '';
    var i = 0;
    while (i < strLenght) {
        var c = str.charCodeAt(i);
        if (c <= 255) {
            result += str[i++];
            continue;
        }
        result += '&#' + c + ';';
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
 XmlEntities.encodeNonASCII = function(str) {
    return new XmlEntities().encodeNonASCII(str);
 };

module.exports = XmlEntities;


/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/timers-browserify/main.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/node-libs-browser/node_modules/timers-browserify/main.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/vue/dist/vue.min.js":
/*!******************************************!*\
  !*** ./node_modules/vue/dist/vue.min.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.4
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";var e=Object.freeze({});function t(e){return null==e}function n(e){return null!=e}function r(e){return!0===e}function i(e){return"string"==typeof e||"number"==typeof e||"symbol"==typeof e||"boolean"==typeof e}function o(e){return null!==e&&"object"==typeof e}var a=Object.prototype.toString;function s(e){return"[object Object]"===a.call(e)}function c(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function u(e){return n(e)&&"function"==typeof e.then&&"function"==typeof e.catch}function l(e){return null==e?"":Array.isArray(e)||s(e)&&e.toString===a?JSON.stringify(e,null,2):String(e)}function f(e){var t=parseFloat(e);return isNaN(t)?e:t}function p(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}var d=p("slot,component",!0),v=p("key,ref,slot,slot-scope,is");function h(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function y(e,t){return m.call(e,t)}function g(e){var t=Object.create(null);return function(n){return t[n]||(t[n]=e(n))}}var _=/-(\w)/g,b=g(function(e){return e.replace(_,function(e,t){return t?t.toUpperCase():""})}),$=g(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),w=/\B([A-Z])/g,C=g(function(e){return e.replace(w,"-$1").toLowerCase()});var x=Function.prototype.bind?function(e,t){return e.bind(t)}:function(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n};function A(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function k(e,t){for(var n in t)e[n]=t[n];return e}function O(e){for(var t={},n=0;n<e.length;n++)e[n]&&k(t,e[n]);return t}function S(e,t,n){}var T=function(e,t,n){return!1},E=function(e){return e};function N(e,t){if(e===t)return!0;var n=o(e),r=o(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=Array.isArray(e),a=Array.isArray(t);if(i&&a)return e.length===t.length&&e.every(function(e,n){return N(e,t[n])});if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(i||a)return!1;var s=Object.keys(e),c=Object.keys(t);return s.length===c.length&&s.every(function(n){return N(e[n],t[n])})}catch(e){return!1}}function j(e,t){for(var n=0;n<e.length;n++)if(N(e[n],t))return n;return-1}function L(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var M="data-server-rendered",I=["component","directive","filter"],D=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],P={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:T,isReservedAttr:T,isUnknownElement:T,getTagNamespace:S,parsePlatformTagName:E,mustUseProp:T,async:!0,_lifecycleHooks:D};function R(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var F=new RegExp("[^a-zA-Z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd.$_\\d]");var H,B="__proto__"in{},U="undefined"!=typeof window,z="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,V=z&&WXEnvironment.platform.toLowerCase(),K=U&&window.navigator.userAgent.toLowerCase(),J=K&&/msie|trident/.test(K),q=K&&K.indexOf("msie 9.0")>0,W=K&&K.indexOf("edge/")>0,Z=(K&&K.indexOf("android"),K&&/iphone|ipad|ipod|ios/.test(K)||"ios"===V),G=(K&&/chrome\/\d+/.test(K),K&&/phantomjs/.test(K),K&&K.match(/firefox\/(\d+)/)),X={}.watch,Y=!1;if(U)try{var Q={};Object.defineProperty(Q,"passive",{get:function(){Y=!0}}),window.addEventListener("test-passive",null,Q)}catch(e){}var ee=function(){return void 0===H&&(H=!U&&!z&&"undefined"!=typeof global&&(global.process&&"server"===global.process.env.VUE_ENV)),H},te=U&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ne(e){return"function"==typeof e&&/native code/.test(e.toString())}var re,ie="undefined"!=typeof Symbol&&ne(Symbol)&&"undefined"!=typeof Reflect&&ne(Reflect.ownKeys);re="undefined"!=typeof Set&&ne(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var oe=S,ae=0,se=function(){this.id=ae++,this.subs=[]};se.prototype.addSub=function(e){this.subs.push(e)},se.prototype.removeSub=function(e){h(this.subs,e)},se.prototype.depend=function(){se.target&&se.target.addDep(this)},se.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update()},se.target=null;var ce=[];function ue(e){ce.push(e),se.target=e}function le(){ce.pop(),se.target=ce[ce.length-1]}var fe=function(e,t,n,r,i,o,a,s){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},pe={child:{configurable:!0}};pe.child.get=function(){return this.componentInstance},Object.defineProperties(fe.prototype,pe);var de=function(e){void 0===e&&(e="");var t=new fe;return t.text=e,t.isComment=!0,t};function ve(e){return new fe(void 0,void 0,void 0,String(e))}function he(e){var t=new fe(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var me=Array.prototype,ye=Object.create(me);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){var t=me[e];R(ye,e,function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var i,o=t.apply(this,n),a=this.__ob__;switch(e){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2)}return i&&a.observeArray(i),a.dep.notify(),o})});var ge=Object.getOwnPropertyNames(ye),_e=!0;function be(e){_e=e}var $e=function(e){var t;this.value=e,this.dep=new se,this.vmCount=0,R(e,"__ob__",this),Array.isArray(e)?(B?(t=ye,e.__proto__=t):function(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];R(e,o,t[o])}}(e,ye,ge),this.observeArray(e)):this.walk(e)};function we(e,t){var n;if(o(e)&&!(e instanceof fe))return y(e,"__ob__")&&e.__ob__ instanceof $e?n=e.__ob__:_e&&!ee()&&(Array.isArray(e)||s(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new $e(e)),t&&n&&n.vmCount++,n}function Ce(e,t,n,r,i){var o=new se,a=Object.getOwnPropertyDescriptor(e,t);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set;s&&!c||2!==arguments.length||(n=e[t]);var u=!i&&we(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=s?s.call(e):n;return se.target&&(o.depend(),u&&(u.dep.depend(),Array.isArray(t)&&function e(t){for(var n=void 0,r=0,i=t.length;r<i;r++)(n=t[r])&&n.__ob__&&n.__ob__.dep.depend(),Array.isArray(n)&&e(n)}(t))),t},set:function(t){var r=s?s.call(e):n;t===r||t!=t&&r!=r||s&&!c||(c?c.call(e,t):n=t,u=!i&&we(t),o.notify())}})}}function xe(e,t,n){if(Array.isArray(e)&&c(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n,n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(Ce(r.value,t,n),r.dep.notify(),n):(e[t]=n,n)}function Ae(e,t){if(Array.isArray(e)&&c(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||y(e,t)&&(delete e[t],n&&n.dep.notify())}}$e.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)Ce(e,t[n])},$e.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)we(e[t])};var ke=P.optionMergeStrategies;function Oe(e,t){if(!t)return e;for(var n,r,i,o=ie?Reflect.ownKeys(t):Object.keys(t),a=0;a<o.length;a++)"__ob__"!==(n=o[a])&&(r=e[n],i=t[n],y(e,n)?r!==i&&s(r)&&s(i)&&Oe(r,i):xe(e,n,i));return e}function Se(e,t,n){return n?function(){var r="function"==typeof t?t.call(n,n):t,i="function"==typeof e?e.call(n,n):e;return r?Oe(r,i):i}:t?e?function(){return Oe("function"==typeof t?t.call(this,this):t,"function"==typeof e?e.call(this,this):e)}:t:e}function Te(e,t){var n=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return n?function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(n):n}function Ee(e,t,n,r){var i=Object.create(e||null);return t?k(i,t):i}ke.data=function(e,t,n){return n?Se(e,t,n):t&&"function"!=typeof t?e:Se(e,t)},D.forEach(function(e){ke[e]=Te}),I.forEach(function(e){ke[e+"s"]=Ee}),ke.watch=function(e,t,n,r){if(e===X&&(e=void 0),t===X&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var i={};for(var o in k(i,e),t){var a=i[o],s=t[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return i},ke.props=ke.methods=ke.inject=ke.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return k(i,e),t&&k(i,t),i},ke.provide=Se;var Ne=function(e,t){return void 0===t?e:t};function je(e,t,n){if("function"==typeof t&&(t=t.options),function(e,t){var n=e.props;if(n){var r,i,o={};if(Array.isArray(n))for(r=n.length;r--;)"string"==typeof(i=n[r])&&(o[b(i)]={type:null});else if(s(n))for(var a in n)i=n[a],o[b(a)]=s(i)?i:{type:i};e.props=o}}(t),function(e,t){var n=e.inject;if(n){var r=e.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(s(n))for(var o in n){var a=n[o];r[o]=s(a)?k({from:o},a):{from:a}}}}(t),function(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r})}}(t),!t._base&&(t.extends&&(e=je(e,t.extends,n)),t.mixins))for(var r=0,i=t.mixins.length;r<i;r++)e=je(e,t.mixins[r],n);var o,a={};for(o in e)c(o);for(o in t)y(e,o)||c(o);function c(r){var i=ke[r]||Ne;a[r]=i(e[r],t[r],n,r)}return a}function Le(e,t,n,r){if("string"==typeof n){var i=e[t];if(y(i,n))return i[n];var o=b(n);if(y(i,o))return i[o];var a=$(o);return y(i,a)?i[a]:i[n]||i[o]||i[a]}}function Me(e,t,n,r){var i=t[e],o=!y(n,e),a=n[e],s=Pe(Boolean,i.type);if(s>-1)if(o&&!y(i,"default"))a=!1;else if(""===a||a===C(e)){var c=Pe(String,i.type);(c<0||s<c)&&(a=!0)}if(void 0===a){a=function(e,t,n){if(!y(t,"default"))return;var r=t.default;if(e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n])return e._props[n];return"function"==typeof r&&"Function"!==Ie(t.type)?r.call(e):r}(r,i,e);var u=_e;be(!0),we(a),be(u)}return a}function Ie(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}function De(e,t){return Ie(e)===Ie(t)}function Pe(e,t){if(!Array.isArray(t))return De(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(De(t[n],e))return n;return-1}function Re(e,t,n){if(t)for(var r=t;r=r.$parent;){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{if(!1===i[o].call(r,e,t,n))return}catch(e){He(e,r,"errorCaptured hook")}}He(e,t,n)}function Fe(e,t,n,r,i){var o;try{(o=n?e.apply(t,n):e.call(t))&&!o._isVue&&u(o)&&o.catch(function(e){return Re(e,r,i+" (Promise/async)")})}catch(e){Re(e,r,i)}return o}function He(e,t,n){if(P.errorHandler)try{return P.errorHandler.call(null,e,t,n)}catch(t){t!==e&&Be(t,null,"config.errorHandler")}Be(e,t,n)}function Be(e,t,n){if(!U&&!z||"undefined"==typeof console)throw e;console.error(e)}var Ue,ze=!1,Ve=[],Ke=!1;function Je(){Ke=!1;var e=Ve.slice(0);Ve.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!=typeof Promise&&ne(Promise)){var qe=Promise.resolve();Ue=function(){qe.then(Je),Z&&setTimeout(S)},ze=!0}else if(J||"undefined"==typeof MutationObserver||!ne(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())Ue="undefined"!=typeof setImmediate&&ne(setImmediate)?function(){setImmediate(Je)}:function(){setTimeout(Je,0)};else{var We=1,Ze=new MutationObserver(Je),Ge=document.createTextNode(String(We));Ze.observe(Ge,{characterData:!0}),Ue=function(){We=(We+1)%2,Ge.data=String(We)},ze=!0}function Xe(e,t){var n;if(Ve.push(function(){if(e)try{e.call(t)}catch(e){Re(e,t,"nextTick")}else n&&n(t)}),Ke||(Ke=!0,Ue()),!e&&"undefined"!=typeof Promise)return new Promise(function(e){n=e})}var Ye=new re;function Qe(e){!function e(t,n){var r,i;var a=Array.isArray(t);if(!a&&!o(t)||Object.isFrozen(t)||t instanceof fe)return;if(t.__ob__){var s=t.__ob__.dep.id;if(n.has(s))return;n.add(s)}if(a)for(r=t.length;r--;)e(t[r],n);else for(i=Object.keys(t),r=i.length;r--;)e(t[i[r]],n)}(e,Ye),Ye.clear()}var et=g(function(e){var t="&"===e.charAt(0),n="~"===(e=t?e.slice(1):e).charAt(0),r="!"===(e=n?e.slice(1):e).charAt(0);return{name:e=r?e.slice(1):e,once:n,capture:r,passive:t}});function tt(e,t){function n(){var e=arguments,r=n.fns;if(!Array.isArray(r))return Fe(r,null,arguments,t,"v-on handler");for(var i=r.slice(),o=0;o<i.length;o++)Fe(i[o],null,e,t,"v-on handler")}return n.fns=e,n}function nt(e,n,i,o,a,s){var c,u,l,f;for(c in e)u=e[c],l=n[c],f=et(c),t(u)||(t(l)?(t(u.fns)&&(u=e[c]=tt(u,s)),r(f.once)&&(u=e[c]=a(f.name,u,f.capture)),i(f.name,u,f.capture,f.passive,f.params)):u!==l&&(l.fns=u,e[c]=l));for(c in n)t(e[c])&&o((f=et(c)).name,n[c],f.capture)}function rt(e,i,o){var a;e instanceof fe&&(e=e.data.hook||(e.data.hook={}));var s=e[i];function c(){o.apply(this,arguments),h(a.fns,c)}t(s)?a=tt([c]):n(s.fns)&&r(s.merged)?(a=s).fns.push(c):a=tt([s,c]),a.merged=!0,e[i]=a}function it(e,t,r,i,o){if(n(t)){if(y(t,r))return e[r]=t[r],o||delete t[r],!0;if(y(t,i))return e[r]=t[i],o||delete t[i],!0}return!1}function ot(e){return i(e)?[ve(e)]:Array.isArray(e)?function e(o,a){var s=[];var c,u,l,f;for(c=0;c<o.length;c++)t(u=o[c])||"boolean"==typeof u||(l=s.length-1,f=s[l],Array.isArray(u)?u.length>0&&(at((u=e(u,(a||"")+"_"+c))[0])&&at(f)&&(s[l]=ve(f.text+u[0].text),u.shift()),s.push.apply(s,u)):i(u)?at(f)?s[l]=ve(f.text+u):""!==u&&s.push(ve(u)):at(u)&&at(f)?s[l]=ve(f.text+u.text):(r(o._isVList)&&n(u.tag)&&t(u.key)&&n(a)&&(u.key="__vlist"+a+"_"+c+"__"),s.push(u)));return s}(e):void 0}function at(e){return n(e)&&n(e.text)&&!1===e.isComment}function st(e,t){if(e){for(var n=Object.create(null),r=ie?Reflect.ownKeys(e):Object.keys(e),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){for(var a=e[o].from,s=t;s;){if(s._provided&&y(s._provided,a)){n[o]=s._provided[a];break}s=s.$parent}if(!s&&"default"in e[o]){var c=e[o].default;n[o]="function"==typeof c?c.call(t):c}}}return n}}function ct(e,t){if(!e||!e.length)return{};for(var n={},r=0,i=e.length;r<i;r++){var o=e[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==t&&o.fnContext!==t||!a||null==a.slot)(n.default||(n.default=[])).push(o);else{var s=a.slot,c=n[s]||(n[s]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(ut)&&delete n[u];return n}function ut(e){return e.isComment&&!e.asyncFactory||" "===e.text}function lt(t,n,r){var i;if(t){if(t._normalized)return t._normalized;if(t.$stable&&r&&r!==e)return r;for(var o in i={},t)t[o]&&"$"!==o[0]&&(i[o]=ft(n,o,t[o]))}else i={};for(var a in n)a in i||(i[a]=pt(n,a));return t&&Object.isExtensible(t)&&(t._normalized=i),R(i,"$stable",!t||!!t.$stable),i}function ft(e,t,n){var r=function(e){var t=n(e||{});return(t=t&&"object"==typeof t&&!Array.isArray(t)?[t]:ot(t))&&0===t.length?void 0:t};return n.proxy&&Object.defineProperty(e,t,{get:r,enumerable:!0,configurable:!0}),r}function pt(e,t){return function(){return e[t]}}function dt(e,t){var r,i,a,s,c;if(Array.isArray(e)||"string"==typeof e)for(r=new Array(e.length),i=0,a=e.length;i<a;i++)r[i]=t(e[i],i);else if("number"==typeof e)for(r=new Array(e),i=0;i<e;i++)r[i]=t(i+1,i);else if(o(e))if(ie&&e[Symbol.iterator]){r=[];for(var u=e[Symbol.iterator](),l=u.next();!l.done;)r.push(t(l.value,r.length)),l=u.next()}else for(s=Object.keys(e),r=new Array(s.length),i=0,a=s.length;i<a;i++)c=s[i],r[i]=t(e[c],c,i);return n(r)||(r=[]),r._isVList=!0,r}function vt(e,t,n,r){var i,o=this.$scopedSlots[e];o?(n=n||{},r&&(n=k(k({},r),n)),i=o(n)||t):i=this.$slots[e]||t;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},i):i}function ht(e){return Le(this.$options,"filters",e)||E}function mt(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function yt(e,t,n,r,i){var o=P.keyCodes[t]||n;return i&&r&&!P.keyCodes[t]?mt(i,r):o?mt(o,e):r?C(r)!==t:void 0}function gt(e,t,n,r,i){if(n)if(o(n)){var a;Array.isArray(n)&&(n=O(n));var s=function(o){if("class"===o||"style"===o||v(o))a=e;else{var s=e.attrs&&e.attrs.type;a=r||P.mustUseProp(t,s,o)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var c=b(o);o in a||c in a||(a[o]=n[o],i&&((e.on||(e.on={}))["update:"+c]=function(e){n[o]=e}))};for(var c in n)s(c)}else;return e}function _t(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t?r:($t(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),"__static__"+e,!1),r)}function bt(e,t,n){return $t(e,"__once__"+t+(n?"_"+n:""),!0),e}function $t(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&wt(e[r],t+"_"+r,n);else wt(e,t,n)}function wt(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function Ct(e,t){if(t)if(s(t)){var n=e.on=e.on?k({},e.on):{};for(var r in t){var i=n[r],o=t[r];n[r]=i?[].concat(i,o):o}}else;return e}function xt(e,t,n){n=n||{$stable:!t};for(var r=0;r<e.length;r++){var i=e[r];Array.isArray(i)?xt(i,t,n):i&&(i.proxy&&(i.fn.proxy=!0),n[i.key]=i.fn)}return n}function At(e,t){for(var n=0;n<t.length;n+=2){var r=t[n];"string"==typeof r&&r&&(e[t[n]]=t[n+1])}return e}function kt(e,t){return"string"==typeof e?t+e:e}function Ot(e){e._o=bt,e._n=f,e._s=l,e._l=dt,e._t=vt,e._q=N,e._i=j,e._m=_t,e._f=ht,e._k=yt,e._b=gt,e._v=ve,e._e=de,e._u=xt,e._g=Ct,e._d=At,e._p=kt}function St(t,n,i,o,a){var s,c=this,u=a.options;y(o,"_uid")?(s=Object.create(o))._original=o:(s=o,o=o._original);var l=r(u._compiled),f=!l;this.data=t,this.props=n,this.children=i,this.parent=o,this.listeners=t.on||e,this.injections=st(u.inject,o),this.slots=function(){return c.$slots||lt(t.scopedSlots,c.$slots=ct(i,o)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return lt(t.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=lt(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(e,t,n,r){var i=Pt(s,e,t,n,r,f);return i&&!Array.isArray(i)&&(i.fnScopeId=u._scopeId,i.fnContext=o),i}:this._c=function(e,t,n,r){return Pt(s,e,t,n,r,f)}}function Tt(e,t,n,r,i){var o=he(e);return o.fnContext=n,o.fnOptions=r,t.slot&&((o.data||(o.data={})).slot=t.slot),o}function Et(e,t){for(var n in t)e[b(n)]=t[n]}Ot(St.prototype);var Nt={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var r=e;Nt.prepatch(r,r)}else{(e.componentInstance=function(e,t){var r={_isComponent:!0,_parentVnode:e,parent:t},i=e.data.inlineTemplate;n(i)&&(r.render=i.render,r.staticRenderFns=i.staticRenderFns);return new e.componentOptions.Ctor(r)}(e,qt)).$mount(t?e.elm:void 0,t)}},prepatch:function(t,n){var r=n.componentOptions;!function(t,n,r,i,o){var a=!!(i.data.scopedSlots&&!i.data.scopedSlots.$stable||t.$scopedSlots!==e&&!t.$scopedSlots.$stable),s=!!(o||t.$options._renderChildren||a);t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i);if(t.$options._renderChildren=o,t.$attrs=i.data.attrs||e,t.$listeners=r||e,n&&t.$options.props){be(!1);for(var c=t._props,u=t.$options._propKeys||[],l=0;l<u.length;l++){var f=u[l],p=t.$options.props;c[f]=Me(f,p,n,t)}be(!0),t.$options.propsData=n}r=r||e;var d=t.$options._parentListeners;t.$options._parentListeners=r,Jt(t,r,d),s&&(t.$slots=ct(o,i.context),t.$forceUpdate())}(n.componentInstance=t.componentInstance,r.propsData,r.listeners,n,r.children)},insert:function(e){var t,n=e.context,r=e.componentInstance;r._isMounted||(r._isMounted=!0,Xt(r,"mounted")),e.data.keepAlive&&(n._isMounted?((t=r)._inactive=!1,Qt.push(t)):Gt(r,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?function e(t,n){if(n&&(t._directInactive=!0,Zt(t)))return;if(!t._inactive){t._inactive=!0;for(var r=0;r<t.$children.length;r++)e(t.$children[r]);Xt(t,"deactivated")}}(t,!0):t.$destroy())}},jt=Object.keys(Nt);function Lt(i,a,s,c,l){if(!t(i)){var f=s.$options._base;if(o(i)&&(i=f.extend(i)),"function"==typeof i){var p;if(t(i.cid)&&void 0===(i=function(e,i){if(r(e.error)&&n(e.errorComp))return e.errorComp;if(n(e.resolved))return e.resolved;if(r(e.loading)&&n(e.loadingComp))return e.loadingComp;var a=Ft;if(!n(e.owners)){var s=e.owners=[a],c=!0,l=function(e){for(var t=0,n=s.length;t<n;t++)s[t].$forceUpdate();e&&(s.length=0)},f=L(function(t){e.resolved=Ht(t,i),c?s.length=0:l(!0)}),p=L(function(t){n(e.errorComp)&&(e.error=!0,l(!0))}),d=e(f,p);return o(d)&&(u(d)?t(e.resolved)&&d.then(f,p):u(d.component)&&(d.component.then(f,p),n(d.error)&&(e.errorComp=Ht(d.error,i)),n(d.loading)&&(e.loadingComp=Ht(d.loading,i),0===d.delay?e.loading=!0:setTimeout(function(){t(e.resolved)&&t(e.error)&&(e.loading=!0,l(!1))},d.delay||200)),n(d.timeout)&&setTimeout(function(){t(e.resolved)&&p(null)},d.timeout))),c=!1,e.loading?e.loadingComp:e.resolved}e.owners.push(a)}(p=i,f)))return function(e,t,n,r,i){var o=de();return o.asyncFactory=e,o.asyncMeta={data:t,context:n,children:r,tag:i},o}(p,a,s,c,l);a=a||{},_n(i),n(a.model)&&function(e,t){var r=e.model&&e.model.prop||"value",i=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[r]=t.model.value;var o=t.on||(t.on={}),a=o[i],s=t.model.callback;n(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(o[i]=[s].concat(a)):o[i]=s}(i.options,a);var d=function(e,r,i){var o=r.options.props;if(!t(o)){var a={},s=e.attrs,c=e.props;if(n(s)||n(c))for(var u in o){var l=C(u);it(a,c,u,l,!0)||it(a,s,u,l,!1)}return a}}(a,i);if(r(i.options.functional))return function(t,r,i,o,a){var s=t.options,c={},u=s.props;if(n(u))for(var l in u)c[l]=Me(l,u,r||e);else n(i.attrs)&&Et(c,i.attrs),n(i.props)&&Et(c,i.props);var f=new St(i,c,a,o,t),p=s.render.call(null,f._c,f);if(p instanceof fe)return Tt(p,i,f.parent,s);if(Array.isArray(p)){for(var d=ot(p)||[],v=new Array(d.length),h=0;h<d.length;h++)v[h]=Tt(d[h],i,f.parent,s);return v}}(i,d,a,s,c);var v=a.on;if(a.on=a.nativeOn,r(i.options.abstract)){var h=a.slot;a={},h&&(a.slot=h)}!function(e){for(var t=e.hook||(e.hook={}),n=0;n<jt.length;n++){var r=jt[n],i=t[r],o=Nt[r];i===o||i&&i._merged||(t[r]=i?Mt(o,i):o)}}(a);var m=i.options.name||l;return new fe("vue-component-"+i.cid+(m?"-"+m:""),a,void 0,void 0,void 0,s,{Ctor:i,propsData:d,listeners:v,tag:l,children:c},p)}}}function Mt(e,t){var n=function(n,r){e(n,r),t(n,r)};return n._merged=!0,n}var It=1,Dt=2;function Pt(e,a,s,c,u,l){return(Array.isArray(s)||i(s))&&(u=c,c=s,s=void 0),r(l)&&(u=Dt),function(e,i,a,s,c){if(n(a)&&n(a.__ob__))return de();n(a)&&n(a.is)&&(i=a.is);if(!i)return de();Array.isArray(s)&&"function"==typeof s[0]&&((a=a||{}).scopedSlots={default:s[0]},s.length=0);c===Dt?s=ot(s):c===It&&(s=function(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}(s));var u,l;if("string"==typeof i){var f;l=e.$vnode&&e.$vnode.ns||P.getTagNamespace(i),u=P.isReservedTag(i)?new fe(P.parsePlatformTagName(i),a,s,void 0,void 0,e):a&&a.pre||!n(f=Le(e.$options,"components",i))?new fe(i,a,s,void 0,void 0,e):Lt(f,a,e,s,i)}else u=Lt(i,a,e,s);return Array.isArray(u)?u:n(u)?(n(l)&&function e(i,o,a){i.ns=o;"foreignObject"===i.tag&&(o=void 0,a=!0);if(n(i.children))for(var s=0,c=i.children.length;s<c;s++){var u=i.children[s];n(u.tag)&&(t(u.ns)||r(a)&&"svg"!==u.tag)&&e(u,o,a)}}(u,l),n(a)&&function(e){o(e.style)&&Qe(e.style);o(e.class)&&Qe(e.class)}(a),u):de()}(e,a,s,c,u)}var Rt,Ft=null;function Ht(e,t){return(e.__esModule||ie&&"Module"===e[Symbol.toStringTag])&&(e=e.default),o(e)?t.extend(e):e}function Bt(e){return e.isComment&&e.asyncFactory}function Ut(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var r=e[t];if(n(r)&&(n(r.componentOptions)||Bt(r)))return r}}function zt(e,t){Rt.$on(e,t)}function Vt(e,t){Rt.$off(e,t)}function Kt(e,t){var n=Rt;return function r(){null!==t.apply(null,arguments)&&n.$off(e,r)}}function Jt(e,t,n){Rt=e,nt(t,n||{},zt,Vt,Kt,e),Rt=void 0}var qt=null;function Wt(e){var t=qt;return qt=e,function(){qt=t}}function Zt(e){for(;e&&(e=e.$parent);)if(e._inactive)return!0;return!1}function Gt(e,t){if(t){if(e._directInactive=!1,Zt(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)Gt(e.$children[n]);Xt(e,"activated")}}function Xt(e,t){ue();var n=e.$options[t],r=t+" hook";if(n)for(var i=0,o=n.length;i<o;i++)Fe(n[i],e,null,e,r);e._hasHookEvent&&e.$emit("hook:"+t),le()}var Yt=[],Qt=[],en={},tn=!1,nn=!1,rn=0;var on=0,an=Date.now;function sn(){var e,t;for(on=an(),nn=!0,Yt.sort(function(e,t){return e.id-t.id}),rn=0;rn<Yt.length;rn++)(e=Yt[rn]).before&&e.before(),t=e.id,en[t]=null,e.run();var n=Qt.slice(),r=Yt.slice();rn=Yt.length=Qt.length=0,en={},tn=nn=!1,function(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,Gt(e[t],!0)}(n),function(e){var t=e.length;for(;t--;){var n=e[t],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Xt(r,"updated")}}(r),te&&P.devtools&&te.emit("flush")}U&&an()>document.createEvent("Event").timeStamp&&(an=function(){return performance.now()});var cn=0,un=function(e,t,n,r,i){this.vm=e,i&&(e._watcher=this),e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++cn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new re,this.newDepIds=new re,this.expression="","function"==typeof t?this.getter=t:(this.getter=function(e){if(!F.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}(t),this.getter||(this.getter=S)),this.value=this.lazy?void 0:this.get()};un.prototype.get=function(){var e;ue(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(e){if(!this.user)throw e;Re(e,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&Qe(e),le(),this.cleanupDeps()}return e},un.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},un.prototype.cleanupDeps=function(){for(var e=this.deps.length;e--;){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},un.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():function(e){var t=e.id;if(null==en[t]){if(en[t]=!0,nn){for(var n=Yt.length-1;n>rn&&Yt[n].id>e.id;)n--;Yt.splice(n+1,0,e)}else Yt.push(e);tn||(tn=!0,Xe(sn))}}(this)},un.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||o(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(e){Re(e,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,t)}}},un.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},un.prototype.depend=function(){for(var e=this.deps.length;e--;)this.deps[e].depend()},un.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||h(this.vm._watchers,this);for(var e=this.deps.length;e--;)this.deps[e].removeSub(this);this.active=!1}};var ln={enumerable:!0,configurable:!0,get:S,set:S};function fn(e,t,n){ln.get=function(){return this[t][n]},ln.set=function(e){this[t][n]=e},Object.defineProperty(e,n,ln)}function pn(e){e._watchers=[];var t=e.$options;t.props&&function(e,t){var n=e.$options.propsData||{},r=e._props={},i=e.$options._propKeys=[];e.$parent&&be(!1);var o=function(o){i.push(o);var a=Me(o,t,n,e);Ce(r,o,a),o in e||fn(e,"_props",o)};for(var a in t)o(a);be(!0)}(e,t.props),t.methods&&function(e,t){e.$options.props;for(var n in t)e[n]="function"!=typeof t[n]?S:x(t[n],e)}(e,t.methods),t.data?function(e){var t=e.$options.data;s(t=e._data="function"==typeof t?function(e,t){ue();try{return e.call(t,t)}catch(e){return Re(e,t,"data()"),{}}finally{le()}}(t,e):t||{})||(t={});var n=Object.keys(t),r=e.$options.props,i=(e.$options.methods,n.length);for(;i--;){var o=n[i];r&&y(r,o)||(a=void 0,36!==(a=(o+"").charCodeAt(0))&&95!==a&&fn(e,"_data",o))}var a;we(t,!0)}(e):we(e._data={},!0),t.computed&&function(e,t){var n=e._computedWatchers=Object.create(null),r=ee();for(var i in t){var o=t[i],a="function"==typeof o?o:o.get;r||(n[i]=new un(e,a||S,S,dn)),i in e||vn(e,i,o)}}(e,t.computed),t.watch&&t.watch!==X&&function(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)yn(e,n,r[i]);else yn(e,n,r)}}(e,t.watch)}var dn={lazy:!0};function vn(e,t,n){var r=!ee();"function"==typeof n?(ln.get=r?hn(t):mn(n),ln.set=S):(ln.get=n.get?r&&!1!==n.cache?hn(t):mn(n.get):S,ln.set=n.set||S),Object.defineProperty(e,t,ln)}function hn(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),se.target&&t.depend(),t.value}}function mn(e){return function(){return e.call(this,this)}}function yn(e,t,n,r){return s(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r)}var gn=0;function _n(e){var t=e.options;if(e.super){var n=_n(e.super);if(n!==e.superOptions){e.superOptions=n;var r=function(e){var t,n=e.options,r=e.sealedOptions;for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=n[i]);return t}(e);r&&k(e.extendOptions,r),(t=e.options=je(n,e.extendOptions)).name&&(t.components[t.name]=e)}}return t}function bn(e){this._init(e)}function $n(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=e.name||n.options.name,a=function(e){this._init(e)};return(a.prototype=Object.create(n.prototype)).constructor=a,a.cid=t++,a.options=je(n.options,e),a.super=n,a.options.props&&function(e){var t=e.options.props;for(var n in t)fn(e.prototype,"_props",n)}(a),a.options.computed&&function(e){var t=e.options.computed;for(var n in t)vn(e.prototype,n,t[n])}(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,I.forEach(function(e){a[e]=n[e]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=e,a.sealedOptions=k({},a.options),i[r]=a,a}}function wn(e){return e&&(e.Ctor.options.name||e.tag)}function Cn(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"==typeof e?e.split(",").indexOf(t)>-1:(n=e,"[object RegExp]"===a.call(n)&&e.test(t));var n}function xn(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var o in n){var a=n[o];if(a){var s=wn(a.componentOptions);s&&!t(s)&&An(n,o,r,i)}}}function An(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,h(n,t)}!function(t){t.prototype._init=function(t){var n=this;n._uid=gn++,n._isVue=!0,t&&t._isComponent?function(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}(n,t):n.$options=je(_n(n.constructor),t||{},n),n._renderProxy=n,n._self=n,function(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}(n),function(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&Jt(e,t)}(n),function(t){t._vnode=null,t._staticTrees=null;var n=t.$options,r=t.$vnode=n._parentVnode,i=r&&r.context;t.$slots=ct(n._renderChildren,i),t.$scopedSlots=e,t._c=function(e,n,r,i){return Pt(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return Pt(t,e,n,r,i,!0)};var o=r&&r.data;Ce(t,"$attrs",o&&o.attrs||e,null,!0),Ce(t,"$listeners",n._parentListeners||e,null,!0)}(n),Xt(n,"beforeCreate"),function(e){var t=st(e.$options.inject,e);t&&(be(!1),Object.keys(t).forEach(function(n){Ce(e,n,t[n])}),be(!0))}(n),pn(n),function(e){var t=e.$options.provide;t&&(e._provided="function"==typeof t?t.call(e):t)}(n),Xt(n,"created"),n.$options.el&&n.$mount(n.$options.el)}}(bn),function(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=xe,e.prototype.$delete=Ae,e.prototype.$watch=function(e,t,n){if(s(t))return yn(this,e,t,n);(n=n||{}).user=!0;var r=new un(this,e,t,n);if(n.immediate)try{t.call(this,r.value)}catch(e){Re(e,this,'callback for immediate watcher "'+r.expression+'"')}return function(){r.teardown()}}}(bn),function(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this;if(Array.isArray(e))for(var i=0,o=e.length;i<o;i++)r.$on(e[i],n);else(r._events[e]||(r._events[e]=[])).push(n),t.test(e)&&(r._hasHookEvent=!0);return r},e.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(e)){for(var r=0,i=e.length;r<i;r++)n.$off(e[r],t);return n}var o,a=n._events[e];if(!a)return n;if(!t)return n._events[e]=null,n;for(var s=a.length;s--;)if((o=a[s])===t||o.fn===t){a.splice(s,1);break}return n},e.prototype.$emit=function(e){var t=this._events[e];if(t){t=t.length>1?A(t):t;for(var n=A(arguments,1),r='event handler for "'+e+'"',i=0,o=t.length;i<o;i++)Fe(t[i],this,n,this,r)}return this}}(bn),function(e){e.prototype._update=function(e,t){var n=this,r=n.$el,i=n._vnode,o=Wt(n);n._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Xt(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||h(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Xt(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}(bn),function(e){Ot(e.prototype),e.prototype.$nextTick=function(e){return Xe(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,r=n.render,i=n._parentVnode;i&&(t.$scopedSlots=lt(i.data.scopedSlots,t.$slots,t.$scopedSlots)),t.$vnode=i;try{Ft=t,e=r.call(t._renderProxy,t.$createElement)}catch(n){Re(n,t,"render"),e=t._vnode}finally{Ft=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof fe||(e=de()),e.parent=i,e}}(bn);var kn=[String,RegExp,Array],On={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:kn,exclude:kn,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)An(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch("include",function(t){xn(e,function(e){return Cn(t,e)})}),this.$watch("exclude",function(t){xn(e,function(e){return!Cn(t,e)})})},render:function(){var e=this.$slots.default,t=Ut(e),n=t&&t.componentOptions;if(n){var r=wn(n),i=this.include,o=this.exclude;if(i&&(!r||!Cn(i,r))||o&&r&&Cn(o,r))return t;var a=this.cache,s=this.keys,c=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;a[c]?(t.componentInstance=a[c].componentInstance,h(s,c),s.push(c)):(a[c]=t,s.push(c),this.max&&s.length>parseInt(this.max)&&An(a,s[0],s,this._vnode)),t.data.keepAlive=!0}return t||e&&e[0]}}};!function(e){var t={get:function(){return P}};Object.defineProperty(e,"config",t),e.util={warn:oe,extend:k,mergeOptions:je,defineReactive:Ce},e.set=xe,e.delete=Ae,e.nextTick=Xe,e.observable=function(e){return we(e),e},e.options=Object.create(null),I.forEach(function(t){e.options[t+"s"]=Object.create(null)}),e.options._base=e,k(e.options.components,On),function(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=A(arguments,1);return n.unshift(this),"function"==typeof e.install?e.install.apply(e,n):"function"==typeof e&&e.apply(null,n),t.push(e),this}}(e),function(e){e.mixin=function(e){return this.options=je(this.options,e),this}}(e),$n(e),function(e){I.forEach(function(t){e[t]=function(e,n){return n?("component"===t&&s(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"==typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}})}(e)}(bn),Object.defineProperty(bn.prototype,"$isServer",{get:ee}),Object.defineProperty(bn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(bn,"FunctionalRenderContext",{value:St}),bn.version="2.6.4";var Sn=p("style,class"),Tn=p("input,textarea,option,select,progress"),En=function(e,t,n){return"value"===n&&Tn(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},Nn=p("contenteditable,draggable,spellcheck"),jn=p("events,caret,typing,plaintext-only"),Ln=function(e,t){return Rn(t)||"false"===t?"false":"contenteditable"===e&&jn(t)?t:"true"},Mn=p("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),In="http://www.w3.org/1999/xlink",Dn=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Pn=function(e){return Dn(e)?e.slice(6,e.length):""},Rn=function(e){return null==e||!1===e};function Fn(e){for(var t=e.data,r=e,i=e;n(i.componentInstance);)(i=i.componentInstance._vnode)&&i.data&&(t=Hn(i.data,t));for(;n(r=r.parent);)r&&r.data&&(t=Hn(t,r.data));return function(e,t){if(n(e)||n(t))return Bn(e,Un(t));return""}(t.staticClass,t.class)}function Hn(e,t){return{staticClass:Bn(e.staticClass,t.staticClass),class:n(e.class)?[e.class,t.class]:t.class}}function Bn(e,t){return e?t?e+" "+t:e:t||""}function Un(e){return Array.isArray(e)?function(e){for(var t,r="",i=0,o=e.length;i<o;i++)n(t=Un(e[i]))&&""!==t&&(r&&(r+=" "),r+=t);return r}(e):o(e)?function(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}(e):"string"==typeof e?e:""}var zn={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Vn=p("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Kn=p("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Jn=function(e){return Vn(e)||Kn(e)};function qn(e){return Kn(e)?"svg":"math"===e?"math":void 0}var Wn=Object.create(null);var Zn=p("text,number,password,search,email,tel,url");function Gn(e){if("string"==typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}var Xn=Object.freeze({createElement:function(e,t){var n=document.createElement(e);return"select"!==e?n:(t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n)},createElementNS:function(e,t){return document.createElementNS(zn[e],t)},createTextNode:function(e){return document.createTextNode(e)},createComment:function(e){return document.createComment(e)},insertBefore:function(e,t,n){e.insertBefore(t,n)},removeChild:function(e,t){e.removeChild(t)},appendChild:function(e,t){e.appendChild(t)},parentNode:function(e){return e.parentNode},nextSibling:function(e){return e.nextSibling},tagName:function(e){return e.tagName},setTextContent:function(e,t){e.textContent=t},setStyleScope:function(e,t){e.setAttribute(t,"")}}),Yn={create:function(e,t){Qn(t)},update:function(e,t){e.data.ref!==t.data.ref&&(Qn(e,!0),Qn(t))},destroy:function(e){Qn(e,!0)}};function Qn(e,t){var r=e.data.ref;if(n(r)){var i=e.context,o=e.componentInstance||e.elm,a=i.$refs;t?Array.isArray(a[r])?h(a[r],o):a[r]===o&&(a[r]=void 0):e.data.refInFor?Array.isArray(a[r])?a[r].indexOf(o)<0&&a[r].push(o):a[r]=[o]:a[r]=o}}var er=new fe("",{},[]),tr=["create","activate","update","remove","destroy"];function nr(e,i){return e.key===i.key&&(e.tag===i.tag&&e.isComment===i.isComment&&n(e.data)===n(i.data)&&function(e,t){if("input"!==e.tag)return!0;var r,i=n(r=e.data)&&n(r=r.attrs)&&r.type,o=n(r=t.data)&&n(r=r.attrs)&&r.type;return i===o||Zn(i)&&Zn(o)}(e,i)||r(e.isAsyncPlaceholder)&&e.asyncFactory===i.asyncFactory&&t(i.asyncFactory.error))}function rr(e,t,r){var i,o,a={};for(i=t;i<=r;++i)n(o=e[i].key)&&(a[o]=i);return a}var ir={create:or,update:or,destroy:function(e){or(e,er)}};function or(e,t){(e.data.directives||t.data.directives)&&function(e,t){var n,r,i,o=e===er,a=t===er,s=sr(e.data.directives,e.context),c=sr(t.data.directives,t.context),u=[],l=[];for(n in c)r=s[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,ur(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(ur(i,"bind",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var f=function(){for(var n=0;n<u.length;n++)ur(u[n],"inserted",t,e)};o?rt(t,"insert",f):f()}l.length&&rt(t,"postpatch",function(){for(var n=0;n<l.length;n++)ur(l[n],"componentUpdated",t,e)});if(!o)for(n in s)c[n]||ur(s[n],"unbind",e,e,a)}(e,t)}var ar=Object.create(null);function sr(e,t){var n,r,i=Object.create(null);if(!e)return i;for(n=0;n<e.length;n++)(r=e[n]).modifiers||(r.modifiers=ar),i[cr(r)]=r,r.def=Le(t.$options,"directives",r.name);return i}function cr(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function ur(e,t,n,r,i){var o=e.def&&e.def[t];if(o)try{o(n.elm,e,n,r,i)}catch(r){Re(r,n.context,"directive "+e.name+" "+t+" hook")}}var lr=[Yn,ir];function fr(e,r){var i=r.componentOptions;if(!(n(i)&&!1===i.Ctor.options.inheritAttrs||t(e.data.attrs)&&t(r.data.attrs))){var o,a,s=r.elm,c=e.data.attrs||{},u=r.data.attrs||{};for(o in n(u.__ob__)&&(u=r.data.attrs=k({},u)),u)a=u[o],c[o]!==a&&pr(s,o,a);for(o in(J||W)&&u.value!==c.value&&pr(s,"value",u.value),c)t(u[o])&&(Dn(o)?s.removeAttributeNS(In,Pn(o)):Nn(o)||s.removeAttribute(o))}}function pr(e,t,n){e.tagName.indexOf("-")>-1?dr(e,t,n):Mn(t)?Rn(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):Nn(t)?e.setAttribute(t,Ln(t,n)):Dn(t)?Rn(n)?e.removeAttributeNS(In,Pn(t)):e.setAttributeNS(In,t,n):dr(e,t,n)}function dr(e,t,n){if(Rn(n))e.removeAttribute(t);else{if(J&&!q&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){var r=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",r)};e.addEventListener("input",r),e.__ieph=!0}e.setAttribute(t,n)}}var vr={create:fr,update:fr};function hr(e,r){var i=r.elm,o=r.data,a=e.data;if(!(t(o.staticClass)&&t(o.class)&&(t(a)||t(a.staticClass)&&t(a.class)))){var s=Fn(r),c=i._transitionClasses;n(c)&&(s=Bn(s,Un(c))),s!==i._prevClass&&(i.setAttribute("class",s),i._prevClass=s)}}var mr,yr,gr,_r,br,$r,wr={create:hr,update:hr},Cr=/[\w).+\-_$\]]/;function xr(e){var t,n,r,i,o,a=!1,s=!1,c=!1,u=!1,l=0,f=0,p=0,d=0;for(r=0;r<e.length;r++)if(n=t,t=e.charCodeAt(r),a)39===t&&92!==n&&(a=!1);else if(s)34===t&&92!==n&&(s=!1);else if(c)96===t&&92!==n&&(c=!1);else if(u)47===t&&92!==n&&(u=!1);else if(124!==t||124===e.charCodeAt(r+1)||124===e.charCodeAt(r-1)||l||f||p){switch(t){case 34:s=!0;break;case 39:a=!0;break;case 96:c=!0;break;case 40:p++;break;case 41:p--;break;case 91:f++;break;case 93:f--;break;case 123:l++;break;case 125:l--}if(47===t){for(var v=r-1,h=void 0;v>=0&&" "===(h=e.charAt(v));v--);h&&Cr.test(h)||(u=!0)}}else void 0===i?(d=r+1,i=e.slice(0,r).trim()):m();function m(){(o||(o=[])).push(e.slice(d,r).trim()),d=r+1}if(void 0===i?i=e.slice(0,r).trim():0!==d&&m(),o)for(r=0;r<o.length;r++)i=Ar(i,o[r]);return i}function Ar(e,t){var n=t.indexOf("(");if(n<0)return'_f("'+t+'")('+e+")";var r=t.slice(0,n),i=t.slice(n+1);return'_f("'+r+'")('+e+(")"!==i?","+i:i)}function kr(e,t){console.error("[Vue compiler]: "+e)}function Or(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function Sr(e,t,n,r,i){(e.props||(e.props=[])).push(Pr({name:t,value:n,dynamic:i},r)),e.plain=!1}function Tr(e,t,n,r,i){(i?e.dynamicAttrs||(e.dynamicAttrs=[]):e.attrs||(e.attrs=[])).push(Pr({name:t,value:n,dynamic:i},r)),e.plain=!1}function Er(e,t,n,r){e.attrsMap[t]=n,e.attrsList.push(Pr({name:t,value:n},r))}function Nr(e,t,n,r,i,o,a,s){(e.directives||(e.directives=[])).push(Pr({name:t,rawName:n,value:r,arg:i,isDynamicArg:o,modifiers:a},s)),e.plain=!1}function jr(e,t,n){return n?"_p("+t+',"'+e+'")':e+t}function Lr(t,n,r,i,o,a,s,c){var u;(i=i||e).right?c?n="("+n+")==='click'?'contextmenu':("+n+")":"click"===n&&(n="contextmenu",delete i.right):i.middle&&(c?n="("+n+")==='click'?'mouseup':("+n+")":"click"===n&&(n="mouseup")),i.capture&&(delete i.capture,n=jr("!",n,c)),i.once&&(delete i.once,n=jr("~",n,c)),i.passive&&(delete i.passive,n=jr("&",n,c)),i.native?(delete i.native,u=t.nativeEvents||(t.nativeEvents={})):u=t.events||(t.events={});var l=Pr({value:r.trim(),dynamic:c},s);i!==e&&(l.modifiers=i);var f=u[n];Array.isArray(f)?o?f.unshift(l):f.push(l):u[n]=f?o?[l,f]:[f,l]:l,t.plain=!1}function Mr(e,t,n){var r=Ir(e,":"+t)||Ir(e,"v-bind:"+t);if(null!=r)return xr(r);if(!1!==n){var i=Ir(e,t);if(null!=i)return JSON.stringify(i)}}function Ir(e,t,n){var r;if(null!=(r=e.attrsMap[t]))for(var i=e.attrsList,o=0,a=i.length;o<a;o++)if(i[o].name===t){i.splice(o,1);break}return n&&delete e.attrsMap[t],r}function Dr(e,t){for(var n=e.attrsList,r=0,i=n.length;r<i;r++){var o=n[r];if(t.test(o.name))return n.splice(r,1),o}}function Pr(e,t){return t&&(null!=t.start&&(e.start=t.start),null!=t.end&&(e.end=t.end)),e}function Rr(e,t,n){var r=n||{},i=r.number,o="$$v";r.trim&&(o="(typeof $$v === 'string'? $$v.trim(): $$v)"),i&&(o="_n("+o+")");var a=Fr(t,o);e.model={value:"("+t+")",expression:JSON.stringify(t),callback:"function ($$v) {"+a+"}"}}function Fr(e,t){var n=function(e){if(e=e.trim(),mr=e.length,e.indexOf("[")<0||e.lastIndexOf("]")<mr-1)return(_r=e.lastIndexOf("."))>-1?{exp:e.slice(0,_r),key:'"'+e.slice(_r+1)+'"'}:{exp:e,key:null};yr=e,_r=br=$r=0;for(;!Br();)Ur(gr=Hr())?Vr(gr):91===gr&&zr(gr);return{exp:e.slice(0,br),key:e.slice(br+1,$r)}}(e);return null===n.key?e+"="+t:"$set("+n.exp+", "+n.key+", "+t+")"}function Hr(){return yr.charCodeAt(++_r)}function Br(){return _r>=mr}function Ur(e){return 34===e||39===e}function zr(e){var t=1;for(br=_r;!Br();)if(Ur(e=Hr()))Vr(e);else if(91===e&&t++,93===e&&t--,0===t){$r=_r;break}}function Vr(e){for(var t=e;!Br()&&(e=Hr())!==t;);}var Kr,Jr="__r",qr="__c";function Wr(e,t,n){var r=Kr;return function i(){null!==t.apply(null,arguments)&&Xr(e,i,n,r)}}var Zr=ze&&!(G&&Number(G[1])<=53);function Gr(e,t,n,r){if(Zr){var i=on,o=t;t=o._wrapper=function(e){if(e.timeStamp>=i||e.target.ownerDocument!==document)return o.apply(this,arguments)}}Kr.addEventListener(e,t,Y?{capture:n,passive:r}:n)}function Xr(e,t,n,r){(r||Kr).removeEventListener(e,t._wrapper||t,n)}function Yr(e,r){if(!t(e.data.on)||!t(r.data.on)){var i=r.data.on||{},o=e.data.on||{};Kr=r.elm,function(e){if(n(e[Jr])){var t=J?"change":"input";e[t]=[].concat(e[Jr],e[t]||[]),delete e[Jr]}n(e[qr])&&(e.change=[].concat(e[qr],e.change||[]),delete e[qr])}(i),nt(i,o,Gr,Xr,Wr,r.context),Kr=void 0}}var Qr,ei={create:Yr,update:Yr};function ti(e,r){if(!t(e.data.domProps)||!t(r.data.domProps)){var i,o,a=r.elm,s=e.data.domProps||{},c=r.data.domProps||{};for(i in n(c.__ob__)&&(c=r.data.domProps=k({},c)),s)t(c[i])&&(a[i]="");for(i in c){if(o=c[i],"textContent"===i||"innerHTML"===i){if(r.children&&(r.children.length=0),o===s[i])continue;1===a.childNodes.length&&a.removeChild(a.childNodes[0])}if("value"===i||o!==s[i])if("value"===i){a._value=o;var u=t(o)?"":String(o);ni(a,u)&&(a.value=u)}else if("innerHTML"===i&&Kn(a.tagName)&&t(a.innerHTML)){(Qr=Qr||document.createElement("div")).innerHTML="<svg>"+o+"</svg>";for(var l=Qr.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;l.firstChild;)a.appendChild(l.firstChild)}else a[i]=o}}}function ni(e,t){return!e.composing&&("OPTION"===e.tagName||function(e,t){var n=!0;try{n=document.activeElement!==e}catch(e){}return n&&e.value!==t}(e,t)||function(e,t){var r=e.value,i=e._vModifiers;if(n(i)){if(i.number)return f(r)!==f(t);if(i.trim)return r.trim()!==t.trim()}return r!==t}(e,t))}var ri={create:ti,update:ti},ii=g(function(e){var t={},n=/:(.+)/;return e.split(/;(?![^(]*\))/g).forEach(function(e){if(e){var r=e.split(n);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t});function oi(e){var t=ai(e.style);return e.staticStyle?k(e.staticStyle,t):t}function ai(e){return Array.isArray(e)?O(e):"string"==typeof e?ii(e):e}var si,ci=/^--/,ui=/\s*!important$/,li=function(e,t,n){if(ci.test(t))e.style.setProperty(t,n);else if(ui.test(n))e.style.setProperty(C(t),n.replace(ui,""),"important");else{var r=pi(t);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)e.style[r]=n[i];else e.style[r]=n}},fi=["Webkit","Moz","ms"],pi=g(function(e){if(si=si||document.createElement("div").style,"filter"!==(e=b(e))&&e in si)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<fi.length;n++){var r=fi[n]+t;if(r in si)return r}});function di(e,r){var i=r.data,o=e.data;if(!(t(i.staticStyle)&&t(i.style)&&t(o.staticStyle)&&t(o.style))){var a,s,c=r.elm,u=o.staticStyle,l=o.normalizedStyle||o.style||{},f=u||l,p=ai(r.data.style)||{};r.data.normalizedStyle=n(p.__ob__)?k({},p):p;var d=function(e,t){var n,r={};if(t)for(var i=e;i.componentInstance;)(i=i.componentInstance._vnode)&&i.data&&(n=oi(i.data))&&k(r,n);(n=oi(e.data))&&k(r,n);for(var o=e;o=o.parent;)o.data&&(n=oi(o.data))&&k(r,n);return r}(r,!0);for(s in f)t(d[s])&&li(c,s,"");for(s in d)(a=d[s])!==f[s]&&li(c,s,null==a?"":a)}}var vi={create:di,update:di},hi=/\s+/;function mi(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(hi).forEach(function(t){return e.classList.add(t)}):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function yi(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(hi).forEach(function(t){return e.classList.remove(t)}):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{for(var n=" "+(e.getAttribute("class")||"")+" ",r=" "+t+" ";n.indexOf(r)>=0;)n=n.replace(r," ");(n=n.trim())?e.setAttribute("class",n):e.removeAttribute("class")}}function gi(e){if(e){if("object"==typeof e){var t={};return!1!==e.css&&k(t,_i(e.name||"v")),k(t,e),t}return"string"==typeof e?_i(e):void 0}}var _i=g(function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}}),bi=U&&!q,$i="transition",wi="animation",Ci="transition",xi="transitionend",Ai="animation",ki="animationend";bi&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Ci="WebkitTransition",xi="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Ai="WebkitAnimation",ki="webkitAnimationEnd"));var Oi=U?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function Si(e){Oi(function(){Oi(e)})}function Ti(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),mi(e,t))}function Ei(e,t){e._transitionClasses&&h(e._transitionClasses,t),yi(e,t)}function Ni(e,t,n){var r=Li(e,t),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===$i?xi:ki,c=0,u=function(){e.removeEventListener(s,l),n()},l=function(t){t.target===e&&++c>=a&&u()};setTimeout(function(){c<a&&u()},o+1),e.addEventListener(s,l)}var ji=/\b(transform|all)(,|$)/;function Li(e,t){var n,r=window.getComputedStyle(e),i=(r[Ci+"Delay"]||"").split(", "),o=(r[Ci+"Duration"]||"").split(", "),a=Mi(i,o),s=(r[Ai+"Delay"]||"").split(", "),c=(r[Ai+"Duration"]||"").split(", "),u=Mi(s,c),l=0,f=0;return t===$i?a>0&&(n=$i,l=a,f=o.length):t===wi?u>0&&(n=wi,l=u,f=c.length):f=(n=(l=Math.max(a,u))>0?a>u?$i:wi:null)?n===$i?o.length:c.length:0,{type:n,timeout:l,propCount:f,hasTransform:n===$i&&ji.test(r[Ci+"Property"])}}function Mi(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map(function(t,n){return Ii(t)+Ii(e[n])}))}function Ii(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Di(e,r){var i=e.elm;n(i._leaveCb)&&(i._leaveCb.cancelled=!0,i._leaveCb());var a=gi(e.data.transition);if(!t(a)&&!n(i._enterCb)&&1===i.nodeType){for(var s=a.css,c=a.type,u=a.enterClass,l=a.enterToClass,p=a.enterActiveClass,d=a.appearClass,v=a.appearToClass,h=a.appearActiveClass,m=a.beforeEnter,y=a.enter,g=a.afterEnter,_=a.enterCancelled,b=a.beforeAppear,$=a.appear,w=a.afterAppear,C=a.appearCancelled,x=a.duration,A=qt,k=qt.$vnode;k&&k.parent;)A=(k=k.parent).context;var O=!A._isMounted||!e.isRootInsert;if(!O||$||""===$){var S=O&&d?d:u,T=O&&h?h:p,E=O&&v?v:l,N=O&&b||m,j=O&&"function"==typeof $?$:y,M=O&&w||g,I=O&&C||_,D=f(o(x)?x.enter:x),P=!1!==s&&!q,R=Fi(j),F=i._enterCb=L(function(){P&&(Ei(i,E),Ei(i,T)),F.cancelled?(P&&Ei(i,S),I&&I(i)):M&&M(i),i._enterCb=null});e.data.show||rt(e,"insert",function(){var t=i.parentNode,n=t&&t._pending&&t._pending[e.key];n&&n.tag===e.tag&&n.elm._leaveCb&&n.elm._leaveCb(),j&&j(i,F)}),N&&N(i),P&&(Ti(i,S),Ti(i,T),Si(function(){Ei(i,S),F.cancelled||(Ti(i,E),R||(Ri(D)?setTimeout(F,D):Ni(i,c,F)))})),e.data.show&&(r&&r(),j&&j(i,F)),P||R||F()}}}function Pi(e,r){var i=e.elm;n(i._enterCb)&&(i._enterCb.cancelled=!0,i._enterCb());var a=gi(e.data.transition);if(t(a)||1!==i.nodeType)return r();if(!n(i._leaveCb)){var s=a.css,c=a.type,u=a.leaveClass,l=a.leaveToClass,p=a.leaveActiveClass,d=a.beforeLeave,v=a.leave,h=a.afterLeave,m=a.leaveCancelled,y=a.delayLeave,g=a.duration,_=!1!==s&&!q,b=Fi(v),$=f(o(g)?g.leave:g),w=i._leaveCb=L(function(){i.parentNode&&i.parentNode._pending&&(i.parentNode._pending[e.key]=null),_&&(Ei(i,l),Ei(i,p)),w.cancelled?(_&&Ei(i,u),m&&m(i)):(r(),h&&h(i)),i._leaveCb=null});y?y(C):C()}function C(){w.cancelled||(!e.data.show&&i.parentNode&&((i.parentNode._pending||(i.parentNode._pending={}))[e.key]=e),d&&d(i),_&&(Ti(i,u),Ti(i,p),Si(function(){Ei(i,u),w.cancelled||(Ti(i,l),b||(Ri($)?setTimeout(w,$):Ni(i,c,w)))})),v&&v(i,w),_||b||w())}}function Ri(e){return"number"==typeof e&&!isNaN(e)}function Fi(e){if(t(e))return!1;var r=e.fns;return n(r)?Fi(Array.isArray(r)?r[0]:r):(e._length||e.length)>1}function Hi(e,t){!0!==t.data.show&&Di(t)}var Bi=function(e){var o,a,s={},c=e.modules,u=e.nodeOps;for(o=0;o<tr.length;++o)for(s[tr[o]]=[],a=0;a<c.length;++a)n(c[a][tr[o]])&&s[tr[o]].push(c[a][tr[o]]);function l(e){var t=u.parentNode(e);n(t)&&u.removeChild(t,e)}function f(e,t,i,o,a,c,l){if(n(e.elm)&&n(c)&&(e=c[l]=he(e)),e.isRootInsert=!a,!function(e,t,i,o){var a=e.data;if(n(a)){var c=n(e.componentInstance)&&a.keepAlive;if(n(a=a.hook)&&n(a=a.init)&&a(e,!1),n(e.componentInstance))return d(e,t),v(i,e.elm,o),r(c)&&function(e,t,r,i){for(var o,a=e;a.componentInstance;)if(a=a.componentInstance._vnode,n(o=a.data)&&n(o=o.transition)){for(o=0;o<s.activate.length;++o)s.activate[o](er,a);t.push(a);break}v(r,e.elm,i)}(e,t,i,o),!0}}(e,t,i,o)){var f=e.data,p=e.children,m=e.tag;n(m)?(e.elm=e.ns?u.createElementNS(e.ns,m):u.createElement(m,e),g(e),h(e,p,t),n(f)&&y(e,t),v(i,e.elm,o)):r(e.isComment)?(e.elm=u.createComment(e.text),v(i,e.elm,o)):(e.elm=u.createTextNode(e.text),v(i,e.elm,o))}}function d(e,t){n(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,m(e)?(y(e,t),g(e)):(Qn(e),t.push(e))}function v(e,t,r){n(e)&&(n(r)?u.parentNode(r)===e&&u.insertBefore(e,t,r):u.appendChild(e,t))}function h(e,t,n){if(Array.isArray(t))for(var r=0;r<t.length;++r)f(t[r],n,e.elm,null,!0,t,r);else i(e.text)&&u.appendChild(e.elm,u.createTextNode(String(e.text)))}function m(e){for(;e.componentInstance;)e=e.componentInstance._vnode;return n(e.tag)}function y(e,t){for(var r=0;r<s.create.length;++r)s.create[r](er,e);n(o=e.data.hook)&&(n(o.create)&&o.create(er,e),n(o.insert)&&t.push(e))}function g(e){var t;if(n(t=e.fnScopeId))u.setStyleScope(e.elm,t);else for(var r=e;r;)n(t=r.context)&&n(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t),r=r.parent;n(t=qt)&&t!==e.context&&t!==e.fnContext&&n(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t)}function _(e,t,n,r,i,o){for(;r<=i;++r)f(n[r],o,e,t,!1,n,r)}function b(e){var t,r,i=e.data;if(n(i))for(n(t=i.hook)&&n(t=t.destroy)&&t(e),t=0;t<s.destroy.length;++t)s.destroy[t](e);if(n(t=e.children))for(r=0;r<e.children.length;++r)b(e.children[r])}function $(e,t,r,i){for(;r<=i;++r){var o=t[r];n(o)&&(n(o.tag)?(w(o),b(o)):l(o.elm))}}function w(e,t){if(n(t)||n(e.data)){var r,i=s.remove.length+1;for(n(t)?t.listeners+=i:t=function(e,t){function n(){0==--n.listeners&&l(e)}return n.listeners=t,n}(e.elm,i),n(r=e.componentInstance)&&n(r=r._vnode)&&n(r.data)&&w(r,t),r=0;r<s.remove.length;++r)s.remove[r](e,t);n(r=e.data.hook)&&n(r=r.remove)?r(e,t):t()}else l(e.elm)}function C(e,t,r,i){for(var o=r;o<i;o++){var a=t[o];if(n(a)&&nr(e,a))return o}}function x(e,i,o,a,c,l){if(e!==i){n(i.elm)&&n(a)&&(i=a[c]=he(i));var p=i.elm=e.elm;if(r(e.isAsyncPlaceholder))n(i.asyncFactory.resolved)?O(e.elm,i,o):i.isAsyncPlaceholder=!0;else if(r(i.isStatic)&&r(e.isStatic)&&i.key===e.key&&(r(i.isCloned)||r(i.isOnce)))i.componentInstance=e.componentInstance;else{var d,v=i.data;n(v)&&n(d=v.hook)&&n(d=d.prepatch)&&d(e,i);var h=e.children,y=i.children;if(n(v)&&m(i)){for(d=0;d<s.update.length;++d)s.update[d](e,i);n(d=v.hook)&&n(d=d.update)&&d(e,i)}t(i.text)?n(h)&&n(y)?h!==y&&function(e,r,i,o,a){for(var s,c,l,p=0,d=0,v=r.length-1,h=r[0],m=r[v],y=i.length-1,g=i[0],b=i[y],w=!a;p<=v&&d<=y;)t(h)?h=r[++p]:t(m)?m=r[--v]:nr(h,g)?(x(h,g,o,i,d),h=r[++p],g=i[++d]):nr(m,b)?(x(m,b,o,i,y),m=r[--v],b=i[--y]):nr(h,b)?(x(h,b,o,i,y),w&&u.insertBefore(e,h.elm,u.nextSibling(m.elm)),h=r[++p],b=i[--y]):nr(m,g)?(x(m,g,o,i,d),w&&u.insertBefore(e,m.elm,h.elm),m=r[--v],g=i[++d]):(t(s)&&(s=rr(r,p,v)),t(c=n(g.key)?s[g.key]:C(g,r,p,v))?f(g,o,e,h.elm,!1,i,d):nr(l=r[c],g)?(x(l,g,o,i,d),r[c]=void 0,w&&u.insertBefore(e,l.elm,h.elm)):f(g,o,e,h.elm,!1,i,d),g=i[++d]);p>v?_(e,t(i[y+1])?null:i[y+1].elm,i,d,y,o):d>y&&$(0,r,p,v)}(p,h,y,o,l):n(y)?(n(e.text)&&u.setTextContent(p,""),_(p,null,y,0,y.length-1,o)):n(h)?$(0,h,0,h.length-1):n(e.text)&&u.setTextContent(p,""):e.text!==i.text&&u.setTextContent(p,i.text),n(v)&&n(d=v.hook)&&n(d=d.postpatch)&&d(e,i)}}}function A(e,t,i){if(r(i)&&n(e.parent))e.parent.data.pendingInsert=t;else for(var o=0;o<t.length;++o)t[o].data.hook.insert(t[o])}var k=p("attrs,class,staticClass,staticStyle,key");function O(e,t,i,o){var a,s=t.tag,c=t.data,u=t.children;if(o=o||c&&c.pre,t.elm=e,r(t.isComment)&&n(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(n(c)&&(n(a=c.hook)&&n(a=a.init)&&a(t,!0),n(a=t.componentInstance)))return d(t,i),!0;if(n(s)){if(n(u))if(e.hasChildNodes())if(n(a=c)&&n(a=a.domProps)&&n(a=a.innerHTML)){if(a!==e.innerHTML)return!1}else{for(var l=!0,f=e.firstChild,p=0;p<u.length;p++){if(!f||!O(f,u[p],i,o)){l=!1;break}f=f.nextSibling}if(!l||f)return!1}else h(t,u,i);if(n(c)){var v=!1;for(var m in c)if(!k(m)){v=!0,y(t,i);break}!v&&c.class&&Qe(c.class)}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,i,o,a){if(!t(i)){var c,l=!1,p=[];if(t(e))l=!0,f(i,p);else{var d=n(e.nodeType);if(!d&&nr(e,i))x(e,i,p,null,null,a);else{if(d){if(1===e.nodeType&&e.hasAttribute(M)&&(e.removeAttribute(M),o=!0),r(o)&&O(e,i,p))return A(i,p,!0),e;c=e,e=new fe(u.tagName(c).toLowerCase(),{},[],void 0,c)}var v=e.elm,h=u.parentNode(v);if(f(i,p,v._leaveCb?null:h,u.nextSibling(v)),n(i.parent))for(var y=i.parent,g=m(i);y;){for(var _=0;_<s.destroy.length;++_)s.destroy[_](y);if(y.elm=i.elm,g){for(var w=0;w<s.create.length;++w)s.create[w](er,y);var C=y.data.hook.insert;if(C.merged)for(var k=1;k<C.fns.length;k++)C.fns[k]()}else Qn(y);y=y.parent}n(h)?$(0,[e],0,0):n(e.tag)&&b(e)}}return A(i,p,l),i.elm}n(e)&&b(e)}}({nodeOps:Xn,modules:[vr,wr,ei,ri,vi,U?{create:Hi,activate:Hi,remove:function(e,t){!0!==e.data.show?Pi(e,t):t()}}:{}].concat(lr)});q&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&Zi(e,"input")});var Ui={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?rt(n,"postpatch",function(){Ui.componentUpdated(e,t,n)}):zi(e,t,n.context),e._vOptions=[].map.call(e.options,Ji)):("textarea"===n.tag||Zn(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",qi),e.addEventListener("compositionend",Wi),e.addEventListener("change",Wi),q&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){zi(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,Ji);if(i.some(function(e,t){return!N(e,r[t])}))(e.multiple?t.value.some(function(e){return Ki(e,i)}):t.value!==t.oldValue&&Ki(t.value,i))&&Zi(e,"change")}}};function zi(e,t,n){Vi(e,t,n),(J||W)&&setTimeout(function(){Vi(e,t,n)},0)}function Vi(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=e.options.length;s<c;s++)if(a=e.options[s],i)o=j(r,Ji(a))>-1,a.selected!==o&&(a.selected=o);else if(N(Ji(a),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1)}}function Ki(e,t){return t.every(function(t){return!N(t,e)})}function Ji(e){return"_value"in e?e._value:e.value}function qi(e){e.target.composing=!0}function Wi(e){e.target.composing&&(e.target.composing=!1,Zi(e.target,"input"))}function Zi(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function Gi(e){return!e.componentInstance||e.data&&e.data.transition?e:Gi(e.componentInstance._vnode)}var Xi={model:Ui,show:{bind:function(e,t,n){var r=t.value,i=(n=Gi(n)).data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,Di(n,function(){e.style.display=o})):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value;!r!=!t.oldValue&&((n=Gi(n)).data&&n.data.transition?(n.data.show=!0,r?Di(n,function(){e.style.display=e.__vOriginalDisplay}):Pi(n,function(){e.style.display="none"})):e.style.display=r?e.__vOriginalDisplay:"none")},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}}},Yi={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Qi(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?Qi(Ut(t.children)):e}function eo(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[b(o)]=i[o];return t}function to(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}var no=function(e){return e.tag||Bt(e)},ro=function(e){return"show"===e.name},io={name:"transition",props:Yi,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(no)).length){var r=this.mode,o=n[0];if(function(e){for(;e=e.parent;)if(e.data.transition)return!0}(this.$vnode))return o;var a=Qi(o);if(!a)return o;if(this._leaving)return to(e,o);var s="__transition-"+this._uid+"-";a.key=null==a.key?a.isComment?s+"comment":s+a.tag:i(a.key)?0===String(a.key).indexOf(s)?a.key:s+a.key:a.key;var c=(a.data||(a.data={})).transition=eo(this),u=this._vnode,l=Qi(u);if(a.data.directives&&a.data.directives.some(ro)&&(a.data.show=!0),l&&l.data&&!function(e,t){return t.key===e.key&&t.tag===e.tag}(a,l)&&!Bt(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var f=l.data.transition=k({},c);if("out-in"===r)return this._leaving=!0,rt(f,"afterLeave",function(){t._leaving=!1,t.$forceUpdate()}),to(e,o);if("in-out"===r){if(Bt(a))return u;var p,d=function(){p()};rt(c,"afterEnter",d),rt(c,"enterCancelled",d),rt(f,"delayLeave",function(e){p=e})}}return o}}},oo=k({tag:String,moveClass:String},Yi);function ao(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function so(e){e.data.newPos=e.elm.getBoundingClientRect()}function co(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}delete oo.mode;var uo={Transition:io,TransitionGroup:{props:oo,beforeMount:function(){var e=this,t=this._update;this._update=function(n,r){var i=Wt(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,i(),t.call(e,n,r)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=eo(this),s=0;s<i.length;s++){var c=i[s];c.tag&&null!=c.key&&0!==String(c.key).indexOf("__vlist")&&(o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a)}if(r){for(var u=[],l=[],f=0;f<r.length;f++){var p=r[f];p.data.transition=a,p.data.pos=p.elm.getBoundingClientRect(),n[p.key]?u.push(p):l.push(p)}this.kept=e(t,null,u),this.removed=l}return e(t,null,o)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(ao),e.forEach(so),e.forEach(co),this._reflow=document.body.offsetHeight,e.forEach(function(e){if(e.data.moved){var n=e.elm,r=n.style;Ti(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(xi,n._moveCb=function e(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(xi,e),n._moveCb=null,Ei(n,t))})}}))},methods:{hasMove:function(e,t){if(!bi)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(e){yi(n,e)}),mi(n,t),n.style.display="none",this.$el.appendChild(n);var r=Li(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}}};bn.config.mustUseProp=En,bn.config.isReservedTag=Jn,bn.config.isReservedAttr=Sn,bn.config.getTagNamespace=qn,bn.config.isUnknownElement=function(e){if(!U)return!0;if(Jn(e))return!1;if(e=e.toLowerCase(),null!=Wn[e])return Wn[e];var t=document.createElement(e);return e.indexOf("-")>-1?Wn[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:Wn[e]=/HTMLUnknownElement/.test(t.toString())},k(bn.options.directives,Xi),k(bn.options.components,uo),bn.prototype.__patch__=U?Bi:S,bn.prototype.$mount=function(e,t){return function(e,t,n){var r;return e.$el=t,e.$options.render||(e.$options.render=de),Xt(e,"beforeMount"),r=function(){e._update(e._render(),n)},new un(e,r,S,{before:function(){e._isMounted&&!e._isDestroyed&&Xt(e,"beforeUpdate")}},!0),n=!1,null==e.$vnode&&(e._isMounted=!0,Xt(e,"mounted")),e}(this,e=e&&U?Gn(e):void 0,t)},U&&setTimeout(function(){P.devtools&&te&&te.emit("init",bn)},0);var lo=/\{\{((?:.|\r?\n)+?)\}\}/g,fo=/[-.*+?^${}()|[\]\/\\]/g,po=g(function(e){var t=e[0].replace(fo,"\\$&"),n=e[1].replace(fo,"\\$&");return new RegExp(t+"((?:.|\\n)+?)"+n,"g")});var vo={staticKeys:["staticClass"],transformNode:function(e,t){t.warn;var n=Ir(e,"class");n&&(e.staticClass=JSON.stringify(n));var r=Mr(e,"class",!1);r&&(e.classBinding=r)},genData:function(e){var t="";return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(t+="class:"+e.classBinding+","),t}};var ho,mo={staticKeys:["staticStyle"],transformNode:function(e,t){t.warn;var n=Ir(e,"style");n&&(e.staticStyle=JSON.stringify(ii(n)));var r=Mr(e,"style",!1);r&&(e.styleBinding=r)},genData:function(e){var t="";return e.staticStyle&&(t+="staticStyle:"+e.staticStyle+","),e.styleBinding&&(t+="style:("+e.styleBinding+"),"),t}},yo=function(e){return(ho=ho||document.createElement("div")).innerHTML=e,ho.textContent},go=p("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),_o=p("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),bo=p("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),$o=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,wo=/^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,Co="[a-zA-Z_][\\-\\.0-9_a-zA-Za-zA-Z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]*",xo="((?:"+Co+"\\:)?"+Co+")",Ao=new RegExp("^<"+xo),ko=/^\s*(\/?)>/,Oo=new RegExp("^<\\/"+xo+"[^>]*>"),So=/^<!DOCTYPE [^>]+>/i,To=/^<!\--/,Eo=/^<!\[/,No=p("script,style,textarea",!0),jo={},Lo={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n","&#9;":"\t","&#39;":"'"},Mo=/&(?:lt|gt|quot|amp|#39);/g,Io=/&(?:lt|gt|quot|amp|#39|#10|#9);/g,Do=p("pre,textarea",!0),Po=function(e,t){return e&&Do(e)&&"\n"===t[0]};function Ro(e,t){var n=t?Io:Mo;return e.replace(n,function(e){return Lo[e]})}var Fo,Ho,Bo,Uo,zo,Vo,Ko,Jo,qo=/^@|^v-on:/,Wo=/^v-|^@|^:/,Zo=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,Go=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,Xo=/^\(|\)$/g,Yo=/^\[.*\]$/,Qo=/:(.*)$/,ea=/^:|^\.|^v-bind:/,ta=/\.[^.]+/g,na=/^v-slot(:|$)|^#/,ra=/[\r\n]/,ia=/\s+/g,oa=g(yo),aa="_empty_";function sa(e,t,n){return{type:1,tag:e,attrsList:t,attrsMap:va(t),rawAttrsMap:{},parent:n,children:[]}}function ca(e,t){Fo=t.warn||kr,Vo=t.isPreTag||T,Ko=t.mustUseProp||T,Jo=t.getTagNamespace||T;t.isReservedTag;Bo=Or(t.modules,"transformNode"),Uo=Or(t.modules,"preTransformNode"),zo=Or(t.modules,"postTransformNode"),Ho=t.delimiters;var n,r,i=[],o=!1!==t.preserveWhitespace,a=t.whitespace,s=!1,c=!1;function u(e){if(l(e),s||e.processed||(e=ua(e,t)),i.length||e===n||n.if&&(e.elseif||e.else)&&fa(n,{exp:e.elseif,block:e}),r&&!e.forbidden)if(e.elseif||e.else)a=e,(u=function(e){var t=e.length;for(;t--;){if(1===e[t].type)return e[t];e.pop()}}(r.children))&&u.if&&fa(u,{exp:a.elseif,block:a});else{if(e.slotScope){var o=e.slotTarget||'"default"';(r.scopedSlots||(r.scopedSlots={}))[o]=e}r.children.push(e),e.parent=r}var a,u;e.children=e.children.filter(function(e){return!e.slotScope}),l(e),e.pre&&(s=!1),Vo(e.tag)&&(c=!1);for(var f=0;f<zo.length;f++)zo[f](e,t)}function l(e){if(!c)for(var t;(t=e.children[e.children.length-1])&&3===t.type&&" "===t.text;)e.children.pop()}return function(e,t){for(var n,r,i=[],o=t.expectHTML,a=t.isUnaryTag||T,s=t.canBeLeftOpenTag||T,c=0;e;){if(n=e,r&&No(r)){var u=0,l=r.toLowerCase(),f=jo[l]||(jo[l]=new RegExp("([\\s\\S]*?)(</"+l+"[^>]*>)","i")),p=e.replace(f,function(e,n,r){return u=r.length,No(l)||"noscript"===l||(n=n.replace(/<!\--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),Po(l,n)&&(n=n.slice(1)),t.chars&&t.chars(n),""});c+=e.length-p.length,e=p,k(l,c-u,c)}else{var d=e.indexOf("<");if(0===d){if(To.test(e)){var v=e.indexOf("--\x3e");if(v>=0){t.shouldKeepComment&&t.comment(e.substring(4,v),c,c+v+3),C(v+3);continue}}if(Eo.test(e)){var h=e.indexOf("]>");if(h>=0){C(h+2);continue}}var m=e.match(So);if(m){C(m[0].length);continue}var y=e.match(Oo);if(y){var g=c;C(y[0].length),k(y[1],g,c);continue}var _=x();if(_){A(_),Po(_.tagName,e)&&C(1);continue}}var b=void 0,$=void 0,w=void 0;if(d>=0){for($=e.slice(d);!(Oo.test($)||Ao.test($)||To.test($)||Eo.test($)||(w=$.indexOf("<",1))<0);)d+=w,$=e.slice(d);b=e.substring(0,d)}d<0&&(b=e),b&&C(b.length),t.chars&&b&&t.chars(b,c-b.length,c)}if(e===n){t.chars&&t.chars(e);break}}function C(t){c+=t,e=e.substring(t)}function x(){var t=e.match(Ao);if(t){var n,r,i={tagName:t[1],attrs:[],start:c};for(C(t[0].length);!(n=e.match(ko))&&(r=e.match(wo)||e.match($o));)r.start=c,C(r[0].length),r.end=c,i.attrs.push(r);if(n)return i.unarySlash=n[1],C(n[0].length),i.end=c,i}}function A(e){var n=e.tagName,c=e.unarySlash;o&&("p"===r&&bo(n)&&k(r),s(n)&&r===n&&k(n));for(var u=a(n)||!!c,l=e.attrs.length,f=new Array(l),p=0;p<l;p++){var d=e.attrs[p],v=d[3]||d[4]||d[5]||"",h="a"===n&&"href"===d[1]?t.shouldDecodeNewlinesForHref:t.shouldDecodeNewlines;f[p]={name:d[1],value:Ro(v,h)}}u||(i.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:f,start:e.start,end:e.end}),r=n),t.start&&t.start(n,f,u,e.start,e.end)}function k(e,n,o){var a,s;if(null==n&&(n=c),null==o&&(o=c),e)for(s=e.toLowerCase(),a=i.length-1;a>=0&&i[a].lowerCasedTag!==s;a--);else a=0;if(a>=0){for(var u=i.length-1;u>=a;u--)t.end&&t.end(i[u].tag,n,o);i.length=a,r=a&&i[a-1].tag}else"br"===s?t.start&&t.start(e,[],!0,n,o):"p"===s&&(t.start&&t.start(e,[],!1,n,o),t.end&&t.end(e,n,o))}k()}(e,{warn:Fo,expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,canBeLeftOpenTag:t.canBeLeftOpenTag,shouldDecodeNewlines:t.shouldDecodeNewlines,shouldDecodeNewlinesForHref:t.shouldDecodeNewlinesForHref,shouldKeepComment:t.comments,outputSourceRange:t.outputSourceRange,start:function(e,o,a,l){var f=r&&r.ns||Jo(e);J&&"svg"===f&&(o=function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];ha.test(r.name)||(r.name=r.name.replace(ma,""),t.push(r))}return t}(o));var p,d=sa(e,o,r);f&&(d.ns=f),"style"!==(p=d).tag&&("script"!==p.tag||p.attrsMap.type&&"text/javascript"!==p.attrsMap.type)||ee()||(d.forbidden=!0);for(var v=0;v<Uo.length;v++)d=Uo[v](d,t)||d;s||(!function(e){null!=Ir(e,"v-pre")&&(e.pre=!0)}(d),d.pre&&(s=!0)),Vo(d.tag)&&(c=!0),s?function(e){var t=e.attrsList,n=t.length;if(n)for(var r=e.attrs=new Array(n),i=0;i<n;i++)r[i]={name:t[i].name,value:JSON.stringify(t[i].value)},null!=t[i].start&&(r[i].start=t[i].start,r[i].end=t[i].end);else e.pre||(e.plain=!0)}(d):d.processed||(la(d),function(e){var t=Ir(e,"v-if");if(t)e.if=t,fa(e,{exp:t,block:e});else{null!=Ir(e,"v-else")&&(e.else=!0);var n=Ir(e,"v-else-if");n&&(e.elseif=n)}}(d),function(e){null!=Ir(e,"v-once")&&(e.once=!0)}(d)),n||(n=d),a?u(d):(r=d,i.push(d))},end:function(e,t,n){var o=i[i.length-1];i.length-=1,r=i[i.length-1],u(o)},chars:function(e,t,n){if(r&&(!J||"textarea"!==r.tag||r.attrsMap.placeholder!==e)){var i,u,l,f=r.children;if(e=c||e.trim()?"script"===(i=r).tag||"style"===i.tag?e:oa(e):f.length?a?"condense"===a&&ra.test(e)?"":" ":o?" ":"":"")"condense"===a&&(e=e.replace(ia," ")),!s&&" "!==e&&(u=function(e,t){var n=t?po(t):lo;if(n.test(e)){for(var r,i,o,a=[],s=[],c=n.lastIndex=0;r=n.exec(e);){(i=r.index)>c&&(s.push(o=e.slice(c,i)),a.push(JSON.stringify(o)));var u=xr(r[1].trim());a.push("_s("+u+")"),s.push({"@binding":u}),c=i+r[0].length}return c<e.length&&(s.push(o=e.slice(c)),a.push(JSON.stringify(o))),{expression:a.join("+"),tokens:s}}}(e,Ho))?l={type:2,expression:u.expression,tokens:u.tokens,text:e}:" "===e&&f.length&&" "===f[f.length-1].text||(l={type:3,text:e}),l&&f.push(l)}},comment:function(e,t,n){if(r){var i={type:3,text:e,isComment:!0};r.children.push(i)}}}),n}function ua(e,t){var n,r;(r=Mr(n=e,"key"))&&(n.key=r),e.plain=!e.key&&!e.scopedSlots&&!e.attrsList.length,function(e){var t=Mr(e,"ref");t&&(e.ref=t,e.refInFor=function(e){var t=e;for(;t;){if(void 0!==t.for)return!0;t=t.parent}return!1}(e))}(e),function(e){var t;"template"===e.tag?(t=Ir(e,"scope"),e.slotScope=t||Ir(e,"slot-scope")):(t=Ir(e,"slot-scope"))&&(e.slotScope=t);var n=Mr(e,"slot");n&&(e.slotTarget='""'===n?'"default"':n,e.slotTargetDynamic=!(!e.attrsMap[":slot"]&&!e.attrsMap["v-bind:slot"]),"template"===e.tag||e.slotScope||Tr(e,"slot",n,function(e,t){return e.rawAttrsMap[":"+t]||e.rawAttrsMap["v-bind:"+t]||e.rawAttrsMap[t]}(e,"slot")));if("template"===e.tag){var r=Dr(e,na);if(r){var i=pa(r),o=i.name,a=i.dynamic;e.slotTarget=o,e.slotTargetDynamic=a,e.slotScope=r.value||aa}}else{var s=Dr(e,na);if(s){var c=e.scopedSlots||(e.scopedSlots={}),u=pa(s),l=u.name,f=u.dynamic,p=c[l]=sa("template",[],e);p.slotTarget=l,p.slotTargetDynamic=f,p.children=e.children.filter(function(e){if(!e.slotScope)return e.parent=p,!0}),p.slotScope=s.value||aa,e.children=[],e.plain=!1}}}(e),function(e){"slot"===e.tag&&(e.slotName=Mr(e,"name"))}(e),function(e){var t;(t=Mr(e,"is"))&&(e.component=t);null!=Ir(e,"inline-template")&&(e.inlineTemplate=!0)}(e);for(var i=0;i<Bo.length;i++)e=Bo[i](e,t)||e;return function(e){var t,n,r,i,o,a,s,c,u=e.attrsList;for(t=0,n=u.length;t<n;t++)if(r=i=u[t].name,o=u[t].value,Wo.test(r))if(e.hasBindings=!0,(a=da(r.replace(Wo,"")))&&(r=r.replace(ta,"")),ea.test(r))r=r.replace(ea,""),o=xr(o),(c=Yo.test(r))&&(r=r.slice(1,-1)),a&&(a.prop&&!c&&"innerHtml"===(r=b(r))&&(r="innerHTML"),a.camel&&!c&&(r=b(r)),a.sync&&(s=Fr(o,"$event"),c?Lr(e,'"update:"+('+r+")",s,null,!1,0,u[t],!0):(Lr(e,"update:"+b(r),s,null,!1,0,u[t]),C(r)!==b(r)&&Lr(e,"update:"+C(r),s,null,!1,0,u[t])))),a&&a.prop||!e.component&&Ko(e.tag,e.attrsMap.type,r)?Sr(e,r,o,u[t],c):Tr(e,r,o,u[t],c);else if(qo.test(r))r=r.replace(qo,""),(c=Yo.test(r))&&(r=r.slice(1,-1)),Lr(e,r,o,a,!1,0,u[t],c);else{var l=(r=r.replace(Wo,"")).match(Qo),f=l&&l[1];c=!1,f&&(r=r.slice(0,-(f.length+1)),Yo.test(f)&&(f=f.slice(1,-1),c=!0)),Nr(e,r,i,o,f,c,a,u[t])}else Tr(e,r,JSON.stringify(o),u[t]),!e.component&&"muted"===r&&Ko(e.tag,e.attrsMap.type,r)&&Sr(e,r,"true",u[t])}(e),e}function la(e){var t;if(t=Ir(e,"v-for")){var n=function(e){var t=e.match(Zo);if(!t)return;var n={};n.for=t[2].trim();var r=t[1].trim().replace(Xo,""),i=r.match(Go);i?(n.alias=r.replace(Go,"").trim(),n.iterator1=i[1].trim(),i[2]&&(n.iterator2=i[2].trim())):n.alias=r;return n}(t);n&&k(e,n)}}function fa(e,t){e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t)}function pa(e){var t=e.name.replace(na,"");return t||"#"!==e.name[0]&&(t="default"),Yo.test(t)?{name:t.slice(1,-1),dynamic:!0}:{name:'"'+t+'"',dynamic:!1}}function da(e){var t=e.match(ta);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0}),n}}function va(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n].name]=e[n].value;return t}var ha=/^xmlns:NS\d+/,ma=/^NS\d+:/;function ya(e){return sa(e.tag,e.attrsList.slice(),e.parent)}var ga=[vo,mo,{preTransformNode:function(e,t){if("input"===e.tag){var n,r=e.attrsMap;if(!r["v-model"])return;if((r[":type"]||r["v-bind:type"])&&(n=Mr(e,"type")),r.type||n||!r["v-bind"]||(n="("+r["v-bind"]+").type"),n){var i=Ir(e,"v-if",!0),o=i?"&&("+i+")":"",a=null!=Ir(e,"v-else",!0),s=Ir(e,"v-else-if",!0),c=ya(e);la(c),Er(c,"type","checkbox"),ua(c,t),c.processed=!0,c.if="("+n+")==='checkbox'"+o,fa(c,{exp:c.if,block:c});var u=ya(e);Ir(u,"v-for",!0),Er(u,"type","radio"),ua(u,t),fa(c,{exp:"("+n+")==='radio'"+o,block:u});var l=ya(e);return Ir(l,"v-for",!0),Er(l,":type",n),ua(l,t),fa(c,{exp:i,block:l}),a?c.else=!0:s&&(c.elseif=s),c}}}}];var _a,ba,$a={expectHTML:!0,modules:ga,directives:{model:function(e,t,n){var r=t.value,i=t.modifiers,o=e.tag,a=e.attrsMap.type;if(e.component)return Rr(e,r,i),!1;if("select"===o)!function(e,t,n){var r='var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(n&&n.number?"_n(val)":"val")+"});";r=r+" "+Fr(t,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),Lr(e,"change",r,null,!0)}(e,r,i);else if("input"===o&&"checkbox"===a)!function(e,t,n){var r=n&&n.number,i=Mr(e,"value")||"null",o=Mr(e,"true-value")||"true",a=Mr(e,"false-value")||"false";Sr(e,"checked","Array.isArray("+t+")?_i("+t+","+i+")>-1"+("true"===o?":("+t+")":":_q("+t+","+o+")")),Lr(e,"change","var $$a="+t+",$$el=$event.target,$$c=$$el.checked?("+o+"):("+a+");if(Array.isArray($$a)){var $$v="+(r?"_n("+i+")":i)+",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&("+Fr(t,"$$a.concat([$$v])")+")}else{$$i>-1&&("+Fr(t,"$$a.slice(0,$$i).concat($$a.slice($$i+1))")+")}}else{"+Fr(t,"$$c")+"}",null,!0)}(e,r,i);else if("input"===o&&"radio"===a)!function(e,t,n){var r=n&&n.number,i=Mr(e,"value")||"null";Sr(e,"checked","_q("+t+","+(i=r?"_n("+i+")":i)+")"),Lr(e,"change",Fr(t,i),null,!0)}(e,r,i);else if("input"===o||"textarea"===o)!function(e,t,n){var r=e.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,c=!o&&"range"!==r,u=o?"change":"range"===r?Jr:"input",l="$event.target.value";s&&(l="$event.target.value.trim()"),a&&(l="_n("+l+")");var f=Fr(t,l);c&&(f="if($event.target.composing)return;"+f),Sr(e,"value","("+t+")"),Lr(e,u,f,null,!0),(s||a)&&Lr(e,"blur","$forceUpdate()")}(e,r,i);else if(!P.isReservedTag(o))return Rr(e,r,i),!1;return!0},text:function(e,t){t.value&&Sr(e,"textContent","_s("+t.value+")",t)},html:function(e,t){t.value&&Sr(e,"innerHTML","_s("+t.value+")",t)}},isPreTag:function(e){return"pre"===e},isUnaryTag:go,mustUseProp:En,canBeLeftOpenTag:_o,isReservedTag:Jn,getTagNamespace:qn,staticKeys:function(e){return e.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(",")}(ga)},wa=g(function(e){return p("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap"+(e?","+e:""))});function Ca(e,t){e&&(_a=wa(t.staticKeys||""),ba=t.isReservedTag||T,function e(t){t.static=function(e){if(2===e.type)return!1;if(3===e.type)return!0;return!(!e.pre&&(e.hasBindings||e.if||e.for||d(e.tag)||!ba(e.tag)||function(e){for(;e.parent;){if("template"!==(e=e.parent).tag)return!1;if(e.for)return!0}return!1}(e)||!Object.keys(e).every(_a)))}(t);if(1===t.type){if(!ba(t.tag)&&"slot"!==t.tag&&null==t.attrsMap["inline-template"])return;for(var n=0,r=t.children.length;n<r;n++){var i=t.children[n];e(i),i.static||(t.static=!1)}if(t.ifConditions)for(var o=1,a=t.ifConditions.length;o<a;o++){var s=t.ifConditions[o].block;e(s),s.static||(t.static=!1)}}}(e),function e(t,n){if(1===t.type){if((t.static||t.once)&&(t.staticInFor=n),t.static&&t.children.length&&(1!==t.children.length||3!==t.children[0].type))return void(t.staticRoot=!0);if(t.staticRoot=!1,t.children)for(var r=0,i=t.children.length;r<i;r++)e(t.children[r],n||!!t.for);if(t.ifConditions)for(var o=1,a=t.ifConditions.length;o<a;o++)e(t.ifConditions[o].block,n)}}(e,!1))}var xa=/^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,Aa=/\([^)]*?\);*$/,ka=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,Oa={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},Sa={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]},Ta=function(e){return"if("+e+")return null;"},Ea={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:Ta("$event.target !== $event.currentTarget"),ctrl:Ta("!$event.ctrlKey"),shift:Ta("!$event.shiftKey"),alt:Ta("!$event.altKey"),meta:Ta("!$event.metaKey"),left:Ta("'button' in $event && $event.button !== 0"),middle:Ta("'button' in $event && $event.button !== 1"),right:Ta("'button' in $event && $event.button !== 2")};function Na(e,t){var n=t?"nativeOn:":"on:",r="",i="";for(var o in e){var a=ja(e[o]);e[o]&&e[o].dynamic?i+=o+","+a+",":r+='"'+o+'":'+a+","}return r="{"+r.slice(0,-1)+"}",i?n+"_d("+r+",["+i.slice(0,-1)+"])":n+r}function ja(e){if(!e)return"function(){}";if(Array.isArray(e))return"["+e.map(function(e){return ja(e)}).join(",")+"]";var t=ka.test(e.value),n=xa.test(e.value),r=ka.test(e.value.replace(Aa,""));if(e.modifiers){var i="",o="",a=[];for(var s in e.modifiers)if(Ea[s])o+=Ea[s],Oa[s]&&a.push(s);else if("exact"===s){var c=e.modifiers;o+=Ta(["ctrl","shift","alt","meta"].filter(function(e){return!c[e]}).map(function(e){return"$event."+e+"Key"}).join("||"))}else a.push(s);return a.length&&(i+=function(e){return"if(('keyCode' in $event)&&"+e.map(La).join("&&")+")return null;"}(a)),o&&(i+=o),"function($event){"+i+(t?"return "+e.value+"($event)":n?"return ("+e.value+")($event)":r?"return "+e.value:e.value)+"}"}return t||n?e.value:"function($event){"+(r?"return "+e.value:e.value)+"}"}function La(e){var t=parseInt(e,10);if(t)return"$event.keyCode!=="+t;var n=Oa[e],r=Sa[e];return"_k($event.keyCode,"+JSON.stringify(e)+","+JSON.stringify(n)+",$event.key,"+JSON.stringify(r)+")"}var Ma={on:function(e,t){e.wrapListeners=function(e){return"_g("+e+","+t.value+")"}},bind:function(e,t){e.wrapData=function(n){return"_b("+n+",'"+e.tag+"',"+t.value+","+(t.modifiers&&t.modifiers.prop?"true":"false")+(t.modifiers&&t.modifiers.sync?",true":"")+")"}},cloak:S},Ia=function(e){this.options=e,this.warn=e.warn||kr,this.transforms=Or(e.modules,"transformCode"),this.dataGenFns=Or(e.modules,"genData"),this.directives=k(k({},Ma),e.directives);var t=e.isReservedTag||T;this.maybeComponent=function(e){return!!e.component||!t(e.tag)},this.onceId=0,this.staticRenderFns=[],this.pre=!1};function Da(e,t){var n=new Ia(t);return{render:"with(this){return "+(e?Pa(e,n):'_c("div")')+"}",staticRenderFns:n.staticRenderFns}}function Pa(e,t){if(e.parent&&(e.pre=e.pre||e.parent.pre),e.staticRoot&&!e.staticProcessed)return Ra(e,t);if(e.once&&!e.onceProcessed)return Fa(e,t);if(e.for&&!e.forProcessed)return Ba(e,t);if(e.if&&!e.ifProcessed)return Ha(e,t);if("template"!==e.tag||e.slotTarget||t.pre){if("slot"===e.tag)return function(e,t){var n=e.slotName||'"default"',r=Va(e,t),i="_t("+n+(r?","+r:""),o=e.attrs||e.dynamicAttrs?qa((e.attrs||[]).concat(e.dynamicAttrs||[]).map(function(e){return{name:b(e.name),value:e.value,dynamic:e.dynamic}})):null,a=e.attrsMap["v-bind"];!o&&!a||r||(i+=",null");o&&(i+=","+o);a&&(i+=(o?"":",null")+","+a);return i+")"}(e,t);var n;if(e.component)n=function(e,t,n){var r=t.inlineTemplate?null:Va(t,n,!0);return"_c("+e+","+Ua(t,n)+(r?","+r:"")+")"}(e.component,e,t);else{var r;(!e.plain||e.pre&&t.maybeComponent(e))&&(r=Ua(e,t));var i=e.inlineTemplate?null:Va(e,t,!0);n="_c('"+e.tag+"'"+(r?","+r:"")+(i?","+i:"")+")"}for(var o=0;o<t.transforms.length;o++)n=t.transforms[o](e,n);return n}return Va(e,t)||"void 0"}function Ra(e,t){e.staticProcessed=!0;var n=t.pre;return e.pre&&(t.pre=e.pre),t.staticRenderFns.push("with(this){return "+Pa(e,t)+"}"),t.pre=n,"_m("+(t.staticRenderFns.length-1)+(e.staticInFor?",true":"")+")"}function Fa(e,t){if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return Ha(e,t);if(e.staticInFor){for(var n="",r=e.parent;r;){if(r.for){n=r.key;break}r=r.parent}return n?"_o("+Pa(e,t)+","+t.onceId+++","+n+")":Pa(e,t)}return Ra(e,t)}function Ha(e,t,n,r){return e.ifProcessed=!0,function e(t,n,r,i){if(!t.length)return i||"_e()";var o=t.shift();return o.exp?"("+o.exp+")?"+a(o.block)+":"+e(t,n,r,i):""+a(o.block);function a(e){return r?r(e,n):e.once?Fa(e,n):Pa(e,n)}}(e.ifConditions.slice(),t,n,r)}function Ba(e,t,n,r){var i=e.for,o=e.alias,a=e.iterator1?","+e.iterator1:"",s=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,(r||"_l")+"(("+i+"),function("+o+a+s+"){return "+(n||Pa)(e,t)+"})"}function Ua(e,t){var n="{",r=function(e,t){var n=e.directives;if(!n)return;var r,i,o,a,s="directives:[",c=!1;for(r=0,i=n.length;r<i;r++){o=n[r],a=!0;var u=t.directives[o.name];u&&(a=!!u(e,o,t.warn)),a&&(c=!0,s+='{name:"'+o.name+'",rawName:"'+o.rawName+'"'+(o.value?",value:("+o.value+"),expression:"+JSON.stringify(o.value):"")+(o.arg?",arg:"+(o.isDynamicArg?o.arg:'"'+o.arg+'"'):"")+(o.modifiers?",modifiers:"+JSON.stringify(o.modifiers):"")+"},")}if(c)return s.slice(0,-1)+"]"}(e,t);r&&(n+=r+","),e.key&&(n+="key:"+e.key+","),e.ref&&(n+="ref:"+e.ref+","),e.refInFor&&(n+="refInFor:true,"),e.pre&&(n+="pre:true,"),e.component&&(n+='tag:"'+e.tag+'",');for(var i=0;i<t.dataGenFns.length;i++)n+=t.dataGenFns[i](e);if(e.attrs&&(n+="attrs:"+qa(e.attrs)+","),e.props&&(n+="domProps:"+qa(e.props)+","),e.events&&(n+=Na(e.events,!1)+","),e.nativeEvents&&(n+=Na(e.nativeEvents,!0)+","),e.slotTarget&&!e.slotScope&&(n+="slot:"+e.slotTarget+","),e.scopedSlots&&(n+=function(e,t,n){var r=Object.keys(t).some(function(e){var n=t[e];return n.slotTargetDynamic||n.if||n.for});if(!r)for(var i=e.parent;i;){if(i.slotScope&&i.slotScope!==aa){r=!0;break}i=i.parent}return"scopedSlots:_u(["+Object.keys(t).map(function(e){return za(t[e],n)}).join(",")+"]"+(r?",true":"")+")"}(e,e.scopedSlots,t)+","),e.model&&(n+="model:{value:"+e.model.value+",callback:"+e.model.callback+",expression:"+e.model.expression+"},"),e.inlineTemplate){var o=function(e,t){var n=e.children[0];if(n&&1===n.type){var r=Da(n,t.options);return"inlineTemplate:{render:function(){"+r.render+"},staticRenderFns:["+r.staticRenderFns.map(function(e){return"function(){"+e+"}"}).join(",")+"]}"}}(e,t);o&&(n+=o+",")}return n=n.replace(/,$/,"")+"}",e.dynamicAttrs&&(n="_b("+n+',"'+e.tag+'",'+qa(e.dynamicAttrs)+")"),e.wrapData&&(n=e.wrapData(n)),e.wrapListeners&&(n=e.wrapListeners(n)),n}function za(e,t){var n=e.attrsMap["slot-scope"];if(e.if&&!e.ifProcessed&&!n)return Ha(e,t,za,"null");if(e.for&&!e.forProcessed)return Ba(e,t,za);var r=e.slotScope===aa?"":String(e.slotScope),i="function("+r+"){return "+("template"===e.tag?e.if&&n?"("+e.if+")?"+(Va(e,t)||"undefined")+":undefined":Va(e,t)||"undefined":Pa(e,t))+"}",o=r?"":",proxy:true";return"{key:"+(e.slotTarget||'"default"')+",fn:"+i+o+"}"}function Va(e,t,n,r,i){var o=e.children;if(o.length){var a=o[0];if(1===o.length&&a.for&&"template"!==a.tag&&"slot"!==a.tag){var s=n?t.maybeComponent(a)?",1":",0":"";return""+(r||Pa)(a,t)+s}var c=n?function(e,t){for(var n=0,r=0;r<e.length;r++){var i=e[r];if(1===i.type){if(Ka(i)||i.ifConditions&&i.ifConditions.some(function(e){return Ka(e.block)})){n=2;break}(t(i)||i.ifConditions&&i.ifConditions.some(function(e){return t(e.block)}))&&(n=1)}}return n}(o,t.maybeComponent):0,u=i||Ja;return"["+o.map(function(e){return u(e,t)}).join(",")+"]"+(c?","+c:"")}}function Ka(e){return void 0!==e.for||"template"===e.tag||"slot"===e.tag}function Ja(e,t){return 1===e.type?Pa(e,t):3===e.type&&e.isComment?(r=e,"_e("+JSON.stringify(r.text)+")"):"_v("+(2===(n=e).type?n.expression:Wa(JSON.stringify(n.text)))+")";var n,r}function qa(e){for(var t="",n="",r=0;r<e.length;r++){var i=e[r],o=Wa(i.value);i.dynamic?n+=i.name+","+o+",":t+='"'+i.name+'":'+o+","}return t="{"+t.slice(0,-1)+"}",n?"_d("+t+",["+n.slice(0,-1)+"])":t}function Wa(e){return e.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b");function Za(e,t){try{return new Function(e)}catch(n){return t.push({err:n,code:e}),S}}function Ga(e){var t=Object.create(null);return function(n,r,i){(r=k({},r)).warn;delete r.warn;var o=r.delimiters?String(r.delimiters)+n:n;if(t[o])return t[o];var a=e(n,r),s={},c=[];return s.render=Za(a.render,c),s.staticRenderFns=a.staticRenderFns.map(function(e){return Za(e,c)}),t[o]=s}}var Xa,Ya,Qa=(Xa=function(e,t){var n=ca(e.trim(),t);!1!==t.optimize&&Ca(n,t);var r=Da(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}},function(e){function t(t,n){var r=Object.create(e),i=[],o=[];if(n)for(var a in n.modules&&(r.modules=(e.modules||[]).concat(n.modules)),n.directives&&(r.directives=k(Object.create(e.directives||null),n.directives)),n)"modules"!==a&&"directives"!==a&&(r[a]=n[a]);r.warn=function(e,t,n){(n?o:i).push(e)};var s=Xa(t.trim(),r);return s.errors=i,s.tips=o,s}return{compile:t,compileToFunctions:Ga(t)}})($a),es=(Qa.compile,Qa.compileToFunctions);function ts(e){return(Ya=Ya||document.createElement("div")).innerHTML=e?'<a href="\n"/>':'<div a="\n"/>',Ya.innerHTML.indexOf("&#10;")>0}var ns=!!U&&ts(!1),rs=!!U&&ts(!0),is=g(function(e){var t=Gn(e);return t&&t.innerHTML}),os=bn.prototype.$mount;return bn.prototype.$mount=function(e,t){if((e=e&&Gn(e))===document.body||e===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=is(r));else{if(!r.nodeType)return this;r=r.innerHTML}else e&&(r=function(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}(e));if(r){var i=es(r,{outputSourceRange:!1,shouldDecodeNewlines:ns,shouldDecodeNewlinesForHref:rs,delimiters:n.delimiters,comments:n.comments},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return os.call(this,e,t)},bn.compile=es,bn});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../node-libs-browser/node_modules/timers-browserify/main.js */ "./node_modules/node-libs-browser/node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/webfontloader/webfontloader.js":
/*!*****************************************************!*\
  !*** ./node_modules/webfontloader/webfontloader.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function B(){this.a=0;this.c=null}function C(a){a.a++;return function(){a.a--;D(a)}}function E(a,b){a.c=b;D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)};function F(a){this.a=a||"-"}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading")}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}K(a,"inactive")}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function N(a){u(a.c,"body",a.a)}function O(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")};function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m)}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this)};
function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v)}function ma(a){setTimeout(p(function(){U(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e)}K(b,"fontinactive",a);na(this)};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a))};function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a)};
function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):xa?!1:!0}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})};function ra(a,b){this.c=a;this.a=b}
ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+d}else a([])};function sa(a,b){this.c=a;this.a=b}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f)})};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||""}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function ya(a){this.f=a;this.a=[];this.c={}}
var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else{k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("")}}else k="";k&&g.push(k)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d))}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}};function Ea(a,b){this.c=a;this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa)})};function Ga(a,b){this.c=a;this.a=b}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};function Ha(a,b){this.c=a;this.f=b;this.a=[]}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)}; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return Z}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;}());


/***/ }),

/***/ "./node_modules/webpack-hot-middleware/client-overlay.js":
/*!**************************************************!*\
  !*** (webpack)-hot-middleware/client-overlay.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*eslint-env browser*/

var clientOverlay = document.createElement('div');
clientOverlay.id = 'webpack-hot-middleware-clientOverlay';
var styles = {
  background: 'rgba(0,0,0,0.85)',
  color: '#E8E8E8',
  lineHeight: '1.2',
  whiteSpace: 'pre',
  fontFamily: 'Menlo, Consolas, monospace',
  fontSize: '13px',
  position: 'fixed',
  zIndex: 9999,
  padding: '10px',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  overflow: 'auto',
  dir: 'ltr',
  textAlign: 'left'
};

var ansiHTML = __webpack_require__(/*! ansi-html */ "./node_modules/ansi-html/index.js");
var colors = {
  reset: ['transparent', 'transparent'],
  black: '181818',
  red: 'E36049',
  green: 'B3CB74',
  yellow: 'FFD080',
  blue: '7CAFC2',
  magenta: '7FACCA',
  cyan: 'C3C2EF',
  lightgrey: 'EBE7E3',
  darkgrey: '6D7891'
};

var Entities = __webpack_require__(/*! html-entities */ "./node_modules/html-entities/index.js").AllHtmlEntities;
var entities = new Entities();

function showProblems(type, lines) {
  clientOverlay.innerHTML = '';
  lines.forEach(function(msg) {
    msg = ansiHTML(entities.encode(msg));
    var div = document.createElement('div');
    div.style.marginBottom = '26px';
    div.innerHTML = problemType(type) + ' in ' + msg;
    clientOverlay.appendChild(div);
  });
  if (document.body) {
    document.body.appendChild(clientOverlay);
  }
}

function clear() {
  if (document.body && clientOverlay.parentNode) {
    document.body.removeChild(clientOverlay);
  }
}

function problemType (type) {
  var problemColors = {
    errors: colors.red,
    warnings: colors.yellow
  };
  var color = problemColors[type] || colors.red;
  return (
    '<span style="background-color:#' + color + '; color:#fff; padding:2px 4px; border-radius: 2px">' +
      type.slice(0, -1).toUpperCase() +
    '</span>'
  );
}

module.exports = function(options) {
  for (var color in options.overlayColors) {
    if (color in colors) {
      colors[color] = options.overlayColors[color];
    }
    ansiHTML.setColors(colors);
  }

  for (var style in options.overlayStyles) {
    styles[style] = options.overlayStyles[style];
  }

  for (var key in styles) {
    clientOverlay.style[key] = styles[key];
  }

  return {
    showProblems: showProblems,
    clear: clear
  }
};

module.exports.clear = clear;
module.exports.showProblems = showProblems;


/***/ }),

/***/ "./node_modules/webpack-hot-middleware/client.js?reload=true":
/*!******************************************************!*\
  !*** (webpack)-hot-middleware/client.js?reload=true ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__resourceQuery, module) {/*eslint-env browser*/
/*global __resourceQuery __webpack_public_path__*/

var options = {
  path: "/__webpack_hmr",
  timeout: 20 * 1000,
  overlay: true,
  reload: false,
  log: true,
  warn: true,
  name: '',
  autoConnect: true,
  overlayStyles: {},
  overlayWarnings: false,
  ansiColors: {}
};
if (true) {
  var querystring = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");
  var overrides = querystring.parse(__resourceQuery.slice(1));
  setOverrides(overrides);
}

if (typeof window === 'undefined') {
  // do nothing
} else if (typeof window.EventSource === 'undefined') {
  console.warn(
    "webpack-hot-middleware's client requires EventSource to work. " +
    "You should include a polyfill if you want to support this browser: " +
    "https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events#Tools"
  );
} else {
  if (options.autoConnect) {
    connect();
  }
}

/* istanbul ignore next */
function setOptionsAndConnect(overrides) {
  setOverrides(overrides);
  connect();
}

function setOverrides(overrides) {
  if (overrides.autoConnect) options.autoConnect = overrides.autoConnect == 'true';
  if (overrides.path) options.path = overrides.path;
  if (overrides.timeout) options.timeout = overrides.timeout;
  if (overrides.overlay) options.overlay = overrides.overlay !== 'false';
  if (overrides.reload) options.reload = overrides.reload !== 'false';
  if (overrides.noInfo && overrides.noInfo !== 'false') {
    options.log = false;
  }
  if (overrides.name) {
    options.name = overrides.name;
  }
  if (overrides.quiet && overrides.quiet !== 'false') {
    options.log = false;
    options.warn = false;
  }

  if (overrides.dynamicPublicPath) {
    options.path = __webpack_require__.p + options.path;
  }

  if (overrides.ansiColors) options.ansiColors = JSON.parse(overrides.ansiColors);
  if (overrides.overlayStyles) options.overlayStyles = JSON.parse(overrides.overlayStyles);

  if (overrides.overlayWarnings) {
    options.overlayWarnings = overrides.overlayWarnings == 'true';
  }
}

function EventSourceWrapper() {
  var source;
  var lastActivity = new Date();
  var listeners = [];

  init();
  var timer = setInterval(function() {
    if ((new Date() - lastActivity) > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);

  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }

  function handleOnline() {
    if (options.log) console.log("[HMR] connected");
    lastActivity = new Date();
  }

  function handleMessage(event) {
    lastActivity = new Date();
    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }
  }

  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }

  return {
    addMessageListener: function(fn) {
      listeners.push(fn);
    }
  };
}

function getEventSourceWrapper() {
  if (!window.__whmEventSourceWrapper) {
    window.__whmEventSourceWrapper = {};
  }
  if (!window.__whmEventSourceWrapper[options.path]) {
    // cache the wrapper for other entries loaded on
    // the same page with the same options.path
    window.__whmEventSourceWrapper[options.path] = EventSourceWrapper();
  }
  return window.__whmEventSourceWrapper[options.path];
}

function connect() {
  getEventSourceWrapper().addMessageListener(handleMessage);

  function handleMessage(event) {
    if (event.data == "\uD83D\uDC93") {
      return;
    }
    try {
      processMessage(JSON.parse(event.data));
    } catch (ex) {
      if (options.warn) {
        console.warn("Invalid HMR message: " + event.data + "\n" + ex);
      }
    }
  }
}

// the reporter needs to be a singleton on the page
// in case the client is being used by multiple bundles
// we only want to report once.
// all the errors will go to all clients
var singletonKey = '__webpack_hot_middleware_reporter__';
var reporter;
if (typeof window !== 'undefined') {
  if (!window[singletonKey]) {
    window[singletonKey] = createReporter();
  }
  reporter = window[singletonKey];
}

function createReporter() {
  var strip = __webpack_require__(/*! strip-ansi */ "./node_modules/webpack-hot-middleware/node_modules/strip-ansi/index.js");

  var overlay;
  if (typeof document !== 'undefined' && options.overlay) {
    overlay = __webpack_require__(/*! ./client-overlay */ "./node_modules/webpack-hot-middleware/client-overlay.js")({
      ansiColors: options.ansiColors,
      overlayStyles: options.overlayStyles
    });
  }

  var styles = {
    errors: "color: #ff0000;",
    warnings: "color: #999933;"
  };
  var previousProblems = null;
  function log(type, obj) {
    var newProblems = obj[type].map(function(msg) { return strip(msg); }).join('\n');
    if (previousProblems == newProblems) {
      return;
    } else {
      previousProblems = newProblems;
    }

    var style = styles[type];
    var name = obj.name ? "'" + obj.name + "' " : "";
    var title = "[HMR] bundle " + name + "has " + obj[type].length + " " + type;
    // NOTE: console.warn or console.error will print the stack trace
    // which isn't helpful here, so using console.log to escape it.
    if (console.group && console.groupEnd) {
      console.group("%c" + title, style);
      console.log("%c" + newProblems, style);
      console.groupEnd();
    } else {
      console.log(
        "%c" + title + "\n\t%c" + newProblems.replace(/\n/g, "\n\t"),
        style + "font-weight: bold;",
        style + "font-weight: normal;"
      );
    }
  }

  return {
    cleanProblemsCache: function () {
      previousProblems = null;
    },
    problems: function(type, obj) {
      if (options.warn) {
        log(type, obj);
      }
      if (overlay) {
        if (options.overlayWarnings || type === 'errors') {
          overlay.showProblems(type, obj[type]);
          return false;
        }
        overlay.clear();
      }
      return true;
    },
    success: function() {
      if (overlay) overlay.clear();
    },
    useCustomOverlay: function(customOverlay) {
      overlay = customOverlay;
    }
  };
}

var processUpdate = __webpack_require__(/*! ./process-update */ "./node_modules/webpack-hot-middleware/process-update.js");

var customHandler;
var subscribeAllHandler;
function processMessage(obj) {
  switch(obj.action) {
    case "building":
      if (options.log) {
        console.log(
          "[HMR] bundle " + (obj.name ? "'" + obj.name + "' " : "") +
          "rebuilding"
        );
      }
      break;
    case "built":
      if (options.log) {
        console.log(
          "[HMR] bundle " + (obj.name ? "'" + obj.name + "' " : "") +
          "rebuilt in " + obj.time + "ms"
        );
      }
      // fall through
    case "sync":
      if (obj.name && options.name && obj.name !== options.name) {
        return;
      }
      var applyUpdate = true;
      if (obj.errors.length > 0) {
        if (reporter) reporter.problems('errors', obj);
        applyUpdate = false;
      } else if (obj.warnings.length > 0) {
        if (reporter) {
          var overlayShown = reporter.problems('warnings', obj);
          applyUpdate = overlayShown;
        }
      } else {
        if (reporter) {
          reporter.cleanProblemsCache();
          reporter.success();
        }
      }
      if (applyUpdate) {
        processUpdate(obj.hash, obj.modules, options);
      }
      break;
    default:
      if (customHandler) {
        customHandler(obj);
      }
  }

  if (subscribeAllHandler) {
    subscribeAllHandler(obj);
  }
}

if (module) {
  module.exports = {
    subscribeAll: function subscribeAll(handler) {
      subscribeAllHandler = handler;
    },
    subscribe: function subscribe(handler) {
      customHandler = handler;
    },
    useCustomOverlay: function useCustomOverlay(customOverlay) {
      if (reporter) reporter.useCustomOverlay(customOverlay);
    },
    setOptionsAndConnect: setOptionsAndConnect
  };
}

/* WEBPACK VAR INJECTION */}.call(this, "?reload=true", __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack-hot-middleware/node_modules/ansi-regex/index.js":
/*!*****************************************************************!*\
  !*** (webpack)-hot-middleware/node_modules/ansi-regex/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function () {
	return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g;
};


/***/ }),

/***/ "./node_modules/webpack-hot-middleware/node_modules/strip-ansi/index.js":
/*!*****************************************************************!*\
  !*** (webpack)-hot-middleware/node_modules/strip-ansi/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ansiRegex = __webpack_require__(/*! ansi-regex */ "./node_modules/webpack-hot-middleware/node_modules/ansi-regex/index.js")();

module.exports = function (str) {
	return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
};


/***/ }),

/***/ "./node_modules/webpack-hot-middleware/process-update.js":
/*!**************************************************!*\
  !*** (webpack)-hot-middleware/process-update.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Based heavily on https://github.com/webpack/webpack/blob/
 *  c0afdf9c6abc1dd70707c594e473802a566f7b6e/hot/only-dev-server.js
 * Original copyright Tobias Koppers @sokra (MIT license)
 */

/* global window __webpack_hash__ */

if (false) {}

var hmrDocsUrl = "https://webpack.js.org/concepts/hot-module-replacement/"; // eslint-disable-line max-len

var lastHash;
var failureStatuses = { abort: 1, fail: 1 };
var applyOptions = { 				
  ignoreUnaccepted: true,
  ignoreDeclined: true,
  ignoreErrored: true,
  onUnaccepted: function(data) {
    console.warn("Ignored an update to unaccepted module " + data.chain.join(" -> "));
  },
  onDeclined: function(data) {
    console.warn("Ignored an update to declined module " + data.chain.join(" -> "));
  },
  onErrored: function(data) {
    console.error(data.error);
    console.warn("Ignored an error while updating module " + data.moduleId + " (" + data.type + ")");
  } 
}

function upToDate(hash) {
  if (hash) lastHash = hash;
  return lastHash == __webpack_require__.h();
}

module.exports = function(hash, moduleMap, options) {
  var reload = options.reload;
  if (!upToDate(hash) && module.hot.status() == "idle") {
    if (options.log) console.log("[HMR] Checking for updates on the server...");
    check();
  }

  function check() {
    var cb = function(err, updatedModules) {
      if (err) return handleError(err);

      if(!updatedModules) {
        if (options.warn) {
          console.warn("[HMR] Cannot find update (Full reload needed)");
          console.warn("[HMR] (Probably because of restarting the server)");
        }
        performReload();
        return null;
      }

      var applyCallback = function(applyErr, renewedModules) {
        if (applyErr) return handleError(applyErr);

        if (!upToDate()) check();

        logUpdates(updatedModules, renewedModules);
      };

      var applyResult = module.hot.apply(applyOptions, applyCallback);
      // webpack 2 promise
      if (applyResult && applyResult.then) {
        // HotModuleReplacement.runtime.js refers to the result as `outdatedModules`
        applyResult.then(function(outdatedModules) {
          applyCallback(null, outdatedModules);
        });
        applyResult.catch(applyCallback);
      }

    };

    var result = module.hot.check(false, cb);
    // webpack 2 promise
    if (result && result.then) {
        result.then(function(updatedModules) {
            cb(null, updatedModules);
        });
        result.catch(cb);
    }
  }

  function logUpdates(updatedModules, renewedModules) {
    var unacceptedModules = updatedModules.filter(function(moduleId) {
      return renewedModules && renewedModules.indexOf(moduleId) < 0;
    });

    if(unacceptedModules.length > 0) {
      if (options.warn) {
        console.warn(
          "[HMR] The following modules couldn't be hot updated: " +
          "(Full reload needed)\n" +
          "This is usually because the modules which have changed " +
          "(and their parents) do not know how to hot reload themselves. " +
          "See " + hmrDocsUrl + " for more details."
        );
        unacceptedModules.forEach(function(moduleId) {
          console.warn("[HMR]  - " + (moduleMap[moduleId] || moduleId));
        });
      }
      performReload();
      return;
    }

    if (options.log) {
      if(!renewedModules || renewedModules.length === 0) {
        console.log("[HMR] Nothing hot updated.");
      } else {
        console.log("[HMR] Updated modules:");
        renewedModules.forEach(function(moduleId) {
          console.log("[HMR]  - " + (moduleMap[moduleId] || moduleId));
        });
      }

      if (upToDate()) {
        console.log("[HMR] App is up to date.");
      }
    }
  }

  function handleError(err) {
    if (module.hot.status() in failureStatuses) {
      if (options.warn) {
        console.warn("[HMR] Cannot check for update (Full reload needed)");
        console.warn("[HMR] " + (err.stack || err.message));
      }
      performReload();
      return;
    }
    if (options.warn) {
      console.warn("[HMR] Update check failed: " + (err.stack || err.message));
    }
  }

  function performReload() {
    if (reload) {
      if (options.warn) console.warn("[HMR] Reloading page");
      window.location.reload();
    }
  }
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./rougeSettings.json":
/*!****************************!*\
  !*** ./rougeSettings.json ***!
  \****************************/
/*! exports provided: defaultApp, applications, googleFontKey, default */
/***/ (function(module) {

module.exports = {"defaultApp":"Demo","applications":{"Demo":{"language":"fr","title":"Mon Application"},"Blog":{"language":"fr","title":"Mon Blog"}},"googleFontKey":"AIzaSyCpEdd3h9V13GWIr0ImefrxPig0M883_AI"};

/***/ }),

/***/ "./static/demo/main.js":
/*!*****************************!*\
  !*** ./static/demo/main.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! webpack-hot-middleware/client?reload=true */ "./node_modules/webpack-hot-middleware/client.js?reload=true");
__webpack_require__(/*! ../../App/Static/AppStyles.css */ "./App/Static/AppStyles.css");
__webpack_require__(/*! ./styles.css */ "./static/demo/styles.css");
__webpack_require__(/*! ../../App/Static/styleConfigurator */ "./App/Static/styleConfigurator.js");


/***/ }),

/***/ "./static/demo/styles.css":
/*!********************************!*\
  !*** ./static/demo/styles.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--4-1!./styles.css */ "./node_modules/css-loader/index.js?!./static/demo/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--4-1!./styles.css */ "./node_modules/css-loader/index.js?!./static/demo/styles.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--4-1!./styles.css */ "./node_modules/css-loader/index.js?!./static/demo/styles.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQXBwL1N0YXRpYy9BcHBTdHlsZXMuY3NzP2YwMDQiLCJ3ZWJwYWNrOi8vLy4vQXBwL1N0YXRpYy9zdHlsZUNvbmZpZ3VyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5zaS1odG1sL2luZGV4LmpzIiwid2VicGFjazovLy8uL0FwcC9TdGF0aWMvQXBwU3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvZGVtby9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbC1lbnRpdGllcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbC1lbnRpdGllcy9saWIvaHRtbDQtZW50aXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwtZW50aXRpZXMvbGliL2h0bWw1LWVudGl0aWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1sLWVudGl0aWVzL2xpYi94bWwtZW50aXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vZGUtbGlicy1icm93c2VyL25vZGVfbW9kdWxlcy90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3F1ZXJ5c3RyaW5nLWVzMy9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3F1ZXJ5c3RyaW5nLWVzMy9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3F1ZXJ5c3RyaW5nLWVzMy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlL2Rpc3QvdnVlLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2ViZm9udGxvYWRlci93ZWJmb250bG9hZGVyLmpzIiwid2VicGFjazovLy8od2VicGFjayktaG90LW1pZGRsZXdhcmUvY2xpZW50LW92ZXJsYXkuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS1ob3QtbWlkZGxld2FyZS9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS1ob3QtbWlkZGxld2FyZS9ub2RlX21vZHVsZXMvYW5zaS1yZWdleC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spLWhvdC1taWRkbGV3YXJlL25vZGVfbW9kdWxlcy9zdHJpcC1hbnNpL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjayktaG90LW1pZGRsZXdhcmUvcHJvY2Vzcy11cGRhdGUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3N0YXRpYy9kZW1vL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2RlbW8vc3R5bGVzLmNzcz9jNjc3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsZUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQTZCO0FBQzdCLHFDQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBcUIsZ0JBQWdCO0FBQ3JDO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsNkJBQXFCLGdCQUFnQjtBQUNyQztBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxhQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGFBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUFrQiw4QkFBOEI7QUFDaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLGVBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJB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O0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7O0FDdkx0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixlQUFlO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcEZhOztBQUViLGlDQUFpQyxtQkFBTyxDQUFDLDBEQUFVO0FBQ25ELHFDQUFxQyxtQkFBTyxDQUFDLDBEQUFVOzs7Ozs7Ozs7Ozs7QUNIdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLHNCQUFzQixFQUFFO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDekxEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxtQkFBTyxDQUFDLHVEQUFROztBQUU5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0EsbUJBQW1CLDJCQUEyQjs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTs7QUFFQSxRQUFRLHVCQUF1QjtBQUMvQjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkLGtEQUFrRCxzQkFBc0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxLQUFLLEtBQXdDLEVBQUUsRUFFN0M7O0FBRUYsUUFBUSxzQkFBaUI7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7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cC1idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHRmdW5jdGlvbiBob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0fVxuIFx0dmFyIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrID0gd2luZG93W1wid2VicGFja0hvdFVwZGF0ZVwiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVcIl0gPSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIHdlYnBhY2tIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHRcdGlmIChwYXJlbnRIb3RVcGRhdGVDYWxsYmFjaykgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xuIFx0fSA7XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuIFx0XHRzY3JpcHQuY2hhcnNldCA9IFwidXRmLThcIjtcbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNcIjtcbiBcdFx0aWYgKG51bGwpIHNjcmlwdC5jcm9zc09yaWdpbiA9IG51bGw7XG4gXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZE1hbmlmZXN0KHJlcXVlc3RUaW1lb3V0KSB7XG4gXHRcdHJlcXVlc3RUaW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQgfHwgMTAwMDA7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydFwiKSk7XG4gXHRcdFx0fVxuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuIFx0XHRcdFx0dmFyIHJlcXVlc3RQYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc29uXCI7XG4gXHRcdFx0XHRyZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgcmVxdWVzdFBhdGgsIHRydWUpO1xuIFx0XHRcdFx0cmVxdWVzdC50aW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQ7XG4gXHRcdFx0XHRyZXF1ZXN0LnNlbmQobnVsbCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycik7XG4gXHRcdFx0fVxuIFx0XHRcdHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm47XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5zdGF0dXMgPT09IDApIHtcbiBcdFx0XHRcdFx0Ly8gdGltZW91dFxuIFx0XHRcdFx0XHRyZWplY3QoXG4gXHRcdFx0XHRcdFx0bmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgdGltZWQgb3V0LlwiKVxuIFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gNDA0KSB7XG4gXHRcdFx0XHRcdC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcbiBcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyAhPT0gMjAwICYmIHJlcXVlc3Quc3RhdHVzICE9PSAzMDQpIHtcbiBcdFx0XHRcdFx0Ly8gb3RoZXIgZmFpbHVyZVxuIFx0XHRcdFx0XHRyZWplY3QobmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgZmFpbGVkLlwiKSk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHQvLyBzdWNjZXNzXG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0dmFyIHVwZGF0ZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG4gXHRcdFx0XHRcdFx0cmVqZWN0KGUpO1xuIFx0XHRcdFx0XHRcdHJldHVybjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRyZXNvbHZlKHVwZGF0ZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdHZhciBob3RBcHBseU9uVXBkYXRlID0gdHJ1ZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRIYXNoID0gXCI5YjdhMDEwZGUxMzM1MTUyZjYxN1wiO1xuIFx0dmFyIGhvdFJlcXVlc3RUaW1lb3V0ID0gMTAwMDA7XG4gXHR2YXIgaG90Q3VycmVudE1vZHVsZURhdGEgPSB7fTtcbiBcdHZhciBob3RDdXJyZW50Q2hpbGRNb2R1bGU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHNUZW1wID0gW107XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0aWYgKCFtZSkgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX187XG4gXHRcdHZhciBmbiA9IGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiBcdFx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuIFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcbiBcdFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuIFx0XHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcbiBcdFx0XHRcdFx0XHRyZXF1ZXN0ICtcbiBcdFx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuIFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHQpO1xuIFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ocmVxdWVzdCk7XG4gXHRcdH07XG4gXHRcdHZhciBPYmplY3RGYWN0b3J5ID0gZnVuY3Rpb24gT2JqZWN0RmFjdG9yeShuYW1lKSB7XG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXTtcbiBcdFx0XHRcdH0sXG4gXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX19bbmFtZV0gPSB2YWx1ZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9O1xuIFx0XHRmb3IgKHZhciBuYW1lIGluIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX193ZWJwYWNrX3JlcXVpcmVfXywgbmFtZSkgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwiZVwiICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcInRcIlxuIFx0XHRcdCkge1xuIFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBPYmplY3RGYWN0b3J5KG5hbWUpKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0Zm4uZSA9IGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInJlYWR5XCIpIGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0aG90Q2h1bmtzTG9hZGluZysrO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoY2h1bmtJZCkudGhlbihmaW5pc2hDaHVua0xvYWRpbmcsIGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0ZmluaXNoQ2h1bmtMb2FkaW5nKCk7XG4gXHRcdFx0XHR0aHJvdyBlcnI7XG4gXHRcdFx0fSk7XG5cbiBcdFx0XHRmdW5jdGlvbiBmaW5pc2hDaHVua0xvYWRpbmcoKSB7XG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nLS07XG4gXHRcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInByZXBhcmVcIikge1xuIFx0XHRcdFx0XHRpZiAoIWhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChob3RDaHVua3NMb2FkaW5nID09PSAwICYmIGhvdFdhaXRpbmdGaWxlcyA9PT0gMCkge1xuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0Zm4udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdFx0aWYgKG1vZGUgJiAxKSB2YWx1ZSA9IGZuKHZhbHVlKTtcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KHZhbHVlLCBtb2RlICYgfjEpO1xuIFx0XHR9O1xuIFx0XHRyZXR1cm4gZm47XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBob3QgPSB7XG4gXHRcdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuIFx0XHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcbiBcdFx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcbiBcdFx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcbiBcdFx0XHRfbWFpbjogaG90Q3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZCxcblxuIFx0XHRcdC8vIE1vZHVsZSBBUElcbiBcdFx0XHRhY3RpdmU6IHRydWUsXG4gXHRcdFx0YWNjZXB0OiBmdW5jdGlvbihkZXAsIGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdFx0ZWxzZSBob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGVjbGluZTogZnVuY3Rpb24oZGVwKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XG4gXHRcdFx0fSxcbiBcdFx0XHRkaXNwb3NlOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG5cbiBcdFx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuIFx0XHRcdGNoZWNrOiBob3RDaGVjayxcbiBcdFx0XHRhcHBseTogaG90QXBwbHksXG4gXHRcdFx0c3RhdHVzOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRpZiAoIWwpIHJldHVybiBob3RTdGF0dXM7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3RTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3RTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG4gXHRcdFx0ZGF0YTogaG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG4gXHRcdH07XG4gXHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcbiBcdFx0cmV0dXJuIGhvdDtcbiBcdH1cblxuIFx0dmFyIGhvdFN0YXR1c0hhbmRsZXJzID0gW107XG4gXHR2YXIgaG90U3RhdHVzID0gXCJpZGxlXCI7XG5cbiBcdGZ1bmN0aW9uIGhvdFNldFN0YXR1cyhuZXdTdGF0dXMpIHtcbiBcdFx0aG90U3RhdHVzID0gbmV3U3RhdHVzO1xuIFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGhvdFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcbiBcdH1cblxuIFx0Ly8gd2hpbGUgZG93bmxvYWRpbmdcbiBcdHZhciBob3RXYWl0aW5nRmlsZXMgPSAwO1xuIFx0dmFyIGhvdENodW5rc0xvYWRpbmcgPSAwO1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90QXZhaWxhYmxlRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3REZWZlcnJlZDtcblxuIFx0Ly8gVGhlIHVwZGF0ZSBpbmZvXG4gXHR2YXIgaG90VXBkYXRlLCBob3RVcGRhdGVOZXdIYXNoO1xuXG4gXHRmdW5jdGlvbiB0b01vZHVsZUlkKGlkKSB7XG4gXHRcdHZhciBpc051bWJlciA9ICtpZCArIFwiXCIgPT09IGlkO1xuIFx0XHRyZXR1cm4gaXNOdW1iZXIgPyAraWQgOiBpZDtcbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90Q2hlY2soYXBwbHkpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcbiBcdFx0fVxuIFx0XHRob3RBcHBseU9uVXBkYXRlID0gYXBwbHk7XG4gXHRcdGhvdFNldFN0YXR1cyhcImNoZWNrXCIpO1xuIFx0XHRyZXR1cm4gaG90RG93bmxvYWRNYW5pZmVzdChob3RSZXF1ZXN0VGltZW91dCkudGhlbihmdW5jdGlvbih1cGRhdGUpIHtcbiBcdFx0XHRpZiAoIXVwZGF0ZSkge1xuIFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbiBcdFx0XHRcdHJldHVybiBudWxsO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdEF2YWlsYWJsZUZpbGVzTWFwID0gdXBkYXRlLmM7XG4gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVwZGF0ZS5oO1xuXG4gXHRcdFx0aG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0aG90RGVmZXJyZWQgPSB7XG4gXHRcdFx0XHRcdHJlc29sdmU6IHJlc29sdmUsXG4gXHRcdFx0XHRcdHJlamVjdDogcmVqZWN0XG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xuIFx0XHRcdHZhciBjaHVua0lkID0gXCJhcHBcIjtcbiBcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9uZS1ibG9ja3NcbiBcdFx0XHR7XG4gXHRcdFx0XHQvKmdsb2JhbHMgY2h1bmtJZCAqL1xuIFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIgJiZcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiZcbiBcdFx0XHRcdGhvdFdhaXRpbmdGaWxlcyA9PT0gMFxuIFx0XHRcdCkge1xuIFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gcHJvbWlzZTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSB8fCAhaG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0pXG4gXHRcdFx0cmV0dXJuO1xuIFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IGZhbHNlO1xuIFx0XHRmb3IgKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYgKC0taG90V2FpdGluZ0ZpbGVzID09PSAwICYmIGhvdENodW5rc0xvYWRpbmcgPT09IDApIHtcbiBcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzKys7XG4gXHRcdFx0aG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RVcGRhdGVEb3dubG9hZGVkKCkge1xuIFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcbiBcdFx0dmFyIGRlZmVycmVkID0gaG90RGVmZXJyZWQ7XG4gXHRcdGhvdERlZmVycmVkID0gbnVsbDtcbiBcdFx0aWYgKCFkZWZlcnJlZCkgcmV0dXJuO1xuIFx0XHRpZiAoaG90QXBwbHlPblVwZGF0ZSkge1xuIFx0XHRcdC8vIFdyYXAgZGVmZXJyZWQgb2JqZWN0IGluIFByb21pc2UgdG8gbWFyayBpdCBhcyBhIHdlbGwtaGFuZGxlZCBQcm9taXNlIHRvXG4gXHRcdFx0Ly8gYXZvaWQgdHJpZ2dlcmluZyB1bmNhdWdodCBleGNlcHRpb24gd2FybmluZyBpbiBDaHJvbWUuXG4gXHRcdFx0Ly8gU2VlIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ2NTY2NlxuIFx0XHRcdFByb21pc2UucmVzb2x2ZSgpXG4gXHRcdFx0XHQudGhlbihmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIGhvdEFwcGx5KGhvdEFwcGx5T25VcGRhdGUpO1xuIFx0XHRcdFx0fSlcbiBcdFx0XHRcdC50aGVuKFxuIFx0XHRcdFx0XHRmdW5jdGlvbihyZXN1bHQpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChlcnIpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHQpO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2godG9Nb2R1bGVJZChpZCkpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcInJlYWR5XCIpXG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzXCIpO1xuIFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuIFx0XHR2YXIgY2I7XG4gXHRcdHZhciBpO1xuIFx0XHR2YXIgajtcbiBcdFx0dmFyIG1vZHVsZTtcbiBcdFx0dmFyIG1vZHVsZUlkO1xuXG4gXHRcdGZ1bmN0aW9uIGdldEFmZmVjdGVkU3R1ZmYodXBkYXRlTW9kdWxlSWQpIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuIFx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpLm1hcChmdW5jdGlvbihpZCkge1xuIFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0Y2hhaW46IFtpZF0sXG4gXHRcdFx0XHRcdGlkOiBpZFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuIFx0XHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAoIW1vZHVsZSB8fCBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudCA9IGluc3RhbGxlZE1vZHVsZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHRcdH07XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG4gXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcbiBcdFx0XHRcdFx0cXVldWUucHVzaCh7XG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRpZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuXG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcbiBcdFx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuIFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG4gXHRcdFx0fTtcbiBcdFx0fVxuXG4gXHRcdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcbiBcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdHZhciBpdGVtID0gYltpXTtcbiBcdFx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcbiBcdFx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuIFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcbiBcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG4gXHRcdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUoKSB7XG4gXHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyByZXN1bHQubW9kdWxlSWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcbiBcdFx0XHQpO1xuIFx0XHR9O1xuXG4gXHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdG1vZHVsZUlkID0gdG9Nb2R1bGVJZChpZCk7XG4gXHRcdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG4gXHRcdFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRcdFx0aWYgKGhvdFVwZGF0ZVtpZF0pIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRTdHVmZihtb2R1bGVJZCk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBpZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cbiBcdFx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG4gXHRcdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG4gXHRcdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcbiBcdFx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG4gXHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcImFib3J0XCIpO1xuIFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoYWJvcnRFcnJvcik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9BcHBseSkge1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IGhvdFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0XHRcdFx0aWYgKFxuIFx0XHRcdFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHRcdFx0XHQpXG4gXHRcdFx0XHRcdFx0KSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG4gXHRcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuIFx0XHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRtb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSAmJlxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcbiBcdFx0XHQpXG4gXHRcdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG4gXHRcdFx0XHRcdG1vZHVsZTogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdGVycm9ySGFuZGxlcjogaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcbiBcdFx0XHRcdH0pO1xuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG4gXHRcdE9iamVjdC5rZXlzKGhvdEF2YWlsYWJsZUZpbGVzTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gPT09IGZhbHNlKSB7XG4gXHRcdFx0XHRob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHR9KTtcblxuIFx0XHR2YXIgaWR4O1xuIFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcbiBcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuIFx0XHRcdHZhciBkYXRhID0ge307XG5cbiBcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcbiBcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdGNiID0gZGlzcG9zZUhhbmRsZXJzW2pdO1xuIFx0XHRcdFx0Y2IoZGF0YSk7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXSA9IGRhdGE7XG5cbiBcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuIFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cbiBcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcbiBcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG4gXHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGNoaWxkID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuIFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG4gXHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG4gXHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cbiBcdFx0dmFyIGRlcGVuZGVuY3k7XG4gXHRcdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcbiBcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcbiBcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdCBpbiBcImFwcGx5XCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cbiBcdFx0aG90Q3VycmVudEhhc2ggPSBob3RVcGRhdGVOZXdIYXNoO1xuXG4gXHRcdC8vIGluc2VydCBuZXcgY29kZVxuIFx0XHRmb3IgKG1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFwcGxpZWRVcGRhdGUsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuIFx0XHR2YXIgZXJyb3IgPSBudWxsO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV07XG4gXHRcdFx0XHRcdFx0Y2IgPSBtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcbiBcdFx0XHRcdFx0XHRpZiAoY2IpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihjYikgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGNiKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGNiID0gY2FsbGJhY2tzW2ldO1xuIFx0XHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0XHRjYihtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG4gXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXSxcbiBcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG4gXHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcbiBcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyMjtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuIFx0XHRpZiAoZXJyb3IpIHtcbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJmYWlsXCIpO1xuIFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gXHRcdH1cblxuIFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuIFx0XHRcdHJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGhvdDogaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSxcbiBcdFx0XHRwYXJlbnRzOiAoaG90Q3VycmVudFBhcmVudHNUZW1wID0gaG90Q3VycmVudFBhcmVudHMsIGhvdEN1cnJlbnRQYXJlbnRzID0gW10sIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCksXG4gXHRcdFx0Y2hpbGRyZW46IFtdXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBfX3dlYnBhY2tfaGFzaF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhvdEN1cnJlbnRIYXNoOyB9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIGhvdENyZWF0ZVJlcXVpcmUoXCIuL3N0YXRpYy9kZW1vL21haW4uanNcIikoX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3N0YXRpYy9kZW1vL21haW4uanNcIik7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4vQXBwU3R5bGVzLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4vQXBwU3R5bGVzLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuL0FwcFN0eWxlcy5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgc2V0dGluZ3MgPSByZXF1aXJlKCcuLi8uLi9yb3VnZVNldHRpbmdzLmpzb24nKTtcclxudmFyIFZ1ZSA9IHJlcXVpcmUoJ3Z1ZScpO1xyXG52YXIgV2ViRm9udCA9IHJlcXVpcmUoJ3dlYmZvbnRsb2FkZXInKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XHJcblx0LyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuXHR2YXIgY3NzUGFuZWwgPSBuZXcgVnVlKHtcclxuXHRcdGVsOiAnI2Nzcy1wYW5lbCcsXHJcblx0XHRkYXRhOiB7XHJcblx0XHRcdGZvbnRTaXplOiAyMCxcclxuXHRcdFx0Z29vZ2xlRm9udHM6IHRoaXMuZ2V0R29vZ2xlRm9udHMsXHJcblx0XHRcdHNlbGVjdGVkR29vZ2xlRm9udDogeyBtYWluOiAnJywgYWx0OiAnJywgdGl0bGU6ICcnLCB0aXRsZUFsdDogJycgfSxcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdHVwZGF0ZUNzc1Byb3BlcnR5OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tZm9udC1zaXplJywgdGhpcy5mb250U2l6ZSArICdweCcpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR1cGRhdGVDc3NGb250OiBmdW5jdGlvbih0eXBlKSB7XHJcblx0XHRcdFx0V2ViRm9udC5sb2FkKHtcclxuXHRcdFx0XHRcdGdvb2dsZToge1xyXG5cdFx0XHRcdFx0XHRmYW1pbGllczogW3RoaXMuc2VsZWN0ZWRHb29nbGVGb250W3R5cGVdXSxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWZvbnQtZmFtaWx5LScgKyB0eXBlLCB0aGlzLnNlbGVjdGVkR29vZ2xlRm9udFt0eXBlXSk7XHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG5cdFx0XHRyZXF1ZXN0Lm9wZW4oXHJcblx0XHRcdFx0J0dFVCcsXHJcblx0XHRcdFx0J2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3dlYmZvbnRzL3YxL3dlYmZvbnRzP3NvcnQ9YWxwaGEma2V5PScgKyBzZXR0aW5ncy5nb29nbGVGb250S2V5XHJcblx0XHRcdCk7XHJcblx0XHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdFx0cmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09PSA0KSB7XHJcblx0XHRcdFx0XHRpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xyXG5cdFx0XHRcdFx0XHR2YXIgZGF0YSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG5cclxuXHRcdFx0XHRcdFx0c2VsZi5nb29nbGVGb250cyA9IGRhdGEuaXRlbXM7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0XHRyZXF1ZXN0LnNlbmQoKTtcclxuXHRcdH0sXHJcblx0fSk7XHJcbn0pO1xyXG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBhbnNpSFRNTFxuXG4vLyBSZWZlcmVuY2UgdG8gaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9hbnNpLXJlZ2V4XG52YXIgX3JlZ0FOU0kgPSAvKD86KD86XFx1MDAxYlxcWyl8XFx1MDA5YikoPzooPzpbMC05XXsxLDN9KT8oPzooPzo7WzAtOV17MCwzfSkqKT9bQS1NfGYtbV0pfFxcdTAwMWJbQS1NXS9cblxudmFyIF9kZWZDb2xvcnMgPSB7XG4gIHJlc2V0OiBbJ2ZmZicsICcwMDAnXSwgLy8gW0ZPUkVHUk9VRF9DT0xPUiwgQkFDS0dST1VORF9DT0xPUl1cbiAgYmxhY2s6ICcwMDAnLFxuICByZWQ6ICdmZjAwMDAnLFxuICBncmVlbjogJzIwOTgwNScsXG4gIHllbGxvdzogJ2U4YmYwMycsXG4gIGJsdWU6ICcwMDAwZmYnLFxuICBtYWdlbnRhOiAnZmYwMGZmJyxcbiAgY3lhbjogJzAwZmZlZScsXG4gIGxpZ2h0Z3JleTogJ2YwZjBmMCcsXG4gIGRhcmtncmV5OiAnODg4J1xufVxudmFyIF9zdHlsZXMgPSB7XG4gIDMwOiAnYmxhY2snLFxuICAzMTogJ3JlZCcsXG4gIDMyOiAnZ3JlZW4nLFxuICAzMzogJ3llbGxvdycsXG4gIDM0OiAnYmx1ZScsXG4gIDM1OiAnbWFnZW50YScsXG4gIDM2OiAnY3lhbicsXG4gIDM3OiAnbGlnaHRncmV5J1xufVxudmFyIF9vcGVuVGFncyA9IHtcbiAgJzEnOiAnZm9udC13ZWlnaHQ6Ym9sZCcsIC8vIGJvbGRcbiAgJzInOiAnb3BhY2l0eTowLjUnLCAvLyBkaW1cbiAgJzMnOiAnPGk+JywgLy8gaXRhbGljXG4gICc0JzogJzx1PicsIC8vIHVuZGVyc2NvcmVcbiAgJzgnOiAnZGlzcGxheTpub25lJywgLy8gaGlkZGVuXG4gICc5JzogJzxkZWw+JyAvLyBkZWxldGVcbn1cbnZhciBfY2xvc2VUYWdzID0ge1xuICAnMjMnOiAnPC9pPicsIC8vIHJlc2V0IGl0YWxpY1xuICAnMjQnOiAnPC91PicsIC8vIHJlc2V0IHVuZGVyc2NvcmVcbiAgJzI5JzogJzwvZGVsPicgLy8gcmVzZXQgZGVsZXRlXG59XG5cbjtbMCwgMjEsIDIyLCAyNywgMjgsIDM5LCA0OV0uZm9yRWFjaChmdW5jdGlvbiAobikge1xuICBfY2xvc2VUYWdzW25dID0gJzwvc3Bhbj4nXG59KVxuXG4vKipcbiAqIENvbnZlcnRzIHRleHQgd2l0aCBBTlNJIGNvbG9yIGNvZGVzIHRvIEhUTUwgbWFya3VwLlxuICogQHBhcmFtIHtTdHJpbmd9IHRleHRcbiAqIEByZXR1cm5zIHsqfVxuICovXG5mdW5jdGlvbiBhbnNpSFRNTCAodGV4dCkge1xuICAvLyBSZXR1cm5zIHRoZSB0ZXh0IGlmIHRoZSBzdHJpbmcgaGFzIG5vIEFOU0kgZXNjYXBlIGNvZGUuXG4gIGlmICghX3JlZ0FOU0kudGVzdCh0ZXh0KSkge1xuICAgIHJldHVybiB0ZXh0XG4gIH1cblxuICAvLyBDYWNoZSBvcGVuZWQgc2VxdWVuY2UuXG4gIHZhciBhbnNpQ29kZXMgPSBbXVxuICAvLyBSZXBsYWNlIHdpdGggbWFya3VwLlxuICB2YXIgcmV0ID0gdGV4dC5yZXBsYWNlKC9cXDAzM1xcWyhcXGQrKSptL2csIGZ1bmN0aW9uIChtYXRjaCwgc2VxKSB7XG4gICAgdmFyIG90ID0gX29wZW5UYWdzW3NlcV1cbiAgICBpZiAob3QpIHtcbiAgICAgIC8vIElmIGN1cnJlbnQgc2VxdWVuY2UgaGFzIGJlZW4gb3BlbmVkLCBjbG9zZSBpdC5cbiAgICAgIGlmICghIX5hbnNpQ29kZXMuaW5kZXhPZihzZXEpKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZXh0cmEtYm9vbGVhbi1jYXN0XG4gICAgICAgIGFuc2lDb2Rlcy5wb3AoKVxuICAgICAgICByZXR1cm4gJzwvc3Bhbj4nXG4gICAgICB9XG4gICAgICAvLyBPcGVuIHRhZy5cbiAgICAgIGFuc2lDb2Rlcy5wdXNoKHNlcSlcbiAgICAgIHJldHVybiBvdFswXSA9PT0gJzwnID8gb3QgOiAnPHNwYW4gc3R5bGU9XCInICsgb3QgKyAnO1wiPidcbiAgICB9XG5cbiAgICB2YXIgY3QgPSBfY2xvc2VUYWdzW3NlcV1cbiAgICBpZiAoY3QpIHtcbiAgICAgIC8vIFBvcCBzZXF1ZW5jZVxuICAgICAgYW5zaUNvZGVzLnBvcCgpXG4gICAgICByZXR1cm4gY3RcbiAgICB9XG4gICAgcmV0dXJuICcnXG4gIH0pXG5cbiAgLy8gTWFrZSBzdXJlIHRhZ3MgYXJlIGNsb3NlZC5cbiAgdmFyIGwgPSBhbnNpQ29kZXMubGVuZ3RoXG4gIDsobCA+IDApICYmIChyZXQgKz0gQXJyYXkobCArIDEpLmpvaW4oJzwvc3Bhbj4nKSlcblxuICByZXR1cm4gcmV0XG59XG5cbi8qKlxuICogQ3VzdG9taXplIGNvbG9ycy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb2xvcnMgcmVmZXJlbmNlIHRvIF9kZWZDb2xvcnNcbiAqL1xuYW5zaUhUTUwuc2V0Q29sb3JzID0gZnVuY3Rpb24gKGNvbG9ycykge1xuICBpZiAodHlwZW9mIGNvbG9ycyAhPT0gJ29iamVjdCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2Bjb2xvcnNgIHBhcmFtZXRlciBtdXN0IGJlIGFuIE9iamVjdC4nKVxuICB9XG5cbiAgdmFyIF9maW5hbENvbG9ycyA9IHt9XG4gIGZvciAodmFyIGtleSBpbiBfZGVmQ29sb3JzKSB7XG4gICAgdmFyIGhleCA9IGNvbG9ycy5oYXNPd25Qcm9wZXJ0eShrZXkpID8gY29sb3JzW2tleV0gOiBudWxsXG4gICAgaWYgKCFoZXgpIHtcbiAgICAgIF9maW5hbENvbG9yc1trZXldID0gX2RlZkNvbG9yc1trZXldXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBpZiAoJ3Jlc2V0JyA9PT0ga2V5KSB7XG4gICAgICBpZiAodHlwZW9mIGhleCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaGV4ID0gW2hleF1cbiAgICAgIH1cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShoZXgpIHx8IGhleC5sZW5ndGggPT09IDAgfHwgaGV4LnNvbWUoZnVuY3Rpb24gKGgpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBoICE9PSAnc3RyaW5nJ1xuICAgICAgfSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgdmFsdWUgb2YgYCcgKyBrZXkgKyAnYCBwcm9wZXJ0eSBtdXN0IGJlIGFuIEFycmF5IGFuZCBlYWNoIGl0ZW0gY291bGQgb25seSBiZSBhIGhleCBzdHJpbmcsIGUuZy46IEZGMDAwMCcpXG4gICAgICB9XG4gICAgICB2YXIgZGVmSGV4Q29sb3IgPSBfZGVmQ29sb3JzW2tleV1cbiAgICAgIGlmICghaGV4WzBdKSB7XG4gICAgICAgIGhleFswXSA9IGRlZkhleENvbG9yWzBdXG4gICAgICB9XG4gICAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gMSB8fCAhaGV4WzFdKSB7XG4gICAgICAgIGhleCA9IFtoZXhbMF1dXG4gICAgICAgIGhleC5wdXNoKGRlZkhleENvbG9yWzFdKVxuICAgICAgfVxuXG4gICAgICBoZXggPSBoZXguc2xpY2UoMCwgMilcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBoZXggIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSB2YWx1ZSBvZiBgJyArIGtleSArICdgIHByb3BlcnR5IG11c3QgYmUgYSBoZXggc3RyaW5nLCBlLmcuOiBGRjAwMDAnKVxuICAgIH1cbiAgICBfZmluYWxDb2xvcnNba2V5XSA9IGhleFxuICB9XG4gIF9zZXRUYWdzKF9maW5hbENvbG9ycylcbn1cblxuLyoqXG4gKiBSZXNldCBjb2xvcnMuXG4gKi9cbmFuc2lIVE1MLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICBfc2V0VGFncyhfZGVmQ29sb3JzKVxufVxuXG4vKipcbiAqIEV4cG9zZSB0YWdzLCBpbmNsdWRpbmcgb3BlbiBhbmQgY2xvc2UuXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5hbnNpSFRNTC50YWdzID0ge31cblxuaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYW5zaUhUTUwudGFncywgJ29wZW4nLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfb3BlblRhZ3MgfVxuICB9KVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYW5zaUhUTUwudGFncywgJ2Nsb3NlJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX2Nsb3NlVGFncyB9XG4gIH0pXG59IGVsc2Uge1xuICBhbnNpSFRNTC50YWdzLm9wZW4gPSBfb3BlblRhZ3NcbiAgYW5zaUhUTUwudGFncy5jbG9zZSA9IF9jbG9zZVRhZ3Ncbn1cblxuZnVuY3Rpb24gX3NldFRhZ3MgKGNvbG9ycykge1xuICAvLyByZXNldCBhbGxcbiAgX29wZW5UYWdzWycwJ10gPSAnZm9udC13ZWlnaHQ6bm9ybWFsO29wYWNpdHk6MTtjb2xvcjojJyArIGNvbG9ycy5yZXNldFswXSArICc7YmFja2dyb3VuZDojJyArIGNvbG9ycy5yZXNldFsxXVxuICAvLyBpbnZlcnNlXG4gIF9vcGVuVGFnc1snNyddID0gJ2NvbG9yOiMnICsgY29sb3JzLnJlc2V0WzFdICsgJztiYWNrZ3JvdW5kOiMnICsgY29sb3JzLnJlc2V0WzBdXG4gIC8vIGRhcmsgZ3JleVxuICBfb3BlblRhZ3NbJzkwJ10gPSAnY29sb3I6IycgKyBjb2xvcnMuZGFya2dyZXlcblxuICBmb3IgKHZhciBjb2RlIGluIF9zdHlsZXMpIHtcbiAgICB2YXIgY29sb3IgPSBfc3R5bGVzW2NvZGVdXG4gICAgdmFyIG9yaUNvbG9yID0gY29sb3JzW2NvbG9yXSB8fCAnMDAwJ1xuICAgIF9vcGVuVGFnc1tjb2RlXSA9ICdjb2xvcjojJyArIG9yaUNvbG9yXG4gICAgY29kZSA9IHBhcnNlSW50KGNvZGUpXG4gICAgX29wZW5UYWdzWyhjb2RlICsgMTApLnRvU3RyaW5nKCldID0gJ2JhY2tncm91bmQ6IycgKyBvcmlDb2xvclxuICB9XG59XG5cbmFuc2lIVE1MLnJlc2V0KClcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiBBcHBsaWNhdGlvbiBzdHlsZXMgOiBlZGl0IGF0IHlvdSdyZSBvd24gcmlzayA6KSAqL1xcclxcblxcclxcbjpyb290IHtcXHJcXG5cXHQtLWFwcC1yYXRpbzogMS42ZW07XFxyXFxufVxcclxcbiNjc3MtcGFuZWwge1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFx0d2lkdGg6IDMwMHB4O1xcclxcblxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHR0b3A6IDA7XFxyXFxuXFx0Ym90dG9tOiAwO1xcclxcblxcdHJpZ2h0OiAwO1xcclxcblxcdGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcclxcblxcdHBhZGRpbmc6IHZhcigtLWFwcC1yYXRpbyk7XFxyXFxuXFx0YmFja2dyb3VuZDogdXJsKCcvaW1hZ2VzL2hpcC1zcXVhcmUucG5nJyksICNmZmY7XFxyXFxufVxcclxcbiNjc3MtcGFuZWwgaW5wdXQsXFxyXFxuI2Nzcy1wYW5lbCBzZWxlY3Qge1xcclxcblxcdHBhZGRpbmc6IHZhcigtLWFwcC1yYXRpbykgY2FsYyh2YXIoLS1hcHAtcmF0aW8pIC8gNCkgY2FsYyh2YXIoLS1hcHAtcmF0aW8pIC8gNCkgY2FsYyh2YXIoLS1hcHAtcmF0aW8pIC8gNCk7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0bWFyZ2luOiAtMC41ZW0gMCBjYWxjKHZhcigtLWFwcC1yYXRpbykgLyAyKTtcXHJcXG59XFxyXFxuI2Nzcy1wYW5lbCBsYWJlbCB7XFxyXFxuXFx0bWFyZ2luOiB2YXIoLS1hcHAtcmF0aW8pIDA7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdHotaW5kZXg6IDEwO1xcclxcbn1cXHJcXG4jY3NzLXBhbmVsIC5jc3MtcGFuZWxfX2xhYmVsIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcblxcdHotaW5kZXg6IDEwO1xcclxcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxyXFxufVxcclxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9wcm9qZWN0cy9yb3VnZUZyYW1ld29yay9BcHAvU3RhdGljL0FwcFN0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEscURBQXFEOztBQUVyRDtDQUNDLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0MsdUJBQXVCO0NBQ3ZCLGFBQWE7Q0FDYixnQkFBZ0I7Q0FDaEIsT0FBTztDQUNQLFVBQVU7Q0FDVixTQUFTO0NBQ1QsMENBQTBDO0NBQzFDLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsMEJBQTBCO0NBQzFCLGdEQUFnRDtDQUNoRDtBQUNEOztDQUVDLDJHQUEyRztDQUMzRyxZQUFZO0NBQ1osNENBQTRDO0NBQzVDO0FBQ0Q7Q0FDQywyQkFBMkI7Q0FDM0IsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1o7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixzQkFBc0I7Q0FDdEIsWUFBWTtDQUNaLGlCQUFpQjtDQUNqQlwiLFwiZmlsZVwiOlwiQXBwU3R5bGVzLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBBcHBsaWNhdGlvbiBzdHlsZXMgOiBlZGl0IGF0IHlvdSdyZSBvd24gcmlzayA6KSAqL1xcclxcblxcclxcbjpyb290IHtcXHJcXG5cXHQtLWFwcC1yYXRpbzogMS42ZW07XFxyXFxufVxcclxcbiNjc3MtcGFuZWwge1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFx0d2lkdGg6IDMwMHB4O1xcclxcblxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHR0b3A6IDA7XFxyXFxuXFx0Ym90dG9tOiAwO1xcclxcblxcdHJpZ2h0OiAwO1xcclxcblxcdGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcclxcblxcdHBhZGRpbmc6IHZhcigtLWFwcC1yYXRpbyk7XFxyXFxuXFx0YmFja2dyb3VuZDogdXJsKCcvaW1hZ2VzL2hpcC1zcXVhcmUucG5nJyksICNmZmY7XFxyXFxufVxcclxcbiNjc3MtcGFuZWwgaW5wdXQsXFxyXFxuI2Nzcy1wYW5lbCBzZWxlY3Qge1xcclxcblxcdHBhZGRpbmc6IHZhcigtLWFwcC1yYXRpbykgY2FsYyh2YXIoLS1hcHAtcmF0aW8pIC8gNCkgY2FsYyh2YXIoLS1hcHAtcmF0aW8pIC8gNCkgY2FsYyh2YXIoLS1hcHAtcmF0aW8pIC8gNCk7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0bWFyZ2luOiAtMC41ZW0gMCBjYWxjKHZhcigtLWFwcC1yYXRpbykgLyAyKTtcXHJcXG59XFxyXFxuI2Nzcy1wYW5lbCBsYWJlbCB7XFxyXFxuXFx0bWFyZ2luOiB2YXIoLS1hcHAtcmF0aW8pIDA7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdHotaW5kZXg6IDEwO1xcclxcbn1cXHJcXG4jY3NzLXBhbmVsIC5jc3MtcGFuZWxfX2xhYmVsIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcblxcdHotaW5kZXg6IDEwO1xcclxcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LW1haW4pO1xcclxcblxcdGJhY2tncm91bmQ6IHNhZGRsZWJyb3duO1xcclxcblxcdGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXHJcXG59XFxyXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L3Byb2plY3RzL3JvdWdlRnJhbWV3b3JrL3N0YXRpYy9kZW1vL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxxQ0FBcUM7Q0FDckMsd0JBQXdCO0NBQ3hCLDRCQUE0QjtDQUM1QlwiLFwiZmlsZVwiOlwic3R5bGVzLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXHJcXG5cXHRmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktbWFpbik7XFxyXFxuXFx0YmFja2dyb3VuZDogc2FkZGxlYnJvd247XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFhtbEVudGl0aWVzOiByZXF1aXJlKCcuL2xpYi94bWwtZW50aXRpZXMuanMnKSxcbiAgSHRtbDRFbnRpdGllczogcmVxdWlyZSgnLi9saWIvaHRtbDQtZW50aXRpZXMuanMnKSxcbiAgSHRtbDVFbnRpdGllczogcmVxdWlyZSgnLi9saWIvaHRtbDUtZW50aXRpZXMuanMnKSxcbiAgQWxsSHRtbEVudGl0aWVzOiByZXF1aXJlKCcuL2xpYi9odG1sNS1lbnRpdGllcy5qcycpXG59O1xuIiwidmFyIEhUTUxfQUxQSEEgPSBbJ2Fwb3MnLCAnbmJzcCcsICdpZXhjbCcsICdjZW50JywgJ3BvdW5kJywgJ2N1cnJlbicsICd5ZW4nLCAnYnJ2YmFyJywgJ3NlY3QnLCAndW1sJywgJ2NvcHknLCAnb3JkZicsICdsYXF1bycsICdub3QnLCAnc2h5JywgJ3JlZycsICdtYWNyJywgJ2RlZycsICdwbHVzbW4nLCAnc3VwMicsICdzdXAzJywgJ2FjdXRlJywgJ21pY3JvJywgJ3BhcmEnLCAnbWlkZG90JywgJ2NlZGlsJywgJ3N1cDEnLCAnb3JkbScsICdyYXF1bycsICdmcmFjMTQnLCAnZnJhYzEyJywgJ2ZyYWMzNCcsICdpcXVlc3QnLCAnQWdyYXZlJywgJ0FhY3V0ZScsICdBY2lyYycsICdBdGlsZGUnLCAnQXVtbCcsICdBcmluZycsICdBZWxpZycsICdDY2VkaWwnLCAnRWdyYXZlJywgJ0VhY3V0ZScsICdFY2lyYycsICdFdW1sJywgJ0lncmF2ZScsICdJYWN1dGUnLCAnSWNpcmMnLCAnSXVtbCcsICdFVEgnLCAnTnRpbGRlJywgJ09ncmF2ZScsICdPYWN1dGUnLCAnT2NpcmMnLCAnT3RpbGRlJywgJ091bWwnLCAndGltZXMnLCAnT3NsYXNoJywgJ1VncmF2ZScsICdVYWN1dGUnLCAnVWNpcmMnLCAnVXVtbCcsICdZYWN1dGUnLCAnVEhPUk4nLCAnc3psaWcnLCAnYWdyYXZlJywgJ2FhY3V0ZScsICdhY2lyYycsICdhdGlsZGUnLCAnYXVtbCcsICdhcmluZycsICdhZWxpZycsICdjY2VkaWwnLCAnZWdyYXZlJywgJ2VhY3V0ZScsICdlY2lyYycsICdldW1sJywgJ2lncmF2ZScsICdpYWN1dGUnLCAnaWNpcmMnLCAnaXVtbCcsICdldGgnLCAnbnRpbGRlJywgJ29ncmF2ZScsICdvYWN1dGUnLCAnb2NpcmMnLCAnb3RpbGRlJywgJ291bWwnLCAnZGl2aWRlJywgJ29zbGFzaCcsICd1Z3JhdmUnLCAndWFjdXRlJywgJ3VjaXJjJywgJ3V1bWwnLCAneWFjdXRlJywgJ3Rob3JuJywgJ3l1bWwnLCAncXVvdCcsICdhbXAnLCAnbHQnLCAnZ3QnLCAnT0VsaWcnLCAnb2VsaWcnLCAnU2Nhcm9uJywgJ3NjYXJvbicsICdZdW1sJywgJ2NpcmMnLCAndGlsZGUnLCAnZW5zcCcsICdlbXNwJywgJ3RoaW5zcCcsICd6d25qJywgJ3p3aicsICdscm0nLCAncmxtJywgJ25kYXNoJywgJ21kYXNoJywgJ2xzcXVvJywgJ3JzcXVvJywgJ3NicXVvJywgJ2xkcXVvJywgJ3JkcXVvJywgJ2JkcXVvJywgJ2RhZ2dlcicsICdEYWdnZXInLCAncGVybWlsJywgJ2xzYXF1bycsICdyc2FxdW8nLCAnZXVybycsICdmbm9mJywgJ0FscGhhJywgJ0JldGEnLCAnR2FtbWEnLCAnRGVsdGEnLCAnRXBzaWxvbicsICdaZXRhJywgJ0V0YScsICdUaGV0YScsICdJb3RhJywgJ0thcHBhJywgJ0xhbWJkYScsICdNdScsICdOdScsICdYaScsICdPbWljcm9uJywgJ1BpJywgJ1JobycsICdTaWdtYScsICdUYXUnLCAnVXBzaWxvbicsICdQaGknLCAnQ2hpJywgJ1BzaScsICdPbWVnYScsICdhbHBoYScsICdiZXRhJywgJ2dhbW1hJywgJ2RlbHRhJywgJ2Vwc2lsb24nLCAnemV0YScsICdldGEnLCAndGhldGEnLCAnaW90YScsICdrYXBwYScsICdsYW1iZGEnLCAnbXUnLCAnbnUnLCAneGknLCAnb21pY3JvbicsICdwaScsICdyaG8nLCAnc2lnbWFmJywgJ3NpZ21hJywgJ3RhdScsICd1cHNpbG9uJywgJ3BoaScsICdjaGknLCAncHNpJywgJ29tZWdhJywgJ3RoZXRhc3ltJywgJ3Vwc2loJywgJ3BpdicsICdidWxsJywgJ2hlbGxpcCcsICdwcmltZScsICdQcmltZScsICdvbGluZScsICdmcmFzbCcsICd3ZWllcnAnLCAnaW1hZ2UnLCAncmVhbCcsICd0cmFkZScsICdhbGVmc3ltJywgJ2xhcnInLCAndWFycicsICdyYXJyJywgJ2RhcnInLCAnaGFycicsICdjcmFycicsICdsQXJyJywgJ3VBcnInLCAnckFycicsICdkQXJyJywgJ2hBcnInLCAnZm9yYWxsJywgJ3BhcnQnLCAnZXhpc3QnLCAnZW1wdHknLCAnbmFibGEnLCAnaXNpbicsICdub3RpbicsICduaScsICdwcm9kJywgJ3N1bScsICdtaW51cycsICdsb3dhc3QnLCAncmFkaWMnLCAncHJvcCcsICdpbmZpbicsICdhbmcnLCAnYW5kJywgJ29yJywgJ2NhcCcsICdjdXAnLCAnaW50JywgJ3RoZXJlNCcsICdzaW0nLCAnY29uZycsICdhc3ltcCcsICduZScsICdlcXVpdicsICdsZScsICdnZScsICdzdWInLCAnc3VwJywgJ25zdWInLCAnc3ViZScsICdzdXBlJywgJ29wbHVzJywgJ290aW1lcycsICdwZXJwJywgJ3Nkb3QnLCAnbGNlaWwnLCAncmNlaWwnLCAnbGZsb29yJywgJ3JmbG9vcicsICdsYW5nJywgJ3JhbmcnLCAnbG96JywgJ3NwYWRlcycsICdjbHVicycsICdoZWFydHMnLCAnZGlhbXMnXTtcbnZhciBIVE1MX0NPREVTID0gWzM5LCAxNjAsIDE2MSwgMTYyLCAxNjMsIDE2NCwgMTY1LCAxNjYsIDE2NywgMTY4LCAxNjksIDE3MCwgMTcxLCAxNzIsIDE3MywgMTc0LCAxNzUsIDE3NiwgMTc3LCAxNzgsIDE3OSwgMTgwLCAxODEsIDE4MiwgMTgzLCAxODQsIDE4NSwgMTg2LCAxODcsIDE4OCwgMTg5LCAxOTAsIDE5MSwgMTkyLCAxOTMsIDE5NCwgMTk1LCAxOTYsIDE5NywgMTk4LCAxOTksIDIwMCwgMjAxLCAyMDIsIDIwMywgMjA0LCAyMDUsIDIwNiwgMjA3LCAyMDgsIDIwOSwgMjEwLCAyMTEsIDIxMiwgMjEzLCAyMTQsIDIxNSwgMjE2LCAyMTcsIDIxOCwgMjE5LCAyMjAsIDIyMSwgMjIyLCAyMjMsIDIyNCwgMjI1LCAyMjYsIDIyNywgMjI4LCAyMjksIDIzMCwgMjMxLCAyMzIsIDIzMywgMjM0LCAyMzUsIDIzNiwgMjM3LCAyMzgsIDIzOSwgMjQwLCAyNDEsIDI0MiwgMjQzLCAyNDQsIDI0NSwgMjQ2LCAyNDcsIDI0OCwgMjQ5LCAyNTAsIDI1MSwgMjUyLCAyNTMsIDI1NCwgMjU1LCAzNCwgMzgsIDYwLCA2MiwgMzM4LCAzMzksIDM1MiwgMzUzLCAzNzYsIDcxMCwgNzMyLCA4MTk0LCA4MTk1LCA4MjAxLCA4MjA0LCA4MjA1LCA4MjA2LCA4MjA3LCA4MjExLCA4MjEyLCA4MjE2LCA4MjE3LCA4MjE4LCA4MjIwLCA4MjIxLCA4MjIyLCA4MjI0LCA4MjI1LCA4MjQwLCA4MjQ5LCA4MjUwLCA4MzY0LCA0MDIsIDkxMywgOTE0LCA5MTUsIDkxNiwgOTE3LCA5MTgsIDkxOSwgOTIwLCA5MjEsIDkyMiwgOTIzLCA5MjQsIDkyNSwgOTI2LCA5MjcsIDkyOCwgOTI5LCA5MzEsIDkzMiwgOTMzLCA5MzQsIDkzNSwgOTM2LCA5MzcsIDk0NSwgOTQ2LCA5NDcsIDk0OCwgOTQ5LCA5NTAsIDk1MSwgOTUyLCA5NTMsIDk1NCwgOTU1LCA5NTYsIDk1NywgOTU4LCA5NTksIDk2MCwgOTYxLCA5NjIsIDk2MywgOTY0LCA5NjUsIDk2NiwgOTY3LCA5NjgsIDk2OSwgOTc3LCA5NzgsIDk4MiwgODIyNiwgODIzMCwgODI0MiwgODI0MywgODI1NCwgODI2MCwgODQ3MiwgODQ2NSwgODQ3NiwgODQ4MiwgODUwMSwgODU5MiwgODU5MywgODU5NCwgODU5NSwgODU5NiwgODYyOSwgODY1NiwgODY1NywgODY1OCwgODY1OSwgODY2MCwgODcwNCwgODcwNiwgODcwNywgODcwOSwgODcxMSwgODcxMiwgODcxMywgODcxNSwgODcxOSwgODcyMSwgODcyMiwgODcyNywgODczMCwgODczMywgODczNCwgODczNiwgODc0MywgODc0NCwgODc0NSwgODc0NiwgODc0NywgODc1NiwgODc2NCwgODc3MywgODc3NiwgODgwMCwgODgwMSwgODgwNCwgODgwNSwgODgzNCwgODgzNSwgODgzNiwgODgzOCwgODgzOSwgODg1MywgODg1NSwgODg2OSwgODkwMSwgODk2OCwgODk2OSwgODk3MCwgODk3MSwgOTAwMSwgOTAwMiwgOTY3NCwgOTgyNCwgOTgyNywgOTgyOSwgOTgzMF07XG5cbnZhciBhbHBoYUluZGV4ID0ge307XG52YXIgbnVtSW5kZXggPSB7fTtcblxudmFyIGkgPSAwO1xudmFyIGxlbmd0aCA9IEhUTUxfQUxQSEEubGVuZ3RoO1xud2hpbGUgKGkgPCBsZW5ndGgpIHtcbiAgICB2YXIgYSA9IEhUTUxfQUxQSEFbaV07XG4gICAgdmFyIGMgPSBIVE1MX0NPREVTW2ldO1xuICAgIGFscGhhSW5kZXhbYV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpO1xuICAgIG51bUluZGV4W2NdID0gYTtcbiAgICBpKys7XG59XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEh0bWw0RW50aXRpZXMoKSB7fVxuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw0RW50aXRpZXMucHJvdG90eXBlLmRlY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGlmICghc3RyIHx8ICFzdHIubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mKCM/W1xcd1xcZF0rKTs/L2csIGZ1bmN0aW9uKHMsIGVudGl0eSkge1xuICAgICAgICB2YXIgY2hyO1xuICAgICAgICBpZiAoZW50aXR5LmNoYXJBdCgwKSA9PT0gXCIjXCIpIHtcbiAgICAgICAgICAgIHZhciBjb2RlID0gZW50aXR5LmNoYXJBdCgxKS50b0xvd2VyQ2FzZSgpID09PSAneCcgP1xuICAgICAgICAgICAgICAgIHBhcnNlSW50KGVudGl0eS5zdWJzdHIoMiksIDE2KSA6XG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoZW50aXR5LnN1YnN0cigxKSk7XG5cbiAgICAgICAgICAgIGlmICghKGlzTmFOKGNvZGUpIHx8IGNvZGUgPCAtMzI3NjggfHwgY29kZSA+IDY1NTM1KSkge1xuICAgICAgICAgICAgICAgIGNociA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaHIgPSBhbHBoYUluZGV4W2VudGl0eV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNociB8fCBzO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5IdG1sNEVudGl0aWVzLmRlY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgSHRtbDRFbnRpdGllcygpLmRlY29kZShzdHIpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5IdG1sNEVudGl0aWVzLnByb3RvdHlwZS5lbmNvZGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICBpZiAoIXN0ciB8fCAhc3RyLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciBzdHJMZW5ndGggPSBzdHIubGVuZ3RoO1xuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHJMZW5ndGgpIHtcbiAgICAgICAgdmFyIGFscGhhID0gbnVtSW5kZXhbc3RyLmNoYXJDb2RlQXQoaSldO1xuICAgICAgICByZXN1bHQgKz0gYWxwaGEgPyBcIiZcIiArIGFscGhhICsgXCI7XCIgOiBzdHIuY2hhckF0KGkpO1xuICAgICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw0RW50aXRpZXMuZW5jb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIG5ldyBIdG1sNEVudGl0aWVzKCkuZW5jb2RlKHN0cik7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw0RW50aXRpZXMucHJvdG90eXBlLmVuY29kZU5vblVURiA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGlmICghc3RyIHx8ICFzdHIubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFyIHN0ckxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ckxlbmd0aCkge1xuICAgICAgICB2YXIgY2MgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgdmFyIGFscGhhID0gbnVtSW5kZXhbY2NdO1xuICAgICAgICBpZiAoYWxwaGEpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBcIiZcIiArIGFscGhhICsgXCI7XCI7XG4gICAgICAgIH0gZWxzZSBpZiAoY2MgPCAzMiB8fCBjYyA+IDEyNikge1xuICAgICAgICAgICAgcmVzdWx0ICs9IFwiJiNcIiArIGNjICsgXCI7XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw0RW50aXRpZXMuZW5jb2RlTm9uVVRGID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIG5ldyBIdG1sNEVudGl0aWVzKCkuZW5jb2RlTm9uVVRGKHN0cik7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw0RW50aXRpZXMucHJvdG90eXBlLmVuY29kZU5vbkFTQ0lJID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgaWYgKCFzdHIgfHwgIXN0ci5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB2YXIgc3RyTGVuZ3RoID0gc3RyLmxlbmd0aDtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyTGVuZ3RoKSB7XG4gICAgICAgIHZhciBjID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGlmIChjIDw9IDI1NSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHN0cltpKytdO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ICs9ICcmIycgKyBjICsgJzsnO1xuICAgICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw0RW50aXRpZXMuZW5jb2RlTm9uQVNDSUkgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gbmV3IEh0bWw0RW50aXRpZXMoKS5lbmNvZGVOb25BU0NJSShzdHIpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBIdG1sNEVudGl0aWVzO1xuIiwidmFyIEVOVElUSUVTID0gW1snQWFjdXRlJywgWzE5M11dLCBbJ2FhY3V0ZScsIFsyMjVdXSwgWydBYnJldmUnLCBbMjU4XV0sIFsnYWJyZXZlJywgWzI1OV1dLCBbJ2FjJywgWzg3NjZdXSwgWydhY2QnLCBbODc2N11dLCBbJ2FjRScsIFs4NzY2LCA4MTldXSwgWydBY2lyYycsIFsxOTRdXSwgWydhY2lyYycsIFsyMjZdXSwgWydhY3V0ZScsIFsxODBdXSwgWydBY3knLCBbMTA0MF1dLCBbJ2FjeScsIFsxMDcyXV0sIFsnQUVsaWcnLCBbMTk4XV0sIFsnYWVsaWcnLCBbMjMwXV0sIFsnYWYnLCBbODI4OV1dLCBbJ0FmcicsIFsxMjAwNjhdXSwgWydhZnInLCBbMTIwMDk0XV0sIFsnQWdyYXZlJywgWzE5Ml1dLCBbJ2FncmF2ZScsIFsyMjRdXSwgWydhbGVmc3ltJywgWzg1MDFdXSwgWydhbGVwaCcsIFs4NTAxXV0sIFsnQWxwaGEnLCBbOTEzXV0sIFsnYWxwaGEnLCBbOTQ1XV0sIFsnQW1hY3InLCBbMjU2XV0sIFsnYW1hY3InLCBbMjU3XV0sIFsnYW1hbGcnLCBbMTA4MTVdXSwgWydhbXAnLCBbMzhdXSwgWydBTVAnLCBbMzhdXSwgWydhbmRhbmQnLCBbMTA4MzddXSwgWydBbmQnLCBbMTA4MzVdXSwgWydhbmQnLCBbODc0M11dLCBbJ2FuZGQnLCBbMTA4NDRdXSwgWydhbmRzbG9wZScsIFsxMDg0MF1dLCBbJ2FuZHYnLCBbMTA4NDJdXSwgWydhbmcnLCBbODczNl1dLCBbJ2FuZ2UnLCBbMTA2NjBdXSwgWydhbmdsZScsIFs4NzM2XV0sIFsnYW5nbXNkYWEnLCBbMTA2NjRdXSwgWydhbmdtc2RhYicsIFsxMDY2NV1dLCBbJ2FuZ21zZGFjJywgWzEwNjY2XV0sIFsnYW5nbXNkYWQnLCBbMTA2NjddXSwgWydhbmdtc2RhZScsIFsxMDY2OF1dLCBbJ2FuZ21zZGFmJywgWzEwNjY5XV0sIFsnYW5nbXNkYWcnLCBbMTA2NzBdXSwgWydhbmdtc2RhaCcsIFsxMDY3MV1dLCBbJ2FuZ21zZCcsIFs4NzM3XV0sIFsnYW5ncnQnLCBbODczNV1dLCBbJ2FuZ3J0dmInLCBbODg5NF1dLCBbJ2FuZ3J0dmJkJywgWzEwNjUzXV0sIFsnYW5nc3BoJywgWzg3MzhdXSwgWydhbmdzdCcsIFsxOTddXSwgWydhbmd6YXJyJywgWzkwODRdXSwgWydBb2dvbicsIFsyNjBdXSwgWydhb2dvbicsIFsyNjFdXSwgWydBb3BmJywgWzEyMDEyMF1dLCBbJ2FvcGYnLCBbMTIwMTQ2XV0sIFsnYXBhY2lyJywgWzEwODYzXV0sIFsnYXAnLCBbODc3Nl1dLCBbJ2FwRScsIFsxMDg2NF1dLCBbJ2FwZScsIFs4Nzc4XV0sIFsnYXBpZCcsIFs4Nzc5XV0sIFsnYXBvcycsIFszOV1dLCBbJ0FwcGx5RnVuY3Rpb24nLCBbODI4OV1dLCBbJ2FwcHJveCcsIFs4Nzc2XV0sIFsnYXBwcm94ZXEnLCBbODc3OF1dLCBbJ0FyaW5nJywgWzE5N11dLCBbJ2FyaW5nJywgWzIyOV1dLCBbJ0FzY3InLCBbMTE5OTY0XV0sIFsnYXNjcicsIFsxMTk5OTBdXSwgWydBc3NpZ24nLCBbODc4OF1dLCBbJ2FzdCcsIFs0Ml1dLCBbJ2FzeW1wJywgWzg3NzZdXSwgWydhc3ltcGVxJywgWzg3ODFdXSwgWydBdGlsZGUnLCBbMTk1XV0sIFsnYXRpbGRlJywgWzIyN11dLCBbJ0F1bWwnLCBbMTk2XV0sIFsnYXVtbCcsIFsyMjhdXSwgWydhd2NvbmludCcsIFs4NzU1XV0sIFsnYXdpbnQnLCBbMTA3NjldXSwgWydiYWNrY29uZycsIFs4NzgwXV0sIFsnYmFja2Vwc2lsb24nLCBbMTAxNF1dLCBbJ2JhY2twcmltZScsIFs4MjQ1XV0sIFsnYmFja3NpbScsIFs4NzY1XV0sIFsnYmFja3NpbWVxJywgWzg5MDldXSwgWydCYWNrc2xhc2gnLCBbODcyNl1dLCBbJ0JhcnYnLCBbMTA5ODNdXSwgWydiYXJ2ZWUnLCBbODg5M11dLCBbJ2JhcndlZCcsIFs4OTY1XV0sIFsnQmFyd2VkJywgWzg5NjZdXSwgWydiYXJ3ZWRnZScsIFs4OTY1XV0sIFsnYmJyaycsIFs5MTQxXV0sIFsnYmJya3RicmsnLCBbOTE0Ml1dLCBbJ2Jjb25nJywgWzg3ODBdXSwgWydCY3knLCBbMTA0MV1dLCBbJ2JjeScsIFsxMDczXV0sIFsnYmRxdW8nLCBbODIyMl1dLCBbJ2JlY2F1cycsIFs4NzU3XV0sIFsnYmVjYXVzZScsIFs4NzU3XV0sIFsnQmVjYXVzZScsIFs4NzU3XV0sIFsnYmVtcHR5dicsIFsxMDY3Ml1dLCBbJ2JlcHNpJywgWzEwMTRdXSwgWydiZXJub3UnLCBbODQ5Ml1dLCBbJ0Jlcm5vdWxsaXMnLCBbODQ5Ml1dLCBbJ0JldGEnLCBbOTE0XV0sIFsnYmV0YScsIFs5NDZdXSwgWydiZXRoJywgWzg1MDJdXSwgWydiZXR3ZWVuJywgWzg4MTJdXSwgWydCZnInLCBbMTIwMDY5XV0sIFsnYmZyJywgWzEyMDA5NV1dLCBbJ2JpZ2NhcCcsIFs4ODk4XV0sIFsnYmlnY2lyYycsIFs5NzExXV0sIFsnYmlnY3VwJywgWzg4OTldXSwgWydiaWdvZG90JywgWzEwNzUyXV0sIFsnYmlnb3BsdXMnLCBbMTA3NTNdXSwgWydiaWdvdGltZXMnLCBbMTA3NTRdXSwgWydiaWdzcWN1cCcsIFsxMDc1OF1dLCBbJ2JpZ3N0YXInLCBbOTczM11dLCBbJ2JpZ3RyaWFuZ2xlZG93bicsIFs5NjYxXV0sIFsnYmlndHJpYW5nbGV1cCcsIFs5NjUxXV0sIFsnYmlndXBsdXMnLCBbMTA3NTZdXSwgWydiaWd2ZWUnLCBbODg5N11dLCBbJ2JpZ3dlZGdlJywgWzg4OTZdXSwgWydia2Fyb3cnLCBbMTA1MDldXSwgWydibGFja2xvemVuZ2UnLCBbMTA3MzFdXSwgWydibGFja3NxdWFyZScsIFs5NjQyXV0sIFsnYmxhY2t0cmlhbmdsZScsIFs5NjUyXV0sIFsnYmxhY2t0cmlhbmdsZWRvd24nLCBbOTY2Ml1dLCBbJ2JsYWNrdHJpYW5nbGVsZWZ0JywgWzk2NjZdXSwgWydibGFja3RyaWFuZ2xlcmlnaHQnLCBbOTY1Nl1dLCBbJ2JsYW5rJywgWzkyNTFdXSwgWydibGsxMicsIFs5NjE4XV0sIFsnYmxrMTQnLCBbOTYxN11dLCBbJ2JsazM0JywgWzk2MTldXSwgWydibG9jaycsIFs5NjA4XV0sIFsnYm5lJywgWzYxLCA4NDIxXV0sIFsnYm5lcXVpdicsIFs4ODAxLCA4NDIxXV0sIFsnYk5vdCcsIFsxMDk4OV1dLCBbJ2Jub3QnLCBbODk3Nl1dLCBbJ0JvcGYnLCBbMTIwMTIxXV0sIFsnYm9wZicsIFsxMjAxNDddXSwgWydib3QnLCBbODg2OV1dLCBbJ2JvdHRvbScsIFs4ODY5XV0sIFsnYm93dGllJywgWzg5MDRdXSwgWydib3hib3gnLCBbMTA2OTddXSwgWydib3hkbCcsIFs5NDg4XV0sIFsnYm94ZEwnLCBbOTU1N11dLCBbJ2JveERsJywgWzk1NThdXSwgWydib3hETCcsIFs5NTU5XV0sIFsnYm94ZHInLCBbOTQ4NF1dLCBbJ2JveGRSJywgWzk1NTRdXSwgWydib3hEcicsIFs5NTU1XV0sIFsnYm94RFInLCBbOTU1Nl1dLCBbJ2JveGgnLCBbOTQ3Ml1dLCBbJ2JveEgnLCBbOTU1Ml1dLCBbJ2JveGhkJywgWzk1MTZdXSwgWydib3hIZCcsIFs5NTcyXV0sIFsnYm94aEQnLCBbOTU3M11dLCBbJ2JveEhEJywgWzk1NzRdXSwgWydib3hodScsIFs5NTI0XV0sIFsnYm94SHUnLCBbOTU3NV1dLCBbJ2JveGhVJywgWzk1NzZdXSwgWydib3hIVScsIFs5NTc3XV0sIFsnYm94bWludXMnLCBbODg2M11dLCBbJ2JveHBsdXMnLCBbODg2Ml1dLCBbJ2JveHRpbWVzJywgWzg4NjRdXSwgWydib3h1bCcsIFs5NDk2XV0sIFsnYm94dUwnLCBbOTU2M11dLCBbJ2JveFVsJywgWzk1NjRdXSwgWydib3hVTCcsIFs5NTY1XV0sIFsnYm94dXInLCBbOTQ5Ml1dLCBbJ2JveHVSJywgWzk1NjBdXSwgWydib3hVcicsIFs5NTYxXV0sIFsnYm94VVInLCBbOTU2Ml1dLCBbJ2JveHYnLCBbOTQ3NF1dLCBbJ2JveFYnLCBbOTU1M11dLCBbJ2JveHZoJywgWzk1MzJdXSwgWydib3h2SCcsIFs5NTc4XV0sIFsnYm94VmgnLCBbOTU3OV1dLCBbJ2JveFZIJywgWzk1ODBdXSwgWydib3h2bCcsIFs5NTA4XV0sIFsnYm94dkwnLCBbOTU2OV1dLCBbJ2JveFZsJywgWzk1NzBdXSwgWydib3hWTCcsIFs5NTcxXV0sIFsnYm94dnInLCBbOTUwMF1dLCBbJ2JveHZSJywgWzk1NjZdXSwgWydib3hWcicsIFs5NTY3XV0sIFsnYm94VlInLCBbOTU2OF1dLCBbJ2JwcmltZScsIFs4MjQ1XV0sIFsnYnJldmUnLCBbNzI4XV0sIFsnQnJldmUnLCBbNzI4XV0sIFsnYnJ2YmFyJywgWzE2Nl1dLCBbJ2JzY3InLCBbMTE5OTkxXV0sIFsnQnNjcicsIFs4NDkyXV0sIFsnYnNlbWknLCBbODI3MV1dLCBbJ2JzaW0nLCBbODc2NV1dLCBbJ2JzaW1lJywgWzg5MDldXSwgWydic29sYicsIFsxMDY5M11dLCBbJ2Jzb2wnLCBbOTJdXSwgWydic29saHN1YicsIFsxMDE4NF1dLCBbJ2J1bGwnLCBbODIyNl1dLCBbJ2J1bGxldCcsIFs4MjI2XV0sIFsnYnVtcCcsIFs4NzgyXV0sIFsnYnVtcEUnLCBbMTA5MjZdXSwgWydidW1wZScsIFs4NzgzXV0sIFsnQnVtcGVxJywgWzg3ODJdXSwgWydidW1wZXEnLCBbODc4M11dLCBbJ0NhY3V0ZScsIFsyNjJdXSwgWydjYWN1dGUnLCBbMjYzXV0sIFsnY2FwYW5kJywgWzEwODIwXV0sIFsnY2FwYnJjdXAnLCBbMTA4MjVdXSwgWydjYXBjYXAnLCBbMTA4MjddXSwgWydjYXAnLCBbODc0NV1dLCBbJ0NhcCcsIFs4OTE0XV0sIFsnY2FwY3VwJywgWzEwODIzXV0sIFsnY2FwZG90JywgWzEwODE2XV0sIFsnQ2FwaXRhbERpZmZlcmVudGlhbEQnLCBbODUxN11dLCBbJ2NhcHMnLCBbODc0NSwgNjUwMjRdXSwgWydjYXJldCcsIFs4MjU3XV0sIFsnY2Fyb24nLCBbNzExXV0sIFsnQ2F5bGV5cycsIFs4NDkzXV0sIFsnY2NhcHMnLCBbMTA4MjldXSwgWydDY2Fyb24nLCBbMjY4XV0sIFsnY2Nhcm9uJywgWzI2OV1dLCBbJ0NjZWRpbCcsIFsxOTldXSwgWydjY2VkaWwnLCBbMjMxXV0sIFsnQ2NpcmMnLCBbMjY0XV0sIFsnY2NpcmMnLCBbMjY1XV0sIFsnQ2NvbmludCcsIFs4NzUyXV0sIFsnY2N1cHMnLCBbMTA4MjhdXSwgWydjY3Vwc3NtJywgWzEwODMyXV0sIFsnQ2RvdCcsIFsyNjZdXSwgWydjZG90JywgWzI2N11dLCBbJ2NlZGlsJywgWzE4NF1dLCBbJ0NlZGlsbGEnLCBbMTg0XV0sIFsnY2VtcHR5dicsIFsxMDY3NF1dLCBbJ2NlbnQnLCBbMTYyXV0sIFsnY2VudGVyZG90JywgWzE4M11dLCBbJ0NlbnRlckRvdCcsIFsxODNdXSwgWydjZnInLCBbMTIwMDk2XV0sIFsnQ2ZyJywgWzg0OTNdXSwgWydDSGN5JywgWzEwNjNdXSwgWydjaGN5JywgWzEwOTVdXSwgWydjaGVjaycsIFsxMDAwM11dLCBbJ2NoZWNrbWFyaycsIFsxMDAwM11dLCBbJ0NoaScsIFs5MzVdXSwgWydjaGknLCBbOTY3XV0sIFsnY2lyYycsIFs3MTBdXSwgWydjaXJjZXEnLCBbODc5MV1dLCBbJ2NpcmNsZWFycm93bGVmdCcsIFs4NjM0XV0sIFsnY2lyY2xlYXJyb3dyaWdodCcsIFs4NjM1XV0sIFsnY2lyY2xlZGFzdCcsIFs4ODU5XV0sIFsnY2lyY2xlZGNpcmMnLCBbODg1OF1dLCBbJ2NpcmNsZWRkYXNoJywgWzg4NjFdXSwgWydDaXJjbGVEb3QnLCBbODg1N11dLCBbJ2NpcmNsZWRSJywgWzE3NF1dLCBbJ2NpcmNsZWRTJywgWzk0MTZdXSwgWydDaXJjbGVNaW51cycsIFs4ODU0XV0sIFsnQ2lyY2xlUGx1cycsIFs4ODUzXV0sIFsnQ2lyY2xlVGltZXMnLCBbODg1NV1dLCBbJ2NpcicsIFs5Njc1XV0sIFsnY2lyRScsIFsxMDY5MV1dLCBbJ2NpcmUnLCBbODc5MV1dLCBbJ2NpcmZuaW50JywgWzEwNzY4XV0sIFsnY2lybWlkJywgWzEwOTkxXV0sIFsnY2lyc2NpcicsIFsxMDY5MF1dLCBbJ0Nsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbCcsIFs4NzU0XV0sIFsnY2x1YnMnLCBbOTgyN11dLCBbJ2NsdWJzdWl0JywgWzk4MjddXSwgWydjb2xvbicsIFs1OF1dLCBbJ0NvbG9uJywgWzg3NTldXSwgWydDb2xvbmUnLCBbMTA4NjhdXSwgWydjb2xvbmUnLCBbODc4OF1dLCBbJ2NvbG9uZXEnLCBbODc4OF1dLCBbJ2NvbW1hJywgWzQ0XV0sIFsnY29tbWF0JywgWzY0XV0sIFsnY29tcCcsIFs4NzA1XV0sIFsnY29tcGZuJywgWzg3MjhdXSwgWydjb21wbGVtZW50JywgWzg3MDVdXSwgWydjb21wbGV4ZXMnLCBbODQ1MF1dLCBbJ2NvbmcnLCBbODc3M11dLCBbJ2Nvbmdkb3QnLCBbMTA4NjFdXSwgWydDb25ncnVlbnQnLCBbODgwMV1dLCBbJ2NvbmludCcsIFs4NzUwXV0sIFsnQ29uaW50JywgWzg3NTFdXSwgWydDb250b3VySW50ZWdyYWwnLCBbODc1MF1dLCBbJ2NvcGYnLCBbMTIwMTQ4XV0sIFsnQ29wZicsIFs4NDUwXV0sIFsnY29wcm9kJywgWzg3MjBdXSwgWydDb3Byb2R1Y3QnLCBbODcyMF1dLCBbJ2NvcHknLCBbMTY5XV0sIFsnQ09QWScsIFsxNjldXSwgWydjb3B5c3InLCBbODQ3MV1dLCBbJ0NvdW50ZXJDbG9ja3dpc2VDb250b3VySW50ZWdyYWwnLCBbODc1NV1dLCBbJ2NyYXJyJywgWzg2MjldXSwgWydjcm9zcycsIFsxMDAwN11dLCBbJ0Nyb3NzJywgWzEwNzk5XV0sIFsnQ3NjcicsIFsxMTk5NjZdXSwgWydjc2NyJywgWzExOTk5Ml1dLCBbJ2NzdWInLCBbMTA5NTldXSwgWydjc3ViZScsIFsxMDk2MV1dLCBbJ2NzdXAnLCBbMTA5NjBdXSwgWydjc3VwZScsIFsxMDk2Ml1dLCBbJ2N0ZG90JywgWzg5NDNdXSwgWydjdWRhcnJsJywgWzEwNTUyXV0sIFsnY3VkYXJycicsIFsxMDU0OV1dLCBbJ2N1ZXByJywgWzg5MjZdXSwgWydjdWVzYycsIFs4OTI3XV0sIFsnY3VsYXJyJywgWzg2MzBdXSwgWydjdWxhcnJwJywgWzEwNTU3XV0sIFsnY3VwYnJjYXAnLCBbMTA4MjRdXSwgWydjdXBjYXAnLCBbMTA4MjJdXSwgWydDdXBDYXAnLCBbODc4MV1dLCBbJ2N1cCcsIFs4NzQ2XV0sIFsnQ3VwJywgWzg5MTVdXSwgWydjdXBjdXAnLCBbMTA4MjZdXSwgWydjdXBkb3QnLCBbODg0NV1dLCBbJ2N1cG9yJywgWzEwODIxXV0sIFsnY3VwcycsIFs4NzQ2LCA2NTAyNF1dLCBbJ2N1cmFycicsIFs4NjMxXV0sIFsnY3VyYXJybScsIFsxMDU1Nl1dLCBbJ2N1cmx5ZXFwcmVjJywgWzg5MjZdXSwgWydjdXJseWVxc3VjYycsIFs4OTI3XV0sIFsnY3VybHl2ZWUnLCBbODkxMF1dLCBbJ2N1cmx5d2VkZ2UnLCBbODkxMV1dLCBbJ2N1cnJlbicsIFsxNjRdXSwgWydjdXJ2ZWFycm93bGVmdCcsIFs4NjMwXV0sIFsnY3VydmVhcnJvd3JpZ2h0JywgWzg2MzFdXSwgWydjdXZlZScsIFs4OTEwXV0sIFsnY3V3ZWQnLCBbODkxMV1dLCBbJ2N3Y29uaW50JywgWzg3NTRdXSwgWydjd2ludCcsIFs4NzUzXV0sIFsnY3lsY3R5JywgWzkwMDVdXSwgWydkYWdnZXInLCBbODIyNF1dLCBbJ0RhZ2dlcicsIFs4MjI1XV0sIFsnZGFsZXRoJywgWzg1MDRdXSwgWydkYXJyJywgWzg1OTVdXSwgWydEYXJyJywgWzg2MDldXSwgWydkQXJyJywgWzg2NTldXSwgWydkYXNoJywgWzgyMDhdXSwgWydEYXNodicsIFsxMDk4MF1dLCBbJ2Rhc2h2JywgWzg4NjddXSwgWydkYmthcm93JywgWzEwNTExXV0sIFsnZGJsYWMnLCBbNzMzXV0sIFsnRGNhcm9uJywgWzI3MF1dLCBbJ2RjYXJvbicsIFsyNzFdXSwgWydEY3knLCBbMTA0NF1dLCBbJ2RjeScsIFsxMDc2XV0sIFsnZGRhZ2dlcicsIFs4MjI1XV0sIFsnZGRhcnInLCBbODY1MF1dLCBbJ0REJywgWzg1MTddXSwgWydkZCcsIFs4NTE4XV0sIFsnRERvdHJhaGQnLCBbMTA1MTNdXSwgWydkZG90c2VxJywgWzEwODcxXV0sIFsnZGVnJywgWzE3Nl1dLCBbJ0RlbCcsIFs4NzExXV0sIFsnRGVsdGEnLCBbOTE2XV0sIFsnZGVsdGEnLCBbOTQ4XV0sIFsnZGVtcHR5dicsIFsxMDY3M11dLCBbJ2RmaXNodCcsIFsxMDYyM11dLCBbJ0RmcicsIFsxMjAwNzFdXSwgWydkZnInLCBbMTIwMDk3XV0sIFsnZEhhcicsIFsxMDU5N11dLCBbJ2RoYXJsJywgWzg2NDNdXSwgWydkaGFycicsIFs4NjQyXV0sIFsnRGlhY3JpdGljYWxBY3V0ZScsIFsxODBdXSwgWydEaWFjcml0aWNhbERvdCcsIFs3MjldXSwgWydEaWFjcml0aWNhbERvdWJsZUFjdXRlJywgWzczM11dLCBbJ0RpYWNyaXRpY2FsR3JhdmUnLCBbOTZdXSwgWydEaWFjcml0aWNhbFRpbGRlJywgWzczMl1dLCBbJ2RpYW0nLCBbODkwMF1dLCBbJ2RpYW1vbmQnLCBbODkwMF1dLCBbJ0RpYW1vbmQnLCBbODkwMF1dLCBbJ2RpYW1vbmRzdWl0JywgWzk4MzBdXSwgWydkaWFtcycsIFs5ODMwXV0sIFsnZGllJywgWzE2OF1dLCBbJ0RpZmZlcmVudGlhbEQnLCBbODUxOF1dLCBbJ2RpZ2FtbWEnLCBbOTg5XV0sIFsnZGlzaW4nLCBbODk0Nl1dLCBbJ2RpdicsIFsyNDddXSwgWydkaXZpZGUnLCBbMjQ3XV0sIFsnZGl2aWRlb250aW1lcycsIFs4OTAzXV0sIFsnZGl2b254JywgWzg5MDNdXSwgWydESmN5JywgWzEwMjZdXSwgWydkamN5JywgWzExMDZdXSwgWydkbGNvcm4nLCBbODk5MF1dLCBbJ2RsY3JvcCcsIFs4OTczXV0sIFsnZG9sbGFyJywgWzM2XV0sIFsnRG9wZicsIFsxMjAxMjNdXSwgWydkb3BmJywgWzEyMDE0OV1dLCBbJ0RvdCcsIFsxNjhdXSwgWydkb3QnLCBbNzI5XV0sIFsnRG90RG90JywgWzg0MTJdXSwgWydkb3RlcScsIFs4Nzg0XV0sIFsnZG90ZXFkb3QnLCBbODc4NV1dLCBbJ0RvdEVxdWFsJywgWzg3ODRdXSwgWydkb3RtaW51cycsIFs4NzYwXV0sIFsnZG90cGx1cycsIFs4NzI0XV0sIFsnZG90c3F1YXJlJywgWzg4NjVdXSwgWydkb3VibGViYXJ3ZWRnZScsIFs4OTY2XV0sIFsnRG91YmxlQ29udG91ckludGVncmFsJywgWzg3NTFdXSwgWydEb3VibGVEb3QnLCBbMTY4XV0sIFsnRG91YmxlRG93bkFycm93JywgWzg2NTldXSwgWydEb3VibGVMZWZ0QXJyb3cnLCBbODY1Nl1dLCBbJ0RvdWJsZUxlZnRSaWdodEFycm93JywgWzg2NjBdXSwgWydEb3VibGVMZWZ0VGVlJywgWzEwOTgwXV0sIFsnRG91YmxlTG9uZ0xlZnRBcnJvdycsIFsxMDIzMl1dLCBbJ0RvdWJsZUxvbmdMZWZ0UmlnaHRBcnJvdycsIFsxMDIzNF1dLCBbJ0RvdWJsZUxvbmdSaWdodEFycm93JywgWzEwMjMzXV0sIFsnRG91YmxlUmlnaHRBcnJvdycsIFs4NjU4XV0sIFsnRG91YmxlUmlnaHRUZWUnLCBbODg3Ml1dLCBbJ0RvdWJsZVVwQXJyb3cnLCBbODY1N11dLCBbJ0RvdWJsZVVwRG93bkFycm93JywgWzg2NjFdXSwgWydEb3VibGVWZXJ0aWNhbEJhcicsIFs4NzQxXV0sIFsnRG93bkFycm93QmFyJywgWzEwNTE1XV0sIFsnZG93bmFycm93JywgWzg1OTVdXSwgWydEb3duQXJyb3cnLCBbODU5NV1dLCBbJ0Rvd25hcnJvdycsIFs4NjU5XV0sIFsnRG93bkFycm93VXBBcnJvdycsIFs4NjkzXV0sIFsnRG93bkJyZXZlJywgWzc4NV1dLCBbJ2Rvd25kb3duYXJyb3dzJywgWzg2NTBdXSwgWydkb3duaGFycG9vbmxlZnQnLCBbODY0M11dLCBbJ2Rvd25oYXJwb29ucmlnaHQnLCBbODY0Ml1dLCBbJ0Rvd25MZWZ0UmlnaHRWZWN0b3InLCBbMTA1NzZdXSwgWydEb3duTGVmdFRlZVZlY3RvcicsIFsxMDU5MF1dLCBbJ0Rvd25MZWZ0VmVjdG9yQmFyJywgWzEwNTgyXV0sIFsnRG93bkxlZnRWZWN0b3InLCBbODYzN11dLCBbJ0Rvd25SaWdodFRlZVZlY3RvcicsIFsxMDU5MV1dLCBbJ0Rvd25SaWdodFZlY3RvckJhcicsIFsxMDU4M11dLCBbJ0Rvd25SaWdodFZlY3RvcicsIFs4NjQxXV0sIFsnRG93blRlZUFycm93JywgWzg2MTVdXSwgWydEb3duVGVlJywgWzg4NjhdXSwgWydkcmJrYXJvdycsIFsxMDUxMl1dLCBbJ2RyY29ybicsIFs4OTkxXV0sIFsnZHJjcm9wJywgWzg5NzJdXSwgWydEc2NyJywgWzExOTk2N11dLCBbJ2RzY3InLCBbMTE5OTkzXV0sIFsnRFNjeScsIFsxMDI5XV0sIFsnZHNjeScsIFsxMTA5XV0sIFsnZHNvbCcsIFsxMDc0Ml1dLCBbJ0RzdHJvaycsIFsyNzJdXSwgWydkc3Ryb2snLCBbMjczXV0sIFsnZHRkb3QnLCBbODk0NV1dLCBbJ2R0cmknLCBbOTY2M11dLCBbJ2R0cmlmJywgWzk2NjJdXSwgWydkdWFycicsIFs4NjkzXV0sIFsnZHVoYXInLCBbMTA2MDddXSwgWydkd2FuZ2xlJywgWzEwNjYyXV0sIFsnRFpjeScsIFsxMDM5XV0sIFsnZHpjeScsIFsxMTE5XV0sIFsnZHppZ3JhcnInLCBbMTAyMzldXSwgWydFYWN1dGUnLCBbMjAxXV0sIFsnZWFjdXRlJywgWzIzM11dLCBbJ2Vhc3RlcicsIFsxMDg2Ml1dLCBbJ0VjYXJvbicsIFsyODJdXSwgWydlY2Fyb24nLCBbMjgzXV0sIFsnRWNpcmMnLCBbMjAyXV0sIFsnZWNpcmMnLCBbMjM0XV0sIFsnZWNpcicsIFs4NzkwXV0sIFsnZWNvbG9uJywgWzg3ODldXSwgWydFY3knLCBbMTA2OV1dLCBbJ2VjeScsIFsxMTAxXV0sIFsnZUREb3QnLCBbMTA4NzFdXSwgWydFZG90JywgWzI3OF1dLCBbJ2Vkb3QnLCBbMjc5XV0sIFsnZURvdCcsIFs4Nzg1XV0sIFsnZWUnLCBbODUxOV1dLCBbJ2VmRG90JywgWzg3ODZdXSwgWydFZnInLCBbMTIwMDcyXV0sIFsnZWZyJywgWzEyMDA5OF1dLCBbJ2VnJywgWzEwOTA2XV0sIFsnRWdyYXZlJywgWzIwMF1dLCBbJ2VncmF2ZScsIFsyMzJdXSwgWydlZ3MnLCBbMTA5MDJdXSwgWydlZ3Nkb3QnLCBbMTA5MDRdXSwgWydlbCcsIFsxMDkwNV1dLCBbJ0VsZW1lbnQnLCBbODcxMl1dLCBbJ2VsaW50ZXJzJywgWzkxOTFdXSwgWydlbGwnLCBbODQ2N11dLCBbJ2VscycsIFsxMDkwMV1dLCBbJ2Vsc2RvdCcsIFsxMDkwM11dLCBbJ0VtYWNyJywgWzI3NF1dLCBbJ2VtYWNyJywgWzI3NV1dLCBbJ2VtcHR5JywgWzg3MDldXSwgWydlbXB0eXNldCcsIFs4NzA5XV0sIFsnRW1wdHlTbWFsbFNxdWFyZScsIFs5NzIzXV0sIFsnZW1wdHl2JywgWzg3MDldXSwgWydFbXB0eVZlcnlTbWFsbFNxdWFyZScsIFs5NjQzXV0sIFsnZW1zcDEzJywgWzgxOTZdXSwgWydlbXNwMTQnLCBbODE5N11dLCBbJ2Vtc3AnLCBbODE5NV1dLCBbJ0VORycsIFszMzBdXSwgWydlbmcnLCBbMzMxXV0sIFsnZW5zcCcsIFs4MTk0XV0sIFsnRW9nb24nLCBbMjgwXV0sIFsnZW9nb24nLCBbMjgxXV0sIFsnRW9wZicsIFsxMjAxMjRdXSwgWydlb3BmJywgWzEyMDE1MF1dLCBbJ2VwYXInLCBbODkxN11dLCBbJ2VwYXJzbCcsIFsxMDcyM11dLCBbJ2VwbHVzJywgWzEwODY1XV0sIFsnZXBzaScsIFs5NDldXSwgWydFcHNpbG9uJywgWzkxN11dLCBbJ2Vwc2lsb24nLCBbOTQ5XV0sIFsnZXBzaXYnLCBbMTAxM11dLCBbJ2VxY2lyYycsIFs4NzkwXV0sIFsnZXFjb2xvbicsIFs4Nzg5XV0sIFsnZXFzaW0nLCBbODc3MF1dLCBbJ2Vxc2xhbnRndHInLCBbMTA5MDJdXSwgWydlcXNsYW50bGVzcycsIFsxMDkwMV1dLCBbJ0VxdWFsJywgWzEwODY5XV0sIFsnZXF1YWxzJywgWzYxXV0sIFsnRXF1YWxUaWxkZScsIFs4NzcwXV0sIFsnZXF1ZXN0JywgWzg3OTldXSwgWydFcXVpbGlicml1bScsIFs4NjUyXV0sIFsnZXF1aXYnLCBbODgwMV1dLCBbJ2VxdWl2REQnLCBbMTA4NzJdXSwgWydlcXZwYXJzbCcsIFsxMDcyNV1dLCBbJ2VyYXJyJywgWzEwNjA5XV0sIFsnZXJEb3QnLCBbODc4N11dLCBbJ2VzY3InLCBbODQ5NV1dLCBbJ0VzY3InLCBbODQ5Nl1dLCBbJ2VzZG90JywgWzg3ODRdXSwgWydFc2ltJywgWzEwODY3XV0sIFsnZXNpbScsIFs4NzcwXV0sIFsnRXRhJywgWzkxOV1dLCBbJ2V0YScsIFs5NTFdXSwgWydFVEgnLCBbMjA4XV0sIFsnZXRoJywgWzI0MF1dLCBbJ0V1bWwnLCBbMjAzXV0sIFsnZXVtbCcsIFsyMzVdXSwgWydldXJvJywgWzgzNjRdXSwgWydleGNsJywgWzMzXV0sIFsnZXhpc3QnLCBbODcwN11dLCBbJ0V4aXN0cycsIFs4NzA3XV0sIFsnZXhwZWN0YXRpb24nLCBbODQ5Nl1dLCBbJ2V4cG9uZW50aWFsZScsIFs4NTE5XV0sIFsnRXhwb25lbnRpYWxFJywgWzg1MTldXSwgWydmYWxsaW5nZG90c2VxJywgWzg3ODZdXSwgWydGY3knLCBbMTA2MF1dLCBbJ2ZjeScsIFsxMDkyXV0sIFsnZmVtYWxlJywgWzk3OTJdXSwgWydmZmlsaWcnLCBbNjQyNTldXSwgWydmZmxpZycsIFs2NDI1Nl1dLCBbJ2ZmbGxpZycsIFs2NDI2MF1dLCBbJ0ZmcicsIFsxMjAwNzNdXSwgWydmZnInLCBbMTIwMDk5XV0sIFsnZmlsaWcnLCBbNjQyNTddXSwgWydGaWxsZWRTbWFsbFNxdWFyZScsIFs5NzI0XV0sIFsnRmlsbGVkVmVyeVNtYWxsU3F1YXJlJywgWzk2NDJdXSwgWydmamxpZycsIFsxMDIsIDEwNl1dLCBbJ2ZsYXQnLCBbOTgzN11dLCBbJ2ZsbGlnJywgWzY0MjU4XV0sIFsnZmx0bnMnLCBbOTY0OV1dLCBbJ2Zub2YnLCBbNDAyXV0sIFsnRm9wZicsIFsxMjAxMjVdXSwgWydmb3BmJywgWzEyMDE1MV1dLCBbJ2ZvcmFsbCcsIFs4NzA0XV0sIFsnRm9yQWxsJywgWzg3MDRdXSwgWydmb3JrJywgWzg5MTZdXSwgWydmb3JrdicsIFsxMDk2OV1dLCBbJ0ZvdXJpZXJ0cmYnLCBbODQ5N11dLCBbJ2ZwYXJ0aW50JywgWzEwNzY1XV0sIFsnZnJhYzEyJywgWzE4OV1dLCBbJ2ZyYWMxMycsIFs4NTMxXV0sIFsnZnJhYzE0JywgWzE4OF1dLCBbJ2ZyYWMxNScsIFs4NTMzXV0sIFsnZnJhYzE2JywgWzg1MzddXSwgWydmcmFjMTgnLCBbODUzOV1dLCBbJ2ZyYWMyMycsIFs4NTMyXV0sIFsnZnJhYzI1JywgWzg1MzRdXSwgWydmcmFjMzQnLCBbMTkwXV0sIFsnZnJhYzM1JywgWzg1MzVdXSwgWydmcmFjMzgnLCBbODU0MF1dLCBbJ2ZyYWM0NScsIFs4NTM2XV0sIFsnZnJhYzU2JywgWzg1MzhdXSwgWydmcmFjNTgnLCBbODU0MV1dLCBbJ2ZyYWM3OCcsIFs4NTQyXV0sIFsnZnJhc2wnLCBbODI2MF1dLCBbJ2Zyb3duJywgWzg5OTRdXSwgWydmc2NyJywgWzExOTk5NV1dLCBbJ0ZzY3InLCBbODQ5N11dLCBbJ2dhY3V0ZScsIFs1MDFdXSwgWydHYW1tYScsIFs5MTVdXSwgWydnYW1tYScsIFs5NDddXSwgWydHYW1tYWQnLCBbOTg4XV0sIFsnZ2FtbWFkJywgWzk4OV1dLCBbJ2dhcCcsIFsxMDg4Nl1dLCBbJ0dicmV2ZScsIFsyODZdXSwgWydnYnJldmUnLCBbMjg3XV0sIFsnR2NlZGlsJywgWzI5MF1dLCBbJ0djaXJjJywgWzI4NF1dLCBbJ2djaXJjJywgWzI4NV1dLCBbJ0djeScsIFsxMDQzXV0sIFsnZ2N5JywgWzEwNzVdXSwgWydHZG90JywgWzI4OF1dLCBbJ2dkb3QnLCBbMjg5XV0sIFsnZ2UnLCBbODgwNV1dLCBbJ2dFJywgWzg4MDddXSwgWydnRWwnLCBbMTA4OTJdXSwgWydnZWwnLCBbODkyM11dLCBbJ2dlcScsIFs4ODA1XV0sIFsnZ2VxcScsIFs4ODA3XV0sIFsnZ2Vxc2xhbnQnLCBbMTA4NzhdXSwgWydnZXNjYycsIFsxMDkyMV1dLCBbJ2dlcycsIFsxMDg3OF1dLCBbJ2dlc2RvdCcsIFsxMDg4MF1dLCBbJ2dlc2RvdG8nLCBbMTA4ODJdXSwgWydnZXNkb3RvbCcsIFsxMDg4NF1dLCBbJ2dlc2wnLCBbODkyMywgNjUwMjRdXSwgWydnZXNsZXMnLCBbMTA5MDBdXSwgWydHZnInLCBbMTIwMDc0XV0sIFsnZ2ZyJywgWzEyMDEwMF1dLCBbJ2dnJywgWzg4MTFdXSwgWydHZycsIFs4OTIxXV0sIFsnZ2dnJywgWzg5MjFdXSwgWydnaW1lbCcsIFs4NTAzXV0sIFsnR0pjeScsIFsxMDI3XV0sIFsnZ2pjeScsIFsxMTA3XV0sIFsnZ2xhJywgWzEwOTE3XV0sIFsnZ2wnLCBbODgyM11dLCBbJ2dsRScsIFsxMDg5OF1dLCBbJ2dsaicsIFsxMDkxNl1dLCBbJ2duYXAnLCBbMTA4OTBdXSwgWydnbmFwcHJveCcsIFsxMDg5MF1dLCBbJ2duZScsIFsxMDg4OF1dLCBbJ2duRScsIFs4ODA5XV0sIFsnZ25lcScsIFsxMDg4OF1dLCBbJ2duZXFxJywgWzg4MDldXSwgWydnbnNpbScsIFs4OTM1XV0sIFsnR29wZicsIFsxMjAxMjZdXSwgWydnb3BmJywgWzEyMDE1Ml1dLCBbJ2dyYXZlJywgWzk2XV0sIFsnR3JlYXRlckVxdWFsJywgWzg4MDVdXSwgWydHcmVhdGVyRXF1YWxMZXNzJywgWzg5MjNdXSwgWydHcmVhdGVyRnVsbEVxdWFsJywgWzg4MDddXSwgWydHcmVhdGVyR3JlYXRlcicsIFsxMDkxNF1dLCBbJ0dyZWF0ZXJMZXNzJywgWzg4MjNdXSwgWydHcmVhdGVyU2xhbnRFcXVhbCcsIFsxMDg3OF1dLCBbJ0dyZWF0ZXJUaWxkZScsIFs4ODE5XV0sIFsnR3NjcicsIFsxMTk5NzBdXSwgWydnc2NyJywgWzg0NThdXSwgWydnc2ltJywgWzg4MTldXSwgWydnc2ltZScsIFsxMDg5NF1dLCBbJ2dzaW1sJywgWzEwODk2XV0sIFsnZ3RjYycsIFsxMDkxOV1dLCBbJ2d0Y2lyJywgWzEwODc0XV0sIFsnZ3QnLCBbNjJdXSwgWydHVCcsIFs2Ml1dLCBbJ0d0JywgWzg4MTFdXSwgWydndGRvdCcsIFs4OTE5XV0sIFsnZ3RsUGFyJywgWzEwNjQ1XV0sIFsnZ3RxdWVzdCcsIFsxMDg3Nl1dLCBbJ2d0cmFwcHJveCcsIFsxMDg4Nl1dLCBbJ2d0cmFycicsIFsxMDYxNl1dLCBbJ2d0cmRvdCcsIFs4OTE5XV0sIFsnZ3RyZXFsZXNzJywgWzg5MjNdXSwgWydndHJlcXFsZXNzJywgWzEwODkyXV0sIFsnZ3RybGVzcycsIFs4ODIzXV0sIFsnZ3Ryc2ltJywgWzg4MTldXSwgWydndmVydG5lcXEnLCBbODgwOSwgNjUwMjRdXSwgWydndm5FJywgWzg4MDksIDY1MDI0XV0sIFsnSGFjZWsnLCBbNzExXV0sIFsnaGFpcnNwJywgWzgyMDJdXSwgWydoYWxmJywgWzE4OV1dLCBbJ2hhbWlsdCcsIFs4NDU5XV0sIFsnSEFSRGN5JywgWzEwNjZdXSwgWydoYXJkY3knLCBbMTA5OF1dLCBbJ2hhcnJjaXInLCBbMTA1NjhdXSwgWydoYXJyJywgWzg1OTZdXSwgWydoQXJyJywgWzg2NjBdXSwgWydoYXJydycsIFs4NjIxXV0sIFsnSGF0JywgWzk0XV0sIFsnaGJhcicsIFs4NDYzXV0sIFsnSGNpcmMnLCBbMjkyXV0sIFsnaGNpcmMnLCBbMjkzXV0sIFsnaGVhcnRzJywgWzk4MjldXSwgWydoZWFydHN1aXQnLCBbOTgyOV1dLCBbJ2hlbGxpcCcsIFs4MjMwXV0sIFsnaGVyY29uJywgWzg4ODldXSwgWydoZnInLCBbMTIwMTAxXV0sIFsnSGZyJywgWzg0NjBdXSwgWydIaWxiZXJ0U3BhY2UnLCBbODQ1OV1dLCBbJ2hrc2Vhcm93JywgWzEwNTMzXV0sIFsnaGtzd2Fyb3cnLCBbMTA1MzRdXSwgWydob2FycicsIFs4NzAzXV0sIFsnaG9tdGh0JywgWzg3NjNdXSwgWydob29rbGVmdGFycm93JywgWzg2MTddXSwgWydob29rcmlnaHRhcnJvdycsIFs4NjE4XV0sIFsnaG9wZicsIFsxMjAxNTNdXSwgWydIb3BmJywgWzg0NjFdXSwgWydob3JiYXInLCBbODIxM11dLCBbJ0hvcml6b250YWxMaW5lJywgWzk0NzJdXSwgWydoc2NyJywgWzExOTk5N11dLCBbJ0hzY3InLCBbODQ1OV1dLCBbJ2hzbGFzaCcsIFs4NDYzXV0sIFsnSHN0cm9rJywgWzI5NF1dLCBbJ2hzdHJvaycsIFsyOTVdXSwgWydIdW1wRG93bkh1bXAnLCBbODc4Ml1dLCBbJ0h1bXBFcXVhbCcsIFs4NzgzXV0sIFsnaHlidWxsJywgWzgyNTldXSwgWydoeXBoZW4nLCBbODIwOF1dLCBbJ0lhY3V0ZScsIFsyMDVdXSwgWydpYWN1dGUnLCBbMjM3XV0sIFsnaWMnLCBbODI5MV1dLCBbJ0ljaXJjJywgWzIwNl1dLCBbJ2ljaXJjJywgWzIzOF1dLCBbJ0ljeScsIFsxMDQ4XV0sIFsnaWN5JywgWzEwODBdXSwgWydJZG90JywgWzMwNF1dLCBbJ0lFY3knLCBbMTA0NV1dLCBbJ2llY3knLCBbMTA3N11dLCBbJ2lleGNsJywgWzE2MV1dLCBbJ2lmZicsIFs4NjYwXV0sIFsnaWZyJywgWzEyMDEwMl1dLCBbJ0lmcicsIFs4NDY1XV0sIFsnSWdyYXZlJywgWzIwNF1dLCBbJ2lncmF2ZScsIFsyMzZdXSwgWydpaScsIFs4NTIwXV0sIFsnaWlpaW50JywgWzEwNzY0XV0sIFsnaWlpbnQnLCBbODc0OV1dLCBbJ2lpbmZpbicsIFsxMDcxNl1dLCBbJ2lpb3RhJywgWzg0ODldXSwgWydJSmxpZycsIFszMDZdXSwgWydpamxpZycsIFszMDddXSwgWydJbWFjcicsIFsyOThdXSwgWydpbWFjcicsIFsyOTldXSwgWydpbWFnZScsIFs4NDY1XV0sIFsnSW1hZ2luYXJ5SScsIFs4NTIwXV0sIFsnaW1hZ2xpbmUnLCBbODQ2NF1dLCBbJ2ltYWdwYXJ0JywgWzg0NjVdXSwgWydpbWF0aCcsIFszMDVdXSwgWydJbScsIFs4NDY1XV0sIFsnaW1vZicsIFs4ODg3XV0sIFsnaW1wZWQnLCBbNDM3XV0sIFsnSW1wbGllcycsIFs4NjU4XV0sIFsnaW5jYXJlJywgWzg0NTNdXSwgWydpbicsIFs4NzEyXV0sIFsnaW5maW4nLCBbODczNF1dLCBbJ2luZmludGllJywgWzEwNzE3XV0sIFsnaW5vZG90JywgWzMwNV1dLCBbJ2ludGNhbCcsIFs4ODkwXV0sIFsnaW50JywgWzg3NDddXSwgWydJbnQnLCBbODc0OF1dLCBbJ2ludGVnZXJzJywgWzg0ODRdXSwgWydJbnRlZ3JhbCcsIFs4NzQ3XV0sIFsnaW50ZXJjYWwnLCBbODg5MF1dLCBbJ0ludGVyc2VjdGlvbicsIFs4ODk4XV0sIFsnaW50bGFyaGsnLCBbMTA3NzVdXSwgWydpbnRwcm9kJywgWzEwODEyXV0sIFsnSW52aXNpYmxlQ29tbWEnLCBbODI5MV1dLCBbJ0ludmlzaWJsZVRpbWVzJywgWzgyOTBdXSwgWydJT2N5JywgWzEwMjVdXSwgWydpb2N5JywgWzExMDVdXSwgWydJb2dvbicsIFszMDJdXSwgWydpb2dvbicsIFszMDNdXSwgWydJb3BmJywgWzEyMDEyOF1dLCBbJ2lvcGYnLCBbMTIwMTU0XV0sIFsnSW90YScsIFs5MjFdXSwgWydpb3RhJywgWzk1M11dLCBbJ2lwcm9kJywgWzEwODEyXV0sIFsnaXF1ZXN0JywgWzE5MV1dLCBbJ2lzY3InLCBbMTE5OTk4XV0sIFsnSXNjcicsIFs4NDY0XV0sIFsnaXNpbicsIFs4NzEyXV0sIFsnaXNpbmRvdCcsIFs4OTQ5XV0sIFsnaXNpbkUnLCBbODk1M11dLCBbJ2lzaW5zJywgWzg5NDhdXSwgWydpc2luc3YnLCBbODk0N11dLCBbJ2lzaW52JywgWzg3MTJdXSwgWydpdCcsIFs4MjkwXV0sIFsnSXRpbGRlJywgWzI5Nl1dLCBbJ2l0aWxkZScsIFsyOTddXSwgWydJdWtjeScsIFsxMDMwXV0sIFsnaXVrY3knLCBbMTExMF1dLCBbJ0l1bWwnLCBbMjA3XV0sIFsnaXVtbCcsIFsyMzldXSwgWydKY2lyYycsIFszMDhdXSwgWydqY2lyYycsIFszMDldXSwgWydKY3knLCBbMTA0OV1dLCBbJ2pjeScsIFsxMDgxXV0sIFsnSmZyJywgWzEyMDA3N11dLCBbJ2pmcicsIFsxMjAxMDNdXSwgWydqbWF0aCcsIFs1NjddXSwgWydKb3BmJywgWzEyMDEyOV1dLCBbJ2pvcGYnLCBbMTIwMTU1XV0sIFsnSnNjcicsIFsxMTk5NzNdXSwgWydqc2NyJywgWzExOTk5OV1dLCBbJ0pzZXJjeScsIFsxMDMyXV0sIFsnanNlcmN5JywgWzExMTJdXSwgWydKdWtjeScsIFsxMDI4XV0sIFsnanVrY3knLCBbMTEwOF1dLCBbJ0thcHBhJywgWzkyMl1dLCBbJ2thcHBhJywgWzk1NF1dLCBbJ2thcHBhdicsIFsxMDA4XV0sIFsnS2NlZGlsJywgWzMxMF1dLCBbJ2tjZWRpbCcsIFszMTFdXSwgWydLY3knLCBbMTA1MF1dLCBbJ2tjeScsIFsxMDgyXV0sIFsnS2ZyJywgWzEyMDA3OF1dLCBbJ2tmcicsIFsxMjAxMDRdXSwgWydrZ3JlZW4nLCBbMzEyXV0sIFsnS0hjeScsIFsxMDYxXV0sIFsna2hjeScsIFsxMDkzXV0sIFsnS0pjeScsIFsxMDM2XV0sIFsna2pjeScsIFsxMTE2XV0sIFsnS29wZicsIFsxMjAxMzBdXSwgWydrb3BmJywgWzEyMDE1Nl1dLCBbJ0tzY3InLCBbMTE5OTc0XV0sIFsna3NjcicsIFsxMjAwMDBdXSwgWydsQWFycicsIFs4NjY2XV0sIFsnTGFjdXRlJywgWzMxM11dLCBbJ2xhY3V0ZScsIFszMTRdXSwgWydsYWVtcHR5dicsIFsxMDY3Nl1dLCBbJ2xhZ3JhbicsIFs4NDY2XV0sIFsnTGFtYmRhJywgWzkyM11dLCBbJ2xhbWJkYScsIFs5NTVdXSwgWydsYW5nJywgWzEwMjE2XV0sIFsnTGFuZycsIFsxMDIxOF1dLCBbJ2xhbmdkJywgWzEwNjQxXV0sIFsnbGFuZ2xlJywgWzEwMjE2XV0sIFsnbGFwJywgWzEwODg1XV0sIFsnTGFwbGFjZXRyZicsIFs4NDY2XV0sIFsnbGFxdW8nLCBbMTcxXV0sIFsnbGFycmInLCBbODY3Nl1dLCBbJ2xhcnJiZnMnLCBbMTA1MjddXSwgWydsYXJyJywgWzg1OTJdXSwgWydMYXJyJywgWzg2MDZdXSwgWydsQXJyJywgWzg2NTZdXSwgWydsYXJyZnMnLCBbMTA1MjVdXSwgWydsYXJyaGsnLCBbODYxN11dLCBbJ2xhcnJscCcsIFs4NjE5XV0sIFsnbGFycnBsJywgWzEwNTUzXV0sIFsnbGFycnNpbScsIFsxMDYxMV1dLCBbJ2xhcnJ0bCcsIFs4NjEwXV0sIFsnbGF0YWlsJywgWzEwNTIxXV0sIFsnbEF0YWlsJywgWzEwNTIzXV0sIFsnbGF0JywgWzEwOTIzXV0sIFsnbGF0ZScsIFsxMDkyNV1dLCBbJ2xhdGVzJywgWzEwOTI1LCA2NTAyNF1dLCBbJ2xiYXJyJywgWzEwNTA4XV0sIFsnbEJhcnInLCBbMTA1MTBdXSwgWydsYmJyaycsIFsxMDA5OF1dLCBbJ2xicmFjZScsIFsxMjNdXSwgWydsYnJhY2snLCBbOTFdXSwgWydsYnJrZScsIFsxMDYzNV1dLCBbJ2xicmtzbGQnLCBbMTA2MzldXSwgWydsYnJrc2x1JywgWzEwNjM3XV0sIFsnTGNhcm9uJywgWzMxN11dLCBbJ2xjYXJvbicsIFszMThdXSwgWydMY2VkaWwnLCBbMzE1XV0sIFsnbGNlZGlsJywgWzMxNl1dLCBbJ2xjZWlsJywgWzg5NjhdXSwgWydsY3ViJywgWzEyM11dLCBbJ0xjeScsIFsxMDUxXV0sIFsnbGN5JywgWzEwODNdXSwgWydsZGNhJywgWzEwNTUwXV0sIFsnbGRxdW8nLCBbODIyMF1dLCBbJ2xkcXVvcicsIFs4MjIyXV0sIFsnbGRyZGhhcicsIFsxMDU5OV1dLCBbJ2xkcnVzaGFyJywgWzEwNTcxXV0sIFsnbGRzaCcsIFs4NjI2XV0sIFsnbGUnLCBbODgwNF1dLCBbJ2xFJywgWzg4MDZdXSwgWydMZWZ0QW5nbGVCcmFja2V0JywgWzEwMjE2XV0sIFsnTGVmdEFycm93QmFyJywgWzg2NzZdXSwgWydsZWZ0YXJyb3cnLCBbODU5Ml1dLCBbJ0xlZnRBcnJvdycsIFs4NTkyXV0sIFsnTGVmdGFycm93JywgWzg2NTZdXSwgWydMZWZ0QXJyb3dSaWdodEFycm93JywgWzg2NDZdXSwgWydsZWZ0YXJyb3d0YWlsJywgWzg2MTBdXSwgWydMZWZ0Q2VpbGluZycsIFs4OTY4XV0sIFsnTGVmdERvdWJsZUJyYWNrZXQnLCBbMTAyMTRdXSwgWydMZWZ0RG93blRlZVZlY3RvcicsIFsxMDU5M11dLCBbJ0xlZnREb3duVmVjdG9yQmFyJywgWzEwNTg1XV0sIFsnTGVmdERvd25WZWN0b3InLCBbODY0M11dLCBbJ0xlZnRGbG9vcicsIFs4OTcwXV0sIFsnbGVmdGhhcnBvb25kb3duJywgWzg2MzddXSwgWydsZWZ0aGFycG9vbnVwJywgWzg2MzZdXSwgWydsZWZ0bGVmdGFycm93cycsIFs4NjQ3XV0sIFsnbGVmdHJpZ2h0YXJyb3cnLCBbODU5Nl1dLCBbJ0xlZnRSaWdodEFycm93JywgWzg1OTZdXSwgWydMZWZ0cmlnaHRhcnJvdycsIFs4NjYwXV0sIFsnbGVmdHJpZ2h0YXJyb3dzJywgWzg2NDZdXSwgWydsZWZ0cmlnaHRoYXJwb29ucycsIFs4NjUxXV0sIFsnbGVmdHJpZ2h0c3F1aWdhcnJvdycsIFs4NjIxXV0sIFsnTGVmdFJpZ2h0VmVjdG9yJywgWzEwNTc0XV0sIFsnTGVmdFRlZUFycm93JywgWzg2MTJdXSwgWydMZWZ0VGVlJywgWzg4NjddXSwgWydMZWZ0VGVlVmVjdG9yJywgWzEwNTg2XV0sIFsnbGVmdHRocmVldGltZXMnLCBbODkwN11dLCBbJ0xlZnRUcmlhbmdsZUJhcicsIFsxMDcwM11dLCBbJ0xlZnRUcmlhbmdsZScsIFs4ODgyXV0sIFsnTGVmdFRyaWFuZ2xlRXF1YWwnLCBbODg4NF1dLCBbJ0xlZnRVcERvd25WZWN0b3InLCBbMTA1NzddXSwgWydMZWZ0VXBUZWVWZWN0b3InLCBbMTA1OTJdXSwgWydMZWZ0VXBWZWN0b3JCYXInLCBbMTA1ODRdXSwgWydMZWZ0VXBWZWN0b3InLCBbODYzOV1dLCBbJ0xlZnRWZWN0b3JCYXInLCBbMTA1NzhdXSwgWydMZWZ0VmVjdG9yJywgWzg2MzZdXSwgWydsRWcnLCBbMTA4OTFdXSwgWydsZWcnLCBbODkyMl1dLCBbJ2xlcScsIFs4ODA0XV0sIFsnbGVxcScsIFs4ODA2XV0sIFsnbGVxc2xhbnQnLCBbMTA4NzddXSwgWydsZXNjYycsIFsxMDkyMF1dLCBbJ2xlcycsIFsxMDg3N11dLCBbJ2xlc2RvdCcsIFsxMDg3OV1dLCBbJ2xlc2RvdG8nLCBbMTA4ODFdXSwgWydsZXNkb3RvcicsIFsxMDg4M11dLCBbJ2xlc2cnLCBbODkyMiwgNjUwMjRdXSwgWydsZXNnZXMnLCBbMTA4OTldXSwgWydsZXNzYXBwcm94JywgWzEwODg1XV0sIFsnbGVzc2RvdCcsIFs4OTE4XV0sIFsnbGVzc2VxZ3RyJywgWzg5MjJdXSwgWydsZXNzZXFxZ3RyJywgWzEwODkxXV0sIFsnTGVzc0VxdWFsR3JlYXRlcicsIFs4OTIyXV0sIFsnTGVzc0Z1bGxFcXVhbCcsIFs4ODA2XV0sIFsnTGVzc0dyZWF0ZXInLCBbODgyMl1dLCBbJ2xlc3NndHInLCBbODgyMl1dLCBbJ0xlc3NMZXNzJywgWzEwOTEzXV0sIFsnbGVzc3NpbScsIFs4ODE4XV0sIFsnTGVzc1NsYW50RXF1YWwnLCBbMTA4NzddXSwgWydMZXNzVGlsZGUnLCBbODgxOF1dLCBbJ2xmaXNodCcsIFsxMDYyMF1dLCBbJ2xmbG9vcicsIFs4OTcwXV0sIFsnTGZyJywgWzEyMDA3OV1dLCBbJ2xmcicsIFsxMjAxMDVdXSwgWydsZycsIFs4ODIyXV0sIFsnbGdFJywgWzEwODk3XV0sIFsnbEhhcicsIFsxMDU5NF1dLCBbJ2xoYXJkJywgWzg2MzddXSwgWydsaGFydScsIFs4NjM2XV0sIFsnbGhhcnVsJywgWzEwNjAyXV0sIFsnbGhibGsnLCBbOTYwNF1dLCBbJ0xKY3knLCBbMTAzM11dLCBbJ2xqY3knLCBbMTExM11dLCBbJ2xsYXJyJywgWzg2NDddXSwgWydsbCcsIFs4ODEwXV0sIFsnTGwnLCBbODkyMF1dLCBbJ2xsY29ybmVyJywgWzg5OTBdXSwgWydMbGVmdGFycm93JywgWzg2NjZdXSwgWydsbGhhcmQnLCBbMTA2MDNdXSwgWydsbHRyaScsIFs5NzIyXV0sIFsnTG1pZG90JywgWzMxOV1dLCBbJ2xtaWRvdCcsIFszMjBdXSwgWydsbW91c3RhY2hlJywgWzkxMzZdXSwgWydsbW91c3QnLCBbOTEzNl1dLCBbJ2xuYXAnLCBbMTA4ODldXSwgWydsbmFwcHJveCcsIFsxMDg4OV1dLCBbJ2xuZScsIFsxMDg4N11dLCBbJ2xuRScsIFs4ODA4XV0sIFsnbG5lcScsIFsxMDg4N11dLCBbJ2xuZXFxJywgWzg4MDhdXSwgWydsbnNpbScsIFs4OTM0XV0sIFsnbG9hbmcnLCBbMTAyMjBdXSwgWydsb2FycicsIFs4NzAxXV0sIFsnbG9icmsnLCBbMTAyMTRdXSwgWydsb25nbGVmdGFycm93JywgWzEwMjI5XV0sIFsnTG9uZ0xlZnRBcnJvdycsIFsxMDIyOV1dLCBbJ0xvbmdsZWZ0YXJyb3cnLCBbMTAyMzJdXSwgWydsb25nbGVmdHJpZ2h0YXJyb3cnLCBbMTAyMzFdXSwgWydMb25nTGVmdFJpZ2h0QXJyb3cnLCBbMTAyMzFdXSwgWydMb25nbGVmdHJpZ2h0YXJyb3cnLCBbMTAyMzRdXSwgWydsb25nbWFwc3RvJywgWzEwMjM2XV0sIFsnbG9uZ3JpZ2h0YXJyb3cnLCBbMTAyMzBdXSwgWydMb25nUmlnaHRBcnJvdycsIFsxMDIzMF1dLCBbJ0xvbmdyaWdodGFycm93JywgWzEwMjMzXV0sIFsnbG9vcGFycm93bGVmdCcsIFs4NjE5XV0sIFsnbG9vcGFycm93cmlnaHQnLCBbODYyMF1dLCBbJ2xvcGFyJywgWzEwNjI5XV0sIFsnTG9wZicsIFsxMjAxMzFdXSwgWydsb3BmJywgWzEyMDE1N11dLCBbJ2xvcGx1cycsIFsxMDc5N11dLCBbJ2xvdGltZXMnLCBbMTA4MDRdXSwgWydsb3dhc3QnLCBbODcyN11dLCBbJ2xvd2JhcicsIFs5NV1dLCBbJ0xvd2VyTGVmdEFycm93JywgWzg2MDFdXSwgWydMb3dlclJpZ2h0QXJyb3cnLCBbODYwMF1dLCBbJ2xveicsIFs5Njc0XV0sIFsnbG96ZW5nZScsIFs5Njc0XV0sIFsnbG96ZicsIFsxMDczMV1dLCBbJ2xwYXInLCBbNDBdXSwgWydscGFybHQnLCBbMTA2NDNdXSwgWydscmFycicsIFs4NjQ2XV0sIFsnbHJjb3JuZXInLCBbODk5MV1dLCBbJ2xyaGFyJywgWzg2NTFdXSwgWydscmhhcmQnLCBbMTA2MDVdXSwgWydscm0nLCBbODIwNl1dLCBbJ2xydHJpJywgWzg4OTVdXSwgWydsc2FxdW8nLCBbODI0OV1dLCBbJ2xzY3InLCBbMTIwMDAxXV0sIFsnTHNjcicsIFs4NDY2XV0sIFsnbHNoJywgWzg2MjRdXSwgWydMc2gnLCBbODYyNF1dLCBbJ2xzaW0nLCBbODgxOF1dLCBbJ2xzaW1lJywgWzEwODkzXV0sIFsnbHNpbWcnLCBbMTA4OTVdXSwgWydsc3FiJywgWzkxXV0sIFsnbHNxdW8nLCBbODIxNl1dLCBbJ2xzcXVvcicsIFs4MjE4XV0sIFsnTHN0cm9rJywgWzMyMV1dLCBbJ2xzdHJvaycsIFszMjJdXSwgWydsdGNjJywgWzEwOTE4XV0sIFsnbHRjaXInLCBbMTA4NzNdXSwgWydsdCcsIFs2MF1dLCBbJ0xUJywgWzYwXV0sIFsnTHQnLCBbODgxMF1dLCBbJ2x0ZG90JywgWzg5MThdXSwgWydsdGhyZWUnLCBbODkwN11dLCBbJ2x0aW1lcycsIFs4OTA1XV0sIFsnbHRsYXJyJywgWzEwNjE0XV0sIFsnbHRxdWVzdCcsIFsxMDg3NV1dLCBbJ2x0cmknLCBbOTY2N11dLCBbJ2x0cmllJywgWzg4ODRdXSwgWydsdHJpZicsIFs5NjY2XV0sIFsnbHRyUGFyJywgWzEwNjQ2XV0sIFsnbHVyZHNoYXInLCBbMTA1NzBdXSwgWydsdXJ1aGFyJywgWzEwNTk4XV0sIFsnbHZlcnRuZXFxJywgWzg4MDgsIDY1MDI0XV0sIFsnbHZuRScsIFs4ODA4LCA2NTAyNF1dLCBbJ21hY3InLCBbMTc1XV0sIFsnbWFsZScsIFs5Nzk0XV0sIFsnbWFsdCcsIFsxMDAxNl1dLCBbJ21hbHRlc2UnLCBbMTAwMTZdXSwgWydNYXAnLCBbMTA1MDFdXSwgWydtYXAnLCBbODYxNF1dLCBbJ21hcHN0bycsIFs4NjE0XV0sIFsnbWFwc3RvZG93bicsIFs4NjE1XV0sIFsnbWFwc3RvbGVmdCcsIFs4NjEyXV0sIFsnbWFwc3RvdXAnLCBbODYxM11dLCBbJ21hcmtlcicsIFs5NjQ2XV0sIFsnbWNvbW1hJywgWzEwNzkzXV0sIFsnTWN5JywgWzEwNTJdXSwgWydtY3knLCBbMTA4NF1dLCBbJ21kYXNoJywgWzgyMTJdXSwgWydtRERvdCcsIFs4NzYyXV0sIFsnbWVhc3VyZWRhbmdsZScsIFs4NzM3XV0sIFsnTWVkaXVtU3BhY2UnLCBbODI4N11dLCBbJ01lbGxpbnRyZicsIFs4NDk5XV0sIFsnTWZyJywgWzEyMDA4MF1dLCBbJ21mcicsIFsxMjAxMDZdXSwgWydtaG8nLCBbODQ4N11dLCBbJ21pY3JvJywgWzE4MV1dLCBbJ21pZGFzdCcsIFs0Ml1dLCBbJ21pZGNpcicsIFsxMDk5Ml1dLCBbJ21pZCcsIFs4NzM5XV0sIFsnbWlkZG90JywgWzE4M11dLCBbJ21pbnVzYicsIFs4ODYzXV0sIFsnbWludXMnLCBbODcyMl1dLCBbJ21pbnVzZCcsIFs4NzYwXV0sIFsnbWludXNkdScsIFsxMDc5NF1dLCBbJ01pbnVzUGx1cycsIFs4NzIzXV0sIFsnbWxjcCcsIFsxMDk3MV1dLCBbJ21sZHInLCBbODIzMF1dLCBbJ21ucGx1cycsIFs4NzIzXV0sIFsnbW9kZWxzJywgWzg4NzFdXSwgWydNb3BmJywgWzEyMDEzMl1dLCBbJ21vcGYnLCBbMTIwMTU4XV0sIFsnbXAnLCBbODcyM11dLCBbJ21zY3InLCBbMTIwMDAyXV0sIFsnTXNjcicsIFs4NDk5XV0sIFsnbXN0cG9zJywgWzg3NjZdXSwgWydNdScsIFs5MjRdXSwgWydtdScsIFs5NTZdXSwgWydtdWx0aW1hcCcsIFs4ODg4XV0sIFsnbXVtYXAnLCBbODg4OF1dLCBbJ25hYmxhJywgWzg3MTFdXSwgWydOYWN1dGUnLCBbMzIzXV0sIFsnbmFjdXRlJywgWzMyNF1dLCBbJ25hbmcnLCBbODczNiwgODQwMl1dLCBbJ25hcCcsIFs4Nzc3XV0sIFsnbmFwRScsIFsxMDg2NCwgODI0XV0sIFsnbmFwaWQnLCBbODc3OSwgODI0XV0sIFsnbmFwb3MnLCBbMzI5XV0sIFsnbmFwcHJveCcsIFs4Nzc3XV0sIFsnbmF0dXJhbCcsIFs5ODM4XV0sIFsnbmF0dXJhbHMnLCBbODQ2OV1dLCBbJ25hdHVyJywgWzk4MzhdXSwgWyduYnNwJywgWzE2MF1dLCBbJ25idW1wJywgWzg3ODIsIDgyNF1dLCBbJ25idW1wZScsIFs4NzgzLCA4MjRdXSwgWyduY2FwJywgWzEwODE5XV0sIFsnTmNhcm9uJywgWzMyN11dLCBbJ25jYXJvbicsIFszMjhdXSwgWydOY2VkaWwnLCBbMzI1XV0sIFsnbmNlZGlsJywgWzMyNl1dLCBbJ25jb25nJywgWzg3NzVdXSwgWyduY29uZ2RvdCcsIFsxMDg2MSwgODI0XV0sIFsnbmN1cCcsIFsxMDgxOF1dLCBbJ05jeScsIFsxMDUzXV0sIFsnbmN5JywgWzEwODVdXSwgWyduZGFzaCcsIFs4MjExXV0sIFsnbmVhcmhrJywgWzEwNTMyXV0sIFsnbmVhcnInLCBbODU5OV1dLCBbJ25lQXJyJywgWzg2NjNdXSwgWyduZWFycm93JywgWzg1OTldXSwgWyduZScsIFs4ODAwXV0sIFsnbmVkb3QnLCBbODc4NCwgODI0XV0sIFsnTmVnYXRpdmVNZWRpdW1TcGFjZScsIFs4MjAzXV0sIFsnTmVnYXRpdmVUaGlja1NwYWNlJywgWzgyMDNdXSwgWydOZWdhdGl2ZVRoaW5TcGFjZScsIFs4MjAzXV0sIFsnTmVnYXRpdmVWZXJ5VGhpblNwYWNlJywgWzgyMDNdXSwgWyduZXF1aXYnLCBbODgwMl1dLCBbJ25lc2VhcicsIFsxMDUzNl1dLCBbJ25lc2ltJywgWzg3NzAsIDgyNF1dLCBbJ05lc3RlZEdyZWF0ZXJHcmVhdGVyJywgWzg4MTFdXSwgWydOZXN0ZWRMZXNzTGVzcycsIFs4ODEwXV0sIFsnbmV4aXN0JywgWzg3MDhdXSwgWyduZXhpc3RzJywgWzg3MDhdXSwgWydOZnInLCBbMTIwMDgxXV0sIFsnbmZyJywgWzEyMDEwN11dLCBbJ25nRScsIFs4ODA3LCA4MjRdXSwgWyduZ2UnLCBbODgxN11dLCBbJ25nZXEnLCBbODgxN11dLCBbJ25nZXFxJywgWzg4MDcsIDgyNF1dLCBbJ25nZXFzbGFudCcsIFsxMDg3OCwgODI0XV0sIFsnbmdlcycsIFsxMDg3OCwgODI0XV0sIFsnbkdnJywgWzg5MjEsIDgyNF1dLCBbJ25nc2ltJywgWzg4MjFdXSwgWyduR3QnLCBbODgxMSwgODQwMl1dLCBbJ25ndCcsIFs4ODE1XV0sIFsnbmd0cicsIFs4ODE1XV0sIFsnbkd0dicsIFs4ODExLCA4MjRdXSwgWyduaGFycicsIFs4NjIyXV0sIFsnbmhBcnInLCBbODY1NF1dLCBbJ25ocGFyJywgWzEwOTk0XV0sIFsnbmknLCBbODcxNV1dLCBbJ25pcycsIFs4OTU2XV0sIFsnbmlzZCcsIFs4OTU0XV0sIFsnbml2JywgWzg3MTVdXSwgWydOSmN5JywgWzEwMzRdXSwgWyduamN5JywgWzExMTRdXSwgWydubGFycicsIFs4NjAyXV0sIFsnbmxBcnInLCBbODY1M11dLCBbJ25sZHInLCBbODIyOV1dLCBbJ25sRScsIFs4ODA2LCA4MjRdXSwgWydubGUnLCBbODgxNl1dLCBbJ25sZWZ0YXJyb3cnLCBbODYwMl1dLCBbJ25MZWZ0YXJyb3cnLCBbODY1M11dLCBbJ25sZWZ0cmlnaHRhcnJvdycsIFs4NjIyXV0sIFsnbkxlZnRyaWdodGFycm93JywgWzg2NTRdXSwgWydubGVxJywgWzg4MTZdXSwgWydubGVxcScsIFs4ODA2LCA4MjRdXSwgWydubGVxc2xhbnQnLCBbMTA4NzcsIDgyNF1dLCBbJ25sZXMnLCBbMTA4NzcsIDgyNF1dLCBbJ25sZXNzJywgWzg4MTRdXSwgWyduTGwnLCBbODkyMCwgODI0XV0sIFsnbmxzaW0nLCBbODgyMF1dLCBbJ25MdCcsIFs4ODEwLCA4NDAyXV0sIFsnbmx0JywgWzg4MTRdXSwgWydubHRyaScsIFs4OTM4XV0sIFsnbmx0cmllJywgWzg5NDBdXSwgWyduTHR2JywgWzg4MTAsIDgyNF1dLCBbJ25taWQnLCBbODc0MF1dLCBbJ05vQnJlYWsnLCBbODI4OF1dLCBbJ05vbkJyZWFraW5nU3BhY2UnLCBbMTYwXV0sIFsnbm9wZicsIFsxMjAxNTldXSwgWydOb3BmJywgWzg0NjldXSwgWydOb3QnLCBbMTA5ODhdXSwgWydub3QnLCBbMTcyXV0sIFsnTm90Q29uZ3J1ZW50JywgWzg4MDJdXSwgWydOb3RDdXBDYXAnLCBbODgxM11dLCBbJ05vdERvdWJsZVZlcnRpY2FsQmFyJywgWzg3NDJdXSwgWydOb3RFbGVtZW50JywgWzg3MTNdXSwgWydOb3RFcXVhbCcsIFs4ODAwXV0sIFsnTm90RXF1YWxUaWxkZScsIFs4NzcwLCA4MjRdXSwgWydOb3RFeGlzdHMnLCBbODcwOF1dLCBbJ05vdEdyZWF0ZXInLCBbODgxNV1dLCBbJ05vdEdyZWF0ZXJFcXVhbCcsIFs4ODE3XV0sIFsnTm90R3JlYXRlckZ1bGxFcXVhbCcsIFs4ODA3LCA4MjRdXSwgWydOb3RHcmVhdGVyR3JlYXRlcicsIFs4ODExLCA4MjRdXSwgWydOb3RHcmVhdGVyTGVzcycsIFs4ODI1XV0sIFsnTm90R3JlYXRlclNsYW50RXF1YWwnLCBbMTA4NzgsIDgyNF1dLCBbJ05vdEdyZWF0ZXJUaWxkZScsIFs4ODIxXV0sIFsnTm90SHVtcERvd25IdW1wJywgWzg3ODIsIDgyNF1dLCBbJ05vdEh1bXBFcXVhbCcsIFs4NzgzLCA4MjRdXSwgWydub3RpbicsIFs4NzEzXV0sIFsnbm90aW5kb3QnLCBbODk0OSwgODI0XV0sIFsnbm90aW5FJywgWzg5NTMsIDgyNF1dLCBbJ25vdGludmEnLCBbODcxM11dLCBbJ25vdGludmInLCBbODk1MV1dLCBbJ25vdGludmMnLCBbODk1MF1dLCBbJ05vdExlZnRUcmlhbmdsZUJhcicsIFsxMDcwMywgODI0XV0sIFsnTm90TGVmdFRyaWFuZ2xlJywgWzg5MzhdXSwgWydOb3RMZWZ0VHJpYW5nbGVFcXVhbCcsIFs4OTQwXV0sIFsnTm90TGVzcycsIFs4ODE0XV0sIFsnTm90TGVzc0VxdWFsJywgWzg4MTZdXSwgWydOb3RMZXNzR3JlYXRlcicsIFs4ODI0XV0sIFsnTm90TGVzc0xlc3MnLCBbODgxMCwgODI0XV0sIFsnTm90TGVzc1NsYW50RXF1YWwnLCBbMTA4NzcsIDgyNF1dLCBbJ05vdExlc3NUaWxkZScsIFs4ODIwXV0sIFsnTm90TmVzdGVkR3JlYXRlckdyZWF0ZXInLCBbMTA5MTQsIDgyNF1dLCBbJ05vdE5lc3RlZExlc3NMZXNzJywgWzEwOTEzLCA4MjRdXSwgWydub3RuaScsIFs4NzE2XV0sIFsnbm90bml2YScsIFs4NzE2XV0sIFsnbm90bml2YicsIFs4OTU4XV0sIFsnbm90bml2YycsIFs4OTU3XV0sIFsnTm90UHJlY2VkZXMnLCBbODgzMl1dLCBbJ05vdFByZWNlZGVzRXF1YWwnLCBbMTA5MjcsIDgyNF1dLCBbJ05vdFByZWNlZGVzU2xhbnRFcXVhbCcsIFs4OTI4XV0sIFsnTm90UmV2ZXJzZUVsZW1lbnQnLCBbODcxNl1dLCBbJ05vdFJpZ2h0VHJpYW5nbGVCYXInLCBbMTA3MDQsIDgyNF1dLCBbJ05vdFJpZ2h0VHJpYW5nbGUnLCBbODkzOV1dLCBbJ05vdFJpZ2h0VHJpYW5nbGVFcXVhbCcsIFs4OTQxXV0sIFsnTm90U3F1YXJlU3Vic2V0JywgWzg4NDcsIDgyNF1dLCBbJ05vdFNxdWFyZVN1YnNldEVxdWFsJywgWzg5MzBdXSwgWydOb3RTcXVhcmVTdXBlcnNldCcsIFs4ODQ4LCA4MjRdXSwgWydOb3RTcXVhcmVTdXBlcnNldEVxdWFsJywgWzg5MzFdXSwgWydOb3RTdWJzZXQnLCBbODgzNCwgODQwMl1dLCBbJ05vdFN1YnNldEVxdWFsJywgWzg4NDBdXSwgWydOb3RTdWNjZWVkcycsIFs4ODMzXV0sIFsnTm90U3VjY2VlZHNFcXVhbCcsIFsxMDkyOCwgODI0XV0sIFsnTm90U3VjY2VlZHNTbGFudEVxdWFsJywgWzg5MjldXSwgWydOb3RTdWNjZWVkc1RpbGRlJywgWzg4MzEsIDgyNF1dLCBbJ05vdFN1cGVyc2V0JywgWzg4MzUsIDg0MDJdXSwgWydOb3RTdXBlcnNldEVxdWFsJywgWzg4NDFdXSwgWydOb3RUaWxkZScsIFs4NzY5XV0sIFsnTm90VGlsZGVFcXVhbCcsIFs4NzcyXV0sIFsnTm90VGlsZGVGdWxsRXF1YWwnLCBbODc3NV1dLCBbJ05vdFRpbGRlVGlsZGUnLCBbODc3N11dLCBbJ05vdFZlcnRpY2FsQmFyJywgWzg3NDBdXSwgWyducGFyYWxsZWwnLCBbODc0Ml1dLCBbJ25wYXInLCBbODc0Ml1dLCBbJ25wYXJzbCcsIFsxMTAwNSwgODQyMV1dLCBbJ25wYXJ0JywgWzg3MDYsIDgyNF1dLCBbJ25wb2xpbnQnLCBbMTA3NzJdXSwgWyducHInLCBbODgzMl1dLCBbJ25wcmN1ZScsIFs4OTI4XV0sIFsnbnByZWMnLCBbODgzMl1dLCBbJ25wcmVjZXEnLCBbMTA5MjcsIDgyNF1dLCBbJ25wcmUnLCBbMTA5MjcsIDgyNF1dLCBbJ25yYXJyYycsIFsxMDU0NywgODI0XV0sIFsnbnJhcnInLCBbODYwM11dLCBbJ25yQXJyJywgWzg2NTVdXSwgWyducmFycncnLCBbODYwNSwgODI0XV0sIFsnbnJpZ2h0YXJyb3cnLCBbODYwM11dLCBbJ25SaWdodGFycm93JywgWzg2NTVdXSwgWyducnRyaScsIFs4OTM5XV0sIFsnbnJ0cmllJywgWzg5NDFdXSwgWyduc2MnLCBbODgzM11dLCBbJ25zY2N1ZScsIFs4OTI5XV0sIFsnbnNjZScsIFsxMDkyOCwgODI0XV0sIFsnTnNjcicsIFsxMTk5NzddXSwgWyduc2NyJywgWzEyMDAwM11dLCBbJ25zaG9ydG1pZCcsIFs4NzQwXV0sIFsnbnNob3J0cGFyYWxsZWwnLCBbODc0Ml1dLCBbJ25zaW0nLCBbODc2OV1dLCBbJ25zaW1lJywgWzg3NzJdXSwgWyduc2ltZXEnLCBbODc3Ml1dLCBbJ25zbWlkJywgWzg3NDBdXSwgWyduc3BhcicsIFs4NzQyXV0sIFsnbnNxc3ViZScsIFs4OTMwXV0sIFsnbnNxc3VwZScsIFs4OTMxXV0sIFsnbnN1YicsIFs4ODM2XV0sIFsnbnN1YkUnLCBbMTA5NDksIDgyNF1dLCBbJ25zdWJlJywgWzg4NDBdXSwgWyduc3Vic2V0JywgWzg4MzQsIDg0MDJdXSwgWyduc3Vic2V0ZXEnLCBbODg0MF1dLCBbJ25zdWJzZXRlcXEnLCBbMTA5NDksIDgyNF1dLCBbJ25zdWNjJywgWzg4MzNdXSwgWyduc3VjY2VxJywgWzEwOTI4LCA4MjRdXSwgWyduc3VwJywgWzg4MzddXSwgWyduc3VwRScsIFsxMDk1MCwgODI0XV0sIFsnbnN1cGUnLCBbODg0MV1dLCBbJ25zdXBzZXQnLCBbODgzNSwgODQwMl1dLCBbJ25zdXBzZXRlcScsIFs4ODQxXV0sIFsnbnN1cHNldGVxcScsIFsxMDk1MCwgODI0XV0sIFsnbnRnbCcsIFs4ODI1XV0sIFsnTnRpbGRlJywgWzIwOV1dLCBbJ250aWxkZScsIFsyNDFdXSwgWydudGxnJywgWzg4MjRdXSwgWydudHJpYW5nbGVsZWZ0JywgWzg5MzhdXSwgWydudHJpYW5nbGVsZWZ0ZXEnLCBbODk0MF1dLCBbJ250cmlhbmdsZXJpZ2h0JywgWzg5MzldXSwgWydudHJpYW5nbGVyaWdodGVxJywgWzg5NDFdXSwgWydOdScsIFs5MjVdXSwgWydudScsIFs5NTddXSwgWydudW0nLCBbMzVdXSwgWydudW1lcm8nLCBbODQ3MF1dLCBbJ251bXNwJywgWzgxOTldXSwgWydudmFwJywgWzg3ODEsIDg0MDJdXSwgWydudmRhc2gnLCBbODg3Nl1dLCBbJ252RGFzaCcsIFs4ODc3XV0sIFsnblZkYXNoJywgWzg4NzhdXSwgWyduVkRhc2gnLCBbODg3OV1dLCBbJ252Z2UnLCBbODgwNSwgODQwMl1dLCBbJ252Z3QnLCBbNjIsIDg0MDJdXSwgWydudkhhcnInLCBbMTA1MDBdXSwgWydudmluZmluJywgWzEwNzE4XV0sIFsnbnZsQXJyJywgWzEwNDk4XV0sIFsnbnZsZScsIFs4ODA0LCA4NDAyXV0sIFsnbnZsdCcsIFs2MCwgODQwMl1dLCBbJ252bHRyaWUnLCBbODg4NCwgODQwMl1dLCBbJ252ckFycicsIFsxMDQ5OV1dLCBbJ252cnRyaWUnLCBbODg4NSwgODQwMl1dLCBbJ252c2ltJywgWzg3NjQsIDg0MDJdXSwgWydud2FyaGsnLCBbMTA1MzFdXSwgWydud2FycicsIFs4NTk4XV0sIFsnbndBcnInLCBbODY2Ml1dLCBbJ253YXJyb3cnLCBbODU5OF1dLCBbJ253bmVhcicsIFsxMDUzNV1dLCBbJ09hY3V0ZScsIFsyMTFdXSwgWydvYWN1dGUnLCBbMjQzXV0sIFsnb2FzdCcsIFs4ODU5XV0sIFsnT2NpcmMnLCBbMjEyXV0sIFsnb2NpcmMnLCBbMjQ0XV0sIFsnb2NpcicsIFs4ODU4XV0sIFsnT2N5JywgWzEwNTRdXSwgWydvY3knLCBbMTA4Nl1dLCBbJ29kYXNoJywgWzg4NjFdXSwgWydPZGJsYWMnLCBbMzM2XV0sIFsnb2RibGFjJywgWzMzN11dLCBbJ29kaXYnLCBbMTA4MDhdXSwgWydvZG90JywgWzg4NTddXSwgWydvZHNvbGQnLCBbMTA2ODRdXSwgWydPRWxpZycsIFszMzhdXSwgWydvZWxpZycsIFszMzldXSwgWydvZmNpcicsIFsxMDY4N11dLCBbJ09mcicsIFsxMjAwODJdXSwgWydvZnInLCBbMTIwMTA4XV0sIFsnb2dvbicsIFs3MzFdXSwgWydPZ3JhdmUnLCBbMjEwXV0sIFsnb2dyYXZlJywgWzI0Ml1dLCBbJ29ndCcsIFsxMDY4OV1dLCBbJ29oYmFyJywgWzEwNjc3XV0sIFsnb2htJywgWzkzN11dLCBbJ29pbnQnLCBbODc1MF1dLCBbJ29sYXJyJywgWzg2MzRdXSwgWydvbGNpcicsIFsxMDY4Nl1dLCBbJ29sY3Jvc3MnLCBbMTA2ODNdXSwgWydvbGluZScsIFs4MjU0XV0sIFsnb2x0JywgWzEwNjg4XV0sIFsnT21hY3InLCBbMzMyXV0sIFsnb21hY3InLCBbMzMzXV0sIFsnT21lZ2EnLCBbOTM3XV0sIFsnb21lZ2EnLCBbOTY5XV0sIFsnT21pY3JvbicsIFs5MjddXSwgWydvbWljcm9uJywgWzk1OV1dLCBbJ29taWQnLCBbMTA2NzhdXSwgWydvbWludXMnLCBbODg1NF1dLCBbJ09vcGYnLCBbMTIwMTM0XV0sIFsnb29wZicsIFsxMjAxNjBdXSwgWydvcGFyJywgWzEwNjc5XV0sIFsnT3BlbkN1cmx5RG91YmxlUXVvdGUnLCBbODIyMF1dLCBbJ09wZW5DdXJseVF1b3RlJywgWzgyMTZdXSwgWydvcGVycCcsIFsxMDY4MV1dLCBbJ29wbHVzJywgWzg4NTNdXSwgWydvcmFycicsIFs4NjM1XV0sIFsnT3InLCBbMTA4MzZdXSwgWydvcicsIFs4NzQ0XV0sIFsnb3JkJywgWzEwODQ1XV0sIFsnb3JkZXInLCBbODUwMF1dLCBbJ29yZGVyb2YnLCBbODUwMF1dLCBbJ29yZGYnLCBbMTcwXV0sIFsnb3JkbScsIFsxODZdXSwgWydvcmlnb2YnLCBbODg4Nl1dLCBbJ29yb3InLCBbMTA4MzhdXSwgWydvcnNsb3BlJywgWzEwODM5XV0sIFsnb3J2JywgWzEwODQzXV0sIFsnb1MnLCBbOTQxNl1dLCBbJ09zY3InLCBbMTE5OTc4XV0sIFsnb3NjcicsIFs4NTAwXV0sIFsnT3NsYXNoJywgWzIxNl1dLCBbJ29zbGFzaCcsIFsyNDhdXSwgWydvc29sJywgWzg4NTZdXSwgWydPdGlsZGUnLCBbMjEzXV0sIFsnb3RpbGRlJywgWzI0NV1dLCBbJ290aW1lc2FzJywgWzEwODA2XV0sIFsnT3RpbWVzJywgWzEwODA3XV0sIFsnb3RpbWVzJywgWzg4NTVdXSwgWydPdW1sJywgWzIxNF1dLCBbJ291bWwnLCBbMjQ2XV0sIFsnb3ZiYXInLCBbOTAyMV1dLCBbJ092ZXJCYXInLCBbODI1NF1dLCBbJ092ZXJCcmFjZScsIFs5MTgyXV0sIFsnT3ZlckJyYWNrZXQnLCBbOTE0MF1dLCBbJ092ZXJQYXJlbnRoZXNpcycsIFs5MTgwXV0sIFsncGFyYScsIFsxODJdXSwgWydwYXJhbGxlbCcsIFs4NzQxXV0sIFsncGFyJywgWzg3NDFdXSwgWydwYXJzaW0nLCBbMTA5OTVdXSwgWydwYXJzbCcsIFsxMTAwNV1dLCBbJ3BhcnQnLCBbODcwNl1dLCBbJ1BhcnRpYWxEJywgWzg3MDZdXSwgWydQY3knLCBbMTA1NV1dLCBbJ3BjeScsIFsxMDg3XV0sIFsncGVyY250JywgWzM3XV0sIFsncGVyaW9kJywgWzQ2XV0sIFsncGVybWlsJywgWzgyNDBdXSwgWydwZXJwJywgWzg4NjldXSwgWydwZXJ0ZW5rJywgWzgyNDFdXSwgWydQZnInLCBbMTIwMDgzXV0sIFsncGZyJywgWzEyMDEwOV1dLCBbJ1BoaScsIFs5MzRdXSwgWydwaGknLCBbOTY2XV0sIFsncGhpdicsIFs5ODFdXSwgWydwaG1tYXQnLCBbODQ5OV1dLCBbJ3Bob25lJywgWzk3NDJdXSwgWydQaScsIFs5MjhdXSwgWydwaScsIFs5NjBdXSwgWydwaXRjaGZvcmsnLCBbODkxNl1dLCBbJ3BpdicsIFs5ODJdXSwgWydwbGFuY2snLCBbODQ2M11dLCBbJ3BsYW5ja2gnLCBbODQ2Ml1dLCBbJ3BsYW5rdicsIFs4NDYzXV0sIFsncGx1c2FjaXInLCBbMTA3ODddXSwgWydwbHVzYicsIFs4ODYyXV0sIFsncGx1c2NpcicsIFsxMDc4Nl1dLCBbJ3BsdXMnLCBbNDNdXSwgWydwbHVzZG8nLCBbODcyNF1dLCBbJ3BsdXNkdScsIFsxMDc4OV1dLCBbJ3BsdXNlJywgWzEwODY2XV0sIFsnUGx1c01pbnVzJywgWzE3N11dLCBbJ3BsdXNtbicsIFsxNzddXSwgWydwbHVzc2ltJywgWzEwNzkwXV0sIFsncGx1c3R3bycsIFsxMDc5MV1dLCBbJ3BtJywgWzE3N11dLCBbJ1BvaW5jYXJlcGxhbmUnLCBbODQ2MF1dLCBbJ3BvaW50aW50JywgWzEwNzczXV0sIFsncG9wZicsIFsxMjAxNjFdXSwgWydQb3BmJywgWzg0NzNdXSwgWydwb3VuZCcsIFsxNjNdXSwgWydwcmFwJywgWzEwOTM1XV0sIFsnUHInLCBbMTA5MzldXSwgWydwcicsIFs4ODI2XV0sIFsncHJjdWUnLCBbODgyOF1dLCBbJ3ByZWNhcHByb3gnLCBbMTA5MzVdXSwgWydwcmVjJywgWzg4MjZdXSwgWydwcmVjY3VybHllcScsIFs4ODI4XV0sIFsnUHJlY2VkZXMnLCBbODgyNl1dLCBbJ1ByZWNlZGVzRXF1YWwnLCBbMTA5MjddXSwgWydQcmVjZWRlc1NsYW50RXF1YWwnLCBbODgyOF1dLCBbJ1ByZWNlZGVzVGlsZGUnLCBbODgzMF1dLCBbJ3ByZWNlcScsIFsxMDkyN11dLCBbJ3ByZWNuYXBwcm94JywgWzEwOTM3XV0sIFsncHJlY25lcXEnLCBbMTA5MzNdXSwgWydwcmVjbnNpbScsIFs4OTM2XV0sIFsncHJlJywgWzEwOTI3XV0sIFsncHJFJywgWzEwOTMxXV0sIFsncHJlY3NpbScsIFs4ODMwXV0sIFsncHJpbWUnLCBbODI0Ml1dLCBbJ1ByaW1lJywgWzgyNDNdXSwgWydwcmltZXMnLCBbODQ3M11dLCBbJ3BybmFwJywgWzEwOTM3XV0sIFsncHJuRScsIFsxMDkzM11dLCBbJ3BybnNpbScsIFs4OTM2XV0sIFsncHJvZCcsIFs4NzE5XV0sIFsnUHJvZHVjdCcsIFs4NzE5XV0sIFsncHJvZmFsYXInLCBbOTAwNl1dLCBbJ3Byb2ZsaW5lJywgWzg5NzhdXSwgWydwcm9mc3VyZicsIFs4OTc5XV0sIFsncHJvcCcsIFs4NzMzXV0sIFsnUHJvcG9ydGlvbmFsJywgWzg3MzNdXSwgWydQcm9wb3J0aW9uJywgWzg3NTldXSwgWydwcm9wdG8nLCBbODczM11dLCBbJ3Byc2ltJywgWzg4MzBdXSwgWydwcnVyZWwnLCBbODg4MF1dLCBbJ1BzY3InLCBbMTE5OTc5XV0sIFsncHNjcicsIFsxMjAwMDVdXSwgWydQc2knLCBbOTM2XV0sIFsncHNpJywgWzk2OF1dLCBbJ3B1bmNzcCcsIFs4MjAwXV0sIFsnUWZyJywgWzEyMDA4NF1dLCBbJ3FmcicsIFsxMjAxMTBdXSwgWydxaW50JywgWzEwNzY0XV0sIFsncW9wZicsIFsxMjAxNjJdXSwgWydRb3BmJywgWzg0NzRdXSwgWydxcHJpbWUnLCBbODI3OV1dLCBbJ1FzY3InLCBbMTE5OTgwXV0sIFsncXNjcicsIFsxMjAwMDZdXSwgWydxdWF0ZXJuaW9ucycsIFs4NDYxXV0sIFsncXVhdGludCcsIFsxMDc3NF1dLCBbJ3F1ZXN0JywgWzYzXV0sIFsncXVlc3RlcScsIFs4Nzk5XV0sIFsncXVvdCcsIFszNF1dLCBbJ1FVT1QnLCBbMzRdXSwgWydyQWFycicsIFs4NjY3XV0sIFsncmFjZScsIFs4NzY1LCA4MTddXSwgWydSYWN1dGUnLCBbMzQwXV0sIFsncmFjdXRlJywgWzM0MV1dLCBbJ3JhZGljJywgWzg3MzBdXSwgWydyYWVtcHR5dicsIFsxMDY3NV1dLCBbJ3JhbmcnLCBbMTAyMTddXSwgWydSYW5nJywgWzEwMjE5XV0sIFsncmFuZ2QnLCBbMTA2NDJdXSwgWydyYW5nZScsIFsxMDY2MV1dLCBbJ3JhbmdsZScsIFsxMDIxN11dLCBbJ3JhcXVvJywgWzE4N11dLCBbJ3JhcnJhcCcsIFsxMDYxM11dLCBbJ3JhcnJiJywgWzg2NzddXSwgWydyYXJyYmZzJywgWzEwNTI4XV0sIFsncmFycmMnLCBbMTA1NDddXSwgWydyYXJyJywgWzg1OTRdXSwgWydSYXJyJywgWzg2MDhdXSwgWydyQXJyJywgWzg2NThdXSwgWydyYXJyZnMnLCBbMTA1MjZdXSwgWydyYXJyaGsnLCBbODYxOF1dLCBbJ3JhcnJscCcsIFs4NjIwXV0sIFsncmFycnBsJywgWzEwNTY1XV0sIFsncmFycnNpbScsIFsxMDYxMl1dLCBbJ1JhcnJ0bCcsIFsxMDUxOF1dLCBbJ3JhcnJ0bCcsIFs4NjExXV0sIFsncmFycncnLCBbODYwNV1dLCBbJ3JhdGFpbCcsIFsxMDUyMl1dLCBbJ3JBdGFpbCcsIFsxMDUyNF1dLCBbJ3JhdGlvJywgWzg3NThdXSwgWydyYXRpb25hbHMnLCBbODQ3NF1dLCBbJ3JiYXJyJywgWzEwNTA5XV0sIFsnckJhcnInLCBbMTA1MTFdXSwgWydSQmFycicsIFsxMDUxMl1dLCBbJ3JiYnJrJywgWzEwMDk5XV0sIFsncmJyYWNlJywgWzEyNV1dLCBbJ3JicmFjaycsIFs5M11dLCBbJ3JicmtlJywgWzEwNjM2XV0sIFsncmJya3NsZCcsIFsxMDYzOF1dLCBbJ3JicmtzbHUnLCBbMTA2NDBdXSwgWydSY2Fyb24nLCBbMzQ0XV0sIFsncmNhcm9uJywgWzM0NV1dLCBbJ1JjZWRpbCcsIFszNDJdXSwgWydyY2VkaWwnLCBbMzQzXV0sIFsncmNlaWwnLCBbODk2OV1dLCBbJ3JjdWInLCBbMTI1XV0sIFsnUmN5JywgWzEwNTZdXSwgWydyY3knLCBbMTA4OF1dLCBbJ3JkY2EnLCBbMTA1NTFdXSwgWydyZGxkaGFyJywgWzEwNjAxXV0sIFsncmRxdW8nLCBbODIyMV1dLCBbJ3JkcXVvcicsIFs4MjIxXV0sIFsnQ2xvc2VDdXJseURvdWJsZVF1b3RlJywgWzgyMjFdXSwgWydyZHNoJywgWzg2MjddXSwgWydyZWFsJywgWzg0NzZdXSwgWydyZWFsaW5lJywgWzg0NzVdXSwgWydyZWFscGFydCcsIFs4NDc2XV0sIFsncmVhbHMnLCBbODQ3N11dLCBbJ1JlJywgWzg0NzZdXSwgWydyZWN0JywgWzk2NDVdXSwgWydyZWcnLCBbMTc0XV0sIFsnUkVHJywgWzE3NF1dLCBbJ1JldmVyc2VFbGVtZW50JywgWzg3MTVdXSwgWydSZXZlcnNlRXF1aWxpYnJpdW0nLCBbODY1MV1dLCBbJ1JldmVyc2VVcEVxdWlsaWJyaXVtJywgWzEwNjA3XV0sIFsncmZpc2h0JywgWzEwNjIxXV0sIFsncmZsb29yJywgWzg5NzFdXSwgWydyZnInLCBbMTIwMTExXV0sIFsnUmZyJywgWzg0NzZdXSwgWydySGFyJywgWzEwNTk2XV0sIFsncmhhcmQnLCBbODY0MV1dLCBbJ3JoYXJ1JywgWzg2NDBdXSwgWydyaGFydWwnLCBbMTA2MDRdXSwgWydSaG8nLCBbOTI5XV0sIFsncmhvJywgWzk2MV1dLCBbJ3Job3YnLCBbMTAwOV1dLCBbJ1JpZ2h0QW5nbGVCcmFja2V0JywgWzEwMjE3XV0sIFsnUmlnaHRBcnJvd0JhcicsIFs4Njc3XV0sIFsncmlnaHRhcnJvdycsIFs4NTk0XV0sIFsnUmlnaHRBcnJvdycsIFs4NTk0XV0sIFsnUmlnaHRhcnJvdycsIFs4NjU4XV0sIFsnUmlnaHRBcnJvd0xlZnRBcnJvdycsIFs4NjQ0XV0sIFsncmlnaHRhcnJvd3RhaWwnLCBbODYxMV1dLCBbJ1JpZ2h0Q2VpbGluZycsIFs4OTY5XV0sIFsnUmlnaHREb3VibGVCcmFja2V0JywgWzEwMjE1XV0sIFsnUmlnaHREb3duVGVlVmVjdG9yJywgWzEwNTg5XV0sIFsnUmlnaHREb3duVmVjdG9yQmFyJywgWzEwNTgxXV0sIFsnUmlnaHREb3duVmVjdG9yJywgWzg2NDJdXSwgWydSaWdodEZsb29yJywgWzg5NzFdXSwgWydyaWdodGhhcnBvb25kb3duJywgWzg2NDFdXSwgWydyaWdodGhhcnBvb251cCcsIFs4NjQwXV0sIFsncmlnaHRsZWZ0YXJyb3dzJywgWzg2NDRdXSwgWydyaWdodGxlZnRoYXJwb29ucycsIFs4NjUyXV0sIFsncmlnaHRyaWdodGFycm93cycsIFs4NjQ5XV0sIFsncmlnaHRzcXVpZ2Fycm93JywgWzg2MDVdXSwgWydSaWdodFRlZUFycm93JywgWzg2MTRdXSwgWydSaWdodFRlZScsIFs4ODY2XV0sIFsnUmlnaHRUZWVWZWN0b3InLCBbMTA1ODddXSwgWydyaWdodHRocmVldGltZXMnLCBbODkwOF1dLCBbJ1JpZ2h0VHJpYW5nbGVCYXInLCBbMTA3MDRdXSwgWydSaWdodFRyaWFuZ2xlJywgWzg4ODNdXSwgWydSaWdodFRyaWFuZ2xlRXF1YWwnLCBbODg4NV1dLCBbJ1JpZ2h0VXBEb3duVmVjdG9yJywgWzEwNTc1XV0sIFsnUmlnaHRVcFRlZVZlY3RvcicsIFsxMDU4OF1dLCBbJ1JpZ2h0VXBWZWN0b3JCYXInLCBbMTA1ODBdXSwgWydSaWdodFVwVmVjdG9yJywgWzg2MzhdXSwgWydSaWdodFZlY3RvckJhcicsIFsxMDU3OV1dLCBbJ1JpZ2h0VmVjdG9yJywgWzg2NDBdXSwgWydyaW5nJywgWzczMF1dLCBbJ3Jpc2luZ2RvdHNlcScsIFs4Nzg3XV0sIFsncmxhcnInLCBbODY0NF1dLCBbJ3JsaGFyJywgWzg2NTJdXSwgWydybG0nLCBbODIwN11dLCBbJ3Jtb3VzdGFjaGUnLCBbOTEzN11dLCBbJ3Jtb3VzdCcsIFs5MTM3XV0sIFsncm5taWQnLCBbMTA5OTBdXSwgWydyb2FuZycsIFsxMDIyMV1dLCBbJ3JvYXJyJywgWzg3MDJdXSwgWydyb2JyaycsIFsxMDIxNV1dLCBbJ3JvcGFyJywgWzEwNjMwXV0sIFsncm9wZicsIFsxMjAxNjNdXSwgWydSb3BmJywgWzg0NzddXSwgWydyb3BsdXMnLCBbMTA3OThdXSwgWydyb3RpbWVzJywgWzEwODA1XV0sIFsnUm91bmRJbXBsaWVzJywgWzEwNjA4XV0sIFsncnBhcicsIFs0MV1dLCBbJ3JwYXJndCcsIFsxMDY0NF1dLCBbJ3JwcG9saW50JywgWzEwNzcwXV0sIFsncnJhcnInLCBbODY0OV1dLCBbJ1JyaWdodGFycm93JywgWzg2NjddXSwgWydyc2FxdW8nLCBbODI1MF1dLCBbJ3JzY3InLCBbMTIwMDA3XV0sIFsnUnNjcicsIFs4NDc1XV0sIFsncnNoJywgWzg2MjVdXSwgWydSc2gnLCBbODYyNV1dLCBbJ3JzcWInLCBbOTNdXSwgWydyc3F1bycsIFs4MjE3XV0sIFsncnNxdW9yJywgWzgyMTddXSwgWydDbG9zZUN1cmx5UXVvdGUnLCBbODIxN11dLCBbJ3J0aHJlZScsIFs4OTA4XV0sIFsncnRpbWVzJywgWzg5MDZdXSwgWydydHJpJywgWzk2NTddXSwgWydydHJpZScsIFs4ODg1XV0sIFsncnRyaWYnLCBbOTY1Nl1dLCBbJ3J0cmlsdHJpJywgWzEwNzAyXV0sIFsnUnVsZURlbGF5ZWQnLCBbMTA3NDBdXSwgWydydWx1aGFyJywgWzEwNjAwXV0sIFsncngnLCBbODQ3OF1dLCBbJ1NhY3V0ZScsIFszNDZdXSwgWydzYWN1dGUnLCBbMzQ3XV0sIFsnc2JxdW8nLCBbODIxOF1dLCBbJ3NjYXAnLCBbMTA5MzZdXSwgWydTY2Fyb24nLCBbMzUyXV0sIFsnc2Nhcm9uJywgWzM1M11dLCBbJ1NjJywgWzEwOTQwXV0sIFsnc2MnLCBbODgyN11dLCBbJ3NjY3VlJywgWzg4MjldXSwgWydzY2UnLCBbMTA5MjhdXSwgWydzY0UnLCBbMTA5MzJdXSwgWydTY2VkaWwnLCBbMzUwXV0sIFsnc2NlZGlsJywgWzM1MV1dLCBbJ1NjaXJjJywgWzM0OF1dLCBbJ3NjaXJjJywgWzM0OV1dLCBbJ3NjbmFwJywgWzEwOTM4XV0sIFsnc2NuRScsIFsxMDkzNF1dLCBbJ3NjbnNpbScsIFs4OTM3XV0sIFsnc2Nwb2xpbnQnLCBbMTA3NzFdXSwgWydzY3NpbScsIFs4ODMxXV0sIFsnU2N5JywgWzEwNTddXSwgWydzY3knLCBbMTA4OV1dLCBbJ3Nkb3RiJywgWzg4NjVdXSwgWydzZG90JywgWzg5MDFdXSwgWydzZG90ZScsIFsxMDg1NF1dLCBbJ3NlYXJoaycsIFsxMDUzM11dLCBbJ3NlYXJyJywgWzg2MDBdXSwgWydzZUFycicsIFs4NjY0XV0sIFsnc2VhcnJvdycsIFs4NjAwXV0sIFsnc2VjdCcsIFsxNjddXSwgWydzZW1pJywgWzU5XV0sIFsnc2Vzd2FyJywgWzEwNTM3XV0sIFsnc2V0bWludXMnLCBbODcyNl1dLCBbJ3NldG1uJywgWzg3MjZdXSwgWydzZXh0JywgWzEwMDM4XV0sIFsnU2ZyJywgWzEyMDA4Nl1dLCBbJ3NmcicsIFsxMjAxMTJdXSwgWydzZnJvd24nLCBbODk5NF1dLCBbJ3NoYXJwJywgWzk4MzldXSwgWydTSENIY3knLCBbMTA2NV1dLCBbJ3NoY2hjeScsIFsxMDk3XV0sIFsnU0hjeScsIFsxMDY0XV0sIFsnc2hjeScsIFsxMDk2XV0sIFsnU2hvcnREb3duQXJyb3cnLCBbODU5NV1dLCBbJ1Nob3J0TGVmdEFycm93JywgWzg1OTJdXSwgWydzaG9ydG1pZCcsIFs4NzM5XV0sIFsnc2hvcnRwYXJhbGxlbCcsIFs4NzQxXV0sIFsnU2hvcnRSaWdodEFycm93JywgWzg1OTRdXSwgWydTaG9ydFVwQXJyb3cnLCBbODU5M11dLCBbJ3NoeScsIFsxNzNdXSwgWydTaWdtYScsIFs5MzFdXSwgWydzaWdtYScsIFs5NjNdXSwgWydzaWdtYWYnLCBbOTYyXV0sIFsnc2lnbWF2JywgWzk2Ml1dLCBbJ3NpbScsIFs4NzY0XV0sIFsnc2ltZG90JywgWzEwODU4XV0sIFsnc2ltZScsIFs4NzcxXV0sIFsnc2ltZXEnLCBbODc3MV1dLCBbJ3NpbWcnLCBbMTA5MTBdXSwgWydzaW1nRScsIFsxMDkxMl1dLCBbJ3NpbWwnLCBbMTA5MDldXSwgWydzaW1sRScsIFsxMDkxMV1dLCBbJ3NpbW5lJywgWzg3NzRdXSwgWydzaW1wbHVzJywgWzEwNzg4XV0sIFsnc2ltcmFycicsIFsxMDYxMF1dLCBbJ3NsYXJyJywgWzg1OTJdXSwgWydTbWFsbENpcmNsZScsIFs4NzI4XV0sIFsnc21hbGxzZXRtaW51cycsIFs4NzI2XV0sIFsnc21hc2hwJywgWzEwODAzXV0sIFsnc21lcGFyc2wnLCBbMTA3MjRdXSwgWydzbWlkJywgWzg3MzldXSwgWydzbWlsZScsIFs4OTk1XV0sIFsnc210JywgWzEwOTIyXV0sIFsnc210ZScsIFsxMDkyNF1dLCBbJ3NtdGVzJywgWzEwOTI0LCA2NTAyNF1dLCBbJ1NPRlRjeScsIFsxMDY4XV0sIFsnc29mdGN5JywgWzExMDBdXSwgWydzb2xiYXInLCBbOTAyM11dLCBbJ3NvbGInLCBbMTA2OTJdXSwgWydzb2wnLCBbNDddXSwgWydTb3BmJywgWzEyMDEzOF1dLCBbJ3NvcGYnLCBbMTIwMTY0XV0sIFsnc3BhZGVzJywgWzk4MjRdXSwgWydzcGFkZXN1aXQnLCBbOTgyNF1dLCBbJ3NwYXInLCBbODc0MV1dLCBbJ3NxY2FwJywgWzg4NTFdXSwgWydzcWNhcHMnLCBbODg1MSwgNjUwMjRdXSwgWydzcWN1cCcsIFs4ODUyXV0sIFsnc3FjdXBzJywgWzg4NTIsIDY1MDI0XV0sIFsnU3FydCcsIFs4NzMwXV0sIFsnc3FzdWInLCBbODg0N11dLCBbJ3Nxc3ViZScsIFs4ODQ5XV0sIFsnc3FzdWJzZXQnLCBbODg0N11dLCBbJ3Nxc3Vic2V0ZXEnLCBbODg0OV1dLCBbJ3Nxc3VwJywgWzg4NDhdXSwgWydzcXN1cGUnLCBbODg1MF1dLCBbJ3Nxc3Vwc2V0JywgWzg4NDhdXSwgWydzcXN1cHNldGVxJywgWzg4NTBdXSwgWydzcXVhcmUnLCBbOTYzM11dLCBbJ1NxdWFyZScsIFs5NjMzXV0sIFsnU3F1YXJlSW50ZXJzZWN0aW9uJywgWzg4NTFdXSwgWydTcXVhcmVTdWJzZXQnLCBbODg0N11dLCBbJ1NxdWFyZVN1YnNldEVxdWFsJywgWzg4NDldXSwgWydTcXVhcmVTdXBlcnNldCcsIFs4ODQ4XV0sIFsnU3F1YXJlU3VwZXJzZXRFcXVhbCcsIFs4ODUwXV0sIFsnU3F1YXJlVW5pb24nLCBbODg1Ml1dLCBbJ3NxdWFyZicsIFs5NjQyXV0sIFsnc3F1JywgWzk2MzNdXSwgWydzcXVmJywgWzk2NDJdXSwgWydzcmFycicsIFs4NTk0XV0sIFsnU3NjcicsIFsxMTk5ODJdXSwgWydzc2NyJywgWzEyMDAwOF1dLCBbJ3NzZXRtbicsIFs4NzI2XV0sIFsnc3NtaWxlJywgWzg5OTVdXSwgWydzc3RhcmYnLCBbODkwMl1dLCBbJ1N0YXInLCBbODkwMl1dLCBbJ3N0YXInLCBbOTczNF1dLCBbJ3N0YXJmJywgWzk3MzNdXSwgWydzdHJhaWdodGVwc2lsb24nLCBbMTAxM11dLCBbJ3N0cmFpZ2h0cGhpJywgWzk4MV1dLCBbJ3N0cm5zJywgWzE3NV1dLCBbJ3N1YicsIFs4ODM0XV0sIFsnU3ViJywgWzg5MTJdXSwgWydzdWJkb3QnLCBbMTA5NDFdXSwgWydzdWJFJywgWzEwOTQ5XV0sIFsnc3ViZScsIFs4ODM4XV0sIFsnc3ViZWRvdCcsIFsxMDk0N11dLCBbJ3N1Ym11bHQnLCBbMTA5NDVdXSwgWydzdWJuRScsIFsxMDk1NV1dLCBbJ3N1Ym5lJywgWzg4NDJdXSwgWydzdWJwbHVzJywgWzEwOTQzXV0sIFsnc3VicmFycicsIFsxMDYxN11dLCBbJ3N1YnNldCcsIFs4ODM0XV0sIFsnU3Vic2V0JywgWzg5MTJdXSwgWydzdWJzZXRlcScsIFs4ODM4XV0sIFsnc3Vic2V0ZXFxJywgWzEwOTQ5XV0sIFsnU3Vic2V0RXF1YWwnLCBbODgzOF1dLCBbJ3N1YnNldG5lcScsIFs4ODQyXV0sIFsnc3Vic2V0bmVxcScsIFsxMDk1NV1dLCBbJ3N1YnNpbScsIFsxMDk1MV1dLCBbJ3N1YnN1YicsIFsxMDk2NV1dLCBbJ3N1YnN1cCcsIFsxMDk2M11dLCBbJ3N1Y2NhcHByb3gnLCBbMTA5MzZdXSwgWydzdWNjJywgWzg4MjddXSwgWydzdWNjY3VybHllcScsIFs4ODI5XV0sIFsnU3VjY2VlZHMnLCBbODgyN11dLCBbJ1N1Y2NlZWRzRXF1YWwnLCBbMTA5MjhdXSwgWydTdWNjZWVkc1NsYW50RXF1YWwnLCBbODgyOV1dLCBbJ1N1Y2NlZWRzVGlsZGUnLCBbODgzMV1dLCBbJ3N1Y2NlcScsIFsxMDkyOF1dLCBbJ3N1Y2NuYXBwcm94JywgWzEwOTM4XV0sIFsnc3VjY25lcXEnLCBbMTA5MzRdXSwgWydzdWNjbnNpbScsIFs4OTM3XV0sIFsnc3VjY3NpbScsIFs4ODMxXV0sIFsnU3VjaFRoYXQnLCBbODcxNV1dLCBbJ3N1bScsIFs4NzIxXV0sIFsnU3VtJywgWzg3MjFdXSwgWydzdW5nJywgWzk4MzRdXSwgWydzdXAxJywgWzE4NV1dLCBbJ3N1cDInLCBbMTc4XV0sIFsnc3VwMycsIFsxNzldXSwgWydzdXAnLCBbODgzNV1dLCBbJ1N1cCcsIFs4OTEzXV0sIFsnc3VwZG90JywgWzEwOTQyXV0sIFsnc3VwZHN1YicsIFsxMDk2OF1dLCBbJ3N1cEUnLCBbMTA5NTBdXSwgWydzdXBlJywgWzg4MzldXSwgWydzdXBlZG90JywgWzEwOTQ4XV0sIFsnU3VwZXJzZXQnLCBbODgzNV1dLCBbJ1N1cGVyc2V0RXF1YWwnLCBbODgzOV1dLCBbJ3N1cGhzb2wnLCBbMTAxODVdXSwgWydzdXBoc3ViJywgWzEwOTY3XV0sIFsnc3VwbGFycicsIFsxMDYxOV1dLCBbJ3N1cG11bHQnLCBbMTA5NDZdXSwgWydzdXBuRScsIFsxMDk1Nl1dLCBbJ3N1cG5lJywgWzg4NDNdXSwgWydzdXBwbHVzJywgWzEwOTQ0XV0sIFsnc3Vwc2V0JywgWzg4MzVdXSwgWydTdXBzZXQnLCBbODkxM11dLCBbJ3N1cHNldGVxJywgWzg4MzldXSwgWydzdXBzZXRlcXEnLCBbMTA5NTBdXSwgWydzdXBzZXRuZXEnLCBbODg0M11dLCBbJ3N1cHNldG5lcXEnLCBbMTA5NTZdXSwgWydzdXBzaW0nLCBbMTA5NTJdXSwgWydzdXBzdWInLCBbMTA5NjRdXSwgWydzdXBzdXAnLCBbMTA5NjZdXSwgWydzd2FyaGsnLCBbMTA1MzRdXSwgWydzd2FycicsIFs4NjAxXV0sIFsnc3dBcnInLCBbODY2NV1dLCBbJ3N3YXJyb3cnLCBbODYwMV1dLCBbJ3N3bndhcicsIFsxMDUzOF1dLCBbJ3N6bGlnJywgWzIyM11dLCBbJ1RhYicsIFs5XV0sIFsndGFyZ2V0JywgWzg5ODJdXSwgWydUYXUnLCBbOTMyXV0sIFsndGF1JywgWzk2NF1dLCBbJ3RicmsnLCBbOTE0MF1dLCBbJ1RjYXJvbicsIFszNTZdXSwgWyd0Y2Fyb24nLCBbMzU3XV0sIFsnVGNlZGlsJywgWzM1NF1dLCBbJ3RjZWRpbCcsIFszNTVdXSwgWydUY3knLCBbMTA1OF1dLCBbJ3RjeScsIFsxMDkwXV0sIFsndGRvdCcsIFs4NDExXV0sIFsndGVscmVjJywgWzg5ODFdXSwgWydUZnInLCBbMTIwMDg3XV0sIFsndGZyJywgWzEyMDExM11dLCBbJ3RoZXJlNCcsIFs4NzU2XV0sIFsndGhlcmVmb3JlJywgWzg3NTZdXSwgWydUaGVyZWZvcmUnLCBbODc1Nl1dLCBbJ1RoZXRhJywgWzkyMF1dLCBbJ3RoZXRhJywgWzk1Ml1dLCBbJ3RoZXRhc3ltJywgWzk3N11dLCBbJ3RoZXRhdicsIFs5NzddXSwgWyd0aGlja2FwcHJveCcsIFs4Nzc2XV0sIFsndGhpY2tzaW0nLCBbODc2NF1dLCBbJ1RoaWNrU3BhY2UnLCBbODI4NywgODIwMl1dLCBbJ1RoaW5TcGFjZScsIFs4MjAxXV0sIFsndGhpbnNwJywgWzgyMDFdXSwgWyd0aGthcCcsIFs4Nzc2XV0sIFsndGhrc2ltJywgWzg3NjRdXSwgWydUSE9STicsIFsyMjJdXSwgWyd0aG9ybicsIFsyNTRdXSwgWyd0aWxkZScsIFs3MzJdXSwgWydUaWxkZScsIFs4NzY0XV0sIFsnVGlsZGVFcXVhbCcsIFs4NzcxXV0sIFsnVGlsZGVGdWxsRXF1YWwnLCBbODc3M11dLCBbJ1RpbGRlVGlsZGUnLCBbODc3Nl1dLCBbJ3RpbWVzYmFyJywgWzEwODAxXV0sIFsndGltZXNiJywgWzg4NjRdXSwgWyd0aW1lcycsIFsyMTVdXSwgWyd0aW1lc2QnLCBbMTA4MDBdXSwgWyd0aW50JywgWzg3NDldXSwgWyd0b2VhJywgWzEwNTM2XV0sIFsndG9wYm90JywgWzkwMTRdXSwgWyd0b3BjaXInLCBbMTA5OTNdXSwgWyd0b3AnLCBbODg2OF1dLCBbJ1RvcGYnLCBbMTIwMTM5XV0sIFsndG9wZicsIFsxMjAxNjVdXSwgWyd0b3Bmb3JrJywgWzEwOTcwXV0sIFsndG9zYScsIFsxMDUzN11dLCBbJ3RwcmltZScsIFs4MjQ0XV0sIFsndHJhZGUnLCBbODQ4Ml1dLCBbJ1RSQURFJywgWzg0ODJdXSwgWyd0cmlhbmdsZScsIFs5NjUzXV0sIFsndHJpYW5nbGVkb3duJywgWzk2NjNdXSwgWyd0cmlhbmdsZWxlZnQnLCBbOTY2N11dLCBbJ3RyaWFuZ2xlbGVmdGVxJywgWzg4ODRdXSwgWyd0cmlhbmdsZXEnLCBbODc5Nl1dLCBbJ3RyaWFuZ2xlcmlnaHQnLCBbOTY1N11dLCBbJ3RyaWFuZ2xlcmlnaHRlcScsIFs4ODg1XV0sIFsndHJpZG90JywgWzk3MDhdXSwgWyd0cmllJywgWzg3OTZdXSwgWyd0cmltaW51cycsIFsxMDgxMF1dLCBbJ1RyaXBsZURvdCcsIFs4NDExXV0sIFsndHJpcGx1cycsIFsxMDgwOV1dLCBbJ3RyaXNiJywgWzEwNzAxXV0sIFsndHJpdGltZScsIFsxMDgxMV1dLCBbJ3RycGV6aXVtJywgWzkxODZdXSwgWydUc2NyJywgWzExOTk4M11dLCBbJ3RzY3InLCBbMTIwMDA5XV0sIFsnVFNjeScsIFsxMDYyXV0sIFsndHNjeScsIFsxMDk0XV0sIFsnVFNIY3knLCBbMTAzNV1dLCBbJ3RzaGN5JywgWzExMTVdXSwgWydUc3Ryb2snLCBbMzU4XV0sIFsndHN0cm9rJywgWzM1OV1dLCBbJ3R3aXh0JywgWzg4MTJdXSwgWyd0d29oZWFkbGVmdGFycm93JywgWzg2MDZdXSwgWyd0d29oZWFkcmlnaHRhcnJvdycsIFs4NjA4XV0sIFsnVWFjdXRlJywgWzIxOF1dLCBbJ3VhY3V0ZScsIFsyNTBdXSwgWyd1YXJyJywgWzg1OTNdXSwgWydVYXJyJywgWzg2MDddXSwgWyd1QXJyJywgWzg2NTddXSwgWydVYXJyb2NpcicsIFsxMDU2OV1dLCBbJ1VicmN5JywgWzEwMzhdXSwgWyd1YnJjeScsIFsxMTE4XV0sIFsnVWJyZXZlJywgWzM2NF1dLCBbJ3VicmV2ZScsIFszNjVdXSwgWydVY2lyYycsIFsyMTldXSwgWyd1Y2lyYycsIFsyNTFdXSwgWydVY3knLCBbMTA1OV1dLCBbJ3VjeScsIFsxMDkxXV0sIFsndWRhcnInLCBbODY0NV1dLCBbJ1VkYmxhYycsIFszNjhdXSwgWyd1ZGJsYWMnLCBbMzY5XV0sIFsndWRoYXInLCBbMTA2MDZdXSwgWyd1ZmlzaHQnLCBbMTA2MjJdXSwgWydVZnInLCBbMTIwMDg4XV0sIFsndWZyJywgWzEyMDExNF1dLCBbJ1VncmF2ZScsIFsyMTddXSwgWyd1Z3JhdmUnLCBbMjQ5XV0sIFsndUhhcicsIFsxMDU5NV1dLCBbJ3VoYXJsJywgWzg2MzldXSwgWyd1aGFycicsIFs4NjM4XV0sIFsndWhibGsnLCBbOTYwMF1dLCBbJ3VsY29ybicsIFs4OTg4XV0sIFsndWxjb3JuZXInLCBbODk4OF1dLCBbJ3VsY3JvcCcsIFs4OTc1XV0sIFsndWx0cmknLCBbOTcyMF1dLCBbJ1VtYWNyJywgWzM2Ml1dLCBbJ3VtYWNyJywgWzM2M11dLCBbJ3VtbCcsIFsxNjhdXSwgWydVbmRlckJhcicsIFs5NV1dLCBbJ1VuZGVyQnJhY2UnLCBbOTE4M11dLCBbJ1VuZGVyQnJhY2tldCcsIFs5MTQxXV0sIFsnVW5kZXJQYXJlbnRoZXNpcycsIFs5MTgxXV0sIFsnVW5pb24nLCBbODg5OV1dLCBbJ1VuaW9uUGx1cycsIFs4ODQ2XV0sIFsnVW9nb24nLCBbMzcwXV0sIFsndW9nb24nLCBbMzcxXV0sIFsnVW9wZicsIFsxMjAxNDBdXSwgWyd1b3BmJywgWzEyMDE2Nl1dLCBbJ1VwQXJyb3dCYXInLCBbMTA1MTRdXSwgWyd1cGFycm93JywgWzg1OTNdXSwgWydVcEFycm93JywgWzg1OTNdXSwgWydVcGFycm93JywgWzg2NTddXSwgWydVcEFycm93RG93bkFycm93JywgWzg2NDVdXSwgWyd1cGRvd25hcnJvdycsIFs4NTk3XV0sIFsnVXBEb3duQXJyb3cnLCBbODU5N11dLCBbJ1VwZG93bmFycm93JywgWzg2NjFdXSwgWydVcEVxdWlsaWJyaXVtJywgWzEwNjA2XV0sIFsndXBoYXJwb29ubGVmdCcsIFs4NjM5XV0sIFsndXBoYXJwb29ucmlnaHQnLCBbODYzOF1dLCBbJ3VwbHVzJywgWzg4NDZdXSwgWydVcHBlckxlZnRBcnJvdycsIFs4NTk4XV0sIFsnVXBwZXJSaWdodEFycm93JywgWzg1OTldXSwgWyd1cHNpJywgWzk2NV1dLCBbJ1Vwc2knLCBbOTc4XV0sIFsndXBzaWgnLCBbOTc4XV0sIFsnVXBzaWxvbicsIFs5MzNdXSwgWyd1cHNpbG9uJywgWzk2NV1dLCBbJ1VwVGVlQXJyb3cnLCBbODYxM11dLCBbJ1VwVGVlJywgWzg4NjldXSwgWyd1cHVwYXJyb3dzJywgWzg2NDhdXSwgWyd1cmNvcm4nLCBbODk4OV1dLCBbJ3VyY29ybmVyJywgWzg5ODldXSwgWyd1cmNyb3AnLCBbODk3NF1dLCBbJ1VyaW5nJywgWzM2Nl1dLCBbJ3VyaW5nJywgWzM2N11dLCBbJ3VydHJpJywgWzk3MjFdXSwgWydVc2NyJywgWzExOTk4NF1dLCBbJ3VzY3InLCBbMTIwMDEwXV0sIFsndXRkb3QnLCBbODk0NF1dLCBbJ1V0aWxkZScsIFszNjBdXSwgWyd1dGlsZGUnLCBbMzYxXV0sIFsndXRyaScsIFs5NjUzXV0sIFsndXRyaWYnLCBbOTY1Ml1dLCBbJ3V1YXJyJywgWzg2NDhdXSwgWydVdW1sJywgWzIyMF1dLCBbJ3V1bWwnLCBbMjUyXV0sIFsndXdhbmdsZScsIFsxMDY2M11dLCBbJ3ZhbmdydCcsIFsxMDY1Ml1dLCBbJ3ZhcmVwc2lsb24nLCBbMTAxM11dLCBbJ3ZhcmthcHBhJywgWzEwMDhdXSwgWyd2YXJub3RoaW5nJywgWzg3MDldXSwgWyd2YXJwaGknLCBbOTgxXV0sIFsndmFycGknLCBbOTgyXV0sIFsndmFycHJvcHRvJywgWzg3MzNdXSwgWyd2YXJyJywgWzg1OTddXSwgWyd2QXJyJywgWzg2NjFdXSwgWyd2YXJyaG8nLCBbMTAwOV1dLCBbJ3ZhcnNpZ21hJywgWzk2Ml1dLCBbJ3ZhcnN1YnNldG5lcScsIFs4ODQyLCA2NTAyNF1dLCBbJ3ZhcnN1YnNldG5lcXEnLCBbMTA5NTUsIDY1MDI0XV0sIFsndmFyc3Vwc2V0bmVxJywgWzg4NDMsIDY1MDI0XV0sIFsndmFyc3Vwc2V0bmVxcScsIFsxMDk1NiwgNjUwMjRdXSwgWyd2YXJ0aGV0YScsIFs5NzddXSwgWyd2YXJ0cmlhbmdsZWxlZnQnLCBbODg4Ml1dLCBbJ3ZhcnRyaWFuZ2xlcmlnaHQnLCBbODg4M11dLCBbJ3ZCYXInLCBbMTA5ODRdXSwgWydWYmFyJywgWzEwOTg3XV0sIFsndkJhcnYnLCBbMTA5ODVdXSwgWydWY3knLCBbMTA0Ml1dLCBbJ3ZjeScsIFsxMDc0XV0sIFsndmRhc2gnLCBbODg2Nl1dLCBbJ3ZEYXNoJywgWzg4NzJdXSwgWydWZGFzaCcsIFs4ODczXV0sIFsnVkRhc2gnLCBbODg3NV1dLCBbJ1ZkYXNobCcsIFsxMDk4Ml1dLCBbJ3ZlZWJhcicsIFs4ODkxXV0sIFsndmVlJywgWzg3NDRdXSwgWydWZWUnLCBbODg5N11dLCBbJ3ZlZWVxJywgWzg3OTRdXSwgWyd2ZWxsaXAnLCBbODk0Ml1dLCBbJ3ZlcmJhcicsIFsxMjRdXSwgWydWZXJiYXInLCBbODIxNF1dLCBbJ3ZlcnQnLCBbMTI0XV0sIFsnVmVydCcsIFs4MjE0XV0sIFsnVmVydGljYWxCYXInLCBbODczOV1dLCBbJ1ZlcnRpY2FsTGluZScsIFsxMjRdXSwgWydWZXJ0aWNhbFNlcGFyYXRvcicsIFsxMDA3Ml1dLCBbJ1ZlcnRpY2FsVGlsZGUnLCBbODc2OF1dLCBbJ1ZlcnlUaGluU3BhY2UnLCBbODIwMl1dLCBbJ1ZmcicsIFsxMjAwODldXSwgWyd2ZnInLCBbMTIwMTE1XV0sIFsndmx0cmknLCBbODg4Ml1dLCBbJ3Zuc3ViJywgWzg4MzQsIDg0MDJdXSwgWyd2bnN1cCcsIFs4ODM1LCA4NDAyXV0sIFsnVm9wZicsIFsxMjAxNDFdXSwgWyd2b3BmJywgWzEyMDE2N11dLCBbJ3Zwcm9wJywgWzg3MzNdXSwgWyd2cnRyaScsIFs4ODgzXV0sIFsnVnNjcicsIFsxMTk5ODVdXSwgWyd2c2NyJywgWzEyMDAxMV1dLCBbJ3ZzdWJuRScsIFsxMDk1NSwgNjUwMjRdXSwgWyd2c3VibmUnLCBbODg0MiwgNjUwMjRdXSwgWyd2c3VwbkUnLCBbMTA5NTYsIDY1MDI0XV0sIFsndnN1cG5lJywgWzg4NDMsIDY1MDI0XV0sIFsnVnZkYXNoJywgWzg4NzRdXSwgWyd2emlnemFnJywgWzEwNjUwXV0sIFsnV2NpcmMnLCBbMzcyXV0sIFsnd2NpcmMnLCBbMzczXV0sIFsnd2VkYmFyJywgWzEwODQ3XV0sIFsnd2VkZ2UnLCBbODc0M11dLCBbJ1dlZGdlJywgWzg4OTZdXSwgWyd3ZWRnZXEnLCBbODc5M11dLCBbJ3dlaWVycCcsIFs4NDcyXV0sIFsnV2ZyJywgWzEyMDA5MF1dLCBbJ3dmcicsIFsxMjAxMTZdXSwgWydXb3BmJywgWzEyMDE0Ml1dLCBbJ3dvcGYnLCBbMTIwMTY4XV0sIFsnd3AnLCBbODQ3Ml1dLCBbJ3dyJywgWzg3NjhdXSwgWyd3cmVhdGgnLCBbODc2OF1dLCBbJ1dzY3InLCBbMTE5OTg2XV0sIFsnd3NjcicsIFsxMjAwMTJdXSwgWyd4Y2FwJywgWzg4OThdXSwgWyd4Y2lyYycsIFs5NzExXV0sIFsneGN1cCcsIFs4ODk5XV0sIFsneGR0cmknLCBbOTY2MV1dLCBbJ1hmcicsIFsxMjAwOTFdXSwgWyd4ZnInLCBbMTIwMTE3XV0sIFsneGhhcnInLCBbMTAyMzFdXSwgWyd4aEFycicsIFsxMDIzNF1dLCBbJ1hpJywgWzkyNl1dLCBbJ3hpJywgWzk1OF1dLCBbJ3hsYXJyJywgWzEwMjI5XV0sIFsneGxBcnInLCBbMTAyMzJdXSwgWyd4bWFwJywgWzEwMjM2XV0sIFsneG5pcycsIFs4OTU1XV0sIFsneG9kb3QnLCBbMTA3NTJdXSwgWydYb3BmJywgWzEyMDE0M11dLCBbJ3hvcGYnLCBbMTIwMTY5XV0sIFsneG9wbHVzJywgWzEwNzUzXV0sIFsneG90aW1lJywgWzEwNzU0XV0sIFsneHJhcnInLCBbMTAyMzBdXSwgWyd4ckFycicsIFsxMDIzM11dLCBbJ1hzY3InLCBbMTE5OTg3XV0sIFsneHNjcicsIFsxMjAwMTNdXSwgWyd4c3FjdXAnLCBbMTA3NThdXSwgWyd4dXBsdXMnLCBbMTA3NTZdXSwgWyd4dXRyaScsIFs5NjUxXV0sIFsneHZlZScsIFs4ODk3XV0sIFsneHdlZGdlJywgWzg4OTZdXSwgWydZYWN1dGUnLCBbMjIxXV0sIFsneWFjdXRlJywgWzI1M11dLCBbJ1lBY3knLCBbMTA3MV1dLCBbJ3lhY3knLCBbMTEwM11dLCBbJ1ljaXJjJywgWzM3NF1dLCBbJ3ljaXJjJywgWzM3NV1dLCBbJ1ljeScsIFsxMDY3XV0sIFsneWN5JywgWzEwOTldXSwgWyd5ZW4nLCBbMTY1XV0sIFsnWWZyJywgWzEyMDA5Ml1dLCBbJ3lmcicsIFsxMjAxMThdXSwgWydZSWN5JywgWzEwMzFdXSwgWyd5aWN5JywgWzExMTFdXSwgWydZb3BmJywgWzEyMDE0NF1dLCBbJ3lvcGYnLCBbMTIwMTcwXV0sIFsnWXNjcicsIFsxMTk5ODhdXSwgWyd5c2NyJywgWzEyMDAxNF1dLCBbJ1lVY3knLCBbMTA3MF1dLCBbJ3l1Y3knLCBbMTEwMl1dLCBbJ3l1bWwnLCBbMjU1XV0sIFsnWXVtbCcsIFszNzZdXSwgWydaYWN1dGUnLCBbMzc3XV0sIFsnemFjdXRlJywgWzM3OF1dLCBbJ1pjYXJvbicsIFszODFdXSwgWyd6Y2Fyb24nLCBbMzgyXV0sIFsnWmN5JywgWzEwNDddXSwgWyd6Y3knLCBbMTA3OV1dLCBbJ1pkb3QnLCBbMzc5XV0sIFsnemRvdCcsIFszODBdXSwgWyd6ZWV0cmYnLCBbODQ4OF1dLCBbJ1plcm9XaWR0aFNwYWNlJywgWzgyMDNdXSwgWydaZXRhJywgWzkxOF1dLCBbJ3pldGEnLCBbOTUwXV0sIFsnemZyJywgWzEyMDExOV1dLCBbJ1pmcicsIFs4NDg4XV0sIFsnWkhjeScsIFsxMDQ2XV0sIFsnemhjeScsIFsxMDc4XV0sIFsnemlncmFycicsIFs4NjY5XV0sIFsnem9wZicsIFsxMjAxNzFdXSwgWydab3BmJywgWzg0ODRdXSwgWydac2NyJywgWzExOTk4OV1dLCBbJ3pzY3InLCBbMTIwMDE1XV0sIFsnendqJywgWzgyMDVdXSwgWyd6d25qJywgWzgyMDRdXV07XG5cbnZhciBhbHBoYUluZGV4ID0ge307XG52YXIgY2hhckluZGV4ID0ge307XG5cbmNyZWF0ZUluZGV4ZXMoYWxwaGFJbmRleCwgY2hhckluZGV4KTtcblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gSHRtbDVFbnRpdGllcygpIHt9XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuSHRtbDVFbnRpdGllcy5wcm90b3R5cGUuZGVjb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgaWYgKCFzdHIgfHwgIXN0ci5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyYoIz9bXFx3XFxkXSspOz8vZywgZnVuY3Rpb24ocywgZW50aXR5KSB7XG4gICAgICAgIHZhciBjaHI7XG4gICAgICAgIGlmIChlbnRpdHkuY2hhckF0KDApID09PSBcIiNcIikge1xuICAgICAgICAgICAgdmFyIGNvZGUgPSBlbnRpdHkuY2hhckF0KDEpID09PSAneCcgP1xuICAgICAgICAgICAgICAgIHBhcnNlSW50KGVudGl0eS5zdWJzdHIoMikudG9Mb3dlckNhc2UoKSwgMTYpIDpcbiAgICAgICAgICAgICAgICBwYXJzZUludChlbnRpdHkuc3Vic3RyKDEpKTtcblxuICAgICAgICAgICAgaWYgKCEoaXNOYU4oY29kZSkgfHwgY29kZSA8IC0zMjc2OCB8fCBjb2RlID4gNjU1MzUpKSB7XG4gICAgICAgICAgICAgICAgY2hyID0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNociA9IGFscGhhSW5kZXhbZW50aXR5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hyIHx8IHM7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbiBIdG1sNUVudGl0aWVzLmRlY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgSHRtbDVFbnRpdGllcygpLmRlY29kZShzdHIpO1xuIH07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuSHRtbDVFbnRpdGllcy5wcm90b3R5cGUuZW5jb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgaWYgKCFzdHIgfHwgIXN0ci5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB2YXIgc3RyTGVuZ3RoID0gc3RyLmxlbmd0aDtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyTGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFySW5mbyA9IGNoYXJJbmRleFtzdHIuY2hhckNvZGVBdChpKV07XG4gICAgICAgIGlmIChjaGFySW5mbykge1xuICAgICAgICAgICAgdmFyIGFscGhhID0gY2hhckluZm9bc3RyLmNoYXJDb2RlQXQoaSArIDEpXTtcbiAgICAgICAgICAgIGlmIChhbHBoYSkge1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxwaGEgPSBjaGFySW5mb1snJ107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYWxwaGEpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCImXCIgKyBhbHBoYSArIFwiO1wiO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgKz0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG4gSHRtbDVFbnRpdGllcy5lbmNvZGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gbmV3IEh0bWw1RW50aXRpZXMoKS5lbmNvZGUoc3RyKTtcbiB9O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw1RW50aXRpZXMucHJvdG90eXBlLmVuY29kZU5vblVURiA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGlmICghc3RyIHx8ICFzdHIubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFyIHN0ckxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ckxlbmd0aCkge1xuICAgICAgICB2YXIgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICB2YXIgY2hhckluZm8gPSBjaGFySW5kZXhbY107XG4gICAgICAgIGlmIChjaGFySW5mbykge1xuICAgICAgICAgICAgdmFyIGFscGhhID0gY2hhckluZm9bc3RyLmNoYXJDb2RlQXQoaSArIDEpXTtcbiAgICAgICAgICAgIGlmIChhbHBoYSkge1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxwaGEgPSBjaGFySW5mb1snJ107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYWxwaGEpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCImXCIgKyBhbHBoYSArIFwiO1wiO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYyA8IDMyIHx8IGMgPiAxMjYpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAnJiMnICsgYyArICc7JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBzdHIuY2hhckF0KGkpO1xuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuIEh0bWw1RW50aXRpZXMuZW5jb2RlTm9uVVRGID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIG5ldyBIdG1sNUVudGl0aWVzKCkuZW5jb2RlTm9uVVRGKHN0cik7XG4gfTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5IdG1sNUVudGl0aWVzLnByb3RvdHlwZS5lbmNvZGVOb25BU0NJSSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGlmICghc3RyIHx8ICFzdHIubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFyIHN0ckxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ckxlbmd0aCkge1xuICAgICAgICB2YXIgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAoYyA8PSAyNTUpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBzdHJbaSsrXTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCArPSAnJiMnICsgYyArICc7JztcbiAgICAgICAgaSsrXG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbiBIdG1sNUVudGl0aWVzLmVuY29kZU5vbkFTQ0lJID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIG5ldyBIdG1sNUVudGl0aWVzKCkuZW5jb2RlTm9uQVNDSUkoc3RyKTtcbiB9O1xuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBhbHBoYUluZGV4IFBhc3NlZCBieSByZWZlcmVuY2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY2hhckluZGV4IFBhc3NlZCBieSByZWZlcmVuY2UuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluZGV4ZXMoYWxwaGFJbmRleCwgY2hhckluZGV4KSB7XG4gICAgdmFyIGkgPSBFTlRJVElFUy5sZW5ndGg7XG4gICAgdmFyIF9yZXN1bHRzID0gW107XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgICB2YXIgZSA9IEVOVElUSUVTW2ldO1xuICAgICAgICB2YXIgYWxwaGEgPSBlWzBdO1xuICAgICAgICB2YXIgY2hhcnMgPSBlWzFdO1xuICAgICAgICB2YXIgY2hyID0gY2hhcnNbMF07XG4gICAgICAgIHZhciBhZGRDaGFyID0gKGNociA8IDMyIHx8IGNociA+IDEyNikgfHwgY2hyID09PSA2MiB8fCBjaHIgPT09IDYwIHx8IGNociA9PT0gMzggfHwgY2hyID09PSAzNCB8fCBjaHIgPT09IDM5O1xuICAgICAgICB2YXIgY2hhckluZm87XG4gICAgICAgIGlmIChhZGRDaGFyKSB7XG4gICAgICAgICAgICBjaGFySW5mbyA9IGNoYXJJbmRleFtjaHJdID0gY2hhckluZGV4W2Nocl0gfHwge307XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXJzWzFdKSB7XG4gICAgICAgICAgICB2YXIgY2hyMiA9IGNoYXJzWzFdO1xuICAgICAgICAgICAgYWxwaGFJbmRleFthbHBoYV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocikgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjIpO1xuICAgICAgICAgICAgX3Jlc3VsdHMucHVzaChhZGRDaGFyICYmIChjaGFySW5mb1tjaHIyXSA9IGFscGhhKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbHBoYUluZGV4W2FscGhhXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyKTtcbiAgICAgICAgICAgIF9yZXN1bHRzLnB1c2goYWRkQ2hhciAmJiAoY2hhckluZm9bJyddID0gYWxwaGEpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBIdG1sNUVudGl0aWVzO1xuIiwidmFyIEFMUEhBX0lOREVYID0ge1xuICAgICcmbHQnOiAnPCcsXG4gICAgJyZndCc6ICc+JyxcbiAgICAnJnF1b3QnOiAnXCInLFxuICAgICcmYXBvcyc6ICdcXCcnLFxuICAgICcmYW1wJzogJyYnLFxuICAgICcmbHQ7JzogJzwnLFxuICAgICcmZ3Q7JzogJz4nLFxuICAgICcmcXVvdDsnOiAnXCInLFxuICAgICcmYXBvczsnOiAnXFwnJyxcbiAgICAnJmFtcDsnOiAnJidcbn07XG5cbnZhciBDSEFSX0lOREVYID0ge1xuICAgIDYwOiAnbHQnLFxuICAgIDYyOiAnZ3QnLFxuICAgIDM0OiAncXVvdCcsXG4gICAgMzk6ICdhcG9zJyxcbiAgICAzODogJ2FtcCdcbn07XG5cbnZhciBDSEFSX1NfSU5ERVggPSB7XG4gICAgJzwnOiAnJmx0OycsXG4gICAgJz4nOiAnJmd0OycsXG4gICAgJ1wiJzogJyZxdW90OycsXG4gICAgJ1xcJyc6ICcmYXBvczsnLFxuICAgICcmJzogJyZhbXA7J1xufTtcblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gWG1sRW50aXRpZXMoKSB7fVxuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cblhtbEVudGl0aWVzLnByb3RvdHlwZS5lbmNvZGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICBpZiAoIXN0ciB8fCAhc3RyLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvPHw+fFwifCd8Ji9nLCBmdW5jdGlvbihzKSB7XG4gICAgICAgIHJldHVybiBDSEFSX1NfSU5ERVhbc107XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbiBYbWxFbnRpdGllcy5lbmNvZGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gbmV3IFhtbEVudGl0aWVzKCkuZW5jb2RlKHN0cik7XG4gfTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5YbWxFbnRpdGllcy5wcm90b3R5cGUuZGVjb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgaWYgKCFzdHIgfHwgIXN0ci5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyYjP1swLTlhLXpBLVpdKzs/L2csIGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgaWYgKHMuY2hhckF0KDEpID09PSAnIycpIHtcbiAgICAgICAgICAgIHZhciBjb2RlID0gcy5jaGFyQXQoMikudG9Mb3dlckNhc2UoKSA9PT0gJ3gnID9cbiAgICAgICAgICAgICAgICBwYXJzZUludChzLnN1YnN0cigzKSwgMTYpIDpcbiAgICAgICAgICAgICAgICBwYXJzZUludChzLnN1YnN0cigyKSk7XG5cbiAgICAgICAgICAgIGlmIChpc05hTihjb2RlKSB8fCBjb2RlIDwgLTMyNzY4IHx8IGNvZGUgPiA2NTUzNSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBBTFBIQV9JTkRFWFtzXSB8fCBzO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG4gWG1sRW50aXRpZXMuZGVjb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIG5ldyBYbWxFbnRpdGllcygpLmRlY29kZShzdHIpO1xuIH07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuWG1sRW50aXRpZXMucHJvdG90eXBlLmVuY29kZU5vblVURiA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGlmICghc3RyIHx8ICFzdHIubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFyIHN0ckxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ckxlbmd0aCkge1xuICAgICAgICB2YXIgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICB2YXIgYWxwaGEgPSBDSEFSX0lOREVYW2NdO1xuICAgICAgICBpZiAoYWxwaGEpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBcIiZcIiArIGFscGhhICsgXCI7XCI7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYyA8IDMyIHx8IGMgPiAxMjYpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAnJiMnICsgYyArICc7JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBzdHIuY2hhckF0KGkpO1xuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuIFhtbEVudGl0aWVzLmVuY29kZU5vblVURiA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgWG1sRW50aXRpZXMoKS5lbmNvZGVOb25VVEYoc3RyKTtcbiB9O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cblhtbEVudGl0aWVzLnByb3RvdHlwZS5lbmNvZGVOb25BU0NJSSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGlmICghc3RyIHx8ICFzdHIubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFyIHN0ckxlbmdodCA9IHN0ci5sZW5ndGg7XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ckxlbmdodCkge1xuICAgICAgICB2YXIgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAoYyA8PSAyNTUpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBzdHJbaSsrXTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCArPSAnJiMnICsgYyArICc7JztcbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG4gWG1sRW50aXRpZXMuZW5jb2RlTm9uQVNDSUkgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gbmV3IFhtbEVudGl0aWVzKCkuZW5jb2RlTm9uQVNDSUkoc3RyKTtcbiB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFhtbEVudGl0aWVzO1xuIiwidmFyIHNjb3BlID0gKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsKSB8fFxuICAgICAgICAgICAgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYpIHx8XG4gICAgICAgICAgICB3aW5kb3c7XG52YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkge1xuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVvdXQuY2xvc2UoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbChzY29wZSwgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIHNldGltbWVkaWF0ZSBhdHRhY2hlcyBpdHNlbGYgdG8gdGhlIGdsb2JhbCBvYmplY3RcbnJlcXVpcmUoXCJzZXRpbW1lZGlhdGVcIik7XG4vLyBPbiBzb21lIGV4b3RpYyBlbnZpcm9ubWVudHMsIGl0J3Mgbm90IGNsZWFyIHdoaWNoIG9iamVjdCBgc2V0aW1tZWRpYXRlYCB3YXNcbi8vIGFibGUgdG8gaW5zdGFsbCBvbnRvLiAgU2VhcmNoIGVhY2ggcG9zc2liaWxpdHkgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlXG4vLyBgc2V0aW1tZWRpYXRlYCBsaWJyYXJ5LlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuc2V0SW1tZWRpYXRlKTtcbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5jbGVhckltbWVkaWF0ZSk7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxuLy8gSWYgb2JqLmhhc093blByb3BlcnR5IGhhcyBiZWVuIG92ZXJyaWRkZW4sIHRoZW4gY2FsbGluZ1xuLy8gb2JqLmhhc093blByb3BlcnR5KHByb3ApIHdpbGwgYnJlYWsuXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9qb3llbnQvbm9kZS9pc3N1ZXMvMTcwN1xuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihxcywgc2VwLCBlcSwgb3B0aW9ucykge1xuICBzZXAgPSBzZXAgfHwgJyYnO1xuICBlcSA9IGVxIHx8ICc9JztcbiAgdmFyIG9iaiA9IHt9O1xuXG4gIGlmICh0eXBlb2YgcXMgIT09ICdzdHJpbmcnIHx8IHFzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICB2YXIgcmVnZXhwID0gL1xcKy9nO1xuICBxcyA9IHFzLnNwbGl0KHNlcCk7XG5cbiAgdmFyIG1heEtleXMgPSAxMDAwO1xuICBpZiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5tYXhLZXlzID09PSAnbnVtYmVyJykge1xuICAgIG1heEtleXMgPSBvcHRpb25zLm1heEtleXM7XG4gIH1cblxuICB2YXIgbGVuID0gcXMubGVuZ3RoO1xuICAvLyBtYXhLZXlzIDw9IDAgbWVhbnMgdGhhdCB3ZSBzaG91bGQgbm90IGxpbWl0IGtleXMgY291bnRcbiAgaWYgKG1heEtleXMgPiAwICYmIGxlbiA+IG1heEtleXMpIHtcbiAgICBsZW4gPSBtYXhLZXlzO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciB4ID0gcXNbaV0ucmVwbGFjZShyZWdleHAsICclMjAnKSxcbiAgICAgICAgaWR4ID0geC5pbmRleE9mKGVxKSxcbiAgICAgICAga3N0ciwgdnN0ciwgaywgdjtcblxuICAgIGlmIChpZHggPj0gMCkge1xuICAgICAga3N0ciA9IHguc3Vic3RyKDAsIGlkeCk7XG4gICAgICB2c3RyID0geC5zdWJzdHIoaWR4ICsgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtzdHIgPSB4O1xuICAgICAgdnN0ciA9ICcnO1xuICAgIH1cblxuICAgIGsgPSBkZWNvZGVVUklDb21wb25lbnQoa3N0cik7XG4gICAgdiA9IGRlY29kZVVSSUNvbXBvbmVudCh2c3RyKTtcblxuICAgIGlmICghaGFzT3duUHJvcGVydHkob2JqLCBrKSkge1xuICAgICAgb2JqW2tdID0gdjtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgb2JqW2tdLnB1c2godik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9ialtrXSA9IFtvYmpba10sIHZdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHhzKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeHMpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBzdHJpbmdpZnlQcmltaXRpdmUgPSBmdW5jdGlvbih2KSB7XG4gIHN3aXRjaCAodHlwZW9mIHYpIHtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgcmV0dXJuIHY7XG5cbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIHJldHVybiB2ID8gJ3RydWUnIDogJ2ZhbHNlJztcblxuICAgIGNhc2UgJ251bWJlcic6XG4gICAgICByZXR1cm4gaXNGaW5pdGUodikgPyB2IDogJyc7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iaiwgc2VwLCBlcSwgbmFtZSkge1xuICBzZXAgPSBzZXAgfHwgJyYnO1xuICBlcSA9IGVxIHx8ICc9JztcbiAgaWYgKG9iaiA9PT0gbnVsbCkge1xuICAgIG9iaiA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBtYXAob2JqZWN0S2V5cyhvYmopLCBmdW5jdGlvbihrKSB7XG4gICAgICB2YXIga3MgPSBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKGspKSArIGVxO1xuICAgICAgaWYgKGlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgICByZXR1cm4gbWFwKG9ialtrXSwgZnVuY3Rpb24odikge1xuICAgICAgICAgIHJldHVybiBrcyArIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUodikpO1xuICAgICAgICB9KS5qb2luKHNlcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ga3MgKyBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG9ialtrXSkpO1xuICAgICAgfVxuICAgIH0pLmpvaW4oc2VwKTtcblxuICB9XG5cbiAgaWYgKCFuYW1lKSByZXR1cm4gJyc7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG5hbWUpKSArIGVxICtcbiAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUob2JqKSk7XG59O1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHhzKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeHMpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxuZnVuY3Rpb24gbWFwICh4cywgZikge1xuICBpZiAoeHMubWFwKSByZXR1cm4geHMubWFwKGYpO1xuICB2YXIgcmVzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspIHtcbiAgICByZXMucHVzaChmKHhzW2ldLCBpKSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxudmFyIG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiAob2JqKSB7XG4gIHZhciByZXMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSByZXMucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLmRlY29kZSA9IGV4cG9ydHMucGFyc2UgPSByZXF1aXJlKCcuL2RlY29kZScpO1xuZXhwb3J0cy5lbmNvZGUgPSBleHBvcnRzLnN0cmluZ2lmeSA9IHJlcXVpcmUoJy4vZW5jb2RlJyk7XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciByZWdpc3RlckltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgICAgLy8gQ2FsbGJhY2sgY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuZXcgRnVuY3Rpb24oXCJcIiArIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIC8vIENvcHkgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXTtcbiAgICAgIH1cbiAgICAgIC8vIFN0b3JlIGFuZCByZWdpc3RlciB0aGUgdGFza1xuICAgICAgdmFyIHRhc2sgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgYXJnczogYXJncyB9O1xuICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHRhc2s7XG4gICAgICByZWdpc3RlckltbWVkaWF0ZShuZXh0SGFuZGxlKTtcbiAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHRhc2spIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgdmFyIGFyZ3MgPSB0YXNrLmFyZ3M7XG4gICAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydW4odGFzayk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMgOiBnbG9iYWwgOiBzZWxmKSk7XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiLyohXG4gKiBWdWUuanMgdjIuNi40XG4gKiAoYykgMjAxNC0yMDE5IEV2YW4gWW91XG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cbiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKHQpOihlPWV8fHNlbGYpLlZ1ZT10KCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1PYmplY3QuZnJlZXplKHt9KTtmdW5jdGlvbiB0KGUpe3JldHVybiBudWxsPT1lfWZ1bmN0aW9uIG4oZSl7cmV0dXJuIG51bGwhPWV9ZnVuY3Rpb24gcihlKXtyZXR1cm4hMD09PWV9ZnVuY3Rpb24gaShlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZXx8XCJudW1iZXJcIj09dHlwZW9mIGV8fFwic3ltYm9sXCI9PXR5cGVvZiBlfHxcImJvb2xlYW5cIj09dHlwZW9mIGV9ZnVuY3Rpb24gbyhlKXtyZXR1cm4gbnVsbCE9PWUmJlwib2JqZWN0XCI9PXR5cGVvZiBlfXZhciBhPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7ZnVuY3Rpb24gcyhlKXtyZXR1cm5cIltvYmplY3QgT2JqZWN0XVwiPT09YS5jYWxsKGUpfWZ1bmN0aW9uIGMoZSl7dmFyIHQ9cGFyc2VGbG9hdChTdHJpbmcoZSkpO3JldHVybiB0Pj0wJiZNYXRoLmZsb29yKHQpPT09dCYmaXNGaW5pdGUoZSl9ZnVuY3Rpb24gdShlKXtyZXR1cm4gbihlKSYmXCJmdW5jdGlvblwiPT10eXBlb2YgZS50aGVuJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLmNhdGNofWZ1bmN0aW9uIGwoZSl7cmV0dXJuIG51bGw9PWU/XCJcIjpBcnJheS5pc0FycmF5KGUpfHxzKGUpJiZlLnRvU3RyaW5nPT09YT9KU09OLnN0cmluZ2lmeShlLG51bGwsMik6U3RyaW5nKGUpfWZ1bmN0aW9uIGYoZSl7dmFyIHQ9cGFyc2VGbG9hdChlKTtyZXR1cm4gaXNOYU4odCk/ZTp0fWZ1bmN0aW9uIHAoZSx0KXtmb3IodmFyIG49T2JqZWN0LmNyZWF0ZShudWxsKSxyPWUuc3BsaXQoXCIsXCIpLGk9MDtpPHIubGVuZ3RoO2krKyluW3JbaV1dPSEwO3JldHVybiB0P2Z1bmN0aW9uKGUpe3JldHVybiBuW2UudG9Mb3dlckNhc2UoKV19OmZ1bmN0aW9uKGUpe3JldHVybiBuW2VdfX12YXIgZD1wKFwic2xvdCxjb21wb25lbnRcIiwhMCksdj1wKFwia2V5LHJlZixzbG90LHNsb3Qtc2NvcGUsaXNcIik7ZnVuY3Rpb24gaChlLHQpe2lmKGUubGVuZ3RoKXt2YXIgbj1lLmluZGV4T2YodCk7aWYobj4tMSlyZXR1cm4gZS5zcGxpY2UobiwxKX19dmFyIG09T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtmdW5jdGlvbiB5KGUsdCl7cmV0dXJuIG0uY2FsbChlLHQpfWZ1bmN0aW9uIGcoZSl7dmFyIHQ9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm4gZnVuY3Rpb24obil7cmV0dXJuIHRbbl18fCh0W25dPWUobikpfX12YXIgXz0vLShcXHcpL2csYj1nKGZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoXyxmdW5jdGlvbihlLHQpe3JldHVybiB0P3QudG9VcHBlckNhc2UoKTpcIlwifSl9KSwkPWcoZnVuY3Rpb24oZSl7cmV0dXJuIGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZS5zbGljZSgxKX0pLHc9L1xcQihbQS1aXSkvZyxDPWcoZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVwbGFjZSh3LFwiLSQxXCIpLnRvTG93ZXJDYXNlKCl9KTt2YXIgeD1GdW5jdGlvbi5wcm90b3R5cGUuYmluZD9mdW5jdGlvbihlLHQpe3JldHVybiBlLmJpbmQodCl9OmZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gbihuKXt2YXIgcj1hcmd1bWVudHMubGVuZ3RoO3JldHVybiByP3I+MT9lLmFwcGx5KHQsYXJndW1lbnRzKTplLmNhbGwodCxuKTplLmNhbGwodCl9cmV0dXJuIG4uX2xlbmd0aD1lLmxlbmd0aCxufTtmdW5jdGlvbiBBKGUsdCl7dD10fHwwO2Zvcih2YXIgbj1lLmxlbmd0aC10LHI9bmV3IEFycmF5KG4pO24tLTspcltuXT1lW24rdF07cmV0dXJuIHJ9ZnVuY3Rpb24gayhlLHQpe2Zvcih2YXIgbiBpbiB0KWVbbl09dFtuXTtyZXR1cm4gZX1mdW5jdGlvbiBPKGUpe2Zvcih2YXIgdD17fSxuPTA7bjxlLmxlbmd0aDtuKyspZVtuXSYmayh0LGVbbl0pO3JldHVybiB0fWZ1bmN0aW9uIFMoZSx0LG4pe312YXIgVD1mdW5jdGlvbihlLHQsbil7cmV0dXJuITF9LEU9ZnVuY3Rpb24oZSl7cmV0dXJuIGV9O2Z1bmN0aW9uIE4oZSx0KXtpZihlPT09dClyZXR1cm4hMDt2YXIgbj1vKGUpLHI9byh0KTtpZighbnx8IXIpcmV0dXJuIW4mJiFyJiZTdHJpbmcoZSk9PT1TdHJpbmcodCk7dHJ5e3ZhciBpPUFycmF5LmlzQXJyYXkoZSksYT1BcnJheS5pc0FycmF5KHQpO2lmKGkmJmEpcmV0dXJuIGUubGVuZ3RoPT09dC5sZW5ndGgmJmUuZXZlcnkoZnVuY3Rpb24oZSxuKXtyZXR1cm4gTihlLHRbbl0pfSk7aWYoZSBpbnN0YW5jZW9mIERhdGUmJnQgaW5zdGFuY2VvZiBEYXRlKXJldHVybiBlLmdldFRpbWUoKT09PXQuZ2V0VGltZSgpO2lmKGl8fGEpcmV0dXJuITE7dmFyIHM9T2JqZWN0LmtleXMoZSksYz1PYmplY3Qua2V5cyh0KTtyZXR1cm4gcy5sZW5ndGg9PT1jLmxlbmd0aCYmcy5ldmVyeShmdW5jdGlvbihuKXtyZXR1cm4gTihlW25dLHRbbl0pfSl9Y2F0Y2goZSl7cmV0dXJuITF9fWZ1bmN0aW9uIGooZSx0KXtmb3IodmFyIG49MDtuPGUubGVuZ3RoO24rKylpZihOKGVbbl0sdCkpcmV0dXJuIG47cmV0dXJuLTF9ZnVuY3Rpb24gTChlKXt2YXIgdD0hMTtyZXR1cm4gZnVuY3Rpb24oKXt0fHwodD0hMCxlLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9fXZhciBNPVwiZGF0YS1zZXJ2ZXItcmVuZGVyZWRcIixJPVtcImNvbXBvbmVudFwiLFwiZGlyZWN0aXZlXCIsXCJmaWx0ZXJcIl0sRD1bXCJiZWZvcmVDcmVhdGVcIixcImNyZWF0ZWRcIixcImJlZm9yZU1vdW50XCIsXCJtb3VudGVkXCIsXCJiZWZvcmVVcGRhdGVcIixcInVwZGF0ZWRcIixcImJlZm9yZURlc3Ryb3lcIixcImRlc3Ryb3llZFwiLFwiYWN0aXZhdGVkXCIsXCJkZWFjdGl2YXRlZFwiLFwiZXJyb3JDYXB0dXJlZFwiLFwic2VydmVyUHJlZmV0Y2hcIl0sUD17b3B0aW9uTWVyZ2VTdHJhdGVnaWVzOk9iamVjdC5jcmVhdGUobnVsbCksc2lsZW50OiExLHByb2R1Y3Rpb25UaXA6ITEsZGV2dG9vbHM6ITEscGVyZm9ybWFuY2U6ITEsZXJyb3JIYW5kbGVyOm51bGwsd2FybkhhbmRsZXI6bnVsbCxpZ25vcmVkRWxlbWVudHM6W10sa2V5Q29kZXM6T2JqZWN0LmNyZWF0ZShudWxsKSxpc1Jlc2VydmVkVGFnOlQsaXNSZXNlcnZlZEF0dHI6VCxpc1Vua25vd25FbGVtZW50OlQsZ2V0VGFnTmFtZXNwYWNlOlMscGFyc2VQbGF0Zm9ybVRhZ05hbWU6RSxtdXN0VXNlUHJvcDpULGFzeW5jOiEwLF9saWZlY3ljbGVIb29rczpEfTtmdW5jdGlvbiBSKGUsdCxuLHIpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOm4sZW51bWVyYWJsZTohIXIsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfSl9dmFyIEY9bmV3IFJlZ0V4cChcIlteYS16QS1aXFx4YjdcXHhjMC1cXHhkNlxceGQ4LVxceGY2XFx4ZjgtXFx1MDM3ZFxcdTAzN2YtXFx1MWZmZlxcdTIwMGMtXFx1MjAwZFxcdTIwM2YtXFx1MjA0MFxcdTIwNzAtXFx1MjE4ZlxcdTJjMDAtXFx1MmZlZlxcdTMwMDEtXFx1ZDdmZlxcdWY5MDAtXFx1ZmRjZlxcdWZkZjAtXFx1ZmZmZC4kX1xcXFxkXVwiKTt2YXIgSCxCPVwiX19wcm90b19fXCJpbnt9LFU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyx6PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBXWEVudmlyb25tZW50JiYhIVdYRW52aXJvbm1lbnQucGxhdGZvcm0sVj16JiZXWEVudmlyb25tZW50LnBsYXRmb3JtLnRvTG93ZXJDYXNlKCksSz1VJiZ3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLEo9SyYmL21zaWV8dHJpZGVudC8udGVzdChLKSxxPUsmJksuaW5kZXhPZihcIm1zaWUgOS4wXCIpPjAsVz1LJiZLLmluZGV4T2YoXCJlZGdlL1wiKT4wLFo9KEsmJksuaW5kZXhPZihcImFuZHJvaWRcIiksSyYmL2lwaG9uZXxpcGFkfGlwb2R8aW9zLy50ZXN0KEspfHxcImlvc1wiPT09ViksRz0oSyYmL2Nocm9tZVxcL1xcZCsvLnRlc3QoSyksSyYmL3BoYW50b21qcy8udGVzdChLKSxLJiZLLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLykpLFg9e30ud2F0Y2gsWT0hMTtpZihVKXRyeXt2YXIgUT17fTtPYmplY3QuZGVmaW5lUHJvcGVydHkoUSxcInBhc3NpdmVcIix7Z2V0OmZ1bmN0aW9uKCl7WT0hMH19KSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRlc3QtcGFzc2l2ZVwiLG51bGwsUSl9Y2F0Y2goZSl7fXZhciBlZT1mdW5jdGlvbigpe3JldHVybiB2b2lkIDA9PT1IJiYoSD0hVSYmIXomJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWwmJihnbG9iYWwucHJvY2VzcyYmXCJzZXJ2ZXJcIj09PWdsb2JhbC5wcm9jZXNzLmVudi5WVUVfRU5WKSksSH0sdGU9VSYmd2luZG93Ll9fVlVFX0RFVlRPT0xTX0dMT0JBTF9IT09LX187ZnVuY3Rpb24gbmUoZSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmL25hdGl2ZSBjb2RlLy50ZXN0KGUudG9TdHJpbmcoKSl9dmFyIHJlLGllPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJm5lKFN5bWJvbCkmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBSZWZsZWN0JiZuZShSZWZsZWN0Lm93bktleXMpO3JlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTZXQmJm5lKFNldCk/U2V0OmZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe3RoaXMuc2V0PU9iamVjdC5jcmVhdGUobnVsbCl9cmV0dXJuIGUucHJvdG90eXBlLmhhcz1mdW5jdGlvbihlKXtyZXR1cm4hMD09PXRoaXMuc2V0W2VdfSxlLnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24oZSl7dGhpcy5zZXRbZV09ITB9LGUucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5zZXQ9T2JqZWN0LmNyZWF0ZShudWxsKX0sZX0oKTt2YXIgb2U9UyxhZT0wLHNlPWZ1bmN0aW9uKCl7dGhpcy5pZD1hZSsrLHRoaXMuc3Vicz1bXX07c2UucHJvdG90eXBlLmFkZFN1Yj1mdW5jdGlvbihlKXt0aGlzLnN1YnMucHVzaChlKX0sc2UucHJvdG90eXBlLnJlbW92ZVN1Yj1mdW5jdGlvbihlKXtoKHRoaXMuc3VicyxlKX0sc2UucHJvdG90eXBlLmRlcGVuZD1mdW5jdGlvbigpe3NlLnRhcmdldCYmc2UudGFyZ2V0LmFkZERlcCh0aGlzKX0sc2UucHJvdG90eXBlLm5vdGlmeT1mdW5jdGlvbigpe2Zvcih2YXIgZT10aGlzLnN1YnMuc2xpY2UoKSx0PTAsbj1lLmxlbmd0aDt0PG47dCsrKWVbdF0udXBkYXRlKCl9LHNlLnRhcmdldD1udWxsO3ZhciBjZT1bXTtmdW5jdGlvbiB1ZShlKXtjZS5wdXNoKGUpLHNlLnRhcmdldD1lfWZ1bmN0aW9uIGxlKCl7Y2UucG9wKCksc2UudGFyZ2V0PWNlW2NlLmxlbmd0aC0xXX12YXIgZmU9ZnVuY3Rpb24oZSx0LG4scixpLG8sYSxzKXt0aGlzLnRhZz1lLHRoaXMuZGF0YT10LHRoaXMuY2hpbGRyZW49bix0aGlzLnRleHQ9cix0aGlzLmVsbT1pLHRoaXMubnM9dm9pZCAwLHRoaXMuY29udGV4dD1vLHRoaXMuZm5Db250ZXh0PXZvaWQgMCx0aGlzLmZuT3B0aW9ucz12b2lkIDAsdGhpcy5mblNjb3BlSWQ9dm9pZCAwLHRoaXMua2V5PXQmJnQua2V5LHRoaXMuY29tcG9uZW50T3B0aW9ucz1hLHRoaXMuY29tcG9uZW50SW5zdGFuY2U9dm9pZCAwLHRoaXMucGFyZW50PXZvaWQgMCx0aGlzLnJhdz0hMSx0aGlzLmlzU3RhdGljPSExLHRoaXMuaXNSb290SW5zZXJ0PSEwLHRoaXMuaXNDb21tZW50PSExLHRoaXMuaXNDbG9uZWQ9ITEsdGhpcy5pc09uY2U9ITEsdGhpcy5hc3luY0ZhY3Rvcnk9cyx0aGlzLmFzeW5jTWV0YT12b2lkIDAsdGhpcy5pc0FzeW5jUGxhY2Vob2xkZXI9ITF9LHBlPXtjaGlsZDp7Y29uZmlndXJhYmxlOiEwfX07cGUuY2hpbGQuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29tcG9uZW50SW5zdGFuY2V9LE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGZlLnByb3RvdHlwZSxwZSk7dmFyIGRlPWZ1bmN0aW9uKGUpe3ZvaWQgMD09PWUmJihlPVwiXCIpO3ZhciB0PW5ldyBmZTtyZXR1cm4gdC50ZXh0PWUsdC5pc0NvbW1lbnQ9ITAsdH07ZnVuY3Rpb24gdmUoZSl7cmV0dXJuIG5ldyBmZSh2b2lkIDAsdm9pZCAwLHZvaWQgMCxTdHJpbmcoZSkpfWZ1bmN0aW9uIGhlKGUpe3ZhciB0PW5ldyBmZShlLnRhZyxlLmRhdGEsZS5jaGlsZHJlbiYmZS5jaGlsZHJlbi5zbGljZSgpLGUudGV4dCxlLmVsbSxlLmNvbnRleHQsZS5jb21wb25lbnRPcHRpb25zLGUuYXN5bmNGYWN0b3J5KTtyZXR1cm4gdC5ucz1lLm5zLHQuaXNTdGF0aWM9ZS5pc1N0YXRpYyx0LmtleT1lLmtleSx0LmlzQ29tbWVudD1lLmlzQ29tbWVudCx0LmZuQ29udGV4dD1lLmZuQ29udGV4dCx0LmZuT3B0aW9ucz1lLmZuT3B0aW9ucyx0LmZuU2NvcGVJZD1lLmZuU2NvcGVJZCx0LmFzeW5jTWV0YT1lLmFzeW5jTWV0YSx0LmlzQ2xvbmVkPSEwLHR9dmFyIG1lPUFycmF5LnByb3RvdHlwZSx5ZT1PYmplY3QuY3JlYXRlKG1lKTtbXCJwdXNoXCIsXCJwb3BcIixcInNoaWZ0XCIsXCJ1bnNoaWZ0XCIsXCJzcGxpY2VcIixcInNvcnRcIixcInJldmVyc2VcIl0uZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD1tZVtlXTtSKHllLGUsZnVuY3Rpb24oKXtmb3IodmFyIG49W10scj1hcmd1bWVudHMubGVuZ3RoO3ItLTspbltyXT1hcmd1bWVudHNbcl07dmFyIGksbz10LmFwcGx5KHRoaXMsbiksYT10aGlzLl9fb2JfXztzd2l0Y2goZSl7Y2FzZVwicHVzaFwiOmNhc2VcInVuc2hpZnRcIjppPW47YnJlYWs7Y2FzZVwic3BsaWNlXCI6aT1uLnNsaWNlKDIpfXJldHVybiBpJiZhLm9ic2VydmVBcnJheShpKSxhLmRlcC5ub3RpZnkoKSxvfSl9KTt2YXIgZ2U9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoeWUpLF9lPSEwO2Z1bmN0aW9uIGJlKGUpe19lPWV9dmFyICRlPWZ1bmN0aW9uKGUpe3ZhciB0O3RoaXMudmFsdWU9ZSx0aGlzLmRlcD1uZXcgc2UsdGhpcy52bUNvdW50PTAsUihlLFwiX19vYl9fXCIsdGhpcyksQXJyYXkuaXNBcnJheShlKT8oQj8odD15ZSxlLl9fcHJvdG9fXz10KTpmdW5jdGlvbihlLHQsbil7Zm9yKHZhciByPTAsaT1uLmxlbmd0aDtyPGk7cisrKXt2YXIgbz1uW3JdO1IoZSxvLHRbb10pfX0oZSx5ZSxnZSksdGhpcy5vYnNlcnZlQXJyYXkoZSkpOnRoaXMud2FsayhlKX07ZnVuY3Rpb24gd2UoZSx0KXt2YXIgbjtpZihvKGUpJiYhKGUgaW5zdGFuY2VvZiBmZSkpcmV0dXJuIHkoZSxcIl9fb2JfX1wiKSYmZS5fX29iX18gaW5zdGFuY2VvZiAkZT9uPWUuX19vYl9fOl9lJiYhZWUoKSYmKEFycmF5LmlzQXJyYXkoZSl8fHMoZSkpJiZPYmplY3QuaXNFeHRlbnNpYmxlKGUpJiYhZS5faXNWdWUmJihuPW5ldyAkZShlKSksdCYmbiYmbi52bUNvdW50Kyssbn1mdW5jdGlvbiBDZShlLHQsbixyLGkpe3ZhciBvPW5ldyBzZSxhPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSx0KTtpZighYXx8ITEhPT1hLmNvbmZpZ3VyYWJsZSl7dmFyIHM9YSYmYS5nZXQsYz1hJiZhLnNldDtzJiYhY3x8MiE9PWFyZ3VtZW50cy5sZW5ndGh8fChuPWVbdF0pO3ZhciB1PSFpJiZ3ZShuKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXt2YXIgdD1zP3MuY2FsbChlKTpuO3JldHVybiBzZS50YXJnZXQmJihvLmRlcGVuZCgpLHUmJih1LmRlcC5kZXBlbmQoKSxBcnJheS5pc0FycmF5KHQpJiZmdW5jdGlvbiBlKHQpe2Zvcih2YXIgbj12b2lkIDAscj0wLGk9dC5sZW5ndGg7cjxpO3IrKykobj10W3JdKSYmbi5fX29iX18mJm4uX19vYl9fLmRlcC5kZXBlbmQoKSxBcnJheS5pc0FycmF5KG4pJiZlKG4pfSh0KSkpLHR9LHNldDpmdW5jdGlvbih0KXt2YXIgcj1zP3MuY2FsbChlKTpuO3Q9PT1yfHx0IT10JiZyIT1yfHxzJiYhY3x8KGM/Yy5jYWxsKGUsdCk6bj10LHU9IWkmJndlKHQpLG8ubm90aWZ5KCkpfX0pfX1mdW5jdGlvbiB4ZShlLHQsbil7aWYoQXJyYXkuaXNBcnJheShlKSYmYyh0KSlyZXR1cm4gZS5sZW5ndGg9TWF0aC5tYXgoZS5sZW5ndGgsdCksZS5zcGxpY2UodCwxLG4pLG47aWYodCBpbiBlJiYhKHQgaW4gT2JqZWN0LnByb3RvdHlwZSkpcmV0dXJuIGVbdF09bixuO3ZhciByPWUuX19vYl9fO3JldHVybiBlLl9pc1Z1ZXx8ciYmci52bUNvdW50P246cj8oQ2Uoci52YWx1ZSx0LG4pLHIuZGVwLm5vdGlmeSgpLG4pOihlW3RdPW4sbil9ZnVuY3Rpb24gQWUoZSx0KXtpZihBcnJheS5pc0FycmF5KGUpJiZjKHQpKWUuc3BsaWNlKHQsMSk7ZWxzZXt2YXIgbj1lLl9fb2JfXztlLl9pc1Z1ZXx8biYmbi52bUNvdW50fHx5KGUsdCkmJihkZWxldGUgZVt0XSxuJiZuLmRlcC5ub3RpZnkoKSl9fSRlLnByb3RvdHlwZS53YWxrPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1PYmplY3Qua2V5cyhlKSxuPTA7bjx0Lmxlbmd0aDtuKyspQ2UoZSx0W25dKX0sJGUucHJvdG90eXBlLm9ic2VydmVBcnJheT1mdW5jdGlvbihlKXtmb3IodmFyIHQ9MCxuPWUubGVuZ3RoO3Q8bjt0Kyspd2UoZVt0XSl9O3ZhciBrZT1QLm9wdGlvbk1lcmdlU3RyYXRlZ2llcztmdW5jdGlvbiBPZShlLHQpe2lmKCF0KXJldHVybiBlO2Zvcih2YXIgbixyLGksbz1pZT9SZWZsZWN0Lm93bktleXModCk6T2JqZWN0LmtleXModCksYT0wO2E8by5sZW5ndGg7YSsrKVwiX19vYl9fXCIhPT0obj1vW2FdKSYmKHI9ZVtuXSxpPXRbbl0seShlLG4pP3IhPT1pJiZzKHIpJiZzKGkpJiZPZShyLGkpOnhlKGUsbixpKSk7cmV0dXJuIGV9ZnVuY3Rpb24gU2UoZSx0LG4pe3JldHVybiBuP2Z1bmN0aW9uKCl7dmFyIHI9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90LmNhbGwobixuKTp0LGk9XCJmdW5jdGlvblwiPT10eXBlb2YgZT9lLmNhbGwobixuKTplO3JldHVybiByP09lKHIsaSk6aX06dD9lP2Z1bmN0aW9uKCl7cmV0dXJuIE9lKFwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dC5jYWxsKHRoaXMsdGhpcyk6dCxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2UuY2FsbCh0aGlzLHRoaXMpOmUpfTp0OmV9ZnVuY3Rpb24gVGUoZSx0KXt2YXIgbj10P2U/ZS5jb25jYXQodCk6QXJyYXkuaXNBcnJheSh0KT90Olt0XTplO3JldHVybiBuP2Z1bmN0aW9uKGUpe2Zvcih2YXIgdD1bXSxuPTA7bjxlLmxlbmd0aDtuKyspLTE9PT10LmluZGV4T2YoZVtuXSkmJnQucHVzaChlW25dKTtyZXR1cm4gdH0obik6bn1mdW5jdGlvbiBFZShlLHQsbixyKXt2YXIgaT1PYmplY3QuY3JlYXRlKGV8fG51bGwpO3JldHVybiB0P2soaSx0KTppfWtlLmRhdGE9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBuP1NlKGUsdCxuKTp0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0P2U6U2UoZSx0KX0sRC5mb3JFYWNoKGZ1bmN0aW9uKGUpe2tlW2VdPVRlfSksSS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2tlW2UrXCJzXCJdPUVlfSksa2Uud2F0Y2g9ZnVuY3Rpb24oZSx0LG4scil7aWYoZT09PVgmJihlPXZvaWQgMCksdD09PVgmJih0PXZvaWQgMCksIXQpcmV0dXJuIE9iamVjdC5jcmVhdGUoZXx8bnVsbCk7aWYoIWUpcmV0dXJuIHQ7dmFyIGk9e307Zm9yKHZhciBvIGluIGsoaSxlKSx0KXt2YXIgYT1pW29dLHM9dFtvXTthJiYhQXJyYXkuaXNBcnJheShhKSYmKGE9W2FdKSxpW29dPWE/YS5jb25jYXQocyk6QXJyYXkuaXNBcnJheShzKT9zOltzXX1yZXR1cm4gaX0sa2UucHJvcHM9a2UubWV0aG9kcz1rZS5pbmplY3Q9a2UuY29tcHV0ZWQ9ZnVuY3Rpb24oZSx0LG4scil7aWYoIWUpcmV0dXJuIHQ7dmFyIGk9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm4gayhpLGUpLHQmJmsoaSx0KSxpfSxrZS5wcm92aWRlPVNlO3ZhciBOZT1mdW5jdGlvbihlLHQpe3JldHVybiB2b2lkIDA9PT10P2U6dH07ZnVuY3Rpb24gamUoZSx0LG4pe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJih0PXQub3B0aW9ucyksZnVuY3Rpb24oZSx0KXt2YXIgbj1lLnByb3BzO2lmKG4pe3ZhciByLGksbz17fTtpZihBcnJheS5pc0FycmF5KG4pKWZvcihyPW4ubGVuZ3RoO3ItLTspXCJzdHJpbmdcIj09dHlwZW9mKGk9bltyXSkmJihvW2IoaSldPXt0eXBlOm51bGx9KTtlbHNlIGlmKHMobikpZm9yKHZhciBhIGluIG4paT1uW2FdLG9bYihhKV09cyhpKT9pOnt0eXBlOml9O2UucHJvcHM9b319KHQpLGZ1bmN0aW9uKGUsdCl7dmFyIG49ZS5pbmplY3Q7aWYobil7dmFyIHI9ZS5pbmplY3Q9e307aWYoQXJyYXkuaXNBcnJheShuKSlmb3IodmFyIGk9MDtpPG4ubGVuZ3RoO2krKylyW25baV1dPXtmcm9tOm5baV19O2Vsc2UgaWYocyhuKSlmb3IodmFyIG8gaW4gbil7dmFyIGE9bltvXTtyW29dPXMoYSk/ayh7ZnJvbTpvfSxhKTp7ZnJvbTphfX19fSh0KSxmdW5jdGlvbihlKXt2YXIgdD1lLmRpcmVjdGl2ZXM7aWYodClmb3IodmFyIG4gaW4gdCl7dmFyIHI9dFtuXTtcImZ1bmN0aW9uXCI9PXR5cGVvZiByJiYodFtuXT17YmluZDpyLHVwZGF0ZTpyfSl9fSh0KSwhdC5fYmFzZSYmKHQuZXh0ZW5kcyYmKGU9amUoZSx0LmV4dGVuZHMsbikpLHQubWl4aW5zKSlmb3IodmFyIHI9MCxpPXQubWl4aW5zLmxlbmd0aDtyPGk7cisrKWU9amUoZSx0Lm1peGluc1tyXSxuKTt2YXIgbyxhPXt9O2ZvcihvIGluIGUpYyhvKTtmb3IobyBpbiB0KXkoZSxvKXx8YyhvKTtmdW5jdGlvbiBjKHIpe3ZhciBpPWtlW3JdfHxOZTthW3JdPWkoZVtyXSx0W3JdLG4scil9cmV0dXJuIGF9ZnVuY3Rpb24gTGUoZSx0LG4scil7aWYoXCJzdHJpbmdcIj09dHlwZW9mIG4pe3ZhciBpPWVbdF07aWYoeShpLG4pKXJldHVybiBpW25dO3ZhciBvPWIobik7aWYoeShpLG8pKXJldHVybiBpW29dO3ZhciBhPSQobyk7cmV0dXJuIHkoaSxhKT9pW2FdOmlbbl18fGlbb118fGlbYV19fWZ1bmN0aW9uIE1lKGUsdCxuLHIpe3ZhciBpPXRbZV0sbz0heShuLGUpLGE9bltlXSxzPVBlKEJvb2xlYW4saS50eXBlKTtpZihzPi0xKWlmKG8mJiF5KGksXCJkZWZhdWx0XCIpKWE9ITE7ZWxzZSBpZihcIlwiPT09YXx8YT09PUMoZSkpe3ZhciBjPVBlKFN0cmluZyxpLnR5cGUpOyhjPDB8fHM8YykmJihhPSEwKX1pZih2b2lkIDA9PT1hKXthPWZ1bmN0aW9uKGUsdCxuKXtpZigheSh0LFwiZGVmYXVsdFwiKSlyZXR1cm47dmFyIHI9dC5kZWZhdWx0O2lmKGUmJmUuJG9wdGlvbnMucHJvcHNEYXRhJiZ2b2lkIDA9PT1lLiRvcHRpb25zLnByb3BzRGF0YVtuXSYmdm9pZCAwIT09ZS5fcHJvcHNbbl0pcmV0dXJuIGUuX3Byb3BzW25dO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHImJlwiRnVuY3Rpb25cIiE9PUllKHQudHlwZSk/ci5jYWxsKGUpOnJ9KHIsaSxlKTt2YXIgdT1fZTtiZSghMCksd2UoYSksYmUodSl9cmV0dXJuIGF9ZnVuY3Rpb24gSWUoZSl7dmFyIHQ9ZSYmZS50b1N0cmluZygpLm1hdGNoKC9eXFxzKmZ1bmN0aW9uIChcXHcrKS8pO3JldHVybiB0P3RbMV06XCJcIn1mdW5jdGlvbiBEZShlLHQpe3JldHVybiBJZShlKT09PUllKHQpfWZ1bmN0aW9uIFBlKGUsdCl7aWYoIUFycmF5LmlzQXJyYXkodCkpcmV0dXJuIERlKHQsZSk/MDotMTtmb3IodmFyIG49MCxyPXQubGVuZ3RoO248cjtuKyspaWYoRGUodFtuXSxlKSlyZXR1cm4gbjtyZXR1cm4tMX1mdW5jdGlvbiBSZShlLHQsbil7aWYodClmb3IodmFyIHI9dDtyPXIuJHBhcmVudDspe3ZhciBpPXIuJG9wdGlvbnMuZXJyb3JDYXB0dXJlZDtpZihpKWZvcih2YXIgbz0wO288aS5sZW5ndGg7bysrKXRyeXtpZighMT09PWlbb10uY2FsbChyLGUsdCxuKSlyZXR1cm59Y2F0Y2goZSl7SGUoZSxyLFwiZXJyb3JDYXB0dXJlZCBob29rXCIpfX1IZShlLHQsbil9ZnVuY3Rpb24gRmUoZSx0LG4scixpKXt2YXIgbzt0cnl7KG89bj9lLmFwcGx5KHQsbik6ZS5jYWxsKHQpKSYmIW8uX2lzVnVlJiZ1KG8pJiZvLmNhdGNoKGZ1bmN0aW9uKGUpe3JldHVybiBSZShlLHIsaStcIiAoUHJvbWlzZS9hc3luYylcIil9KX1jYXRjaChlKXtSZShlLHIsaSl9cmV0dXJuIG99ZnVuY3Rpb24gSGUoZSx0LG4pe2lmKFAuZXJyb3JIYW5kbGVyKXRyeXtyZXR1cm4gUC5lcnJvckhhbmRsZXIuY2FsbChudWxsLGUsdCxuKX1jYXRjaCh0KXt0IT09ZSYmQmUodCxudWxsLFwiY29uZmlnLmVycm9ySGFuZGxlclwiKX1CZShlLHQsbil9ZnVuY3Rpb24gQmUoZSx0LG4pe2lmKCFVJiYhenx8XCJ1bmRlZmluZWRcIj09dHlwZW9mIGNvbnNvbGUpdGhyb3cgZTtjb25zb2xlLmVycm9yKGUpfXZhciBVZSx6ZT0hMSxWZT1bXSxLZT0hMTtmdW5jdGlvbiBKZSgpe0tlPSExO3ZhciBlPVZlLnNsaWNlKDApO1ZlLmxlbmd0aD0wO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKWVbdF0oKX1pZihcInVuZGVmaW5lZFwiIT10eXBlb2YgUHJvbWlzZSYmbmUoUHJvbWlzZSkpe3ZhciBxZT1Qcm9taXNlLnJlc29sdmUoKTtVZT1mdW5jdGlvbigpe3FlLnRoZW4oSmUpLFomJnNldFRpbWVvdXQoUyl9LHplPSEwfWVsc2UgaWYoSnx8XCJ1bmRlZmluZWRcIj09dHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXJ8fCFuZShNdXRhdGlvbk9ic2VydmVyKSYmXCJbb2JqZWN0IE11dGF0aW9uT2JzZXJ2ZXJDb25zdHJ1Y3Rvcl1cIiE9PU11dGF0aW9uT2JzZXJ2ZXIudG9TdHJpbmcoKSlVZT1cInVuZGVmaW5lZFwiIT10eXBlb2Ygc2V0SW1tZWRpYXRlJiZuZShzZXRJbW1lZGlhdGUpP2Z1bmN0aW9uKCl7c2V0SW1tZWRpYXRlKEplKX06ZnVuY3Rpb24oKXtzZXRUaW1lb3V0KEplLDApfTtlbHNle3ZhciBXZT0xLFplPW5ldyBNdXRhdGlvbk9ic2VydmVyKEplKSxHZT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcoV2UpKTtaZS5vYnNlcnZlKEdlLHtjaGFyYWN0ZXJEYXRhOiEwfSksVWU9ZnVuY3Rpb24oKXtXZT0oV2UrMSklMixHZS5kYXRhPVN0cmluZyhXZSl9LHplPSEwfWZ1bmN0aW9uIFhlKGUsdCl7dmFyIG47aWYoVmUucHVzaChmdW5jdGlvbigpe2lmKGUpdHJ5e2UuY2FsbCh0KX1jYXRjaChlKXtSZShlLHQsXCJuZXh0VGlja1wiKX1lbHNlIG4mJm4odCl9KSxLZXx8KEtlPSEwLFVlKCkpLCFlJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgUHJvbWlzZSlyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oZSl7bj1lfSl9dmFyIFllPW5ldyByZTtmdW5jdGlvbiBRZShlKXshZnVuY3Rpb24gZSh0LG4pe3ZhciByLGk7dmFyIGE9QXJyYXkuaXNBcnJheSh0KTtpZighYSYmIW8odCl8fE9iamVjdC5pc0Zyb3plbih0KXx8dCBpbnN0YW5jZW9mIGZlKXJldHVybjtpZih0Ll9fb2JfXyl7dmFyIHM9dC5fX29iX18uZGVwLmlkO2lmKG4uaGFzKHMpKXJldHVybjtuLmFkZChzKX1pZihhKWZvcihyPXQubGVuZ3RoO3ItLTspZSh0W3JdLG4pO2Vsc2UgZm9yKGk9T2JqZWN0LmtleXModCkscj1pLmxlbmd0aDtyLS07KWUodFtpW3JdXSxuKX0oZSxZZSksWWUuY2xlYXIoKX12YXIgZXQ9ZyhmdW5jdGlvbihlKXt2YXIgdD1cIiZcIj09PWUuY2hhckF0KDApLG49XCJ+XCI9PT0oZT10P2Uuc2xpY2UoMSk6ZSkuY2hhckF0KDApLHI9XCIhXCI9PT0oZT1uP2Uuc2xpY2UoMSk6ZSkuY2hhckF0KDApO3JldHVybntuYW1lOmU9cj9lLnNsaWNlKDEpOmUsb25jZTpuLGNhcHR1cmU6cixwYXNzaXZlOnR9fSk7ZnVuY3Rpb24gdHQoZSx0KXtmdW5jdGlvbiBuKCl7dmFyIGU9YXJndW1lbnRzLHI9bi5mbnM7aWYoIUFycmF5LmlzQXJyYXkocikpcmV0dXJuIEZlKHIsbnVsbCxhcmd1bWVudHMsdCxcInYtb24gaGFuZGxlclwiKTtmb3IodmFyIGk9ci5zbGljZSgpLG89MDtvPGkubGVuZ3RoO28rKylGZShpW29dLG51bGwsZSx0LFwidi1vbiBoYW5kbGVyXCIpfXJldHVybiBuLmZucz1lLG59ZnVuY3Rpb24gbnQoZSxuLGksbyxhLHMpe3ZhciBjLHUsbCxmO2ZvcihjIGluIGUpdT1lW2NdLGw9bltjXSxmPWV0KGMpLHQodSl8fCh0KGwpPyh0KHUuZm5zKSYmKHU9ZVtjXT10dCh1LHMpKSxyKGYub25jZSkmJih1PWVbY109YShmLm5hbWUsdSxmLmNhcHR1cmUpKSxpKGYubmFtZSx1LGYuY2FwdHVyZSxmLnBhc3NpdmUsZi5wYXJhbXMpKTp1IT09bCYmKGwuZm5zPXUsZVtjXT1sKSk7Zm9yKGMgaW4gbil0KGVbY10pJiZvKChmPWV0KGMpKS5uYW1lLG5bY10sZi5jYXB0dXJlKX1mdW5jdGlvbiBydChlLGksbyl7dmFyIGE7ZSBpbnN0YW5jZW9mIGZlJiYoZT1lLmRhdGEuaG9va3x8KGUuZGF0YS5ob29rPXt9KSk7dmFyIHM9ZVtpXTtmdW5jdGlvbiBjKCl7by5hcHBseSh0aGlzLGFyZ3VtZW50cyksaChhLmZucyxjKX10KHMpP2E9dHQoW2NdKTpuKHMuZm5zKSYmcihzLm1lcmdlZCk/KGE9cykuZm5zLnB1c2goYyk6YT10dChbcyxjXSksYS5tZXJnZWQ9ITAsZVtpXT1hfWZ1bmN0aW9uIGl0KGUsdCxyLGksbyl7aWYobih0KSl7aWYoeSh0LHIpKXJldHVybiBlW3JdPXRbcl0sb3x8ZGVsZXRlIHRbcl0sITA7aWYoeSh0LGkpKXJldHVybiBlW3JdPXRbaV0sb3x8ZGVsZXRlIHRbaV0sITB9cmV0dXJuITF9ZnVuY3Rpb24gb3QoZSl7cmV0dXJuIGkoZSk/W3ZlKGUpXTpBcnJheS5pc0FycmF5KGUpP2Z1bmN0aW9uIGUobyxhKXt2YXIgcz1bXTt2YXIgYyx1LGwsZjtmb3IoYz0wO2M8by5sZW5ndGg7YysrKXQodT1vW2NdKXx8XCJib29sZWFuXCI9PXR5cGVvZiB1fHwobD1zLmxlbmd0aC0xLGY9c1tsXSxBcnJheS5pc0FycmF5KHUpP3UubGVuZ3RoPjAmJihhdCgodT1lKHUsKGF8fFwiXCIpK1wiX1wiK2MpKVswXSkmJmF0KGYpJiYoc1tsXT12ZShmLnRleHQrdVswXS50ZXh0KSx1LnNoaWZ0KCkpLHMucHVzaC5hcHBseShzLHUpKTppKHUpP2F0KGYpP3NbbF09dmUoZi50ZXh0K3UpOlwiXCIhPT11JiZzLnB1c2godmUodSkpOmF0KHUpJiZhdChmKT9zW2xdPXZlKGYudGV4dCt1LnRleHQpOihyKG8uX2lzVkxpc3QpJiZuKHUudGFnKSYmdCh1LmtleSkmJm4oYSkmJih1LmtleT1cIl9fdmxpc3RcIithK1wiX1wiK2MrXCJfX1wiKSxzLnB1c2godSkpKTtyZXR1cm4gc30oZSk6dm9pZCAwfWZ1bmN0aW9uIGF0KGUpe3JldHVybiBuKGUpJiZuKGUudGV4dCkmJiExPT09ZS5pc0NvbW1lbnR9ZnVuY3Rpb24gc3QoZSx0KXtpZihlKXtmb3IodmFyIG49T2JqZWN0LmNyZWF0ZShudWxsKSxyPWllP1JlZmxlY3Qub3duS2V5cyhlKTpPYmplY3Qua2V5cyhlKSxpPTA7aTxyLmxlbmd0aDtpKyspe3ZhciBvPXJbaV07aWYoXCJfX29iX19cIiE9PW8pe2Zvcih2YXIgYT1lW29dLmZyb20scz10O3M7KXtpZihzLl9wcm92aWRlZCYmeShzLl9wcm92aWRlZCxhKSl7bltvXT1zLl9wcm92aWRlZFthXTticmVha31zPXMuJHBhcmVudH1pZighcyYmXCJkZWZhdWx0XCJpbiBlW29dKXt2YXIgYz1lW29dLmRlZmF1bHQ7bltvXT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBjP2MuY2FsbCh0KTpjfX19cmV0dXJuIG59fWZ1bmN0aW9uIGN0KGUsdCl7aWYoIWV8fCFlLmxlbmd0aClyZXR1cm57fTtmb3IodmFyIG49e30scj0wLGk9ZS5sZW5ndGg7cjxpO3IrKyl7dmFyIG89ZVtyXSxhPW8uZGF0YTtpZihhJiZhLmF0dHJzJiZhLmF0dHJzLnNsb3QmJmRlbGV0ZSBhLmF0dHJzLnNsb3Qsby5jb250ZXh0IT09dCYmby5mbkNvbnRleHQhPT10fHwhYXx8bnVsbD09YS5zbG90KShuLmRlZmF1bHR8fChuLmRlZmF1bHQ9W10pKS5wdXNoKG8pO2Vsc2V7dmFyIHM9YS5zbG90LGM9bltzXXx8KG5bc109W10pO1widGVtcGxhdGVcIj09PW8udGFnP2MucHVzaC5hcHBseShjLG8uY2hpbGRyZW58fFtdKTpjLnB1c2gobyl9fWZvcih2YXIgdSBpbiBuKW5bdV0uZXZlcnkodXQpJiZkZWxldGUgblt1XTtyZXR1cm4gbn1mdW5jdGlvbiB1dChlKXtyZXR1cm4gZS5pc0NvbW1lbnQmJiFlLmFzeW5jRmFjdG9yeXx8XCIgXCI9PT1lLnRleHR9ZnVuY3Rpb24gbHQodCxuLHIpe3ZhciBpO2lmKHQpe2lmKHQuX25vcm1hbGl6ZWQpcmV0dXJuIHQuX25vcm1hbGl6ZWQ7aWYodC4kc3RhYmxlJiZyJiZyIT09ZSlyZXR1cm4gcjtmb3IodmFyIG8gaW4gaT17fSx0KXRbb10mJlwiJFwiIT09b1swXSYmKGlbb109ZnQobixvLHRbb10pKX1lbHNlIGk9e307Zm9yKHZhciBhIGluIG4pYSBpbiBpfHwoaVthXT1wdChuLGEpKTtyZXR1cm4gdCYmT2JqZWN0LmlzRXh0ZW5zaWJsZSh0KSYmKHQuX25vcm1hbGl6ZWQ9aSksUihpLFwiJHN0YWJsZVwiLCF0fHwhIXQuJHN0YWJsZSksaX1mdW5jdGlvbiBmdChlLHQsbil7dmFyIHI9ZnVuY3Rpb24oZSl7dmFyIHQ9bihlfHx7fSk7cmV0dXJuKHQ9dCYmXCJvYmplY3RcIj09dHlwZW9mIHQmJiFBcnJheS5pc0FycmF5KHQpP1t0XTpvdCh0KSkmJjA9PT10Lmxlbmd0aD92b2lkIDA6dH07cmV0dXJuIG4ucHJveHkmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse2dldDpyLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSkscn1mdW5jdGlvbiBwdChlLHQpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBlW3RdfX1mdW5jdGlvbiBkdChlLHQpe3ZhciByLGksYSxzLGM7aWYoQXJyYXkuaXNBcnJheShlKXx8XCJzdHJpbmdcIj09dHlwZW9mIGUpZm9yKHI9bmV3IEFycmF5KGUubGVuZ3RoKSxpPTAsYT1lLmxlbmd0aDtpPGE7aSsrKXJbaV09dChlW2ldLGkpO2Vsc2UgaWYoXCJudW1iZXJcIj09dHlwZW9mIGUpZm9yKHI9bmV3IEFycmF5KGUpLGk9MDtpPGU7aSsrKXJbaV09dChpKzEsaSk7ZWxzZSBpZihvKGUpKWlmKGllJiZlW1N5bWJvbC5pdGVyYXRvcl0pe3I9W107Zm9yKHZhciB1PWVbU3ltYm9sLml0ZXJhdG9yXSgpLGw9dS5uZXh0KCk7IWwuZG9uZTspci5wdXNoKHQobC52YWx1ZSxyLmxlbmd0aCkpLGw9dS5uZXh0KCl9ZWxzZSBmb3Iocz1PYmplY3Qua2V5cyhlKSxyPW5ldyBBcnJheShzLmxlbmd0aCksaT0wLGE9cy5sZW5ndGg7aTxhO2krKyljPXNbaV0scltpXT10KGVbY10sYyxpKTtyZXR1cm4gbihyKXx8KHI9W10pLHIuX2lzVkxpc3Q9ITAscn1mdW5jdGlvbiB2dChlLHQsbixyKXt2YXIgaSxvPXRoaXMuJHNjb3BlZFNsb3RzW2VdO28/KG49bnx8e30sciYmKG49ayhrKHt9LHIpLG4pKSxpPW8obil8fHQpOmk9dGhpcy4kc2xvdHNbZV18fHQ7dmFyIGE9biYmbi5zbG90O3JldHVybiBhP3RoaXMuJGNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiLHtzbG90OmF9LGkpOml9ZnVuY3Rpb24gaHQoZSl7cmV0dXJuIExlKHRoaXMuJG9wdGlvbnMsXCJmaWx0ZXJzXCIsZSl8fEV9ZnVuY3Rpb24gbXQoZSx0KXtyZXR1cm4gQXJyYXkuaXNBcnJheShlKT8tMT09PWUuaW5kZXhPZih0KTplIT09dH1mdW5jdGlvbiB5dChlLHQsbixyLGkpe3ZhciBvPVAua2V5Q29kZXNbdF18fG47cmV0dXJuIGkmJnImJiFQLmtleUNvZGVzW3RdP210KGkscik6bz9tdChvLGUpOnI/QyhyKSE9PXQ6dm9pZCAwfWZ1bmN0aW9uIGd0KGUsdCxuLHIsaSl7aWYobilpZihvKG4pKXt2YXIgYTtBcnJheS5pc0FycmF5KG4pJiYobj1PKG4pKTt2YXIgcz1mdW5jdGlvbihvKXtpZihcImNsYXNzXCI9PT1vfHxcInN0eWxlXCI9PT1vfHx2KG8pKWE9ZTtlbHNle3ZhciBzPWUuYXR0cnMmJmUuYXR0cnMudHlwZTthPXJ8fFAubXVzdFVzZVByb3AodCxzLG8pP2UuZG9tUHJvcHN8fChlLmRvbVByb3BzPXt9KTplLmF0dHJzfHwoZS5hdHRycz17fSl9dmFyIGM9YihvKTtvIGluIGF8fGMgaW4gYXx8KGFbb109bltvXSxpJiYoKGUub258fChlLm9uPXt9KSlbXCJ1cGRhdGU6XCIrY109ZnVuY3Rpb24oZSl7bltvXT1lfSkpfTtmb3IodmFyIGMgaW4gbilzKGMpfWVsc2U7cmV0dXJuIGV9ZnVuY3Rpb24gX3QoZSx0KXt2YXIgbj10aGlzLl9zdGF0aWNUcmVlc3x8KHRoaXMuX3N0YXRpY1RyZWVzPVtdKSxyPW5bZV07cmV0dXJuIHImJiF0P3I6KCR0KHI9bltlXT10aGlzLiRvcHRpb25zLnN0YXRpY1JlbmRlckZuc1tlXS5jYWxsKHRoaXMuX3JlbmRlclByb3h5LG51bGwsdGhpcyksXCJfX3N0YXRpY19fXCIrZSwhMSkscil9ZnVuY3Rpb24gYnQoZSx0LG4pe3JldHVybiAkdChlLFwiX19vbmNlX19cIit0KyhuP1wiX1wiK246XCJcIiksITApLGV9ZnVuY3Rpb24gJHQoZSx0LG4pe2lmKEFycmF5LmlzQXJyYXkoZSkpZm9yKHZhciByPTA7cjxlLmxlbmd0aDtyKyspZVtyXSYmXCJzdHJpbmdcIiE9dHlwZW9mIGVbcl0mJnd0KGVbcl0sdCtcIl9cIityLG4pO2Vsc2Ugd3QoZSx0LG4pfWZ1bmN0aW9uIHd0KGUsdCxuKXtlLmlzU3RhdGljPSEwLGUua2V5PXQsZS5pc09uY2U9bn1mdW5jdGlvbiBDdChlLHQpe2lmKHQpaWYocyh0KSl7dmFyIG49ZS5vbj1lLm9uP2soe30sZS5vbik6e307Zm9yKHZhciByIGluIHQpe3ZhciBpPW5bcl0sbz10W3JdO25bcl09aT9bXS5jb25jYXQoaSxvKTpvfX1lbHNlO3JldHVybiBlfWZ1bmN0aW9uIHh0KGUsdCxuKXtuPW58fHskc3RhYmxlOiF0fTtmb3IodmFyIHI9MDtyPGUubGVuZ3RoO3IrKyl7dmFyIGk9ZVtyXTtBcnJheS5pc0FycmF5KGkpP3h0KGksdCxuKTppJiYoaS5wcm94eSYmKGkuZm4ucHJveHk9ITApLG5baS5rZXldPWkuZm4pfXJldHVybiBufWZ1bmN0aW9uIEF0KGUsdCl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKz0yKXt2YXIgcj10W25dO1wic3RyaW5nXCI9PXR5cGVvZiByJiZyJiYoZVt0W25dXT10W24rMV0pfXJldHVybiBlfWZ1bmN0aW9uIGt0KGUsdCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGU/dCtlOmV9ZnVuY3Rpb24gT3QoZSl7ZS5fbz1idCxlLl9uPWYsZS5fcz1sLGUuX2w9ZHQsZS5fdD12dCxlLl9xPU4sZS5faT1qLGUuX209X3QsZS5fZj1odCxlLl9rPXl0LGUuX2I9Z3QsZS5fdj12ZSxlLl9lPWRlLGUuX3U9eHQsZS5fZz1DdCxlLl9kPUF0LGUuX3A9a3R9ZnVuY3Rpb24gU3QodCxuLGksbyxhKXt2YXIgcyxjPXRoaXMsdT1hLm9wdGlvbnM7eShvLFwiX3VpZFwiKT8ocz1PYmplY3QuY3JlYXRlKG8pKS5fb3JpZ2luYWw9bzoocz1vLG89by5fb3JpZ2luYWwpO3ZhciBsPXIodS5fY29tcGlsZWQpLGY9IWw7dGhpcy5kYXRhPXQsdGhpcy5wcm9wcz1uLHRoaXMuY2hpbGRyZW49aSx0aGlzLnBhcmVudD1vLHRoaXMubGlzdGVuZXJzPXQub258fGUsdGhpcy5pbmplY3Rpb25zPXN0KHUuaW5qZWN0LG8pLHRoaXMuc2xvdHM9ZnVuY3Rpb24oKXtyZXR1cm4gYy4kc2xvdHN8fGx0KHQuc2NvcGVkU2xvdHMsYy4kc2xvdHM9Y3QoaSxvKSksYy4kc2xvdHN9LE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwic2NvcGVkU2xvdHNcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gbHQodC5zY29wZWRTbG90cyx0aGlzLnNsb3RzKCkpfX0pLGwmJih0aGlzLiRvcHRpb25zPXUsdGhpcy4kc2xvdHM9dGhpcy5zbG90cygpLHRoaXMuJHNjb3BlZFNsb3RzPWx0KHQuc2NvcGVkU2xvdHMsdGhpcy4kc2xvdHMpKSx1Ll9zY29wZUlkP3RoaXMuX2M9ZnVuY3Rpb24oZSx0LG4scil7dmFyIGk9UHQocyxlLHQsbixyLGYpO3JldHVybiBpJiYhQXJyYXkuaXNBcnJheShpKSYmKGkuZm5TY29wZUlkPXUuX3Njb3BlSWQsaS5mbkNvbnRleHQ9byksaX06dGhpcy5fYz1mdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gUHQocyxlLHQsbixyLGYpfX1mdW5jdGlvbiBUdChlLHQsbixyLGkpe3ZhciBvPWhlKGUpO3JldHVybiBvLmZuQ29udGV4dD1uLG8uZm5PcHRpb25zPXIsdC5zbG90JiYoKG8uZGF0YXx8KG8uZGF0YT17fSkpLnNsb3Q9dC5zbG90KSxvfWZ1bmN0aW9uIEV0KGUsdCl7Zm9yKHZhciBuIGluIHQpZVtiKG4pXT10W25dfU90KFN0LnByb3RvdHlwZSk7dmFyIE50PXtpbml0OmZ1bmN0aW9uKGUsdCl7aWYoZS5jb21wb25lbnRJbnN0YW5jZSYmIWUuY29tcG9uZW50SW5zdGFuY2UuX2lzRGVzdHJveWVkJiZlLmRhdGEua2VlcEFsaXZlKXt2YXIgcj1lO050LnByZXBhdGNoKHIscil9ZWxzZXsoZS5jb21wb25lbnRJbnN0YW5jZT1mdW5jdGlvbihlLHQpe3ZhciByPXtfaXNDb21wb25lbnQ6ITAsX3BhcmVudFZub2RlOmUscGFyZW50OnR9LGk9ZS5kYXRhLmlubGluZVRlbXBsYXRlO24oaSkmJihyLnJlbmRlcj1pLnJlbmRlcixyLnN0YXRpY1JlbmRlckZucz1pLnN0YXRpY1JlbmRlckZucyk7cmV0dXJuIG5ldyBlLmNvbXBvbmVudE9wdGlvbnMuQ3RvcihyKX0oZSxxdCkpLiRtb3VudCh0P2UuZWxtOnZvaWQgMCx0KX19LHByZXBhdGNoOmZ1bmN0aW9uKHQsbil7dmFyIHI9bi5jb21wb25lbnRPcHRpb25zOyFmdW5jdGlvbih0LG4scixpLG8pe3ZhciBhPSEhKGkuZGF0YS5zY29wZWRTbG90cyYmIWkuZGF0YS5zY29wZWRTbG90cy4kc3RhYmxlfHx0LiRzY29wZWRTbG90cyE9PWUmJiF0LiRzY29wZWRTbG90cy4kc3RhYmxlKSxzPSEhKG98fHQuJG9wdGlvbnMuX3JlbmRlckNoaWxkcmVufHxhKTt0LiRvcHRpb25zLl9wYXJlbnRWbm9kZT1pLHQuJHZub2RlPWksdC5fdm5vZGUmJih0Ll92bm9kZS5wYXJlbnQ9aSk7aWYodC4kb3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW49byx0LiRhdHRycz1pLmRhdGEuYXR0cnN8fGUsdC4kbGlzdGVuZXJzPXJ8fGUsbiYmdC4kb3B0aW9ucy5wcm9wcyl7YmUoITEpO2Zvcih2YXIgYz10Ll9wcm9wcyx1PXQuJG9wdGlvbnMuX3Byb3BLZXlzfHxbXSxsPTA7bDx1Lmxlbmd0aDtsKyspe3ZhciBmPXVbbF0scD10LiRvcHRpb25zLnByb3BzO2NbZl09TWUoZixwLG4sdCl9YmUoITApLHQuJG9wdGlvbnMucHJvcHNEYXRhPW59cj1yfHxlO3ZhciBkPXQuJG9wdGlvbnMuX3BhcmVudExpc3RlbmVyczt0LiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnM9cixKdCh0LHIsZCkscyYmKHQuJHNsb3RzPWN0KG8saS5jb250ZXh0KSx0LiRmb3JjZVVwZGF0ZSgpKX0obi5jb21wb25lbnRJbnN0YW5jZT10LmNvbXBvbmVudEluc3RhbmNlLHIucHJvcHNEYXRhLHIubGlzdGVuZXJzLG4sci5jaGlsZHJlbil9LGluc2VydDpmdW5jdGlvbihlKXt2YXIgdCxuPWUuY29udGV4dCxyPWUuY29tcG9uZW50SW5zdGFuY2U7ci5faXNNb3VudGVkfHwoci5faXNNb3VudGVkPSEwLFh0KHIsXCJtb3VudGVkXCIpKSxlLmRhdGEua2VlcEFsaXZlJiYobi5faXNNb3VudGVkPygodD1yKS5faW5hY3RpdmU9ITEsUXQucHVzaCh0KSk6R3QociwhMCkpfSxkZXN0cm95OmZ1bmN0aW9uKGUpe3ZhciB0PWUuY29tcG9uZW50SW5zdGFuY2U7dC5faXNEZXN0cm95ZWR8fChlLmRhdGEua2VlcEFsaXZlP2Z1bmN0aW9uIGUodCxuKXtpZihuJiYodC5fZGlyZWN0SW5hY3RpdmU9ITAsWnQodCkpKXJldHVybjtpZighdC5faW5hY3RpdmUpe3QuX2luYWN0aXZlPSEwO2Zvcih2YXIgcj0wO3I8dC4kY2hpbGRyZW4ubGVuZ3RoO3IrKyllKHQuJGNoaWxkcmVuW3JdKTtYdCh0LFwiZGVhY3RpdmF0ZWRcIil9fSh0LCEwKTp0LiRkZXN0cm95KCkpfX0sanQ9T2JqZWN0LmtleXMoTnQpO2Z1bmN0aW9uIEx0KGksYSxzLGMsbCl7aWYoIXQoaSkpe3ZhciBmPXMuJG9wdGlvbnMuX2Jhc2U7aWYobyhpKSYmKGk9Zi5leHRlbmQoaSkpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGkpe3ZhciBwO2lmKHQoaS5jaWQpJiZ2b2lkIDA9PT0oaT1mdW5jdGlvbihlLGkpe2lmKHIoZS5lcnJvcikmJm4oZS5lcnJvckNvbXApKXJldHVybiBlLmVycm9yQ29tcDtpZihuKGUucmVzb2x2ZWQpKXJldHVybiBlLnJlc29sdmVkO2lmKHIoZS5sb2FkaW5nKSYmbihlLmxvYWRpbmdDb21wKSlyZXR1cm4gZS5sb2FkaW5nQ29tcDt2YXIgYT1GdDtpZighbihlLm93bmVycykpe3ZhciBzPWUub3duZXJzPVthXSxjPSEwLGw9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTAsbj1zLmxlbmd0aDt0PG47dCsrKXNbdF0uJGZvcmNlVXBkYXRlKCk7ZSYmKHMubGVuZ3RoPTApfSxmPUwoZnVuY3Rpb24odCl7ZS5yZXNvbHZlZD1IdCh0LGkpLGM/cy5sZW5ndGg9MDpsKCEwKX0pLHA9TChmdW5jdGlvbih0KXtuKGUuZXJyb3JDb21wKSYmKGUuZXJyb3I9ITAsbCghMCkpfSksZD1lKGYscCk7cmV0dXJuIG8oZCkmJih1KGQpP3QoZS5yZXNvbHZlZCkmJmQudGhlbihmLHApOnUoZC5jb21wb25lbnQpJiYoZC5jb21wb25lbnQudGhlbihmLHApLG4oZC5lcnJvcikmJihlLmVycm9yQ29tcD1IdChkLmVycm9yLGkpKSxuKGQubG9hZGluZykmJihlLmxvYWRpbmdDb21wPUh0KGQubG9hZGluZyxpKSwwPT09ZC5kZWxheT9lLmxvYWRpbmc9ITA6c2V0VGltZW91dChmdW5jdGlvbigpe3QoZS5yZXNvbHZlZCkmJnQoZS5lcnJvcikmJihlLmxvYWRpbmc9ITAsbCghMSkpfSxkLmRlbGF5fHwyMDApKSxuKGQudGltZW91dCkmJnNldFRpbWVvdXQoZnVuY3Rpb24oKXt0KGUucmVzb2x2ZWQpJiZwKG51bGwpfSxkLnRpbWVvdXQpKSksYz0hMSxlLmxvYWRpbmc/ZS5sb2FkaW5nQ29tcDplLnJlc29sdmVkfWUub3duZXJzLnB1c2goYSl9KHA9aSxmKSkpcmV0dXJuIGZ1bmN0aW9uKGUsdCxuLHIsaSl7dmFyIG89ZGUoKTtyZXR1cm4gby5hc3luY0ZhY3Rvcnk9ZSxvLmFzeW5jTWV0YT17ZGF0YTp0LGNvbnRleHQ6bixjaGlsZHJlbjpyLHRhZzppfSxvfShwLGEscyxjLGwpO2E9YXx8e30sX24oaSksbihhLm1vZGVsKSYmZnVuY3Rpb24oZSx0KXt2YXIgcj1lLm1vZGVsJiZlLm1vZGVsLnByb3B8fFwidmFsdWVcIixpPWUubW9kZWwmJmUubW9kZWwuZXZlbnR8fFwiaW5wdXRcIjsodC5hdHRyc3x8KHQuYXR0cnM9e30pKVtyXT10Lm1vZGVsLnZhbHVlO3ZhciBvPXQub258fCh0Lm9uPXt9KSxhPW9baV0scz10Lm1vZGVsLmNhbGxiYWNrO24oYSk/KEFycmF5LmlzQXJyYXkoYSk/LTE9PT1hLmluZGV4T2Yocyk6YSE9PXMpJiYob1tpXT1bc10uY29uY2F0KGEpKTpvW2ldPXN9KGkub3B0aW9ucyxhKTt2YXIgZD1mdW5jdGlvbihlLHIsaSl7dmFyIG89ci5vcHRpb25zLnByb3BzO2lmKCF0KG8pKXt2YXIgYT17fSxzPWUuYXR0cnMsYz1lLnByb3BzO2lmKG4ocyl8fG4oYykpZm9yKHZhciB1IGluIG8pe3ZhciBsPUModSk7aXQoYSxjLHUsbCwhMCl8fGl0KGEscyx1LGwsITEpfXJldHVybiBhfX0oYSxpKTtpZihyKGkub3B0aW9ucy5mdW5jdGlvbmFsKSlyZXR1cm4gZnVuY3Rpb24odCxyLGksbyxhKXt2YXIgcz10Lm9wdGlvbnMsYz17fSx1PXMucHJvcHM7aWYobih1KSlmb3IodmFyIGwgaW4gdSljW2xdPU1lKGwsdSxyfHxlKTtlbHNlIG4oaS5hdHRycykmJkV0KGMsaS5hdHRycyksbihpLnByb3BzKSYmRXQoYyxpLnByb3BzKTt2YXIgZj1uZXcgU3QoaSxjLGEsbyx0KSxwPXMucmVuZGVyLmNhbGwobnVsbCxmLl9jLGYpO2lmKHAgaW5zdGFuY2VvZiBmZSlyZXR1cm4gVHQocCxpLGYucGFyZW50LHMpO2lmKEFycmF5LmlzQXJyYXkocCkpe2Zvcih2YXIgZD1vdChwKXx8W10sdj1uZXcgQXJyYXkoZC5sZW5ndGgpLGg9MDtoPGQubGVuZ3RoO2grKyl2W2hdPVR0KGRbaF0saSxmLnBhcmVudCxzKTtyZXR1cm4gdn19KGksZCxhLHMsYyk7dmFyIHY9YS5vbjtpZihhLm9uPWEubmF0aXZlT24scihpLm9wdGlvbnMuYWJzdHJhY3QpKXt2YXIgaD1hLnNsb3Q7YT17fSxoJiYoYS5zbG90PWgpfSFmdW5jdGlvbihlKXtmb3IodmFyIHQ9ZS5ob29rfHwoZS5ob29rPXt9KSxuPTA7bjxqdC5sZW5ndGg7bisrKXt2YXIgcj1qdFtuXSxpPXRbcl0sbz1OdFtyXTtpPT09b3x8aSYmaS5fbWVyZ2VkfHwodFtyXT1pP010KG8saSk6byl9fShhKTt2YXIgbT1pLm9wdGlvbnMubmFtZXx8bDtyZXR1cm4gbmV3IGZlKFwidnVlLWNvbXBvbmVudC1cIitpLmNpZCsobT9cIi1cIittOlwiXCIpLGEsdm9pZCAwLHZvaWQgMCx2b2lkIDAscyx7Q3RvcjppLHByb3BzRGF0YTpkLGxpc3RlbmVyczp2LHRhZzpsLGNoaWxkcmVuOmN9LHApfX19ZnVuY3Rpb24gTXQoZSx0KXt2YXIgbj1mdW5jdGlvbihuLHIpe2UobixyKSx0KG4scil9O3JldHVybiBuLl9tZXJnZWQ9ITAsbn12YXIgSXQ9MSxEdD0yO2Z1bmN0aW9uIFB0KGUsYSxzLGMsdSxsKXtyZXR1cm4oQXJyYXkuaXNBcnJheShzKXx8aShzKSkmJih1PWMsYz1zLHM9dm9pZCAwKSxyKGwpJiYodT1EdCksZnVuY3Rpb24oZSxpLGEscyxjKXtpZihuKGEpJiZuKGEuX19vYl9fKSlyZXR1cm4gZGUoKTtuKGEpJiZuKGEuaXMpJiYoaT1hLmlzKTtpZighaSlyZXR1cm4gZGUoKTtBcnJheS5pc0FycmF5KHMpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBzWzBdJiYoKGE9YXx8e30pLnNjb3BlZFNsb3RzPXtkZWZhdWx0OnNbMF19LHMubGVuZ3RoPTApO2M9PT1EdD9zPW90KHMpOmM9PT1JdCYmKHM9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0KyspaWYoQXJyYXkuaXNBcnJheShlW3RdKSlyZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSxlKTtyZXR1cm4gZX0ocykpO3ZhciB1LGw7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGkpe3ZhciBmO2w9ZS4kdm5vZGUmJmUuJHZub2RlLm5zfHxQLmdldFRhZ05hbWVzcGFjZShpKSx1PVAuaXNSZXNlcnZlZFRhZyhpKT9uZXcgZmUoUC5wYXJzZVBsYXRmb3JtVGFnTmFtZShpKSxhLHMsdm9pZCAwLHZvaWQgMCxlKTphJiZhLnByZXx8IW4oZj1MZShlLiRvcHRpb25zLFwiY29tcG9uZW50c1wiLGkpKT9uZXcgZmUoaSxhLHMsdm9pZCAwLHZvaWQgMCxlKTpMdChmLGEsZSxzLGkpfWVsc2UgdT1MdChpLGEsZSxzKTtyZXR1cm4gQXJyYXkuaXNBcnJheSh1KT91Om4odSk/KG4obCkmJmZ1bmN0aW9uIGUoaSxvLGEpe2kubnM9bztcImZvcmVpZ25PYmplY3RcIj09PWkudGFnJiYobz12b2lkIDAsYT0hMCk7aWYobihpLmNoaWxkcmVuKSlmb3IodmFyIHM9MCxjPWkuY2hpbGRyZW4ubGVuZ3RoO3M8YztzKyspe3ZhciB1PWkuY2hpbGRyZW5bc107bih1LnRhZykmJih0KHUubnMpfHxyKGEpJiZcInN2Z1wiIT09dS50YWcpJiZlKHUsbyxhKX19KHUsbCksbihhKSYmZnVuY3Rpb24oZSl7byhlLnN0eWxlKSYmUWUoZS5zdHlsZSk7byhlLmNsYXNzKSYmUWUoZS5jbGFzcyl9KGEpLHUpOmRlKCl9KGUsYSxzLGMsdSl9dmFyIFJ0LEZ0PW51bGw7ZnVuY3Rpb24gSHQoZSx0KXtyZXR1cm4oZS5fX2VzTW9kdWxlfHxpZSYmXCJNb2R1bGVcIj09PWVbU3ltYm9sLnRvU3RyaW5nVGFnXSkmJihlPWUuZGVmYXVsdCksbyhlKT90LmV4dGVuZChlKTplfWZ1bmN0aW9uIEJ0KGUpe3JldHVybiBlLmlzQ29tbWVudCYmZS5hc3luY0ZhY3Rvcnl9ZnVuY3Rpb24gVXQoZSl7aWYoQXJyYXkuaXNBcnJheShlKSlmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7dmFyIHI9ZVt0XTtpZihuKHIpJiYobihyLmNvbXBvbmVudE9wdGlvbnMpfHxCdChyKSkpcmV0dXJuIHJ9fWZ1bmN0aW9uIHp0KGUsdCl7UnQuJG9uKGUsdCl9ZnVuY3Rpb24gVnQoZSx0KXtSdC4kb2ZmKGUsdCl9ZnVuY3Rpb24gS3QoZSx0KXt2YXIgbj1SdDtyZXR1cm4gZnVuY3Rpb24gcigpe251bGwhPT10LmFwcGx5KG51bGwsYXJndW1lbnRzKSYmbi4kb2ZmKGUscil9fWZ1bmN0aW9uIEp0KGUsdCxuKXtSdD1lLG50KHQsbnx8e30senQsVnQsS3QsZSksUnQ9dm9pZCAwfXZhciBxdD1udWxsO2Z1bmN0aW9uIFd0KGUpe3ZhciB0PXF0O3JldHVybiBxdD1lLGZ1bmN0aW9uKCl7cXQ9dH19ZnVuY3Rpb24gWnQoZSl7Zm9yKDtlJiYoZT1lLiRwYXJlbnQpOylpZihlLl9pbmFjdGl2ZSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBHdChlLHQpe2lmKHQpe2lmKGUuX2RpcmVjdEluYWN0aXZlPSExLFp0KGUpKXJldHVybn1lbHNlIGlmKGUuX2RpcmVjdEluYWN0aXZlKXJldHVybjtpZihlLl9pbmFjdGl2ZXx8bnVsbD09PWUuX2luYWN0aXZlKXtlLl9pbmFjdGl2ZT0hMTtmb3IodmFyIG49MDtuPGUuJGNoaWxkcmVuLmxlbmd0aDtuKyspR3QoZS4kY2hpbGRyZW5bbl0pO1h0KGUsXCJhY3RpdmF0ZWRcIil9fWZ1bmN0aW9uIFh0KGUsdCl7dWUoKTt2YXIgbj1lLiRvcHRpb25zW3RdLHI9dCtcIiBob29rXCI7aWYobilmb3IodmFyIGk9MCxvPW4ubGVuZ3RoO2k8bztpKyspRmUobltpXSxlLG51bGwsZSxyKTtlLl9oYXNIb29rRXZlbnQmJmUuJGVtaXQoXCJob29rOlwiK3QpLGxlKCl9dmFyIFl0PVtdLFF0PVtdLGVuPXt9LHRuPSExLG5uPSExLHJuPTA7dmFyIG9uPTAsYW49RGF0ZS5ub3c7ZnVuY3Rpb24gc24oKXt2YXIgZSx0O2Zvcihvbj1hbigpLG5uPSEwLFl0LnNvcnQoZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5pZC10LmlkfSkscm49MDtybjxZdC5sZW5ndGg7cm4rKykoZT1ZdFtybl0pLmJlZm9yZSYmZS5iZWZvcmUoKSx0PWUuaWQsZW5bdF09bnVsbCxlLnJ1bigpO3ZhciBuPVF0LnNsaWNlKCkscj1ZdC5zbGljZSgpO3JuPVl0Lmxlbmd0aD1RdC5sZW5ndGg9MCxlbj17fSx0bj1ubj0hMSxmdW5jdGlvbihlKXtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyllW3RdLl9pbmFjdGl2ZT0hMCxHdChlW3RdLCEwKX0obiksZnVuY3Rpb24oZSl7dmFyIHQ9ZS5sZW5ndGg7Zm9yKDt0LS07KXt2YXIgbj1lW3RdLHI9bi52bTtyLl93YXRjaGVyPT09biYmci5faXNNb3VudGVkJiYhci5faXNEZXN0cm95ZWQmJlh0KHIsXCJ1cGRhdGVkXCIpfX0ociksdGUmJlAuZGV2dG9vbHMmJnRlLmVtaXQoXCJmbHVzaFwiKX1VJiZhbigpPmRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIikudGltZVN0YW1wJiYoYW49ZnVuY3Rpb24oKXtyZXR1cm4gcGVyZm9ybWFuY2Uubm93KCl9KTt2YXIgY249MCx1bj1mdW5jdGlvbihlLHQsbixyLGkpe3RoaXMudm09ZSxpJiYoZS5fd2F0Y2hlcj10aGlzKSxlLl93YXRjaGVycy5wdXNoKHRoaXMpLHI/KHRoaXMuZGVlcD0hIXIuZGVlcCx0aGlzLnVzZXI9ISFyLnVzZXIsdGhpcy5sYXp5PSEhci5sYXp5LHRoaXMuc3luYz0hIXIuc3luYyx0aGlzLmJlZm9yZT1yLmJlZm9yZSk6dGhpcy5kZWVwPXRoaXMudXNlcj10aGlzLmxhenk9dGhpcy5zeW5jPSExLHRoaXMuY2I9bix0aGlzLmlkPSsrY24sdGhpcy5hY3RpdmU9ITAsdGhpcy5kaXJ0eT10aGlzLmxhenksdGhpcy5kZXBzPVtdLHRoaXMubmV3RGVwcz1bXSx0aGlzLmRlcElkcz1uZXcgcmUsdGhpcy5uZXdEZXBJZHM9bmV3IHJlLHRoaXMuZXhwcmVzc2lvbj1cIlwiLFwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dGhpcy5nZXR0ZXI9dDoodGhpcy5nZXR0ZXI9ZnVuY3Rpb24oZSl7aWYoIUYudGVzdChlKSl7dmFyIHQ9ZS5zcGxpdChcIi5cIik7cmV0dXJuIGZ1bmN0aW9uKGUpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXtpZighZSlyZXR1cm47ZT1lW3Rbbl1dfXJldHVybiBlfX19KHQpLHRoaXMuZ2V0dGVyfHwodGhpcy5nZXR0ZXI9UykpLHRoaXMudmFsdWU9dGhpcy5sYXp5P3ZvaWQgMDp0aGlzLmdldCgpfTt1bi5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKCl7dmFyIGU7dWUodGhpcyk7dmFyIHQ9dGhpcy52bTt0cnl7ZT10aGlzLmdldHRlci5jYWxsKHQsdCl9Y2F0Y2goZSl7aWYoIXRoaXMudXNlcil0aHJvdyBlO1JlKGUsdCwnZ2V0dGVyIGZvciB3YXRjaGVyIFwiJyt0aGlzLmV4cHJlc3Npb24rJ1wiJyl9ZmluYWxseXt0aGlzLmRlZXAmJlFlKGUpLGxlKCksdGhpcy5jbGVhbnVwRGVwcygpfXJldHVybiBlfSx1bi5wcm90b3R5cGUuYWRkRGVwPWZ1bmN0aW9uKGUpe3ZhciB0PWUuaWQ7dGhpcy5uZXdEZXBJZHMuaGFzKHQpfHwodGhpcy5uZXdEZXBJZHMuYWRkKHQpLHRoaXMubmV3RGVwcy5wdXNoKGUpLHRoaXMuZGVwSWRzLmhhcyh0KXx8ZS5hZGRTdWIodGhpcykpfSx1bi5wcm90b3R5cGUuY2xlYW51cERlcHM9ZnVuY3Rpb24oKXtmb3IodmFyIGU9dGhpcy5kZXBzLmxlbmd0aDtlLS07KXt2YXIgdD10aGlzLmRlcHNbZV07dGhpcy5uZXdEZXBJZHMuaGFzKHQuaWQpfHx0LnJlbW92ZVN1Yih0aGlzKX12YXIgbj10aGlzLmRlcElkczt0aGlzLmRlcElkcz10aGlzLm5ld0RlcElkcyx0aGlzLm5ld0RlcElkcz1uLHRoaXMubmV3RGVwSWRzLmNsZWFyKCksbj10aGlzLmRlcHMsdGhpcy5kZXBzPXRoaXMubmV3RGVwcyx0aGlzLm5ld0RlcHM9bix0aGlzLm5ld0RlcHMubGVuZ3RoPTB9LHVuLnByb3RvdHlwZS51cGRhdGU9ZnVuY3Rpb24oKXt0aGlzLmxhenk/dGhpcy5kaXJ0eT0hMDp0aGlzLnN5bmM/dGhpcy5ydW4oKTpmdW5jdGlvbihlKXt2YXIgdD1lLmlkO2lmKG51bGw9PWVuW3RdKXtpZihlblt0XT0hMCxubil7Zm9yKHZhciBuPVl0Lmxlbmd0aC0xO24+cm4mJll0W25dLmlkPmUuaWQ7KW4tLTtZdC5zcGxpY2UobisxLDAsZSl9ZWxzZSBZdC5wdXNoKGUpO3RufHwodG49ITAsWGUoc24pKX19KHRoaXMpfSx1bi5wcm90b3R5cGUucnVuPWZ1bmN0aW9uKCl7aWYodGhpcy5hY3RpdmUpe3ZhciBlPXRoaXMuZ2V0KCk7aWYoZSE9PXRoaXMudmFsdWV8fG8oZSl8fHRoaXMuZGVlcCl7dmFyIHQ9dGhpcy52YWx1ZTtpZih0aGlzLnZhbHVlPWUsdGhpcy51c2VyKXRyeXt0aGlzLmNiLmNhbGwodGhpcy52bSxlLHQpfWNhdGNoKGUpe1JlKGUsdGhpcy52bSwnY2FsbGJhY2sgZm9yIHdhdGNoZXIgXCInK3RoaXMuZXhwcmVzc2lvbisnXCInKX1lbHNlIHRoaXMuY2IuY2FsbCh0aGlzLnZtLGUsdCl9fX0sdW4ucHJvdG90eXBlLmV2YWx1YXRlPWZ1bmN0aW9uKCl7dGhpcy52YWx1ZT10aGlzLmdldCgpLHRoaXMuZGlydHk9ITF9LHVuLnByb3RvdHlwZS5kZXBlbmQ9ZnVuY3Rpb24oKXtmb3IodmFyIGU9dGhpcy5kZXBzLmxlbmd0aDtlLS07KXRoaXMuZGVwc1tlXS5kZXBlbmQoKX0sdW4ucHJvdG90eXBlLnRlYXJkb3duPWZ1bmN0aW9uKCl7aWYodGhpcy5hY3RpdmUpe3RoaXMudm0uX2lzQmVpbmdEZXN0cm95ZWR8fGgodGhpcy52bS5fd2F0Y2hlcnMsdGhpcyk7Zm9yKHZhciBlPXRoaXMuZGVwcy5sZW5ndGg7ZS0tOyl0aGlzLmRlcHNbZV0ucmVtb3ZlU3ViKHRoaXMpO3RoaXMuYWN0aXZlPSExfX07dmFyIGxuPXtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6UyxzZXQ6U307ZnVuY3Rpb24gZm4oZSx0LG4pe2xuLmdldD1mdW5jdGlvbigpe3JldHVybiB0aGlzW3RdW25dfSxsbi5zZXQ9ZnVuY3Rpb24oZSl7dGhpc1t0XVtuXT1lfSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxuLGxuKX1mdW5jdGlvbiBwbihlKXtlLl93YXRjaGVycz1bXTt2YXIgdD1lLiRvcHRpb25zO3QucHJvcHMmJmZ1bmN0aW9uKGUsdCl7dmFyIG49ZS4kb3B0aW9ucy5wcm9wc0RhdGF8fHt9LHI9ZS5fcHJvcHM9e30saT1lLiRvcHRpb25zLl9wcm9wS2V5cz1bXTtlLiRwYXJlbnQmJmJlKCExKTt2YXIgbz1mdW5jdGlvbihvKXtpLnB1c2gobyk7dmFyIGE9TWUobyx0LG4sZSk7Q2UocixvLGEpLG8gaW4gZXx8Zm4oZSxcIl9wcm9wc1wiLG8pfTtmb3IodmFyIGEgaW4gdClvKGEpO2JlKCEwKX0oZSx0LnByb3BzKSx0Lm1ldGhvZHMmJmZ1bmN0aW9uKGUsdCl7ZS4kb3B0aW9ucy5wcm9wcztmb3IodmFyIG4gaW4gdCllW25dPVwiZnVuY3Rpb25cIiE9dHlwZW9mIHRbbl0/Uzp4KHRbbl0sZSl9KGUsdC5tZXRob2RzKSx0LmRhdGE/ZnVuY3Rpb24oZSl7dmFyIHQ9ZS4kb3B0aW9ucy5kYXRhO3ModD1lLl9kYXRhPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/ZnVuY3Rpb24oZSx0KXt1ZSgpO3RyeXtyZXR1cm4gZS5jYWxsKHQsdCl9Y2F0Y2goZSl7cmV0dXJuIFJlKGUsdCxcImRhdGEoKVwiKSx7fX1maW5hbGx5e2xlKCl9fSh0LGUpOnR8fHt9KXx8KHQ9e30pO3ZhciBuPU9iamVjdC5rZXlzKHQpLHI9ZS4kb3B0aW9ucy5wcm9wcyxpPShlLiRvcHRpb25zLm1ldGhvZHMsbi5sZW5ndGgpO2Zvcig7aS0tOyl7dmFyIG89bltpXTtyJiZ5KHIsbyl8fChhPXZvaWQgMCwzNiE9PShhPShvK1wiXCIpLmNoYXJDb2RlQXQoMCkpJiY5NSE9PWEmJmZuKGUsXCJfZGF0YVwiLG8pKX12YXIgYTt3ZSh0LCEwKX0oZSk6d2UoZS5fZGF0YT17fSwhMCksdC5jb21wdXRlZCYmZnVuY3Rpb24oZSx0KXt2YXIgbj1lLl9jb21wdXRlZFdhdGNoZXJzPU9iamVjdC5jcmVhdGUobnVsbCkscj1lZSgpO2Zvcih2YXIgaSBpbiB0KXt2YXIgbz10W2ldLGE9XCJmdW5jdGlvblwiPT10eXBlb2Ygbz9vOm8uZ2V0O3J8fChuW2ldPW5ldyB1bihlLGF8fFMsUyxkbikpLGkgaW4gZXx8dm4oZSxpLG8pfX0oZSx0LmNvbXB1dGVkKSx0LndhdGNoJiZ0LndhdGNoIT09WCYmZnVuY3Rpb24oZSx0KXtmb3IodmFyIG4gaW4gdCl7dmFyIHI9dFtuXTtpZihBcnJheS5pc0FycmF5KHIpKWZvcih2YXIgaT0wO2k8ci5sZW5ndGg7aSsrKXluKGUsbixyW2ldKTtlbHNlIHluKGUsbixyKX19KGUsdC53YXRjaCl9dmFyIGRuPXtsYXp5OiEwfTtmdW5jdGlvbiB2bihlLHQsbil7dmFyIHI9IWVlKCk7XCJmdW5jdGlvblwiPT10eXBlb2Ygbj8obG4uZ2V0PXI/aG4odCk6bW4obiksbG4uc2V0PVMpOihsbi5nZXQ9bi5nZXQ/ciYmITEhPT1uLmNhY2hlP2huKHQpOm1uKG4uZ2V0KTpTLGxuLnNldD1uLnNldHx8UyksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCxsbil9ZnVuY3Rpb24gaG4oZSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fY29tcHV0ZWRXYXRjaGVycyYmdGhpcy5fY29tcHV0ZWRXYXRjaGVyc1tlXTtpZih0KXJldHVybiB0LmRpcnR5JiZ0LmV2YWx1YXRlKCksc2UudGFyZ2V0JiZ0LmRlcGVuZCgpLHQudmFsdWV9fWZ1bmN0aW9uIG1uKGUpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBlLmNhbGwodGhpcyx0aGlzKX19ZnVuY3Rpb24geW4oZSx0LG4scil7cmV0dXJuIHMobikmJihyPW4sbj1uLmhhbmRsZXIpLFwic3RyaW5nXCI9PXR5cGVvZiBuJiYobj1lW25dKSxlLiR3YXRjaCh0LG4scil9dmFyIGduPTA7ZnVuY3Rpb24gX24oZSl7dmFyIHQ9ZS5vcHRpb25zO2lmKGUuc3VwZXIpe3ZhciBuPV9uKGUuc3VwZXIpO2lmKG4hPT1lLnN1cGVyT3B0aW9ucyl7ZS5zdXBlck9wdGlvbnM9bjt2YXIgcj1mdW5jdGlvbihlKXt2YXIgdCxuPWUub3B0aW9ucyxyPWUuc2VhbGVkT3B0aW9ucztmb3IodmFyIGkgaW4gbiluW2ldIT09cltpXSYmKHR8fCh0PXt9KSx0W2ldPW5baV0pO3JldHVybiB0fShlKTtyJiZrKGUuZXh0ZW5kT3B0aW9ucyxyKSwodD1lLm9wdGlvbnM9amUobixlLmV4dGVuZE9wdGlvbnMpKS5uYW1lJiYodC5jb21wb25lbnRzW3QubmFtZV09ZSl9fXJldHVybiB0fWZ1bmN0aW9uIGJuKGUpe3RoaXMuX2luaXQoZSl9ZnVuY3Rpb24gJG4oZSl7ZS5jaWQ9MDt2YXIgdD0xO2UuZXh0ZW5kPWZ1bmN0aW9uKGUpe2U9ZXx8e307dmFyIG49dGhpcyxyPW4uY2lkLGk9ZS5fQ3Rvcnx8KGUuX0N0b3I9e30pO2lmKGlbcl0pcmV0dXJuIGlbcl07dmFyIG89ZS5uYW1lfHxuLm9wdGlvbnMubmFtZSxhPWZ1bmN0aW9uKGUpe3RoaXMuX2luaXQoZSl9O3JldHVybihhLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKG4ucHJvdG90eXBlKSkuY29uc3RydWN0b3I9YSxhLmNpZD10KyssYS5vcHRpb25zPWplKG4ub3B0aW9ucyxlKSxhLnN1cGVyPW4sYS5vcHRpb25zLnByb3BzJiZmdW5jdGlvbihlKXt2YXIgdD1lLm9wdGlvbnMucHJvcHM7Zm9yKHZhciBuIGluIHQpZm4oZS5wcm90b3R5cGUsXCJfcHJvcHNcIixuKX0oYSksYS5vcHRpb25zLmNvbXB1dGVkJiZmdW5jdGlvbihlKXt2YXIgdD1lLm9wdGlvbnMuY29tcHV0ZWQ7Zm9yKHZhciBuIGluIHQpdm4oZS5wcm90b3R5cGUsbix0W25dKX0oYSksYS5leHRlbmQ9bi5leHRlbmQsYS5taXhpbj1uLm1peGluLGEudXNlPW4udXNlLEkuZm9yRWFjaChmdW5jdGlvbihlKXthW2VdPW5bZV19KSxvJiYoYS5vcHRpb25zLmNvbXBvbmVudHNbb109YSksYS5zdXBlck9wdGlvbnM9bi5vcHRpb25zLGEuZXh0ZW5kT3B0aW9ucz1lLGEuc2VhbGVkT3B0aW9ucz1rKHt9LGEub3B0aW9ucyksaVtyXT1hLGF9fWZ1bmN0aW9uIHduKGUpe3JldHVybiBlJiYoZS5DdG9yLm9wdGlvbnMubmFtZXx8ZS50YWcpfWZ1bmN0aW9uIENuKGUsdCl7cmV0dXJuIEFycmF5LmlzQXJyYXkoZSk/ZS5pbmRleE9mKHQpPi0xOlwic3RyaW5nXCI9PXR5cGVvZiBlP2Uuc3BsaXQoXCIsXCIpLmluZGV4T2YodCk+LTE6KG49ZSxcIltvYmplY3QgUmVnRXhwXVwiPT09YS5jYWxsKG4pJiZlLnRlc3QodCkpO3ZhciBufWZ1bmN0aW9uIHhuKGUsdCl7dmFyIG49ZS5jYWNoZSxyPWUua2V5cyxpPWUuX3Zub2RlO2Zvcih2YXIgbyBpbiBuKXt2YXIgYT1uW29dO2lmKGEpe3ZhciBzPXduKGEuY29tcG9uZW50T3B0aW9ucyk7cyYmIXQocykmJkFuKG4sbyxyLGkpfX19ZnVuY3Rpb24gQW4oZSx0LG4scil7dmFyIGk9ZVt0XTshaXx8ciYmaS50YWc9PT1yLnRhZ3x8aS5jb21wb25lbnRJbnN0YW5jZS4kZGVzdHJveSgpLGVbdF09bnVsbCxoKG4sdCl9IWZ1bmN0aW9uKHQpe3QucHJvdG90eXBlLl9pbml0PWZ1bmN0aW9uKHQpe3ZhciBuPXRoaXM7bi5fdWlkPWduKyssbi5faXNWdWU9ITAsdCYmdC5faXNDb21wb25lbnQ/ZnVuY3Rpb24oZSx0KXt2YXIgbj1lLiRvcHRpb25zPU9iamVjdC5jcmVhdGUoZS5jb25zdHJ1Y3Rvci5vcHRpb25zKSxyPXQuX3BhcmVudFZub2RlO24ucGFyZW50PXQucGFyZW50LG4uX3BhcmVudFZub2RlPXI7dmFyIGk9ci5jb21wb25lbnRPcHRpb25zO24ucHJvcHNEYXRhPWkucHJvcHNEYXRhLG4uX3BhcmVudExpc3RlbmVycz1pLmxpc3RlbmVycyxuLl9yZW5kZXJDaGlsZHJlbj1pLmNoaWxkcmVuLG4uX2NvbXBvbmVudFRhZz1pLnRhZyx0LnJlbmRlciYmKG4ucmVuZGVyPXQucmVuZGVyLG4uc3RhdGljUmVuZGVyRm5zPXQuc3RhdGljUmVuZGVyRm5zKX0obix0KTpuLiRvcHRpb25zPWplKF9uKG4uY29uc3RydWN0b3IpLHR8fHt9LG4pLG4uX3JlbmRlclByb3h5PW4sbi5fc2VsZj1uLGZ1bmN0aW9uKGUpe3ZhciB0PWUuJG9wdGlvbnMsbj10LnBhcmVudDtpZihuJiYhdC5hYnN0cmFjdCl7Zm9yKDtuLiRvcHRpb25zLmFic3RyYWN0JiZuLiRwYXJlbnQ7KW49bi4kcGFyZW50O24uJGNoaWxkcmVuLnB1c2goZSl9ZS4kcGFyZW50PW4sZS4kcm9vdD1uP24uJHJvb3Q6ZSxlLiRjaGlsZHJlbj1bXSxlLiRyZWZzPXt9LGUuX3dhdGNoZXI9bnVsbCxlLl9pbmFjdGl2ZT1udWxsLGUuX2RpcmVjdEluYWN0aXZlPSExLGUuX2lzTW91bnRlZD0hMSxlLl9pc0Rlc3Ryb3llZD0hMSxlLl9pc0JlaW5nRGVzdHJveWVkPSExfShuKSxmdW5jdGlvbihlKXtlLl9ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKSxlLl9oYXNIb29rRXZlbnQ9ITE7dmFyIHQ9ZS4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzO3QmJkp0KGUsdCl9KG4pLGZ1bmN0aW9uKHQpe3QuX3Zub2RlPW51bGwsdC5fc3RhdGljVHJlZXM9bnVsbDt2YXIgbj10LiRvcHRpb25zLHI9dC4kdm5vZGU9bi5fcGFyZW50Vm5vZGUsaT1yJiZyLmNvbnRleHQ7dC4kc2xvdHM9Y3Qobi5fcmVuZGVyQ2hpbGRyZW4saSksdC4kc2NvcGVkU2xvdHM9ZSx0Ll9jPWZ1bmN0aW9uKGUsbixyLGkpe3JldHVybiBQdCh0LGUsbixyLGksITEpfSx0LiRjcmVhdGVFbGVtZW50PWZ1bmN0aW9uKGUsbixyLGkpe3JldHVybiBQdCh0LGUsbixyLGksITApfTt2YXIgbz1yJiZyLmRhdGE7Q2UodCxcIiRhdHRyc1wiLG8mJm8uYXR0cnN8fGUsbnVsbCwhMCksQ2UodCxcIiRsaXN0ZW5lcnNcIixuLl9wYXJlbnRMaXN0ZW5lcnN8fGUsbnVsbCwhMCl9KG4pLFh0KG4sXCJiZWZvcmVDcmVhdGVcIiksZnVuY3Rpb24oZSl7dmFyIHQ9c3QoZS4kb3B0aW9ucy5pbmplY3QsZSk7dCYmKGJlKCExKSxPYmplY3Qua2V5cyh0KS5mb3JFYWNoKGZ1bmN0aW9uKG4pe0NlKGUsbix0W25dKX0pLGJlKCEwKSl9KG4pLHBuKG4pLGZ1bmN0aW9uKGUpe3ZhciB0PWUuJG9wdGlvbnMucHJvdmlkZTt0JiYoZS5fcHJvdmlkZWQ9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90LmNhbGwoZSk6dCl9KG4pLFh0KG4sXCJjcmVhdGVkXCIpLG4uJG9wdGlvbnMuZWwmJm4uJG1vdW50KG4uJG9wdGlvbnMuZWwpfX0oYm4pLGZ1bmN0aW9uKGUpe3ZhciB0PXtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZGF0YX19LG49e2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9wcm9wc319O09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLnByb3RvdHlwZSxcIiRkYXRhXCIsdCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUucHJvdG90eXBlLFwiJHByb3BzXCIsbiksZS5wcm90b3R5cGUuJHNldD14ZSxlLnByb3RvdHlwZS4kZGVsZXRlPUFlLGUucHJvdG90eXBlLiR3YXRjaD1mdW5jdGlvbihlLHQsbil7aWYocyh0KSlyZXR1cm4geW4odGhpcyxlLHQsbik7KG49bnx8e30pLnVzZXI9ITA7dmFyIHI9bmV3IHVuKHRoaXMsZSx0LG4pO2lmKG4uaW1tZWRpYXRlKXRyeXt0LmNhbGwodGhpcyxyLnZhbHVlKX1jYXRjaChlKXtSZShlLHRoaXMsJ2NhbGxiYWNrIGZvciBpbW1lZGlhdGUgd2F0Y2hlciBcIicrci5leHByZXNzaW9uKydcIicpfXJldHVybiBmdW5jdGlvbigpe3IudGVhcmRvd24oKX19fShibiksZnVuY3Rpb24oZSl7dmFyIHQ9L15ob29rOi87ZS5wcm90b3R5cGUuJG9uPWZ1bmN0aW9uKGUsbil7dmFyIHI9dGhpcztpZihBcnJheS5pc0FycmF5KGUpKWZvcih2YXIgaT0wLG89ZS5sZW5ndGg7aTxvO2krKylyLiRvbihlW2ldLG4pO2Vsc2Uoci5fZXZlbnRzW2VdfHwoci5fZXZlbnRzW2VdPVtdKSkucHVzaChuKSx0LnRlc3QoZSkmJihyLl9oYXNIb29rRXZlbnQ9ITApO3JldHVybiByfSxlLnByb3RvdHlwZS4kb25jZT1mdW5jdGlvbihlLHQpe3ZhciBuPXRoaXM7ZnVuY3Rpb24gcigpe24uJG9mZihlLHIpLHQuYXBwbHkobixhcmd1bWVudHMpfXJldHVybiByLmZuPXQsbi4kb24oZSxyKSxufSxlLnByb3RvdHlwZS4kb2ZmPWZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcztpZighYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gbi5fZXZlbnRzPU9iamVjdC5jcmVhdGUobnVsbCksbjtpZihBcnJheS5pc0FycmF5KGUpKXtmb3IodmFyIHI9MCxpPWUubGVuZ3RoO3I8aTtyKyspbi4kb2ZmKGVbcl0sdCk7cmV0dXJuIG59dmFyIG8sYT1uLl9ldmVudHNbZV07aWYoIWEpcmV0dXJuIG47aWYoIXQpcmV0dXJuIG4uX2V2ZW50c1tlXT1udWxsLG47Zm9yKHZhciBzPWEubGVuZ3RoO3MtLTspaWYoKG89YVtzXSk9PT10fHxvLmZuPT09dCl7YS5zcGxpY2UocywxKTticmVha31yZXR1cm4gbn0sZS5wcm90b3R5cGUuJGVtaXQ9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5fZXZlbnRzW2VdO2lmKHQpe3Q9dC5sZW5ndGg+MT9BKHQpOnQ7Zm9yKHZhciBuPUEoYXJndW1lbnRzLDEpLHI9J2V2ZW50IGhhbmRsZXIgZm9yIFwiJytlKydcIicsaT0wLG89dC5sZW5ndGg7aTxvO2krKylGZSh0W2ldLHRoaXMsbix0aGlzLHIpfXJldHVybiB0aGlzfX0oYm4pLGZ1bmN0aW9uKGUpe2UucHJvdG90eXBlLl91cGRhdGU9ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzLHI9bi4kZWwsaT1uLl92bm9kZSxvPVd0KG4pO24uX3Zub2RlPWUsbi4kZWw9aT9uLl9fcGF0Y2hfXyhpLGUpOm4uX19wYXRjaF9fKG4uJGVsLGUsdCwhMSksbygpLHImJihyLl9fdnVlX189bnVsbCksbi4kZWwmJihuLiRlbC5fX3Z1ZV9fPW4pLG4uJHZub2RlJiZuLiRwYXJlbnQmJm4uJHZub2RlPT09bi4kcGFyZW50Ll92bm9kZSYmKG4uJHBhcmVudC4kZWw9bi4kZWwpfSxlLnByb3RvdHlwZS4kZm9yY2VVcGRhdGU9ZnVuY3Rpb24oKXt0aGlzLl93YXRjaGVyJiZ0aGlzLl93YXRjaGVyLnVwZGF0ZSgpfSxlLnByb3RvdHlwZS4kZGVzdHJveT1mdW5jdGlvbigpe3ZhciBlPXRoaXM7aWYoIWUuX2lzQmVpbmdEZXN0cm95ZWQpe1h0KGUsXCJiZWZvcmVEZXN0cm95XCIpLGUuX2lzQmVpbmdEZXN0cm95ZWQ9ITA7dmFyIHQ9ZS4kcGFyZW50OyF0fHx0Ll9pc0JlaW5nRGVzdHJveWVkfHxlLiRvcHRpb25zLmFic3RyYWN0fHxoKHQuJGNoaWxkcmVuLGUpLGUuX3dhdGNoZXImJmUuX3dhdGNoZXIudGVhcmRvd24oKTtmb3IodmFyIG49ZS5fd2F0Y2hlcnMubGVuZ3RoO24tLTspZS5fd2F0Y2hlcnNbbl0udGVhcmRvd24oKTtlLl9kYXRhLl9fb2JfXyYmZS5fZGF0YS5fX29iX18udm1Db3VudC0tLGUuX2lzRGVzdHJveWVkPSEwLGUuX19wYXRjaF9fKGUuX3Zub2RlLG51bGwpLFh0KGUsXCJkZXN0cm95ZWRcIiksZS4kb2ZmKCksZS4kZWwmJihlLiRlbC5fX3Z1ZV9fPW51bGwpLGUuJHZub2RlJiYoZS4kdm5vZGUucGFyZW50PW51bGwpfX19KGJuKSxmdW5jdGlvbihlKXtPdChlLnByb3RvdHlwZSksZS5wcm90b3R5cGUuJG5leHRUaWNrPWZ1bmN0aW9uKGUpe3JldHVybiBYZShlLHRoaXMpfSxlLnByb3RvdHlwZS5fcmVuZGVyPWZ1bmN0aW9uKCl7dmFyIGUsdD10aGlzLG49dC4kb3B0aW9ucyxyPW4ucmVuZGVyLGk9bi5fcGFyZW50Vm5vZGU7aSYmKHQuJHNjb3BlZFNsb3RzPWx0KGkuZGF0YS5zY29wZWRTbG90cyx0LiRzbG90cyx0LiRzY29wZWRTbG90cykpLHQuJHZub2RlPWk7dHJ5e0Z0PXQsZT1yLmNhbGwodC5fcmVuZGVyUHJveHksdC4kY3JlYXRlRWxlbWVudCl9Y2F0Y2gobil7UmUobix0LFwicmVuZGVyXCIpLGU9dC5fdm5vZGV9ZmluYWxseXtGdD1udWxsfXJldHVybiBBcnJheS5pc0FycmF5KGUpJiYxPT09ZS5sZW5ndGgmJihlPWVbMF0pLGUgaW5zdGFuY2VvZiBmZXx8KGU9ZGUoKSksZS5wYXJlbnQ9aSxlfX0oYm4pO3ZhciBrbj1bU3RyaW5nLFJlZ0V4cCxBcnJheV0sT249e0tlZXBBbGl2ZTp7bmFtZTpcImtlZXAtYWxpdmVcIixhYnN0cmFjdDohMCxwcm9wczp7aW5jbHVkZTprbixleGNsdWRlOmtuLG1heDpbU3RyaW5nLE51bWJlcl19LGNyZWF0ZWQ6ZnVuY3Rpb24oKXt0aGlzLmNhY2hlPU9iamVjdC5jcmVhdGUobnVsbCksdGhpcy5rZXlzPVtdfSxkZXN0cm95ZWQ6ZnVuY3Rpb24oKXtmb3IodmFyIGUgaW4gdGhpcy5jYWNoZSlBbih0aGlzLmNhY2hlLGUsdGhpcy5rZXlzKX0sbW91bnRlZDpmdW5jdGlvbigpe3ZhciBlPXRoaXM7dGhpcy4kd2F0Y2goXCJpbmNsdWRlXCIsZnVuY3Rpb24odCl7eG4oZSxmdW5jdGlvbihlKXtyZXR1cm4gQ24odCxlKX0pfSksdGhpcy4kd2F0Y2goXCJleGNsdWRlXCIsZnVuY3Rpb24odCl7eG4oZSxmdW5jdGlvbihlKXtyZXR1cm4hQ24odCxlKX0pfSl9LHJlbmRlcjpmdW5jdGlvbigpe3ZhciBlPXRoaXMuJHNsb3RzLmRlZmF1bHQsdD1VdChlKSxuPXQmJnQuY29tcG9uZW50T3B0aW9ucztpZihuKXt2YXIgcj13bihuKSxpPXRoaXMuaW5jbHVkZSxvPXRoaXMuZXhjbHVkZTtpZihpJiYoIXJ8fCFDbihpLHIpKXx8byYmciYmQ24obyxyKSlyZXR1cm4gdDt2YXIgYT10aGlzLmNhY2hlLHM9dGhpcy5rZXlzLGM9bnVsbD09dC5rZXk/bi5DdG9yLmNpZCsobi50YWc/XCI6OlwiK24udGFnOlwiXCIpOnQua2V5O2FbY10/KHQuY29tcG9uZW50SW5zdGFuY2U9YVtjXS5jb21wb25lbnRJbnN0YW5jZSxoKHMsYykscy5wdXNoKGMpKTooYVtjXT10LHMucHVzaChjKSx0aGlzLm1heCYmcy5sZW5ndGg+cGFyc2VJbnQodGhpcy5tYXgpJiZBbihhLHNbMF0scyx0aGlzLl92bm9kZSkpLHQuZGF0YS5rZWVwQWxpdmU9ITB9cmV0dXJuIHR8fGUmJmVbMF19fX07IWZ1bmN0aW9uKGUpe3ZhciB0PXtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gUH19O09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiY29uZmlnXCIsdCksZS51dGlsPXt3YXJuOm9lLGV4dGVuZDprLG1lcmdlT3B0aW9uczpqZSxkZWZpbmVSZWFjdGl2ZTpDZX0sZS5zZXQ9eGUsZS5kZWxldGU9QWUsZS5uZXh0VGljaz1YZSxlLm9ic2VydmFibGU9ZnVuY3Rpb24oZSl7cmV0dXJuIHdlKGUpLGV9LGUub3B0aW9ucz1PYmplY3QuY3JlYXRlKG51bGwpLEkuZm9yRWFjaChmdW5jdGlvbih0KXtlLm9wdGlvbnNbdCtcInNcIl09T2JqZWN0LmNyZWF0ZShudWxsKX0pLGUub3B0aW9ucy5fYmFzZT1lLGsoZS5vcHRpb25zLmNvbXBvbmVudHMsT24pLGZ1bmN0aW9uKGUpe2UudXNlPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuX2luc3RhbGxlZFBsdWdpbnN8fCh0aGlzLl9pbnN0YWxsZWRQbHVnaW5zPVtdKTtpZih0LmluZGV4T2YoZSk+LTEpcmV0dXJuIHRoaXM7dmFyIG49QShhcmd1bWVudHMsMSk7cmV0dXJuIG4udW5zaGlmdCh0aGlzKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLmluc3RhbGw/ZS5pbnN0YWxsLmFwcGx5KGUsbik6XCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZS5hcHBseShudWxsLG4pLHQucHVzaChlKSx0aGlzfX0oZSksZnVuY3Rpb24oZSl7ZS5taXhpbj1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5vcHRpb25zPWplKHRoaXMub3B0aW9ucyxlKSx0aGlzfX0oZSksJG4oZSksZnVuY3Rpb24oZSl7SS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2VbdF09ZnVuY3Rpb24oZSxuKXtyZXR1cm4gbj8oXCJjb21wb25lbnRcIj09PXQmJnMobikmJihuLm5hbWU9bi5uYW1lfHxlLG49dGhpcy5vcHRpb25zLl9iYXNlLmV4dGVuZChuKSksXCJkaXJlY3RpdmVcIj09PXQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJihuPXtiaW5kOm4sdXBkYXRlOm59KSx0aGlzLm9wdGlvbnNbdCtcInNcIl1bZV09bixuKTp0aGlzLm9wdGlvbnNbdCtcInNcIl1bZV19fSl9KGUpfShibiksT2JqZWN0LmRlZmluZVByb3BlcnR5KGJuLnByb3RvdHlwZSxcIiRpc1NlcnZlclwiLHtnZXQ6ZWV9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoYm4ucHJvdG90eXBlLFwiJHNzckNvbnRleHRcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJHZub2RlJiZ0aGlzLiR2bm9kZS5zc3JDb250ZXh0fX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShibixcIkZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0XCIse3ZhbHVlOlN0fSksYm4udmVyc2lvbj1cIjIuNi40XCI7dmFyIFNuPXAoXCJzdHlsZSxjbGFzc1wiKSxUbj1wKFwiaW5wdXQsdGV4dGFyZWEsb3B0aW9uLHNlbGVjdCxwcm9ncmVzc1wiKSxFbj1mdW5jdGlvbihlLHQsbil7cmV0dXJuXCJ2YWx1ZVwiPT09biYmVG4oZSkmJlwiYnV0dG9uXCIhPT10fHxcInNlbGVjdGVkXCI9PT1uJiZcIm9wdGlvblwiPT09ZXx8XCJjaGVja2VkXCI9PT1uJiZcImlucHV0XCI9PT1lfHxcIm11dGVkXCI9PT1uJiZcInZpZGVvXCI9PT1lfSxObj1wKFwiY29udGVudGVkaXRhYmxlLGRyYWdnYWJsZSxzcGVsbGNoZWNrXCIpLGpuPXAoXCJldmVudHMsY2FyZXQsdHlwaW5nLHBsYWludGV4dC1vbmx5XCIpLExuPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIFJuKHQpfHxcImZhbHNlXCI9PT10P1wiZmFsc2VcIjpcImNvbnRlbnRlZGl0YWJsZVwiPT09ZSYmam4odCk/dDpcInRydWVcIn0sTW49cChcImFsbG93ZnVsbHNjcmVlbixhc3luYyxhdXRvZm9jdXMsYXV0b3BsYXksY2hlY2tlZCxjb21wYWN0LGNvbnRyb2xzLGRlY2xhcmUsZGVmYXVsdCxkZWZhdWx0Y2hlY2tlZCxkZWZhdWx0bXV0ZWQsZGVmYXVsdHNlbGVjdGVkLGRlZmVyLGRpc2FibGVkLGVuYWJsZWQsZm9ybW5vdmFsaWRhdGUsaGlkZGVuLGluZGV0ZXJtaW5hdGUsaW5lcnQsaXNtYXAsaXRlbXNjb3BlLGxvb3AsbXVsdGlwbGUsbXV0ZWQsbm9ocmVmLG5vcmVzaXplLG5vc2hhZGUsbm92YWxpZGF0ZSxub3dyYXAsb3BlbixwYXVzZW9uZXhpdCxyZWFkb25seSxyZXF1aXJlZCxyZXZlcnNlZCxzY29wZWQsc2VhbWxlc3Msc2VsZWN0ZWQsc29ydGFibGUsdHJhbnNsYXRlLHRydWVzcGVlZCx0eXBlbXVzdG1hdGNoLHZpc2libGVcIiksSW49XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsRG49ZnVuY3Rpb24oZSl7cmV0dXJuXCI6XCI9PT1lLmNoYXJBdCg1KSYmXCJ4bGlua1wiPT09ZS5zbGljZSgwLDUpfSxQbj1mdW5jdGlvbihlKXtyZXR1cm4gRG4oZSk/ZS5zbGljZSg2LGUubGVuZ3RoKTpcIlwifSxSbj1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZXx8ITE9PT1lfTtmdW5jdGlvbiBGbihlKXtmb3IodmFyIHQ9ZS5kYXRhLHI9ZSxpPWU7bihpLmNvbXBvbmVudEluc3RhbmNlKTspKGk9aS5jb21wb25lbnRJbnN0YW5jZS5fdm5vZGUpJiZpLmRhdGEmJih0PUhuKGkuZGF0YSx0KSk7Zm9yKDtuKHI9ci5wYXJlbnQpOylyJiZyLmRhdGEmJih0PUhuKHQsci5kYXRhKSk7cmV0dXJuIGZ1bmN0aW9uKGUsdCl7aWYobihlKXx8bih0KSlyZXR1cm4gQm4oZSxVbih0KSk7cmV0dXJuXCJcIn0odC5zdGF0aWNDbGFzcyx0LmNsYXNzKX1mdW5jdGlvbiBIbihlLHQpe3JldHVybntzdGF0aWNDbGFzczpCbihlLnN0YXRpY0NsYXNzLHQuc3RhdGljQ2xhc3MpLGNsYXNzOm4oZS5jbGFzcyk/W2UuY2xhc3MsdC5jbGFzc106dC5jbGFzc319ZnVuY3Rpb24gQm4oZSx0KXtyZXR1cm4gZT90P2UrXCIgXCIrdDplOnR8fFwiXCJ9ZnVuY3Rpb24gVW4oZSl7cmV0dXJuIEFycmF5LmlzQXJyYXkoZSk/ZnVuY3Rpb24oZSl7Zm9yKHZhciB0LHI9XCJcIixpPTAsbz1lLmxlbmd0aDtpPG87aSsrKW4odD1VbihlW2ldKSkmJlwiXCIhPT10JiYociYmKHIrPVwiIFwiKSxyKz10KTtyZXR1cm4gcn0oZSk6byhlKT9mdW5jdGlvbihlKXt2YXIgdD1cIlwiO2Zvcih2YXIgbiBpbiBlKWVbbl0mJih0JiYodCs9XCIgXCIpLHQrPW4pO3JldHVybiB0fShlKTpcInN0cmluZ1wiPT10eXBlb2YgZT9lOlwiXCJ9dmFyIHpuPXtzdmc6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLG1hdGg6XCJodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MXCJ9LFZuPXAoXCJodG1sLGJvZHksYmFzZSxoZWFkLGxpbmssbWV0YSxzdHlsZSx0aXRsZSxhZGRyZXNzLGFydGljbGUsYXNpZGUsZm9vdGVyLGhlYWRlcixoMSxoMixoMyxoNCxoNSxoNixoZ3JvdXAsbmF2LHNlY3Rpb24sZGl2LGRkLGRsLGR0LGZpZ2NhcHRpb24sZmlndXJlLHBpY3R1cmUsaHIsaW1nLGxpLG1haW4sb2wscCxwcmUsdWwsYSxiLGFiYnIsYmRpLGJkbyxicixjaXRlLGNvZGUsZGF0YSxkZm4sZW0saSxrYmQsbWFyayxxLHJwLHJ0LHJ0YyxydWJ5LHMsc2FtcCxzbWFsbCxzcGFuLHN0cm9uZyxzdWIsc3VwLHRpbWUsdSx2YXIsd2JyLGFyZWEsYXVkaW8sbWFwLHRyYWNrLHZpZGVvLGVtYmVkLG9iamVjdCxwYXJhbSxzb3VyY2UsY2FudmFzLHNjcmlwdCxub3NjcmlwdCxkZWwsaW5zLGNhcHRpb24sY29sLGNvbGdyb3VwLHRhYmxlLHRoZWFkLHRib2R5LHRkLHRoLHRyLGJ1dHRvbixkYXRhbGlzdCxmaWVsZHNldCxmb3JtLGlucHV0LGxhYmVsLGxlZ2VuZCxtZXRlcixvcHRncm91cCxvcHRpb24sb3V0cHV0LHByb2dyZXNzLHNlbGVjdCx0ZXh0YXJlYSxkZXRhaWxzLGRpYWxvZyxtZW51LG1lbnVpdGVtLHN1bW1hcnksY29udGVudCxlbGVtZW50LHNoYWRvdyx0ZW1wbGF0ZSxibG9ja3F1b3RlLGlmcmFtZSx0Zm9vdFwiKSxLbj1wKFwic3ZnLGFuaW1hdGUsY2lyY2xlLGNsaXBwYXRoLGN1cnNvcixkZWZzLGRlc2MsZWxsaXBzZSxmaWx0ZXIsZm9udC1mYWNlLGZvcmVpZ25PYmplY3QsZyxnbHlwaCxpbWFnZSxsaW5lLG1hcmtlcixtYXNrLG1pc3NpbmctZ2x5cGgscGF0aCxwYXR0ZXJuLHBvbHlnb24scG9seWxpbmUscmVjdCxzd2l0Y2gsc3ltYm9sLHRleHQsdGV4dHBhdGgsdHNwYW4sdXNlLHZpZXdcIiwhMCksSm49ZnVuY3Rpb24oZSl7cmV0dXJuIFZuKGUpfHxLbihlKX07ZnVuY3Rpb24gcW4oZSl7cmV0dXJuIEtuKGUpP1wic3ZnXCI6XCJtYXRoXCI9PT1lP1wibWF0aFwiOnZvaWQgMH12YXIgV249T2JqZWN0LmNyZWF0ZShudWxsKTt2YXIgWm49cChcInRleHQsbnVtYmVyLHBhc3N3b3JkLHNlYXJjaCxlbWFpbCx0ZWwsdXJsXCIpO2Z1bmN0aW9uIEduKGUpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXt2YXIgdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUpO3JldHVybiB0fHxkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpfXJldHVybiBlfXZhciBYbj1PYmplY3QuZnJlZXplKHtjcmVhdGVFbGVtZW50OmZ1bmN0aW9uKGUsdCl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlKTtyZXR1cm5cInNlbGVjdFwiIT09ZT9uOih0LmRhdGEmJnQuZGF0YS5hdHRycyYmdm9pZCAwIT09dC5kYXRhLmF0dHJzLm11bHRpcGxlJiZuLnNldEF0dHJpYnV0ZShcIm11bHRpcGxlXCIsXCJtdWx0aXBsZVwiKSxuKX0sY3JlYXRlRWxlbWVudE5TOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh6bltlXSx0KX0sY3JlYXRlVGV4dE5vZGU6ZnVuY3Rpb24oZSl7cmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGUpfSxjcmVhdGVDb21tZW50OmZ1bmN0aW9uKGUpe3JldHVybiBkb2N1bWVudC5jcmVhdGVDb21tZW50KGUpfSxpbnNlcnRCZWZvcmU6ZnVuY3Rpb24oZSx0LG4pe2UuaW5zZXJ0QmVmb3JlKHQsbil9LHJlbW92ZUNoaWxkOmZ1bmN0aW9uKGUsdCl7ZS5yZW1vdmVDaGlsZCh0KX0sYXBwZW5kQ2hpbGQ6ZnVuY3Rpb24oZSx0KXtlLmFwcGVuZENoaWxkKHQpfSxwYXJlbnROb2RlOmZ1bmN0aW9uKGUpe3JldHVybiBlLnBhcmVudE5vZGV9LG5leHRTaWJsaW5nOmZ1bmN0aW9uKGUpe3JldHVybiBlLm5leHRTaWJsaW5nfSx0YWdOYW1lOmZ1bmN0aW9uKGUpe3JldHVybiBlLnRhZ05hbWV9LHNldFRleHRDb250ZW50OmZ1bmN0aW9uKGUsdCl7ZS50ZXh0Q29udGVudD10fSxzZXRTdHlsZVNjb3BlOmZ1bmN0aW9uKGUsdCl7ZS5zZXRBdHRyaWJ1dGUodCxcIlwiKX19KSxZbj17Y3JlYXRlOmZ1bmN0aW9uKGUsdCl7UW4odCl9LHVwZGF0ZTpmdW5jdGlvbihlLHQpe2UuZGF0YS5yZWYhPT10LmRhdGEucmVmJiYoUW4oZSwhMCksUW4odCkpfSxkZXN0cm95OmZ1bmN0aW9uKGUpe1FuKGUsITApfX07ZnVuY3Rpb24gUW4oZSx0KXt2YXIgcj1lLmRhdGEucmVmO2lmKG4ocikpe3ZhciBpPWUuY29udGV4dCxvPWUuY29tcG9uZW50SW5zdGFuY2V8fGUuZWxtLGE9aS4kcmVmczt0P0FycmF5LmlzQXJyYXkoYVtyXSk/aChhW3JdLG8pOmFbcl09PT1vJiYoYVtyXT12b2lkIDApOmUuZGF0YS5yZWZJbkZvcj9BcnJheS5pc0FycmF5KGFbcl0pP2Fbcl0uaW5kZXhPZihvKTwwJiZhW3JdLnB1c2gobyk6YVtyXT1bb106YVtyXT1vfX12YXIgZXI9bmV3IGZlKFwiXCIse30sW10pLHRyPVtcImNyZWF0ZVwiLFwiYWN0aXZhdGVcIixcInVwZGF0ZVwiLFwicmVtb3ZlXCIsXCJkZXN0cm95XCJdO2Z1bmN0aW9uIG5yKGUsaSl7cmV0dXJuIGUua2V5PT09aS5rZXkmJihlLnRhZz09PWkudGFnJiZlLmlzQ29tbWVudD09PWkuaXNDb21tZW50JiZuKGUuZGF0YSk9PT1uKGkuZGF0YSkmJmZ1bmN0aW9uKGUsdCl7aWYoXCJpbnB1dFwiIT09ZS50YWcpcmV0dXJuITA7dmFyIHIsaT1uKHI9ZS5kYXRhKSYmbihyPXIuYXR0cnMpJiZyLnR5cGUsbz1uKHI9dC5kYXRhKSYmbihyPXIuYXR0cnMpJiZyLnR5cGU7cmV0dXJuIGk9PT1vfHxabihpKSYmWm4obyl9KGUsaSl8fHIoZS5pc0FzeW5jUGxhY2Vob2xkZXIpJiZlLmFzeW5jRmFjdG9yeT09PWkuYXN5bmNGYWN0b3J5JiZ0KGkuYXN5bmNGYWN0b3J5LmVycm9yKSl9ZnVuY3Rpb24gcnIoZSx0LHIpe3ZhciBpLG8sYT17fTtmb3IoaT10O2k8PXI7KytpKW4obz1lW2ldLmtleSkmJihhW29dPWkpO3JldHVybiBhfXZhciBpcj17Y3JlYXRlOm9yLHVwZGF0ZTpvcixkZXN0cm95OmZ1bmN0aW9uKGUpe29yKGUsZXIpfX07ZnVuY3Rpb24gb3IoZSx0KXsoZS5kYXRhLmRpcmVjdGl2ZXN8fHQuZGF0YS5kaXJlY3RpdmVzKSYmZnVuY3Rpb24oZSx0KXt2YXIgbixyLGksbz1lPT09ZXIsYT10PT09ZXIscz1zcihlLmRhdGEuZGlyZWN0aXZlcyxlLmNvbnRleHQpLGM9c3IodC5kYXRhLmRpcmVjdGl2ZXMsdC5jb250ZXh0KSx1PVtdLGw9W107Zm9yKG4gaW4gYylyPXNbbl0saT1jW25dLHI/KGkub2xkVmFsdWU9ci52YWx1ZSxpLm9sZEFyZz1yLmFyZyx1cihpLFwidXBkYXRlXCIsdCxlKSxpLmRlZiYmaS5kZWYuY29tcG9uZW50VXBkYXRlZCYmbC5wdXNoKGkpKToodXIoaSxcImJpbmRcIix0LGUpLGkuZGVmJiZpLmRlZi5pbnNlcnRlZCYmdS5wdXNoKGkpKTtpZih1Lmxlbmd0aCl7dmFyIGY9ZnVuY3Rpb24oKXtmb3IodmFyIG49MDtuPHUubGVuZ3RoO24rKyl1cih1W25dLFwiaW5zZXJ0ZWRcIix0LGUpfTtvP3J0KHQsXCJpbnNlcnRcIixmKTpmKCl9bC5sZW5ndGgmJnJ0KHQsXCJwb3N0cGF0Y2hcIixmdW5jdGlvbigpe2Zvcih2YXIgbj0wO248bC5sZW5ndGg7bisrKXVyKGxbbl0sXCJjb21wb25lbnRVcGRhdGVkXCIsdCxlKX0pO2lmKCFvKWZvcihuIGluIHMpY1tuXXx8dXIoc1tuXSxcInVuYmluZFwiLGUsZSxhKX0oZSx0KX12YXIgYXI9T2JqZWN0LmNyZWF0ZShudWxsKTtmdW5jdGlvbiBzcihlLHQpe3ZhciBuLHIsaT1PYmplY3QuY3JlYXRlKG51bGwpO2lmKCFlKXJldHVybiBpO2ZvcihuPTA7bjxlLmxlbmd0aDtuKyspKHI9ZVtuXSkubW9kaWZpZXJzfHwoci5tb2RpZmllcnM9YXIpLGlbY3IocildPXIsci5kZWY9TGUodC4kb3B0aW9ucyxcImRpcmVjdGl2ZXNcIixyLm5hbWUpO3JldHVybiBpfWZ1bmN0aW9uIGNyKGUpe3JldHVybiBlLnJhd05hbWV8fGUubmFtZStcIi5cIitPYmplY3Qua2V5cyhlLm1vZGlmaWVyc3x8e30pLmpvaW4oXCIuXCIpfWZ1bmN0aW9uIHVyKGUsdCxuLHIsaSl7dmFyIG89ZS5kZWYmJmUuZGVmW3RdO2lmKG8pdHJ5e28obi5lbG0sZSxuLHIsaSl9Y2F0Y2gocil7UmUocixuLmNvbnRleHQsXCJkaXJlY3RpdmUgXCIrZS5uYW1lK1wiIFwiK3QrXCIgaG9va1wiKX19dmFyIGxyPVtZbixpcl07ZnVuY3Rpb24gZnIoZSxyKXt2YXIgaT1yLmNvbXBvbmVudE9wdGlvbnM7aWYoIShuKGkpJiYhMT09PWkuQ3Rvci5vcHRpb25zLmluaGVyaXRBdHRyc3x8dChlLmRhdGEuYXR0cnMpJiZ0KHIuZGF0YS5hdHRycykpKXt2YXIgbyxhLHM9ci5lbG0sYz1lLmRhdGEuYXR0cnN8fHt9LHU9ci5kYXRhLmF0dHJzfHx7fTtmb3IobyBpbiBuKHUuX19vYl9fKSYmKHU9ci5kYXRhLmF0dHJzPWsoe30sdSkpLHUpYT11W29dLGNbb10hPT1hJiZwcihzLG8sYSk7Zm9yKG8gaW4oSnx8VykmJnUudmFsdWUhPT1jLnZhbHVlJiZwcihzLFwidmFsdWVcIix1LnZhbHVlKSxjKXQodVtvXSkmJihEbihvKT9zLnJlbW92ZUF0dHJpYnV0ZU5TKEluLFBuKG8pKTpObihvKXx8cy5yZW1vdmVBdHRyaWJ1dGUobykpfX1mdW5jdGlvbiBwcihlLHQsbil7ZS50YWdOYW1lLmluZGV4T2YoXCItXCIpPi0xP2RyKGUsdCxuKTpNbih0KT9SbihuKT9lLnJlbW92ZUF0dHJpYnV0ZSh0KToobj1cImFsbG93ZnVsbHNjcmVlblwiPT09dCYmXCJFTUJFRFwiPT09ZS50YWdOYW1lP1widHJ1ZVwiOnQsZS5zZXRBdHRyaWJ1dGUodCxuKSk6Tm4odCk/ZS5zZXRBdHRyaWJ1dGUodCxMbih0LG4pKTpEbih0KT9SbihuKT9lLnJlbW92ZUF0dHJpYnV0ZU5TKEluLFBuKHQpKTplLnNldEF0dHJpYnV0ZU5TKEluLHQsbik6ZHIoZSx0LG4pfWZ1bmN0aW9uIGRyKGUsdCxuKXtpZihSbihuKSllLnJlbW92ZUF0dHJpYnV0ZSh0KTtlbHNle2lmKEomJiFxJiZcIlRFWFRBUkVBXCI9PT1lLnRhZ05hbWUmJlwicGxhY2Vob2xkZXJcIj09PXQmJlwiXCIhPT1uJiYhZS5fX2llcGgpe3ZhciByPWZ1bmN0aW9uKHQpe3Quc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiaW5wdXRcIixyKX07ZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIixyKSxlLl9faWVwaD0hMH1lLnNldEF0dHJpYnV0ZSh0LG4pfX12YXIgdnI9e2NyZWF0ZTpmcix1cGRhdGU6ZnJ9O2Z1bmN0aW9uIGhyKGUscil7dmFyIGk9ci5lbG0sbz1yLmRhdGEsYT1lLmRhdGE7aWYoISh0KG8uc3RhdGljQ2xhc3MpJiZ0KG8uY2xhc3MpJiYodChhKXx8dChhLnN0YXRpY0NsYXNzKSYmdChhLmNsYXNzKSkpKXt2YXIgcz1GbihyKSxjPWkuX3RyYW5zaXRpb25DbGFzc2VzO24oYykmJihzPUJuKHMsVW4oYykpKSxzIT09aS5fcHJldkNsYXNzJiYoaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLHMpLGkuX3ByZXZDbGFzcz1zKX19dmFyIG1yLHlyLGdyLF9yLGJyLCRyLHdyPXtjcmVhdGU6aHIsdXBkYXRlOmhyfSxDcj0vW1xcdykuK1xcLV8kXFxdXS87ZnVuY3Rpb24geHIoZSl7dmFyIHQsbixyLGksbyxhPSExLHM9ITEsYz0hMSx1PSExLGw9MCxmPTAscD0wLGQ9MDtmb3Iocj0wO3I8ZS5sZW5ndGg7cisrKWlmKG49dCx0PWUuY2hhckNvZGVBdChyKSxhKTM5PT09dCYmOTIhPT1uJiYoYT0hMSk7ZWxzZSBpZihzKTM0PT09dCYmOTIhPT1uJiYocz0hMSk7ZWxzZSBpZihjKTk2PT09dCYmOTIhPT1uJiYoYz0hMSk7ZWxzZSBpZih1KTQ3PT09dCYmOTIhPT1uJiYodT0hMSk7ZWxzZSBpZigxMjQhPT10fHwxMjQ9PT1lLmNoYXJDb2RlQXQocisxKXx8MTI0PT09ZS5jaGFyQ29kZUF0KHItMSl8fGx8fGZ8fHApe3N3aXRjaCh0KXtjYXNlIDM0OnM9ITA7YnJlYWs7Y2FzZSAzOTphPSEwO2JyZWFrO2Nhc2UgOTY6Yz0hMDticmVhaztjYXNlIDQwOnArKzticmVhaztjYXNlIDQxOnAtLTticmVhaztjYXNlIDkxOmYrKzticmVhaztjYXNlIDkzOmYtLTticmVhaztjYXNlIDEyMzpsKys7YnJlYWs7Y2FzZSAxMjU6bC0tfWlmKDQ3PT09dCl7Zm9yKHZhciB2PXItMSxoPXZvaWQgMDt2Pj0wJiZcIiBcIj09PShoPWUuY2hhckF0KHYpKTt2LS0pO2gmJkNyLnRlc3QoaCl8fCh1PSEwKX19ZWxzZSB2b2lkIDA9PT1pPyhkPXIrMSxpPWUuc2xpY2UoMCxyKS50cmltKCkpOm0oKTtmdW5jdGlvbiBtKCl7KG98fChvPVtdKSkucHVzaChlLnNsaWNlKGQscikudHJpbSgpKSxkPXIrMX1pZih2b2lkIDA9PT1pP2k9ZS5zbGljZSgwLHIpLnRyaW0oKTowIT09ZCYmbSgpLG8pZm9yKHI9MDtyPG8ubGVuZ3RoO3IrKylpPUFyKGksb1tyXSk7cmV0dXJuIGl9ZnVuY3Rpb24gQXIoZSx0KXt2YXIgbj10LmluZGV4T2YoXCIoXCIpO2lmKG48MClyZXR1cm4nX2YoXCInK3QrJ1wiKSgnK2UrXCIpXCI7dmFyIHI9dC5zbGljZSgwLG4pLGk9dC5zbGljZShuKzEpO3JldHVybidfZihcIicrcisnXCIpKCcrZSsoXCIpXCIhPT1pP1wiLFwiK2k6aSl9ZnVuY3Rpb24ga3IoZSx0KXtjb25zb2xlLmVycm9yKFwiW1Z1ZSBjb21waWxlcl06IFwiK2UpfWZ1bmN0aW9uIE9yKGUsdCl7cmV0dXJuIGU/ZS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIGVbdF19KS5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGV9KTpbXX1mdW5jdGlvbiBTcihlLHQsbixyLGkpeyhlLnByb3BzfHwoZS5wcm9wcz1bXSkpLnB1c2goUHIoe25hbWU6dCx2YWx1ZTpuLGR5bmFtaWM6aX0scikpLGUucGxhaW49ITF9ZnVuY3Rpb24gVHIoZSx0LG4scixpKXsoaT9lLmR5bmFtaWNBdHRyc3x8KGUuZHluYW1pY0F0dHJzPVtdKTplLmF0dHJzfHwoZS5hdHRycz1bXSkpLnB1c2goUHIoe25hbWU6dCx2YWx1ZTpuLGR5bmFtaWM6aX0scikpLGUucGxhaW49ITF9ZnVuY3Rpb24gRXIoZSx0LG4scil7ZS5hdHRyc01hcFt0XT1uLGUuYXR0cnNMaXN0LnB1c2goUHIoe25hbWU6dCx2YWx1ZTpufSxyKSl9ZnVuY3Rpb24gTnIoZSx0LG4scixpLG8sYSxzKXsoZS5kaXJlY3RpdmVzfHwoZS5kaXJlY3RpdmVzPVtdKSkucHVzaChQcih7bmFtZTp0LHJhd05hbWU6bix2YWx1ZTpyLGFyZzppLGlzRHluYW1pY0FyZzpvLG1vZGlmaWVyczphfSxzKSksZS5wbGFpbj0hMX1mdW5jdGlvbiBqcihlLHQsbil7cmV0dXJuIG4/XCJfcChcIit0KycsXCInK2UrJ1wiKSc6ZSt0fWZ1bmN0aW9uIExyKHQsbixyLGksbyxhLHMsYyl7dmFyIHU7KGk9aXx8ZSkucmlnaHQ/Yz9uPVwiKFwiK24rXCIpPT09J2NsaWNrJz8nY29udGV4dG1lbnUnOihcIituK1wiKVwiOlwiY2xpY2tcIj09PW4mJihuPVwiY29udGV4dG1lbnVcIixkZWxldGUgaS5yaWdodCk6aS5taWRkbGUmJihjP249XCIoXCIrbitcIik9PT0nY2xpY2snPydtb3VzZXVwJzooXCIrbitcIilcIjpcImNsaWNrXCI9PT1uJiYobj1cIm1vdXNldXBcIikpLGkuY2FwdHVyZSYmKGRlbGV0ZSBpLmNhcHR1cmUsbj1qcihcIiFcIixuLGMpKSxpLm9uY2UmJihkZWxldGUgaS5vbmNlLG49anIoXCJ+XCIsbixjKSksaS5wYXNzaXZlJiYoZGVsZXRlIGkucGFzc2l2ZSxuPWpyKFwiJlwiLG4sYykpLGkubmF0aXZlPyhkZWxldGUgaS5uYXRpdmUsdT10Lm5hdGl2ZUV2ZW50c3x8KHQubmF0aXZlRXZlbnRzPXt9KSk6dT10LmV2ZW50c3x8KHQuZXZlbnRzPXt9KTt2YXIgbD1Qcih7dmFsdWU6ci50cmltKCksZHluYW1pYzpjfSxzKTtpIT09ZSYmKGwubW9kaWZpZXJzPWkpO3ZhciBmPXVbbl07QXJyYXkuaXNBcnJheShmKT9vP2YudW5zaGlmdChsKTpmLnB1c2gobCk6dVtuXT1mP28/W2wsZl06W2YsbF06bCx0LnBsYWluPSExfWZ1bmN0aW9uIE1yKGUsdCxuKXt2YXIgcj1JcihlLFwiOlwiK3QpfHxJcihlLFwidi1iaW5kOlwiK3QpO2lmKG51bGwhPXIpcmV0dXJuIHhyKHIpO2lmKCExIT09bil7dmFyIGk9SXIoZSx0KTtpZihudWxsIT1pKXJldHVybiBKU09OLnN0cmluZ2lmeShpKX19ZnVuY3Rpb24gSXIoZSx0LG4pe3ZhciByO2lmKG51bGwhPShyPWUuYXR0cnNNYXBbdF0pKWZvcih2YXIgaT1lLmF0dHJzTGlzdCxvPTAsYT1pLmxlbmd0aDtvPGE7bysrKWlmKGlbb10ubmFtZT09PXQpe2kuc3BsaWNlKG8sMSk7YnJlYWt9cmV0dXJuIG4mJmRlbGV0ZSBlLmF0dHJzTWFwW3RdLHJ9ZnVuY3Rpb24gRHIoZSx0KXtmb3IodmFyIG49ZS5hdHRyc0xpc3Qscj0wLGk9bi5sZW5ndGg7cjxpO3IrKyl7dmFyIG89bltyXTtpZih0LnRlc3Qoby5uYW1lKSlyZXR1cm4gbi5zcGxpY2UociwxKSxvfX1mdW5jdGlvbiBQcihlLHQpe3JldHVybiB0JiYobnVsbCE9dC5zdGFydCYmKGUuc3RhcnQ9dC5zdGFydCksbnVsbCE9dC5lbmQmJihlLmVuZD10LmVuZCkpLGV9ZnVuY3Rpb24gUnIoZSx0LG4pe3ZhciByPW58fHt9LGk9ci5udW1iZXIsbz1cIiQkdlwiO3IudHJpbSYmKG89XCIodHlwZW9mICQkdiA9PT0gJ3N0cmluZyc/ICQkdi50cmltKCk6ICQkdilcIiksaSYmKG89XCJfbihcIitvK1wiKVwiKTt2YXIgYT1Gcih0LG8pO2UubW9kZWw9e3ZhbHVlOlwiKFwiK3QrXCIpXCIsZXhwcmVzc2lvbjpKU09OLnN0cmluZ2lmeSh0KSxjYWxsYmFjazpcImZ1bmN0aW9uICgkJHYpIHtcIithK1wifVwifX1mdW5jdGlvbiBGcihlLHQpe3ZhciBuPWZ1bmN0aW9uKGUpe2lmKGU9ZS50cmltKCksbXI9ZS5sZW5ndGgsZS5pbmRleE9mKFwiW1wiKTwwfHxlLmxhc3RJbmRleE9mKFwiXVwiKTxtci0xKXJldHVybihfcj1lLmxhc3RJbmRleE9mKFwiLlwiKSk+LTE/e2V4cDplLnNsaWNlKDAsX3IpLGtleTonXCInK2Uuc2xpY2UoX3IrMSkrJ1wiJ306e2V4cDplLGtleTpudWxsfTt5cj1lLF9yPWJyPSRyPTA7Zm9yKDshQnIoKTspVXIoZ3I9SHIoKSk/VnIoZ3IpOjkxPT09Z3ImJnpyKGdyKTtyZXR1cm57ZXhwOmUuc2xpY2UoMCxiciksa2V5OmUuc2xpY2UoYnIrMSwkcil9fShlKTtyZXR1cm4gbnVsbD09PW4ua2V5P2UrXCI9XCIrdDpcIiRzZXQoXCIrbi5leHArXCIsIFwiK24ua2V5K1wiLCBcIit0K1wiKVwifWZ1bmN0aW9uIEhyKCl7cmV0dXJuIHlyLmNoYXJDb2RlQXQoKytfcil9ZnVuY3Rpb24gQnIoKXtyZXR1cm4gX3I+PW1yfWZ1bmN0aW9uIFVyKGUpe3JldHVybiAzND09PWV8fDM5PT09ZX1mdW5jdGlvbiB6cihlKXt2YXIgdD0xO2Zvcihicj1fcjshQnIoKTspaWYoVXIoZT1IcigpKSlWcihlKTtlbHNlIGlmKDkxPT09ZSYmdCsrLDkzPT09ZSYmdC0tLDA9PT10KXskcj1fcjticmVha319ZnVuY3Rpb24gVnIoZSl7Zm9yKHZhciB0PWU7IUJyKCkmJihlPUhyKCkpIT09dDspO312YXIgS3IsSnI9XCJfX3JcIixxcj1cIl9fY1wiO2Z1bmN0aW9uIFdyKGUsdCxuKXt2YXIgcj1LcjtyZXR1cm4gZnVuY3Rpb24gaSgpe251bGwhPT10LmFwcGx5KG51bGwsYXJndW1lbnRzKSYmWHIoZSxpLG4scil9fXZhciBacj16ZSYmIShHJiZOdW1iZXIoR1sxXSk8PTUzKTtmdW5jdGlvbiBHcihlLHQsbixyKXtpZihacil7dmFyIGk9b24sbz10O3Q9by5fd3JhcHBlcj1mdW5jdGlvbihlKXtpZihlLnRpbWVTdGFtcD49aXx8ZS50YXJnZXQub3duZXJEb2N1bWVudCE9PWRvY3VtZW50KXJldHVybiBvLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19S3IuYWRkRXZlbnRMaXN0ZW5lcihlLHQsWT97Y2FwdHVyZTpuLHBhc3NpdmU6cn06bil9ZnVuY3Rpb24gWHIoZSx0LG4scil7KHJ8fEtyKS5yZW1vdmVFdmVudExpc3RlbmVyKGUsdC5fd3JhcHBlcnx8dCxuKX1mdW5jdGlvbiBZcihlLHIpe2lmKCF0KGUuZGF0YS5vbil8fCF0KHIuZGF0YS5vbikpe3ZhciBpPXIuZGF0YS5vbnx8e30sbz1lLmRhdGEub258fHt9O0tyPXIuZWxtLGZ1bmN0aW9uKGUpe2lmKG4oZVtKcl0pKXt2YXIgdD1KP1wiY2hhbmdlXCI6XCJpbnB1dFwiO2VbdF09W10uY29uY2F0KGVbSnJdLGVbdF18fFtdKSxkZWxldGUgZVtKcl19bihlW3FyXSkmJihlLmNoYW5nZT1bXS5jb25jYXQoZVtxcl0sZS5jaGFuZ2V8fFtdKSxkZWxldGUgZVtxcl0pfShpKSxudChpLG8sR3IsWHIsV3Isci5jb250ZXh0KSxLcj12b2lkIDB9fXZhciBRcixlaT17Y3JlYXRlOllyLHVwZGF0ZTpZcn07ZnVuY3Rpb24gdGkoZSxyKXtpZighdChlLmRhdGEuZG9tUHJvcHMpfHwhdChyLmRhdGEuZG9tUHJvcHMpKXt2YXIgaSxvLGE9ci5lbG0scz1lLmRhdGEuZG9tUHJvcHN8fHt9LGM9ci5kYXRhLmRvbVByb3BzfHx7fTtmb3IoaSBpbiBuKGMuX19vYl9fKSYmKGM9ci5kYXRhLmRvbVByb3BzPWsoe30sYykpLHMpdChjW2ldKSYmKGFbaV09XCJcIik7Zm9yKGkgaW4gYyl7aWYobz1jW2ldLFwidGV4dENvbnRlbnRcIj09PWl8fFwiaW5uZXJIVE1MXCI9PT1pKXtpZihyLmNoaWxkcmVuJiYoci5jaGlsZHJlbi5sZW5ndGg9MCksbz09PXNbaV0pY29udGludWU7MT09PWEuY2hpbGROb2Rlcy5sZW5ndGgmJmEucmVtb3ZlQ2hpbGQoYS5jaGlsZE5vZGVzWzBdKX1pZihcInZhbHVlXCI9PT1pfHxvIT09c1tpXSlpZihcInZhbHVlXCI9PT1pKXthLl92YWx1ZT1vO3ZhciB1PXQobyk/XCJcIjpTdHJpbmcobyk7bmkoYSx1KSYmKGEudmFsdWU9dSl9ZWxzZSBpZihcImlubmVySFRNTFwiPT09aSYmS24oYS50YWdOYW1lKSYmdChhLmlubmVySFRNTCkpeyhRcj1Rcnx8ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkuaW5uZXJIVE1MPVwiPHN2Zz5cIitvK1wiPC9zdmc+XCI7Zm9yKHZhciBsPVFyLmZpcnN0Q2hpbGQ7YS5maXJzdENoaWxkOylhLnJlbW92ZUNoaWxkKGEuZmlyc3RDaGlsZCk7Zm9yKDtsLmZpcnN0Q2hpbGQ7KWEuYXBwZW5kQ2hpbGQobC5maXJzdENoaWxkKX1lbHNlIGFbaV09b319fWZ1bmN0aW9uIG5pKGUsdCl7cmV0dXJuIWUuY29tcG9zaW5nJiYoXCJPUFRJT05cIj09PWUudGFnTmFtZXx8ZnVuY3Rpb24oZSx0KXt2YXIgbj0hMDt0cnl7bj1kb2N1bWVudC5hY3RpdmVFbGVtZW50IT09ZX1jYXRjaChlKXt9cmV0dXJuIG4mJmUudmFsdWUhPT10fShlLHQpfHxmdW5jdGlvbihlLHQpe3ZhciByPWUudmFsdWUsaT1lLl92TW9kaWZpZXJzO2lmKG4oaSkpe2lmKGkubnVtYmVyKXJldHVybiBmKHIpIT09Zih0KTtpZihpLnRyaW0pcmV0dXJuIHIudHJpbSgpIT09dC50cmltKCl9cmV0dXJuIHIhPT10fShlLHQpKX12YXIgcmk9e2NyZWF0ZTp0aSx1cGRhdGU6dGl9LGlpPWcoZnVuY3Rpb24oZSl7dmFyIHQ9e30sbj0vOiguKykvO3JldHVybiBlLnNwbGl0KC87KD8hW14oXSpcXCkpL2cpLmZvckVhY2goZnVuY3Rpb24oZSl7aWYoZSl7dmFyIHI9ZS5zcGxpdChuKTtyLmxlbmd0aD4xJiYodFtyWzBdLnRyaW0oKV09clsxXS50cmltKCkpfX0pLHR9KTtmdW5jdGlvbiBvaShlKXt2YXIgdD1haShlLnN0eWxlKTtyZXR1cm4gZS5zdGF0aWNTdHlsZT9rKGUuc3RhdGljU3R5bGUsdCk6dH1mdW5jdGlvbiBhaShlKXtyZXR1cm4gQXJyYXkuaXNBcnJheShlKT9PKGUpOlwic3RyaW5nXCI9PXR5cGVvZiBlP2lpKGUpOmV9dmFyIHNpLGNpPS9eLS0vLHVpPS9cXHMqIWltcG9ydGFudCQvLGxpPWZ1bmN0aW9uKGUsdCxuKXtpZihjaS50ZXN0KHQpKWUuc3R5bGUuc2V0UHJvcGVydHkodCxuKTtlbHNlIGlmKHVpLnRlc3QobikpZS5zdHlsZS5zZXRQcm9wZXJ0eShDKHQpLG4ucmVwbGFjZSh1aSxcIlwiKSxcImltcG9ydGFudFwiKTtlbHNle3ZhciByPXBpKHQpO2lmKEFycmF5LmlzQXJyYXkobikpZm9yKHZhciBpPTAsbz1uLmxlbmd0aDtpPG87aSsrKWUuc3R5bGVbcl09bltpXTtlbHNlIGUuc3R5bGVbcl09bn19LGZpPVtcIldlYmtpdFwiLFwiTW96XCIsXCJtc1wiXSxwaT1nKGZ1bmN0aW9uKGUpe2lmKHNpPXNpfHxkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlLFwiZmlsdGVyXCIhPT0oZT1iKGUpKSYmZSBpbiBzaSlyZXR1cm4gZTtmb3IodmFyIHQ9ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStlLnNsaWNlKDEpLG49MDtuPGZpLmxlbmd0aDtuKyspe3ZhciByPWZpW25dK3Q7aWYociBpbiBzaSlyZXR1cm4gcn19KTtmdW5jdGlvbiBkaShlLHIpe3ZhciBpPXIuZGF0YSxvPWUuZGF0YTtpZighKHQoaS5zdGF0aWNTdHlsZSkmJnQoaS5zdHlsZSkmJnQoby5zdGF0aWNTdHlsZSkmJnQoby5zdHlsZSkpKXt2YXIgYSxzLGM9ci5lbG0sdT1vLnN0YXRpY1N0eWxlLGw9by5ub3JtYWxpemVkU3R5bGV8fG8uc3R5bGV8fHt9LGY9dXx8bCxwPWFpKHIuZGF0YS5zdHlsZSl8fHt9O3IuZGF0YS5ub3JtYWxpemVkU3R5bGU9bihwLl9fb2JfXyk/ayh7fSxwKTpwO3ZhciBkPWZ1bmN0aW9uKGUsdCl7dmFyIG4scj17fTtpZih0KWZvcih2YXIgaT1lO2kuY29tcG9uZW50SW5zdGFuY2U7KShpPWkuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlKSYmaS5kYXRhJiYobj1vaShpLmRhdGEpKSYmayhyLG4pOyhuPW9pKGUuZGF0YSkpJiZrKHIsbik7Zm9yKHZhciBvPWU7bz1vLnBhcmVudDspby5kYXRhJiYobj1vaShvLmRhdGEpKSYmayhyLG4pO3JldHVybiByfShyLCEwKTtmb3IocyBpbiBmKXQoZFtzXSkmJmxpKGMscyxcIlwiKTtmb3IocyBpbiBkKShhPWRbc10pIT09ZltzXSYmbGkoYyxzLG51bGw9PWE/XCJcIjphKX19dmFyIHZpPXtjcmVhdGU6ZGksdXBkYXRlOmRpfSxoaT0vXFxzKy87ZnVuY3Rpb24gbWkoZSx0KXtpZih0JiYodD10LnRyaW0oKSkpaWYoZS5jbGFzc0xpc3QpdC5pbmRleE9mKFwiIFwiKT4tMT90LnNwbGl0KGhpKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JldHVybiBlLmNsYXNzTGlzdC5hZGQodCl9KTplLmNsYXNzTGlzdC5hZGQodCk7ZWxzZXt2YXIgbj1cIiBcIisoZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIikrXCIgXCI7bi5pbmRleE9mKFwiIFwiK3QrXCIgXCIpPDAmJmUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwobit0KS50cmltKCkpfX1mdW5jdGlvbiB5aShlLHQpe2lmKHQmJih0PXQudHJpbSgpKSlpZihlLmNsYXNzTGlzdCl0LmluZGV4T2YoXCIgXCIpPi0xP3Quc3BsaXQoaGkpLmZvckVhY2goZnVuY3Rpb24odCl7cmV0dXJuIGUuY2xhc3NMaXN0LnJlbW92ZSh0KX0pOmUuY2xhc3NMaXN0LnJlbW92ZSh0KSxlLmNsYXNzTGlzdC5sZW5ndGh8fGUucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIik7ZWxzZXtmb3IodmFyIG49XCIgXCIrKGUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpK1wiIFwiLHI9XCIgXCIrdCtcIiBcIjtuLmluZGV4T2Yocik+PTA7KW49bi5yZXBsYWNlKHIsXCIgXCIpOyhuPW4udHJpbSgpKT9lLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsbik6ZS5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKX19ZnVuY3Rpb24gZ2koZSl7aWYoZSl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGUpe3ZhciB0PXt9O3JldHVybiExIT09ZS5jc3MmJmsodCxfaShlLm5hbWV8fFwidlwiKSksayh0LGUpLHR9cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGU/X2koZSk6dm9pZCAwfX12YXIgX2k9ZyhmdW5jdGlvbihlKXtyZXR1cm57ZW50ZXJDbGFzczplK1wiLWVudGVyXCIsZW50ZXJUb0NsYXNzOmUrXCItZW50ZXItdG9cIixlbnRlckFjdGl2ZUNsYXNzOmUrXCItZW50ZXItYWN0aXZlXCIsbGVhdmVDbGFzczplK1wiLWxlYXZlXCIsbGVhdmVUb0NsYXNzOmUrXCItbGVhdmUtdG9cIixsZWF2ZUFjdGl2ZUNsYXNzOmUrXCItbGVhdmUtYWN0aXZlXCJ9fSksYmk9VSYmIXEsJGk9XCJ0cmFuc2l0aW9uXCIsd2k9XCJhbmltYXRpb25cIixDaT1cInRyYW5zaXRpb25cIix4aT1cInRyYW5zaXRpb25lbmRcIixBaT1cImFuaW1hdGlvblwiLGtpPVwiYW5pbWF0aW9uZW5kXCI7YmkmJih2b2lkIDA9PT13aW5kb3cub250cmFuc2l0aW9uZW5kJiZ2b2lkIDAhPT13aW5kb3cub253ZWJraXR0cmFuc2l0aW9uZW5kJiYoQ2k9XCJXZWJraXRUcmFuc2l0aW9uXCIseGk9XCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCIpLHZvaWQgMD09PXdpbmRvdy5vbmFuaW1hdGlvbmVuZCYmdm9pZCAwIT09d2luZG93Lm9ud2Via2l0YW5pbWF0aW9uZW5kJiYoQWk9XCJXZWJraXRBbmltYXRpb25cIixraT1cIndlYmtpdEFuaW1hdGlvbkVuZFwiKSk7dmFyIE9pPVU/d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZT93aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmJpbmQod2luZG93KTpzZXRUaW1lb3V0OmZ1bmN0aW9uKGUpe3JldHVybiBlKCl9O2Z1bmN0aW9uIFNpKGUpe09pKGZ1bmN0aW9uKCl7T2koZSl9KX1mdW5jdGlvbiBUaShlLHQpe3ZhciBuPWUuX3RyYW5zaXRpb25DbGFzc2VzfHwoZS5fdHJhbnNpdGlvbkNsYXNzZXM9W10pO24uaW5kZXhPZih0KTwwJiYobi5wdXNoKHQpLG1pKGUsdCkpfWZ1bmN0aW9uIEVpKGUsdCl7ZS5fdHJhbnNpdGlvbkNsYXNzZXMmJmgoZS5fdHJhbnNpdGlvbkNsYXNzZXMsdCkseWkoZSx0KX1mdW5jdGlvbiBOaShlLHQsbil7dmFyIHI9TGkoZSx0KSxpPXIudHlwZSxvPXIudGltZW91dCxhPXIucHJvcENvdW50O2lmKCFpKXJldHVybiBuKCk7dmFyIHM9aT09PSRpP3hpOmtpLGM9MCx1PWZ1bmN0aW9uKCl7ZS5yZW1vdmVFdmVudExpc3RlbmVyKHMsbCksbigpfSxsPWZ1bmN0aW9uKHQpe3QudGFyZ2V0PT09ZSYmKytjPj1hJiZ1KCl9O3NldFRpbWVvdXQoZnVuY3Rpb24oKXtjPGEmJnUoKX0sbysxKSxlLmFkZEV2ZW50TGlzdGVuZXIocyxsKX12YXIgamk9L1xcYih0cmFuc2Zvcm18YWxsKSgsfCQpLztmdW5jdGlvbiBMaShlLHQpe3ZhciBuLHI9d2luZG93LmdldENvbXB1dGVkU3R5bGUoZSksaT0ocltDaStcIkRlbGF5XCJdfHxcIlwiKS5zcGxpdChcIiwgXCIpLG89KHJbQ2krXCJEdXJhdGlvblwiXXx8XCJcIikuc3BsaXQoXCIsIFwiKSxhPU1pKGksbykscz0ocltBaStcIkRlbGF5XCJdfHxcIlwiKS5zcGxpdChcIiwgXCIpLGM9KHJbQWkrXCJEdXJhdGlvblwiXXx8XCJcIikuc3BsaXQoXCIsIFwiKSx1PU1pKHMsYyksbD0wLGY9MDtyZXR1cm4gdD09PSRpP2E+MCYmKG49JGksbD1hLGY9by5sZW5ndGgpOnQ9PT13aT91PjAmJihuPXdpLGw9dSxmPWMubGVuZ3RoKTpmPShuPShsPU1hdGgubWF4KGEsdSkpPjA/YT51PyRpOndpOm51bGwpP249PT0kaT9vLmxlbmd0aDpjLmxlbmd0aDowLHt0eXBlOm4sdGltZW91dDpsLHByb3BDb3VudDpmLGhhc1RyYW5zZm9ybTpuPT09JGkmJmppLnRlc3QocltDaStcIlByb3BlcnR5XCJdKX19ZnVuY3Rpb24gTWkoZSx0KXtmb3IoO2UubGVuZ3RoPHQubGVuZ3RoOyllPWUuY29uY2F0KGUpO3JldHVybiBNYXRoLm1heC5hcHBseShudWxsLHQubWFwKGZ1bmN0aW9uKHQsbil7cmV0dXJuIElpKHQpK0lpKGVbbl0pfSkpfWZ1bmN0aW9uIElpKGUpe3JldHVybiAxZTMqTnVtYmVyKGUuc2xpY2UoMCwtMSkucmVwbGFjZShcIixcIixcIi5cIikpfWZ1bmN0aW9uIERpKGUscil7dmFyIGk9ZS5lbG07bihpLl9sZWF2ZUNiKSYmKGkuX2xlYXZlQ2IuY2FuY2VsbGVkPSEwLGkuX2xlYXZlQ2IoKSk7dmFyIGE9Z2koZS5kYXRhLnRyYW5zaXRpb24pO2lmKCF0KGEpJiYhbihpLl9lbnRlckNiKSYmMT09PWkubm9kZVR5cGUpe2Zvcih2YXIgcz1hLmNzcyxjPWEudHlwZSx1PWEuZW50ZXJDbGFzcyxsPWEuZW50ZXJUb0NsYXNzLHA9YS5lbnRlckFjdGl2ZUNsYXNzLGQ9YS5hcHBlYXJDbGFzcyx2PWEuYXBwZWFyVG9DbGFzcyxoPWEuYXBwZWFyQWN0aXZlQ2xhc3MsbT1hLmJlZm9yZUVudGVyLHk9YS5lbnRlcixnPWEuYWZ0ZXJFbnRlcixfPWEuZW50ZXJDYW5jZWxsZWQsYj1hLmJlZm9yZUFwcGVhciwkPWEuYXBwZWFyLHc9YS5hZnRlckFwcGVhcixDPWEuYXBwZWFyQ2FuY2VsbGVkLHg9YS5kdXJhdGlvbixBPXF0LGs9cXQuJHZub2RlO2smJmsucGFyZW50OylBPShrPWsucGFyZW50KS5jb250ZXh0O3ZhciBPPSFBLl9pc01vdW50ZWR8fCFlLmlzUm9vdEluc2VydDtpZighT3x8JHx8XCJcIj09PSQpe3ZhciBTPU8mJmQ/ZDp1LFQ9TyYmaD9oOnAsRT1PJiZ2P3Y6bCxOPU8mJmJ8fG0saj1PJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiAkPyQ6eSxNPU8mJnd8fGcsST1PJiZDfHxfLEQ9ZihvKHgpP3guZW50ZXI6eCksUD0hMSE9PXMmJiFxLFI9RmkoaiksRj1pLl9lbnRlckNiPUwoZnVuY3Rpb24oKXtQJiYoRWkoaSxFKSxFaShpLFQpKSxGLmNhbmNlbGxlZD8oUCYmRWkoaSxTKSxJJiZJKGkpKTpNJiZNKGkpLGkuX2VudGVyQ2I9bnVsbH0pO2UuZGF0YS5zaG93fHxydChlLFwiaW5zZXJ0XCIsZnVuY3Rpb24oKXt2YXIgdD1pLnBhcmVudE5vZGUsbj10JiZ0Ll9wZW5kaW5nJiZ0Ll9wZW5kaW5nW2Uua2V5XTtuJiZuLnRhZz09PWUudGFnJiZuLmVsbS5fbGVhdmVDYiYmbi5lbG0uX2xlYXZlQ2IoKSxqJiZqKGksRil9KSxOJiZOKGkpLFAmJihUaShpLFMpLFRpKGksVCksU2koZnVuY3Rpb24oKXtFaShpLFMpLEYuY2FuY2VsbGVkfHwoVGkoaSxFKSxSfHwoUmkoRCk/c2V0VGltZW91dChGLEQpOk5pKGksYyxGKSkpfSkpLGUuZGF0YS5zaG93JiYociYmcigpLGomJmooaSxGKSksUHx8Unx8RigpfX19ZnVuY3Rpb24gUGkoZSxyKXt2YXIgaT1lLmVsbTtuKGkuX2VudGVyQ2IpJiYoaS5fZW50ZXJDYi5jYW5jZWxsZWQ9ITAsaS5fZW50ZXJDYigpKTt2YXIgYT1naShlLmRhdGEudHJhbnNpdGlvbik7aWYodChhKXx8MSE9PWkubm9kZVR5cGUpcmV0dXJuIHIoKTtpZighbihpLl9sZWF2ZUNiKSl7dmFyIHM9YS5jc3MsYz1hLnR5cGUsdT1hLmxlYXZlQ2xhc3MsbD1hLmxlYXZlVG9DbGFzcyxwPWEubGVhdmVBY3RpdmVDbGFzcyxkPWEuYmVmb3JlTGVhdmUsdj1hLmxlYXZlLGg9YS5hZnRlckxlYXZlLG09YS5sZWF2ZUNhbmNlbGxlZCx5PWEuZGVsYXlMZWF2ZSxnPWEuZHVyYXRpb24sXz0hMSE9PXMmJiFxLGI9RmkodiksJD1mKG8oZyk/Zy5sZWF2ZTpnKSx3PWkuX2xlYXZlQ2I9TChmdW5jdGlvbigpe2kucGFyZW50Tm9kZSYmaS5wYXJlbnROb2RlLl9wZW5kaW5nJiYoaS5wYXJlbnROb2RlLl9wZW5kaW5nW2Uua2V5XT1udWxsKSxfJiYoRWkoaSxsKSxFaShpLHApKSx3LmNhbmNlbGxlZD8oXyYmRWkoaSx1KSxtJiZtKGkpKToocigpLGgmJmgoaSkpLGkuX2xlYXZlQ2I9bnVsbH0pO3k/eShDKTpDKCl9ZnVuY3Rpb24gQygpe3cuY2FuY2VsbGVkfHwoIWUuZGF0YS5zaG93JiZpLnBhcmVudE5vZGUmJigoaS5wYXJlbnROb2RlLl9wZW5kaW5nfHwoaS5wYXJlbnROb2RlLl9wZW5kaW5nPXt9KSlbZS5rZXldPWUpLGQmJmQoaSksXyYmKFRpKGksdSksVGkoaSxwKSxTaShmdW5jdGlvbigpe0VpKGksdSksdy5jYW5jZWxsZWR8fChUaShpLGwpLGJ8fChSaSgkKT9zZXRUaW1lb3V0KHcsJCk6TmkoaSxjLHcpKSl9KSksdiYmdihpLHcpLF98fGJ8fHcoKSl9fWZ1bmN0aW9uIFJpKGUpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiBlJiYhaXNOYU4oZSl9ZnVuY3Rpb24gRmkoZSl7aWYodChlKSlyZXR1cm4hMTt2YXIgcj1lLmZucztyZXR1cm4gbihyKT9GaShBcnJheS5pc0FycmF5KHIpP3JbMF06cik6KGUuX2xlbmd0aHx8ZS5sZW5ndGgpPjF9ZnVuY3Rpb24gSGkoZSx0KXshMCE9PXQuZGF0YS5zaG93JiZEaSh0KX12YXIgQmk9ZnVuY3Rpb24oZSl7dmFyIG8sYSxzPXt9LGM9ZS5tb2R1bGVzLHU9ZS5ub2RlT3BzO2ZvcihvPTA7bzx0ci5sZW5ndGg7KytvKWZvcihzW3RyW29dXT1bXSxhPTA7YTxjLmxlbmd0aDsrK2EpbihjW2FdW3RyW29dXSkmJnNbdHJbb11dLnB1c2goY1thXVt0cltvXV0pO2Z1bmN0aW9uIGwoZSl7dmFyIHQ9dS5wYXJlbnROb2RlKGUpO24odCkmJnUucmVtb3ZlQ2hpbGQodCxlKX1mdW5jdGlvbiBmKGUsdCxpLG8sYSxjLGwpe2lmKG4oZS5lbG0pJiZuKGMpJiYoZT1jW2xdPWhlKGUpKSxlLmlzUm9vdEluc2VydD0hYSwhZnVuY3Rpb24oZSx0LGksbyl7dmFyIGE9ZS5kYXRhO2lmKG4oYSkpe3ZhciBjPW4oZS5jb21wb25lbnRJbnN0YW5jZSkmJmEua2VlcEFsaXZlO2lmKG4oYT1hLmhvb2spJiZuKGE9YS5pbml0KSYmYShlLCExKSxuKGUuY29tcG9uZW50SW5zdGFuY2UpKXJldHVybiBkKGUsdCksdihpLGUuZWxtLG8pLHIoYykmJmZ1bmN0aW9uKGUsdCxyLGkpe2Zvcih2YXIgbyxhPWU7YS5jb21wb25lbnRJbnN0YW5jZTspaWYoYT1hLmNvbXBvbmVudEluc3RhbmNlLl92bm9kZSxuKG89YS5kYXRhKSYmbihvPW8udHJhbnNpdGlvbikpe2ZvcihvPTA7bzxzLmFjdGl2YXRlLmxlbmd0aDsrK28pcy5hY3RpdmF0ZVtvXShlcixhKTt0LnB1c2goYSk7YnJlYWt9dihyLGUuZWxtLGkpfShlLHQsaSxvKSwhMH19KGUsdCxpLG8pKXt2YXIgZj1lLmRhdGEscD1lLmNoaWxkcmVuLG09ZS50YWc7bihtKT8oZS5lbG09ZS5ucz91LmNyZWF0ZUVsZW1lbnROUyhlLm5zLG0pOnUuY3JlYXRlRWxlbWVudChtLGUpLGcoZSksaChlLHAsdCksbihmKSYmeShlLHQpLHYoaSxlLmVsbSxvKSk6cihlLmlzQ29tbWVudCk/KGUuZWxtPXUuY3JlYXRlQ29tbWVudChlLnRleHQpLHYoaSxlLmVsbSxvKSk6KGUuZWxtPXUuY3JlYXRlVGV4dE5vZGUoZS50ZXh0KSx2KGksZS5lbG0sbykpfX1mdW5jdGlvbiBkKGUsdCl7bihlLmRhdGEucGVuZGluZ0luc2VydCkmJih0LnB1c2guYXBwbHkodCxlLmRhdGEucGVuZGluZ0luc2VydCksZS5kYXRhLnBlbmRpbmdJbnNlcnQ9bnVsbCksZS5lbG09ZS5jb21wb25lbnRJbnN0YW5jZS4kZWwsbShlKT8oeShlLHQpLGcoZSkpOihRbihlKSx0LnB1c2goZSkpfWZ1bmN0aW9uIHYoZSx0LHIpe24oZSkmJihuKHIpP3UucGFyZW50Tm9kZShyKT09PWUmJnUuaW5zZXJ0QmVmb3JlKGUsdCxyKTp1LmFwcGVuZENoaWxkKGUsdCkpfWZ1bmN0aW9uIGgoZSx0LG4pe2lmKEFycmF5LmlzQXJyYXkodCkpZm9yKHZhciByPTA7cjx0Lmxlbmd0aDsrK3IpZih0W3JdLG4sZS5lbG0sbnVsbCwhMCx0LHIpO2Vsc2UgaShlLnRleHQpJiZ1LmFwcGVuZENoaWxkKGUuZWxtLHUuY3JlYXRlVGV4dE5vZGUoU3RyaW5nKGUudGV4dCkpKX1mdW5jdGlvbiBtKGUpe2Zvcig7ZS5jb21wb25lbnRJbnN0YW5jZTspZT1lLmNvbXBvbmVudEluc3RhbmNlLl92bm9kZTtyZXR1cm4gbihlLnRhZyl9ZnVuY3Rpb24geShlLHQpe2Zvcih2YXIgcj0wO3I8cy5jcmVhdGUubGVuZ3RoOysrcilzLmNyZWF0ZVtyXShlcixlKTtuKG89ZS5kYXRhLmhvb2spJiYobihvLmNyZWF0ZSkmJm8uY3JlYXRlKGVyLGUpLG4oby5pbnNlcnQpJiZ0LnB1c2goZSkpfWZ1bmN0aW9uIGcoZSl7dmFyIHQ7aWYobih0PWUuZm5TY29wZUlkKSl1LnNldFN0eWxlU2NvcGUoZS5lbG0sdCk7ZWxzZSBmb3IodmFyIHI9ZTtyOyluKHQ9ci5jb250ZXh0KSYmbih0PXQuJG9wdGlvbnMuX3Njb3BlSWQpJiZ1LnNldFN0eWxlU2NvcGUoZS5lbG0sdCkscj1yLnBhcmVudDtuKHQ9cXQpJiZ0IT09ZS5jb250ZXh0JiZ0IT09ZS5mbkNvbnRleHQmJm4odD10LiRvcHRpb25zLl9zY29wZUlkKSYmdS5zZXRTdHlsZVNjb3BlKGUuZWxtLHQpfWZ1bmN0aW9uIF8oZSx0LG4scixpLG8pe2Zvcig7cjw9aTsrK3IpZihuW3JdLG8sZSx0LCExLG4scil9ZnVuY3Rpb24gYihlKXt2YXIgdCxyLGk9ZS5kYXRhO2lmKG4oaSkpZm9yKG4odD1pLmhvb2spJiZuKHQ9dC5kZXN0cm95KSYmdChlKSx0PTA7dDxzLmRlc3Ryb3kubGVuZ3RoOysrdClzLmRlc3Ryb3lbdF0oZSk7aWYobih0PWUuY2hpbGRyZW4pKWZvcihyPTA7cjxlLmNoaWxkcmVuLmxlbmd0aDsrK3IpYihlLmNoaWxkcmVuW3JdKX1mdW5jdGlvbiAkKGUsdCxyLGkpe2Zvcig7cjw9aTsrK3Ipe3ZhciBvPXRbcl07bihvKSYmKG4oby50YWcpPyh3KG8pLGIobykpOmwoby5lbG0pKX19ZnVuY3Rpb24gdyhlLHQpe2lmKG4odCl8fG4oZS5kYXRhKSl7dmFyIHIsaT1zLnJlbW92ZS5sZW5ndGgrMTtmb3Iobih0KT90Lmxpc3RlbmVycys9aTp0PWZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gbigpezA9PS0tbi5saXN0ZW5lcnMmJmwoZSl9cmV0dXJuIG4ubGlzdGVuZXJzPXQsbn0oZS5lbG0saSksbihyPWUuY29tcG9uZW50SW5zdGFuY2UpJiZuKHI9ci5fdm5vZGUpJiZuKHIuZGF0YSkmJncocix0KSxyPTA7cjxzLnJlbW92ZS5sZW5ndGg7KytyKXMucmVtb3ZlW3JdKGUsdCk7bihyPWUuZGF0YS5ob29rKSYmbihyPXIucmVtb3ZlKT9yKGUsdCk6dCgpfWVsc2UgbChlLmVsbSl9ZnVuY3Rpb24gQyhlLHQscixpKXtmb3IodmFyIG89cjtvPGk7bysrKXt2YXIgYT10W29dO2lmKG4oYSkmJm5yKGUsYSkpcmV0dXJuIG99fWZ1bmN0aW9uIHgoZSxpLG8sYSxjLGwpe2lmKGUhPT1pKXtuKGkuZWxtKSYmbihhKSYmKGk9YVtjXT1oZShpKSk7dmFyIHA9aS5lbG09ZS5lbG07aWYocihlLmlzQXN5bmNQbGFjZWhvbGRlcikpbihpLmFzeW5jRmFjdG9yeS5yZXNvbHZlZCk/TyhlLmVsbSxpLG8pOmkuaXNBc3luY1BsYWNlaG9sZGVyPSEwO2Vsc2UgaWYocihpLmlzU3RhdGljKSYmcihlLmlzU3RhdGljKSYmaS5rZXk9PT1lLmtleSYmKHIoaS5pc0Nsb25lZCl8fHIoaS5pc09uY2UpKSlpLmNvbXBvbmVudEluc3RhbmNlPWUuY29tcG9uZW50SW5zdGFuY2U7ZWxzZXt2YXIgZCx2PWkuZGF0YTtuKHYpJiZuKGQ9di5ob29rKSYmbihkPWQucHJlcGF0Y2gpJiZkKGUsaSk7dmFyIGg9ZS5jaGlsZHJlbix5PWkuY2hpbGRyZW47aWYobih2KSYmbShpKSl7Zm9yKGQ9MDtkPHMudXBkYXRlLmxlbmd0aDsrK2Qpcy51cGRhdGVbZF0oZSxpKTtuKGQ9di5ob29rKSYmbihkPWQudXBkYXRlKSYmZChlLGkpfXQoaS50ZXh0KT9uKGgpJiZuKHkpP2ghPT15JiZmdW5jdGlvbihlLHIsaSxvLGEpe2Zvcih2YXIgcyxjLGwscD0wLGQ9MCx2PXIubGVuZ3RoLTEsaD1yWzBdLG09clt2XSx5PWkubGVuZ3RoLTEsZz1pWzBdLGI9aVt5XSx3PSFhO3A8PXYmJmQ8PXk7KXQoaCk/aD1yWysrcF06dChtKT9tPXJbLS12XTpucihoLGcpPyh4KGgsZyxvLGksZCksaD1yWysrcF0sZz1pWysrZF0pOm5yKG0sYik/KHgobSxiLG8saSx5KSxtPXJbLS12XSxiPWlbLS15XSk6bnIoaCxiKT8oeChoLGIsbyxpLHkpLHcmJnUuaW5zZXJ0QmVmb3JlKGUsaC5lbG0sdS5uZXh0U2libGluZyhtLmVsbSkpLGg9clsrK3BdLGI9aVstLXldKTpucihtLGcpPyh4KG0sZyxvLGksZCksdyYmdS5pbnNlcnRCZWZvcmUoZSxtLmVsbSxoLmVsbSksbT1yWy0tdl0sZz1pWysrZF0pOih0KHMpJiYocz1ycihyLHAsdikpLHQoYz1uKGcua2V5KT9zW2cua2V5XTpDKGcscixwLHYpKT9mKGcsbyxlLGguZWxtLCExLGksZCk6bnIobD1yW2NdLGcpPyh4KGwsZyxvLGksZCkscltjXT12b2lkIDAsdyYmdS5pbnNlcnRCZWZvcmUoZSxsLmVsbSxoLmVsbSkpOmYoZyxvLGUsaC5lbG0sITEsaSxkKSxnPWlbKytkXSk7cD52P18oZSx0KGlbeSsxXSk/bnVsbDppW3krMV0uZWxtLGksZCx5LG8pOmQ+eSYmJCgwLHIscCx2KX0ocCxoLHksbyxsKTpuKHkpPyhuKGUudGV4dCkmJnUuc2V0VGV4dENvbnRlbnQocCxcIlwiKSxfKHAsbnVsbCx5LDAseS5sZW5ndGgtMSxvKSk6bihoKT8kKDAsaCwwLGgubGVuZ3RoLTEpOm4oZS50ZXh0KSYmdS5zZXRUZXh0Q29udGVudChwLFwiXCIpOmUudGV4dCE9PWkudGV4dCYmdS5zZXRUZXh0Q29udGVudChwLGkudGV4dCksbih2KSYmbihkPXYuaG9vaykmJm4oZD1kLnBvc3RwYXRjaCkmJmQoZSxpKX19fWZ1bmN0aW9uIEEoZSx0LGkpe2lmKHIoaSkmJm4oZS5wYXJlbnQpKWUucGFyZW50LmRhdGEucGVuZGluZ0luc2VydD10O2Vsc2UgZm9yKHZhciBvPTA7bzx0Lmxlbmd0aDsrK28pdFtvXS5kYXRhLmhvb2suaW5zZXJ0KHRbb10pfXZhciBrPXAoXCJhdHRycyxjbGFzcyxzdGF0aWNDbGFzcyxzdGF0aWNTdHlsZSxrZXlcIik7ZnVuY3Rpb24gTyhlLHQsaSxvKXt2YXIgYSxzPXQudGFnLGM9dC5kYXRhLHU9dC5jaGlsZHJlbjtpZihvPW98fGMmJmMucHJlLHQuZWxtPWUscih0LmlzQ29tbWVudCkmJm4odC5hc3luY0ZhY3RvcnkpKXJldHVybiB0LmlzQXN5bmNQbGFjZWhvbGRlcj0hMCwhMDtpZihuKGMpJiYobihhPWMuaG9vaykmJm4oYT1hLmluaXQpJiZhKHQsITApLG4oYT10LmNvbXBvbmVudEluc3RhbmNlKSkpcmV0dXJuIGQodCxpKSwhMDtpZihuKHMpKXtpZihuKHUpKWlmKGUuaGFzQ2hpbGROb2RlcygpKWlmKG4oYT1jKSYmbihhPWEuZG9tUHJvcHMpJiZuKGE9YS5pbm5lckhUTUwpKXtpZihhIT09ZS5pbm5lckhUTUwpcmV0dXJuITF9ZWxzZXtmb3IodmFyIGw9ITAsZj1lLmZpcnN0Q2hpbGQscD0wO3A8dS5sZW5ndGg7cCsrKXtpZighZnx8IU8oZix1W3BdLGksbykpe2w9ITE7YnJlYWt9Zj1mLm5leHRTaWJsaW5nfWlmKCFsfHxmKXJldHVybiExfWVsc2UgaCh0LHUsaSk7aWYobihjKSl7dmFyIHY9ITE7Zm9yKHZhciBtIGluIGMpaWYoIWsobSkpe3Y9ITAseSh0LGkpO2JyZWFrfSF2JiZjLmNsYXNzJiZRZShjLmNsYXNzKX19ZWxzZSBlLmRhdGEhPT10LnRleHQmJihlLmRhdGE9dC50ZXh0KTtyZXR1cm4hMH1yZXR1cm4gZnVuY3Rpb24oZSxpLG8sYSl7aWYoIXQoaSkpe3ZhciBjLGw9ITEscD1bXTtpZih0KGUpKWw9ITAsZihpLHApO2Vsc2V7dmFyIGQ9bihlLm5vZGVUeXBlKTtpZighZCYmbnIoZSxpKSl4KGUsaSxwLG51bGwsbnVsbCxhKTtlbHNle2lmKGQpe2lmKDE9PT1lLm5vZGVUeXBlJiZlLmhhc0F0dHJpYnV0ZShNKSYmKGUucmVtb3ZlQXR0cmlidXRlKE0pLG89ITApLHIobykmJk8oZSxpLHApKXJldHVybiBBKGkscCwhMCksZTtjPWUsZT1uZXcgZmUodS50YWdOYW1lKGMpLnRvTG93ZXJDYXNlKCkse30sW10sdm9pZCAwLGMpfXZhciB2PWUuZWxtLGg9dS5wYXJlbnROb2RlKHYpO2lmKGYoaSxwLHYuX2xlYXZlQ2I/bnVsbDpoLHUubmV4dFNpYmxpbmcodikpLG4oaS5wYXJlbnQpKWZvcih2YXIgeT1pLnBhcmVudCxnPW0oaSk7eTspe2Zvcih2YXIgXz0wO188cy5kZXN0cm95Lmxlbmd0aDsrK18pcy5kZXN0cm95W19dKHkpO2lmKHkuZWxtPWkuZWxtLGcpe2Zvcih2YXIgdz0wO3c8cy5jcmVhdGUubGVuZ3RoOysrdylzLmNyZWF0ZVt3XShlcix5KTt2YXIgQz15LmRhdGEuaG9vay5pbnNlcnQ7aWYoQy5tZXJnZWQpZm9yKHZhciBrPTE7azxDLmZucy5sZW5ndGg7aysrKUMuZm5zW2tdKCl9ZWxzZSBRbih5KTt5PXkucGFyZW50fW4oaCk/JCgwLFtlXSwwLDApOm4oZS50YWcpJiZiKGUpfX1yZXR1cm4gQShpLHAsbCksaS5lbG19bihlKSYmYihlKX19KHtub2RlT3BzOlhuLG1vZHVsZXM6W3ZyLHdyLGVpLHJpLHZpLFU/e2NyZWF0ZTpIaSxhY3RpdmF0ZTpIaSxyZW1vdmU6ZnVuY3Rpb24oZSx0KXshMCE9PWUuZGF0YS5zaG93P1BpKGUsdCk6dCgpfX06e31dLmNvbmNhdChscil9KTtxJiZkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2VsZWN0aW9uY2hhbmdlXCIsZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5hY3RpdmVFbGVtZW50O2UmJmUudm1vZGVsJiZaaShlLFwiaW5wdXRcIil9KTt2YXIgVWk9e2luc2VydGVkOmZ1bmN0aW9uKGUsdCxuLHIpe1wic2VsZWN0XCI9PT1uLnRhZz8oci5lbG0mJiFyLmVsbS5fdk9wdGlvbnM/cnQobixcInBvc3RwYXRjaFwiLGZ1bmN0aW9uKCl7VWkuY29tcG9uZW50VXBkYXRlZChlLHQsbil9KTp6aShlLHQsbi5jb250ZXh0KSxlLl92T3B0aW9ucz1bXS5tYXAuY2FsbChlLm9wdGlvbnMsSmkpKTooXCJ0ZXh0YXJlYVwiPT09bi50YWd8fFpuKGUudHlwZSkpJiYoZS5fdk1vZGlmaWVycz10Lm1vZGlmaWVycyx0Lm1vZGlmaWVycy5sYXp5fHwoZS5hZGRFdmVudExpc3RlbmVyKFwiY29tcG9zaXRpb25zdGFydFwiLHFpKSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjb21wb3NpdGlvbmVuZFwiLFdpKSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIixXaSkscSYmKGUudm1vZGVsPSEwKSkpfSxjb21wb25lbnRVcGRhdGVkOmZ1bmN0aW9uKGUsdCxuKXtpZihcInNlbGVjdFwiPT09bi50YWcpe3ppKGUsdCxuLmNvbnRleHQpO3ZhciByPWUuX3ZPcHRpb25zLGk9ZS5fdk9wdGlvbnM9W10ubWFwLmNhbGwoZS5vcHRpb25zLEppKTtpZihpLnNvbWUoZnVuY3Rpb24oZSx0KXtyZXR1cm4hTihlLHJbdF0pfSkpKGUubXVsdGlwbGU/dC52YWx1ZS5zb21lKGZ1bmN0aW9uKGUpe3JldHVybiBLaShlLGkpfSk6dC52YWx1ZSE9PXQub2xkVmFsdWUmJktpKHQudmFsdWUsaSkpJiZaaShlLFwiY2hhbmdlXCIpfX19O2Z1bmN0aW9uIHppKGUsdCxuKXtWaShlLHQsbiksKEp8fFcpJiZzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7VmkoZSx0LG4pfSwwKX1mdW5jdGlvbiBWaShlLHQsbil7dmFyIHI9dC52YWx1ZSxpPWUubXVsdGlwbGU7aWYoIWl8fEFycmF5LmlzQXJyYXkocikpe2Zvcih2YXIgbyxhLHM9MCxjPWUub3B0aW9ucy5sZW5ndGg7czxjO3MrKylpZihhPWUub3B0aW9uc1tzXSxpKW89aihyLEppKGEpKT4tMSxhLnNlbGVjdGVkIT09byYmKGEuc2VsZWN0ZWQ9byk7ZWxzZSBpZihOKEppKGEpLHIpKXJldHVybiB2b2lkKGUuc2VsZWN0ZWRJbmRleCE9PXMmJihlLnNlbGVjdGVkSW5kZXg9cykpO2l8fChlLnNlbGVjdGVkSW5kZXg9LTEpfX1mdW5jdGlvbiBLaShlLHQpe3JldHVybiB0LmV2ZXJ5KGZ1bmN0aW9uKHQpe3JldHVybiFOKHQsZSl9KX1mdW5jdGlvbiBKaShlKXtyZXR1cm5cIl92YWx1ZVwiaW4gZT9lLl92YWx1ZTplLnZhbHVlfWZ1bmN0aW9uIHFpKGUpe2UudGFyZ2V0LmNvbXBvc2luZz0hMH1mdW5jdGlvbiBXaShlKXtlLnRhcmdldC5jb21wb3NpbmcmJihlLnRhcmdldC5jb21wb3Npbmc9ITEsWmkoZS50YXJnZXQsXCJpbnB1dFwiKSl9ZnVuY3Rpb24gWmkoZSx0KXt2YXIgbj1kb2N1bWVudC5jcmVhdGVFdmVudChcIkhUTUxFdmVudHNcIik7bi5pbml0RXZlbnQodCwhMCwhMCksZS5kaXNwYXRjaEV2ZW50KG4pfWZ1bmN0aW9uIEdpKGUpe3JldHVybiFlLmNvbXBvbmVudEluc3RhbmNlfHxlLmRhdGEmJmUuZGF0YS50cmFuc2l0aW9uP2U6R2koZS5jb21wb25lbnRJbnN0YW5jZS5fdm5vZGUpfXZhciBYaT17bW9kZWw6VWksc2hvdzp7YmluZDpmdW5jdGlvbihlLHQsbil7dmFyIHI9dC52YWx1ZSxpPShuPUdpKG4pKS5kYXRhJiZuLmRhdGEudHJhbnNpdGlvbixvPWUuX192T3JpZ2luYWxEaXNwbGF5PVwibm9uZVwiPT09ZS5zdHlsZS5kaXNwbGF5P1wiXCI6ZS5zdHlsZS5kaXNwbGF5O3ImJmk/KG4uZGF0YS5zaG93PSEwLERpKG4sZnVuY3Rpb24oKXtlLnN0eWxlLmRpc3BsYXk9b30pKTplLnN0eWxlLmRpc3BsYXk9cj9vOlwibm9uZVwifSx1cGRhdGU6ZnVuY3Rpb24oZSx0LG4pe3ZhciByPXQudmFsdWU7IXIhPSF0Lm9sZFZhbHVlJiYoKG49R2kobikpLmRhdGEmJm4uZGF0YS50cmFuc2l0aW9uPyhuLmRhdGEuc2hvdz0hMCxyP0RpKG4sZnVuY3Rpb24oKXtlLnN0eWxlLmRpc3BsYXk9ZS5fX3ZPcmlnaW5hbERpc3BsYXl9KTpQaShuLGZ1bmN0aW9uKCl7ZS5zdHlsZS5kaXNwbGF5PVwibm9uZVwifSkpOmUuc3R5bGUuZGlzcGxheT1yP2UuX192T3JpZ2luYWxEaXNwbGF5Olwibm9uZVwiKX0sdW5iaW5kOmZ1bmN0aW9uKGUsdCxuLHIsaSl7aXx8KGUuc3R5bGUuZGlzcGxheT1lLl9fdk9yaWdpbmFsRGlzcGxheSl9fX0sWWk9e25hbWU6U3RyaW5nLGFwcGVhcjpCb29sZWFuLGNzczpCb29sZWFuLG1vZGU6U3RyaW5nLHR5cGU6U3RyaW5nLGVudGVyQ2xhc3M6U3RyaW5nLGxlYXZlQ2xhc3M6U3RyaW5nLGVudGVyVG9DbGFzczpTdHJpbmcsbGVhdmVUb0NsYXNzOlN0cmluZyxlbnRlckFjdGl2ZUNsYXNzOlN0cmluZyxsZWF2ZUFjdGl2ZUNsYXNzOlN0cmluZyxhcHBlYXJDbGFzczpTdHJpbmcsYXBwZWFyQWN0aXZlQ2xhc3M6U3RyaW5nLGFwcGVhclRvQ2xhc3M6U3RyaW5nLGR1cmF0aW9uOltOdW1iZXIsU3RyaW5nLE9iamVjdF19O2Z1bmN0aW9uIFFpKGUpe3ZhciB0PWUmJmUuY29tcG9uZW50T3B0aW9ucztyZXR1cm4gdCYmdC5DdG9yLm9wdGlvbnMuYWJzdHJhY3Q/UWkoVXQodC5jaGlsZHJlbikpOmV9ZnVuY3Rpb24gZW8oZSl7dmFyIHQ9e30sbj1lLiRvcHRpb25zO2Zvcih2YXIgciBpbiBuLnByb3BzRGF0YSl0W3JdPWVbcl07dmFyIGk9bi5fcGFyZW50TGlzdGVuZXJzO2Zvcih2YXIgbyBpbiBpKXRbYihvKV09aVtvXTtyZXR1cm4gdH1mdW5jdGlvbiB0byhlLHQpe2lmKC9cXGQta2VlcC1hbGl2ZSQvLnRlc3QodC50YWcpKXJldHVybiBlKFwia2VlcC1hbGl2ZVwiLHtwcm9wczp0LmNvbXBvbmVudE9wdGlvbnMucHJvcHNEYXRhfSl9dmFyIG5vPWZ1bmN0aW9uKGUpe3JldHVybiBlLnRhZ3x8QnQoZSl9LHJvPWZ1bmN0aW9uKGUpe3JldHVyblwic2hvd1wiPT09ZS5uYW1lfSxpbz17bmFtZTpcInRyYW5zaXRpb25cIixwcm9wczpZaSxhYnN0cmFjdDohMCxyZW5kZXI6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxuPXRoaXMuJHNsb3RzLmRlZmF1bHQ7aWYobiYmKG49bi5maWx0ZXIobm8pKS5sZW5ndGgpe3ZhciByPXRoaXMubW9kZSxvPW5bMF07aWYoZnVuY3Rpb24oZSl7Zm9yKDtlPWUucGFyZW50OylpZihlLmRhdGEudHJhbnNpdGlvbilyZXR1cm4hMH0odGhpcy4kdm5vZGUpKXJldHVybiBvO3ZhciBhPVFpKG8pO2lmKCFhKXJldHVybiBvO2lmKHRoaXMuX2xlYXZpbmcpcmV0dXJuIHRvKGUsbyk7dmFyIHM9XCJfX3RyYW5zaXRpb24tXCIrdGhpcy5fdWlkK1wiLVwiO2Eua2V5PW51bGw9PWEua2V5P2EuaXNDb21tZW50P3MrXCJjb21tZW50XCI6cythLnRhZzppKGEua2V5KT8wPT09U3RyaW5nKGEua2V5KS5pbmRleE9mKHMpP2Eua2V5OnMrYS5rZXk6YS5rZXk7dmFyIGM9KGEuZGF0YXx8KGEuZGF0YT17fSkpLnRyYW5zaXRpb249ZW8odGhpcyksdT10aGlzLl92bm9kZSxsPVFpKHUpO2lmKGEuZGF0YS5kaXJlY3RpdmVzJiZhLmRhdGEuZGlyZWN0aXZlcy5zb21lKHJvKSYmKGEuZGF0YS5zaG93PSEwKSxsJiZsLmRhdGEmJiFmdW5jdGlvbihlLHQpe3JldHVybiB0LmtleT09PWUua2V5JiZ0LnRhZz09PWUudGFnfShhLGwpJiYhQnQobCkmJighbC5jb21wb25lbnRJbnN0YW5jZXx8IWwuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlLmlzQ29tbWVudCkpe3ZhciBmPWwuZGF0YS50cmFuc2l0aW9uPWsoe30sYyk7aWYoXCJvdXQtaW5cIj09PXIpcmV0dXJuIHRoaXMuX2xlYXZpbmc9ITAscnQoZixcImFmdGVyTGVhdmVcIixmdW5jdGlvbigpe3QuX2xlYXZpbmc9ITEsdC4kZm9yY2VVcGRhdGUoKX0pLHRvKGUsbyk7aWYoXCJpbi1vdXRcIj09PXIpe2lmKEJ0KGEpKXJldHVybiB1O3ZhciBwLGQ9ZnVuY3Rpb24oKXtwKCl9O3J0KGMsXCJhZnRlckVudGVyXCIsZCkscnQoYyxcImVudGVyQ2FuY2VsbGVkXCIsZCkscnQoZixcImRlbGF5TGVhdmVcIixmdW5jdGlvbihlKXtwPWV9KX19cmV0dXJuIG99fX0sb289ayh7dGFnOlN0cmluZyxtb3ZlQ2xhc3M6U3RyaW5nfSxZaSk7ZnVuY3Rpb24gYW8oZSl7ZS5lbG0uX21vdmVDYiYmZS5lbG0uX21vdmVDYigpLGUuZWxtLl9lbnRlckNiJiZlLmVsbS5fZW50ZXJDYigpfWZ1bmN0aW9uIHNvKGUpe2UuZGF0YS5uZXdQb3M9ZS5lbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCl9ZnVuY3Rpb24gY28oZSl7dmFyIHQ9ZS5kYXRhLnBvcyxuPWUuZGF0YS5uZXdQb3Mscj10LmxlZnQtbi5sZWZ0LGk9dC50b3Atbi50b3A7aWYocnx8aSl7ZS5kYXRhLm1vdmVkPSEwO3ZhciBvPWUuZWxtLnN0eWxlO28udHJhbnNmb3JtPW8uV2Via2l0VHJhbnNmb3JtPVwidHJhbnNsYXRlKFwiK3IrXCJweCxcIitpK1wicHgpXCIsby50cmFuc2l0aW9uRHVyYXRpb249XCIwc1wifX1kZWxldGUgb28ubW9kZTt2YXIgdW89e1RyYW5zaXRpb246aW8sVHJhbnNpdGlvbkdyb3VwOntwcm9wczpvbyxiZWZvcmVNb3VudDpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD10aGlzLl91cGRhdGU7dGhpcy5fdXBkYXRlPWZ1bmN0aW9uKG4scil7dmFyIGk9V3QoZSk7ZS5fX3BhdGNoX18oZS5fdm5vZGUsZS5rZXB0LCExLCEwKSxlLl92bm9kZT1lLmtlcHQsaSgpLHQuY2FsbChlLG4scil9fSxyZW5kZXI6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PXRoaXMudGFnfHx0aGlzLiR2bm9kZS5kYXRhLnRhZ3x8XCJzcGFuXCIsbj1PYmplY3QuY3JlYXRlKG51bGwpLHI9dGhpcy5wcmV2Q2hpbGRyZW49dGhpcy5jaGlsZHJlbixpPXRoaXMuJHNsb3RzLmRlZmF1bHR8fFtdLG89dGhpcy5jaGlsZHJlbj1bXSxhPWVvKHRoaXMpLHM9MDtzPGkubGVuZ3RoO3MrKyl7dmFyIGM9aVtzXTtjLnRhZyYmbnVsbCE9Yy5rZXkmJjAhPT1TdHJpbmcoYy5rZXkpLmluZGV4T2YoXCJfX3ZsaXN0XCIpJiYoby5wdXNoKGMpLG5bYy5rZXldPWMsKGMuZGF0YXx8KGMuZGF0YT17fSkpLnRyYW5zaXRpb249YSl9aWYocil7Zm9yKHZhciB1PVtdLGw9W10sZj0wO2Y8ci5sZW5ndGg7ZisrKXt2YXIgcD1yW2ZdO3AuZGF0YS50cmFuc2l0aW9uPWEscC5kYXRhLnBvcz1wLmVsbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxuW3Aua2V5XT91LnB1c2gocCk6bC5wdXNoKHApfXRoaXMua2VwdD1lKHQsbnVsbCx1KSx0aGlzLnJlbW92ZWQ9bH1yZXR1cm4gZSh0LG51bGwsbyl9LHVwZGF0ZWQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnByZXZDaGlsZHJlbix0PXRoaXMubW92ZUNsYXNzfHwodGhpcy5uYW1lfHxcInZcIikrXCItbW92ZVwiO2UubGVuZ3RoJiZ0aGlzLmhhc01vdmUoZVswXS5lbG0sdCkmJihlLmZvckVhY2goYW8pLGUuZm9yRWFjaChzbyksZS5mb3JFYWNoKGNvKSx0aGlzLl9yZWZsb3c9ZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQsZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2lmKGUuZGF0YS5tb3ZlZCl7dmFyIG49ZS5lbG0scj1uLnN0eWxlO1RpKG4sdCksci50cmFuc2Zvcm09ci5XZWJraXRUcmFuc2Zvcm09ci50cmFuc2l0aW9uRHVyYXRpb249XCJcIixuLmFkZEV2ZW50TGlzdGVuZXIoeGksbi5fbW92ZUNiPWZ1bmN0aW9uIGUocil7ciYmci50YXJnZXQhPT1ufHxyJiYhL3RyYW5zZm9ybSQvLnRlc3Qoci5wcm9wZXJ0eU5hbWUpfHwobi5yZW1vdmVFdmVudExpc3RlbmVyKHhpLGUpLG4uX21vdmVDYj1udWxsLEVpKG4sdCkpfSl9fSkpfSxtZXRob2RzOntoYXNNb3ZlOmZ1bmN0aW9uKGUsdCl7aWYoIWJpKXJldHVybiExO2lmKHRoaXMuX2hhc01vdmUpcmV0dXJuIHRoaXMuX2hhc01vdmU7dmFyIG49ZS5jbG9uZU5vZGUoKTtlLl90cmFuc2l0aW9uQ2xhc3NlcyYmZS5fdHJhbnNpdGlvbkNsYXNzZXMuZm9yRWFjaChmdW5jdGlvbihlKXt5aShuLGUpfSksbWkobix0KSxuLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsdGhpcy4kZWwuYXBwZW5kQ2hpbGQobik7dmFyIHI9TGkobik7cmV0dXJuIHRoaXMuJGVsLnJlbW92ZUNoaWxkKG4pLHRoaXMuX2hhc01vdmU9ci5oYXNUcmFuc2Zvcm19fX19O2JuLmNvbmZpZy5tdXN0VXNlUHJvcD1Fbixibi5jb25maWcuaXNSZXNlcnZlZFRhZz1Kbixibi5jb25maWcuaXNSZXNlcnZlZEF0dHI9U24sYm4uY29uZmlnLmdldFRhZ05hbWVzcGFjZT1xbixibi5jb25maWcuaXNVbmtub3duRWxlbWVudD1mdW5jdGlvbihlKXtpZighVSlyZXR1cm4hMDtpZihKbihlKSlyZXR1cm4hMTtpZihlPWUudG9Mb3dlckNhc2UoKSxudWxsIT1XbltlXSlyZXR1cm4gV25bZV07dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlKTtyZXR1cm4gZS5pbmRleE9mKFwiLVwiKT4tMT9XbltlXT10LmNvbnN0cnVjdG9yPT09d2luZG93LkhUTUxVbmtub3duRWxlbWVudHx8dC5jb25zdHJ1Y3Rvcj09PXdpbmRvdy5IVE1MRWxlbWVudDpXbltlXT0vSFRNTFVua25vd25FbGVtZW50Ly50ZXN0KHQudG9TdHJpbmcoKSl9LGsoYm4ub3B0aW9ucy5kaXJlY3RpdmVzLFhpKSxrKGJuLm9wdGlvbnMuY29tcG9uZW50cyx1byksYm4ucHJvdG90eXBlLl9fcGF0Y2hfXz1VP0JpOlMsYm4ucHJvdG90eXBlLiRtb3VudD1mdW5jdGlvbihlLHQpe3JldHVybiBmdW5jdGlvbihlLHQsbil7dmFyIHI7cmV0dXJuIGUuJGVsPXQsZS4kb3B0aW9ucy5yZW5kZXJ8fChlLiRvcHRpb25zLnJlbmRlcj1kZSksWHQoZSxcImJlZm9yZU1vdW50XCIpLHI9ZnVuY3Rpb24oKXtlLl91cGRhdGUoZS5fcmVuZGVyKCksbil9LG5ldyB1bihlLHIsUyx7YmVmb3JlOmZ1bmN0aW9uKCl7ZS5faXNNb3VudGVkJiYhZS5faXNEZXN0cm95ZWQmJlh0KGUsXCJiZWZvcmVVcGRhdGVcIil9fSwhMCksbj0hMSxudWxsPT1lLiR2bm9kZSYmKGUuX2lzTW91bnRlZD0hMCxYdChlLFwibW91bnRlZFwiKSksZX0odGhpcyxlPWUmJlU/R24oZSk6dm9pZCAwLHQpfSxVJiZzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7UC5kZXZ0b29scyYmdGUmJnRlLmVtaXQoXCJpbml0XCIsYm4pfSwwKTt2YXIgbG89L1xce1xceygoPzoufFxccj9cXG4pKz8pXFx9XFx9L2csZm89L1stLiorP14ke30oKXxbXFxdXFwvXFxcXF0vZyxwbz1nKGZ1bmN0aW9uKGUpe3ZhciB0PWVbMF0ucmVwbGFjZShmbyxcIlxcXFwkJlwiKSxuPWVbMV0ucmVwbGFjZShmbyxcIlxcXFwkJlwiKTtyZXR1cm4gbmV3IFJlZ0V4cCh0K1wiKCg/Oi58XFxcXG4pKz8pXCIrbixcImdcIil9KTt2YXIgdm89e3N0YXRpY0tleXM6W1wic3RhdGljQ2xhc3NcIl0sdHJhbnNmb3JtTm9kZTpmdW5jdGlvbihlLHQpe3Qud2Fybjt2YXIgbj1JcihlLFwiY2xhc3NcIik7biYmKGUuc3RhdGljQ2xhc3M9SlNPTi5zdHJpbmdpZnkobikpO3ZhciByPU1yKGUsXCJjbGFzc1wiLCExKTtyJiYoZS5jbGFzc0JpbmRpbmc9cil9LGdlbkRhdGE6ZnVuY3Rpb24oZSl7dmFyIHQ9XCJcIjtyZXR1cm4gZS5zdGF0aWNDbGFzcyYmKHQrPVwic3RhdGljQ2xhc3M6XCIrZS5zdGF0aWNDbGFzcytcIixcIiksZS5jbGFzc0JpbmRpbmcmJih0Kz1cImNsYXNzOlwiK2UuY2xhc3NCaW5kaW5nK1wiLFwiKSx0fX07dmFyIGhvLG1vPXtzdGF0aWNLZXlzOltcInN0YXRpY1N0eWxlXCJdLHRyYW5zZm9ybU5vZGU6ZnVuY3Rpb24oZSx0KXt0Lndhcm47dmFyIG49SXIoZSxcInN0eWxlXCIpO24mJihlLnN0YXRpY1N0eWxlPUpTT04uc3RyaW5naWZ5KGlpKG4pKSk7dmFyIHI9TXIoZSxcInN0eWxlXCIsITEpO3ImJihlLnN0eWxlQmluZGluZz1yKX0sZ2VuRGF0YTpmdW5jdGlvbihlKXt2YXIgdD1cIlwiO3JldHVybiBlLnN0YXRpY1N0eWxlJiYodCs9XCJzdGF0aWNTdHlsZTpcIitlLnN0YXRpY1N0eWxlK1wiLFwiKSxlLnN0eWxlQmluZGluZyYmKHQrPVwic3R5bGU6KFwiK2Uuc3R5bGVCaW5kaW5nK1wiKSxcIiksdH19LHlvPWZ1bmN0aW9uKGUpe3JldHVybihobz1ob3x8ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkuaW5uZXJIVE1MPWUsaG8udGV4dENvbnRlbnR9LGdvPXAoXCJhcmVhLGJhc2UsYnIsY29sLGVtYmVkLGZyYW1lLGhyLGltZyxpbnB1dCxpc2luZGV4LGtleWdlbixsaW5rLG1ldGEscGFyYW0sc291cmNlLHRyYWNrLHdiclwiKSxfbz1wKFwiY29sZ3JvdXAsZGQsZHQsbGksb3B0aW9ucyxwLHRkLHRmb290LHRoLHRoZWFkLHRyLHNvdXJjZVwiKSxibz1wKFwiYWRkcmVzcyxhcnRpY2xlLGFzaWRlLGJhc2UsYmxvY2txdW90ZSxib2R5LGNhcHRpb24sY29sLGNvbGdyb3VwLGRkLGRldGFpbHMsZGlhbG9nLGRpdixkbCxkdCxmaWVsZHNldCxmaWdjYXB0aW9uLGZpZ3VyZSxmb290ZXIsZm9ybSxoMSxoMixoMyxoNCxoNSxoNixoZWFkLGhlYWRlcixoZ3JvdXAsaHIsaHRtbCxsZWdlbmQsbGksbWVudWl0ZW0sbWV0YSxvcHRncm91cCxvcHRpb24scGFyYW0scnAscnQsc291cmNlLHN0eWxlLHN1bW1hcnksdGJvZHksdGQsdGZvb3QsdGgsdGhlYWQsdGl0bGUsdHIsdHJhY2tcIiksJG89L15cXHMqKFteXFxzXCInPD5cXC89XSspKD86XFxzKig9KVxccyooPzpcIihbXlwiXSopXCIrfCcoW14nXSopJyt8KFteXFxzXCInPTw+YF0rKSkpPy8sd289L15cXHMqKCg/OnYtW1xcdy1dKzp8QHw6fCMpXFxbW149XStcXF1bXlxcc1wiJzw+XFwvPV0qKSg/OlxccyooPSlcXHMqKD86XCIoW15cIl0qKVwiK3wnKFteJ10qKScrfChbXlxcc1wiJz08PmBdKykpKT8vLENvPVwiW2EtekEtWl9dW1xcXFwtXFxcXC4wLTlfYS16QS1aYS16QS1aXFx4YjdcXHhjMC1cXHhkNlxceGQ4LVxceGY2XFx4ZjgtXFx1MDM3ZFxcdTAzN2YtXFx1MWZmZlxcdTIwMGMtXFx1MjAwZFxcdTIwM2YtXFx1MjA0MFxcdTIwNzAtXFx1MjE4ZlxcdTJjMDAtXFx1MmZlZlxcdTMwMDEtXFx1ZDdmZlxcdWY5MDAtXFx1ZmRjZlxcdWZkZjAtXFx1ZmZmZF0qXCIseG89XCIoKD86XCIrQ28rXCJcXFxcOik/XCIrQ28rXCIpXCIsQW89bmV3IFJlZ0V4cChcIl48XCIreG8pLGtvPS9eXFxzKihcXC8/KT4vLE9vPW5ldyBSZWdFeHAoXCJePFxcXFwvXCIreG8rXCJbXj5dKj5cIiksU289L148IURPQ1RZUEUgW14+XSs+L2ksVG89L148IVxcLS0vLEVvPS9ePCFcXFsvLE5vPXAoXCJzY3JpcHQsc3R5bGUsdGV4dGFyZWFcIiwhMCksam89e30sTG89e1wiJmx0O1wiOlwiPFwiLFwiJmd0O1wiOlwiPlwiLFwiJnF1b3Q7XCI6J1wiJyxcIiZhbXA7XCI6XCImXCIsXCImIzEwO1wiOlwiXFxuXCIsXCImIzk7XCI6XCJcXHRcIixcIiYjMzk7XCI6XCInXCJ9LE1vPS8mKD86bHR8Z3R8cXVvdHxhbXB8IzM5KTsvZyxJbz0vJig/Omx0fGd0fHF1b3R8YW1wfCMzOXwjMTB8IzkpOy9nLERvPXAoXCJwcmUsdGV4dGFyZWFcIiwhMCksUG89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZSYmRG8oZSkmJlwiXFxuXCI9PT10WzBdfTtmdW5jdGlvbiBSbyhlLHQpe3ZhciBuPXQ/SW86TW87cmV0dXJuIGUucmVwbGFjZShuLGZ1bmN0aW9uKGUpe3JldHVybiBMb1tlXX0pfXZhciBGbyxIbyxCbyxVbyx6byxWbyxLbyxKbyxxbz0vXkB8XnYtb246LyxXbz0vXnYtfF5AfF46Lyxabz0vKFtcXHNcXFNdKj8pXFxzKyg/OmlufG9mKVxccysoW1xcc1xcU10qKS8sR289LywoW14sXFx9XFxdXSopKD86LChbXixcXH1cXF1dKikpPyQvLFhvPS9eXFwofFxcKSQvZyxZbz0vXlxcWy4qXFxdJC8sUW89LzooLiopJC8sZWE9L146fF5cXC58XnYtYmluZDovLHRhPS9cXC5bXi5dKy9nLG5hPS9edi1zbG90KDp8JCl8XiMvLHJhPS9bXFxyXFxuXS8saWE9L1xccysvZyxvYT1nKHlvKSxhYT1cIl9lbXB0eV9cIjtmdW5jdGlvbiBzYShlLHQsbil7cmV0dXJue3R5cGU6MSx0YWc6ZSxhdHRyc0xpc3Q6dCxhdHRyc01hcDp2YSh0KSxyYXdBdHRyc01hcDp7fSxwYXJlbnQ6bixjaGlsZHJlbjpbXX19ZnVuY3Rpb24gY2EoZSx0KXtGbz10Lndhcm58fGtyLFZvPXQuaXNQcmVUYWd8fFQsS289dC5tdXN0VXNlUHJvcHx8VCxKbz10LmdldFRhZ05hbWVzcGFjZXx8VDt0LmlzUmVzZXJ2ZWRUYWc7Qm89T3IodC5tb2R1bGVzLFwidHJhbnNmb3JtTm9kZVwiKSxVbz1Pcih0Lm1vZHVsZXMsXCJwcmVUcmFuc2Zvcm1Ob2RlXCIpLHpvPU9yKHQubW9kdWxlcyxcInBvc3RUcmFuc2Zvcm1Ob2RlXCIpLEhvPXQuZGVsaW1pdGVyczt2YXIgbixyLGk9W10sbz0hMSE9PXQucHJlc2VydmVXaGl0ZXNwYWNlLGE9dC53aGl0ZXNwYWNlLHM9ITEsYz0hMTtmdW5jdGlvbiB1KGUpe2lmKGwoZSksc3x8ZS5wcm9jZXNzZWR8fChlPXVhKGUsdCkpLGkubGVuZ3RofHxlPT09bnx8bi5pZiYmKGUuZWxzZWlmfHxlLmVsc2UpJiZmYShuLHtleHA6ZS5lbHNlaWYsYmxvY2s6ZX0pLHImJiFlLmZvcmJpZGRlbilpZihlLmVsc2VpZnx8ZS5lbHNlKWE9ZSwodT1mdW5jdGlvbihlKXt2YXIgdD1lLmxlbmd0aDtmb3IoO3QtLTspe2lmKDE9PT1lW3RdLnR5cGUpcmV0dXJuIGVbdF07ZS5wb3AoKX19KHIuY2hpbGRyZW4pKSYmdS5pZiYmZmEodSx7ZXhwOmEuZWxzZWlmLGJsb2NrOmF9KTtlbHNle2lmKGUuc2xvdFNjb3BlKXt2YXIgbz1lLnNsb3RUYXJnZXR8fCdcImRlZmF1bHRcIic7KHIuc2NvcGVkU2xvdHN8fChyLnNjb3BlZFNsb3RzPXt9KSlbb109ZX1yLmNoaWxkcmVuLnB1c2goZSksZS5wYXJlbnQ9cn12YXIgYSx1O2UuY2hpbGRyZW49ZS5jaGlsZHJlbi5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIWUuc2xvdFNjb3BlfSksbChlKSxlLnByZSYmKHM9ITEpLFZvKGUudGFnKSYmKGM9ITEpO2Zvcih2YXIgZj0wO2Y8em8ubGVuZ3RoO2YrKyl6b1tmXShlLHQpfWZ1bmN0aW9uIGwoZSl7aWYoIWMpZm9yKHZhciB0Oyh0PWUuY2hpbGRyZW5bZS5jaGlsZHJlbi5sZW5ndGgtMV0pJiYzPT09dC50eXBlJiZcIiBcIj09PXQudGV4dDspZS5jaGlsZHJlbi5wb3AoKX1yZXR1cm4gZnVuY3Rpb24oZSx0KXtmb3IodmFyIG4scixpPVtdLG89dC5leHBlY3RIVE1MLGE9dC5pc1VuYXJ5VGFnfHxULHM9dC5jYW5CZUxlZnRPcGVuVGFnfHxULGM9MDtlOyl7aWYobj1lLHImJk5vKHIpKXt2YXIgdT0wLGw9ci50b0xvd2VyQ2FzZSgpLGY9am9bbF18fChqb1tsXT1uZXcgUmVnRXhwKFwiKFtcXFxcc1xcXFxTXSo/KSg8L1wiK2wrXCJbXj5dKj4pXCIsXCJpXCIpKSxwPWUucmVwbGFjZShmLGZ1bmN0aW9uKGUsbixyKXtyZXR1cm4gdT1yLmxlbmd0aCxObyhsKXx8XCJub3NjcmlwdFwiPT09bHx8KG49bi5yZXBsYWNlKC88IVxcLS0oW1xcc1xcU10qPyktLT4vZyxcIiQxXCIpLnJlcGxhY2UoLzwhXFxbQ0RBVEFcXFsoW1xcc1xcU10qPyldXT4vZyxcIiQxXCIpKSxQbyhsLG4pJiYobj1uLnNsaWNlKDEpKSx0LmNoYXJzJiZ0LmNoYXJzKG4pLFwiXCJ9KTtjKz1lLmxlbmd0aC1wLmxlbmd0aCxlPXAsayhsLGMtdSxjKX1lbHNle3ZhciBkPWUuaW5kZXhPZihcIjxcIik7aWYoMD09PWQpe2lmKFRvLnRlc3QoZSkpe3ZhciB2PWUuaW5kZXhPZihcIi0tXFx4M2VcIik7aWYodj49MCl7dC5zaG91bGRLZWVwQ29tbWVudCYmdC5jb21tZW50KGUuc3Vic3RyaW5nKDQsdiksYyxjK3YrMyksQyh2KzMpO2NvbnRpbnVlfX1pZihFby50ZXN0KGUpKXt2YXIgaD1lLmluZGV4T2YoXCJdPlwiKTtpZihoPj0wKXtDKGgrMik7Y29udGludWV9fXZhciBtPWUubWF0Y2goU28pO2lmKG0pe0MobVswXS5sZW5ndGgpO2NvbnRpbnVlfXZhciB5PWUubWF0Y2goT28pO2lmKHkpe3ZhciBnPWM7Qyh5WzBdLmxlbmd0aCksayh5WzFdLGcsYyk7Y29udGludWV9dmFyIF89eCgpO2lmKF8pe0EoXyksUG8oXy50YWdOYW1lLGUpJiZDKDEpO2NvbnRpbnVlfX12YXIgYj12b2lkIDAsJD12b2lkIDAsdz12b2lkIDA7aWYoZD49MCl7Zm9yKCQ9ZS5zbGljZShkKTshKE9vLnRlc3QoJCl8fEFvLnRlc3QoJCl8fFRvLnRlc3QoJCl8fEVvLnRlc3QoJCl8fCh3PSQuaW5kZXhPZihcIjxcIiwxKSk8MCk7KWQrPXcsJD1lLnNsaWNlKGQpO2I9ZS5zdWJzdHJpbmcoMCxkKX1kPDAmJihiPWUpLGImJkMoYi5sZW5ndGgpLHQuY2hhcnMmJmImJnQuY2hhcnMoYixjLWIubGVuZ3RoLGMpfWlmKGU9PT1uKXt0LmNoYXJzJiZ0LmNoYXJzKGUpO2JyZWFrfX1mdW5jdGlvbiBDKHQpe2MrPXQsZT1lLnN1YnN0cmluZyh0KX1mdW5jdGlvbiB4KCl7dmFyIHQ9ZS5tYXRjaChBbyk7aWYodCl7dmFyIG4scixpPXt0YWdOYW1lOnRbMV0sYXR0cnM6W10sc3RhcnQ6Y307Zm9yKEModFswXS5sZW5ndGgpOyEobj1lLm1hdGNoKGtvKSkmJihyPWUubWF0Y2god28pfHxlLm1hdGNoKCRvKSk7KXIuc3RhcnQ9YyxDKHJbMF0ubGVuZ3RoKSxyLmVuZD1jLGkuYXR0cnMucHVzaChyKTtpZihuKXJldHVybiBpLnVuYXJ5U2xhc2g9blsxXSxDKG5bMF0ubGVuZ3RoKSxpLmVuZD1jLGl9fWZ1bmN0aW9uIEEoZSl7dmFyIG49ZS50YWdOYW1lLGM9ZS51bmFyeVNsYXNoO28mJihcInBcIj09PXImJmJvKG4pJiZrKHIpLHMobikmJnI9PT1uJiZrKG4pKTtmb3IodmFyIHU9YShuKXx8ISFjLGw9ZS5hdHRycy5sZW5ndGgsZj1uZXcgQXJyYXkobCkscD0wO3A8bDtwKyspe3ZhciBkPWUuYXR0cnNbcF0sdj1kWzNdfHxkWzRdfHxkWzVdfHxcIlwiLGg9XCJhXCI9PT1uJiZcImhyZWZcIj09PWRbMV0/dC5zaG91bGREZWNvZGVOZXdsaW5lc0ZvckhyZWY6dC5zaG91bGREZWNvZGVOZXdsaW5lcztmW3BdPXtuYW1lOmRbMV0sdmFsdWU6Um8odixoKX19dXx8KGkucHVzaCh7dGFnOm4sbG93ZXJDYXNlZFRhZzpuLnRvTG93ZXJDYXNlKCksYXR0cnM6ZixzdGFydDplLnN0YXJ0LGVuZDplLmVuZH0pLHI9biksdC5zdGFydCYmdC5zdGFydChuLGYsdSxlLnN0YXJ0LGUuZW5kKX1mdW5jdGlvbiBrKGUsbixvKXt2YXIgYSxzO2lmKG51bGw9PW4mJihuPWMpLG51bGw9PW8mJihvPWMpLGUpZm9yKHM9ZS50b0xvd2VyQ2FzZSgpLGE9aS5sZW5ndGgtMTthPj0wJiZpW2FdLmxvd2VyQ2FzZWRUYWchPT1zO2EtLSk7ZWxzZSBhPTA7aWYoYT49MCl7Zm9yKHZhciB1PWkubGVuZ3RoLTE7dT49YTt1LS0pdC5lbmQmJnQuZW5kKGlbdV0udGFnLG4sbyk7aS5sZW5ndGg9YSxyPWEmJmlbYS0xXS50YWd9ZWxzZVwiYnJcIj09PXM/dC5zdGFydCYmdC5zdGFydChlLFtdLCEwLG4sbyk6XCJwXCI9PT1zJiYodC5zdGFydCYmdC5zdGFydChlLFtdLCExLG4sbyksdC5lbmQmJnQuZW5kKGUsbixvKSl9aygpfShlLHt3YXJuOkZvLGV4cGVjdEhUTUw6dC5leHBlY3RIVE1MLGlzVW5hcnlUYWc6dC5pc1VuYXJ5VGFnLGNhbkJlTGVmdE9wZW5UYWc6dC5jYW5CZUxlZnRPcGVuVGFnLHNob3VsZERlY29kZU5ld2xpbmVzOnQuc2hvdWxkRGVjb2RlTmV3bGluZXMsc2hvdWxkRGVjb2RlTmV3bGluZXNGb3JIcmVmOnQuc2hvdWxkRGVjb2RlTmV3bGluZXNGb3JIcmVmLHNob3VsZEtlZXBDb21tZW50OnQuY29tbWVudHMsb3V0cHV0U291cmNlUmFuZ2U6dC5vdXRwdXRTb3VyY2VSYW5nZSxzdGFydDpmdW5jdGlvbihlLG8sYSxsKXt2YXIgZj1yJiZyLm5zfHxKbyhlKTtKJiZcInN2Z1wiPT09ZiYmKG89ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PVtdLG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIHI9ZVtuXTtoYS50ZXN0KHIubmFtZSl8fChyLm5hbWU9ci5uYW1lLnJlcGxhY2UobWEsXCJcIiksdC5wdXNoKHIpKX1yZXR1cm4gdH0obykpO3ZhciBwLGQ9c2EoZSxvLHIpO2YmJihkLm5zPWYpLFwic3R5bGVcIiE9PShwPWQpLnRhZyYmKFwic2NyaXB0XCIhPT1wLnRhZ3x8cC5hdHRyc01hcC50eXBlJiZcInRleHQvamF2YXNjcmlwdFwiIT09cC5hdHRyc01hcC50eXBlKXx8ZWUoKXx8KGQuZm9yYmlkZGVuPSEwKTtmb3IodmFyIHY9MDt2PFVvLmxlbmd0aDt2KyspZD1Vb1t2XShkLHQpfHxkO3N8fCghZnVuY3Rpb24oZSl7bnVsbCE9SXIoZSxcInYtcHJlXCIpJiYoZS5wcmU9ITApfShkKSxkLnByZSYmKHM9ITApKSxWbyhkLnRhZykmJihjPSEwKSxzP2Z1bmN0aW9uKGUpe3ZhciB0PWUuYXR0cnNMaXN0LG49dC5sZW5ndGg7aWYobilmb3IodmFyIHI9ZS5hdHRycz1uZXcgQXJyYXkobiksaT0wO2k8bjtpKyspcltpXT17bmFtZTp0W2ldLm5hbWUsdmFsdWU6SlNPTi5zdHJpbmdpZnkodFtpXS52YWx1ZSl9LG51bGwhPXRbaV0uc3RhcnQmJihyW2ldLnN0YXJ0PXRbaV0uc3RhcnQscltpXS5lbmQ9dFtpXS5lbmQpO2Vsc2UgZS5wcmV8fChlLnBsYWluPSEwKX0oZCk6ZC5wcm9jZXNzZWR8fChsYShkKSxmdW5jdGlvbihlKXt2YXIgdD1JcihlLFwidi1pZlwiKTtpZih0KWUuaWY9dCxmYShlLHtleHA6dCxibG9jazplfSk7ZWxzZXtudWxsIT1JcihlLFwidi1lbHNlXCIpJiYoZS5lbHNlPSEwKTt2YXIgbj1JcihlLFwidi1lbHNlLWlmXCIpO24mJihlLmVsc2VpZj1uKX19KGQpLGZ1bmN0aW9uKGUpe251bGwhPUlyKGUsXCJ2LW9uY2VcIikmJihlLm9uY2U9ITApfShkKSksbnx8KG49ZCksYT91KGQpOihyPWQsaS5wdXNoKGQpKX0sZW5kOmZ1bmN0aW9uKGUsdCxuKXt2YXIgbz1pW2kubGVuZ3RoLTFdO2kubGVuZ3RoLT0xLHI9aVtpLmxlbmd0aC0xXSx1KG8pfSxjaGFyczpmdW5jdGlvbihlLHQsbil7aWYociYmKCFKfHxcInRleHRhcmVhXCIhPT1yLnRhZ3x8ci5hdHRyc01hcC5wbGFjZWhvbGRlciE9PWUpKXt2YXIgaSx1LGwsZj1yLmNoaWxkcmVuO2lmKGU9Y3x8ZS50cmltKCk/XCJzY3JpcHRcIj09PShpPXIpLnRhZ3x8XCJzdHlsZVwiPT09aS50YWc/ZTpvYShlKTpmLmxlbmd0aD9hP1wiY29uZGVuc2VcIj09PWEmJnJhLnRlc3QoZSk/XCJcIjpcIiBcIjpvP1wiIFwiOlwiXCI6XCJcIilcImNvbmRlbnNlXCI9PT1hJiYoZT1lLnJlcGxhY2UoaWEsXCIgXCIpKSwhcyYmXCIgXCIhPT1lJiYodT1mdW5jdGlvbihlLHQpe3ZhciBuPXQ/cG8odCk6bG87aWYobi50ZXN0KGUpKXtmb3IodmFyIHIsaSxvLGE9W10scz1bXSxjPW4ubGFzdEluZGV4PTA7cj1uLmV4ZWMoZSk7KXsoaT1yLmluZGV4KT5jJiYocy5wdXNoKG89ZS5zbGljZShjLGkpKSxhLnB1c2goSlNPTi5zdHJpbmdpZnkobykpKTt2YXIgdT14cihyWzFdLnRyaW0oKSk7YS5wdXNoKFwiX3MoXCIrdStcIilcIikscy5wdXNoKHtcIkBiaW5kaW5nXCI6dX0pLGM9aStyWzBdLmxlbmd0aH1yZXR1cm4gYzxlLmxlbmd0aCYmKHMucHVzaChvPWUuc2xpY2UoYykpLGEucHVzaChKU09OLnN0cmluZ2lmeShvKSkpLHtleHByZXNzaW9uOmEuam9pbihcIitcIiksdG9rZW5zOnN9fX0oZSxIbykpP2w9e3R5cGU6MixleHByZXNzaW9uOnUuZXhwcmVzc2lvbix0b2tlbnM6dS50b2tlbnMsdGV4dDplfTpcIiBcIj09PWUmJmYubGVuZ3RoJiZcIiBcIj09PWZbZi5sZW5ndGgtMV0udGV4dHx8KGw9e3R5cGU6Myx0ZXh0OmV9KSxsJiZmLnB1c2gobCl9fSxjb21tZW50OmZ1bmN0aW9uKGUsdCxuKXtpZihyKXt2YXIgaT17dHlwZTozLHRleHQ6ZSxpc0NvbW1lbnQ6ITB9O3IuY2hpbGRyZW4ucHVzaChpKX19fSksbn1mdW5jdGlvbiB1YShlLHQpe3ZhciBuLHI7KHI9TXIobj1lLFwia2V5XCIpKSYmKG4ua2V5PXIpLGUucGxhaW49IWUua2V5JiYhZS5zY29wZWRTbG90cyYmIWUuYXR0cnNMaXN0Lmxlbmd0aCxmdW5jdGlvbihlKXt2YXIgdD1NcihlLFwicmVmXCIpO3QmJihlLnJlZj10LGUucmVmSW5Gb3I9ZnVuY3Rpb24oZSl7dmFyIHQ9ZTtmb3IoO3Q7KXtpZih2b2lkIDAhPT10LmZvcilyZXR1cm4hMDt0PXQucGFyZW50fXJldHVybiExfShlKSl9KGUpLGZ1bmN0aW9uKGUpe3ZhciB0O1widGVtcGxhdGVcIj09PWUudGFnPyh0PUlyKGUsXCJzY29wZVwiKSxlLnNsb3RTY29wZT10fHxJcihlLFwic2xvdC1zY29wZVwiKSk6KHQ9SXIoZSxcInNsb3Qtc2NvcGVcIikpJiYoZS5zbG90U2NvcGU9dCk7dmFyIG49TXIoZSxcInNsb3RcIik7biYmKGUuc2xvdFRhcmdldD0nXCJcIic9PT1uPydcImRlZmF1bHRcIic6bixlLnNsb3RUYXJnZXREeW5hbWljPSEoIWUuYXR0cnNNYXBbXCI6c2xvdFwiXSYmIWUuYXR0cnNNYXBbXCJ2LWJpbmQ6c2xvdFwiXSksXCJ0ZW1wbGF0ZVwiPT09ZS50YWd8fGUuc2xvdFNjb3BlfHxUcihlLFwic2xvdFwiLG4sZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5yYXdBdHRyc01hcFtcIjpcIit0XXx8ZS5yYXdBdHRyc01hcFtcInYtYmluZDpcIit0XXx8ZS5yYXdBdHRyc01hcFt0XX0oZSxcInNsb3RcIikpKTtpZihcInRlbXBsYXRlXCI9PT1lLnRhZyl7dmFyIHI9RHIoZSxuYSk7aWYocil7dmFyIGk9cGEociksbz1pLm5hbWUsYT1pLmR5bmFtaWM7ZS5zbG90VGFyZ2V0PW8sZS5zbG90VGFyZ2V0RHluYW1pYz1hLGUuc2xvdFNjb3BlPXIudmFsdWV8fGFhfX1lbHNle3ZhciBzPURyKGUsbmEpO2lmKHMpe3ZhciBjPWUuc2NvcGVkU2xvdHN8fChlLnNjb3BlZFNsb3RzPXt9KSx1PXBhKHMpLGw9dS5uYW1lLGY9dS5keW5hbWljLHA9Y1tsXT1zYShcInRlbXBsYXRlXCIsW10sZSk7cC5zbG90VGFyZ2V0PWwscC5zbG90VGFyZ2V0RHluYW1pYz1mLHAuY2hpbGRyZW49ZS5jaGlsZHJlbi5maWx0ZXIoZnVuY3Rpb24oZSl7aWYoIWUuc2xvdFNjb3BlKXJldHVybiBlLnBhcmVudD1wLCEwfSkscC5zbG90U2NvcGU9cy52YWx1ZXx8YWEsZS5jaGlsZHJlbj1bXSxlLnBsYWluPSExfX19KGUpLGZ1bmN0aW9uKGUpe1wic2xvdFwiPT09ZS50YWcmJihlLnNsb3ROYW1lPU1yKGUsXCJuYW1lXCIpKX0oZSksZnVuY3Rpb24oZSl7dmFyIHQ7KHQ9TXIoZSxcImlzXCIpKSYmKGUuY29tcG9uZW50PXQpO251bGwhPUlyKGUsXCJpbmxpbmUtdGVtcGxhdGVcIikmJihlLmlubGluZVRlbXBsYXRlPSEwKX0oZSk7Zm9yKHZhciBpPTA7aTxCby5sZW5ndGg7aSsrKWU9Qm9baV0oZSx0KXx8ZTtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQsbixyLGksbyxhLHMsYyx1PWUuYXR0cnNMaXN0O2Zvcih0PTAsbj11Lmxlbmd0aDt0PG47dCsrKWlmKHI9aT11W3RdLm5hbWUsbz11W3RdLnZhbHVlLFdvLnRlc3QocikpaWYoZS5oYXNCaW5kaW5ncz0hMCwoYT1kYShyLnJlcGxhY2UoV28sXCJcIikpKSYmKHI9ci5yZXBsYWNlKHRhLFwiXCIpKSxlYS50ZXN0KHIpKXI9ci5yZXBsYWNlKGVhLFwiXCIpLG89eHIobyksKGM9WW8udGVzdChyKSkmJihyPXIuc2xpY2UoMSwtMSkpLGEmJihhLnByb3AmJiFjJiZcImlubmVySHRtbFwiPT09KHI9YihyKSkmJihyPVwiaW5uZXJIVE1MXCIpLGEuY2FtZWwmJiFjJiYocj1iKHIpKSxhLnN5bmMmJihzPUZyKG8sXCIkZXZlbnRcIiksYz9McihlLCdcInVwZGF0ZTpcIisoJytyK1wiKVwiLHMsbnVsbCwhMSwwLHVbdF0sITApOihMcihlLFwidXBkYXRlOlwiK2IocikscyxudWxsLCExLDAsdVt0XSksQyhyKSE9PWIocikmJkxyKGUsXCJ1cGRhdGU6XCIrQyhyKSxzLG51bGwsITEsMCx1W3RdKSkpKSxhJiZhLnByb3B8fCFlLmNvbXBvbmVudCYmS28oZS50YWcsZS5hdHRyc01hcC50eXBlLHIpP1NyKGUscixvLHVbdF0sYyk6VHIoZSxyLG8sdVt0XSxjKTtlbHNlIGlmKHFvLnRlc3Qocikpcj1yLnJlcGxhY2UocW8sXCJcIiksKGM9WW8udGVzdChyKSkmJihyPXIuc2xpY2UoMSwtMSkpLExyKGUscixvLGEsITEsMCx1W3RdLGMpO2Vsc2V7dmFyIGw9KHI9ci5yZXBsYWNlKFdvLFwiXCIpKS5tYXRjaChRbyksZj1sJiZsWzFdO2M9ITEsZiYmKHI9ci5zbGljZSgwLC0oZi5sZW5ndGgrMSkpLFlvLnRlc3QoZikmJihmPWYuc2xpY2UoMSwtMSksYz0hMCkpLE5yKGUscixpLG8sZixjLGEsdVt0XSl9ZWxzZSBUcihlLHIsSlNPTi5zdHJpbmdpZnkobyksdVt0XSksIWUuY29tcG9uZW50JiZcIm11dGVkXCI9PT1yJiZLbyhlLnRhZyxlLmF0dHJzTWFwLnR5cGUscikmJlNyKGUscixcInRydWVcIix1W3RdKX0oZSksZX1mdW5jdGlvbiBsYShlKXt2YXIgdDtpZih0PUlyKGUsXCJ2LWZvclwiKSl7dmFyIG49ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5tYXRjaChabyk7aWYoIXQpcmV0dXJuO3ZhciBuPXt9O24uZm9yPXRbMl0udHJpbSgpO3ZhciByPXRbMV0udHJpbSgpLnJlcGxhY2UoWG8sXCJcIiksaT1yLm1hdGNoKEdvKTtpPyhuLmFsaWFzPXIucmVwbGFjZShHbyxcIlwiKS50cmltKCksbi5pdGVyYXRvcjE9aVsxXS50cmltKCksaVsyXSYmKG4uaXRlcmF0b3IyPWlbMl0udHJpbSgpKSk6bi5hbGlhcz1yO3JldHVybiBufSh0KTtuJiZrKGUsbil9fWZ1bmN0aW9uIGZhKGUsdCl7ZS5pZkNvbmRpdGlvbnN8fChlLmlmQ29uZGl0aW9ucz1bXSksZS5pZkNvbmRpdGlvbnMucHVzaCh0KX1mdW5jdGlvbiBwYShlKXt2YXIgdD1lLm5hbWUucmVwbGFjZShuYSxcIlwiKTtyZXR1cm4gdHx8XCIjXCIhPT1lLm5hbWVbMF0mJih0PVwiZGVmYXVsdFwiKSxZby50ZXN0KHQpP3tuYW1lOnQuc2xpY2UoMSwtMSksZHluYW1pYzohMH06e25hbWU6J1wiJyt0KydcIicsZHluYW1pYzohMX19ZnVuY3Rpb24gZGEoZSl7dmFyIHQ9ZS5tYXRjaCh0YSk7aWYodCl7dmFyIG49e307cmV0dXJuIHQuZm9yRWFjaChmdW5jdGlvbihlKXtuW2Uuc2xpY2UoMSldPSEwfSksbn19ZnVuY3Rpb24gdmEoZSl7Zm9yKHZhciB0PXt9LG49MCxyPWUubGVuZ3RoO248cjtuKyspdFtlW25dLm5hbWVdPWVbbl0udmFsdWU7cmV0dXJuIHR9dmFyIGhhPS9eeG1sbnM6TlNcXGQrLyxtYT0vXk5TXFxkKzovO2Z1bmN0aW9uIHlhKGUpe3JldHVybiBzYShlLnRhZyxlLmF0dHJzTGlzdC5zbGljZSgpLGUucGFyZW50KX12YXIgZ2E9W3ZvLG1vLHtwcmVUcmFuc2Zvcm1Ob2RlOmZ1bmN0aW9uKGUsdCl7aWYoXCJpbnB1dFwiPT09ZS50YWcpe3ZhciBuLHI9ZS5hdHRyc01hcDtpZighcltcInYtbW9kZWxcIl0pcmV0dXJuO2lmKChyW1wiOnR5cGVcIl18fHJbXCJ2LWJpbmQ6dHlwZVwiXSkmJihuPU1yKGUsXCJ0eXBlXCIpKSxyLnR5cGV8fG58fCFyW1widi1iaW5kXCJdfHwobj1cIihcIityW1widi1iaW5kXCJdK1wiKS50eXBlXCIpLG4pe3ZhciBpPUlyKGUsXCJ2LWlmXCIsITApLG89aT9cIiYmKFwiK2krXCIpXCI6XCJcIixhPW51bGwhPUlyKGUsXCJ2LWVsc2VcIiwhMCkscz1JcihlLFwidi1lbHNlLWlmXCIsITApLGM9eWEoZSk7bGEoYyksRXIoYyxcInR5cGVcIixcImNoZWNrYm94XCIpLHVhKGMsdCksYy5wcm9jZXNzZWQ9ITAsYy5pZj1cIihcIituK1wiKT09PSdjaGVja2JveCdcIitvLGZhKGMse2V4cDpjLmlmLGJsb2NrOmN9KTt2YXIgdT15YShlKTtJcih1LFwidi1mb3JcIiwhMCksRXIodSxcInR5cGVcIixcInJhZGlvXCIpLHVhKHUsdCksZmEoYyx7ZXhwOlwiKFwiK24rXCIpPT09J3JhZGlvJ1wiK28sYmxvY2s6dX0pO3ZhciBsPXlhKGUpO3JldHVybiBJcihsLFwidi1mb3JcIiwhMCksRXIobCxcIjp0eXBlXCIsbiksdWEobCx0KSxmYShjLHtleHA6aSxibG9jazpsfSksYT9jLmVsc2U9ITA6cyYmKGMuZWxzZWlmPXMpLGN9fX19XTt2YXIgX2EsYmEsJGE9e2V4cGVjdEhUTUw6ITAsbW9kdWxlczpnYSxkaXJlY3RpdmVzOnttb2RlbDpmdW5jdGlvbihlLHQsbil7dmFyIHI9dC52YWx1ZSxpPXQubW9kaWZpZXJzLG89ZS50YWcsYT1lLmF0dHJzTWFwLnR5cGU7aWYoZS5jb21wb25lbnQpcmV0dXJuIFJyKGUscixpKSwhMTtpZihcInNlbGVjdFwiPT09bykhZnVuY3Rpb24oZSx0LG4pe3ZhciByPSd2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsZnVuY3Rpb24obyl7cmV0dXJuIG8uc2VsZWN0ZWR9KS5tYXAoZnVuY3Rpb24obyl7dmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZTtyZXR1cm4gJysobiYmbi5udW1iZXI/XCJfbih2YWwpXCI6XCJ2YWxcIikrXCJ9KTtcIjtyPXIrXCIgXCIrRnIodCxcIiRldmVudC50YXJnZXQubXVsdGlwbGUgPyAkJHNlbGVjdGVkVmFsIDogJCRzZWxlY3RlZFZhbFswXVwiKSxMcihlLFwiY2hhbmdlXCIscixudWxsLCEwKX0oZSxyLGkpO2Vsc2UgaWYoXCJpbnB1dFwiPT09byYmXCJjaGVja2JveFwiPT09YSkhZnVuY3Rpb24oZSx0LG4pe3ZhciByPW4mJm4ubnVtYmVyLGk9TXIoZSxcInZhbHVlXCIpfHxcIm51bGxcIixvPU1yKGUsXCJ0cnVlLXZhbHVlXCIpfHxcInRydWVcIixhPU1yKGUsXCJmYWxzZS12YWx1ZVwiKXx8XCJmYWxzZVwiO1NyKGUsXCJjaGVja2VkXCIsXCJBcnJheS5pc0FycmF5KFwiK3QrXCIpP19pKFwiK3QrXCIsXCIraStcIik+LTFcIisoXCJ0cnVlXCI9PT1vP1wiOihcIit0K1wiKVwiOlwiOl9xKFwiK3QrXCIsXCIrbytcIilcIikpLExyKGUsXCJjaGFuZ2VcIixcInZhciAkJGE9XCIrdCtcIiwkJGVsPSRldmVudC50YXJnZXQsJCRjPSQkZWwuY2hlY2tlZD8oXCIrbytcIik6KFwiK2ErXCIpO2lmKEFycmF5LmlzQXJyYXkoJCRhKSl7dmFyICQkdj1cIisocj9cIl9uKFwiK2krXCIpXCI6aSkrXCIsJCRpPV9pKCQkYSwkJHYpO2lmKCQkZWwuY2hlY2tlZCl7JCRpPDAmJihcIitGcih0LFwiJCRhLmNvbmNhdChbJCR2XSlcIikrXCIpfWVsc2V7JCRpPi0xJiYoXCIrRnIodCxcIiQkYS5zbGljZSgwLCQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkrMSkpXCIpK1wiKX19ZWxzZXtcIitGcih0LFwiJCRjXCIpK1wifVwiLG51bGwsITApfShlLHIsaSk7ZWxzZSBpZihcImlucHV0XCI9PT1vJiZcInJhZGlvXCI9PT1hKSFmdW5jdGlvbihlLHQsbil7dmFyIHI9biYmbi5udW1iZXIsaT1NcihlLFwidmFsdWVcIil8fFwibnVsbFwiO1NyKGUsXCJjaGVja2VkXCIsXCJfcShcIit0K1wiLFwiKyhpPXI/XCJfbihcIitpK1wiKVwiOmkpK1wiKVwiKSxMcihlLFwiY2hhbmdlXCIsRnIodCxpKSxudWxsLCEwKX0oZSxyLGkpO2Vsc2UgaWYoXCJpbnB1dFwiPT09b3x8XCJ0ZXh0YXJlYVwiPT09bykhZnVuY3Rpb24oZSx0LG4pe3ZhciByPWUuYXR0cnNNYXAudHlwZSxpPW58fHt9LG89aS5sYXp5LGE9aS5udW1iZXIscz1pLnRyaW0sYz0hbyYmXCJyYW5nZVwiIT09cix1PW8/XCJjaGFuZ2VcIjpcInJhbmdlXCI9PT1yP0pyOlwiaW5wdXRcIixsPVwiJGV2ZW50LnRhcmdldC52YWx1ZVwiO3MmJihsPVwiJGV2ZW50LnRhcmdldC52YWx1ZS50cmltKClcIiksYSYmKGw9XCJfbihcIitsK1wiKVwiKTt2YXIgZj1Gcih0LGwpO2MmJihmPVwiaWYoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpcmV0dXJuO1wiK2YpLFNyKGUsXCJ2YWx1ZVwiLFwiKFwiK3QrXCIpXCIpLExyKGUsdSxmLG51bGwsITApLChzfHxhKSYmTHIoZSxcImJsdXJcIixcIiRmb3JjZVVwZGF0ZSgpXCIpfShlLHIsaSk7ZWxzZSBpZighUC5pc1Jlc2VydmVkVGFnKG8pKXJldHVybiBScihlLHIsaSksITE7cmV0dXJuITB9LHRleHQ6ZnVuY3Rpb24oZSx0KXt0LnZhbHVlJiZTcihlLFwidGV4dENvbnRlbnRcIixcIl9zKFwiK3QudmFsdWUrXCIpXCIsdCl9LGh0bWw6ZnVuY3Rpb24oZSx0KXt0LnZhbHVlJiZTcihlLFwiaW5uZXJIVE1MXCIsXCJfcyhcIit0LnZhbHVlK1wiKVwiLHQpfX0saXNQcmVUYWc6ZnVuY3Rpb24oZSl7cmV0dXJuXCJwcmVcIj09PWV9LGlzVW5hcnlUYWc6Z28sbXVzdFVzZVByb3A6RW4sY2FuQmVMZWZ0T3BlblRhZzpfbyxpc1Jlc2VydmVkVGFnOkpuLGdldFRhZ05hbWVzcGFjZTpxbixzdGF0aWNLZXlzOmZ1bmN0aW9uKGUpe3JldHVybiBlLnJlZHVjZShmdW5jdGlvbihlLHQpe3JldHVybiBlLmNvbmNhdCh0LnN0YXRpY0tleXN8fFtdKX0sW10pLmpvaW4oXCIsXCIpfShnYSl9LHdhPWcoZnVuY3Rpb24oZSl7cmV0dXJuIHAoXCJ0eXBlLHRhZyxhdHRyc0xpc3QsYXR0cnNNYXAscGxhaW4scGFyZW50LGNoaWxkcmVuLGF0dHJzLHN0YXJ0LGVuZCxyYXdBdHRyc01hcFwiKyhlP1wiLFwiK2U6XCJcIikpfSk7ZnVuY3Rpb24gQ2EoZSx0KXtlJiYoX2E9d2EodC5zdGF0aWNLZXlzfHxcIlwiKSxiYT10LmlzUmVzZXJ2ZWRUYWd8fFQsZnVuY3Rpb24gZSh0KXt0LnN0YXRpYz1mdW5jdGlvbihlKXtpZigyPT09ZS50eXBlKXJldHVybiExO2lmKDM9PT1lLnR5cGUpcmV0dXJuITA7cmV0dXJuISghZS5wcmUmJihlLmhhc0JpbmRpbmdzfHxlLmlmfHxlLmZvcnx8ZChlLnRhZyl8fCFiYShlLnRhZyl8fGZ1bmN0aW9uKGUpe2Zvcig7ZS5wYXJlbnQ7KXtpZihcInRlbXBsYXRlXCIhPT0oZT1lLnBhcmVudCkudGFnKXJldHVybiExO2lmKGUuZm9yKXJldHVybiEwfXJldHVybiExfShlKXx8IU9iamVjdC5rZXlzKGUpLmV2ZXJ5KF9hKSkpfSh0KTtpZigxPT09dC50eXBlKXtpZighYmEodC50YWcpJiZcInNsb3RcIiE9PXQudGFnJiZudWxsPT10LmF0dHJzTWFwW1wiaW5saW5lLXRlbXBsYXRlXCJdKXJldHVybjtmb3IodmFyIG49MCxyPXQuY2hpbGRyZW4ubGVuZ3RoO248cjtuKyspe3ZhciBpPXQuY2hpbGRyZW5bbl07ZShpKSxpLnN0YXRpY3x8KHQuc3RhdGljPSExKX1pZih0LmlmQ29uZGl0aW9ucylmb3IodmFyIG89MSxhPXQuaWZDb25kaXRpb25zLmxlbmd0aDtvPGE7bysrKXt2YXIgcz10LmlmQ29uZGl0aW9uc1tvXS5ibG9jaztlKHMpLHMuc3RhdGljfHwodC5zdGF0aWM9ITEpfX19KGUpLGZ1bmN0aW9uIGUodCxuKXtpZigxPT09dC50eXBlKXtpZigodC5zdGF0aWN8fHQub25jZSkmJih0LnN0YXRpY0luRm9yPW4pLHQuc3RhdGljJiZ0LmNoaWxkcmVuLmxlbmd0aCYmKDEhPT10LmNoaWxkcmVuLmxlbmd0aHx8MyE9PXQuY2hpbGRyZW5bMF0udHlwZSkpcmV0dXJuIHZvaWQodC5zdGF0aWNSb290PSEwKTtpZih0LnN0YXRpY1Jvb3Q9ITEsdC5jaGlsZHJlbilmb3IodmFyIHI9MCxpPXQuY2hpbGRyZW4ubGVuZ3RoO3I8aTtyKyspZSh0LmNoaWxkcmVuW3JdLG58fCEhdC5mb3IpO2lmKHQuaWZDb25kaXRpb25zKWZvcih2YXIgbz0xLGE9dC5pZkNvbmRpdGlvbnMubGVuZ3RoO288YTtvKyspZSh0LmlmQ29uZGl0aW9uc1tvXS5ibG9jayxuKX19KGUsITEpKX12YXIgeGE9L14oW1xcdyRfXSt8XFwoW14pXSo/XFwpKVxccyo9PnxeZnVuY3Rpb25cXHMqXFwoLyxBYT0vXFwoW14pXSo/XFwpOyokLyxrYT0vXltBLVphLXpfJF1bXFx3JF0qKD86XFwuW0EtWmEtel8kXVtcXHckXSp8XFxbJ1teJ10qPyddfFxcW1wiW15cIl0qP1wiXXxcXFtcXGQrXXxcXFtbQS1aYS16XyRdW1xcdyRdKl0pKiQvLE9hPXtlc2M6MjcsdGFiOjksZW50ZXI6MTMsc3BhY2U6MzIsdXA6MzgsbGVmdDozNyxyaWdodDozOSxkb3duOjQwLGRlbGV0ZTpbOCw0Nl19LFNhPXtlc2M6W1wiRXNjXCIsXCJFc2NhcGVcIl0sdGFiOlwiVGFiXCIsZW50ZXI6XCJFbnRlclwiLHNwYWNlOltcIiBcIixcIlNwYWNlYmFyXCJdLHVwOltcIlVwXCIsXCJBcnJvd1VwXCJdLGxlZnQ6W1wiTGVmdFwiLFwiQXJyb3dMZWZ0XCJdLHJpZ2h0OltcIlJpZ2h0XCIsXCJBcnJvd1JpZ2h0XCJdLGRvd246W1wiRG93blwiLFwiQXJyb3dEb3duXCJdLGRlbGV0ZTpbXCJCYWNrc3BhY2VcIixcIkRlbGV0ZVwiLFwiRGVsXCJdfSxUYT1mdW5jdGlvbihlKXtyZXR1cm5cImlmKFwiK2UrXCIpcmV0dXJuIG51bGw7XCJ9LEVhPXtzdG9wOlwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1wiLHByZXZlbnQ6XCIkZXZlbnQucHJldmVudERlZmF1bHQoKTtcIixzZWxmOlRhKFwiJGV2ZW50LnRhcmdldCAhPT0gJGV2ZW50LmN1cnJlbnRUYXJnZXRcIiksY3RybDpUYShcIiEkZXZlbnQuY3RybEtleVwiKSxzaGlmdDpUYShcIiEkZXZlbnQuc2hpZnRLZXlcIiksYWx0OlRhKFwiISRldmVudC5hbHRLZXlcIiksbWV0YTpUYShcIiEkZXZlbnQubWV0YUtleVwiKSxsZWZ0OlRhKFwiJ2J1dHRvbicgaW4gJGV2ZW50ICYmICRldmVudC5idXR0b24gIT09IDBcIiksbWlkZGxlOlRhKFwiJ2J1dHRvbicgaW4gJGV2ZW50ICYmICRldmVudC5idXR0b24gIT09IDFcIikscmlnaHQ6VGEoXCInYnV0dG9uJyBpbiAkZXZlbnQgJiYgJGV2ZW50LmJ1dHRvbiAhPT0gMlwiKX07ZnVuY3Rpb24gTmEoZSx0KXt2YXIgbj10P1wibmF0aXZlT246XCI6XCJvbjpcIixyPVwiXCIsaT1cIlwiO2Zvcih2YXIgbyBpbiBlKXt2YXIgYT1qYShlW29dKTtlW29dJiZlW29dLmR5bmFtaWM/aSs9bytcIixcIithK1wiLFwiOnIrPSdcIicrbysnXCI6JythK1wiLFwifXJldHVybiByPVwie1wiK3Iuc2xpY2UoMCwtMSkrXCJ9XCIsaT9uK1wiX2QoXCIrcitcIixbXCIraS5zbGljZSgwLC0xKStcIl0pXCI6bityfWZ1bmN0aW9uIGphKGUpe2lmKCFlKXJldHVyblwiZnVuY3Rpb24oKXt9XCI7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm5cIltcIitlLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gamEoZSl9KS5qb2luKFwiLFwiKStcIl1cIjt2YXIgdD1rYS50ZXN0KGUudmFsdWUpLG49eGEudGVzdChlLnZhbHVlKSxyPWthLnRlc3QoZS52YWx1ZS5yZXBsYWNlKEFhLFwiXCIpKTtpZihlLm1vZGlmaWVycyl7dmFyIGk9XCJcIixvPVwiXCIsYT1bXTtmb3IodmFyIHMgaW4gZS5tb2RpZmllcnMpaWYoRWFbc10pbys9RWFbc10sT2Fbc10mJmEucHVzaChzKTtlbHNlIGlmKFwiZXhhY3RcIj09PXMpe3ZhciBjPWUubW9kaWZpZXJzO28rPVRhKFtcImN0cmxcIixcInNoaWZ0XCIsXCJhbHRcIixcIm1ldGFcIl0uZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiFjW2VdfSkubWFwKGZ1bmN0aW9uKGUpe3JldHVyblwiJGV2ZW50LlwiK2UrXCJLZXlcIn0pLmpvaW4oXCJ8fFwiKSl9ZWxzZSBhLnB1c2gocyk7cmV0dXJuIGEubGVuZ3RoJiYoaSs9ZnVuY3Rpb24oZSl7cmV0dXJuXCJpZigoJ2tleUNvZGUnIGluICRldmVudCkmJlwiK2UubWFwKExhKS5qb2luKFwiJiZcIikrXCIpcmV0dXJuIG51bGw7XCJ9KGEpKSxvJiYoaSs9byksXCJmdW5jdGlvbigkZXZlbnQpe1wiK2krKHQ/XCJyZXR1cm4gXCIrZS52YWx1ZStcIigkZXZlbnQpXCI6bj9cInJldHVybiAoXCIrZS52YWx1ZStcIikoJGV2ZW50KVwiOnI/XCJyZXR1cm4gXCIrZS52YWx1ZTplLnZhbHVlKStcIn1cIn1yZXR1cm4gdHx8bj9lLnZhbHVlOlwiZnVuY3Rpb24oJGV2ZW50KXtcIisocj9cInJldHVybiBcIitlLnZhbHVlOmUudmFsdWUpK1wifVwifWZ1bmN0aW9uIExhKGUpe3ZhciB0PXBhcnNlSW50KGUsMTApO2lmKHQpcmV0dXJuXCIkZXZlbnQua2V5Q29kZSE9PVwiK3Q7dmFyIG49T2FbZV0scj1TYVtlXTtyZXR1cm5cIl9rKCRldmVudC5rZXlDb2RlLFwiK0pTT04uc3RyaW5naWZ5KGUpK1wiLFwiK0pTT04uc3RyaW5naWZ5KG4pK1wiLCRldmVudC5rZXksXCIrSlNPTi5zdHJpbmdpZnkocikrXCIpXCJ9dmFyIE1hPXtvbjpmdW5jdGlvbihlLHQpe2Uud3JhcExpc3RlbmVycz1mdW5jdGlvbihlKXtyZXR1cm5cIl9nKFwiK2UrXCIsXCIrdC52YWx1ZStcIilcIn19LGJpbmQ6ZnVuY3Rpb24oZSx0KXtlLndyYXBEYXRhPWZ1bmN0aW9uKG4pe3JldHVyblwiX2IoXCIrbitcIiwnXCIrZS50YWcrXCInLFwiK3QudmFsdWUrXCIsXCIrKHQubW9kaWZpZXJzJiZ0Lm1vZGlmaWVycy5wcm9wP1widHJ1ZVwiOlwiZmFsc2VcIikrKHQubW9kaWZpZXJzJiZ0Lm1vZGlmaWVycy5zeW5jP1wiLHRydWVcIjpcIlwiKStcIilcIn19LGNsb2FrOlN9LElhPWZ1bmN0aW9uKGUpe3RoaXMub3B0aW9ucz1lLHRoaXMud2Fybj1lLndhcm58fGtyLHRoaXMudHJhbnNmb3Jtcz1PcihlLm1vZHVsZXMsXCJ0cmFuc2Zvcm1Db2RlXCIpLHRoaXMuZGF0YUdlbkZucz1PcihlLm1vZHVsZXMsXCJnZW5EYXRhXCIpLHRoaXMuZGlyZWN0aXZlcz1rKGsoe30sTWEpLGUuZGlyZWN0aXZlcyk7dmFyIHQ9ZS5pc1Jlc2VydmVkVGFnfHxUO3RoaXMubWF5YmVDb21wb25lbnQ9ZnVuY3Rpb24oZSl7cmV0dXJuISFlLmNvbXBvbmVudHx8IXQoZS50YWcpfSx0aGlzLm9uY2VJZD0wLHRoaXMuc3RhdGljUmVuZGVyRm5zPVtdLHRoaXMucHJlPSExfTtmdW5jdGlvbiBEYShlLHQpe3ZhciBuPW5ldyBJYSh0KTtyZXR1cm57cmVuZGVyOlwid2l0aCh0aGlzKXtyZXR1cm4gXCIrKGU/UGEoZSxuKTonX2MoXCJkaXZcIiknKStcIn1cIixzdGF0aWNSZW5kZXJGbnM6bi5zdGF0aWNSZW5kZXJGbnN9fWZ1bmN0aW9uIFBhKGUsdCl7aWYoZS5wYXJlbnQmJihlLnByZT1lLnByZXx8ZS5wYXJlbnQucHJlKSxlLnN0YXRpY1Jvb3QmJiFlLnN0YXRpY1Byb2Nlc3NlZClyZXR1cm4gUmEoZSx0KTtpZihlLm9uY2UmJiFlLm9uY2VQcm9jZXNzZWQpcmV0dXJuIEZhKGUsdCk7aWYoZS5mb3ImJiFlLmZvclByb2Nlc3NlZClyZXR1cm4gQmEoZSx0KTtpZihlLmlmJiYhZS5pZlByb2Nlc3NlZClyZXR1cm4gSGEoZSx0KTtpZihcInRlbXBsYXRlXCIhPT1lLnRhZ3x8ZS5zbG90VGFyZ2V0fHx0LnByZSl7aWYoXCJzbG90XCI9PT1lLnRhZylyZXR1cm4gZnVuY3Rpb24oZSx0KXt2YXIgbj1lLnNsb3ROYW1lfHwnXCJkZWZhdWx0XCInLHI9VmEoZSx0KSxpPVwiX3QoXCIrbisocj9cIixcIityOlwiXCIpLG89ZS5hdHRyc3x8ZS5keW5hbWljQXR0cnM/cWEoKGUuYXR0cnN8fFtdKS5jb25jYXQoZS5keW5hbWljQXR0cnN8fFtdKS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJue25hbWU6YihlLm5hbWUpLHZhbHVlOmUudmFsdWUsZHluYW1pYzplLmR5bmFtaWN9fSkpOm51bGwsYT1lLmF0dHJzTWFwW1widi1iaW5kXCJdOyFvJiYhYXx8cnx8KGkrPVwiLG51bGxcIik7byYmKGkrPVwiLFwiK28pO2EmJihpKz0obz9cIlwiOlwiLG51bGxcIikrXCIsXCIrYSk7cmV0dXJuIGkrXCIpXCJ9KGUsdCk7dmFyIG47aWYoZS5jb21wb25lbnQpbj1mdW5jdGlvbihlLHQsbil7dmFyIHI9dC5pbmxpbmVUZW1wbGF0ZT9udWxsOlZhKHQsbiwhMCk7cmV0dXJuXCJfYyhcIitlK1wiLFwiK1VhKHQsbikrKHI/XCIsXCIrcjpcIlwiKStcIilcIn0oZS5jb21wb25lbnQsZSx0KTtlbHNle3ZhciByOyghZS5wbGFpbnx8ZS5wcmUmJnQubWF5YmVDb21wb25lbnQoZSkpJiYocj1VYShlLHQpKTt2YXIgaT1lLmlubGluZVRlbXBsYXRlP251bGw6VmEoZSx0LCEwKTtuPVwiX2MoJ1wiK2UudGFnK1wiJ1wiKyhyP1wiLFwiK3I6XCJcIikrKGk/XCIsXCIraTpcIlwiKStcIilcIn1mb3IodmFyIG89MDtvPHQudHJhbnNmb3Jtcy5sZW5ndGg7bysrKW49dC50cmFuc2Zvcm1zW29dKGUsbik7cmV0dXJuIG59cmV0dXJuIFZhKGUsdCl8fFwidm9pZCAwXCJ9ZnVuY3Rpb24gUmEoZSx0KXtlLnN0YXRpY1Byb2Nlc3NlZD0hMDt2YXIgbj10LnByZTtyZXR1cm4gZS5wcmUmJih0LnByZT1lLnByZSksdC5zdGF0aWNSZW5kZXJGbnMucHVzaChcIndpdGgodGhpcyl7cmV0dXJuIFwiK1BhKGUsdCkrXCJ9XCIpLHQucHJlPW4sXCJfbShcIisodC5zdGF0aWNSZW5kZXJGbnMubGVuZ3RoLTEpKyhlLnN0YXRpY0luRm9yP1wiLHRydWVcIjpcIlwiKStcIilcIn1mdW5jdGlvbiBGYShlLHQpe2lmKGUub25jZVByb2Nlc3NlZD0hMCxlLmlmJiYhZS5pZlByb2Nlc3NlZClyZXR1cm4gSGEoZSx0KTtpZihlLnN0YXRpY0luRm9yKXtmb3IodmFyIG49XCJcIixyPWUucGFyZW50O3I7KXtpZihyLmZvcil7bj1yLmtleTticmVha31yPXIucGFyZW50fXJldHVybiBuP1wiX28oXCIrUGEoZSx0KStcIixcIit0Lm9uY2VJZCsrK1wiLFwiK24rXCIpXCI6UGEoZSx0KX1yZXR1cm4gUmEoZSx0KX1mdW5jdGlvbiBIYShlLHQsbixyKXtyZXR1cm4gZS5pZlByb2Nlc3NlZD0hMCxmdW5jdGlvbiBlKHQsbixyLGkpe2lmKCF0Lmxlbmd0aClyZXR1cm4gaXx8XCJfZSgpXCI7dmFyIG89dC5zaGlmdCgpO3JldHVybiBvLmV4cD9cIihcIitvLmV4cCtcIik/XCIrYShvLmJsb2NrKStcIjpcIitlKHQsbixyLGkpOlwiXCIrYShvLmJsb2NrKTtmdW5jdGlvbiBhKGUpe3JldHVybiByP3IoZSxuKTplLm9uY2U/RmEoZSxuKTpQYShlLG4pfX0oZS5pZkNvbmRpdGlvbnMuc2xpY2UoKSx0LG4scil9ZnVuY3Rpb24gQmEoZSx0LG4scil7dmFyIGk9ZS5mb3Isbz1lLmFsaWFzLGE9ZS5pdGVyYXRvcjE/XCIsXCIrZS5pdGVyYXRvcjE6XCJcIixzPWUuaXRlcmF0b3IyP1wiLFwiK2UuaXRlcmF0b3IyOlwiXCI7cmV0dXJuIGUuZm9yUHJvY2Vzc2VkPSEwLChyfHxcIl9sXCIpK1wiKChcIitpK1wiKSxmdW5jdGlvbihcIitvK2ErcytcIil7cmV0dXJuIFwiKyhufHxQYSkoZSx0KStcIn0pXCJ9ZnVuY3Rpb24gVWEoZSx0KXt2YXIgbj1cIntcIixyPWZ1bmN0aW9uKGUsdCl7dmFyIG49ZS5kaXJlY3RpdmVzO2lmKCFuKXJldHVybjt2YXIgcixpLG8sYSxzPVwiZGlyZWN0aXZlczpbXCIsYz0hMTtmb3Iocj0wLGk9bi5sZW5ndGg7cjxpO3IrKyl7bz1uW3JdLGE9ITA7dmFyIHU9dC5kaXJlY3RpdmVzW28ubmFtZV07dSYmKGE9ISF1KGUsbyx0Lndhcm4pKSxhJiYoYz0hMCxzKz0ne25hbWU6XCInK28ubmFtZSsnXCIscmF3TmFtZTpcIicrby5yYXdOYW1lKydcIicrKG8udmFsdWU/XCIsdmFsdWU6KFwiK28udmFsdWUrXCIpLGV4cHJlc3Npb246XCIrSlNPTi5zdHJpbmdpZnkoby52YWx1ZSk6XCJcIikrKG8uYXJnP1wiLGFyZzpcIisoby5pc0R5bmFtaWNBcmc/by5hcmc6J1wiJytvLmFyZysnXCInKTpcIlwiKSsoby5tb2RpZmllcnM/XCIsbW9kaWZpZXJzOlwiK0pTT04uc3RyaW5naWZ5KG8ubW9kaWZpZXJzKTpcIlwiKStcIn0sXCIpfWlmKGMpcmV0dXJuIHMuc2xpY2UoMCwtMSkrXCJdXCJ9KGUsdCk7ciYmKG4rPXIrXCIsXCIpLGUua2V5JiYobis9XCJrZXk6XCIrZS5rZXkrXCIsXCIpLGUucmVmJiYobis9XCJyZWY6XCIrZS5yZWYrXCIsXCIpLGUucmVmSW5Gb3ImJihuKz1cInJlZkluRm9yOnRydWUsXCIpLGUucHJlJiYobis9XCJwcmU6dHJ1ZSxcIiksZS5jb21wb25lbnQmJihuKz0ndGFnOlwiJytlLnRhZysnXCIsJyk7Zm9yKHZhciBpPTA7aTx0LmRhdGFHZW5GbnMubGVuZ3RoO2krKyluKz10LmRhdGFHZW5GbnNbaV0oZSk7aWYoZS5hdHRycyYmKG4rPVwiYXR0cnM6XCIrcWEoZS5hdHRycykrXCIsXCIpLGUucHJvcHMmJihuKz1cImRvbVByb3BzOlwiK3FhKGUucHJvcHMpK1wiLFwiKSxlLmV2ZW50cyYmKG4rPU5hKGUuZXZlbnRzLCExKStcIixcIiksZS5uYXRpdmVFdmVudHMmJihuKz1OYShlLm5hdGl2ZUV2ZW50cywhMCkrXCIsXCIpLGUuc2xvdFRhcmdldCYmIWUuc2xvdFNjb3BlJiYobis9XCJzbG90OlwiK2Uuc2xvdFRhcmdldCtcIixcIiksZS5zY29wZWRTbG90cyYmKG4rPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1PYmplY3Qua2V5cyh0KS5zb21lKGZ1bmN0aW9uKGUpe3ZhciBuPXRbZV07cmV0dXJuIG4uc2xvdFRhcmdldER5bmFtaWN8fG4uaWZ8fG4uZm9yfSk7aWYoIXIpZm9yKHZhciBpPWUucGFyZW50O2k7KXtpZihpLnNsb3RTY29wZSYmaS5zbG90U2NvcGUhPT1hYSl7cj0hMDticmVha31pPWkucGFyZW50fXJldHVyblwic2NvcGVkU2xvdHM6X3UoW1wiK09iamVjdC5rZXlzKHQpLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gemEodFtlXSxuKX0pLmpvaW4oXCIsXCIpK1wiXVwiKyhyP1wiLHRydWVcIjpcIlwiKStcIilcIn0oZSxlLnNjb3BlZFNsb3RzLHQpK1wiLFwiKSxlLm1vZGVsJiYobis9XCJtb2RlbDp7dmFsdWU6XCIrZS5tb2RlbC52YWx1ZStcIixjYWxsYmFjazpcIitlLm1vZGVsLmNhbGxiYWNrK1wiLGV4cHJlc3Npb246XCIrZS5tb2RlbC5leHByZXNzaW9uK1wifSxcIiksZS5pbmxpbmVUZW1wbGF0ZSl7dmFyIG89ZnVuY3Rpb24oZSx0KXt2YXIgbj1lLmNoaWxkcmVuWzBdO2lmKG4mJjE9PT1uLnR5cGUpe3ZhciByPURhKG4sdC5vcHRpb25zKTtyZXR1cm5cImlubGluZVRlbXBsYXRlOntyZW5kZXI6ZnVuY3Rpb24oKXtcIityLnJlbmRlcitcIn0sc3RhdGljUmVuZGVyRm5zOltcIityLnN0YXRpY1JlbmRlckZucy5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuXCJmdW5jdGlvbigpe1wiK2UrXCJ9XCJ9KS5qb2luKFwiLFwiKStcIl19XCJ9fShlLHQpO28mJihuKz1vK1wiLFwiKX1yZXR1cm4gbj1uLnJlcGxhY2UoLywkLyxcIlwiKStcIn1cIixlLmR5bmFtaWNBdHRycyYmKG49XCJfYihcIituKycsXCInK2UudGFnKydcIiwnK3FhKGUuZHluYW1pY0F0dHJzKStcIilcIiksZS53cmFwRGF0YSYmKG49ZS53cmFwRGF0YShuKSksZS53cmFwTGlzdGVuZXJzJiYobj1lLndyYXBMaXN0ZW5lcnMobikpLG59ZnVuY3Rpb24gemEoZSx0KXt2YXIgbj1lLmF0dHJzTWFwW1wic2xvdC1zY29wZVwiXTtpZihlLmlmJiYhZS5pZlByb2Nlc3NlZCYmIW4pcmV0dXJuIEhhKGUsdCx6YSxcIm51bGxcIik7aWYoZS5mb3ImJiFlLmZvclByb2Nlc3NlZClyZXR1cm4gQmEoZSx0LHphKTt2YXIgcj1lLnNsb3RTY29wZT09PWFhP1wiXCI6U3RyaW5nKGUuc2xvdFNjb3BlKSxpPVwiZnVuY3Rpb24oXCIrcitcIil7cmV0dXJuIFwiKyhcInRlbXBsYXRlXCI9PT1lLnRhZz9lLmlmJiZuP1wiKFwiK2UuaWYrXCIpP1wiKyhWYShlLHQpfHxcInVuZGVmaW5lZFwiKStcIjp1bmRlZmluZWRcIjpWYShlLHQpfHxcInVuZGVmaW5lZFwiOlBhKGUsdCkpK1wifVwiLG89cj9cIlwiOlwiLHByb3h5OnRydWVcIjtyZXR1cm5cIntrZXk6XCIrKGUuc2xvdFRhcmdldHx8J1wiZGVmYXVsdFwiJykrXCIsZm46XCIraStvK1wifVwifWZ1bmN0aW9uIFZhKGUsdCxuLHIsaSl7dmFyIG89ZS5jaGlsZHJlbjtpZihvLmxlbmd0aCl7dmFyIGE9b1swXTtpZigxPT09by5sZW5ndGgmJmEuZm9yJiZcInRlbXBsYXRlXCIhPT1hLnRhZyYmXCJzbG90XCIhPT1hLnRhZyl7dmFyIHM9bj90Lm1heWJlQ29tcG9uZW50KGEpP1wiLDFcIjpcIiwwXCI6XCJcIjtyZXR1cm5cIlwiKyhyfHxQYSkoYSx0KStzfXZhciBjPW4/ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49MCxyPTA7cjxlLmxlbmd0aDtyKyspe3ZhciBpPWVbcl07aWYoMT09PWkudHlwZSl7aWYoS2EoaSl8fGkuaWZDb25kaXRpb25zJiZpLmlmQ29uZGl0aW9ucy5zb21lKGZ1bmN0aW9uKGUpe3JldHVybiBLYShlLmJsb2NrKX0pKXtuPTI7YnJlYWt9KHQoaSl8fGkuaWZDb25kaXRpb25zJiZpLmlmQ29uZGl0aW9ucy5zb21lKGZ1bmN0aW9uKGUpe3JldHVybiB0KGUuYmxvY2spfSkpJiYobj0xKX19cmV0dXJuIG59KG8sdC5tYXliZUNvbXBvbmVudCk6MCx1PWl8fEphO3JldHVyblwiW1wiK28ubWFwKGZ1bmN0aW9uKGUpe3JldHVybiB1KGUsdCl9KS5qb2luKFwiLFwiKStcIl1cIisoYz9cIixcIitjOlwiXCIpfX1mdW5jdGlvbiBLYShlKXtyZXR1cm4gdm9pZCAwIT09ZS5mb3J8fFwidGVtcGxhdGVcIj09PWUudGFnfHxcInNsb3RcIj09PWUudGFnfWZ1bmN0aW9uIEphKGUsdCl7cmV0dXJuIDE9PT1lLnR5cGU/UGEoZSx0KTozPT09ZS50eXBlJiZlLmlzQ29tbWVudD8ocj1lLFwiX2UoXCIrSlNPTi5zdHJpbmdpZnkoci50ZXh0KStcIilcIik6XCJfdihcIisoMj09PShuPWUpLnR5cGU/bi5leHByZXNzaW9uOldhKEpTT04uc3RyaW5naWZ5KG4udGV4dCkpKStcIilcIjt2YXIgbixyfWZ1bmN0aW9uIHFhKGUpe2Zvcih2YXIgdD1cIlwiLG49XCJcIixyPTA7cjxlLmxlbmd0aDtyKyspe3ZhciBpPWVbcl0sbz1XYShpLnZhbHVlKTtpLmR5bmFtaWM/bis9aS5uYW1lK1wiLFwiK28rXCIsXCI6dCs9J1wiJytpLm5hbWUrJ1wiOicrbytcIixcIn1yZXR1cm4gdD1cIntcIit0LnNsaWNlKDAsLTEpK1wifVwiLG4/XCJfZChcIit0K1wiLFtcIituLnNsaWNlKDAsLTEpK1wiXSlcIjp0fWZ1bmN0aW9uIFdhKGUpe3JldHVybiBlLnJlcGxhY2UoL1xcdTIwMjgvZyxcIlxcXFx1MjAyOFwiKS5yZXBsYWNlKC9cXHUyMDI5L2csXCJcXFxcdTIwMjlcIil9bmV3IFJlZ0V4cChcIlxcXFxiXCIrXCJkbyxpZixmb3IsbGV0LG5ldyx0cnksdmFyLGNhc2UsZWxzZSx3aXRoLGF3YWl0LGJyZWFrLGNhdGNoLGNsYXNzLGNvbnN0LHN1cGVyLHRocm93LHdoaWxlLHlpZWxkLGRlbGV0ZSxleHBvcnQsaW1wb3J0LHJldHVybixzd2l0Y2gsZGVmYXVsdCxleHRlbmRzLGZpbmFsbHksY29udGludWUsZGVidWdnZXIsZnVuY3Rpb24sYXJndW1lbnRzXCIuc3BsaXQoXCIsXCIpLmpvaW4oXCJcXFxcYnxcXFxcYlwiKStcIlxcXFxiXCIpO2Z1bmN0aW9uIFphKGUsdCl7dHJ5e3JldHVybiBuZXcgRnVuY3Rpb24oZSl9Y2F0Y2gobil7cmV0dXJuIHQucHVzaCh7ZXJyOm4sY29kZTplfSksU319ZnVuY3Rpb24gR2EoZSl7dmFyIHQ9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm4gZnVuY3Rpb24obixyLGkpeyhyPWsoe30scikpLndhcm47ZGVsZXRlIHIud2Fybjt2YXIgbz1yLmRlbGltaXRlcnM/U3RyaW5nKHIuZGVsaW1pdGVycykrbjpuO2lmKHRbb10pcmV0dXJuIHRbb107dmFyIGE9ZShuLHIpLHM9e30sYz1bXTtyZXR1cm4gcy5yZW5kZXI9WmEoYS5yZW5kZXIsYykscy5zdGF0aWNSZW5kZXJGbnM9YS5zdGF0aWNSZW5kZXJGbnMubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBaYShlLGMpfSksdFtvXT1zfX12YXIgWGEsWWEsUWE9KFhhPWZ1bmN0aW9uKGUsdCl7dmFyIG49Y2EoZS50cmltKCksdCk7ITEhPT10Lm9wdGltaXplJiZDYShuLHQpO3ZhciByPURhKG4sdCk7cmV0dXJue2FzdDpuLHJlbmRlcjpyLnJlbmRlcixzdGF0aWNSZW5kZXJGbnM6ci5zdGF0aWNSZW5kZXJGbnN9fSxmdW5jdGlvbihlKXtmdW5jdGlvbiB0KHQsbil7dmFyIHI9T2JqZWN0LmNyZWF0ZShlKSxpPVtdLG89W107aWYobilmb3IodmFyIGEgaW4gbi5tb2R1bGVzJiYoci5tb2R1bGVzPShlLm1vZHVsZXN8fFtdKS5jb25jYXQobi5tb2R1bGVzKSksbi5kaXJlY3RpdmVzJiYoci5kaXJlY3RpdmVzPWsoT2JqZWN0LmNyZWF0ZShlLmRpcmVjdGl2ZXN8fG51bGwpLG4uZGlyZWN0aXZlcykpLG4pXCJtb2R1bGVzXCIhPT1hJiZcImRpcmVjdGl2ZXNcIiE9PWEmJihyW2FdPW5bYV0pO3Iud2Fybj1mdW5jdGlvbihlLHQsbil7KG4/bzppKS5wdXNoKGUpfTt2YXIgcz1YYSh0LnRyaW0oKSxyKTtyZXR1cm4gcy5lcnJvcnM9aSxzLnRpcHM9byxzfXJldHVybntjb21waWxlOnQsY29tcGlsZVRvRnVuY3Rpb25zOkdhKHQpfX0pKCRhKSxlcz0oUWEuY29tcGlsZSxRYS5jb21waWxlVG9GdW5jdGlvbnMpO2Z1bmN0aW9uIHRzKGUpe3JldHVybihZYT1ZYXx8ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkuaW5uZXJIVE1MPWU/JzxhIGhyZWY9XCJcXG5cIi8+JzonPGRpdiBhPVwiXFxuXCIvPicsWWEuaW5uZXJIVE1MLmluZGV4T2YoXCImIzEwO1wiKT4wfXZhciBucz0hIVUmJnRzKCExKSxycz0hIVUmJnRzKCEwKSxpcz1nKGZ1bmN0aW9uKGUpe3ZhciB0PUduKGUpO3JldHVybiB0JiZ0LmlubmVySFRNTH0pLG9zPWJuLnByb3RvdHlwZS4kbW91bnQ7cmV0dXJuIGJuLnByb3RvdHlwZS4kbW91bnQ9ZnVuY3Rpb24oZSx0KXtpZigoZT1lJiZHbihlKSk9PT1kb2N1bWVudC5ib2R5fHxlPT09ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KXJldHVybiB0aGlzO3ZhciBuPXRoaXMuJG9wdGlvbnM7aWYoIW4ucmVuZGVyKXt2YXIgcj1uLnRlbXBsYXRlO2lmKHIpaWYoXCJzdHJpbmdcIj09dHlwZW9mIHIpXCIjXCI9PT1yLmNoYXJBdCgwKSYmKHI9aXMocikpO2Vsc2V7aWYoIXIubm9kZVR5cGUpcmV0dXJuIHRoaXM7cj1yLmlubmVySFRNTH1lbHNlIGUmJihyPWZ1bmN0aW9uKGUpe2lmKGUub3V0ZXJIVE1MKXJldHVybiBlLm91dGVySFRNTDt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiB0LmFwcGVuZENoaWxkKGUuY2xvbmVOb2RlKCEwKSksdC5pbm5lckhUTUx9KGUpKTtpZihyKXt2YXIgaT1lcyhyLHtvdXRwdXRTb3VyY2VSYW5nZTohMSxzaG91bGREZWNvZGVOZXdsaW5lczpucyxzaG91bGREZWNvZGVOZXdsaW5lc0ZvckhyZWY6cnMsZGVsaW1pdGVyczpuLmRlbGltaXRlcnMsY29tbWVudHM6bi5jb21tZW50c30sdGhpcyksbz1pLnJlbmRlcixhPWkuc3RhdGljUmVuZGVyRm5zO24ucmVuZGVyPW8sbi5zdGF0aWNSZW5kZXJGbnM9YX19cmV0dXJuIG9zLmNhbGwodGhpcyxlLHQpfSxibi5jb21waWxlPWVzLGJufSk7IiwiLyogV2ViIEZvbnQgTG9hZGVyIHYxLjYuMjggLSAoYykgQWRvYmUgU3lzdGVtcywgR29vZ2xlLiBMaWNlbnNlOiBBcGFjaGUgMi4wICovKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYWEoYSxiLGMpe3JldHVybiBhLmNhbGwuYXBwbHkoYS5iaW5kLGFyZ3VtZW50cyl9ZnVuY3Rpb24gYmEoYSxiLGMpe2lmKCFhKXRocm93IEVycm9yKCk7aWYoMjxhcmd1bWVudHMubGVuZ3RoKXt2YXIgZD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMik7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGM9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShjLGQpO3JldHVybiBhLmFwcGx5KGIsYyl9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGIsYXJndW1lbnRzKX19ZnVuY3Rpb24gcChhLGIsYyl7cD1GdW5jdGlvbi5wcm90b3R5cGUuYmluZCYmLTEhPUZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLnRvU3RyaW5nKCkuaW5kZXhPZihcIm5hdGl2ZSBjb2RlXCIpP2FhOmJhO3JldHVybiBwLmFwcGx5KG51bGwsYXJndW1lbnRzKX12YXIgcT1EYXRlLm5vd3x8ZnVuY3Rpb24oKXtyZXR1cm4rbmV3IERhdGV9O2Z1bmN0aW9uIGNhKGEsYil7dGhpcy5hPWE7dGhpcy5vPWJ8fGE7dGhpcy5jPXRoaXMuby5kb2N1bWVudH12YXIgZGE9ISF3aW5kb3cuRm9udEZhY2U7ZnVuY3Rpb24gdChhLGIsYyxkKXtiPWEuYy5jcmVhdGVFbGVtZW50KGIpO2lmKGMpZm9yKHZhciBlIGluIGMpYy5oYXNPd25Qcm9wZXJ0eShlKSYmKFwic3R5bGVcIj09ZT9iLnN0eWxlLmNzc1RleHQ9Y1tlXTpiLnNldEF0dHJpYnV0ZShlLGNbZV0pKTtkJiZiLmFwcGVuZENoaWxkKGEuYy5jcmVhdGVUZXh0Tm9kZShkKSk7cmV0dXJuIGJ9ZnVuY3Rpb24gdShhLGIsYyl7YT1hLmMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYilbMF07YXx8KGE9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTthLmluc2VydEJlZm9yZShjLGEubGFzdENoaWxkKX1mdW5jdGlvbiB2KGEpe2EucGFyZW50Tm9kZSYmYS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGEpfVxuZnVuY3Rpb24gdyhhLGIsYyl7Yj1ifHxbXTtjPWN8fFtdO2Zvcih2YXIgZD1hLmNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pLGU9MDtlPGIubGVuZ3RoO2UrPTEpe2Zvcih2YXIgZj0hMSxnPTA7ZzxkLmxlbmd0aDtnKz0xKWlmKGJbZV09PT1kW2ddKXtmPSEwO2JyZWFrfWZ8fGQucHVzaChiW2VdKX1iPVtdO2ZvcihlPTA7ZTxkLmxlbmd0aDtlKz0xKXtmPSExO2ZvcihnPTA7ZzxjLmxlbmd0aDtnKz0xKWlmKGRbZV09PT1jW2ddKXtmPSEwO2JyZWFrfWZ8fGIucHVzaChkW2VdKX1hLmNsYXNzTmFtZT1iLmpvaW4oXCIgXCIpLnJlcGxhY2UoL1xccysvZyxcIiBcIikucmVwbGFjZSgvXlxccyt8XFxzKyQvLFwiXCIpfWZ1bmN0aW9uIHkoYSxiKXtmb3IodmFyIGM9YS5jbGFzc05hbWUuc3BsaXQoL1xccysvKSxkPTAsZT1jLmxlbmd0aDtkPGU7ZCsrKWlmKGNbZF09PWIpcmV0dXJuITA7cmV0dXJuITF9XG5mdW5jdGlvbiBlYShhKXtyZXR1cm4gYS5vLmxvY2F0aW9uLmhvc3RuYW1lfHxhLmEubG9jYXRpb24uaG9zdG5hbWV9ZnVuY3Rpb24geihhLGIsYyl7ZnVuY3Rpb24gZCgpe20mJmUmJmYmJihtKGcpLG09bnVsbCl9Yj10KGEsXCJsaW5rXCIse3JlbDpcInN0eWxlc2hlZXRcIixocmVmOmIsbWVkaWE6XCJhbGxcIn0pO3ZhciBlPSExLGY9ITAsZz1udWxsLG09Y3x8bnVsbDtkYT8oYi5vbmxvYWQ9ZnVuY3Rpb24oKXtlPSEwO2QoKX0sYi5vbmVycm9yPWZ1bmN0aW9uKCl7ZT0hMDtnPUVycm9yKFwiU3R5bGVzaGVldCBmYWlsZWQgdG8gbG9hZFwiKTtkKCl9KTpzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZT0hMDtkKCl9LDApO3UoYSxcImhlYWRcIixiKX1cbmZ1bmN0aW9uIEEoYSxiLGMsZCl7dmFyIGU9YS5jLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtpZihlKXt2YXIgZj10KGEsXCJzY3JpcHRcIix7c3JjOmJ9KSxnPSExO2Yub25sb2FkPWYub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7Z3x8dGhpcy5yZWFkeVN0YXRlJiZcImxvYWRlZFwiIT10aGlzLnJlYWR5U3RhdGUmJlwiY29tcGxldGVcIiE9dGhpcy5yZWFkeVN0YXRlfHwoZz0hMCxjJiZjKG51bGwpLGYub25sb2FkPWYub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsXCJIRUFEXCI9PWYucGFyZW50Tm9kZS50YWdOYW1lJiZlLnJlbW92ZUNoaWxkKGYpKX07ZS5hcHBlbmRDaGlsZChmKTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Z3x8KGc9ITAsYyYmYyhFcnJvcihcIlNjcmlwdCBsb2FkIHRpbWVvdXRcIikpKX0sZHx8NUUzKTtyZXR1cm4gZn1yZXR1cm4gbnVsbH07ZnVuY3Rpb24gQigpe3RoaXMuYT0wO3RoaXMuYz1udWxsfWZ1bmN0aW9uIEMoYSl7YS5hKys7cmV0dXJuIGZ1bmN0aW9uKCl7YS5hLS07RChhKX19ZnVuY3Rpb24gRShhLGIpe2EuYz1iO0QoYSl9ZnVuY3Rpb24gRChhKXswPT1hLmEmJmEuYyYmKGEuYygpLGEuYz1udWxsKX07ZnVuY3Rpb24gRihhKXt0aGlzLmE9YXx8XCItXCJ9Ri5wcm90b3R5cGUuYz1mdW5jdGlvbihhKXtmb3IodmFyIGI9W10sYz0wO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspYi5wdXNoKGFyZ3VtZW50c1tjXS5yZXBsYWNlKC9bXFxXX10rL2csXCJcIikudG9Mb3dlckNhc2UoKSk7cmV0dXJuIGIuam9pbih0aGlzLmEpfTtmdW5jdGlvbiBHKGEsYil7dGhpcy5jPWE7dGhpcy5mPTQ7dGhpcy5hPVwiblwiO3ZhciBjPShifHxcIm40XCIpLm1hdGNoKC9eKFtuaW9dKShbMS05XSkkL2kpO2MmJih0aGlzLmE9Y1sxXSx0aGlzLmY9cGFyc2VJbnQoY1syXSwxMCkpfWZ1bmN0aW9uIGZhKGEpe3JldHVybiBIKGEpK1wiIFwiKyhhLmYrXCIwMFwiKStcIiAzMDBweCBcIitJKGEuYyl9ZnVuY3Rpb24gSShhKXt2YXIgYj1bXTthPWEuc3BsaXQoLyxcXHMqLyk7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspe3ZhciBkPWFbY10ucmVwbGFjZSgvWydcIl0vZyxcIlwiKTstMSE9ZC5pbmRleE9mKFwiIFwiKXx8L15cXGQvLnRlc3QoZCk/Yi5wdXNoKFwiJ1wiK2QrXCInXCIpOmIucHVzaChkKX1yZXR1cm4gYi5qb2luKFwiLFwiKX1mdW5jdGlvbiBKKGEpe3JldHVybiBhLmErYS5mfWZ1bmN0aW9uIEgoYSl7dmFyIGI9XCJub3JtYWxcIjtcIm9cIj09PWEuYT9iPVwib2JsaXF1ZVwiOlwiaVwiPT09YS5hJiYoYj1cIml0YWxpY1wiKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIGdhKGEpe3ZhciBiPTQsYz1cIm5cIixkPW51bGw7YSYmKChkPWEubWF0Y2goLyhub3JtYWx8b2JsaXF1ZXxpdGFsaWMpL2kpKSYmZFsxXSYmKGM9ZFsxXS5zdWJzdHIoMCwxKS50b0xvd2VyQ2FzZSgpKSwoZD1hLm1hdGNoKC8oWzEtOV0wMHxub3JtYWx8Ym9sZCkvaSkpJiZkWzFdJiYoL2JvbGQvaS50ZXN0KGRbMV0pP2I9NzovWzEtOV0wMC8udGVzdChkWzFdKSYmKGI9cGFyc2VJbnQoZFsxXS5zdWJzdHIoMCwxKSwxMCkpKSk7cmV0dXJuIGMrYn07ZnVuY3Rpb24gaGEoYSxiKXt0aGlzLmM9YTt0aGlzLmY9YS5vLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDt0aGlzLmg9Yjt0aGlzLmE9bmV3IEYoXCItXCIpO3RoaXMuaj0hMSE9PWIuZXZlbnRzO3RoaXMuZz0hMSE9PWIuY2xhc3Nlc31mdW5jdGlvbiBpYShhKXthLmcmJncoYS5mLFthLmEuYyhcIndmXCIsXCJsb2FkaW5nXCIpXSk7SyhhLFwibG9hZGluZ1wiKX1mdW5jdGlvbiBMKGEpe2lmKGEuZyl7dmFyIGI9eShhLmYsYS5hLmMoXCJ3ZlwiLFwiYWN0aXZlXCIpKSxjPVtdLGQ9W2EuYS5jKFwid2ZcIixcImxvYWRpbmdcIildO2J8fGMucHVzaChhLmEuYyhcIndmXCIsXCJpbmFjdGl2ZVwiKSk7dyhhLmYsYyxkKX1LKGEsXCJpbmFjdGl2ZVwiKX1mdW5jdGlvbiBLKGEsYixjKXtpZihhLmomJmEuaFtiXSlpZihjKWEuaFtiXShjLmMsSihjKSk7ZWxzZSBhLmhbYl0oKX07ZnVuY3Rpb24gamEoKXt0aGlzLmM9e319ZnVuY3Rpb24ga2EoYSxiLGMpe3ZhciBkPVtdLGU7Zm9yKGUgaW4gYilpZihiLmhhc093blByb3BlcnR5KGUpKXt2YXIgZj1hLmNbZV07ZiYmZC5wdXNoKGYoYltlXSxjKSl9cmV0dXJuIGR9O2Z1bmN0aW9uIE0oYSxiKXt0aGlzLmM9YTt0aGlzLmY9Yjt0aGlzLmE9dCh0aGlzLmMsXCJzcGFuXCIse1wiYXJpYS1oaWRkZW5cIjpcInRydWVcIn0sdGhpcy5mKX1mdW5jdGlvbiBOKGEpe3UoYS5jLFwiYm9keVwiLGEuYSl9ZnVuY3Rpb24gTyhhKXtyZXR1cm5cImRpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7dG9wOi05OTk5cHg7bGVmdDotOTk5OXB4O2ZvbnQtc2l6ZTozMDBweDt3aWR0aDphdXRvO2hlaWdodDphdXRvO2xpbmUtaGVpZ2h0Om5vcm1hbDttYXJnaW46MDtwYWRkaW5nOjA7Zm9udC12YXJpYW50Om5vcm1hbDt3aGl0ZS1zcGFjZTpub3dyYXA7Zm9udC1mYW1pbHk6XCIrSShhLmMpK1wiO1wiKyhcImZvbnQtc3R5bGU6XCIrSChhKStcIjtmb250LXdlaWdodDpcIisoYS5mK1wiMDBcIikrXCI7XCIpfTtmdW5jdGlvbiBQKGEsYixjLGQsZSxmKXt0aGlzLmc9YTt0aGlzLmo9Yjt0aGlzLmE9ZDt0aGlzLmM9Yzt0aGlzLmY9ZXx8M0UzO3RoaXMuaD1mfHx2b2lkIDB9UC5wcm90b3R5cGUuc3RhcnQ9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmMuby5kb2N1bWVudCxiPXRoaXMsYz1xKCksZD1uZXcgUHJvbWlzZShmdW5jdGlvbihkLGUpe2Z1bmN0aW9uIGYoKXtxKCktYz49Yi5mP2UoKTphLmZvbnRzLmxvYWQoZmEoYi5hKSxiLmgpLnRoZW4oZnVuY3Rpb24oYSl7MTw9YS5sZW5ndGg/ZCgpOnNldFRpbWVvdXQoZiwyNSl9LGZ1bmN0aW9uKCl7ZSgpfSl9ZigpfSksZT1udWxsLGY9bmV3IFByb21pc2UoZnVuY3Rpb24oYSxkKXtlPXNldFRpbWVvdXQoZCxiLmYpfSk7UHJvbWlzZS5yYWNlKFtmLGRdKS50aGVuKGZ1bmN0aW9uKCl7ZSYmKGNsZWFyVGltZW91dChlKSxlPW51bGwpO2IuZyhiLmEpfSxmdW5jdGlvbigpe2IuaihiLmEpfSl9O2Z1bmN0aW9uIFEoYSxiLGMsZCxlLGYsZyl7dGhpcy52PWE7dGhpcy5CPWI7dGhpcy5jPWM7dGhpcy5hPWQ7dGhpcy5zPWd8fFwiQkVTYnN3eVwiO3RoaXMuZj17fTt0aGlzLnc9ZXx8M0UzO3RoaXMudT1mfHxudWxsO3RoaXMubT10aGlzLmo9dGhpcy5oPXRoaXMuZz1udWxsO3RoaXMuZz1uZXcgTSh0aGlzLmMsdGhpcy5zKTt0aGlzLmg9bmV3IE0odGhpcy5jLHRoaXMucyk7dGhpcy5qPW5ldyBNKHRoaXMuYyx0aGlzLnMpO3RoaXMubT1uZXcgTSh0aGlzLmMsdGhpcy5zKTthPW5ldyBHKHRoaXMuYS5jK1wiLHNlcmlmXCIsSih0aGlzLmEpKTthPU8oYSk7dGhpcy5nLmEuc3R5bGUuY3NzVGV4dD1hO2E9bmV3IEcodGhpcy5hLmMrXCIsc2Fucy1zZXJpZlwiLEoodGhpcy5hKSk7YT1PKGEpO3RoaXMuaC5hLnN0eWxlLmNzc1RleHQ9YTthPW5ldyBHKFwic2VyaWZcIixKKHRoaXMuYSkpO2E9TyhhKTt0aGlzLmouYS5zdHlsZS5jc3NUZXh0PWE7YT1uZXcgRyhcInNhbnMtc2VyaWZcIixKKHRoaXMuYSkpO2E9XG5PKGEpO3RoaXMubS5hLnN0eWxlLmNzc1RleHQ9YTtOKHRoaXMuZyk7Tih0aGlzLmgpO04odGhpcy5qKTtOKHRoaXMubSl9dmFyIFI9e0Q6XCJzZXJpZlwiLEM6XCJzYW5zLXNlcmlmXCJ9LFM9bnVsbDtmdW5jdGlvbiBUKCl7aWYobnVsbD09PVMpe3ZhciBhPS9BcHBsZVdlYktpdFxcLyhbMC05XSspKD86XFwuKFswLTldKykpLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtTPSEhYSYmKDUzNj5wYXJzZUludChhWzFdLDEwKXx8NTM2PT09cGFyc2VJbnQoYVsxXSwxMCkmJjExPj1wYXJzZUludChhWzJdLDEwKSl9cmV0dXJuIFN9US5wcm90b3R5cGUuc3RhcnQ9ZnVuY3Rpb24oKXt0aGlzLmYuc2VyaWY9dGhpcy5qLmEub2Zmc2V0V2lkdGg7dGhpcy5mW1wic2Fucy1zZXJpZlwiXT10aGlzLm0uYS5vZmZzZXRXaWR0aDt0aGlzLkE9cSgpO1UodGhpcyl9O1xuZnVuY3Rpb24gbGEoYSxiLGMpe2Zvcih2YXIgZCBpbiBSKWlmKFIuaGFzT3duUHJvcGVydHkoZCkmJmI9PT1hLmZbUltkXV0mJmM9PT1hLmZbUltkXV0pcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gVShhKXt2YXIgYj1hLmcuYS5vZmZzZXRXaWR0aCxjPWEuaC5hLm9mZnNldFdpZHRoLGQ7KGQ9Yj09PWEuZi5zZXJpZiYmYz09PWEuZltcInNhbnMtc2VyaWZcIl0pfHwoZD1UKCkmJmxhKGEsYixjKSk7ZD9xKCktYS5BPj1hLnc/VCgpJiZsYShhLGIsYykmJihudWxsPT09YS51fHxhLnUuaGFzT3duUHJvcGVydHkoYS5hLmMpKT9WKGEsYS52KTpWKGEsYS5CKTptYShhKTpWKGEsYS52KX1mdW5jdGlvbiBtYShhKXtzZXRUaW1lb3V0KHAoZnVuY3Rpb24oKXtVKHRoaXMpfSxhKSw1MCl9ZnVuY3Rpb24gVihhLGIpe3NldFRpbWVvdXQocChmdW5jdGlvbigpe3YodGhpcy5nLmEpO3YodGhpcy5oLmEpO3YodGhpcy5qLmEpO3YodGhpcy5tLmEpO2IodGhpcy5hKX0sYSksMCl9O2Z1bmN0aW9uIFcoYSxiLGMpe3RoaXMuYz1hO3RoaXMuYT1iO3RoaXMuZj0wO3RoaXMubT10aGlzLmo9ITE7dGhpcy5zPWN9dmFyIFg9bnVsbDtXLnByb3RvdHlwZS5nPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYTtiLmcmJncoYi5mLFtiLmEuYyhcIndmXCIsYS5jLEooYSkudG9TdHJpbmcoKSxcImFjdGl2ZVwiKV0sW2IuYS5jKFwid2ZcIixhLmMsSihhKS50b1N0cmluZygpLFwibG9hZGluZ1wiKSxiLmEuYyhcIndmXCIsYS5jLEooYSkudG9TdHJpbmcoKSxcImluYWN0aXZlXCIpXSk7SyhiLFwiZm9udGFjdGl2ZVwiLGEpO3RoaXMubT0hMDtuYSh0aGlzKX07XG5XLnByb3RvdHlwZS5oPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYTtpZihiLmcpe3ZhciBjPXkoYi5mLGIuYS5jKFwid2ZcIixhLmMsSihhKS50b1N0cmluZygpLFwiYWN0aXZlXCIpKSxkPVtdLGU9W2IuYS5jKFwid2ZcIixhLmMsSihhKS50b1N0cmluZygpLFwibG9hZGluZ1wiKV07Y3x8ZC5wdXNoKGIuYS5jKFwid2ZcIixhLmMsSihhKS50b1N0cmluZygpLFwiaW5hY3RpdmVcIikpO3coYi5mLGQsZSl9SyhiLFwiZm9udGluYWN0aXZlXCIsYSk7bmEodGhpcyl9O2Z1bmN0aW9uIG5hKGEpezA9PS0tYS5mJiZhLmomJihhLm0/KGE9YS5hLGEuZyYmdyhhLmYsW2EuYS5jKFwid2ZcIixcImFjdGl2ZVwiKV0sW2EuYS5jKFwid2ZcIixcImxvYWRpbmdcIiksYS5hLmMoXCJ3ZlwiLFwiaW5hY3RpdmVcIildKSxLKGEsXCJhY3RpdmVcIikpOkwoYS5hKSl9O2Z1bmN0aW9uIG9hKGEpe3RoaXMuaj1hO3RoaXMuYT1uZXcgamE7dGhpcy5oPTA7dGhpcy5mPXRoaXMuZz0hMH1vYS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXt0aGlzLmM9bmV3IGNhKHRoaXMuaixhLmNvbnRleHR8fHRoaXMuaik7dGhpcy5nPSExIT09YS5ldmVudHM7dGhpcy5mPSExIT09YS5jbGFzc2VzO3BhKHRoaXMsbmV3IGhhKHRoaXMuYyxhKSxhKX07XG5mdW5jdGlvbiBxYShhLGIsYyxkLGUpe3ZhciBmPTA9PS0tYS5oOyhhLmZ8fGEuZykmJnNldFRpbWVvdXQoZnVuY3Rpb24oKXt2YXIgYT1lfHxudWxsLG09ZHx8bnVsbHx8e307aWYoMD09PWMubGVuZ3RoJiZmKUwoYi5hKTtlbHNle2IuZis9Yy5sZW5ndGg7ZiYmKGIuaj1mKTt2YXIgaCxsPVtdO2ZvcihoPTA7aDxjLmxlbmd0aDtoKyspe3ZhciBrPWNbaF0sbj1tW2suY10scj1iLmEseD1rO3IuZyYmdyhyLmYsW3IuYS5jKFwid2ZcIix4LmMsSih4KS50b1N0cmluZygpLFwibG9hZGluZ1wiKV0pO0socixcImZvbnRsb2FkaW5nXCIseCk7cj1udWxsO2lmKG51bGw9PT1YKWlmKHdpbmRvdy5Gb250RmFjZSl7dmFyIHg9L0dlY2tvLipGaXJlZm94XFwvKFxcZCspLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSx4YT0vT1MgWC4qVmVyc2lvblxcLzEwXFwuLipTYWZhcmkvLmV4ZWMod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpJiYvQXBwbGUvLmV4ZWMod2luZG93Lm5hdmlnYXRvci52ZW5kb3IpO1xuWD14PzQyPHBhcnNlSW50KHhbMV0sMTApOnhhPyExOiEwfWVsc2UgWD0hMTtYP3I9bmV3IFAocChiLmcsYikscChiLmgsYiksYi5jLGssYi5zLG4pOnI9bmV3IFEocChiLmcsYikscChiLmgsYiksYi5jLGssYi5zLGEsbik7bC5wdXNoKHIpfWZvcihoPTA7aDxsLmxlbmd0aDtoKyspbFtoXS5zdGFydCgpfX0sMCl9ZnVuY3Rpb24gcGEoYSxiLGMpe3ZhciBkPVtdLGU9Yy50aW1lb3V0O2lhKGIpO3ZhciBkPWthKGEuYSxjLGEuYyksZj1uZXcgVyhhLmMsYixlKTthLmg9ZC5sZW5ndGg7Yj0wO2ZvcihjPWQubGVuZ3RoO2I8YztiKyspZFtiXS5sb2FkKGZ1bmN0aW9uKGIsZCxjKXtxYShhLGYsYixkLGMpfSl9O2Z1bmN0aW9uIHJhKGEsYil7dGhpcy5jPWE7dGhpcy5hPWJ9XG5yYS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXtmdW5jdGlvbiBiKCl7aWYoZltcIl9fbXRpX2ZudExzdFwiK2RdKXt2YXIgYz1mW1wiX19tdGlfZm50THN0XCIrZF0oKSxlPVtdLGg7aWYoYylmb3IodmFyIGw9MDtsPGMubGVuZ3RoO2wrKyl7dmFyIGs9Y1tsXS5mb250ZmFtaWx5O3ZvaWQgMCE9Y1tsXS5mb250U3R5bGUmJnZvaWQgMCE9Y1tsXS5mb250V2VpZ2h0PyhoPWNbbF0uZm9udFN0eWxlK2NbbF0uZm9udFdlaWdodCxlLnB1c2gobmV3IEcoayxoKSkpOmUucHVzaChuZXcgRyhrKSl9YShlKX1lbHNlIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtiKCl9LDUwKX12YXIgYz10aGlzLGQ9Yy5hLnByb2plY3RJZCxlPWMuYS52ZXJzaW9uO2lmKGQpe3ZhciBmPWMuYy5vO0EodGhpcy5jLChjLmEuYXBpfHxcImh0dHBzOi8vZmFzdC5mb250cy5uZXQvanNhcGlcIikrXCIvXCIrZCtcIi5qc1wiKyhlP1wiP3Y9XCIrZTpcIlwiKSxmdW5jdGlvbihlKXtlP2EoW10pOihmW1wiX19Nb25vdHlwZUNvbmZpZ3VyYXRpb25fX1wiK1xuZF09ZnVuY3Rpb24oKXtyZXR1cm4gYy5hfSxiKCkpfSkuaWQ9XCJfX01vbm90eXBlQVBJU2NyaXB0X19cIitkfWVsc2UgYShbXSl9O2Z1bmN0aW9uIHNhKGEsYil7dGhpcy5jPWE7dGhpcy5hPWJ9c2EucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7dmFyIGIsYyxkPXRoaXMuYS51cmxzfHxbXSxlPXRoaXMuYS5mYW1pbGllc3x8W10sZj10aGlzLmEudGVzdFN0cmluZ3N8fHt9LGc9bmV3IEI7Yj0wO2ZvcihjPWQubGVuZ3RoO2I8YztiKyspeih0aGlzLmMsZFtiXSxDKGcpKTt2YXIgbT1bXTtiPTA7Zm9yKGM9ZS5sZW5ndGg7YjxjO2IrKylpZihkPWVbYl0uc3BsaXQoXCI6XCIpLGRbMV0pZm9yKHZhciBoPWRbMV0uc3BsaXQoXCIsXCIpLGw9MDtsPGgubGVuZ3RoO2wrPTEpbS5wdXNoKG5ldyBHKGRbMF0saFtsXSkpO2Vsc2UgbS5wdXNoKG5ldyBHKGRbMF0pKTtFKGcsZnVuY3Rpb24oKXthKG0sZil9KX07ZnVuY3Rpb24gdGEoYSxiKXthP3RoaXMuYz1hOnRoaXMuYz11YTt0aGlzLmE9W107dGhpcy5mPVtdO3RoaXMuZz1ifHxcIlwifXZhciB1YT1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzXCI7ZnVuY3Rpb24gdmEoYSxiKXtmb3IodmFyIGM9Yi5sZW5ndGgsZD0wO2Q8YztkKyspe3ZhciBlPWJbZF0uc3BsaXQoXCI6XCIpOzM9PWUubGVuZ3RoJiZhLmYucHVzaChlLnBvcCgpKTt2YXIgZj1cIlwiOzI9PWUubGVuZ3RoJiZcIlwiIT1lWzFdJiYoZj1cIjpcIik7YS5hLnB1c2goZS5qb2luKGYpKX19XG5mdW5jdGlvbiB3YShhKXtpZigwPT1hLmEubGVuZ3RoKXRocm93IEVycm9yKFwiTm8gZm9udHMgdG8gbG9hZCFcIik7aWYoLTEhPWEuYy5pbmRleE9mKFwia2l0PVwiKSlyZXR1cm4gYS5jO2Zvcih2YXIgYj1hLmEubGVuZ3RoLGM9W10sZD0wO2Q8YjtkKyspYy5wdXNoKGEuYVtkXS5yZXBsYWNlKC8gL2csXCIrXCIpKTtiPWEuYytcIj9mYW1pbHk9XCIrYy5qb2luKFwiJTdDXCIpOzA8YS5mLmxlbmd0aCYmKGIrPVwiJnN1YnNldD1cIithLmYuam9pbihcIixcIikpOzA8YS5nLmxlbmd0aCYmKGIrPVwiJnRleHQ9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGEuZykpO3JldHVybiBifTtmdW5jdGlvbiB5YShhKXt0aGlzLmY9YTt0aGlzLmE9W107dGhpcy5jPXt9fVxudmFyIHphPXtsYXRpbjpcIkJFU2Jzd3lcIixcImxhdGluLWV4dFwiOlwiXFx1MDBlN1xcdTAwZjZcXHUwMGZjXFx1MDExZlxcdTAxNWZcIixjeXJpbGxpYzpcIlxcdTA0MzlcXHUwNDRmXFx1MDQxNlwiLGdyZWVrOlwiXFx1MDNiMVxcdTAzYjJcXHUwM2EzXCIsa2htZXI6XCJcXHUxNzgwXFx1MTc4MVxcdTE3ODJcIixIYW51bWFuOlwiXFx1MTc4MFxcdTE3ODFcXHUxNzgyXCJ9LEFhPXt0aGluOlwiMVwiLGV4dHJhbGlnaHQ6XCIyXCIsXCJleHRyYS1saWdodFwiOlwiMlwiLHVsdHJhbGlnaHQ6XCIyXCIsXCJ1bHRyYS1saWdodFwiOlwiMlwiLGxpZ2h0OlwiM1wiLHJlZ3VsYXI6XCI0XCIsYm9vazpcIjRcIixtZWRpdW06XCI1XCIsXCJzZW1pLWJvbGRcIjpcIjZcIixzZW1pYm9sZDpcIjZcIixcImRlbWktYm9sZFwiOlwiNlwiLGRlbWlib2xkOlwiNlwiLGJvbGQ6XCI3XCIsXCJleHRyYS1ib2xkXCI6XCI4XCIsZXh0cmFib2xkOlwiOFwiLFwidWx0cmEtYm9sZFwiOlwiOFwiLHVsdHJhYm9sZDpcIjhcIixibGFjazpcIjlcIixoZWF2eTpcIjlcIixsOlwiM1wiLHI6XCI0XCIsYjpcIjdcIn0sQmE9e2k6XCJpXCIsaXRhbGljOlwiaVwiLG46XCJuXCIsbm9ybWFsOlwiblwifSxcbkNhPS9eKHRoaW58KD86KD86ZXh0cmF8dWx0cmEpLT8pP2xpZ2h0fHJlZ3VsYXJ8Ym9va3xtZWRpdW18KD86KD86c2VtaXxkZW1pfGV4dHJhfHVsdHJhKS0/KT9ib2xkfGJsYWNrfGhlYXZ5fGx8cnxifFsxLTldMDApPyhufGl8bm9ybWFsfGl0YWxpYyk/JC87XG5mdW5jdGlvbiBEYShhKXtmb3IodmFyIGI9YS5mLmxlbmd0aCxjPTA7YzxiO2MrKyl7dmFyIGQ9YS5mW2NdLnNwbGl0KFwiOlwiKSxlPWRbMF0ucmVwbGFjZSgvXFwrL2csXCIgXCIpLGY9W1wibjRcIl07aWYoMjw9ZC5sZW5ndGgpe3ZhciBnO3ZhciBtPWRbMV07Zz1bXTtpZihtKWZvcih2YXIgbT1tLnNwbGl0KFwiLFwiKSxoPW0ubGVuZ3RoLGw9MDtsPGg7bCsrKXt2YXIgaztrPW1bbF07aWYoay5tYXRjaCgvXltcXHctXSskLykpe3ZhciBuPUNhLmV4ZWMoay50b0xvd2VyQ2FzZSgpKTtpZihudWxsPT1uKWs9XCJcIjtlbHNle2s9blsyXTtrPW51bGw9PWt8fFwiXCI9PWs/XCJuXCI6QmFba107bj1uWzFdO2lmKG51bGw9PW58fFwiXCI9PW4pbj1cIjRcIjtlbHNlIHZhciByPUFhW25dLG49cj9yOmlzTmFOKG4pP1wiNFwiOm4uc3Vic3RyKDAsMSk7az1bayxuXS5qb2luKFwiXCIpfX1lbHNlIGs9XCJcIjtrJiZnLnB1c2goayl9MDxnLmxlbmd0aCYmKGY9Zyk7Mz09ZC5sZW5ndGgmJihkPWRbMl0sZz1bXSxkPWQ/ZC5zcGxpdChcIixcIik6XG5nLDA8ZC5sZW5ndGgmJihkPXphW2RbMF1dKSYmKGEuY1tlXT1kKSl9YS5jW2VdfHwoZD16YVtlXSkmJihhLmNbZV09ZCk7Zm9yKGQ9MDtkPGYubGVuZ3RoO2QrPTEpYS5hLnB1c2gobmV3IEcoZSxmW2RdKSl9fTtmdW5jdGlvbiBFYShhLGIpe3RoaXMuYz1hO3RoaXMuYT1ifXZhciBGYT17QXJpbW86ITAsQ291c2luZTohMCxUaW5vczohMH07RWEucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7dmFyIGI9bmV3IEIsYz10aGlzLmMsZD1uZXcgdGEodGhpcy5hLmFwaSx0aGlzLmEudGV4dCksZT10aGlzLmEuZmFtaWxpZXM7dmEoZCxlKTt2YXIgZj1uZXcgeWEoZSk7RGEoZik7eihjLHdhKGQpLEMoYikpO0UoYixmdW5jdGlvbigpe2EoZi5hLGYuYyxGYSl9KX07ZnVuY3Rpb24gR2EoYSxiKXt0aGlzLmM9YTt0aGlzLmE9Yn1HYS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmEuaWQsYz10aGlzLmMubztiP0EodGhpcy5jLCh0aGlzLmEuYXBpfHxcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0XCIpK1wiL1wiK2IrXCIuanNcIixmdW5jdGlvbihiKXtpZihiKWEoW10pO2Vsc2UgaWYoYy5UeXBla2l0JiZjLlR5cGVraXQuY29uZmlnJiZjLlR5cGVraXQuY29uZmlnLmZuKXtiPWMuVHlwZWtpdC5jb25maWcuZm47Zm9yKHZhciBlPVtdLGY9MDtmPGIubGVuZ3RoO2YrPTIpZm9yKHZhciBnPWJbZl0sbT1iW2YrMV0saD0wO2g8bS5sZW5ndGg7aCsrKWUucHVzaChuZXcgRyhnLG1baF0pKTt0cnl7Yy5UeXBla2l0LmxvYWQoe2V2ZW50czohMSxjbGFzc2VzOiExLGFzeW5jOiEwfSl9Y2F0Y2gobCl7fWEoZSl9fSwyRTMpOmEoW10pfTtmdW5jdGlvbiBIYShhLGIpe3RoaXMuYz1hO3RoaXMuZj1iO3RoaXMuYT1bXX1IYS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmYuaWQsYz10aGlzLmMubyxkPXRoaXM7Yj8oYy5fX3dlYmZvbnRmb250ZGVja21vZHVsZV9ffHwoYy5fX3dlYmZvbnRmb250ZGVja21vZHVsZV9fPXt9KSxjLl9fd2ViZm9udGZvbnRkZWNrbW9kdWxlX19bYl09ZnVuY3Rpb24oYixjKXtmb3IodmFyIGc9MCxtPWMuZm9udHMubGVuZ3RoO2c8bTsrK2cpe3ZhciBoPWMuZm9udHNbZ107ZC5hLnB1c2gobmV3IEcoaC5uYW1lLGdhKFwiZm9udC13ZWlnaHQ6XCIraC53ZWlnaHQrXCI7Zm9udC1zdHlsZTpcIitoLnN0eWxlKSkpfWEoZC5hKX0sQSh0aGlzLmMsKHRoaXMuZi5hcGl8fFwiaHR0cHM6Ly9mLmZvbnRkZWNrLmNvbS9zL2Nzcy9qcy9cIikrZWEodGhpcy5jKStcIi9cIitiK1wiLmpzXCIsZnVuY3Rpb24oYil7YiYmYShbXSl9KSk6YShbXSl9O3ZhciBZPW5ldyBvYSh3aW5kb3cpO1kuYS5jLmN1c3RvbT1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgc2EoYixhKX07WS5hLmMuZm9udGRlY2s9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IEhhKGIsYSl9O1kuYS5jLm1vbm90eXBlPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyByYShiLGEpfTtZLmEuYy50eXBla2l0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBHYShiLGEpfTtZLmEuYy5nb29nbGU9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IEVhKGIsYSl9O3ZhciBaPXtsb2FkOnAoWS5sb2FkLFkpfTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShmdW5jdGlvbigpe3JldHVybiBafSk6XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPVo6KHdpbmRvdy5XZWJGb250PVosd2luZG93LldlYkZvbnRDb25maWcmJlkubG9hZCh3aW5kb3cuV2ViRm9udENvbmZpZykpO30oKSk7XG4iLCIvKmVzbGludC1lbnYgYnJvd3NlciovXG5cbnZhciBjbGllbnRPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jbGllbnRPdmVybGF5LmlkID0gJ3dlYnBhY2staG90LW1pZGRsZXdhcmUtY2xpZW50T3ZlcmxheSc7XG52YXIgc3R5bGVzID0ge1xuICBiYWNrZ3JvdW5kOiAncmdiYSgwLDAsMCwwLjg1KScsXG4gIGNvbG9yOiAnI0U4RThFOCcsXG4gIGxpbmVIZWlnaHQ6ICcxLjInLFxuICB3aGl0ZVNwYWNlOiAncHJlJyxcbiAgZm9udEZhbWlseTogJ01lbmxvLCBDb25zb2xhcywgbW9ub3NwYWNlJyxcbiAgZm9udFNpemU6ICcxM3B4JyxcbiAgcG9zaXRpb246ICdmaXhlZCcsXG4gIHpJbmRleDogOTk5OSxcbiAgcGFkZGluZzogJzEwcHgnLFxuICBsZWZ0OiAwLFxuICByaWdodDogMCxcbiAgdG9wOiAwLFxuICBib3R0b206IDAsXG4gIG92ZXJmbG93OiAnYXV0bycsXG4gIGRpcjogJ2x0cicsXG4gIHRleHRBbGlnbjogJ2xlZnQnXG59O1xuXG52YXIgYW5zaUhUTUwgPSByZXF1aXJlKCdhbnNpLWh0bWwnKTtcbnZhciBjb2xvcnMgPSB7XG4gIHJlc2V0OiBbJ3RyYW5zcGFyZW50JywgJ3RyYW5zcGFyZW50J10sXG4gIGJsYWNrOiAnMTgxODE4JyxcbiAgcmVkOiAnRTM2MDQ5JyxcbiAgZ3JlZW46ICdCM0NCNzQnLFxuICB5ZWxsb3c6ICdGRkQwODAnLFxuICBibHVlOiAnN0NBRkMyJyxcbiAgbWFnZW50YTogJzdGQUNDQScsXG4gIGN5YW46ICdDM0MyRUYnLFxuICBsaWdodGdyZXk6ICdFQkU3RTMnLFxuICBkYXJrZ3JleTogJzZENzg5MSdcbn07XG5cbnZhciBFbnRpdGllcyA9IHJlcXVpcmUoJ2h0bWwtZW50aXRpZXMnKS5BbGxIdG1sRW50aXRpZXM7XG52YXIgZW50aXRpZXMgPSBuZXcgRW50aXRpZXMoKTtcblxuZnVuY3Rpb24gc2hvd1Byb2JsZW1zKHR5cGUsIGxpbmVzKSB7XG4gIGNsaWVudE92ZXJsYXkuaW5uZXJIVE1MID0gJyc7XG4gIGxpbmVzLmZvckVhY2goZnVuY3Rpb24obXNnKSB7XG4gICAgbXNnID0gYW5zaUhUTUwoZW50aXRpZXMuZW5jb2RlKG1zZykpO1xuICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuc3R5bGUubWFyZ2luQm90dG9tID0gJzI2cHgnO1xuICAgIGRpdi5pbm5lckhUTUwgPSBwcm9ibGVtVHlwZSh0eXBlKSArICcgaW4gJyArIG1zZztcbiAgICBjbGllbnRPdmVybGF5LmFwcGVuZENoaWxkKGRpdik7XG4gIH0pO1xuICBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2xpZW50T3ZlcmxheSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXIoKSB7XG4gIGlmIChkb2N1bWVudC5ib2R5ICYmIGNsaWVudE92ZXJsYXkucGFyZW50Tm9kZSkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY2xpZW50T3ZlcmxheSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJvYmxlbVR5cGUgKHR5cGUpIHtcbiAgdmFyIHByb2JsZW1Db2xvcnMgPSB7XG4gICAgZXJyb3JzOiBjb2xvcnMucmVkLFxuICAgIHdhcm5pbmdzOiBjb2xvcnMueWVsbG93XG4gIH07XG4gIHZhciBjb2xvciA9IHByb2JsZW1Db2xvcnNbdHlwZV0gfHwgY29sb3JzLnJlZDtcbiAgcmV0dXJuIChcbiAgICAnPHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiMnICsgY29sb3IgKyAnOyBjb2xvcjojZmZmOyBwYWRkaW5nOjJweCA0cHg7IGJvcmRlci1yYWRpdXM6IDJweFwiPicgK1xuICAgICAgdHlwZS5zbGljZSgwLCAtMSkudG9VcHBlckNhc2UoKSArXG4gICAgJzwvc3Bhbj4nXG4gICk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICBmb3IgKHZhciBjb2xvciBpbiBvcHRpb25zLm92ZXJsYXlDb2xvcnMpIHtcbiAgICBpZiAoY29sb3IgaW4gY29sb3JzKSB7XG4gICAgICBjb2xvcnNbY29sb3JdID0gb3B0aW9ucy5vdmVybGF5Q29sb3JzW2NvbG9yXTtcbiAgICB9XG4gICAgYW5zaUhUTUwuc2V0Q29sb3JzKGNvbG9ycyk7XG4gIH1cblxuICBmb3IgKHZhciBzdHlsZSBpbiBvcHRpb25zLm92ZXJsYXlTdHlsZXMpIHtcbiAgICBzdHlsZXNbc3R5bGVdID0gb3B0aW9ucy5vdmVybGF5U3R5bGVzW3N0eWxlXTtcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBzdHlsZXMpIHtcbiAgICBjbGllbnRPdmVybGF5LnN0eWxlW2tleV0gPSBzdHlsZXNba2V5XTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc2hvd1Byb2JsZW1zOiBzaG93UHJvYmxlbXMsXG4gICAgY2xlYXI6IGNsZWFyXG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmNsZWFyID0gY2xlYXI7XG5tb2R1bGUuZXhwb3J0cy5zaG93UHJvYmxlbXMgPSBzaG93UHJvYmxlbXM7XG4iLCIvKmVzbGludC1lbnYgYnJvd3NlciovXG4vKmdsb2JhbCBfX3Jlc291cmNlUXVlcnkgX193ZWJwYWNrX3B1YmxpY19wYXRoX18qL1xuXG52YXIgb3B0aW9ucyA9IHtcbiAgcGF0aDogXCIvX193ZWJwYWNrX2htclwiLFxuICB0aW1lb3V0OiAyMCAqIDEwMDAsXG4gIG92ZXJsYXk6IHRydWUsXG4gIHJlbG9hZDogZmFsc2UsXG4gIGxvZzogdHJ1ZSxcbiAgd2FybjogdHJ1ZSxcbiAgbmFtZTogJycsXG4gIGF1dG9Db25uZWN0OiB0cnVlLFxuICBvdmVybGF5U3R5bGVzOiB7fSxcbiAgb3ZlcmxheVdhcm5pbmdzOiBmYWxzZSxcbiAgYW5zaUNvbG9yczoge31cbn07XG5pZiAoX19yZXNvdXJjZVF1ZXJ5KSB7XG4gIHZhciBxdWVyeXN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5c3RyaW5nJyk7XG4gIHZhciBvdmVycmlkZXMgPSBxdWVyeXN0cmluZy5wYXJzZShfX3Jlc291cmNlUXVlcnkuc2xpY2UoMSkpO1xuICBzZXRPdmVycmlkZXMob3ZlcnJpZGVzKTtcbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gIC8vIGRvIG5vdGhpbmdcbn0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdy5FdmVudFNvdXJjZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgY29uc29sZS53YXJuKFxuICAgIFwid2VicGFjay1ob3QtbWlkZGxld2FyZSdzIGNsaWVudCByZXF1aXJlcyBFdmVudFNvdXJjZSB0byB3b3JrLiBcIiArXG4gICAgXCJZb3Ugc2hvdWxkIGluY2x1ZGUgYSBwb2x5ZmlsbCBpZiB5b3Ugd2FudCB0byBzdXBwb3J0IHRoaXMgYnJvd3NlcjogXCIgK1xuICAgIFwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1NlcnZlci1zZW50X2V2ZW50cyNUb29sc1wiXG4gICk7XG59IGVsc2Uge1xuICBpZiAob3B0aW9ucy5hdXRvQ29ubmVjdCkge1xuICAgIGNvbm5lY3QoKTtcbiAgfVxufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gc2V0T3B0aW9uc0FuZENvbm5lY3Qob3ZlcnJpZGVzKSB7XG4gIHNldE92ZXJyaWRlcyhvdmVycmlkZXMpO1xuICBjb25uZWN0KCk7XG59XG5cbmZ1bmN0aW9uIHNldE92ZXJyaWRlcyhvdmVycmlkZXMpIHtcbiAgaWYgKG92ZXJyaWRlcy5hdXRvQ29ubmVjdCkgb3B0aW9ucy5hdXRvQ29ubmVjdCA9IG92ZXJyaWRlcy5hdXRvQ29ubmVjdCA9PSAndHJ1ZSc7XG4gIGlmIChvdmVycmlkZXMucGF0aCkgb3B0aW9ucy5wYXRoID0gb3ZlcnJpZGVzLnBhdGg7XG4gIGlmIChvdmVycmlkZXMudGltZW91dCkgb3B0aW9ucy50aW1lb3V0ID0gb3ZlcnJpZGVzLnRpbWVvdXQ7XG4gIGlmIChvdmVycmlkZXMub3ZlcmxheSkgb3B0aW9ucy5vdmVybGF5ID0gb3ZlcnJpZGVzLm92ZXJsYXkgIT09ICdmYWxzZSc7XG4gIGlmIChvdmVycmlkZXMucmVsb2FkKSBvcHRpb25zLnJlbG9hZCA9IG92ZXJyaWRlcy5yZWxvYWQgIT09ICdmYWxzZSc7XG4gIGlmIChvdmVycmlkZXMubm9JbmZvICYmIG92ZXJyaWRlcy5ub0luZm8gIT09ICdmYWxzZScpIHtcbiAgICBvcHRpb25zLmxvZyA9IGZhbHNlO1xuICB9XG4gIGlmIChvdmVycmlkZXMubmFtZSkge1xuICAgIG9wdGlvbnMubmFtZSA9IG92ZXJyaWRlcy5uYW1lO1xuICB9XG4gIGlmIChvdmVycmlkZXMucXVpZXQgJiYgb3ZlcnJpZGVzLnF1aWV0ICE9PSAnZmFsc2UnKSB7XG4gICAgb3B0aW9ucy5sb2cgPSBmYWxzZTtcbiAgICBvcHRpb25zLndhcm4gPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChvdmVycmlkZXMuZHluYW1pY1B1YmxpY1BhdGgpIHtcbiAgICBvcHRpb25zLnBhdGggPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIG9wdGlvbnMucGF0aDtcbiAgfVxuXG4gIGlmIChvdmVycmlkZXMuYW5zaUNvbG9ycykgb3B0aW9ucy5hbnNpQ29sb3JzID0gSlNPTi5wYXJzZShvdmVycmlkZXMuYW5zaUNvbG9ycyk7XG4gIGlmIChvdmVycmlkZXMub3ZlcmxheVN0eWxlcykgb3B0aW9ucy5vdmVybGF5U3R5bGVzID0gSlNPTi5wYXJzZShvdmVycmlkZXMub3ZlcmxheVN0eWxlcyk7XG5cbiAgaWYgKG92ZXJyaWRlcy5vdmVybGF5V2FybmluZ3MpIHtcbiAgICBvcHRpb25zLm92ZXJsYXlXYXJuaW5ncyA9IG92ZXJyaWRlcy5vdmVybGF5V2FybmluZ3MgPT0gJ3RydWUnO1xuICB9XG59XG5cbmZ1bmN0aW9uIEV2ZW50U291cmNlV3JhcHBlcigpIHtcbiAgdmFyIHNvdXJjZTtcbiAgdmFyIGxhc3RBY3Rpdml0eSA9IG5ldyBEYXRlKCk7XG4gIHZhciBsaXN0ZW5lcnMgPSBbXTtcblxuICBpbml0KCk7XG4gIHZhciB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgIGlmICgobmV3IERhdGUoKSAtIGxhc3RBY3Rpdml0eSkgPiBvcHRpb25zLnRpbWVvdXQpIHtcbiAgICAgIGhhbmRsZURpc2Nvbm5lY3QoKTtcbiAgICB9XG4gIH0sIG9wdGlvbnMudGltZW91dCAvIDIpO1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgc291cmNlID0gbmV3IHdpbmRvdy5FdmVudFNvdXJjZShvcHRpb25zLnBhdGgpO1xuICAgIHNvdXJjZS5vbm9wZW4gPSBoYW5kbGVPbmxpbmU7XG4gICAgc291cmNlLm9uZXJyb3IgPSBoYW5kbGVEaXNjb25uZWN0O1xuICAgIHNvdXJjZS5vbm1lc3NhZ2UgPSBoYW5kbGVNZXNzYWdlO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlT25saW5lKCkge1xuICAgIGlmIChvcHRpb25zLmxvZykgY29uc29sZS5sb2coXCJbSE1SXSBjb25uZWN0ZWRcIik7XG4gICAgbGFzdEFjdGl2aXR5ID0gbmV3IERhdGUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQpIHtcbiAgICBsYXN0QWN0aXZpdHkgPSBuZXcgRGF0ZSgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaXN0ZW5lcnNbaV0oZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZURpc2Nvbm5lY3QoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgc291cmNlLmNsb3NlKCk7XG4gICAgc2V0VGltZW91dChpbml0LCBvcHRpb25zLnRpbWVvdXQpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRNZXNzYWdlTGlzdGVuZXI6IGZ1bmN0aW9uKGZuKSB7XG4gICAgICBsaXN0ZW5lcnMucHVzaChmbik7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRFdmVudFNvdXJjZVdyYXBwZXIoKSB7XG4gIGlmICghd2luZG93Ll9fd2htRXZlbnRTb3VyY2VXcmFwcGVyKSB7XG4gICAgd2luZG93Ll9fd2htRXZlbnRTb3VyY2VXcmFwcGVyID0ge307XG4gIH1cbiAgaWYgKCF3aW5kb3cuX193aG1FdmVudFNvdXJjZVdyYXBwZXJbb3B0aW9ucy5wYXRoXSkge1xuICAgIC8vIGNhY2hlIHRoZSB3cmFwcGVyIGZvciBvdGhlciBlbnRyaWVzIGxvYWRlZCBvblxuICAgIC8vIHRoZSBzYW1lIHBhZ2Ugd2l0aCB0aGUgc2FtZSBvcHRpb25zLnBhdGhcbiAgICB3aW5kb3cuX193aG1FdmVudFNvdXJjZVdyYXBwZXJbb3B0aW9ucy5wYXRoXSA9IEV2ZW50U291cmNlV3JhcHBlcigpO1xuICB9XG4gIHJldHVybiB3aW5kb3cuX193aG1FdmVudFNvdXJjZVdyYXBwZXJbb3B0aW9ucy5wYXRoXTtcbn1cblxuZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgZ2V0RXZlbnRTb3VyY2VXcmFwcGVyKCkuYWRkTWVzc2FnZUxpc3RlbmVyKGhhbmRsZU1lc3NhZ2UpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuZGF0YSA9PSBcIlxcdUQ4M0RcXHVEQzkzXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIHByb2Nlc3NNZXNzYWdlKEpTT04ucGFyc2UoZXZlbnQuZGF0YSkpO1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICBpZiAob3B0aW9ucy53YXJuKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIkludmFsaWQgSE1SIG1lc3NhZ2U6IFwiICsgZXZlbnQuZGF0YSArIFwiXFxuXCIgKyBleCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIHRoZSByZXBvcnRlciBuZWVkcyB0byBiZSBhIHNpbmdsZXRvbiBvbiB0aGUgcGFnZVxuLy8gaW4gY2FzZSB0aGUgY2xpZW50IGlzIGJlaW5nIHVzZWQgYnkgbXVsdGlwbGUgYnVuZGxlc1xuLy8gd2Ugb25seSB3YW50IHRvIHJlcG9ydCBvbmNlLlxuLy8gYWxsIHRoZSBlcnJvcnMgd2lsbCBnbyB0byBhbGwgY2xpZW50c1xudmFyIHNpbmdsZXRvbktleSA9ICdfX3dlYnBhY2tfaG90X21pZGRsZXdhcmVfcmVwb3J0ZXJfXyc7XG52YXIgcmVwb3J0ZXI7XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgaWYgKCF3aW5kb3dbc2luZ2xldG9uS2V5XSkge1xuICAgIHdpbmRvd1tzaW5nbGV0b25LZXldID0gY3JlYXRlUmVwb3J0ZXIoKTtcbiAgfVxuICByZXBvcnRlciA9IHdpbmRvd1tzaW5nbGV0b25LZXldO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSZXBvcnRlcigpIHtcbiAgdmFyIHN0cmlwID0gcmVxdWlyZSgnc3RyaXAtYW5zaScpO1xuXG4gIHZhciBvdmVybGF5O1xuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBvcHRpb25zLm92ZXJsYXkpIHtcbiAgICBvdmVybGF5ID0gcmVxdWlyZSgnLi9jbGllbnQtb3ZlcmxheScpKHtcbiAgICAgIGFuc2lDb2xvcnM6IG9wdGlvbnMuYW5zaUNvbG9ycyxcbiAgICAgIG92ZXJsYXlTdHlsZXM6IG9wdGlvbnMub3ZlcmxheVN0eWxlc1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IHtcbiAgICBlcnJvcnM6IFwiY29sb3I6ICNmZjAwMDA7XCIsXG4gICAgd2FybmluZ3M6IFwiY29sb3I6ICM5OTk5MzM7XCJcbiAgfTtcbiAgdmFyIHByZXZpb3VzUHJvYmxlbXMgPSBudWxsO1xuICBmdW5jdGlvbiBsb2codHlwZSwgb2JqKSB7XG4gICAgdmFyIG5ld1Byb2JsZW1zID0gb2JqW3R5cGVdLm1hcChmdW5jdGlvbihtc2cpIHsgcmV0dXJuIHN0cmlwKG1zZyk7IH0pLmpvaW4oJ1xcbicpO1xuICAgIGlmIChwcmV2aW91c1Byb2JsZW1zID09IG5ld1Byb2JsZW1zKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHByZXZpb3VzUHJvYmxlbXMgPSBuZXdQcm9ibGVtcztcbiAgICB9XG5cbiAgICB2YXIgc3R5bGUgPSBzdHlsZXNbdHlwZV07XG4gICAgdmFyIG5hbWUgPSBvYmoubmFtZSA/IFwiJ1wiICsgb2JqLm5hbWUgKyBcIicgXCIgOiBcIlwiO1xuICAgIHZhciB0aXRsZSA9IFwiW0hNUl0gYnVuZGxlIFwiICsgbmFtZSArIFwiaGFzIFwiICsgb2JqW3R5cGVdLmxlbmd0aCArIFwiIFwiICsgdHlwZTtcbiAgICAvLyBOT1RFOiBjb25zb2xlLndhcm4gb3IgY29uc29sZS5lcnJvciB3aWxsIHByaW50IHRoZSBzdGFjayB0cmFjZVxuICAgIC8vIHdoaWNoIGlzbid0IGhlbHBmdWwgaGVyZSwgc28gdXNpbmcgY29uc29sZS5sb2cgdG8gZXNjYXBlIGl0LlxuICAgIGlmIChjb25zb2xlLmdyb3VwICYmIGNvbnNvbGUuZ3JvdXBFbmQpIHtcbiAgICAgIGNvbnNvbGUuZ3JvdXAoXCIlY1wiICsgdGl0bGUsIHN0eWxlKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiJWNcIiArIG5ld1Byb2JsZW1zLCBzdHlsZSk7XG4gICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBcIiVjXCIgKyB0aXRsZSArIFwiXFxuXFx0JWNcIiArIG5ld1Byb2JsZW1zLnJlcGxhY2UoL1xcbi9nLCBcIlxcblxcdFwiKSxcbiAgICAgICAgc3R5bGUgKyBcImZvbnQtd2VpZ2h0OiBib2xkO1wiLFxuICAgICAgICBzdHlsZSArIFwiZm9udC13ZWlnaHQ6IG5vcm1hbDtcIlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNsZWFuUHJvYmxlbXNDYWNoZTogZnVuY3Rpb24gKCkge1xuICAgICAgcHJldmlvdXNQcm9ibGVtcyA9IG51bGw7XG4gICAgfSxcbiAgICBwcm9ibGVtczogZnVuY3Rpb24odHlwZSwgb2JqKSB7XG4gICAgICBpZiAob3B0aW9ucy53YXJuKSB7XG4gICAgICAgIGxvZyh0eXBlLCBvYmopO1xuICAgICAgfVxuICAgICAgaWYgKG92ZXJsYXkpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMub3ZlcmxheVdhcm5pbmdzIHx8IHR5cGUgPT09ICdlcnJvcnMnKSB7XG4gICAgICAgICAgb3ZlcmxheS5zaG93UHJvYmxlbXModHlwZSwgb2JqW3R5cGVdKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgb3ZlcmxheS5jbGVhcigpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChvdmVybGF5KSBvdmVybGF5LmNsZWFyKCk7XG4gICAgfSxcbiAgICB1c2VDdXN0b21PdmVybGF5OiBmdW5jdGlvbihjdXN0b21PdmVybGF5KSB7XG4gICAgICBvdmVybGF5ID0gY3VzdG9tT3ZlcmxheTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBwcm9jZXNzVXBkYXRlID0gcmVxdWlyZSgnLi9wcm9jZXNzLXVwZGF0ZScpO1xuXG52YXIgY3VzdG9tSGFuZGxlcjtcbnZhciBzdWJzY3JpYmVBbGxIYW5kbGVyO1xuZnVuY3Rpb24gcHJvY2Vzc01lc3NhZ2Uob2JqKSB7XG4gIHN3aXRjaChvYmouYWN0aW9uKSB7XG4gICAgY2FzZSBcImJ1aWxkaW5nXCI6XG4gICAgICBpZiAob3B0aW9ucy5sb2cpIHtcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgXCJbSE1SXSBidW5kbGUgXCIgKyAob2JqLm5hbWUgPyBcIidcIiArIG9iai5uYW1lICsgXCInIFwiIDogXCJcIikgK1xuICAgICAgICAgIFwicmVidWlsZGluZ1wiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiYnVpbHRcIjpcbiAgICAgIGlmIChvcHRpb25zLmxvZykge1xuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICBcIltITVJdIGJ1bmRsZSBcIiArIChvYmoubmFtZSA/IFwiJ1wiICsgb2JqLm5hbWUgKyBcIicgXCIgOiBcIlwiKSArXG4gICAgICAgICAgXCJyZWJ1aWx0IGluIFwiICsgb2JqLnRpbWUgKyBcIm1zXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIC8vIGZhbGwgdGhyb3VnaFxuICAgIGNhc2UgXCJzeW5jXCI6XG4gICAgICBpZiAob2JqLm5hbWUgJiYgb3B0aW9ucy5uYW1lICYmIG9iai5uYW1lICE9PSBvcHRpb25zLm5hbWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGFwcGx5VXBkYXRlID0gdHJ1ZTtcbiAgICAgIGlmIChvYmouZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKHJlcG9ydGVyKSByZXBvcnRlci5wcm9ibGVtcygnZXJyb3JzJywgb2JqKTtcbiAgICAgICAgYXBwbHlVcGRhdGUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAob2JqLndhcm5pbmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKHJlcG9ydGVyKSB7XG4gICAgICAgICAgdmFyIG92ZXJsYXlTaG93biA9IHJlcG9ydGVyLnByb2JsZW1zKCd3YXJuaW5ncycsIG9iaik7XG4gICAgICAgICAgYXBwbHlVcGRhdGUgPSBvdmVybGF5U2hvd247XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChyZXBvcnRlcikge1xuICAgICAgICAgIHJlcG9ydGVyLmNsZWFuUHJvYmxlbXNDYWNoZSgpO1xuICAgICAgICAgIHJlcG9ydGVyLnN1Y2Nlc3MoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGFwcGx5VXBkYXRlKSB7XG4gICAgICAgIHByb2Nlc3NVcGRhdGUob2JqLmhhc2gsIG9iai5tb2R1bGVzLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBpZiAoY3VzdG9tSGFuZGxlcikge1xuICAgICAgICBjdXN0b21IYW5kbGVyKG9iaik7XG4gICAgICB9XG4gIH1cblxuICBpZiAoc3Vic2NyaWJlQWxsSGFuZGxlcikge1xuICAgIHN1YnNjcmliZUFsbEhhbmRsZXIob2JqKTtcbiAgfVxufVxuXG5pZiAobW9kdWxlKSB7XG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIHN1YnNjcmliZUFsbDogZnVuY3Rpb24gc3Vic2NyaWJlQWxsKGhhbmRsZXIpIHtcbiAgICAgIHN1YnNjcmliZUFsbEhhbmRsZXIgPSBoYW5kbGVyO1xuICAgIH0sXG4gICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUoaGFuZGxlcikge1xuICAgICAgY3VzdG9tSGFuZGxlciA9IGhhbmRsZXI7XG4gICAgfSxcbiAgICB1c2VDdXN0b21PdmVybGF5OiBmdW5jdGlvbiB1c2VDdXN0b21PdmVybGF5KGN1c3RvbU92ZXJsYXkpIHtcbiAgICAgIGlmIChyZXBvcnRlcikgcmVwb3J0ZXIudXNlQ3VzdG9tT3ZlcmxheShjdXN0b21PdmVybGF5KTtcbiAgICB9LFxuICAgIHNldE9wdGlvbnNBbmRDb25uZWN0OiBzZXRPcHRpb25zQW5kQ29ubmVjdFxuICB9O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiAvW1xcdTAwMWJcXHUwMDliXVtbKCkjOz9dKig/OlswLTldezEsNH0oPzo7WzAtOV17MCw0fSkqKT9bMC05QS1QUlpjZi1ucXJ5PT48XS9nO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhbnNpUmVnZXggPSByZXF1aXJlKCdhbnNpLXJlZ2V4JykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyKSB7XG5cdHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyA/IHN0ci5yZXBsYWNlKGFuc2lSZWdleCwgJycpIDogc3RyO1xufTtcbiIsIi8qKlxuICogQmFzZWQgaGVhdmlseSBvbiBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay93ZWJwYWNrL2Jsb2IvXG4gKiAgYzBhZmRmOWM2YWJjMWRkNzA3MDdjNTk0ZTQ3MzgwMmE1NjZmN2I2ZS9ob3Qvb25seS1kZXYtc2VydmVyLmpzXG4gKiBPcmlnaW5hbCBjb3B5cmlnaHQgVG9iaWFzIEtvcHBlcnMgQHNva3JhIChNSVQgbGljZW5zZSlcbiAqL1xuXG4vKiBnbG9iYWwgd2luZG93IF9fd2VicGFja19oYXNoX18gKi9cblxuaWYgKCFtb2R1bGUuaG90KSB7XG4gIHRocm93IG5ldyBFcnJvcihcIltITVJdIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQgaXMgZGlzYWJsZWQuXCIpO1xufVxuXG52YXIgaG1yRG9jc1VybCA9IFwiaHR0cHM6Ly93ZWJwYWNrLmpzLm9yZy9jb25jZXB0cy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50L1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cblxudmFyIGxhc3RIYXNoO1xudmFyIGZhaWx1cmVTdGF0dXNlcyA9IHsgYWJvcnQ6IDEsIGZhaWw6IDEgfTtcbnZhciBhcHBseU9wdGlvbnMgPSB7IFx0XHRcdFx0XG4gIGlnbm9yZVVuYWNjZXB0ZWQ6IHRydWUsXG4gIGlnbm9yZURlY2xpbmVkOiB0cnVlLFxuICBpZ25vcmVFcnJvcmVkOiB0cnVlLFxuICBvblVuYWNjZXB0ZWQ6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBjb25zb2xlLndhcm4oXCJJZ25vcmVkIGFuIHVwZGF0ZSB0byB1bmFjY2VwdGVkIG1vZHVsZSBcIiArIGRhdGEuY2hhaW4uam9pbihcIiAtPiBcIikpO1xuICB9LFxuICBvbkRlY2xpbmVkOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgY29uc29sZS53YXJuKFwiSWdub3JlZCBhbiB1cGRhdGUgdG8gZGVjbGluZWQgbW9kdWxlIFwiICsgZGF0YS5jaGFpbi5qb2luKFwiIC0+IFwiKSk7XG4gIH0sXG4gIG9uRXJyb3JlZDogZnVuY3Rpb24oZGF0YSkge1xuICAgIGNvbnNvbGUuZXJyb3IoZGF0YS5lcnJvcik7XG4gICAgY29uc29sZS53YXJuKFwiSWdub3JlZCBhbiBlcnJvciB3aGlsZSB1cGRhdGluZyBtb2R1bGUgXCIgKyBkYXRhLm1vZHVsZUlkICsgXCIgKFwiICsgZGF0YS50eXBlICsgXCIpXCIpO1xuICB9IFxufVxuXG5mdW5jdGlvbiB1cFRvRGF0ZShoYXNoKSB7XG4gIGlmIChoYXNoKSBsYXN0SGFzaCA9IGhhc2g7XG4gIHJldHVybiBsYXN0SGFzaCA9PSBfX3dlYnBhY2tfaGFzaF9fO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhhc2gsIG1vZHVsZU1hcCwgb3B0aW9ucykge1xuICB2YXIgcmVsb2FkID0gb3B0aW9ucy5yZWxvYWQ7XG4gIGlmICghdXBUb0RhdGUoaGFzaCkgJiYgbW9kdWxlLmhvdC5zdGF0dXMoKSA9PSBcImlkbGVcIikge1xuICAgIGlmIChvcHRpb25zLmxvZykgY29uc29sZS5sb2coXCJbSE1SXSBDaGVja2luZyBmb3IgdXBkYXRlcyBvbiB0aGUgc2VydmVyLi4uXCIpO1xuICAgIGNoZWNrKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVjaygpIHtcbiAgICB2YXIgY2IgPSBmdW5jdGlvbihlcnIsIHVwZGF0ZWRNb2R1bGVzKSB7XG4gICAgICBpZiAoZXJyKSByZXR1cm4gaGFuZGxlRXJyb3IoZXJyKTtcblxuICAgICAgaWYoIXVwZGF0ZWRNb2R1bGVzKSB7XG4gICAgICAgIGlmIChvcHRpb25zLndhcm4pIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJbSE1SXSBDYW5ub3QgZmluZCB1cGRhdGUgKEZ1bGwgcmVsb2FkIG5lZWRlZClcIik7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiW0hNUl0gKFByb2JhYmx5IGJlY2F1c2Ugb2YgcmVzdGFydGluZyB0aGUgc2VydmVyKVwiKTtcbiAgICAgICAgfVxuICAgICAgICBwZXJmb3JtUmVsb2FkKCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXBwbHlDYWxsYmFjayA9IGZ1bmN0aW9uKGFwcGx5RXJyLCByZW5ld2VkTW9kdWxlcykge1xuICAgICAgICBpZiAoYXBwbHlFcnIpIHJldHVybiBoYW5kbGVFcnJvcihhcHBseUVycik7XG5cbiAgICAgICAgaWYgKCF1cFRvRGF0ZSgpKSBjaGVjaygpO1xuXG4gICAgICAgIGxvZ1VwZGF0ZXModXBkYXRlZE1vZHVsZXMsIHJlbmV3ZWRNb2R1bGVzKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBhcHBseVJlc3VsdCA9IG1vZHVsZS5ob3QuYXBwbHkoYXBwbHlPcHRpb25zLCBhcHBseUNhbGxiYWNrKTtcbiAgICAgIC8vIHdlYnBhY2sgMiBwcm9taXNlXG4gICAgICBpZiAoYXBwbHlSZXN1bHQgJiYgYXBwbHlSZXN1bHQudGhlbikge1xuICAgICAgICAvLyBIb3RNb2R1bGVSZXBsYWNlbWVudC5ydW50aW1lLmpzIHJlZmVycyB0byB0aGUgcmVzdWx0IGFzIGBvdXRkYXRlZE1vZHVsZXNgXG4gICAgICAgIGFwcGx5UmVzdWx0LnRoZW4oZnVuY3Rpb24ob3V0ZGF0ZWRNb2R1bGVzKSB7XG4gICAgICAgICAgYXBwbHlDYWxsYmFjayhudWxsLCBvdXRkYXRlZE1vZHVsZXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgYXBwbHlSZXN1bHQuY2F0Y2goYXBwbHlDYWxsYmFjayk7XG4gICAgICB9XG5cbiAgICB9O1xuXG4gICAgdmFyIHJlc3VsdCA9IG1vZHVsZS5ob3QuY2hlY2soZmFsc2UsIGNiKTtcbiAgICAvLyB3ZWJwYWNrIDIgcHJvbWlzZVxuICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcbiAgICAgICAgcmVzdWx0LnRoZW4oZnVuY3Rpb24odXBkYXRlZE1vZHVsZXMpIHtcbiAgICAgICAgICAgIGNiKG51bGwsIHVwZGF0ZWRNb2R1bGVzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc3VsdC5jYXRjaChjYik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbG9nVXBkYXRlcyh1cGRhdGVkTW9kdWxlcywgcmVuZXdlZE1vZHVsZXMpIHtcbiAgICB2YXIgdW5hY2NlcHRlZE1vZHVsZXMgPSB1cGRhdGVkTW9kdWxlcy5maWx0ZXIoZnVuY3Rpb24obW9kdWxlSWQpIHtcbiAgICAgIHJldHVybiByZW5ld2VkTW9kdWxlcyAmJiByZW5ld2VkTW9kdWxlcy5pbmRleE9mKG1vZHVsZUlkKSA8IDA7XG4gICAgfSk7XG5cbiAgICBpZih1bmFjY2VwdGVkTW9kdWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAob3B0aW9ucy53YXJuKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBcIltITVJdIFRoZSBmb2xsb3dpbmcgbW9kdWxlcyBjb3VsZG4ndCBiZSBob3QgdXBkYXRlZDogXCIgK1xuICAgICAgICAgIFwiKEZ1bGwgcmVsb2FkIG5lZWRlZClcXG5cIiArXG4gICAgICAgICAgXCJUaGlzIGlzIHVzdWFsbHkgYmVjYXVzZSB0aGUgbW9kdWxlcyB3aGljaCBoYXZlIGNoYW5nZWQgXCIgK1xuICAgICAgICAgIFwiKGFuZCB0aGVpciBwYXJlbnRzKSBkbyBub3Qga25vdyBob3cgdG8gaG90IHJlbG9hZCB0aGVtc2VsdmVzLiBcIiArXG4gICAgICAgICAgXCJTZWUgXCIgKyBobXJEb2NzVXJsICsgXCIgZm9yIG1vcmUgZGV0YWlscy5cIlxuICAgICAgICApO1xuICAgICAgICB1bmFjY2VwdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uKG1vZHVsZUlkKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiW0hNUl0gIC0gXCIgKyAobW9kdWxlTWFwW21vZHVsZUlkXSB8fCBtb2R1bGVJZCkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHBlcmZvcm1SZWxvYWQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5sb2cpIHtcbiAgICAgIGlmKCFyZW5ld2VkTW9kdWxlcyB8fCByZW5ld2VkTW9kdWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJbSE1SXSBOb3RoaW5nIGhvdCB1cGRhdGVkLlwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW0hNUl0gVXBkYXRlZCBtb2R1bGVzOlwiKTtcbiAgICAgICAgcmVuZXdlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbihtb2R1bGVJZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0hNUl0gIC0gXCIgKyAobW9kdWxlTWFwW21vZHVsZUlkXSB8fCBtb2R1bGVJZCkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHVwVG9EYXRlKCkpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJbSE1SXSBBcHAgaXMgdXAgdG8gZGF0ZS5cIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRXJyb3IoZXJyKSB7XG4gICAgaWYgKG1vZHVsZS5ob3Quc3RhdHVzKCkgaW4gZmFpbHVyZVN0YXR1c2VzKSB7XG4gICAgICBpZiAob3B0aW9ucy53YXJuKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIltITVJdIENhbm5vdCBjaGVjayBmb3IgdXBkYXRlIChGdWxsIHJlbG9hZCBuZWVkZWQpXCIpO1xuICAgICAgICBjb25zb2xlLndhcm4oXCJbSE1SXSBcIiArIChlcnIuc3RhY2sgfHwgZXJyLm1lc3NhZ2UpKTtcbiAgICAgIH1cbiAgICAgIHBlcmZvcm1SZWxvYWQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMud2Fybikge1xuICAgICAgY29uc29sZS53YXJuKFwiW0hNUl0gVXBkYXRlIGNoZWNrIGZhaWxlZDogXCIgKyAoZXJyLnN0YWNrIHx8IGVyci5tZXNzYWdlKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcGVyZm9ybVJlbG9hZCgpIHtcbiAgICBpZiAocmVsb2FkKSB7XG4gICAgICBpZiAob3B0aW9ucy53YXJuKSBjb25zb2xlLndhcm4oXCJbSE1SXSBSZWxvYWRpbmcgcGFnZVwiKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gIH1cbn07XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJyZXF1aXJlKCd3ZWJwYWNrLWhvdC1taWRkbGV3YXJlL2NsaWVudD9yZWxvYWQ9dHJ1ZScpO1xyXG5yZXF1aXJlKCcuLi8uLi9BcHAvU3RhdGljL0FwcFN0eWxlcy5jc3MnKTtcclxucmVxdWlyZSgnLi9zdHlsZXMuY3NzJyk7XHJcbnJlcXVpcmUoJy4uLy4uL0FwcC9TdGF0aWMvc3R5bGVDb25maWd1cmF0b3InKTtcclxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuL3N0eWxlcy5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuL3N0eWxlcy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi9zdHlsZXMuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==
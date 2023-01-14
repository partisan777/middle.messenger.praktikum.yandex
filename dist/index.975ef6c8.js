// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ShInH":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var _registrationJs = require("./components/registration/registration.js");
var _loginJs = require("./components/login/login.js");
var _authJs = require("./modules/auth/auth.js");
var _chatWindow = require("./components/chatWindow/chatWindow");
var _chatItemsJs = require("./components/chatItems/chatItems.js");
var _profileJs = require("./components/profile/profile.js");
var _modalWindowJs = require("./components/modalWindow/modalWindow.js");
var _changePasswordFormJs = require("./components/changePassswordForm/changePasswordForm.js");
var _addMenuAddFilesJs = require("./components/addMenu/addMenuAddFiles.js");
var _addChatMenuJs = require("./components/addMenu/addChatMenu.js");
var _chatUserManageJs = require("./components/chatUserManage/chatUserManage.js");
var _getAddAvatarFormJs = require("./components/profile/getAddAvatarForm.js");
const signIn = ()=>{
    const reg = document.getElementById("reg-form");
    if (reg) reg.parentNode.removeChild(reg);
    const login = document.getElementById("login-form");
    if (login) login.parentNode.removeChild(login);
    (0, _authJs.logIn)();
    checkAuth();
};
const registration = ()=>{
    (0, _authJs.registrationNewUser)();
    signIn();
};
const signOut = ()=>{
    const root = document.getElementById("root");
    while(root.firstChild)root.removeChild(root.firstChild);
    (0, _authJs.logOff)();
    checkAuth();
};
const removeElement = (elementId)=>{
    const elem = document.getElementById(elementId);
    if (elem) elem.remove();
};
const removeAllChildElements = (elementId)=>{
    const elem = document.getElementById(elementId);
    elem.replaceChildren();
};
function hideElement(id) {
    document.getElementById(id).style.display = "none";
}
function showElement(id) {
    document.getElementById(id).style.display = "flex";
}
const addLoginForm = ()=>{
    const root = document.getElementById("root");
    root.appendChild((0, _loginJs.loginForm)());
    document.getElementById("login-button").addEventListener("click", signIn);
    document.getElementById("registration-button").addEventListener("click", switchRegLogin);
    document.getElementById("form-login-main").addEventListener("submit", handleSubmit);
};
const addRegForm = ()=>{
    const root = document.getElementById("root");
    root.appendChild((0, _registrationJs.regForm)());
    document.getElementById("registration-button").addEventListener("click", registration);
    document.getElementById("login-button").addEventListener("click", switchRegLogin);
};
const switchRegLogin = ()=>{
    const reg = document.getElementById("reg-form");
    if (reg) {
        removeElement("reg-form");
        addLoginForm();
    } else {
        removeElement("login-form");
        addRegForm();
    }
};
function addFormAddAvatar() {
    const modal = document.getElementById("myModal");
    openModalWindow();
    const modalContent = document.getElementById("modal-content");
    modalContent.appendChild((0, _getAddAvatarFormJs.getAddAvatarForm)());
    document.getElementById("close-add-avatar-button").addEventListener("click", closeModalWindow);
    document.getElementById("save-avatar-button").addEventListener("click", closeModalWindow);
}
function openProfile() {
    hideElement("chat-window");
    const root = document.getElementById("root");
    root.appendChild((0, _profileJs.getProfilePage)());
    document.getElementById("profile-logout").addEventListener("click", signOut);
    document.getElementById("profile-sidebar").addEventListener("click", closeProfile);
    document.getElementById("profile-change-password").addEventListener("click", addFormChangePassword);
    document.getElementById("profile-avatar").addEventListener("click", addFormAddAvatar);
}
function addFormChangePassword() {
    const modal = document.getElementById("myModal");
    openModalWindow();
    const modalContent = document.getElementById("modal-content");
    modalContent.appendChild((0, _changePasswordFormJs.changePasswordForm)());
    document.getElementById("close-change-password-form-button").addEventListener("click", closeModalWindow);
}
function openModalWindow() {
    const modal = document.getElementById("myModal");
    showElement("myModal");
    removeAllChildElements("modal-content");
}
function closeModalWindow() {
    const modal = document.getElementById("myModal");
    hideElement("myModal");
    removeAllChildElements("modal-content");
}
function addMenuAddFiles() {
    const root = document.getElementById("root");
    root.appendChild((0, _addMenuAddFilesJs.getAddFilesMenu)());
}
function addFormChatUser() {
    const modal = document.getElementById("myModal");
    openModalWindow();
    const modalContent = document.getElementById("modal-content");
    modalContent.appendChild((0, _chatUserManageJs.manageChatUserForm)("add"));
    document.getElementById("close-manage-chat-user").addEventListener("click", closeModalWindow);
}
function deleteFormChatUser() {
    const modal = document.getElementById("myModal");
    openModalWindow();
    const modalContent = document.getElementById("modal-content");
    modalContent.appendChild((0, _chatUserManageJs.manageChatUserForm)("del"));
    document.getElementById("close-manage-chat-user").addEventListener("click", closeModalWindow);
}
const closeChatMenu = ()=>{
    removeElement("chat-menu-list");
};
function addChatMenu() {
    const root = document.getElementById("root");
    root.appendChild((0, _addChatMenuJs.getChatMenu)());
    document.getElementById("add-user").addEventListener("click", addFormChatUser);
    document.getElementById("delete-user").addEventListener("click", deleteFormChatUser);
    root.addEventListener("click", closeChatMenu);
    root.removeEventListener("click", closeChatMenu);
}
function getMainWindow() {
    const root = document.getElementById("root");
    root.appendChild((0, _chatWindow.getChatWindow)());
    let divchatitem = document.getElementById("chat-sidebar");
    divchatitem.appendChild((0, _chatItemsJs.getChatItems)());
    document.getElementById("button-profile").addEventListener("click", openProfile);
    document.getElementById("add-button").addEventListener("click", addMenuAddFiles);
    document.getElementById("chat-menu").addEventListener("click", addChatMenu);
    root.appendChild((0, _modalWindowJs.getModalWindow)());
}
function closeProfile() {
    removeElement("profile-main");
    showElement("chat-window");
}
const checkAuth = ()=>{
    if ((0, _authJs.isAuth)() === false) addLoginForm();
    else getMainWindow();
};
function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
}
checkAuth();

},{"./components/registration/registration.js":"eUfK9","./components/login/login.js":"8Dpxg","./modules/auth/auth.js":"3oHyM","./components/chatWindow/chatWindow":"89XTJ","./components/chatItems/chatItems.js":"3Inun","./components/profile/profile.js":"iAYze","./components/modalWindow/modalWindow.js":"DRIsp","./components/changePassswordForm/changePasswordForm.js":"cLmmC","./components/addMenu/addMenuAddFiles.js":"e7lQa","./components/addMenu/addChatMenu.js":"2oF9S","./components/chatUserManage/chatUserManage.js":"ibi13","./components/profile/getAddAvatarForm.js":"vj71Y"}],"eUfK9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "regForm", ()=>regForm);
var _createNodeObject = require("../../utils/createNodeObject");
var _createButton = require("../../utils/createButton");
var _createFormInput = require("../../utils/createFormInput");
var _metaAttrs = require("./metaAttrs");
function regForm() {
    let div = (0, _createNodeObject.createNodeObjects)("div", [
        "registration_form"
    ], {
        id: "reg-form"
    });
    div.innerHTML = `
        <form action="" class="reg-form">
          <div class="form-input" id="reg-form-child">
            <h2>Регистрация</h2>
            ${(0, _createFormInput.createFormInput)((0, _metaAttrs.metaAttrInputs))}
            ${(0, _createButton.createButton)((0, _metaAttrs.metaAttrButtons))}
          </div>
        </form>
    `;
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../utils/createNodeObject":"lTba4","../../utils/createFormInput":"gnDEt","./metaAttrs":"4XCl5","../../utils/createButton":"7ORnA"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lTba4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createNodeObjects", ()=>createNodeObjects);
function createNodeObjects(type = "div", classNames = [], attr = {
    id: ""
}, textContent = "") {
    let obj = document.createElement(type);
    obj.classList.add(classNames.join(""));
    for(let key in attr)obj.setAttribute(key, attr[key]);
    return obj;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gnDEt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createFormInput", ()=>createFormInput);
function createFormInput(metaAttr) {
    let result = metaAttr.map((item)=>`<label for="${item.label !== undefined ? item.label : ""}">${item.labelVisible !== undefined ? item.labelVisible : ""}</label>
            <input ${item.inputAttrs.join(" ")}>
            <div class="${item.divErrorclassName}" id="${item.divErrorId}"></div>`).join("");
    return result;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4XCl5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "metaAttrInputs", ()=>metaAttrInputs);
parcelHelpers.export(exports, "metaAttrButtons", ()=>metaAttrButtons);
const metaAttrInputs = [
    {
        label: "email",
        labelVisible: "Почта",
        inputAttrs: [
            'type="text"',
            'name="email"',
            'id="email"',
            'placeholder="Введите адрес электронной почты"',
            'autocomplete="on"'
        ],
        divErrorclassName: "reg-error",
        divErrorId: "reg-error-email"
    },
    {
        label: "login",
        labelVisible: "Логин",
        inputAttrs: [
            'type="text"',
            'name="login"',
            'id="login"',
            'placeholder="Введите логин"',
            'autocomplete="on"'
        ],
        ivErrorclassName: "reg-error",
        divErrorId: "reg-error-login"
    },
    {
        label: "first_name",
        labelVisible: "Имя",
        inputAttrs: [
            'type="text"',
            'name="first_name"',
            'id="first_name"',
            'placeholder="Введите имя"',
            'autocomplete="on"'
        ],
        ivErrorclassName: "reg-error",
        divErrorId: "reg-error-name"
    },
    {
        label: "second_name",
        labelVisible: "Фамилия",
        inputAttrs: [
            'type="text"',
            'name="second_name"',
            'id="second_name"',
            'placeholder="Введите фамилию"',
            'autocomplete="on"'
        ],
        ivErrorclassName: "reg-error",
        divErrorId: "reg-error-lastname"
    },
    {
        label: "display_name",
        labelVisible: "Отображаемое имя",
        inputAttrs: [
            'type="text"',
            'name="display_name"',
            'id="display_name"',
            'placeholder="Отображаемое имя"',
            'autocomplete="on"'
        ],
        ivErrorclassName: "reg-error",
        divErrorId: "reg-error-displayname"
    },
    {
        label: "phone",
        labelVisible: "Телефон",
        inputAttrs: [
            'type="tel"',
            'name="phone"',
            'id="phone"',
            'placeholder="Введите номер телефона"',
            'autocomplete="on"'
        ],
        ivErrorclassName: "reg-error",
        divErrorId: "reg-error-phone"
    },
    {
        label: "password",
        labelVisible: "Пароль",
        inputAttrs: [
            'type="password"',
            'name="password"',
            'id="password"',
            'placeholder="Введите пароль"',
            'autocomplete="on"'
        ],
        ivErrorclassName: "reg-error",
        divErrorId: "reg-error-password"
    },
    {
        label: "password-confirm",
        labelVisible: "Повторите пароль",
        inputAttrs: [
            'type="password"',
            'name="password-confirm"',
            'id="password-confirm"',
            'placeholder="Введите повтор пароля"',
            'autocomplete="on"'
        ],
        ivErrorclassName: "reg-error",
        divErrorId: "reg-error-password-confirm"
    }
];
const metaAttrButtons = [
    {
        labelVisible: "Зарегистрироваться",
        buttonAttrs: [
            'class="button-button";',
            'type="button"',
            'id="registration-button"'
        ]
    },
    {
        labelVisible: "Вход",
        buttonAttrs: [
            'class="link-button";',
            'type="button"',
            'id="login-button"'
        ]
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ORnA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createButton", ()=>createButton);
function createButton(metaAttr) {
    let result = metaAttr.map((item)=>`<button ${item.buttonAttrs.join(" ")}>
            ${item.labelVisible}
          </button>`).join("");
    return result;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Dpxg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loginForm", ()=>loginForm);
var _createNodeObject = require("../../utils/createNodeObject");
var _createFormInput = require("../../utils/createFormInput");
var _createButton = require("../../utils/createButton");
var _metaAttrs = require("./metaAttrs");
function loginForm() {
    let div = (0, _createNodeObject.createNodeObjects)("div", [
        "registration_form"
    ], {
        id: "login-form"
    });
    div.innerHTML = `
      <form action="" class="form-login-main" id="form-login-main">
        <div class="form-input">
          <h2>Вход</h2>
          ${(0, _createFormInput.createFormInput)((0, _metaAttrs.metaAttrInputs))}
          ${(0, _createButton.createButton)((0, _metaAttrs.metaAttrButtons))}
        </div>
      </form>
    `;
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../utils/createNodeObject":"lTba4","../../utils/createFormInput":"gnDEt","./metaAttrs":"6Lx3g","../../utils/createButton":"7ORnA"}],"6Lx3g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "metaAttrInputs", ()=>metaAttrInputs);
parcelHelpers.export(exports, "metaAttrButtons", ()=>metaAttrButtons);
const metaAttrInputs = [
    {
        label: "email",
        labelVisible: "Почта",
        inputAttrs: [
            'type="text"',
            'name="email"',
            'id="email"',
            'placeholder="Введите адрес электронной почты"',
            'autocomplete="on"'
        ],
        divErrorclassName: "reg-error",
        divErrorId: "reg-error-email"
    },
    {
        label: "login",
        labelVisible: "Логин",
        inputAttrs: [
            'type="text"',
            'name="login"',
            'id="login"',
            'placeholder="Введите логин"',
            'autocomplete="on"'
        ],
        ivErrorclassName: "reg-error",
        divErrorId: "reg-error-login"
    }
];
const metaAttrButtons = [
    {
        labelVisible: "Вход",
        buttonAttrs: [
            'class="button-button"',
            'type="button"',
            'id="login-button"'
        ]
    },
    {
        labelVisible: "Нет аккаунта?",
        buttonAttrs: [
            'class="link-button"',
            'type="button"',
            'id="registration-button"'
        ]
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3oHyM":[function(require,module,exports) {
//имитация регистрации и авторизации пользователей
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isAuth", ()=>isAuth);
parcelHelpers.export(exports, "logIn", ()=>logIn);
parcelHelpers.export(exports, "logOff", ()=>logOff);
parcelHelpers.export(exports, "registrationNewUser", ()=>registrationNewUser);
const isAuth = ()=>{
    if (localStorage.getItem("isAuth") === "true") return true;
    else return false;
};
const logIn = ()=>{
    localStorage.setItem("isAuth", true);
};
const logOff = ()=>{
    localStorage.setItem("isAuth", false);
};
const registrationNewUser = ()=>{
    // в данный момент функция не реализована
    localStorage.setItem("isAuth", true);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"89XTJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getChatWindow", ()=>getChatWindow);
var _createNodeObject = require("../../utils/createNodeObject");
function getChatWindow() {
    let div = (0, _createNodeObject.createNodeObjects)("div", [
        "chat-window"
    ], {
        id: "chat-window"
    });
    div.innerHTML = `
        <div class="chat-sidebar" id="chat-sidebar">
            <div class="chat-sidebar-header" id="chat-sidebar-header">
                <button class="link-button" type="button" id="button-profile">
                    Профиль
                </button>
                <div class="triangle"></div>
            </div>
            <div class="search" id="search">
                <input type="search"></input>
                <button class="button-button" type="button" id="profile-search-button">
                    Поиск
                </button>
            </div>
        </div>
        <div class="dialog-window" id ="dialog-window">
            <div class="dialog-header" id="dialog-header">
                <div class="chat-header-descr" id="chat-header-descr">
                    <p>Название чата</p>
                </div>
                <div class="chat-menu" id="chat-menu">
                        <div class="mini-circle"></div>
                        <div class="mini-circle"></div>
                        <div class="mini-circle"></div>
                </div>      
            </div>
            <div class="dialog" id="dialog">
                Диалог
                <ul> 
                    <li><a href="./error.html">Ссылка на страницу с ошибками</a></li>
                    <li><a href="./notfound.html">Ссылка на несуществующую страницу</a></li>
                </ul>
            </div>
            <div class="dialog-footer" id="dialog-footer">
                <div class="chat-input-area" id="chat-input-area">
                    <button class="circle" id="add-button">
                        +
                    </button>
                    <input type="text" placeholder="Введите текст сообщения" class="chat-text-input" id="chat-text-input"></input>
                    <button class="button-button" id="send-button">
                        Отправить
                    </button>
                </div>
            </div>
        </div>
    `;
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../utils/createNodeObject":"lTba4"}],"3Inun":[function(require,module,exports) {
//fetch().then().catch()
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getChatItems", ()=>getChatItems);
var _constJs = require("../../utils/const.js");
var _createNodeObject = require("../../utils/createNodeObject");
function getChatItems() {
    (0, _constJs.chats).sort((prev, next)=>{
        return -1 * (new Date(prev.last_message.time) - new Date(next.last_message.time));
    });
    let parentdiv = (0, _createNodeObject.createNodeObjects)("div", [
        "manage-chat-user"
    ], {
        id: "chat-sidebar-items"
    });
    parentdiv.innerHTML = (0, _constJs.chats).map((elem)=>`
            <div class="chat-item" id="chat-item-${elem.id}" >
                <div class="chat-avatar" id="chat-avatar-${elem.id}">
                    <img src="#" alt="Avatar" />
                </div>
                <div class="chat-name" id="chat-name-${elem.id}">${elem.title}</div>
                <div class="chat-last-message-time" id="chat-last-message-time-${elem.id}">${elem.last_message.time.slice(11, 16)}</div>
            
                <div class="chat-last-message" id="chat-last-message-${elem.id}">${elem.last_message.content}</div>
                ${elem.unread_count !== 0 ? `<div class="circle chat-unread-message-count" id="chat-unread-message-count-${elem.id}">${elem.unread_count}</div>` : ""}
            </div>  
            `).join("");
    return parentdiv;
}

},{"../../utils/const.js":"a1SWD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../utils/createNodeObject":"lTba4"}],"a1SWD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "chats", ()=>chats);
parcelHelpers.export(exports, "profile", ()=>profile);
const chats = [
    {
        "id": 111,
        "title": "my-chat111",
        "avatar": "/111/avatar1.jpg",
        "unread_count": 15,
        "last_message": {
            "user": {
                "first_name": "Petya",
                "second_name": "Pupkin",
                "avatar": "/path/to/avatar.jpg",
                "email": "my111@email.com",
                "login": "userLogin111",
                "phone": "8(911)-222-31-11"
            },
            "time": "2020-01-02T14:22:22.000Z",
            "content": "this is message content111"
        }
    },
    {
        "id": 222,
        "title": "my-chat222",
        "avatar": "/222/avatar1.jpg",
        "unread_count": 1,
        "last_message": {
            "user": {
                "first_name": "Lesha",
                "second_name": "Fedorov",
                "avatar": "/path/to/avatar.jpg",
                "email": "my222@email.com",
                "login": "userLogin111",
                "phone": "8(911)-222-32-22"
            },
            "time": "2020-01-02T14:18:22.000Z",
            "content": "this is message content222"
        }
    },
    {
        "id": 333,
        "title": "my-chat333",
        "avatar": "/333/avatar1.jpg",
        "unread_count": 5,
        "last_message": {
            "user": {
                "first_name": "Sasha",
                "second_name": "Pupkin",
                "avatar": "/path/to/avatar.jpg",
                "email": "my333@email.com",
                "login": "userLogin333",
                "phone": "8(911)-222-33-33"
            },
            "time": "2020-01-02T11:22:22.000Z",
            "content": "this is message content333"
        }
    },
    {
        "id": 444,
        "title": "my-chat444",
        "avatar": "/444/avatar1.jpg",
        "unread_count": 0,
        "last_message": {
            "user": {
                "first_name": "Vasya",
                "second_name": "Petrov",
                "avatar": "/path/to/avatar.jpg",
                "email": "my444@email.com",
                "login": "userLogin444",
                "phone": "8(911)-222-34-44"
            },
            "time": "2020-01-02T14:22:22.000Z",
            "content": "this is message content444"
        }
    }
];
const profile = {
    "id": 111,
    "first_name": "Petya",
    "second_name": "Pupkin",
    "display_name": "Petya Pupkin",
    "login": "userLogin111",
    "email": "my111@email.com",
    "phone": "89223332111",
    "avatar": "/path/to/avatar.jpg"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iAYze":[function(require,module,exports) {
//fetch().then().catch();
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getProfilePage", ()=>getProfilePage);
var _const = require("../../utils/const");
var _createNodeObject = require("../../utils/createNodeObject");
var _createFormInput = require("../../utils/createFormInput");
var _createButton = require("../../utils/createButton");
var _metaAttrsProfileForm = require("./metaAttrsProfileForm");
const getProfilePage = ()=>{
    let div = (0, _createNodeObject.createNodeObjects)("div", [
        "profile-main"
    ], {
        id: "profile-main"
    });
    div.innerHTML = `
            <form class="profile-form" id="profile-form"> 
                <div class="profile-sidebar" id="profile-sidebar">
                    <button class="profile-exit" id="profile-exit">
                        Назад
                    </button>
                </div>
                <div class="profile-subform" id="profile-subform">
                  
                    <div class="form-input">
                        <h2>Данные пользователя</h2>
                        <div class="profile-avatar" id="profile-avatar">
                            <img src="#" alt="Avatar" />
                        </div>  
                        ${(0, _createFormInput.createFormInput)((0, _metaAttrsProfileForm.metaAttrInputs))}
                        ${(0, _createButton.createButton)((0, _metaAttrsProfileForm.metaAttrButtons))}
                    </div>
                </div>
            </form>
    `;
    return div;
};

},{"../../utils/const":"a1SWD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../utils/createNodeObject":"lTba4","../../utils/createFormInput":"gnDEt","../../utils/createButton":"7ORnA","./metaAttrsProfileForm":"cWtad"}],"cWtad":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "metaAttrInputs", ()=>metaAttrInputs);
parcelHelpers.export(exports, "metaAttrButtons", ()=>metaAttrButtons);
const metaAttrInputs = [
    {
        label: "pr-form-email",
        labelVisible: "Почта",
        inputAttrs: [
            'type="text"',
            'id="pr-form-email"',
            'name="email"',
            "value=`${profile.email}`"
        ],
        divErrorclassName: "reg-error",
        divErrorId: "pr-form-email-error"
    },
    {
        label: "login",
        labelVisible: "Логин",
        inputAttrs: [
            'type="text"',
            'id="pr-form-login"',
            'name="login"',
            'value="${profile.login}"'
        ],
        ivErrorclassName: "reg-error",
        divErrorId: "pr-form-login-error"
    },
    {
        label: "pr-form-first-name",
        labelVisible: "Имя",
        inputAttrs: [
            'type="text"',
            'id="pr-form-first-name"',
            'name="first_name"',
            "value=${profile.first_name}"
        ],
        ivErrorclassName: "reg-error",
        divErrorId: "pr-form-first_name-error"
    },
    {
        label: "pr-form-second_name",
        labelVisible: "Фамилия",
        inputAttrs: [
            'type="text"',
            'id="pr-form-second_name"',
            'name="second_name"',
            'value="${profile.second_name}"'
        ],
        ivErrorclassName: "reg-error",
        divErrorId: "pr-form-second_name-error"
    },
    {
        label: "pr-form-display_name",
        labelVisible: "Имя в чате",
        inputAttrs: [
            'type="text"',
            'id="pr-form-display_name"',
            'name="display_name"',
            'value="${profile.display_name}"'
        ],
        ivErrorclassName: "reg-error",
        divErrorId: "pr-form-display_name-error"
    },
    {
        label: "pr-form-phone",
        labelVisible: "Телефон",
        inputAttrs: [
            'type="text"',
            'id="pr-form-phone"',
            'name="phone"',
            'value="${profile.phone}"'
        ],
        ivErrorclassName: "reg-error",
        divErrorId: "pr-form-phone-error"
    }
];
const metaAttrButtons = [
    {
        labelVisible: "Сохранить данные",
        buttonAttrs: [
            'class="link-button"',
            'id="profile-change-data"',
            'type="button"'
        ]
    },
    {
        labelVisible: "Изменить пароль",
        buttonAttrs: [
            'class="link-button"',
            'id="profile-change-password"',
            'type="button"'
        ]
    },
    {
        labelVisible: "Выйти",
        buttonAttrs: [
            'class="button-button"',
            'id="profile-logout"',
            'type="button"'
        ]
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"DRIsp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getModalWindow", ()=>getModalWindow);
function getModalWindow() {
    let div = document.createElement("div");
    div.classList.add("modal");
    div.setAttribute("id", "myModal");
    div.innerHTML = `<div class="modal-content" id="modal-content">
            
        </div>`;
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cLmmC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "changePasswordForm", ()=>changePasswordForm);
var _createNodeObject = require("../../utils/createNodeObject");
var _createFormInput = require("../../utils/createFormInput");
var _createButton = require("../../utils/createButton");
var _metaAttrs = require("./metaAttrs");
function changePasswordForm() {
    let div = (0, _createNodeObject.createNodeObjects)("div", [
        "change-password-form"
    ], {
        id: "change-password"
    });
    div.innerHTML = `
      <form  class="change-password-form">
        <div class="form-input">
          <h2>Изменение пароля</h2>
          ${(0, _createFormInput.createFormInput)((0, _metaAttrs.metaAttrInputs))}
          ${(0, _createButton.createButton)((0, _metaAttrs.metaAttrButtons))}
        </div>
      </form>
    `;
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../utils/createNodeObject":"lTba4","../../utils/createFormInput":"gnDEt","./metaAttrs":"2aWX9","../../utils/createButton":"7ORnA"}],"2aWX9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "metaAttrInputs", ()=>metaAttrInputs);
parcelHelpers.export(exports, "metaAttrButtons", ()=>metaAttrButtons);
const metaAttrInputs = [
    {
        label: "password",
        labelVisible: "Текущий пароль",
        inputAttrs: [
            'type="password"',
            'name="oldPassword"',
            'id="password"',
            'autocomplete="on"',
            'required placeholder="Введите пароль"'
        ],
        divErrorclassName: "reg-error",
        divErrorId: "error-current-password"
    },
    {
        label: "password-confirm",
        labelVisible: "Новый пароль",
        inputAttrs: [
            'type="password"',
            'name="newPassword"',
            'id="new-password"',
            'autocomplete="on"',
            'placeholder="Введите повтор пароля"'
        ],
        ivErrorclassName: "reg-error",
        divErrorId: "error-new-password"
    },
    {
        label: "new-password-confirm",
        labelVisible: "Повторите пароль",
        inputAttrs: [
            'type="password"',
            'name="newPassword-confirm"',
            'id="new-password-confirm',
            'autocomplete="on"',
            'required placeholder="Введите повтор пароля"'
        ],
        ivErrorclassName: "reg-error",
        divErrorId: "error-new-password-confirm"
    }
];
const metaAttrButtons = [
    {
        labelVisible: "Сменить пароль",
        buttonAttrs: [
            'class="button-button"',
            'type="button"',
            'id="registration-button"'
        ]
    },
    {
        labelVisible: "Закрыть",
        buttonAttrs: [
            'class="link-button"',
            'type="button"',
            'id="close-change-password-form-button"'
        ]
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e7lQa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAddFilesMenu", ()=>getAddFilesMenu);
var _createNodeObject = require("../../utils/createNodeObject");
const menuAddFiles = [
    {
        title: "Фото или видео",
        class: "add-files",
        id: "add-foto-video",
        iconSrc: "img/media.svg"
    },
    {
        title: "Файл",
        class: "add-files",
        id: "add-file",
        iconSrc: "img/file.svg"
    },
    {
        title: "Локация",
        class: "add-files",
        id: "add-location",
        iconSrc: "img/location.svg"
    }
];
function getAddFilesMenu() {
    let div = (0, _createNodeObject.createNodeObjects)("div", [
        "menu-add-files"
    ], {
        id: "menu-add-files"
    });
    div.innerHTML = `<nav>
            <ul>
                ${menuAddFiles.map((item)=>`
                    <li id="${item.id}">
                        <img class="chat-menu-icon" alt="Add" src="${item.iconSrc}"></img>    
                        <button class="link-button">
                            ${item.title}
                        </button>
                    </li>
                    `).join("")}
            </ul>
        </nav>`;
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../utils/createNodeObject":"lTba4"}],"2oF9S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "chatMenu", ()=>chatMenu);
parcelHelpers.export(exports, "getChatMenu", ()=>getChatMenu);
var _createNodeObject = require("../../utils/createNodeObject");
const chatMenu = [
    {
        title: "Добавить пользователя",
        class: "chat-menu-item",
        id: "add-user",
        iconSrc: "img/add.svg"
    },
    {
        title: "Удалить пользователя",
        class: "chat-menu-item",
        id: "delete-user",
        iconSrc: "./img/delete.svg"
    }
];
function getChatMenu() {
    let div = (0, _createNodeObject.createNodeObjects)("div", [
        "chat-menu-list"
    ], {
        id: "chat-menu-list"
    });
    div.innerHTML = `<nav>
            <ul>
                ${chatMenu.map((item)=>`<li  id="${item.id}">
                        <img class="chat-menu-icon" alt="Add" src="${item.iconSrc}"></img>
                        <button class="link-button">
                            ${item.title}
                        </button>
                    </li>`).join("")}
            </ul>
        </nav>`;
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../utils/createNodeObject":"lTba4"}],"ibi13":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "manageChatUserForm", ()=>manageChatUserForm);
var _createNodeObject = require("../../utils/createNodeObject");
function manageChatUserForm(type = "add") {
    const attr = {
        add: {
            label: "Добавить пользователя",
            shortLabel: "Добавить",
            idButtonAction: "manage-chat-user-button-add",
            inputLoginId: "manage-user-add-id"
        },
        del: {
            label: "Удалить пользователя",
            shortLabel: "Удалить",
            idButtonAction: "manage-chat-user-button-del",
            inputLoginId: "manage-user-del-id"
        }
    };
    let div = (0, _createNodeObject.createNodeObjects)("div", [
        "manage-chat-user"
    ], {
        id: "manage-chat-user"
    });
    div.innerHTML = `
        <form action="">
          <div class="form-input">
          <h2>${attr[type].label}</h2>
          <label>${attr[type].label}</label>
          <input type="text" name="login" id="${attr[type].inputLoginId}" required placeholder="Введите логин">
          <div class="reg-error" id="${attr[type].inputLoginId}"></div>
          <button class="button-button" type="button" id="${attr[type].idButtonAction}">
              ${attr[type].label}
          </button>
          <button class="link-button" type="button" id="close-manage-chat-user">
              Закрыть
          </button>


        </div>
      </form>
    `;
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../utils/createNodeObject":"lTba4"}],"vj71Y":[function(require,module,exports) {
//fetch().then().catch();
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAddAvatarForm", ()=>getAddAvatarForm);
var _createNodeObject = require("../../utils/createNodeObject");
var _createFormInput = require("../../utils/createFormInput");
var _createButton = require("../../utils/createButton");
var _metaAttrsAvatarForm = require("./metaAttrsAvatarForm");
const getAddAvatarForm = ()=>{
    let div = (0, _createNodeObject.createNodeObjects)("div", [
        "add-avatar"
    ], {
        id: "add-avatar"
    });
    console.log((0, _metaAttrsAvatarForm.metaAttrInputs));
    div.innerHTML = `
        <form class="change-password-form" id="add-avatar-form">
            <div class="form-input" >
                <h2>Выберите изображение</h2>
                ${(0, _createFormInput.createFormInput)((0, _metaAttrsAvatarForm.metaAttrInputs))}
                ${(0, _createButton.createButton)((0, _metaAttrsAvatarForm.metaAttrButtons))}
            </div>
        </form>
    `;
    return div;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../utils/createNodeObject":"lTba4","../../utils/createFormInput":"gnDEt","../../utils/createButton":"7ORnA","./metaAttrsAvatarForm":"4UsSZ"}],"4UsSZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "metaAttrInputs", ()=>metaAttrInputs);
parcelHelpers.export(exports, "metaAttrButtons", ()=>metaAttrButtons);
const metaAttrInputs = [
    {
        label: "avatar",
        inputAttrs: [
            'type="image"',
            'name="avatar"',
            'id="add-avatar-input"'
        ],
        divErrorclassName: "reg-error",
        divErrorId: "reg-error-avatar-input"
    }
];
const metaAttrButtons = [
    {
        labelVisible: "Добавить",
        buttonAttrs: [
            'class="button-button";',
            'type="button"',
            'id="save-avatar-button"'
        ]
    },
    {
        labelVisible: "Закрыть",
        buttonAttrs: [
            'class="link-button";',
            'type="button"',
            'id="close-add-avatar-button"'
        ]
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["ShInH","8lqZg"], "8lqZg", "parcelRequire25d8")

//# sourceMappingURL=index.975ef6c8.js.map

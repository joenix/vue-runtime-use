// Check No Empty
function has(target) {
  return [undefined, "undefined"].includes(target);
}

// Get App Origin in Vue3
function getGlobalVue3(origin) {
  return origin.app.__vue_app__;
}

// Get Global Vue or App
function getGlobalVue() {
  // in Window
  if (has(typeof window)) {
    return window.Vue || window.App || getGlobalVue3(window);
  }

  if (has(typeof global)) {
    return global.Vue || global.App || getGlobalVue3(global);
  }
}

// Live Handler
export default (install = () => {}) => {
  // Get Ancestor
  const ancestor = getGlobalVue();

  // No Ancestor No Use
  if (ancestor) {
    // Use
    ancestor.use({
      install
    });
  }
};

const postcssConfig = require('../postcss.config');
const usePlugins = {};

postcssConfig.plugins.forEach((plugin) => {
  if (Array.isArray(plugin) && plugin.length === 2) {
    usePlugins[plugin[0]] = plugin[1];
  } else {
    usePlugins[plugin] = {};
  }
});

module.exports = {
  plugins: usePlugins,
};

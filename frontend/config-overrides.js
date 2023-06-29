module.exports = function override(config, env) {
    // Add '.ts' and '.tsx' as file extensions to be resolved
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  };
  
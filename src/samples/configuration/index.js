const vscode = require("vscode");

exports.testConfig = () => {
  const extensionConfig = vscode.workspace.getConfiguration("test");

  /// Get sub properties
  const subConfigs = [
    extensionConfig.get("default"),
    extensionConfig.get("enum"),
  ];
  return {
    extensionConfig,
    subConfigs,
  };
};

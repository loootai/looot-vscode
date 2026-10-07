// Registers the looot remote MCP server with VS Code. VS Code runs the
// OAuth sign-in in the browser the first time a looot tool is used.
const vscode = require('vscode');

const MCP_URL = 'https://api.looot.ai/mcp';

function activate(context) {
  const changed = new vscode.EventEmitter();
  context.subscriptions.push(
    changed,
    vscode.lm.registerMcpServerDefinitionProvider('looot.mcp', {
      onDidChangeMcpServerDefinitions: changed.event,
      provideMcpServerDefinitions: async () => [
        new vscode.McpHttpServerDefinition(
          'looot',
          vscode.Uri.parse(MCP_URL),
          {},
          context.extension.packageJSON.version
        ),
      ],
      resolveMcpServerDefinition: async (server) => server,
    })
  );
}

function deactivate() {}

module.exports = { activate, deactivate, MCP_URL };

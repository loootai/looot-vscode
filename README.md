# looot for VS Code

looot gives an AI agent one key and one prepaid balance for 2,500+ data API endpoints from 90+ providers: work emails, phone numbers, company and people search, Google results, web pages, news, LinkedIn profiles, local businesses. The agent searches the catalog, sees the price before it runs, and pays per call. A failed call costs nothing. No subscription, top up from $5.

This extension adds the looot remote MCP server (`https://api.looot.ai/mcp`) to VS Code. Install it, open Copilot Chat in agent mode, and the looot tools appear in the tools picker. The first use opens a browser window to sign in to looot.

## Install

- Marketplace: search for "looot" in the Extensions view.
- From a .vsix: `code --install-extension looot-0.1.0.vsix`

## Requirements

VS Code 1.101 or newer, with agent mode and MCP enabled (an organization policy can turn MCP off).

## Without the extension

Add this to `.vscode/mcp.json`:

```json
{ "servers": { "looot": { "type": "http", "url": "https://api.looot.ai/mcp" } } }
```

## Links

[looot.ai](https://looot.ai) | [Docs](https://docs.looot.ai) | [Privacy](https://looot.ai/privacy) | [Terms](https://looot.ai/terms) | [Support](https://looot.ai/contact)

MIT licensed.

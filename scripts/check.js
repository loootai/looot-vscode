// Static check: manifest ids match, icon exists, URL is the production endpoint.
const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const src = fs.readFileSync('extension.js', 'utf8');
const id = pkg.contributes.mcpServerDefinitionProviders[0].id;
const fail = (m) => { console.error('FAIL ' + m); process.exit(1); };
if (!src.includes(`registerMcpServerDefinitionProvider('${id}'`)) fail('provider id mismatch');
if (!src.includes("'https://api.looot.ai/mcp'")) fail('mcp url');
if (!fs.existsSync(pkg.icon)) fail('icon');
console.log('ok: provider ' + id + ' -> https://api.looot.ai/mcp');

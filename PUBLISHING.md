# Publishing

Needs Walid's accounts. Nothing here has been run.

## VS Code Marketplace
1. Create publisher `looot` at https://marketplace.visualstudio.com/manage (Microsoft account, free).
2. Create an Azure DevOps PAT (https://dev.azure.com, User settings, Personal access tokens): organization "All accessible organizations", scope Marketplace > Manage.
3. `npm ci && npx vsce login looot` (paste the PAT), then `npx vsce publish` (or upload the .vsix on the manage page).

## Open VSX (Cursor, VSCodium, Windsurf and others read this registry)
1. Sign in at https://open-vsx.org with GitHub, sign the Publisher Agreement, create an access token (Settings, Access Tokens).
2. `npx ovsx@1.2.0 create-namespace looot -p <token>` (once), then `npx ovsx@1.2.0 publish looot-0.1.0.vsix -p <token>`.

If the publisher id is not `looot`, change `publisher` in package.json and rebuild.

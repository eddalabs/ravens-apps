# Ravens apps

The open registry of Midnight apps that Ravens agents can work with. Each app has a manifest in `apps/<id>/manifest.json` that says which networks and contracts it lives on and which actions an agent may prepare for it. The Ravens MCP server turns those actions into approval requests; the user always approves in their own wallet.

## Status

Proof of concept. There is one built-in manifest, `night-transfer`, which matches the `prepare_transfer` tool in the [ravens](https://github.com/eddalabs/ravens) MCP server. The server does not read manifests yet; that comes next, together with the first contract app (Karbonity).

## Add an app

1. Create `apps/<id>/manifest.json` following [`schema/manifest.schema.json`](schema/manifest.schema.json).
2. Pin each contract with its address and verifier-key hash.
3. Run `pnpm install && pnpm validate`, then open a pull request.

## License

Apache-2.0

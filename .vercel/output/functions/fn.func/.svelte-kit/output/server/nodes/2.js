import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/entry/_page.svelte.e569ebec.js","_app/immutable/chunks/index.5481eb7e.js","_app/immutable/chunks/EssayLinks.66afc2a6.js"];
export const stylesheets = [];
export const fonts = [];

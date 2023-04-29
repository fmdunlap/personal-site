import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
const app = "";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="mt-4 flex flex-row self-center"><p class="text-gray-500">2023 © Forrest Dunlap. All Rights Reserved.</p></div>`;
});
const HeaderLogo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="sticky top-0 z-50 w-full bg-zinc-300 xl:h-0"><div class="mx-auto my-1 h-auto w-32 select-none self-center xl:fixed xl:left-8 xl:top-6 xl:mx-0"><svg viewBox="0 0 110 30" xmlns="http://www.w3.org/2000/svg"><style>.heavy {
					font: bold 20px monospace;
				}
			</style><text x="0" y="20" class="heavy">&lt; FDIV /&gt;</text></svg></div></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex min-h-screen w-full flex-col bg-zinc-300">${validate_component(HeaderLogo, "HeaderLogo").$$render($$result, {}, {}, {})}
	<div class="mx-4 flex flex-col gap-y-8 md:mx-auto md:w-10/12 lg:w-4/5 xl:mt-8 xl:w-9/12">${slots.default ? slots.default({}) : ``}</div>
	<div class="flex-grow"></div>
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};

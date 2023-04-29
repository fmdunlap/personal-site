import { c as create_ssr_component, d as add_attribute, v as validate_component } from "./index2.js";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { direction = "row" } = $$props;
  let { switchPoint = void 0 } = $$props;
  let { background = "bg-gray-100" } = $$props;
  let { rounded = true } = $$props;
  let { shadow = true } = $$props;
  let { padding = "p-6" } = $$props;
  let { gap = "gap-4" } = $$props;
  let { extras = "" } = $$props;
  let style = `w-full flex ${direction == "row" ? "flex-row" : "flex-col"} flex-grow ${padding} ${gap} ${rounded ? "rounded" : ""} ${background} ${shadow ? "shadow-md" : ""} md:p-12 md:gap-8`;
  if (switchPoint) {
    style += ` ${switchPoint}:${direction == "row" ? "flex-col" : "flex-row"}`;
  }
  style += ` ${extras}`;
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.switchPoint === void 0 && $$bindings.switchPoint && switchPoint !== void 0)
    $$bindings.switchPoint(switchPoint);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.extras === void 0 && $$bindings.extras && extras !== void 0)
    $$bindings.extras(extras);
  return `<div${add_attribute("class", style, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const EssayLinks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Card, "Card").$$render($$result, { direction: "col", extras: "basis-1/3" }, {}, {
    default: () => {
      return `<p class="text-center text-2xl font-bold xl:text-3xl">Essays</p>
	<p>Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler
		Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler
		Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler
		Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler
		Filler
	</p>`;
    }
  })}`;
});
export {
  Card as C,
  EssayLinks as E
};

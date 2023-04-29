import { c as create_ssr_component, d as add_attribute, e as escape, f as each, v as validate_component } from "../../chunks/index2.js";
import { C as Card, E as EssayLinks } from "../../chunks/EssayLinks.js";
const ContactForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { errors } = $$props;
  let { data } = $$props;
  let { action } = $$props;
  if ($$props.errors === void 0 && $$bindings.errors && errors !== void 0)
    $$bindings.errors(errors);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  return `<form method="POST"${add_attribute("action", action, 0)} class="mx-auto flex w-full flex-col rounded-md border border-slate-400 px-6 py-2 md:gap-y-1.5">${errors?.email ? `<p class="italic text-red-500">${escape(errors?.email)}</p>` : ``}
	<div class="my-1 flex flex-col lg:flex-row"><label for="name" class="w-24 text-lg font-bold">Email</label>
		<input type="text" class="flex-grow rounded-lg border border-solid border-slate-300 px-2" id="email" name="email"${add_attribute("value", data?.email ?? "", 0)}></div>
	${errors?.subject ? `<p class="italic text-red-500">${escape(errors?.subject)}</p>` : ``}
	<div class="my-1 flex flex-col lg:flex-row"><label for="name" class="w-24 text-lg font-bold">Subject</label>
		<input type="text" class="flex-1 rounded-lg border border-solid border-slate-300 px-2" id="subject" name="subject"${add_attribute("value", data?.subject ?? "", 0)}></div>
	${errors?.message ? `<p class="italic text-red-500">${escape(errors.message)}</p>` : ``}
	<div class="my-1 flex flex-col lg:flex-row"><label for="name" class="w-24 text-lg font-bold">Message</label>
		<textarea id="message" name="message" class="flex-grow resize-none rounded-lg border border-solid border-slate-300 px-2 py-1">${escape(data?.message ?? "", false)}</textarea></div>
	<div class="my-4 flex flex-row"><button type="submit" class="flex-1 rounded-xl bg-sky-600 p-3 text-white">Submit</button></div></form>`;
});
const Socials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let socials = [
    {
      background: "bg-twitterLogo",
      link: "https://twitter.com/forrest_dunlap",
      dim: "h-12 w-14"
    },
    {
      background: "bg-youtubeLogo",
      link: "https://youtube.com/@forrestdunlap",
      dim: "h-11 w-16"
    },
    {
      background: "bg-instagramLogo",
      link: "https://www.instagram.com/forrestmdunlap",
      dim: "h-12 w-12"
    }
  ];
  return `<div class="z-10 mt-2 flex flex-row items-center gap-x-6">${each(socials, ({ background, link, dim }) => {
    return `<a${add_attribute("href", link, 0)}><div class="${escape(dim, true) + " " + escape(background, true) + " bg-cover bg-no-repeat drop-shadow-md hover:drop-shadow-xl"}"></div>
		</a>`;
  })}</div>`;
});
const VideoGallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { videos = [] } = $$props;
  if ($$props.videos === void 0 && $$bindings.videos && videos !== void 0)
    $$bindings.videos(videos);
  return `${validate_component(Card, "Card").$$render($$result, { direction: "col", extras: "basis-2/3" }, {}, {
    default: () => {
      return `<p class="flex text-center text-2xl font-bold xl:text-3xl">Videos</p>
	<div class="mx-auto grid auto-cols-max auto-rows-max grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">${each(videos, (video) => {
        return `<a class="group relative h-full w-fit" href="${"https://www.youtube.com/watch?v=" + escape(video.id, true)}"><img${add_attribute("src", video.thumbnail, 0)} alt="${"Video thumbnail for " + escape(video.title, true)}">
				<div class="absolute top-0 h-1/3 w-full bg-gradient-to-b from-slate-800"></div>
				<p class="absolute left-2 top-1 font-bold text-white group-hover:text-slate-300">${escape(video.title)}</p>
				<p class="invisible absolute left-2 top-8 font-bold text-white group-hover:visible">${escape(video.description)}</p>
			</a>`;
      })}</div>`;
    }
  })}`;
});
const Profile = "/_app/immutable/assets/profile_256.9027973d.jpg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let { data } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Card, "Card").$$render($$result, { direction: "col", switchPoint: "lg" }, {}, {
    default: () => {
      return `<img class="h-fit w-fit self-center rounded-full border-2 border-gray-200 object-cover hover:shadow-md"${add_attribute("src", Profile, 0)} alt="Me - profile.">
	<div class="flex flex-col"><p class="mb-2 flex-grow text-center text-2xl font-bold xl:text-3xl">Hi, I&#39;m Forrest!</p>
		<hr class="mx-auto h-px w-2/5 border-0 bg-slate-500">
		<p class="mb-2 mt-4">I was, until recently, a corporate software engineer. After spending four years at Google, I
			decided to shift my focus to full-time content creation.
		</p>
		<p class="my-2">My work centers around the intersection of software, mental health and emotional intelligence,
			and entrepreneurship. I&#39;m passionate about helping others improve their lives through the
			power of technology and personal growth.
		</p>
		<p class="my-2">I&#39;m currently in the process of creating a new business venture, exploring the possibilities
			of what&#39;s next.
		</p>
		<div class="mt-4 self-center">${validate_component(Socials, "Socials").$$render($$result, {}, {}, {})}</div></div>`;
    }
  })}

<hr class="mx-20 border border-gray-400">

<div class="flex flex-col gap-8 xl:flex-row">${data.gallery.videos != void 0 && data.gallery.videos.length > 0 ? `${validate_component(VideoGallery, "VideoGallery").$$render($$result, { videos: data.gallery.videos }, {}, {})}` : `<p>Found no videos!</p>`}
	<div class="hidden"><hr class="mx-20 border border-gray-400 xl:hidden">
		${validate_component(EssayLinks, "EssayLinks").$$render($$result, {}, {}, {})}</div></div>

<hr class="mx-20 border border-gray-400">

${validate_component(Card, "Card").$$render(
    $$result,
    {
      direction: "col",
      gap: form?.success ? "gap-8" : "gap-4",
      padding: "p-6"
    },
    {},
    {
      default: () => {
        return `<p class="flex-grow text-center text-2xl font-bold xl:text-3xl">Get in touch.</p>
	${!form?.success ? `${validate_component(ContactForm, "ContactForm").$$render(
          $$result,
          {
            action: "?/contact",
            errors: form?.errors,
            data: form?.data
          },
          {},
          {}
        )}` : `${validate_component(Card, "Card").$$render(
          $$result,
          {
            background: "bg-green-400",
            padding: "p-24"
          },
          {},
          {
            default: () => {
              return `<p class="mx-auto text-xl">Successfully Sent Message!</p>`;
            }
          }
        )}`}
	<div class="flex flex-col items-center rounded-md px-10 py-2"><p class="text-md font-bold md:text-xl">Or you can always DM me 😄</p>
		${validate_component(Socials, "Socials").$$render($$result, {}, {}, {})}</div>`;
      }
    }
  )}`;
});
export {
  Page as default
};

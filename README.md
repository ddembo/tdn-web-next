# The Dreamy Nails Website

[https://www.thedreamynails.com](https://www.thedreamynails.com)

Website for The Dreamy Nails, a small business owner with a home studio for manicures and nail art.

I know the owner and I'm developing this site for free as a favour, and in exchange, they are allowing me to make the source code public.

## Current priorities

I've started using [GitHub Issues](/issues) to manage my backlog & current streams of work, currently migrating roadmap.

Currently balancing efforts between:
* performing [a full site redesign and branding overhaul](https://github.com/bootlegneurons/tdn-web-next/issues/11)
* Tweaking content and optimising SEO to boost traffic and conversion (i.e. profit)

### Next steps (roughly prioritised, mostly post-v2)

Migrating this list to GitHub Issues is in progress.

* increase insta token refresh to 59 days.
* unit testing & storybook docs for new components
  * Currently researching how to test server & client components
* headings - move responsive max width logic to wrapper elements, headings always full width
* add faq page
* extract more components (List&List.Item? Text?)
* integrate booking system
* error boundaries
* extended desktop breakpoint (1200px)
* integrate shopify
* Implement end-to-end tests
* accessibility audit & optimisation
* performance audit & optimisation

## Getting started

For local development:

```
pnpm run dev
```

## Core Features

TODO
Google Analytics
Instagram basic display API
Edge Functions (/app/api folder)

## Discussion & decisions made

### Testing

I've temporarily decided to forego testing for two reasons:
1. we want a web presence ASAP, and I'm rapidly prototyping and refactoring and iterating without working from designs. Maintaining tests in this bootstrapping phase would be very inefficient and only delay the soft launch.
2. A redesign is on the horizon, meaning even more major component changes.

When I start the v2 build, I'll be creating designs before I start building, and have the time needed to test as I build.

### Branching strategy

After launching the website, I initially followed the git-flow strategy, however I have decided to eliminate the develop branch (i.e. use `GitHub flow` instead). This will greatly reduce overhead without sacrificing ability to test/preview branches before merging.

### Framework

TODO: talk about originally using Remix 

### Environment variables

As far as I can tell from docs, the env vars in `/env.local` are used by NextJS both for your local dev server, AND by Vercel when deploying, if so desired. However, since this is a public repo, I don't want API tokens exposed, so can't commit `.env` files for different environments. I'll be using Vercel's built-in platform features.

If forking this site and deploying elsewhere, you'll need to provide your own values (e.g. sign up for your own Instagram API token, Google Analytics account, etc) and figure out how to make them available in production.

## License

This source code is open source, licensed under `GNU GPLv3`. You can [learn about this license type here](https://choosealicense.com/licenses/gpl-3.0/).

> Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.
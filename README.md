# The Dreamy Nails Website

Website for The Dreamy Nails, a client with a home studio for manicures and nail art.

I'm developing this site for free as a favour, and in exchange, the business owner is allowing me to make the source code public.

Current design is MVP; logo and colour palette were pre-existing, and things like spacing and fonts can be greatly improved. The client has asked for my help refreshing all branding with their input after the initial launch (getting deployed and indexed by search engines is priority).

## Roadmap (roughly prioritised)
* ensure internal pageviews aren't being tracked
* add faq page
* extract more components (List&List.Item? Text?)
* figure out better responsive image handling
* integrate booking system
* error boundaries
* v2 design & branding updates
  * styling for desktop breakpoint (1200px)
  * unit testing & storybook docs for new components
* integrate shopify
* ---- official site launch and promo ----
* Implement end-to-end tests
* Start documenting components in storybook
* add aria roles, perform accessibility checks
* performance tuning

## Getting started

For local development:

```
npm run dev
```

## Core Features

TODO
Google Analytics

## Discussion & decisions made

### Testing

I've temporarily decided to forego testing for two reasons:
1. we want a web presence ASAP, and I'm rapidly prototyping and refactoring and iterating without working from designs. Maintaining tests in this bootstrapping phase would be very inefficient and only delay the soft launch.
2. A redesign is on the horizon, meaning even more major component changes.

When I start the v2 build, I'll be creating designs before I start building, and have the time needed to test as I build.

### Branching strategy

Will be using gitflow when this is ready for deployment; until then, I'm committing directly to the main branch to speed up the bootstrapping phase.

### Framework

TODO: talk about originally using Remix 

### Environment variables

As far as I can tell from docs, the env vars in `/env.local` are used by NextJS both for your local dev server, AND by Vercel when deploying, if so desired. However, since this is a public repo, I don't want API tokens exposed, so can't commit `.env` files for different environments. I'll be using Vercel's built-in platform features.

If forking this site and deploying elsewhere, you'll need to provide your own values (e.g. sign up for your own Instagram API token, Google Analytics account, etc) and figure out how to make them available in production.

## License

This source code is open source, licensed under `GNU GPLv3`. You can [learn about this license type here](https://choosealicense.com/licenses/gpl-3.0/).

> Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.
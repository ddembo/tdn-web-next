# The Dreamy Nails Website

Website for The Dreamy Nails, a client with a home studio for manicures and nail art.

I'm developing this site for free as a favour, and in exchange, the business owner is allowing me to make the source code public.

Current design is MVP; logo and colour palette were pre-existing, and things like spacing and fonts can be greatly improved. The client has asked for my help refreshing all branding with their input after the initial launch (getting deployed and indexed by search engines is priority).

## Roadmap (roughly prioritised)
* Replace placeholder with nail photo
* html element review e.g. add in articles, etc
* ---- soft release and deploy ----
* add faq page
* extract more components (List&List.Item? Text?)
* figure out better responsive image handling
* integrate booking system
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
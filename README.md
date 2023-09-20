# The Dreamy Nails Website

Website for The Dreamy Nails, a client with a home studio for manicures and nail art.

While currently under development, this is a professional website for a real business, and the initial version will be deployed in the near future once content is more complete. The client kindly agreed to make the source code open source.

Current design is MVP; logo and colour palette were pre-existing and low quality, and things like spacing and fonts can be greatly improved. The client has asked for my help refreshing all branding with their input after the initial launch (getting deployed and indexed by search engines is priority).

## Roadmap (roughly prioritised)
* finish adding homepage content
* Integrate Instagram API for showing recent work
* implement missing content pages (FAQ, About)
* SEO optimisations
* ---- soft release and deploy ----
* extract more components (List&List.Item? Text?)
* v2 design & branding updates
  * styling for desktop breakpoint (1200px)
* integrate booking system
* integrate shopify
* Implement end-to-end tests
* Start documenting components in storybook

## Getting started

For local development:

```
npm run dev
```

## Discussion & decisions made

### Styling

I decided to use TailwindCSS, purely because I normally avoid it as much as possible. I've always found it slower than writing raw CSS, personally, and I dislike the mess it turns your markup into, but in order to give it a fair appraisal I need to become fluent with it as "it's faster once you're used to it" is one of the main arguments for its use.
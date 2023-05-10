# Logion's web site
Logion's web site published at [https://logion.network](https://logion.network).

## Content update
The code is designed in a way that non-programmers are able to edit content directly.

All content is centralized in a single file [`src/Content.tsx`](https://github.com/logion-network/logion-web-site/tree/main/src/Content.tsx).

Variables with type `string | undefined` may contain plain text (actual text goes between ASCII double-quotes `"`).

The blocks delimited by `{ /* START EDIT */ }` and `{ /* STOP EDIT */ }` tags may contain plain text or simple XHTML content (e.g. `p`, `em`, `br` tags).

### Assets
All images should be added to the [`media`](https://github.com/logion-network/logion-web-site/tree/main/src/public/media) folder.

For example, in order to insert an image named `polkadot.svg` and located in the `media` folder,
the following code may be used (see Content file above for examples):

```jsx
<Image
    fileName="media/polkadot.svg"
    alt="polkadot logo"
    width="80%"
/>
```

The `width` parameter enables some control on the size of the image. There is also a `height` parameter.
Any valid HTML size may be used there.

### Header
The header is the block containing the logo and social media links.

Only social media URLs can be customized. If a link must be hidden, the value of related variable should be set to `undefined` (without the quotes).

The available variables are:
- `LINKEDIN_URL`
- `TWITTER_URL`
- `DISCORD_URL`
- `GITHUB_URL`
- `MEDIUM_URL`

### Footer
The footer is the section at the very bottom of the page which contains a text part and some partners logos.

The title and content of text part can be changed through variables `FOOTER_TITLE` and `FOOTER_TEXT`.

### Content
The content is composed of the sections that go between the header and the footer. It is set through variable `CONTENT`.

`CONTENT` is composed of a sequence of components. Regular content may be edited as explained above.

The components may be re-ordered but valid React syntax must be conserved.

## Style
Configurable style elements can be found in file [`src/vars.css`](https://github.com/logion-network/logion-web-site/tree/main/src/vars.css).

The file must remain in valid CSS syntax. Only values following `--var-name: ` should be modified.

Colors have variable names ending with `-color`, fonts have variable names ending with `-font`. Other variables impact more general
styling elements.

When changing a font variable, make sure to include the linked import statement (can be generated using [Google Fonts](https://fonts.google.com/)).
Also, make sure to removed unused imports, they slow down page loading.

Edit this file with caution as it may be hard to maintain the overall design coherence while just changing a couple of values.

## Testing
New commits pushed to the `main` branch trigger a GitHub action wish builds and deploys the web site to [https://logion-network.github.io/logion-web-site/](https://logion-network.github.io/logion-web-site/).

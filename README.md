# Nuxt 3 Blog with Zod

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Create
```
pnpm dlx nuxi init nuxt3-app
# or
npx nuxi init nuxt-app
```

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## Dependencies
```bash
pnpm add -D @picocss/pico zod
```

## Deploy
Configure to `netlify` as example:
```bash
NITRO_PRESET=netlify pnpm build

# Deploy to netlify
ntl deploy
```


Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

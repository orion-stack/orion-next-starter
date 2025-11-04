# Deployment Guide

Learn how to deploy your Orion Next.js application to various platforms.

## Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your repository
4. Vercel will automatically detect it's a Next.js project
5. Click "Deploy" and your application will be live!

### Environment Variables

If you have environment variables, add them in the Vercel dashboard under Settings > Environment Variables.

## Netlify

1. Push your code to a Git repository
2. Go to [netlify.com](https://netlify.com) and create an account
3. Click "New site from Git"
4. Select your repository
5. For build settings, use:
   - Build command: `yarn build`
   - Publish directory: `out` (or leave empty for Next.js output)

## AWS Amplify

1. Push your code to a Git repository
2. Go to AWS Amplify Console
3. Connect your repository
4. In build settings, use:
   ```
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - yarn install
       build:
         commands:
           - yarn build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

## Docker Deployment

If you prefer containerized deployment:

### Dockerfile

```Dockerfile
FROM node:20-alpine AS base
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Build
FROM base AS builder
COPY . .
RUN yarn build

# Production
FROM base AS runtime
RUN addgroup -g 1001 -S nextjs
RUN adduser -u 1001 -S nextjs -G nextjs
COPY --from=builder --chown=nextjs:nextjs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nextjs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nextjs /app/public ./public

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME=0.0.0.0

CMD ["node", "server.js"]
```

## Environment Variables

Make sure to set the following environment variables for production:

- `NODE_ENV=production`
- Any API keys or secrets your application requires

## Build Command

The application uses the standard Next.js build command:

```bash
yarn build
```

## Start Command

To start the production server:

```bash
yarn start
```

## Static Export (if applicable)

If you want to export as a static site (without dynamic routes), you can add the following to your `next.config.ts`:

```ts
export default nextConfig = {
  // ... other config
  output: "export",
};
```

Then build with:

```bash
yarn build
```

This will create a `out/` directory with static files you can serve from any static hosting provider.

# build stage
FROM node:20-alpine AS builder

WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY package.json package-lock.json ./

RUN npm ci

COPY next.config.mjs tsconfig.json postcss.config.cjs tailwind.config.ts ./
COPY src ./src

RUN npm run build

# runtime stage
FROM node:20-alpine AS runtime

WORKDIR /app

RUN apk add --no-cache libc6-compat

ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

COPY --from=builder --chown=node:node /app/package.json /app/package-lock.json ./
COPY --from=builder --chown=node:node /app/node_modules ./node_modules
COPY --from=builder --chown=node:node /app/.next ./.next
COPY --from=builder --chown=node:node /app/next.config.mjs ./

USER node

EXPOSE 3000

CMD ["npm", "start"]

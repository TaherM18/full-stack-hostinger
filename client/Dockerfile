# Build Stage
FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

# Production Stage

FROM node:22-alpine

WORKDIR /app

RUN npm install -g serve

# ENV PATH="usr/local/bin:$PATH"   The serve package installed globally already places its executable on the default PATH in the official Node image, so that ENV PATH=... line isn't necessary.

COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
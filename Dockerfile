FROM public.ecr.aws/y2g0l9x0/node:14-alpine AS builder

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
ADD package*.json /usr/src/app/
RUN ls
RUN yarn install

# Copying source files
ADD . /usr/src/app

# Building app
RUN yarn run build

FROM public.ecr.aws/y2g0l9x0/distroless:nodejs-14
COPY --chown=1000:1000 --from=builder /usr/src/app /app
WORKDIR /app

USER 1000

# Running the app
CMD  ["./node_modules/next/dist/bin/next", "start"]
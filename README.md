# gvf-client

[![Build Status](https://travis-ci.org/ravenq/gvf-client.svg?branch=master)](https://travis-ci.org/ravenq/gvf-client)

> The client of gvf project.

## dev

install dependences.

```sh
yarn
```

config server url in ./nuxt.config.js

```js
// ...
axios: {
  baseURL: 'http://www.aqcoder.com:8080/v1'
}
// ...
```

run.

```sh
yarn dev
```

## run in node

```sh
yarn build
yarn start
```

## run in pm2

```sh
yarn global add pm2

pm2 start yarn --name "gvf-client" -- start
```

## docker

build

```sh
docker build -t gvf-client .
```

start a container.

```sh
docker run -d --name gvf-client -p 9977:9977 gvf-client
```

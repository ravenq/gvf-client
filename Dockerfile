FROM node:8-alpine

LABEL maintainer=ravenq<flw_dream@126.com>

# Copy sources
COPY . /gvf-client
WORKDIR /gvf-client

EXPOSE 3000

# build
RUN npm install -g yarn && yarn && yarn build

# launches
CMD ["npm", "start"]

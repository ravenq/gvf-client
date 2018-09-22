FROM node:8-alphine

LABEL maintainer=ravenq<flw_dream@126.com>

# Copy sources
COPY . /gvf-client
WORKDIR /gvf-client

EXPOSE 3000

# build
RUN npm install && npm run build

# launches
CMD ["npm run start"]

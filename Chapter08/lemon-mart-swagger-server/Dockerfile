FROM duluca/minimal-node-build-env:8.11.1

RUN mkdir -p /usr/src
WORKDIR /usr/src

COPY server .

RUN npm ci

CMD ["node", "index"]
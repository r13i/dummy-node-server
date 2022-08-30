FROM node:14-alpine3.12

WORKDIR /usr/local/app

COPY index.js .

CMD ["node", "index.js"]
FROM node:18
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./usr/src/app
# If you are building your code for production
# RUN npm ci --omit=dev

COPY . /usr/src/app
EXPOSE 8080

RUN npm install
CMD [ "node", "server.js" ]
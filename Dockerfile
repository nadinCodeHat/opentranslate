# pull the base image
FROM node:alpine

ENV NODE_ENV development

# set the working direction
WORKDIR /opentranslate

# add `/app/node_modules/.bin` to $PATH
ENV PATH /opentranslate/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./

COPY package-lock.json ./

RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start"]
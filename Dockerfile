#pull lateset
FROM node:latest

#set working directory
WORKDIR /opentranslate

ENV PATH="./node_modules/.bin:$PATH"

# copy app
COPY . .

RUN npm run build

# start app
CMD ["npm", "start"]

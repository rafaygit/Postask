FROM node:18

WORKDIR /postask
COPY package*.json /postask
RUN npm install
ADD . /postask
# COPY . .
RUN npm run build

CMD [ "npm", "run","start" ]

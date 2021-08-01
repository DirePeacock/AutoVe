FROM node:12 
WORKDIR E:/files/cod/AutoVe/dev_ave/src/
COPY package*.json ./ 
RUN npm install
COPY . . 
EXPOSE 8008
CMD [ "node", "server.js" ]
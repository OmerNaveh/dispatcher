FROM node:16-alpine
WORKDIR ./script
COPY ./package.json .
RUN npm install
COPY . .
CMD ["npm", "run", "populateDB"]
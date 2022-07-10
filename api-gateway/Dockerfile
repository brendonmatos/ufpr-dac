FROM node:16

WORKDIR /usr/src/app
COPY . .
RUN rm -rf node_modules
RUN npm install --only=production
CMD ["npm", "start"]

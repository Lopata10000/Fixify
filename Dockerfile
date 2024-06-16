FROM node:latest

WORKDIR /app

COPY ./src/frontend/package.json /app/
COPY ./src/frontend/ /app/

RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
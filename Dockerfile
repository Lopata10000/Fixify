

FROM node:16 as build-stage
WORKDIR /app
COPY src/frontend/package.json ./
RUN npm install
COPY src/frontend .
RUN npm run build
EXPOSE 3000
CMD["run", "npm", "serve"]


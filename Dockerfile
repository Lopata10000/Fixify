#FROM maven:3.9.6-amazoncorretto-17 AS build
#WORKDIR /app
#COPY pom.xml .
#COPY src ./src
#RUN mvn package
#
#FROM amazoncorretto:17
#COPY --from=build /app/target/*.jar fixify.jar
#EXPOSE 8080
#ENTRYPOINT ["java", "-jar", "fixify.jar"]
#

#FROM node:18.19.1 as build-stage
#WORKDIR /app
#COPY src/frontend/package.json ./
#RUN npm install
#COPY src/frontend .
#RUN npm run build


# production stage
#FROM nginx:stable-alpine as production-stage
#COPY --from=build-stage /app/frontend/dist /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
FROM node:16-buster AS build-stage
WORKDIR /app/frontend
RUN npm cache clean --force
COPY src/frontend/package*.json ./
RUN npm install -g @vue/cli
RUN npm install
COPY src/frontend/. .
RUN ls -la  # Перевірка файлів після копіювання
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "serve", "--", "--port", "3000", "--host", "0.0.0.0"]
FROM ubuntu:latest
RUN apt-get update && apt-get install -y nginx
COPY --from=frontend /app/frontend/dist /usr/share/nginx/html
EXPOSE 2000
CMD ["nginx", "-g", "daemon off;"]

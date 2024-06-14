FROM maven:3.9.6-amazoncorretto-17 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn package

FROM amazoncorretto:17
COPY --from=build /app/target/*.jar fixify.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "fixify.jar"]

# Додати frontend
FROM node:20.13.1 AS frontend
WORKDIR /app/frontend
RUN npm cache clean --force
COPY src/frontend/package*.json ./
RUN npm install -g @vue/cli
RUN npm install
COPY src/frontend/. .
RUN npm run build

# Копіювати зібраний frontend до директорії, доступної для веб-сервера
FROM ubuntu:latest
RUN apt-get update && apt-get install -y nginx
COPY --from=frontend /app/frontend/dist /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]

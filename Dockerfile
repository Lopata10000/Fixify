FROM maven:3.9.6-amazoncorretto-17 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn package

FROM amazoncorretto:17
COPY --from=build /app/target/*.jar fixify.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "fixify.jar"]
RUN apt-get update && apt-get install -y nodejs npm

# Copy frontend code
WORKDIR /app/frontend
#COPY src/frontend/package*.json ./
RUN npm install
COPY frontend. .

# Expose port 3000 for frontend
EXPOSE 3000

# Run frontend and backend together
CMD ["java", "-jar", "fixify.jar", "&", "npm", "start"]
## Додати frontend
#FROM node:20.13.1 AS frontend
#WORKDIR /app/frontend
#
## Очищення кешу npm
#RUN npm cache clean --force
#
## Копіювання package*.json і встановлення залежностей
#COPY src/frontend/package*.json ./
#RUN npm install
#
## Перевірка версій Node.js і npm
#RUN node -v
#RUN npm -v
#
## Копіювання всіх файлів і запуск збірки
#COPY src/frontend/. .
#RUN ls -la  # Перевірка файлів після копіювання
#RUN npm run build
#
## Копіювати зібраний frontend до директорії, доступної для веб-сервера
#FROM ubuntu:latest
#RUN apt-get update && apt-get install -y nginx
#COPY --from=frontend /app/frontend/dist /usr/share/nginx/html
#EXPOSE 3000
#CMD ["nginx", "-g", "daemon off;"]

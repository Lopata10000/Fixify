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
RUN ls -la  # Перевірка файлів після копіювання
RUN npm run build

FROM amazoncorretto:17
WORKDIR /app

# Копіюємо JAR файл Java-додатку з етапу збирання
COPY --from=build /app/target/*.jar fixify.jar

# Копіюємо зібрані файли фронтенду Vue.js з етапу збирання фронтенду
COPY --from=frontend /app/frontend/dist ./frontend-dist

# Встановлюємо потрібні порти
EXPOSE 8080
EXPOSE 3000

# Запускаємо Java-додаток на порту 8080 і Node.js на порту 3000
ENTRYPOINT ["java", "-jar", "fixify.jar"]
CMD ["npm", "start", "--prefix", "frontend-dist"]
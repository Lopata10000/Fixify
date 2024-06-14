FROM amazoncorretto:17
WORKDIR /app

# Копіюємо JAR файл Java-додатку з етапу збирання
COPY --from=build /app/target/*.jar fixify.jar

# Копіюємо зібрані файли фронтенду Vue.js з етапу збирання фронтенду
COPY --from=frontend /app/frontend/dist ./frontend-dist

# Встановлюємо needed порти
EXPOSE 8080
EXPOSE 3000

# Створюємо файл конфігурації supervisord
RUN echo "[supervisord]\n\
nodaemon=true\n\
[program:java]\n\
command=java -jar fixify.jar\n\
[program:node]\n\
command=npm run serve" > /etc/supervisor/supervisord.conf

# Встановлюємо supervisord
RUN apt-get update && apt-get install -y supervisor

# Запускаємо supervisord
CMD ["supervisord", "-c", "/etc/supervisor/supervisord.conf"]

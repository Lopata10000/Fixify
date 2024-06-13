
# Додати frontend
FROM node:20.13.1 AS frontend
WORKDIR /app/frontend
RUN npm cache clean --force
COPY src/frontend/package*.json ./
RUN npm install -g @vue/cli
RUN npm install
COPY src/frontend/. .
EXPOSE 3000
RUN npm run build
CMD ["npm", "run", "serve"]

FROM maven:3.9.6-amazoncorretto-17 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn package

FROM amazoncorretto:17
COPY --from=build /app/target/*.jar fixify.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "fixify.jar"]


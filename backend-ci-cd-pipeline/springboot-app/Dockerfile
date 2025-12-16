FROM eclipse-temurin:17-jre-jammy

WORKDIR /app

COPY target/devops-game.war app.war

EXPOSE 9090

ENTRYPOINT ["java", "-jar", "app.war"]

package com.fanta.fixify;

import org.flywaydb.core.Flyway;


public class MigrationFlyway implements DataBaseConfig {

    public static void main(String[] args) {
        Flyway flyway =
                Flyway.configure().dataSource(URL, USER, PASSWORD)
                        .locations("db/migration")
                        .baselineOnMigrate(true)
                        .load();
        flyway.migrate();
    }
}

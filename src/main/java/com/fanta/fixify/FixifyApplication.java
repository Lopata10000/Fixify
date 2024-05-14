package com.fanta.fixify;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration

@EnableTransactionManagement
@SpringBootApplication
public class FixifyApplication {

	public static void main(String[] args) {
		SpringApplication.run(FixifyApplication.class, args);
	}

}

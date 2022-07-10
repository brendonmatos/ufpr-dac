package com.bantads.clientes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class ClientesApplication {


	@RequestMapping("/")
	public String home() {
			return "Hello World! Hello from Spring Boot!";
	}

	public static void main(String[] args) {
		SpringApplication.run(ClientesApplication.class, args);
	}


}

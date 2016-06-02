package com.wth.parsnip;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class ParsnipApplication {

    public static void main(String[] args) {
        ApplicationContext ctx = SpringApplication.run(ParsnipApplication.class, args);
    }

}

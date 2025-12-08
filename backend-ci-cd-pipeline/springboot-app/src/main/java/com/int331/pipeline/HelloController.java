package com.int331.pipeline;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/")
    public String home() {
        return "Spring Boot is running successfully!";
    }

    @GetMapping("/hello")
    public String hello() {
        return "Hello Dipesh! Your first API is working!";
    }
}


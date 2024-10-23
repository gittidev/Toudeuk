package com.toudeuk.server.core.config;

import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

import java.time.Duration;

@Configuration
public class AppConfig {

    RestTemplateBuilder restTemplateBuilder = new RestTemplateBuilder();

    @Bean
    public RestTemplate restTemplate(RestTemplateBuilder builder) {
        return builder
                .setConnectTimeout(Duration.ofSeconds(200))
                .setReadTimeout(Duration.ofSeconds(200))
                .build();
    }
}

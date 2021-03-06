package com.wth.parsnip;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Value("${security.username}") 
    private String securityUsername;

    @Value("${security.password}") 
    private String securityPassword;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
        	.authorizeRequests()
            	.antMatchers("/assets/**").permitAll()
                .anyRequest().authenticated()
                .and()
                
            .formLogin()
                .loginPage("/login")
                .permitAll()
                .and()    
                
            .httpBasic()
                .and()
                
            .csrf()
                .disable();
    }
 
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication()
            .withUser(securityUsername)
                .password(securityPassword)
                .roles("USER");
    }
    
}
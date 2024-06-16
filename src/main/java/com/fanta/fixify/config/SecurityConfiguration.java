package com.fanta.fixify.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.LogoutHandler;

import static com.fanta.fixify.entity.Permission.*;
import static com.fanta.fixify.entity.Role.*;
import static org.springframework.security.config.Customizer.withDefaults;
import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableMethodSecurity
public class SecurityConfiguration {


    private static final String[] WHITE_LIST_URL = {"/",
            "/new-task",
            "/home",
            "/sign-up",
            "/log-in",
            "/sign-up",
            "/api/user/**",
            "/api/reviews/all",
            "/api/projects/all",
            "/api/towns/all",
            "/api/categories/all",
            "/api/specialistsНу і впринципі вдалось 1/all",
            "/api/user/**",
            "/v1/get-authority",
    };

    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;
    private final LogoutHandler logoutHandler;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors(withDefaults())
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(req ->
                        req.requestMatchers(WHITE_LIST_URL).permitAll()
                                .requestMatchers( "/api/users/**").hasAnyRole(ADMIN.name())
                                .requestMatchers( "/dashboard").hasAnyRole(ADMIN.name(), USER.name(), MANAGER.name())
                                .requestMatchers( "/create-review").hasAnyRole(ADMIN.name(), USER.name(), MANAGER.name())
                                .requestMatchers( "/new-task").hasAnyRole(ADMIN.name(), USER.name(), MANAGER.name())


                                .requestMatchers(HttpMethod.GET, "/api/projects/**").hasAnyRole(ADMIN.name(), USER.name(), MANAGER.name())
                                .requestMatchers(HttpMethod.POST, "/api/projects/**").hasAnyRole(ADMIN.name(), USER.name(), MANAGER.name())
                                .requestMatchers(HttpMethod.PUT, "/api/projects/**").hasAnyRole(ADMIN.name())
                                .requestMatchers(HttpMethod.DELETE, "/api/projects/**").hasAnyRole(ADMIN.name())

                                .requestMatchers("/api/**").hasAnyRole(ADMIN.name())

                                .requestMatchers(HttpMethod.GET, "/api/reviews/**").permitAll()
                                .requestMatchers(HttpMethod.POST, "/api/reviews/**").hasAnyRole(ADMIN.name(), USER.name(), MANAGER.name())
                                .requestMatchers(HttpMethod.PUT, "/api/reviews/**").hasAnyRole(ADMIN.name())
                                .requestMatchers(HttpMethod.DELETE, "/api/reviews/**").hasAnyRole(ADMIN.name())

                                .requestMatchers(HttpMethod.GET, "/api/towns/all").permitAll()
                                .requestMatchers(HttpMethod.POST, "/api/towns/**").hasAnyRole(ADMIN.name())
                                .requestMatchers(HttpMethod.PUT, "/api/towns/**").hasAnyRole(ADMIN.name())
                                .requestMatchers(HttpMethod.DELETE, "/api/towns/**").hasAnyRole(ADMIN.name())

                                .requestMatchers(HttpMethod.GET, "/api/categories/**").permitAll()
                                .requestMatchers(HttpMethod.POST, "/api/categories/**").hasAnyRole(ADMIN.name())
                                .requestMatchers(HttpMethod.PUT, "/api/categories/**").hasAnyRole(ADMIN.name())
                                .requestMatchers(HttpMethod.DELETE, "/api/categories/**").hasAnyRole(ADMIN.name())

                                .requestMatchers(HttpMethod.GET, "/api/specialists/**").permitAll()
                                .requestMatchers(HttpMethod.POST, "/api/specialists/**").hasAnyRole(ADMIN.name(), USER.name(), MANAGER.name())
                                .requestMatchers(HttpMethod.PUT, "/api/specialists/**").hasAnyRole(ADMIN.name())
                                .requestMatchers(HttpMethod.DELETE, "/api/specialists/**").hasAnyRole(ADMIN.name())

                                .requestMatchers( "/api/review/**").hasAnyRole(ADMIN.name(), USER.name(), MANAGER.name())
                                .requestMatchers( "/api/users/**").hasAnyRole(ADMIN.name())
                                .requestMatchers( "/admin-panel").hasAnyRole(ADMIN.name())

                )

                .sessionManagement(session -> session.sessionCreationPolicy(STATELESS))
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
                .logout(logout ->
                        logout.logoutUrl("/v1/logout")
                                .addLogoutHandler(logoutHandler)
                                .logoutSuccessHandler((request, response, authentication) -> SecurityContextHolder.clearContext())
                )

        ;

        return http.build();
    }

}

package com.fanta.fixify.controller;

import com.fanta.fixify.config.JwtService;
import com.fanta.fixify.entity.User;
import com.fanta.fixify.service.UserService;
import com.fanta.fixify.token.TokenRepository;
import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;


@RestController
@RequestMapping("/v1")
public class RoleBasedController {

    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;
    private final UserService userService;
    private final TokenRepository tokenRepository;

    public RoleBasedController(JwtService jwtService, UserDetailsService userDetailsService, UserService userService, TokenRepository tokenRepository) {
        this.jwtService = jwtService;
        this.userDetailsService = userDetailsService;
        this.userService = userService;
        this.tokenRepository = tokenRepository;
    }

    @GetMapping("/get-authority")
    public String getRoleBasedValue(HttpServletRequest request) throws Exception {
        String authHeader = request.getHeader("Authorization");
        String token = authHeader.substring(7);



        var isTokenValid = tokenRepository.findByToken(token)
                .map(t -> !t.isExpired() && !t.isRevoked())
                .orElse(false) && !jwtService.isTokenExpired(token);
        if (!isTokenValid) {
            return "NONE";
        }
        String userEmail = jwtService.extractUsername(token);
        UserDetails userDetails = this.userDetailsService.loadUserByUsername(userEmail);

        // Вилучення ролі з токена
        String role = userDetails.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .filter(authority -> authority.startsWith("ROLE_"))
                .findFirst()
                .orElse("ROLE_UNKNOWN");
        return switch (role) {
            case "ROLE_ADMIN" -> "ADMIN";
            case "ROLE_MANAGER" -> "MANAGER";
            case "ROLE_USER" -> "USER";
            default -> throw new Exception("NONE");
        };
    }

    @GetMapping("/get-authority/id")
    public Long getUserId(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");
        String token = authHeader.substring(7);



        var isTokenValid = tokenRepository.findByToken(token)
                .map(t -> !t.isExpired() && !t.isRevoked())
                .orElse(false) && !jwtService.isTokenExpired(token);
        if (!isTokenValid) {
            return null;
        }
        String userEmail = jwtService.extractUsername(token);
        Optional<User> optionalUser = userService.findByEmail(userEmail);

        if (optionalUser.isEmpty()) {
            return null;
        }
        User user = optionalUser.get();
        return user.getId();

    }
    @ExceptionHandler(ExpiredJwtException.class)
    public String handleExpiredJwtException(ExpiredJwtException ex) {
        return "NONE";
    }
}

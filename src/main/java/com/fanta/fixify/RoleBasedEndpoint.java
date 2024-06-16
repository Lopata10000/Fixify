package com.fanta.fixify;

import com.fanta.fixify.config.JwtService;
import com.fanta.fixify.token.TokenRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/v1")
public class RoleBasedEndpoint {

    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;
    private final TokenRepository tokenRepository;


    public RoleBasedEndpoint(JwtService jwtService, UserDetailsService userDetailsService, TokenRepository tokenRepository) {
        this.jwtService = jwtService;
        this.userDetailsService = userDetailsService;
        this.tokenRepository = tokenRepository;
    }

    @GetMapping("/get-authority")
    public String getRoleBasedValue( HttpServletRequest request) throws Exception {
         String authHeader = request.getHeader("Authorization");
         String token =  authHeader.substring(7);;


        var isTokenValid = tokenRepository.findByToken(token)
                .map(t -> !t.isExpired() && !t.isRevoked())
                .orElse(false);
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
}

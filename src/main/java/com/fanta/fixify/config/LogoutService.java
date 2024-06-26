package com.fanta.fixify.config;

import com.fanta.fixify.token.TokenMapper;
import com.fanta.fixify.token.TokenRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LogoutService implements LogoutHandler {

    private final TokenRepository tokenRepository;
    private final TokenMapper tokenMapper;

    @Override
    public void logout(
            HttpServletRequest request,
            HttpServletResponse response,
            Authentication authentication
    ) {
        final String authHeader = request.getHeader("Authorization");
        final String jwt;
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return;
        }
        jwt = authHeader.substring(7);
        var storedTokenOpt = tokenRepository.findByToken(jwt);
        if (storedTokenOpt.isPresent()) {
            var storedToken = storedTokenOpt.get();
            storedToken.setExpired(true);
            storedToken.setRevoked(true);
            tokenRepository.deleteById(storedToken.getId());
            tokenRepository.save(tokenMapper.toEntity(storedToken));
            SecurityContextHolder.clearContext();
        }
    }
}

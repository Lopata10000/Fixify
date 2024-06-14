package com.fanta.fixify.token;

import com.fanta.fixify.repository.UserRepository;
import org.springframework.stereotype.Component;

@Component
public class TokenMapper {

    private final UserRepository userRepository;

    public TokenMapper(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public TokenDTO toDto(Token token) {
        TokenDTO dto = new TokenDTO();
        dto.setToken(token.getToken());
        dto.setExpired(token.isExpired());
        dto.setRevoked(token.isRevoked());
        return dto;
    }

    public Token toEntity(TokenDTO dto) {
        Token token = new Token();
        token.setToken(dto.getToken());
        token.setExpired(dto.isExpired());
        token.setRevoked(dto.isRevoked());
        token.setUser(userRepository.getReferenceById(dto.getUserId()));
        return token;
    }
}

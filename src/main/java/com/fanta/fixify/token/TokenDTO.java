package com.fanta.fixify.token;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TokenDTO {
    private Integer id;
    private String token;
    private TokenType tokenType;
    private boolean revoked;
    private boolean expired;
    private Long userId;


}
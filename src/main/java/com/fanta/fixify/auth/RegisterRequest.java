package com.fanta.fixify.auth;

import com.fanta.fixify.entity.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    private String email;
    private String password;
    private String address;
    private String phoneNumber;
    private String fullName;
    private Role role;
}

package com.fanta.fixify.service;

import com.fanta.fixify.entity.User;
import com.fanta.fixify.exception.CustomAuthenticationException;
import com.fanta.fixify.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public User createUser(User user) {
        if (!isEmailPresent(user.getEmail())) {
            throw new CustomAuthenticationException("Електронна адреса уже використовується.");
        }
        return userRepository.save(user);
    }

    public User updateUser(Long id, User updatedUser) {
        Optional<User> existingUser = userRepository.findById(id);
        if (existingUser.isPresent()) {
            updatedUser.setId(id);
            return userRepository.save(updatedUser);
        }
        return null; // or throw exception
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
    public boolean isEmailPresent(String email) {
        return !userRepository.findByEmail(email).isPresent();
    }
}

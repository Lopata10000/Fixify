package com.fanta.fixify.service;

import com.fanta.fixify.entity.UserProfile;
import com.fanta.fixify.repository.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserProfileService {

    private final UserProfileRepository userProfileRepository;

    @Autowired
    public UserProfileService(UserProfileRepository userProfileRepository) {
        this.userProfileRepository = userProfileRepository;
    }

    public List<UserProfile> getAllUserProfiles() {
        return userProfileRepository.findAll();
    }

    public Optional<UserProfile> getUserProfileById(Long id) {
        return userProfileRepository.findById(id);
    }

    public UserProfile createUserProfile(UserProfile userProfile) {
        return userProfileRepository.save(userProfile);
    }

    public UserProfile updateUserProfile(Long id, UserProfile updatedProfile) {
        Optional<UserProfile> existingProfile = userProfileRepository.findById(id);
        if (existingProfile.isPresent()) {
            updatedProfile.setId(id);
            return userProfileRepository.save(updatedProfile);
        }
        return null; // or throw exception
    }

    public void deleteUserProfile(Long id) {
        userProfileRepository.deleteById(id);
    }
}

package com.fanta.fixify.controller;

import com.fanta.fixify.entity.UserProfile;
import com.fanta.fixify.service.UserProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user-profiles")
public class UserProfileController {

    private final UserProfileService userProfileService;

    @Autowired
    public UserProfileController(UserProfileService userProfileService) {
        this.userProfileService = userProfileService;
    }

    @GetMapping
    public List<UserProfile> getAllUserProfiles() {
        return userProfileService.getAllUserProfiles();
    }

    @GetMapping("/{id}")
    public UserProfile getUserProfileById(@PathVariable Long id) {
        return userProfileService.getUserProfileById(id)
                .orElse(null); // or throw exception
    }

    @PostMapping
    public UserProfile createUserProfile(@RequestBody UserProfile userProfile) {
        return userProfileService.createUserProfile(userProfile);
    }

    @PutMapping("/{id}")
    public UserProfile updateUserProfile(@PathVariable Long id, @RequestBody UserProfile updatedProfile) {
        return userProfileService.updateUserProfile(id, updatedProfile);
    }

    @DeleteMapping("/{id}")
    public void deleteUserProfile(@PathVariable Long id) {
        userProfileService.deleteUserProfile(id);
    }
}

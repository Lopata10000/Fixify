package com.fanta.fixify.controller;

import com.fanta.fixify.entity.Project;
import com.fanta.fixify.entity.User;
import com.fanta.fixify.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    private final ProjectService projectService;

    @Autowired
    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping("/all")
    public List<Project> getAllProjects() {
        return projectService.getAllProjects();
    }

    @GetMapping("/{id}")
    public Project getProjectById(@PathVariable Long id) {
        return projectService.getProjectById(id)
                .orElse(null); // or throw exception
    }

    @GetMapping("/user/{user_id}/active")
    public List<Project> getActiveProjectsByUser(@PathVariable Long user_id) {
        User user = new User(user_id);
        return projectService.getActiveProjectsByUser(user);
    }

    @GetMapping("/user/{user_id}/await")
    public List<Project> getAwaitProjectsByUser(@PathVariable Long user_id) {
        User user = new User(user_id);
        return projectService.getAwaitProjectsByUser(user);
    }

    @GetMapping("/user/{user_id}/archive")
    public List<Project> getArchiveProjectsByUser(@PathVariable Long user_id) {
        User user = new User(user_id);
        return projectService.getArchiveProjectsByUser(user);
    }

    @PostMapping
    public Project createProject(@RequestBody Project project) {
        return projectService.createProject(project);
    }

    @PutMapping("/{id}")
    public Project updateProject(@PathVariable Long id, @RequestBody Project updatedProject) {
        return projectService.updateProject(id, updatedProject);
    }

    @DeleteMapping("/{id}")
    public void deleteProject(@PathVariable Long id) {
        projectService.deleteProject(id);
    }
}

package com.fanta.fixify.service;

import com.fanta.fixify.entity.Project;
import com.fanta.fixify.entity.User;
import com.fanta.fixify.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    @Autowired
    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public Optional<Project> getProjectById(Long id) {
        return projectRepository.findById(id);
    }
    public List<Project> getActiveProjectsByUser(User user) {
        return projectRepository.findByUserIdAndStatus(user, "В роботі");
    }
    public List<Project> getAwaitProjectsByUser(User user) {
        return projectRepository.findByUserIdAndStatus(user, "Очікує");
    }
    public List<Project> getArchiveProjectsByUser(User user) {
        return projectRepository.findByUserIdAndStatus(user, "Виконано");
    }

    public Project createProject(Project project) {
        return projectRepository.save(project);
    }

    public Project updateProject(Long id, Project updatedProject) {
        Optional<Project> existingProject = projectRepository.findById(id);
        if (existingProject.isPresent()) {
            updatedProject.setId(id);
            return projectRepository.save(updatedProject);
        }
        return null; // or throw exception
    }

    public void deleteProject(Long id) {
        projectRepository.deleteById(id);
    }
}

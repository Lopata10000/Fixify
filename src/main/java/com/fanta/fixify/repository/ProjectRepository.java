package com.fanta.fixify.repository;

import com.fanta.fixify.entity.Project;
import com.fanta.fixify.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
     List<Project> findByUserIdAndStatus(User userId, String status);

}
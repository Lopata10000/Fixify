package com.fanta.fixify.repository;

import com.fanta.fixify.entity.SpecialistCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpecialistCategoryRepository extends JpaRepository<SpecialistCategory, Long> {
}
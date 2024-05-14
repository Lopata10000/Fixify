package com.fanta.fixify.service;


import com.fanta.fixify.entity.SpecialistCategory;
import com.fanta.fixify.repository.SpecialistCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SpecialistCategoryService {

    private final SpecialistCategoryRepository specialistCategoryRepository;

    @Autowired
    public SpecialistCategoryService(SpecialistCategoryRepository specialistCategoryRepository) {
        this.specialistCategoryRepository = specialistCategoryRepository;
    }

    public List<SpecialistCategory> getAllSpecialistCategories() {
        return specialistCategoryRepository.findAll();
    }

    public Optional<SpecialistCategory> getSpecialistCategoryById(Long id) {
        return specialistCategoryRepository.findById(id);
    }

    public SpecialistCategory createSpecialistCategory(SpecialistCategory specialistCategory) {
        return specialistCategoryRepository.save(specialistCategory);
    }

    public SpecialistCategory updateSpecialistCategory(Long id, SpecialistCategory updatedCategory) {
        Optional<SpecialistCategory> existingCategory = specialistCategoryRepository.findById(id);
        if (existingCategory.isPresent()) {
            updatedCategory.setId(id);
            return specialistCategoryRepository.save(updatedCategory);
        }
        return null; // or throw exception
    }

    public void deleteSpecialistCategory(Long id) {
        specialistCategoryRepository.deleteById(id);
    }
}


package com.fanta.fixify.controller;

import com.fanta.fixify.entity.SpecialistCategory;
import com.fanta.fixify.service.SpecialistCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/specialist-categories")
public class SpecialistCategoryController {

    private final SpecialistCategoryService specialistCategoryService;

    @Autowired
    public SpecialistCategoryController(SpecialistCategoryService specialistCategoryService) {
        this.specialistCategoryService = specialistCategoryService;
    }

    @GetMapping
    public List<SpecialistCategory> getAllSpecialistCategories() {
        return specialistCategoryService.getAllSpecialistCategories();
    }

    @GetMapping("/{id}")
    public SpecialistCategory getSpecialistCategoryById(@PathVariable Long id) {
        return specialistCategoryService.getSpecialistCategoryById(id)
                .orElse(null); // or throw exception
    }

    @PostMapping
    public SpecialistCategory createSpecialistCategory(@RequestBody SpecialistCategory specialistCategory) {
        return specialistCategoryService.createSpecialistCategory(specialistCategory);
    }

    @PutMapping("/{id}")
    public SpecialistCategory updateSpecialistCategory(@PathVariable Long id, @RequestBody SpecialistCategory updatedCategory) {
        return specialistCategoryService.updateSpecialistCategory(id, updatedCategory);
    }

    @DeleteMapping("/{id}")
    public void deleteSpecialistCategory(@PathVariable Long id) {
        specialistCategoryService.deleteSpecialistCategory(id);
    }
}

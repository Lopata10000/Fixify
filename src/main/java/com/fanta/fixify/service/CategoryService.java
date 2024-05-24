package com.fanta.fixify.service;


import com.fanta.fixify.entity.Category;
import com.fanta.fixify.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    private final CategoryRepository CategoryRepository;

    @Autowired
    public CategoryService(CategoryRepository CategoryRepository) {
        this.CategoryRepository = CategoryRepository;
    }

    public List<Category> getAllCategories() {
        return CategoryRepository.findAll();
    }

    public Optional<Category> getCategoryById(Long id) {
        return CategoryRepository.findById(id);
    }

    public Category createCategory(Category Category) {
        return CategoryRepository.save(Category);
    }

    public Category updateCategory(Long id, Category updatedCategory) {
        Optional<Category> existingCategory = CategoryRepository.findById(id);
        if (existingCategory.isPresent()) {
            updatedCategory.setId(id);
            return CategoryRepository.save(updatedCategory);
        }
        return null; // or throw exception
    }

    public void deleteCategory(Long id) {
        CategoryRepository.deleteById(id);
    }
}

